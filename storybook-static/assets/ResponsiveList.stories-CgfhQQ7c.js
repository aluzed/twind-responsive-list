import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{g as Q,R as U}from"./index-D4lIrffr.js";var j={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var k;function X(){return k||(k=1,function(r){(function(){var t={}.hasOwnProperty;function a(){for(var e="",n=0;n<arguments.length;n++){var l=arguments[n];l&&(e=o(e,d(l)))}return e}function d(e){if(typeof e=="string"||typeof e=="number")return e;if(typeof e!="object")return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var n="";for(var l in e)t.call(e,l)&&e[l]&&(n=o(n,l));return n}function o(e,n){return n?e?e+" "+n:e+n:e}r.exports?(a.default=a,r.exports=a):window.classNames=a})()}(j)),j.exports}var Y=X();const w=Q(Y),H=({size:r="md",color:t="primary",className:a=""})=>{const d={xs:"w-4 h-4",sm:"w-6 h-6",md:"w-8 h-8",lg:"w-10 h-10",xl:"w-12 h-12"},e={primary:"text-blue-600",secondary:"text-gray-600",success:"text-green-600",danger:"text-red-600",warning:"text-yellow-600",info:"text-sky-600"}[t]||t,n=d[r];return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
          @keyframes spinner-grow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes spinner-dash {
            0% { stroke-dasharray: 1, 150; stroke-dashoffset: 0; }
            50% { stroke-dasharray: 90, 150; stroke-dashoffset: -35; }
            100% { stroke-dasharray: 90, 150; stroke-dashoffset: -124; }
          }
          .animate-spinner-grow {
            animation: spinner-grow 2s linear infinite;
          }
          .animate-spinner-dash {
            animation: spinner-dash 1.5s ease-in-out infinite;
          }
        `}),s.jsx("svg",{className:`animate-spinner-grow ${n} ${a}`,viewBox:"0 0 50 50",children:s.jsx("circle",{className:`animate-spinner-dash ${e}`,cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"4",strokeLinecap:"round",stroke:"currentColor"})})]})};H.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "success"
| "danger"
| "warning"
| "info"
| string`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'},{name:"string"}]},description:"",defaultValue:{value:'"primary"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const Z=({fields:r,hasActions:t,lineClassNameOdd:a})=>{const d=100/(r.length+(t?1:0));return s.jsxs("div",{className:w("responsive-list-header-row w-full hidden md:flex border-b font-semibold",a??"",{"border-gray-300  bg-gray-100":!a}),role:"row",children:[r.map(o=>s.jsx("div",{className:w("responsive-list-header-col p-3"),style:{width:`${d}%`},role:"columnheader",children:o.toString()},o.toString())),t&&s.jsx("div",{className:"responsive-list-header-col p-3 text-right",style:{width:`${d}%`},role:"columnheader",children:"Actions"})]})},G=({isLoading:r=!1,items:t=[],values:a,labels:d,fields:o,actions:e,hideLabelsMobile:n=!1,loadingComponent:l,lineClassNameEven:v,lineClassNameOdd:u})=>{var R;const S=100/(o.length+(e?1:0));return s.jsxs("div",{className:"responsive-list-container flex flex-col w-full",role:"table",children:[s.jsx(Z,{fields:d??o,hasActions:!!e,lineClassNameEven:v,lineClassNameOdd:u}),r&&s.jsx("div",{className:"responsive-list-loading-container flex justify-center items-center my-2",children:l||s.jsx(H,{})}),!r&&((R=t==null?void 0:t.map)==null?void 0:R.call(t,(m,i)=>s.jsxs(U.Fragment,{children:[s.jsxs("div",{className:w("responsive-list-row-desktop-row hidden md:flex items-center border-b dark:text-white hover-row",{"border-gray-200 hover:bg-gray-100 dark:bg-gray-100 dark:hover:bg-gray-200":!u&&i%2!==0,"border-white hover:bg-gray-100 dark:bg-gray-200 dark:hover:bg-gray-300":!u&&i%2===0,lineClassNameOdd:!!u&&i%2!==0,lineClassNameEven:!!v&&i%2===0}),role:"row",children:[o.map((p,N)=>{var g;return s.jsx("div",{className:"responsive-list-row-desktop-col p-3 truncate row-cell",style:{width:`${S}%`},role:"cell",children:a?(g=a==null?void 0:a[N])==null?void 0:g.call(a,m):m[p]!==void 0?String(m[p]):null},p.toString())}),e&&s.jsx("div",{className:"responsive-list-row-desktop-col p-3 flex justify-end row-cell",style:{width:`${S}%`},role:"cell",children:e(m)})]}),s.jsxs("div",{className:w("responsive-list-row-mobile-block md:hidden rounded-lg shadow-sm mb-4 p-4 relative",{"border-gray-200 hover:bg-gray-50":!u&&i%2!==0,"border-white hover:bg-gray-50":!v&&i%2===0,lineClassNameOdd:!!u&&i%2!==0,lineClassNameEven:!!v&&i%2===0}),children:[s.jsx("div",{className:"space-y-2",children:o.map((p,N)=>{var g;return s.jsxs("div",{className:"flex",children:[!n&&s.jsxs("span",{className:"responsive-list-row-mobile-label text-sm text-gray-500 mr-2 min-w-[120px]",children:[p.toString(),":"]}),s.jsx("span",{className:"responsive-list-row-mobile-value text-gray-800",children:a?(g=a==null?void 0:a[N])==null?void 0:g.call(a,m):m[p]!==void 0?String(m[p]):null})]},p.toString())})}),e&&s.jsx("div",{className:"responsive-list-row-mobile-actions mt-4 border-t border-gray-100 pt-4 flex justify-end",children:e(m)})]})]},i)))]})};G.__docgenInfo={description:"",methods:[],displayName:"ResponsiveList",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"",defaultValue:{value:"[]",computed:!1}},values:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((item: T) => React.ReactNode)[]"},description:""},labels:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},fields:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof T)[]"},description:""},actions:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},hideLabelsMobile:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loadingComponent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},lineClassNameEven:{required:!1,tsType:{name:"string"},description:""},lineClassNameOdd:{required:!1,tsType:{name:"string"},description:""}}};const I={title:"Components/ResponsiveList",component:G,parameters:{layout:"padded"},argTypes:{lineClassNameEven:{control:"text"},lineClassNameOdd:{control:"text"},hideLabelsMobile:{control:"boolean"},isLoading:{control:"boolean"}}},K=[{id:1,name:"John Doe",email:"john@example.com",status:"Active"},{id:2,name:"Jane Smith",email:"jane@example.com",status:"Inactive"},{id:3,name:"Bob Johnson",email:"bob@example.com",status:"Pending"},{id:4,name:"Alice Williams",email:"alice@example.com",status:"Active"}],c={args:{items:K,fields:["id","name","email","status"],actions:()=>s.jsx("button",{className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600",children:"Edit"})}},f={args:{...c.args,lineClassNameEven:"bg-blue-50",lineClassNameOdd:"bg-gray-50"}},h={args:{...c.args,values:[r=>s.jsxs("span",{className:"font-bold",children:["#",r.id]}),r=>s.jsx("span",{children:r.name}),r=>s.jsx("a",{href:`mailto:${r.email}`,className:"text-blue-500 hover:underline",children:r.email}),r=>{const t={Active:"bg-green-100 text-green-800",Inactive:"bg-red-100 text-red-800",Pending:"bg-yellow-100 text-yellow-800"};return s.jsx("span",{className:`px-2 py-1 rounded-full text-xs ${t[r.status]||""}`,children:r.status})}]}},y={args:{...c.args,isLoading:!0}},x={args:{items:K,fields:["id","name","email","status"]}},b={args:{...c.args,labels:["ID","Nom Complet","Adresse Email","Statut"]}};var C,T,A;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    items: sampleData,
    fields: ["id", "name", "email", "status"],
    actions: () => <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
        Edit
      </button>
  }
}`,...(A=(T=c.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var L,q,D;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    lineClassNameEven: "bg-blue-50",
    lineClassNameOdd: "bg-gray-50"
  }
}`,...(D=(q=f.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var E,$,_;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    values: [item => <span className="font-bold">#{item.id}</span>, item => <span>{item.name}</span>, item => <a href={\`mailto:\${item.email}\`} className="text-blue-500 hover:underline">
          {item.email}
        </a>, item => {
      const statusClasses = {
        Active: "bg-green-100 text-green-800",
        Inactive: "bg-red-100 text-red-800",
        Pending: "bg-yellow-100 text-yellow-800"
      };
      return <span className={\`px-2 py-1 rounded-full text-xs \${statusClasses[item.status as keyof typeof statusClasses] || ""}\`}>
            {item.status}
          </span>;
    }]
  }
}`,...(_=($=h.parameters)==null?void 0:$.docs)==null?void 0:_.source}}};var B,V,M;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isLoading: true
  }
}`,...(M=(V=y.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var O,W,P;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    items: sampleData,
    fields: ["id", "name", "email", "status"]
  }
}`,...(P=(W=x.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var z,F,J;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    labels: ["ID", "Nom Complet", "Adresse Email", "Statut"]
  }
}`,...(J=(F=b.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};const ee=["Default","CustomRowStyles","CustomRenderers","Loading","WithoutActions","CustomLabels"],re=Object.freeze(Object.defineProperty({__proto__:null,CustomLabels:b,CustomRenderers:h,CustomRowStyles:f,Default:c,Loading:y,WithoutActions:x,__namedExportsOrder:ee,default:I},Symbol.toStringTag,{value:"Module"}));export{f as C,c as D,y as L,re as R,h as a};
