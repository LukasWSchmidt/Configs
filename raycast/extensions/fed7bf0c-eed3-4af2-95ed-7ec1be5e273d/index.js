"use strict";var W=Object.create;var y=Object.defineProperty;var I=Object.getOwnPropertyDescriptor;var R=Object.getOwnPropertyNames;var H=Object.getPrototypeOf,J=Object.prototype.hasOwnProperty;var K=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports),L=(n,e)=>{for(var t in e)y(n,t,{get:e[t],enumerable:!0})},Y=(n,e,t,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of R(e))!J.call(n,r)&&r!==t&&y(n,r,{get:()=>e[r],enumerable:!(a=I(e,r))||a.enumerable});return n};var z=(n,e,t)=>(t=n!=null?W(H(n)):{},Y(e||!n||!n.__esModule?y(t,"default",{value:n,enumerable:!0}):t,n)),B=n=>Y(y({},"__esModule",{value:!0}),n);var T=K(M=>{M.version="0.1.0";var E=function(e){this.message=e,this.toString=function(){return this.constructor.name+": "+this.message}},p=function(e){this.firstWeekDay=e||0};p.prototype={constructor:p,weekStartDate:function(e){for(var t=new Date(e.getTime());t.getDay()!==this.firstWeekDay;)t.setDate(t.getDate()-1);return t},monthDates:function(e,t,a,r){if(typeof e!="number"||e<1970)throw new E("year must be a number >= 1970");if(typeof t!="number"||t<0||t>11)throw new E("month must be a number (Jan is 0)");var c=[],u=[],g=0,s=this.weekStartDate(new Date(e,t,1));do{for(g=0;g<7;g++)u.push(a?a(s):s),s=new Date(s.getTime()),s.setDate(s.getDate()+1);c.push(r?r(u):u),u=[]}while(s.getMonth()<=t&&s.getFullYear()===e);return c},monthDays:function(e,t){var a=function(c){return c.getMonth()===t?c.getDate():0};return this.monthDates(e,t,a)},monthText:function(e,t){if(typeof e>"u"){var a=new Date;e=a.getFullYear(),t=a.getMonth()}var r=function(g){for(var s=g.getMonth()===t?g.getDate().toString():"  ";s.length<2;)s=" "+s;return s},c=this.monthDates(e,t,r,function(u){return u.join(" ")});return c.join(`
`)}};var A="JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC".split(" ");for(f=0;f<A.length;f++)p[A[f]]=f;var f;M.Calendar=p});var V={};L(V,{default:()=>O});module.exports=B(V);var o=require("@raycast/api"),D=require("react"),F=z(T());var x=(n,e)=>(n.getTimezoneOffset()-e.getTimezoneOffset())*6e4;var C=(n=new Date)=>{let e=(n.getDay()+6)%7,t=new Date(n);t.setDate(n.getDate()-e+3);let a=new Date(t.getFullYear(),0,1);return a.getDay()!==4&&a.setMonth(0,1+(11-a.getDay())%7),1+Math.floor((t-a+x(a,t))/6048e5)},v=(n=new Date)=>{let e=new Date(n);e.setDate(n.getDate()-n.getDay());let t=new Date(e.getFullYear(),0,1);return t.getDay()!==0&&t.setMonth(0,1+(7-t.getDay())%7),1+Math.floor((e-t+x(t,e))/6048e5)};var i=require("react/jsx-runtime"),j=["` SUN` ` MON` ` TUE` ` WED` ` THU` ` FRI` ` SAT`","` MON` ` TUE` ` WED` ` THU` ` FRI` ` SAT` ` SUN`"],b=Number((0,o.getPreferenceValues)().weekStart),P=(0,o.getPreferenceValues)().showWeeks,d=new Date(new Date().getFullYear(),new Date().getMonth(),1);function O(){let[n,e]=(0,D.useState)(""),[t,a]=(0,D.useState)(""),[r,c]=(0,D.useState)(d);(0,D.useEffect)(()=>{(async()=>{let h=new F.Calendar(b).monthDates(r.getFullYear(),r.getMonth()),w="";h.forEach(S=>{if(P){let l="";b==0?l=v(S[0]).toString():l=C(S[0]).toString(),w+="`"+l+" ".repeat(2-l.length)+"`    "}S.forEach(l=>{let k=l.getMonth()===r.getMonth()?l.getDate().toString():"";l.toDateString()===new Date().toDateString()?w+="`\u2022"+" ".repeat(3-k.length)+k+"` ":w+="`"+" ".repeat(4-k.length)+k+"` "}),w+=`

`});let N=r.toLocaleString("en",{month:"long",year:"numeric"}),U=P?"`# `    ":"";a(N),e("# "+N+`
***
`+U+j[b]+`

`+w)})()},[r]);let u=m=>{let h=new Date(r.getFullYear(),r.getMonth()+m,1);c(h)},g=m=>{let h=new Date(r.getFullYear()+m,r.getMonth(),1);c(h)},s=()=>{r===d?(0,o.showToast)(o.ToastStyle.Success,"Current month is on screen"):c(d)};return(0,i.jsx)(o.Detail,{markdown:n,actions:(0,i.jsxs)(o.ActionPanel,{children:[(0,i.jsxs)(o.ActionPanel.Section,{title:t,children:[(0,i.jsx)(o.ActionPanel.Item,{title:"Current Month",shortcut:{modifiers:[],key:"c"},icon:{source:{dark:"up-dark.png",light:"up.png"}},onAction:()=>s()}),(0,i.jsx)(o.CopyToClipboardAction,{content:n})]}),(0,i.jsxs)(o.ActionPanel.Section,{title:"Change Month",children:[(0,i.jsx)(o.ActionPanel.Item,{title:"Previous Month",shortcut:{modifiers:[],key:"arrowLeft"},icon:{source:{dark:"left-dark.png",light:"left.png"}},onAction:()=>u(-1)}),(0,i.jsx)(o.ActionPanel.Item,{title:"Next Month",shortcut:{modifiers:[],key:"arrowRight"},icon:{source:{dark:"right-dark.png",light:"right.png"}},onAction:()=>u(1)})]}),(0,i.jsxs)(o.ActionPanel.Section,{title:"Change Year",children:[(0,i.jsx)(o.ActionPanel.Item,{title:"Previous Year",shortcut:{modifiers:["shift"],key:"arrowLeft"},icon:{source:{dark:"double-left-dark.png",light:"double-left.png"}},onAction:()=>g(-1)}),(0,i.jsx)(o.ActionPanel.Item,{title:"Next Year",shortcut:{modifiers:["shift"],key:"arrowRight"},icon:{source:{dark:"double-right-dark.png",light:"double-right.png"}},onAction:()=>g(1)})]})]})})}
/*! Bundled license information:

calendar/lib/calendar.js:
  (*!
   * calendar.js: inspired by the calendar module from Python
   * Copyright(c) 2011 Luciano Ramalho <luciano@ramalho.org>
   * MIT Licensed
   *)

weeknumber/src/index.js:
  (*!
   * weeknumber
   * @author commenthol
   * @license Unlicense
   *)
*/
