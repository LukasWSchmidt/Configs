"use strict";var p=Object.defineProperty;var I=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var w=Object.prototype.hasOwnProperty;var C=(e,n)=>{for(var o in n)p(e,o,{get:n[o],enumerable:!0})},R=(e,n,o,s)=>{if(n&&typeof n=="object"||typeof n=="function")for(let r of y(n))!w.call(e,r)&&r!==o&&p(e,r,{get:()=>n[r],enumerable:!(s=I(n,r))||s.enumerable});return e};var S=e=>R(p({},"__esModule",{value:!0}),e);var x={};C(x,{default:()=>f});module.exports=S(x);var t=require("@raycast/api"),c=require("react");var i=require("@raycast/api"),d=async()=>(0,i.getSelectedText)().then(async e=>l(e)?await u():e).catch(async()=>await u()).then(e=>l(e)?"":e).catch(()=>""),l=e=>!(e!=null&&String(e).length>0),u=async()=>{let e=await i.Clipboard.readText();return typeof e>"u"?"":e};function m(e){return"https://www.google.com/maps/search/?api=1"+"&query="+encodeURI(e)}var a=require("react/jsx-runtime");function f(){let e=(0,t.getPreferenceValues)(),[n,o]=(0,c.useState)(""),[s,r]=(0,c.useState)(e.useSelected);return(0,c.useEffect)(()=>{async function g(){let h=await d();o(h),r(!1)}e.useSelected&&g().then()},[]),(0,a.jsx)(t.Form,{isLoading:s,actions:(0,a.jsxs)(t.ActionPanel,{children:[(0,a.jsx)(t.Action.OpenInBrowser,{url:m(n),icon:t.Icon.Globe,onOpen:()=>(0,t.popToRoot)()}),(0,a.jsx)(t.Action.CopyToClipboard,{content:m(n),icon:t.Icon.Clipboard,onCopy:()=>(0,t.popToRoot)()})]}),children:(0,a.jsx)(t.Form.TextField,{id:"search",title:"Search",placeholder:"Location or Category",value:n,onChange:o})})}0&&(module.exports={});