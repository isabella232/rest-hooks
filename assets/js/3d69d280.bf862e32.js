(self.webpackChunk=self.webpackChunk||[]).push([[82931],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(67294);const a=function(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(87462),a=n(67294),i=n(72389),l=n(80944),s=n(53810),o=n(86010);const c="tabItem_1uMI";function u(e){var t,n;const{lazy:i,block:u,defaultValue:d,values:p,groupId:m,className:h}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=p??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,s.lx)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=f[0])?void 0:n.props.value);if(null!==k&&!y.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:b}=(0,l.Z)(),[E,x]=(0,a.useState)(k),w=[],{blockElementScrollPositionUntilNextRender:N}=(0,s.o5)();if(null!=m){const e=v[m];null!=e&&e!==E&&y.some((t=>t.value===e))&&x(e)}const T=e=>{const t=e.currentTarget,n=w.indexOf(t),r=y[n].value;r!==E&&(N(t),x(r),null!=m&&b(m,r))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]||w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]||w[w.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},h)},y.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>w.push(e),onKeyDown:C,onFocus:T,onClick:T},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":E===t})}),n??t)}))),i?(0,a.cloneElement)(f.filter((e=>e.props.value===E))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function d(e){const t=(0,i.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},80944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(67294),a=n(79443);const i=function(){const e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},70720:(e,t,n)=>{"use strict";n.d(t,{Z:()=>fe});var r=n(67294),a=n(24861),i=n(88300),l=n(71481),s=n(42910),o=n(99876),c=n(63312),u=n(52803),d=n(44431),p=n.n(d),m=n(53775);class h extends m.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}static partialUpdate(){const e=super.partialUpdate();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:t.id})})}static create(){const e=super.create();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:n.id})})}}class f extends h{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1}static partialUpdate(){return super.partialUpdate().extend({schema:this,optimisticUpdate:y})}static create(){const e=this.list().key({});return super.create().extend({schema:this,optimisticUpdate:g,update:t=>({[e]:function(e){return void 0===e&&(e=[]),[...e,t]}})})}static delete(){return super.delete().extend({optimisticUpdate:k})}}f.urlRoot="https://jsonplaceholder.typicode.com/todos";const y=(e,t)=>({id:e.id,...t}),g=(e,t)=>t,k=e=>e;var v=n(87462),b=n(50776),E=n(86010),x=n(95999),w=n(52263),N=n(72389),T=n(83229),C=n(55423),O=n(84195),S=n(58699),Z=n(28808),I=n(96714),R=n(28224),P=n(80944),A=n(53810),D=n(91262);const U="playgroundContainer_1vxj",j="row_3g4V",_="hidden_2rz-",z="playgroundHeader_2X75",M="playgroundEditor_1tQZ",F="playgroundPreview_3d_E",q="playgroundResult_5IAE",V="debugToggle_2KFu",L="tabControls_vH2K",B="tabs_1lMe",H="tab_3qyO",J="selected_3AAM";var $=n(60522),W=n(80126),K=n(85350);function G(e){let{value:t}=e;const{isDarkTheme:n}=(0,K.Z)(),a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]);return r.createElement(W.ZP,{shouldExpandNode:X,data:t,theme:{tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem","background-color":n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,"font-family":"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"}})}function X(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}function Q(e){let{toggle:t,selectedValue:n}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:V,onClick:t},"Store"),"y"===n?r.createElement(te,null):null)}const Y=(0,r.memo)(Q);function ee(){const e=(0,r.useContext)($.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return r.createElement(G,{value:t})}const te=(0,r.memo)(ee);function ne(e){let{groupId:t,defaultOpen:n,row:a}=e;const{tabGroupChoices:i,setTabGroupChoices:l}=(0,P.Z)(),[s,o]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:c}=(0,A.o5)();if(null!=t){const e=i[t];null!=e&&e!==s&&o(e)}const u=(0,r.useCallback)((e=>{c(e.currentTarget),o((e=>"y"===e?"n":"y")),l(t,"y"===s?"n":"y")}),[c,t,s,l]),d=(0,r.useMemo)((()=>[new R.Z,new S.Z(Z.Z)]),[]),p=!("n"===s||!a);return r.createElement(I.nq,{managers:d},r.createElement("div",{className:(0,E.Z)(F,{[_]:p})},r.createElement(D.Z,{fallback:r.createElement(ae,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(ae,null)},r.createElement(b.i5,null),r.createElement(b.IF,null))))),r.createElement(Y,{selectedValue:s,toggle:u}))}const re=(0,r.memo)(ne);function ae(){return r.createElement("div",null,"Loading...")}function ie(e){let{children:t,className:n}=e;return r.createElement("div",{className:(0,E.Z)(z,n)},t)}function le(e){let{groupId:t,defaultOpen:n,row:a}=e;return r.createElement("div",null,r.createElement(ie,null,r.createElement(x.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),r.createElement("div",{className:q},r.createElement(re,{groupId:t,defaultOpen:n,row:a})))}function se(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(O.Z);return r.createElement("div",{className:B,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:i}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,E.Z)(H,{[J]:e===a}),onFocus:t,onClick:t,value:a},i)})))}function oe(e){let{children:t}=e;return r.createElement(ie,{className:L},r.createElement("div",null,t),r.createElement(se,null))}function ce(e){let{title:t}=e;const{values:n}=(0,r.useContext)(O.Z),a=n.length>0,i=(0,N.Z)();return r.createElement("div",null,a?r.createElement(oe,null,t):r.createElement(ie,null,t),r.createElement(b.uz,{key:i,className:M}))}function ue(e){let{children:t,transformCode:n,groupId:a,defaultOpen:i,row:l,hidden:s=!1,...o}=e;const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:c}}}}=(0,w.Z)(),u=(0,T.Z)();o.scope;return r.createElement("div",{className:(0,E.Z)(U,{[j]:l,[_]:s})},r.createElement(b.nu,(0,v.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>(e=>C.transpileModule(e,{compilerOptions:{module:C.ModuleKind.ESNext,target:C.ScriptTarget.ES5,jsx:"react"}}).outputText)(`${e};`)),transpileOptions:{target:{chrome:71},transforms:{classes:!1,letConst:!1,getterSetter:!1,generator:!1,asyncAwait:!1,moduleImport:!1,moduleExport:!1}},theme:u},o),"top"===c?r.createElement(r.Fragment,null,r.createElement(le,{groupId:a,defaultOpen:i,row:l}),r.createElement(ce,null)):r.createElement(r.Fragment,null,r.createElement(ce,null),r.createElement(le,{groupId:a,defaultOpen:i,row:l}))))}ce.defaultProps={title:r.createElement(x.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},ue.defaultProps={row:!1};class de extends c.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}de.schema={updatedAt:Date};const pe=new i.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:de});const me={...a,...o,...u,mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:p(),lastUpdated:pe,TimedEntity:de,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,a]=r.useState(0),{resetEntireStore:i}=l.Z();return r.createElement(s.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",null,t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{i(),a((e=>e+1))}},"Clear Error"))}},t)},TodoResource:class extends f{static list(){const e=super.list();return e.extend({async fetch(){return(await e(...arguments)).slice(0,5)}})}}},he=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:i="n",row:l=!1}=e;return r.createElement(ue,{scope:me,noInline:!0,groupId:n,defaultOpen:i,row:l,hidden:a},"string"==typeof t?t:t.props.children.props.children)},fe=(0,r.memo)(he)},70523:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(9877),a=n(58215),i=n(67294);function l(e){let{children:t}=e;return i.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},i.createElement(a.Z,{value:"ts"},t[0]),i.createElement(a.Z,{value:"js"},t[1]))}},74733:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>o,metadata:()=>c,toc:()=>u,default:()=>p});var r=n(87462),a=(n(67294),n(3905)),i=n(70720),l=n(70523);const s={title:"Entity"},o=void 0,c={unversionedId:"api/Entity",id:"version-6.1/api/Entity",title:"Entity",description:"Entity - Declarative Data Normalization | Rest Hooks",source:"@site/versioned_docs/version-6.1/api/Entity.md",sourceDirName:"api",slug:"/api/Entity",permalink:"/docs/api/Entity",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Entity.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"Entity"},sidebar:"version-6.1/docs",previous:{title:"Schema",permalink:"/docs/api/schema"},next:{title:"schema.Object",permalink:"/docs/api/Object"}},u=[{value:"Methods",id:"methods",children:[{value:"static fromJS&lt;T extends typeof SimpleRecord&gt;(this: T, props: Partial&lt;AbstractInstanceType&lt;T&gt;&gt;): AbstractInstanceType&lt;T&gt;",id:"fromJS",children:[],level:3},{value:"process(input, parent, key): processedEntity",id:"processinput-parent-key-processedentity",children:[],level:3},{value:"abstract pk: (parent?, key?): pk?",id:"pk",children:[{value:"undefined value",id:"undefined-value",children:[],level:4},{value:"Other uses",id:"other-uses",children:[],level:4},{value:"Singleton Entities",id:"singleton-entities",children:[],level:4}],level:3},{value:"static get key(): string",id:"key",children:[],level:3},{value:"static merge(existing, incoming): mergedValue",id:"merge",children:[{value:"Example",id:"example",children:[],level:4}],level:3},{value:"static validate(processedEntity): errorMessage?",id:"validate",children:[],level:3},{value:"static infer(args, indexes, recurse): pk?",id:"infer",children:[],level:3},{value:"static expiresAt(meta: { expiresAt: number; date: number }, input: any): expiresAt",id:"expiresat",children:[],level:3},{value:"static indexes?: (keyof this)[]",id:"indexes",children:[{value:"useResource()",id:"useresource",children:[],level:4},{value:"useCache()",id:"usecache",children:[],level:4}],level:3},{value:"static schema: { k: keyof this: Schema }",id:"schema",children:[{value:"Optional members",id:"optional-members",children:[],level:4}],level:3}],level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"Entity - Declarative Data Normalization | Rest Hooks")),(0,a.kt)(l.Z,{mdxType:"LanguageTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Entity } from 'rest-hooks';\n\nexport default class Article extends Entity {\n  readonly id: number | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly tags: string[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static get key() {\n    return 'Article';\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Entity } from 'rest-hooks';\n\nexport default class Article extends Entity {\n  id = undefined;\n  title = '';\n  content = '';\n  author = null;\n  tags = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static get key() {\n    return 'Article';\n  }\n}\n"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Entity")," is an abstract base class used to define data with some form of primary key (or ",(0,a.kt)("inlineCode",{parentName:"p"},"pk")," for short).\nWhen representing data from a relational database, this makes an Entity roughly map 1:1 with a table, where\neach row represents an instance of the Entity."),(0,a.kt)("p",null,"By defining a ",(0,a.kt)("inlineCode",{parentName:"p"},"pk()")," member, Rest Hooks will normalize entities, ensuring consistency and improve performance\nby increasing cache hit rates."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For common REST patterns, inheriting from ",(0,a.kt)("a",{parentName:"p",href:"./resource"},"Resource")," is recommended. However, for other cases\n",(0,a.kt)("inlineCode",{parentName:"p"},"Entity")," is a great place to start.")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"fromJS"},"static fromJS<T extends typeof SimpleRecord",">","(this: T, props: Partial<AbstractInstanceType<T",">",">","): AbstractInstanceType<T",">"),(0,a.kt)("p",null,"Factory method called during denormalization. Use this instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"new MyEntity()")),(0,a.kt)("h3",{id:"processinput-parent-key-processedentity"},"process(input, parent, key): processedEntity"),(0,a.kt)("p",null,"Run at the start of normalization for this entity. Return value is saved in store\nand sent to ",(0,a.kt)("a",{parentName:"p",href:"#pk"},"pk()"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Defaults")," to simply copying the response (",(0,a.kt)("inlineCode",{parentName:"p"},"{...input}"),")"),(0,a.kt)("h3",{id:"pk"},"abstract pk: (parent?, key?): pk?"),(0,a.kt)("p",null,"PK stands for ",(0,a.kt)("em",{parentName:"p"},"primary key")," and is intended to provide a standard means of retrieving\na key identifier for any ",(0,a.kt)("inlineCode",{parentName:"p"},"Entity"),". In many cases there will simply be an 'id' field\nmember to return. In case of multicolumn you can simply join them together."),(0,a.kt)("h4",{id:"undefined-value"},"undefined value"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," can be used as a default to indicate the entity has not been created yet.\nThis is useful when initializing a creation form using ",(0,a.kt)("a",{parentName:"p",href:"#static-fromjst-extends-typeof-simplerecordthis-t-props-partialabstractinstancetypet-abstractinstancetypet"},"Entity.fromJS()"),"\ndirectly. If ",(0,a.kt)("inlineCode",{parentName:"p"},"pk()")," resolves to null it is considered not persisted to the server,\nand thus will not be kept in the cache."),(0,a.kt)("h4",{id:"other-uses"},"Other uses"),(0,a.kt)("p",null,"While the ",(0,a.kt)("inlineCode",{parentName:"p"},"pk()")," definition is key (pun intended) for making the normalized cache work;\nit also becomes quite convenient for sending to a react element when iterating on\nlist results:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"//....\nreturn (\n  <div>\n    {results.map(result => (\n      <TheThing key={result.pk()} thing={result} />\n    ))}\n  </div>\n);\n")),(0,a.kt)("h4",{id:"singleton-entities"},"Singleton Entities"),(0,a.kt)("p",null,"What if there is only ever once instance of a Entity for your entire application? You\ndon't really need to distinguish between each instance, so likely there was no ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," or\nsimilar field defined in the API. In these cases you can just return a literal like\n'the_only_one'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"pk() {\n  return 'the_only_one';\n}\n")),(0,a.kt)("h3",{id:"key"},"static get key(): string"),(0,a.kt)("p",null,"This defines the key for the Entity itself, rather than an instance. This needs to be a globally\nunique value."),(0,a.kt)("h3",{id:"merge"},"static merge(existing, incoming): mergedValue"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"static merge<T extends typeof SimpleRecord>(existing: InstanceType<T>, incoming: InstanceType<T>) => InstanceType<T>\n")),(0,a.kt)("p",null,"Merge is used to resolve the same entity. This can be because it was previously put in the cache,\nor it was found in multiple places nested in one response. By default it is the SimpleRecord merge, which\nprefers values from the newer item but only if they are actually set."),(0,a.kt)("p",null,"Override this to change the algorithm - for instance if having the absolutely correct latest value is important,\nadding a timestamp to the entity and then using it to select the return value will solve any race conditions."),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class LatestPriceEntity extends Entity {\n  readonly id: string = '';\n  readonly timestamp: string = '';\n  readonly price: string = '0.0';\n  readonly symbol: string = '';\n\n  static merge<T extends typeof SimpleRecord>(\n    existing: InstanceType<T>,\n    incoming: InstanceType<T>,\n  ) {\n    if (existing.timestamp > incoming.timestamp) return existing;\n    return incoming;\n  }\n}\n")),(0,a.kt)("h3",{id:"validate"},"static validate(processedEntity): errorMessage?"),(0,a.kt)("p",null,"Runs during both normalize and denormalize. Returning a string indicates an error (the string is the message)."),(0,a.kt)("p",null,"During normalization a validation failure will result in an error for that fetch."),(0,a.kt)("p",null,"During denormalization a validation failure will mark that result as 'invalid' and thus\nwill block on fetching a result."),(0,a.kt)("p",null,"By ",(0,a.kt)("strong",{parentName:"p"},"default")," does some basic field existance checks in development mode only. Override to\ndisable or customize."),(0,a.kt)("h3",{id:"infer"},"static infer(args, indexes, recurse): pk?"),(0,a.kt)("p",null,"Allows Rest Hooks to build a response without having to fetch if its entities can be found."),(0,a.kt)("p",null,"Returning ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," will not infer this entity"),(0,a.kt)("p",null,"Returning ",(0,a.kt)("inlineCode",{parentName:"p"},"pk")," string will attempt to lookup this entity and use in the response."),(0,a.kt)("p",null,"When inferring a response, this entity's expiresAt is used to compute the expiry policy."),(0,a.kt)("p",null,"By ",(0,a.kt)("strong",{parentName:"p"},"default")," uses the first argument to lookup in ",(0,a.kt)("a",{parentName:"p",href:"#pk"},"pk()")," and ",(0,a.kt)("a",{parentName:"p",href:"#indexes"},"indexes")),(0,a.kt)("h3",{id:"expiresat"},"static expiresAt(meta: { expiresAt: number; date: number }, input: any): expiresAt"),(0,a.kt)("p",null,"This determines expiry time when entity is part of a result that is inferred."),(0,a.kt)("p",null,"Overriding can be used to change TTL policy specifically for inferred responses."),(0,a.kt)("h3",{id:"indexes"},"static indexes?: (keyof this)[]"),(0,a.kt)("p",null,"Indexes enable increased performance when doing lookups based on those parameters. Add\nfieldnames (like ",(0,a.kt)("inlineCode",{parentName:"p"},"slug"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"username"),") to the list that you want to send as params to lookup\nlater."),(0,a.kt)("blockquote",null,(0,a.kt)("h4",{parentName:"blockquote",id:"note"},"Note:"),(0,a.kt)("p",{parentName:"blockquote"},"Don't add your primary key like ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," to the indexes list, as that will already be optimized.")),(0,a.kt)("h4",{id:"useresource"},"useResource()"),(0,a.kt)("p",null,"With ",(0,a.kt)("a",{parentName:"p",href:"./useResource"},"useResource()")," this will eagerly infer the results from entities table if possible,\nrendering without needing to complete the fetch. This is typically helpful when the entities\ncache has already been populated by another request like a list request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class UserResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly username: string = '';\n  readonly email: string = '';\n  readonly isAdmin: boolean = false;\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static urlRoot = 'http://test.com/user/';\n\n  // right here\n  static indexes = ['username' as const];\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const user = useResource(UserResource.detail(), { username: 'bob' });\n")),(0,a.kt)("h4",{id:"usecache"},"useCache()"),(0,a.kt)("p",null,"With ",(0,a.kt)("a",{parentName:"p",href:"./useCache"},"useCache()"),", this enables accessing results retrieved inside other requests - even\nif there is no endpoint it can be fetched from."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class LatestPrice extends Entity {\n  readonly id: string = '';\n  readonly symbol: string = '';\n  readonly price: string = '0.0';\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class AssetResource extends Resource {\n  readonly id: string = '';\n  readonly price: string = '';\n\n  static schema = {\n    price: LatestPrice,\n  };\n}\n")),(0,a.kt)("p",null,"Some top level component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const assets = useResource(AssetResource.list(), {});\n")),(0,a.kt)("p",null,"Nested below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const price = useCache(LatestPrice, { symbol: 'BTC' });\n")),(0,a.kt)("h3",{id:"schema"},"static schema: { ","[k: keyof this]",": Schema }"),(0,a.kt)("p",null,"Set this to ",(0,a.kt)("a",{parentName:"p",href:"../guides/nested-response"},"define entities nested")," inside this one."),(0,a.kt)("p",null,"Additionally can be used to ",(0,a.kt)("a",{parentName:"p",href:"../guides/network-transform#deserializing-fields"},"declare field deserialization")),(0,a.kt)(i.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const postSample = () =>\n  Promise.resolve({\n    id: '5',\n    author: { id: '123', name: 'Jim' },\n    content: 'Happy day',\n    createdAt: '2019-01-23T06:07:48.311Z',\n  });\n\nclass User extends Entity {\n  readonly name: string = '';\n  pk() {\n    return this.id;\n  }\n}\nclass Post extends Entity {\n  readonly author: User = User.fromJS({});\n  readonly createdAt: Date = new Date(0);\n  static schema = {\n    author: User,\n    createdAt: Date,\n  };\n  pk() {\n    return this.id;\n  }\n}\nconst postDetail = new Endpoint(postSample, {\n  schema: Post,\n});\nfunction PostPage() {\n  const post = useResource(postDetail, { id: '123' });\n  return (\n    <div>\n      <p>\n        {post.content} - <cite>{post.author.name}</cite>\n      </p>\n      <time>\n        {Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(\n          post.createdAt,\n        )}\n      </time>\n    </div>\n  );\n}\nrender(<PostPage />);\n"))),(0,a.kt)("h4",{id:"optional-members"},"Optional members"),(0,a.kt)("p",null,"Entities references here whose default values in the Record definition itself are\nconsidered 'optional'"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class User extends Entity {\n  readonly friend: User | null = null; // this field is optional\n  readonly lastUpdated: Date = new Date(0);\n\n  static schema = {\n    friend: User,\n    lastUpdated: Date,\n  };\n}\n")))}p.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);