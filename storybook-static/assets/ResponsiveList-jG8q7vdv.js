import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-B8rYRX2K.js";import{M as o,C as i,a as r}from"./index-BetwT9wT.js";import{R as l,D as d,C as c,a as m,L as p}from"./ResponsiveList.stories-CgfhQQ7c.js";import"./index-D4lIrffr.js";import"./iframe-DsZ2M-lb.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function t(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:l}),`
`,n.jsx(e.h1,{id:"responsivelist",children:"ResponsiveList"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"ResponsiveList"})," component is an adaptive table that displays properly on all devices. It offers a classic column-based desktop view and an optimized card-based mobile view."]}),`
`,n.jsx(e.h2,{id:"key-features",children:"Key Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Responsive design"})," - Automatically adapts display between desktop and mobile screens"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Style customization"})," - Allows customization of even and odd row styles"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Custom rendering"})," - Enables defining custom rendering for each cell"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Configurable actions"})," - Ability to add action buttons for each row"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Loading state"})," - Display of a customizable loading indicator"]}),`
`]}),`
`,n.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# With npm
npm install twind-responsive-list

# With yarn
yarn add twind-responsive-list

# With bun
bun add twind-responsive-list

`})}),`
`,n.jsx(e.h2,{id:"react-component",children:"React Component"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { ResponsiveList } from "twind-responsive-list"

const MyComponent = () => {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive" }
  ]

  return (
    <ResponsiveList
      items={users}
      fields={["id", "name", "email", "status"]}
      actions={(user) => (
        <button onClick={() => handleEdit(user.id)}>Edit</button>
      )}
    />
  )
}
`})}),`
`,n.jsx(e.h3,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h4,{id:"default-view",children:"Default View"}),`
`,n.jsx(i,{of:d}),`
`,n.jsx(e.h4,{id:"custom-row-styles",children:"Custom Row Styles"}),`
`,n.jsx(i,{of:c}),`
`,n.jsx(e.h4,{id:"custom-cell-rendering",children:"Custom Cell Rendering"}),`
`,n.jsx(i,{of:m}),`
`,n.jsx(e.h4,{id:"loading-state",children:"Loading State"}),`
`,n.jsx(i,{of:p}),`
`,n.jsx(e.h4,{id:"props",children:"Props"}),`
`,n.jsx(r,{}),`
`,n.jsx(e.h3,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,n.jsx(e.p,{children:"The ResponsiveList component automatically adapts to screen size:"}),`
`,n.jsx(e.p,{children:`On large screens (≥ md breakpoint), it displays as a standard table
On small screens (< md breakpoint), it displays as a list of cards for each item`}),`
`,n.jsx(e.h3,{id:"advanced-usage",children:"Advanced Usage"}),`
`,n.jsx(e.h4,{id:"custom-cell-rendering-1",children:"Custom Cell Rendering"}),`
`,n.jsx(e.p,{children:"For complete control over cell rendering, use the values prop:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<ResponsiveList
  items={users}
  fields={["id", "name", "status"]}
  values={[
    (user) => <span className="font-bold">#{user.id}</span>,
    (user) => <span>{user.name}</span>,
    (user) => (
      <span
        className={user.status === "Active" ? "text-green-500" : "text-red-500"}
      >
        {user.status}
      </span>
    )
  ]}
/>
`})}),`
`,n.jsx(e.h4,{id:"using-custom-loading-component",children:"Using Custom Loading Component"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<ResponsiveList
  items={users}
  fields={["id", "name"]}
  isLoading={isLoadingData}
  loadingComponent={<div className="animate-pulse">Loading data...</div>}
/>
`})})]})}function y(s={}){const{wrapper:e}={...a(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{y as default};
