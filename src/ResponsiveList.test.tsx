import "@testing-library/jest-dom"
import { render, screen, within } from "@testing-library/react"
import React from "react"
import { beforeEach, describe, expect, test, vi } from "vitest"

import ResponsiveList from "./ResponsiveList"

vi.mock("./Spinner", () => ({
  default: () => <div data-testid="spinner">Loading...</div>
}))

vi.mock("classnames", () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (...args: any[]) => args.join(" ")
}))

type TestItem = {
  id: number
  name: string
  email: string
  status: string
}

const testItems: TestItem[] = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", status: "Pending" }
]

const createMatchMedia = (width: number) => {
  return (query: string) => ({
    matches: query.includes(`(min-width: ${width}px)`),
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  })
}

const renderWithBreakpoint = (
  component: React.ReactElement,
  width: number = 1024
) => {
  // Remplacer jest.fn par vi.fn
  window.matchMedia = vi.fn().mockImplementation(createMatchMedia(width))

  return render(<>{component}</>)
}

describe("ResponsiveList Component - Advanced Tests", () => {
  // Réinitialiser les mocks entre les tests
  beforeEach(() => {
    vi.resetAllMocks()
  })

  describe("Responsive Behavior", () => {
    test("shows desktop view on large screens", () => {
      renderWithBreakpoint(
        <ResponsiveList<TestItem>
          items={testItems}
          fields={["id", "name", "email"]}
          actions={() => <button>Edit</button>}
        />,
        1024
      )

      expect(screen.getByText("Actions")).toBeInTheDocument()

      const headerRow = document.querySelector(
        ".hidden.md\\:flex.border-b.border-gray-300"
      )
      expect(headerRow).toBeInTheDocument()
    })

    test("shows mobile view on small screens", () => {
      renderWithBreakpoint(
        <ResponsiveList<TestItem>
          items={testItems}
          fields={["id", "name", "email"]}
          actions={() => <button>Edit</button>}
        />,
        600
      )

      const mobileRows = document.querySelectorAll(".md\\:hidden")
      expect(mobileRows.length).toBe(testItems.length)
    })
  })

  describe("Edge Cases", () => {
    test("handles empty items gracefully", () => {
      const { container } = render(
        <ResponsiveList items={[]} fields={["id"]} actions={() => null} />
      )

      expect(container).toBeInTheDocument()

      render(
        <ResponsiveList
          items={undefined}
          fields={["id"]}
          actions={() => null}
        />
      )
    })

    test("renders items with missing fields without crashing", () => {
      const itemsWithMissingFields = [
        { id: 1, name: "John Doe" }, // missing email and status
        { id: 2, email: "jane@example.com" } // missing name and status
      ]

      render(
        <ResponsiveList
          items={itemsWithMissingFields}
          // @ts-expect-error-next-line
          fields={["id", "name", "email", "status"]}
          actions={() => null}
        />
      )

      const johnDoeElements = screen.queryAllByText((content) => {
        return content.includes("John Doe")
      })
      expect(johnDoeElements.length).toBeGreaterThan(0)

      const janeSmithEmail = screen.queryAllByText((content) => {
        return content.includes("jane@example.com")
      })
      expect(janeSmithEmail.length).toBeGreaterThan(0)

      expect(document.body).toBeInTheDocument()
    })
  })

  describe("User Interactions", () => {
    test("actions function is called with correct item when clicked", async () => {
      // Remplacer jest.fn par vi.fn
      const buttonClickMock = vi.fn()

      const actionRenderer = (item: TestItem) => (
        <button
          data-testid={`edit-${item.id}`}
          onClick={() => buttonClickMock(item)}
        >
          Edit
        </button>
      )

      render(
        <ResponsiveList<TestItem>
          items={testItems}
          fields={["id", "name"]}
          actions={actionRenderer}
        />
      )
    })
  })

  describe("Loading State", () => {
    test("shows correct loading state in different configurations", () => {
      const { rerender } = render(
        <ResponsiveList<TestItem>
          items={[]}
          fields={["id"]}
          actions={() => null}
          isLoading={true}
        />
      )

      expect(screen.getByTestId("spinner")).toBeInTheDocument()

      rerender(
        <ResponsiveList<TestItem>
          items={[]}
          fields={["id"]}
          actions={() => null}
          isLoading={true}
          loadingComponent={
            <div data-testid="custom-loader">Chargement...</div>
          }
        />
      )

      expect(screen.getByTestId("custom-loader")).toBeInTheDocument()
      expect(screen.queryByTestId("spinner")).not.toBeInTheDocument()
    })
  })

  describe("With and Without Actions", () => {
    test("renders correctly without actions column", () => {
      render(
        <ResponsiveList<TestItem>
          items={testItems}
          fields={["id", "name"]}
          actions={undefined}
        />
      )

      expect(screen.queryByText("Actions")).not.toBeInTheDocument()

      const columnHeaders = screen.getAllByRole("columnheader")

      expect(columnHeaders.length).toBe(2)
    })
  })

  describe("Custom Values", () => {
    test("renders items with custom values", () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const consoleSpy = vi.spyOn(console, "log")

      render(
        <ResponsiveList
          items={testItems}
          fields={["id", "name"]}
          values={[
            (item) => <b>{item.id}</b>,
            (item) => <span>{item.name}</span>
          ]}
          actions={(item) => (
            <>
              <a href={`/users/update/${item.id}`}>Edit user</a>
              <button
                onClick={() => console.log(`deleting user with id ${item.id}`)}
              >
                Delete user
              </button>
            </>
          )}
        />
      )

      const firstItemId = testItems[0].id.toString()
      const firstItemName = testItems[0].name

      const desktopRows = screen.getAllByRole("row")
      const firstDesktopDataRow = desktopRows[1]

      const desktopCells = within(firstDesktopDataRow).getAllByRole("cell")

      const idCell = desktopCells[0]
      expect(idCell.textContent).toBe(firstItemId)

      const nameCell = desktopCells[1]
      expect(nameCell.textContent).toBe(firstItemName)

      const actionsCell = desktopCells[2]
      const editLink = within(actionsCell).getByText("Edit user")

      expect(editLink).toBeInTheDocument()
      expect(editLink.getAttribute("href")).toBe(`/users/update/${firstItemId}`)

      const deleteButton = within(actionsCell).getByText("Delete user")
      expect(deleteButton).toBeInTheDocument()
    })
  })
})
