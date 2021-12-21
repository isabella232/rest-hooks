"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74907],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>p});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=l,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||a;return n?r.createElement(f,o(o({ref:t},i),{},{components:n})):r.createElement(f,o({ref:t},i))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:l,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294);const l=function(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",hidden:n,className:l},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),l=n(67294),a=n(72389),o=n(80944),c=n(53810),s=n(86010);const u="tabItem_1uMI";function i(e){var t,n;const{lazy:a,block:i,defaultValue:m,values:d,groupId:p,className:f}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??b.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,c.lx)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===m?m:m??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=b[0])?void 0:n.props.value);if(null!==h&&!v.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:E,setTabGroupChoices:g}=(0,o.Z)(),[k,Z]=(0,l.useState)(h),C=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=p){const e=E[p];null!=e&&e!==k&&v.some((t=>t.value===e))&&Z(e)}const w=e=>{const t=e.currentTarget,n=C.indexOf(t),r=v[n].value;r!==k&&(O(t),Z(r),null!=p&&g(p,r))},N=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]||C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]||C[C.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},f)},v.map((e=>{let{value:t,label:n,attributes:a}=e;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>C.push(e),onKeyDown:N,onFocus:w,onClick:w},a,{className:(0,s.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":k===t})}),n??t)}))),a?(0,l.cloneElement)(b.filter((e=>e.props.value===k))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function m(e){const t=(0,a.Z)();return l.createElement(i,(0,r.Z)({key:String(t)},e))}},80944:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),l=n(79443);const a=function(){const e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},87799:(e,t,n)=>{n.d(t,{Z:()=>_});var r=n(87462),l=n(67294),a=n(50776),o=n(86010),c=n(95999),s=n(52263),u=n(91262),i=n(83229);const m="playgroundContainer_1KVM",d="playgroundHeader_2QE7",p="playgroundEditor_PkRz",f="playgroundPreview_1s6C";var b=n(72389);function v(e){let{children:t}=e;return l.createElement("div",{className:(0,o.Z)(d)},t)}function y(){return l.createElement("div",null,"Loading...")}function h(){return l.createElement(l.Fragment,null,l.createElement(v,null,l.createElement(c.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),l.createElement("div",{className:f},l.createElement(u.Z,{fallback:l.createElement(y,null)},(()=>l.createElement(l.Fragment,null,l.createElement(a.i5,null),l.createElement(a.IF,null))))))}function E(){const e=(0,b.Z)();return l.createElement(a.uz,{key:e,className:p})}function g(){return l.createElement(l.Fragment,null,l.createElement(v,null,l.createElement(c.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")),l.createElement(E,null))}function k(e){let{children:t,transformCode:n,...o}=e;const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:c}}}}=(0,s.Z)(),u=(0,i.Z)();return l.createElement("div",{className:m},l.createElement(a.nu,(0,r.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>`${e};`),theme:u},o),"top"===c?l.createElement(l.Fragment,null,l.createElement(h,null),l.createElement(g,null)):l.createElement(l.Fragment,null,l.createElement(g,null),l.createElement(h,null))))}var Z=n(56922),C=n(23746);var O=n(53810);const w="codeBlockContainer_K1bP",N="codeBlockContent_hGly",T="codeBlockTitle_eoMF",P="codeBlock_23N8",x="copyButton_Ue-o",j="codeBlockLines_39YC";const _=(B=function(e){let{children:t,className:n,metastring:a,title:s}=e;const{prism:u}=(0,O.LU)(),[m,d]=(0,l.useState)(!1),[p,f]=(0,l.useState)(!1);(0,l.useEffect)((()=>{f(!0)}),[]);const b=(0,O.bc)(a)||s,v=(0,i.Z)(),y=Array.isArray(t)?t.join(""):t,h=(0,O.Vo)(n)??u.defaultLanguage,{highlightLines:E,code:g}=(0,O.nZ)(y,a,h),k=()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const r=document.createElement("textarea"),l=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const a=document.getSelection();let o=!1;a.rangeCount>0&&(o=a.getRangeAt(0)),n.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}r.remove(),o&&(a.removeAllRanges(),a.addRange(o)),l&&l.focus()}(g),d(!0),setTimeout((()=>d(!1)),2e3)};return l.createElement(C.ZP,(0,r.Z)({},C.lG,{key:String(p),theme:v,code:g,language:h}),(e=>{let{className:t,style:a,tokens:s,getLineProps:u,getTokenProps:i}=e;return l.createElement("div",{className:(0,o.Z)(w,n,O.kM.common.codeBlock)},b&&l.createElement("div",{style:a,className:T},b),l.createElement("div",{className:(0,o.Z)(N,h)},l.createElement("pre",{tabIndex:0,className:(0,o.Z)(t,P,"thin-scrollbar"),style:a},l.createElement("code",{className:j},s.map(((e,t)=>{1===e.length&&"\n"===e[0].content&&(e[0].content="");const n=u({line:e,key:t});return E.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),l.createElement("span",(0,r.Z)({key:t},n),e.map(((e,t)=>l.createElement("span",(0,r.Z)({key:t},i({token:e,key:t}))))),l.createElement("br",null))})))),l.createElement("button",{type:"button","aria-label":(0,c.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,o.Z)(x,"clean-btn"),onClick:k},m?l.createElement(c.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):l.createElement(c.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))},function(e){return e.live?l.createElement(k,(0,r.Z)({scope:Z.Z},e)):l.createElement(B,e)});var B}}]);