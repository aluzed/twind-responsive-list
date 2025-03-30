import cn from "classnames"
import React from "react"

import Spinner from "./Spinner"

type ResponsiveListProps<T> = {
  items?: T[]
  values?: ((item: T) => React.ReactNode)[]
  labels?: string[]
  fields: (keyof T)[]
  actions?: (item: T) => React.ReactNode
  hideLabelsMobile?: boolean
  isLoading?: boolean
  loadingComponent?: React.ReactNode
  lineClassNameEven?: string
  lineClassNameOdd?: string
}

const ResponsiveListHeader = <T,>({
  fields,
  hasActions,
  lineClassNameOdd
}: {
  fields: (keyof T)[] | string[]
  hasActions: boolean
  lineClassNameEven?: string
  lineClassNameOdd?: string
}) => {
  const columnWidth = 100 / (fields.length + (hasActions ? 1 : 0))

  return (
    <div
      className={cn(
        "responsive-list-header-row w-full hidden md:flex border-b font-semibold",
        lineClassNameOdd ?? "",
        {
          "border-gray-300  bg-gray-100": !lineClassNameOdd
        }
      )}
      role="row"
    >
      {fields.map((field) => (
        <div
          key={field.toString()}
          className={cn("responsive-list-header-col p-3")}
          style={{ width: `${columnWidth}%` }}
          role="columnheader"
        >
          {field.toString()}
        </div>
      ))}
      {hasActions && (
        <div
          className="responsive-list-header-col p-3 text-right"
          style={{ width: `${columnWidth}%` }}
          role="columnheader"
        >
          Actions
        </div>
      )}
    </div>
  )
}

const ResponsiveList = <T,>({
  isLoading = false,
  items = [],
  values,
  labels,
  fields,
  actions,
  hideLabelsMobile = false,
  loadingComponent,
  lineClassNameEven,
  lineClassNameOdd
}: ResponsiveListProps<T>) => {
  // eslint-disable-next-line no-extra-boolean-cast
  const columnWidth = 100 / (fields.length + (Boolean(actions) ? 1 : 0))

  return (
    <div
      className="responsive-list-container flex flex-col w-full"
      role="table"
    >
      <ResponsiveListHeader
        fields={labels ?? fields}
        hasActions={Boolean(actions)}
        lineClassNameEven={lineClassNameEven}
        lineClassNameOdd={lineClassNameOdd}
      />

      {isLoading && (
        <div className="responsive-list-loading-container flex justify-center items-center my-2">
          {loadingComponent ? loadingComponent : <Spinner />}
        </div>
      )}

      {!isLoading &&
        items?.map?.((item, itemIndex) => (
          <React.Fragment key={itemIndex}>
            {/* Desktop */}
            <div
              className={cn(
                "responsive-list-row-desktop-row hidden md:flex items-center border-b dark:text-white hover-row",
                {
                  "border-gray-200 hover:bg-gray-100 dark:bg-gray-100 dark:hover:bg-gray-200":
                    !lineClassNameOdd && itemIndex % 2 !== 0,
                  "border-white hover:bg-gray-100 dark:bg-gray-200 dark:hover:bg-gray-300":
                    !lineClassNameOdd && itemIndex % 2 === 0,
                  lineClassNameOdd:
                    Boolean(lineClassNameOdd) && itemIndex % 2 !== 0,
                  lineClassNameEven:
                    Boolean(lineClassNameEven) && itemIndex % 2 === 0
                }
              )}
              role="row"
            >
              {fields.map((field, fieldIndex) => (
                <div
                  key={field.toString()}
                  className="responsive-list-row-desktop-col p-3 truncate row-cell"
                  style={{ width: `${columnWidth}%` }}
                  role="cell"
                >
                  {values
                    ? values?.[fieldIndex]?.(item)
                    : item[field] !== undefined
                      ? String(item[field])
                      : null}
                </div>
              ))}
              {actions && (
                <div
                  className="responsive-list-row-desktop-col p-3 flex justify-end row-cell"
                  style={{ width: `${columnWidth}%` }}
                  role="cell"
                >
                  {actions(item)}
                </div>
              )}
            </div>

            {/* Mobile */}
            <div
              className={cn(
                "responsive-list-row-mobile-block md:hidden rounded-lg shadow-sm mb-4 p-4 relative",
                {
                  "border-gray-200 hover:bg-gray-50":
                    !lineClassNameOdd && itemIndex % 2 !== 0,
                  "border-white hover:bg-gray-50":
                    !lineClassNameEven && itemIndex % 2 === 0,
                  lineClassNameOdd:
                    Boolean(lineClassNameOdd) && itemIndex % 2 !== 0,
                  lineClassNameEven:
                    Boolean(lineClassNameEven) && itemIndex % 2 === 0
                }
              )}
            >
              <div className="space-y-2">
                {fields.map((field, fieldIndex) => (
                  <div key={field.toString()} className="flex">
                    {!hideLabelsMobile && (
                      <span className="responsive-list-row-mobile-label text-sm text-gray-500 mr-2 min-w-[120px]">
                        {field.toString()}:
                      </span>
                    )}
                    <span className="responsive-list-row-mobile-value text-gray-800">
                      {values
                        ? values?.[fieldIndex]?.(item)
                        : item[field] !== undefined
                          ? String(item[field])
                          : null}
                    </span>
                  </div>
                ))}
              </div>

              {actions && (
                <div className="responsive-list-row-mobile-actions mt-4 border-t border-gray-100 pt-4 flex justify-end">
                  {actions(item)}
                </div>
              )}
            </div>
          </React.Fragment>
        ))}
    </div>
  )
}

export default ResponsiveList
