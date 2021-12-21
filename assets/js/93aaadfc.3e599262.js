"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[275],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<s;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294);const o=function(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",hidden:r,className:o},t)}},9877:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(87462),o=r(67294),s=r(72389),a=r(80944),l=r(53810),i=r(86010);const u="tabItem_1uMI";function c(e){var t,r;const{lazy:s,block:c,defaultValue:p,values:d,groupId:m,className:f}=e,v=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=d??v.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),b=(0,l.lx)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??(null==(r=v[0])?void 0:r.props.value);if(null!==k&&!y.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:g}=(0,a.Z)(),[x,w]=(0,o.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:A}=(0,l.o5)();if(null!=m){const e=h[m];null!=e&&e!==x&&y.some((t=>t.value===e))&&w(e)}const R=e=>{const t=e.currentTarget,r=N.indexOf(t),n=y[r].value;n!==x&&(A(t),w(n),null!=m&&g(m,n))},T=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;r=N[t]||N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;r=N[t]||N[N.length-1];break}}null==(t=r)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},f)},y.map((e=>{let{value:t,label:r,attributes:s}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>N.push(e),onKeyDown:T,onFocus:R,onClick:R},s,{className:(0,i.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":x===t})}),r??t)}))),s?(0,o.cloneElement)(v.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function p(e){const t=(0,s.Z)();return o.createElement(c,(0,n.Z)({key:String(t)},e))}},80944:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),o=r(79443);const s=function(){const e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},45291:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>u,toc:()=>c,default:()=>f});var n=r(87462),o=(r(67294),r(3905)),s=r(9877),a=r(58215);const l={title:"Mocking data for Storybook"},i=void 0,u={unversionedId:"guides/storybook",id:"version-6.0/guides/storybook",title:"Mocking data for Storybook",description:"Storybook is a great utility to do isolated development and",source:"@site/versioned_docs/version-6.0/guides/storybook.md",sourceDirName:"guides",slug:"/guides/storybook",permalink:"/docs/6.0/guides/storybook",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/storybook.md",tags:[],version:"6.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1631647374,formattedLastUpdatedAt:"9/14/2021",frontMatter:{title:"Mocking data for Storybook"},sidebar:"version-6.0/docs",previous:{title:"Debugging",permalink:"/docs/6.0/guides/debugging"},next:{title:"Unit testing hooks",permalink:"/docs/6.0/guides/unit-testing-hooks"}},c=[{value:"Setup",id:"setup",children:[],level:2},{value:"Fixtures",id:"fixtures",children:[],level:2},{value:"Decorators",id:"decorators",children:[{value:"<code>.storybook/preview.tsx</code>",id:"storybookpreviewtsx",children:[],level:4}],level:2},{value:"Story",id:"story",children:[{value:"<code>ArticleList.stories.tsx</code>",id:"articleliststoriestsx",children:[],level:4}],level:2}],p=(d="MockResolver",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const m={toc:c};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://storybook.js.org/"},"Storybook")," is a great utility to do isolated development and\ntesting, potentially speeding up development time greatly."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/6.0/api/MockResolver"},"\\",(0,o.kt)(p,{mdxType:"MockResolver"}))," enables easy loading of fixtures to see what\ndifferent network responses might look like. It can be layered, composed, and even used\nfor ",(0,o.kt)("a",{parentName:"p",href:"../api/useFetcher"},"imperative fetches")," like ",(0,o.kt)("a",{parentName:"p",href:"../api/resource#create-endpoint"},"create")," and ",(0,o.kt)("a",{parentName:"p",href:"../api/resource#update-endpoint"},"update"),"."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)(s.Z,{defaultValue:"ArticleResource.ts",values:[{label:"ArticleResource.ts",value:"ArticleResource.ts"},{label:"ArticleList.tsx",value:"ArticleList.tsx"}],mdxType:"Tabs"},(0,o.kt)(a.Z,{value:"ArticleResource.ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export default class ArticleResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly contributors: number[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = 'http://test.com/article/';\n}\n"))),(0,o.kt)(a.Z,{value:"ArticleList.tsx",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import ArticleResource from 'resources/ArticleResource';\nimport ArticleSummary from './ArticleSummary';\n\nexport default function ArticleList({ maxResults }: { maxResults: number }) {\n  const articles = useResource(ArticleResource.list(), { maxResults });\n  return (\n    <div>\n      {articles.map(article => (\n        <ArticleSummary key={article.pk()} article={article} />\n      ))}\n    </div>\n  );\n}\n")))),(0,o.kt)("h2",{id:"fixtures"},"Fixtures"),(0,o.kt)("p",null,"We'll test three cases: some interesting results in the list, an empty list, and data not\nexisting so loading fallback is shown."),(0,o.kt)("details",{open:!0},(0,o.kt)("summary",null,(0,o.kt)("b",null,"fixtures.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  full: [\n    {\n      endpoint: ArticleResource.list(),\n      args: [{ maxResults: 10 }] as const,\n      response: [\n        {\n          id: 5,\n          content: 'have a merry christmas',\n          author: 2,\n          contributors: [],\n        },\n        {\n          id: 532,\n          content: 'never again',\n          author: 23,\n          contributors: [5],\n        },\n      ],\n    },\n    {\n      endpoint: ArticleResource.update(),\n      args: [{ id: 532 }] as const,\n      response: {\n        id: 532,\n        content: 'updated \"never again\"',\n        author: 23,\n        contributors: [5],\n      },\n    },\n  ],\n  empty: [\n    {\n      endpoint: ArticleResource.list(),\n      args: [{ maxResults: 10 }] as const,\n      response: [],\n    },\n  ],\n  error: [\n    {\n      endpoint: ArticleResource.list(),\n      args: [{ maxResults: 10 }] as const,\n      response: { message: 'Bad request', status: 400, name: 'Not Found' },\n      error: true,\n    },\n  ],\n  loading: [],\n};\n"))),(0,o.kt)("h2",{id:"decorators"},"Decorators"),(0,o.kt)("p",null,"You'll need to add the appropriate ",(0,o.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/react/writing-stories/decorators#global-decorators"},"global decorators")," to establish the correct context."),(0,o.kt)("p",null,"This should resemble what you have added in ",(0,o.kt)("a",{parentName:"p",href:"../getting-started/installation#add-provider-at-top-level-component"},"initial setup")),(0,o.kt)("h4",{id:"storybookpreviewtsx"},(0,o.kt)("inlineCode",{parentName:"h4"},".storybook/preview.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Suspense } from 'react';\nimport { CacheProvider, NetworkErrorBoundary } from 'rest-hooks';\n\nexport const decorators = [\n  Story => (\n    <CacheProvider>\n      <Suspense fallback=\"loading\">\n        <NetworkErrorBoundary>\n          <Story />\n        </NetworkErrorBoundary>\n      </Suspense>\n    </CacheProvider>\n  ),\n];\n")),(0,o.kt)("h2",{id:"story"},"Story"),(0,o.kt)("p",null,"Wrapping our component with \\",(0,o.kt)(p,{mdxType:"MockResolver"})," enables us to declaratively\ncontrol how Rest Hooks' fetches are resolved."),(0,o.kt)("p",null,"Here we select which fixtures should be used by ",(0,o.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/react/essentials/controls"},"storybook controls"),"."),(0,o.kt)("h4",{id:"articleliststoriestsx"},(0,o.kt)("inlineCode",{parentName:"h4"},"ArticleList.stories.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { MockResolver } from '@rest-hooks/test';\nimport type { Fixture } from '@rest-hooks/test';\nimport { Story } from '@storybook/react/types-6-0';\n\nimport ArticleList from 'ArticleList';\nimport options from './fixtures';\n\nexport default {\n  title: 'Pages/ArticleList',\n  component: ArticleList,\n  argTypes: {\n    result: {\n      description: 'Results',\n      defaultValue: 'full',\n      control: {\n        type: 'select',\n        options: Object.keys(options),\n      },\n    },\n  },\n};\n\nconst Template: Story<{ result: keyof typeof options }> = ({ result }) => (\n  <MockResolver fixtures={options[result]}>\n    <ArticleList maxResults={10} />\n  </MockResolver>\n);\n\nexport const FullArticleList = Template.bind({});\n\nFullArticleList.args = {\n  result: 'full',\n};\n")))}f.isMDXComponent=!0}}]);