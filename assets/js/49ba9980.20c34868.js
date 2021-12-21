"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[13119],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,h=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(h,l(l({ref:n},u),{},{components:t})):r.createElement(h,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=p;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},58215:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(67294);const a=function(e){let{children:n,hidden:t,className:a}=e;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},9877:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(87462),a=t(67294),o=t(72389),l=t(80944),s=t(53810),i=t(86010);const c="tabItem_1uMI";function u(e){var n,t;const{lazy:o,block:u,defaultValue:m,values:p,groupId:d,className:h}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=p??f.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),v=(0,s.lx)(y,((e,n)=>e.value===n.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===m?m:m??(null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)??(null==(t=f[0])?void 0:t.props.value);if(null!==b&&!y.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:k}=(0,l.Z)(),[w,E]=(0,a.useState)(b),N=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=d){const e=g[d];null!=e&&e!==w&&y.some((n=>n.value===e))&&E(e)}const D=e=>{const n=e.currentTarget,t=N.indexOf(n),r=y[t].value;r!==w&&(O(n),E(r),null!=d&&k(d,r))},T=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;t=N[n]||N[0];break}case"ArrowLeft":{const n=N.indexOf(e.currentTarget)-1;t=N[n]||N[N.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},h)},y.map((e=>{let{value:n,label:t,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>N.push(e),onKeyDown:T,onFocus:D,onClick:D},o,{className:(0,i.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":w===n})}),t??n)}))),o?(0,a.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function m(e){const n=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(n)},e))}},80944:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(67294),a=t(79443);const o=function(){const e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},70523:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(9877),a=t(58215),o=t(67294);function l(e){let{children:n}=e;return o.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},o.createElement(a.Z,{value:"ts"},n[0]),o.createElement(a.Z,{value:"js"},n[1]))}},62463:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>i,toc:()=>c,default:()=>m});var r=t(87462),a=(t(67294),t(3905)),o=t(70523);const l={title:"Schema Quick Start",sidebar_label:"Schema"},s=void 0,i={unversionedId:"api/schema",id:"version-6.1/api/schema",title:"Schema Quick Start",description:"Consider a typical blog post. The API response for a single post might look something like this:",source:"@site/versioned_docs/version-6.1/api/schema.md",sourceDirName:"api",slug:"/api/schema",permalink:"/docs/api/schema",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/schema.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"Schema Quick Start",sidebar_label:"Schema"},sidebar:"version-6.1/docs",previous:{title:"Index",permalink:"/docs/api/"},next:{title:"Entity",permalink:"/docs/api/Entity"}},c=[],u={toc:c};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Consider a typical blog post. The API response for a single post might look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "123",\n  "author": {\n    "id": "1",\n    "name": "Paul"\n  },\n  "title": "My awesome blog post",\n  "comments": [\n    {\n      "id": "324",\n      "createdAt": "2013-05-29T00:00:00-04:00",\n      "commenter": {\n        "id": "2",\n        "name": "Nicole"\n      }\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"We have two nested entity types within our ",(0,a.kt)("inlineCode",{parentName:"p"},"article"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"users")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"comments"),". Using various ",(0,a.kt)("inlineCode",{parentName:"p"},"schema"),", we can normalize all three entity types down:"),(0,a.kt)(o.Z,{mdxType:"LanguageTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { normalize, schema, Entity } from '@rest-hooks/normalizr';\n\n// Define a users schema\nclass User extends Entity {\n  readonly id: string = '';\n  readonly name: string = '';\n\n  pk() { return this.id; }\n}\n\n// Define your comments schema\nclass Comment extends Entity {\n  readonly id: string = '';\n  readonly createdAt: Date = new Date(0);\n  readonly commenter: User = User.fromJS({});\n\n  pk() { return this.id; }\n\n  static schema = {\n    commenter: User,\n    createdAt: Date,\n  }\n}\n\n// Define your article\nclass Article extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n  readonly author: User = User.fromJS({});\n  readonly comments: Comment[] = [];\n\n  pk() { return this.id; }\n\n  static schema = {\n    author: User,\n    comments: [Comment],\n  }\n}\n\nconst normalizedData = normalize(originalData, article);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { normalize, schema, Entity } from '@rest-hooks/normalizr';\n\n// Define a users schema\nclass User extends Entity {\n  pk() { return this.id; }\n}\n\n// Define your comments schema\nclass Comment extends Entity {\n  pk() { return this.id; }\n\n  static schema = {\n    commenter: User,\n    createdAt: Date,\n  }\n}\n\n// Define your article\nclass Article extends Entity {\n  pk() { return this.id; }\n\n  static schema = {\n    author: User,\n    comments: [Comment],\n  }\n}\n\nconst normalizedData = normalize(originalData, article);\n"))),(0,a.kt)("p",null,"Now, ",(0,a.kt)("inlineCode",{parentName:"p"},"normalizedData")," will be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n  result: "123",\n  entities: {\n    "articles": Article {\n      "123": {\n        id: "123",\n        author: "1",\n        title: "My awesome blog post",\n        comments: [ "324" ]\n      }\n    },\n    "users": {\n      "1": User { "id": "1", "name": "Paul" },\n      "2": User { "id": "2", "name": "Nicole" }\n    },\n    "comments": {\n      "324": Comment {\n        id: "324",\n        "createdAt": Date(`May 29, 2013`),\n        "commenter": "2"\n      }\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);