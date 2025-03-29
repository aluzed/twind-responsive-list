import { Meta, StoryObj } from "@storybook/react"
import React from "react"

import ResponsiveList from "../../src/ResponsiveList"

const meta: Meta<typeof ResponsiveList> = {
  title: "Components/ResponsiveList",
  component: ResponsiveList,
  parameters: {
    layout: "padded"
  },
  argTypes: {
    lineClassNameEven: { control: "text" },
    lineClassNameOdd: { control: "text" },
    hideLabelsMobile: { control: "boolean" },
    isLoading: { control: "boolean" }
  }
}

export default meta
type Story = StoryObj<typeof ResponsiveList<SampleItem>>

type SampleItem = {
  id: number
  name: string
  email: string
  status: string
}

const sampleData: SampleItem[] = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", status: "Pending" },
  {
    id: 4,
    name: "Alice Williams",
    email: "alice@example.com",
    status: "Active"
  }
]

export const Default: Story = {
  args: {
    items: sampleData,
    fields: ["id", "name", "email", "status"],
    actions: () => (
      <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
        Edit
      </button>
    )
  }
}

export const CustomRowStyles: Story = {
  args: {
    ...Default.args,
    lineClassNameEven: "bg-blue-50",
    lineClassNameOdd: "bg-gray-50"
  }
}

export const CustomRenderers: Story = {
  args: {
    ...Default.args,
    values: [
      (item) => <span className="font-bold">#{item.id}</span>,
      (item) => <span>{item.name}</span>,
      (item) => (
        <a
          href={`mailto:${item.email}`}
          className="text-blue-500 hover:underline"
        >
          {item.email}
        </a>
      ),
      (item) => {
        const statusClasses = {
          Active: "bg-green-100 text-green-800",
          Inactive: "bg-red-100 text-red-800",
          Pending: "bg-yellow-100 text-yellow-800"
        }
        return (
          <span
            className={`px-2 py-1 rounded-full text-xs ${statusClasses[item.status as keyof typeof statusClasses] || ""}`}
          >
            {item.status}
          </span>
        )
      }
    ]
  }
}

export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true
  }
}

export const WithoutActions: Story = {
  args: {
    items: sampleData,
    fields: ["id", "name", "email", "status"]
  }
}

export const CustomLabels: Story = {
  args: {
    ...Default.args,
    labels: ["ID", "Nom Complet", "Adresse Email", "Statut"]
  }
}
