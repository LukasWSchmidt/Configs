"use strict";var i=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var u=Object.prototype.hasOwnProperty;var d=(t,o)=>{for(var e in o)i(t,e,{get:o[e],enumerable:!0})},x=(t,o,e,p)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of m(o))!u.call(t,r)&&r!==e&&i(t,r,{get:()=>o[r],enumerable:!(p=g(o,r))||p.enumerable});return t};var f=t=>x(i({},"__esModule",{value:!0}),t);var w={};d(w,{default:()=>b});module.exports=f(w);var s=require("@raycast/api");var c=require("@raycast/api"),y=(t,o)=>/^https?:\/\//g.test(o)?o:`${t}${encodeURIComponent(o)}`,h=async t=>{await(0,c.open)(y("https://google.com/search?q=",t))};var a=require("@raycast/api"),n=t=>t!=null&&String(t).trim().length>0,l=t=>n(t)?t?.trim():(0,a.getSelectedText)().then(o=>n(o)?o:a.Clipboard.readText()).catch(()=>{});var b=async t=>{let o=t.fallbackText;try{let e=await l(o);n(e)?(await h(e),(0,s.showHUD)("\u{1F389} Open Google search")):(0,s.showHUD)("\u274C No text found in clipboard")}catch{(0,s.showHUD)("\u274C Cannot open Google!")}};0&&(module.exports={});
