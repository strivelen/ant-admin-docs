"use strict";(self.webpackChunkant_admin_docs=self.webpackChunkant_admin_docs||[]).push([[239],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,b=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(b,o(o({ref:t},u),{},{components:a})):n.createElement(b,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3895:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>w,frontMatter:()=>v,metadata:()=>y,toc:()=>N});var n=a(7462),r=a(7294),l=a(3905),o=a(6010),i=a(2389),s=a(7392),p=a(7094),u=a(2466);const c="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:a,block:l,defaultValue:i,values:m,groupId:b,className:f}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,s.l)(v,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===i?i:i??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:N}=(0,p.U)(),[O,w]=(0,r.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=b){const e=g[b];null!=e&&e!==O&&v.some((t=>t.value===e))&&w(e)}const j=e=>{const t=e.currentTarget,a=T.indexOf(t),n=v[a].value;n!==O&&(E(t),w(n),null!=b&&N(b,String(n)))},x=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},f)},v.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>T.push(e),onKeyDown:x,onFocus:j,onClick:j},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":O===t})}),a??t)}))),a?(0,r.cloneElement)(k.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function b(e){const t=(0,i.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}const f="tabItem_Ymn6";function k(e){let{children:t,hidden:a,className:n}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(f,n),hidden:a},t)}const v={sidebar_position:2,title:"\u5feb\u901f\u5f00\u59cb"},h=void 0,y={unversionedId:"quick-start",id:"quick-start",title:"\u5feb\u901f\u5f00\u59cb",description:"\u73b0\u5728\u6765\u521b\u5efa\u4e00\u4e2a\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u7f51\u7ad9\u3002",source:"@site/docs/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/ant-admin-docs/quick-start",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quick-start.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u5feb\u901f\u5f00\u59cb"},sidebar:"tutorialSidebar",previous:{title:"\u4ecb\u7ecd",permalink:"/ant-admin-docs/"},next:{title:"\u9875\u9762",permalink:"/ant-admin-docs/guide/page"}},g={},N=[{value:"\u4f60\u9700\u8981\u505a\u4ec0\u4e48",id:"\u4f60\u9700\u8981\u505a\u4ec0\u4e48",level:3},{value:"\u521b\u5efa\u9879\u76ee",id:"\u521b\u5efa\u9879\u76ee",level:2},{value:"\u672c\u5730\u8fd0\u884c\uff1a",id:"\u672c\u5730\u8fd0\u884c",level:4},{value:"\u751f\u4ea7\u6784\u5efa\uff1a",id:"\u751f\u4ea7\u6784\u5efa",level:4},{value:"\u9879\u76ee\u914d\u7f6e",id:"\u9879\u76ee\u914d\u7f6e",level:2},{value:"\u7b2c\u4e00\u6b65\uff1a\u7f51\u7edc\u8bf7\u6c42\u76f8\u5173\u914d\u7f6e",id:"\u7b2c\u4e00\u6b65\u7f51\u7edc\u8bf7\u6c42\u76f8\u5173\u914d\u7f6e",level:3},{value:"\u7b2c\u4e8c\u6b65\uff1a\u767b\u5f55\u6d41\u7a0b\u76f8\u5173\u8c03\u6574",id:"\u7b2c\u4e8c\u6b65\u767b\u5f55\u6d41\u7a0b\u76f8\u5173\u8c03\u6574",level:3},{value:"\u7b2c\u4e09\u6b65\uff1a\u9875\u9762\u6743\u9650\u76f8\u5173\u914d\u7f6e",id:"\u7b2c\u4e09\u6b65\u9875\u9762\u6743\u9650\u76f8\u5173\u914d\u7f6e",level:3},{value:"\u2714 \u5b8c\u6210",id:"-\u5b8c\u6210",level:3}],O={toc:N};function w(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},O,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u73b0\u5728\u6765\u521b\u5efa\u4e00\u4e2a\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u7f51\u7ad9\u3002"),(0,l.kt)("h3",{id:"\u4f60\u9700\u8981\u505a\u4ec0\u4e48"},"\u4f60\u9700\u8981\u505a\u4ec0\u4e48"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5",(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js"),"14.x\u6216\u4ee5\u4e0a\u7248\u672c\u3002")),(0,l.kt)("h2",{id:"\u521b\u5efa\u9879\u76ee"},"\u521b\u5efa\u9879\u76ee"),(0,l.kt)(b,{mdxType:"Tabs"},(0,l.kt)(k,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create react-app [project-name] --template ant-admin\n"))),(0,l.kt)(k,{value:"npm",label:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm create-react-app [project-name] --template ant-admin\n")))),(0,l.kt)("p",null,"\u9879\u76ee\u6a21\u677f\u5728\u4e0b\u8f7d\u4e0b\u6765\u540e\u4f1a\u81ea\u52a8\u5b89\u88c5\u9879\u76ee\u4f9d\u8d56\uff0c\u56e0\u6b64\u4e0d\u9700\u8981\u624b\u52a8\u5b89\u88c5\u9879\u76ee\u4f9d\u8d56\u3002"),(0,l.kt)("h4",{id:"\u672c\u5730\u8fd0\u884c"},"\u672c\u5730\u8fd0\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Yarn\nyarn start\n\n# npm\nnpm start\n")),(0,l.kt)("h4",{id:"\u751f\u4ea7\u6784\u5efa"},"\u751f\u4ea7\u6784\u5efa\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Yarn\nyarn build\n\n# npm\nnpm build\n")),(0,l.kt)("p",null,"\u6784\u5efa\u540e\u7684\u751f\u4ea7\u5305\u5728\u9879\u76ee\u4e0b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," \u76ee\u5f55\uff0c\u6709\u5173\u90e8\u7f72\u7684\u8be6\u7ec6\u4fe1\u606f\u3002\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"https://facebook.github.io/create-react-app/docs/deployment"},"\u90e8\u7f72\u90e8\u5206")," \u3002"),(0,l.kt)("p",null,"\u5728\u5f00\u53d1\u6a21\u5f0f\u4e0b\u8fd0\u884c\u7a0b\u5e8f\uff0c\u4f7f\u7528\u6d4f\u89c8\u5668\u6253\u5f00  ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," \u8fdb\u884c\u67e5\u770b\u3002"),(0,l.kt)("h2",{id:"\u9879\u76ee\u914d\u7f6e"},"\u9879\u76ee\u914d\u7f6e"),(0,l.kt)("h3",{id:"\u7b2c\u4e00\u6b65\u7f51\u7edc\u8bf7\u6c42\u76f8\u5173\u914d\u7f6e"},"\u7b2c\u4e00\u6b65\uff1a\u7f51\u7edc\u8bf7\u6c42\u76f8\u5173\u914d\u7f6e"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"p"},"/src/app/config.ts")," \u6587\u4ef6\uff0c\u627e\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"apiHosts")," \u5c5e\u6027\uff0c\u5c06\u6b64\u5c5e\u6027\u503c\u6539\u4e3a\u60a8\u5c06\u8981\u4f7f\u7528\u7684\u540e\u53f0\u670d\u52a1hosts\u3002\u5982\uff1a\u201c ",(0,l.kt)("a",{parentName:"p",href:"http://api.baidu.com/api"},"http://api.baidu.com/api")," \u201d\u3002\u5982\u679c\u60a8\u7684\u63a5\u53e3\u5728\u8bf7\u6c42\u65f6\u9700\u8981\u643a\u5e26 ",(0,l.kt)("inlineCode",{parentName:"p"},"sessionkey"),"\uff0c\u90a3\u4e48\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"apiSessionKey")," \u5c5e\u6027\u7684\u503c\u6539\u4e3a\u60a8\u7684sessionKey Name\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"p"},"/src/util/axios.ts")," \u6587\u4ef6\uff0c\u627e\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"DTOModel")," ts\u63a5\u53e3\uff08\u6b64\u63a5\u53e3\u63cf\u8ff0\u7684\u662fapi\u8fd4\u56de\u503c\u5bf9\u8c61\u7684\u4e3b\u4f53\u7ed3\u6784\u7c7b\u578b\uff09\uff0c\u4fee\u6539\u6b64 ",(0,l.kt)("inlineCode",{parentName:"p"},"interface")," \u7c7b\u578b\u5e76\u4fee\u590d\u7531\u6b64\u5f15\u53d1\u7684\u5f53\u524d\u6587\u4ef6\u4ea7\u751f\u7684ts\u63d0\u793a\u9519\u8bef\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u81ea\u6b64\u5c31\u5b8c\u6210\u4e86\u7f51\u7edc\u8bf7\u6c42\u76f8\u5173\u914d\u7f6e\u3002"))),(0,l.kt)("h3",{id:"\u7b2c\u4e8c\u6b65\u767b\u5f55\u6d41\u7a0b\u76f8\u5173\u8c03\u6574"},"\u7b2c\u4e8c\u6b65\uff1a\u767b\u5f55\u6d41\u7a0b\u76f8\u5173\u8c03\u6574"),(0,l.kt)("p",null,"\u6b64\u6a21\u677f\u81ea\u5e26\u767b\u5f55\u9875\u9762\uff0c\u8fdb\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"/src/page/Login/Login.tsx")," \u6587\u4ef6\u6839\u636e\u9700\u6c42\u81ea\u884c\u8c03\u6574\u3002"),(0,l.kt)("h3",{id:"\u7b2c\u4e09\u6b65\u9875\u9762\u6743\u9650\u76f8\u5173\u914d\u7f6e"},"\u7b2c\u4e09\u6b65\uff1a\u9875\u9762\u6743\u9650\u76f8\u5173\u914d\u7f6e"),(0,l.kt)("p",null,"\u627e\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"/src/component/RequireAuth.tsx")," \u6587\u4ef6\u6839\u636e\u9700\u6c42\u81ea\u884c\u8c03\u6574\u3002"),(0,l.kt)("h3",{id:"-\u5b8c\u6210"},"\u2714 \u5b8c\u6210"),(0,l.kt)("p",null,"\u8d70\u5b8c\u8fd9\u4e09\u6b65\uff0c\u9879\u76ee\u76f8\u5173\u914d\u7f6e\u5b8c\u6210\uff0c\u63a5\u4e0b\u6765\u5373\u53ef\u8fdb\u884c\u4e1a\u52a1\u5f00\u53d1\u3002"))}w.isMDXComponent=!0}}]);