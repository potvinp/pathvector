"use strict";(self.webpackChunkpathvector_io=self.webpackChunkpathvector_io||[]).push([[699],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?i.createElement(f,a(a({ref:t},c),{},{components:n})):i.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const o={},a="Route Limits",l={unversionedId:"filtering/route-limits",id:"filtering/route-limits",title:"Route Limits",description:"Peer configuration options",source:"@site/docs/filtering/route-limits.md",sourceDirName:"filtering",slug:"/filtering/route-limits",permalink:"/docs/filtering/route-limits",draft:!1,editUrl:"https://github.com/natesales/pathvector/edit/main/docs/docs/filtering/route-limits.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IRR",permalink:"/docs/filtering/irr"},next:{title:"RPKI Validation",permalink:"/docs/filtering/rpki"}},p={},s=[{value:"Peer configuration options",id:"peer-configuration-options",level:2},{value:"Policy violation actions",id:"policy-violation-actions",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"route-limits"},"Route Limits"),(0,r.kt)("h2",{id:"peer-configuration-options"},"Peer configuration options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"import-limit4")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"import-limit6")," specify many prefixes can be accepted from the peer after filtering. These may be\nset automatically from the peer's PeeringDB page by enabling ",(0,r.kt)("inlineCode",{parentName:"p"},"auto-import-limits"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"receive-limit4")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"receive-limit6")," are like import limits but before filtering. ",(0,r.kt)("inlineCode",{parentName:"p"},"keep-filtered")," must be enabled for\nthese to work."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"export-limit4")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"export-limit6")," set the maximum number of prefixes to export to a peer."),(0,r.kt)("h2",{id:"policy-violation-actions"},"Policy violation actions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"import-limit-violation"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"receive-limit-violation"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"export-limit-violation")," control what happens when a route\nlimit is tripped. The default is ",(0,r.kt)("inlineCode",{parentName:"p"},"disable"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"warn")," logs a warning"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"block")," stops sending or accepting route updates after the configured number of routes have been processed"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"restart")," restarts the session"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"disable")," disables the session until it's manually enabled"))}m.isMDXComponent=!0}}]);