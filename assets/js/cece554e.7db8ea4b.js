"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[594],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=l(a),m=r,u=c["".concat(p,".").concat(m)]||c[m]||g[m]||i;return a?n.createElement(u,s(s({ref:t},d),{},{components:a})):n.createElement(u,s({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3620:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={slug:"pre-rendering-in-Nextjs",title:"Next.js\u4e2d\u7684\u9884\u6e32\u67d3",authors:["Bailing"],tags:["Front End"]},s=void 0,o={permalink:"/website/blog/pre-rendering-in-Nextjs",source:"@site/blog/2023-02-12-Pre-rendering-in-Nextjs.md",title:"Next.js\u4e2d\u7684\u9884\u6e32\u67d3",description:"\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cNext.js \u4f1a\u9884\u6e32\u67d3\u6bcf\u4e2a\u9875\u9762\u3002\u8fd9\u610f\u5473\u7740 Next.js \u4f1a\u63d0\u524d\u4e3a\u6bcf\u4e2a\u9875\u9762\u751f\u6210 HTML\uff0c\u800c\u4e0d\u662f\u5168\u90e8\u7531\u5ba2\u6237\u7aef JavaScript \u5b8c\u6210\u3002\u9884\u6e32\u67d3\u53ef\u4ee5\u5e26\u6765\u66f4\u597d\u7684\u6027\u80fd\u548cSEO\uff08Search engine optimization\uff0c\u641c\u7d22\u5f15\u64ce\u4f18\u5316\uff09\u3002",date:"2023-02-12T00:00:00.000Z",formattedDate:"2023\u5e742\u670812\u65e5",tags:[{label:"Front End",permalink:"/website/blog/tags/front-end"}],readingTime:7.425,hasTruncateMarker:!1,authors:[{name:"Bailing Lan",title:"Front End Engineer",url:"https://github.com/Miraling",imageURL:"https://openmoji.org/data/color/svg/1F423.svg",key:"Bailing"}],frontMatter:{slug:"pre-rendering-in-Nextjs",title:"Next.js\u4e2d\u7684\u9884\u6e32\u67d3",authors:["Bailing"],tags:["Front End"]},prevItem:{title:"\u654f\u6377\u6846\u67b6Scrum",permalink:"/website/blog/what-is-Scrum"}},p={authorsImageUrls:[void 0]},l=[{value:"Static Generation\u548c Server-side Rendering",id:"static-generation\u548c-server-side-rendering",level:2},{value:"Static Generation",id:"static-generation",level:2},{value:"Static Generation with data",id:"static-generation-with-data",level:3},{value:"\u65b9\u6cd5\uff1a <code>getStaticProps</code>",id:"\u65b9\u6cd5-getstaticprops",level:4},{value:"\u4eceAPI\u62ff\u6570\u636e",id:"\u4eceapi\u62ff\u6570\u636e",level:4},{value:"\u4ece\u6570\u636e\u5e93\u62ff\u6570\u636e",id:"\u4ece\u6570\u636e\u5e93\u62ff\u6570\u636e",level:4},{value:"Static Generation with data \u603b\u7ed3",id:"static-generation-with-data-\u603b\u7ed3",level:3},{value:"Server-side Rendering With Data",id:"server-side-rendering-with-data",level:2},{value:"Client-side Rendering",id:"client-side-rendering",level:2},{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f",level:3},{value:"\u9002\u5e94\u573a\u666f\u4e3e\u4f8b",id:"\u9002\u5e94\u573a\u666f\u4e3e\u4f8b",level:3},{value:"SWR",id:"swr",level:3}],d={toc:l},c="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cNext.js \u4f1a\u9884\u6e32\u67d3\u6bcf\u4e2a\u9875\u9762\u3002\u8fd9\u610f\u5473\u7740 Next.js \u4f1a\u63d0\u524d\u4e3a\u6bcf\u4e2a\u9875\u9762\u751f\u6210 HTML\uff0c\u800c\u4e0d\u662f\u5168\u90e8\u7531\u5ba2\u6237\u7aef JavaScript \u5b8c\u6210\u3002\u9884\u6e32\u67d3\u53ef\u4ee5\u5e26\u6765\u66f4\u597d\u7684\u6027\u80fd\u548cSEO\uff08Search engine optimization\uff0c\u641c\u7d22\u5f15\u64ce\u4f18\u5316\uff09\u3002"),(0,r.kt)("p",null,"\u6bcf\u4e2a\u751f\u6210\u7684 HTML \u90fd\u4e0e\u8be5\u9875\u9762\u6240\u9700\u7684\u6700\u5c11 JavaScript \u4ee3\u7801\u76f8\u5173\u3002\u5f53\u6d4f\u89c8\u5668\u52a0\u8f7d\u9875\u9762\u65f6\uff0c\u5176 JavaScript \u4ee3\u7801\u5c06\u8fd0\u884c\u5e76\u4f7f\u9875\u9762\u5b8c\u5168\u4ea4\u4e92\u3002\uff08\u8fd9\u4e2a\u8fc7\u7a0b\u79f0\u4e3a",(0,r.kt)("strong",{parentName:"p"},"hydration"),"\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u6c34\u5408\u4f5c\u7528"),"\u3002\uff09"),(0,r.kt)("p",null,"Next.js\u7684\u9884\u6e32\u67d3\u5206\u4e3a\u4e24\u79cd\u5f62\u5f0f\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/pages#static-generation-recommended"},"Static Generation"),"\u548c",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/pages#server-side-rendering"},"Server-side Rendering"),"\u3002\u5176\u4e2d\uff0c\nStatic Generation \u53c8\u5206\u4e3a\xa0",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/pages#static-generation-with-data"},"with data"),", \u548c\xa0",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/pages#static-generation-without-data"},"without data")," \u4e24\u79cd\u60c5\u51b5\u3002\u63a5\u4e0b\u6765\u6211\u4f1a\u5206\u522b\u8bb2\u8bb2\u6bcf\u4e00\u79cd\u60c5\u51b5\u3002"),(0,r.kt)("h2",{id:"static-generation\u548c-server-side-rendering"},"Static Generation\u548c Server-side Rendering"),(0,r.kt)("p",null,"Next.js \u6709\u4e24\u79cdpre-rendering\u5f62\u5f0f\uff0cStatic Generation\u548c Server-side Rendering\uff0c\u4ee5\u4e0b\u662f\u5b98\u65b9\u7684\u89e3\u91ca\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/basic-features/pages#static-generation-recommended"},(0,r.kt)("strong",{parentName:"a"},"Static Generation")),": generates the HTML at\xa0",(0,r.kt)("strong",{parentName:"li"},"build time"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/basic-features/pages#server-side-rendering"},(0,r.kt)("strong",{parentName:"a"},"Server-side Rendering")),": generates the HTML on\xa0",(0,r.kt)("strong",{parentName:"li"},"each request"),";")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"\u5f00\u53d1\u6a21\u5f0f"),"\u4e0b\uff08\u8fd0\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"yarn dev"),"\u65f6\uff09\uff0c\u9875\u9762\u5728\u6bcf\u6b21request\u7684\u65f6\u5019\u9884\u6e32\u67d3\u3002 \u8fd9\u4e5f\u9002\u7528\u4e8e\u9759\u6001\u751f\u6210\uff0c\u4f7f\u5176\u66f4\u6613\u4e8e\u5f00\u53d1\u3002\n",(0,r.kt)("em",{parentName:"p"},"\u6295\u5165\u751f\u4ea7"),"\u65f6\uff0c\u9759\u6001\u751f\u6210\u5c06\u5728\u6784\u5efa\u65f6\u53d1\u751f\u4e00\u6b21\uff0c\u800c",(0,r.kt)("strong",{parentName:"p"},"\u4e0d\u662f"),"\u5728\u6bcf\u6b21\u8bf7\u6c42\u65f6\u53d1\u751f\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"\u6211\u4eec\u53ef\u4ee5\u5206\u522b\u4e3a\u6bcf\u4e2apage\u8bbe\u7f6epre-rendering\u5f62\u5f0f")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4f60\u5e94\u8be5\u95ee\u95ee\u81ea\u5df1\uff1a\u201c\u6211\u53ef\u4ee5\u5728\u7528\u6237\u8bf7\u6c42\u4e4b\u524d",(0,r.kt)("strong",{parentName:"p"},"\u9884\u6e32\u67d3"),"\u6b64\u9875\u9762\u5417\uff1f\u201d\xa0\u5982\u679c\u7b54\u6848\u662f\u80af\u5b9a\u7684\uff0c\u90a3\u4e48\u4f60\u5e94\u8be5\u9009\u62e9",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/pages#static-generation-recommended"},"Static Generation"),"\u3002")),(0,r.kt)("h2",{id:"static-generation"},"Static Generation"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/pages#static-generation-recommended"},"Static Generation"),"\xa0can be done with and without data.\n\u9759\u6001\u751f\u6210\u6709\u4ee5\u4e0b\u4e24\u79cd",(0,r.kt)("inlineCode",{parentName:"p"},"pre-rendering"),"\u65b9\u5f0f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"build\u65f6"),"\u8bf7\u6c42\u5916\u90e8data\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"build\u65f6\u4e0d\u9700\u8981"),"\u8bf7\u6c42\u5916\u90e8data\uff0c\u4f46\u5728\u7528\u6237\u7aef\u9700\u8981\u8bf7\u6c42data\uff0c\u6bd4\u5982\u7528\u6237dashboard\uff0c\u5176\u6e32\u67d3\u7684data\u662f\u6839\u636e\u7528\u6237\u9ad8\u5ea6\u5dee\u5f02\u5316\u7684\uff0c\u5e76\u4e14\u6709\u65f6\u6548\u6027\u8981\u6c42\uff0c\u65e0\u6cd5\u5728build\u65f6\u51c6\u5907\u597d\u6240\u6709data\uff0c\u6240\u4ee5\u5728build\u65f6\u4e0d\u8bf7\u6c42data\uff0c\u5728\u5ba2\u6237\u7aef\u8bf7\u6c42\u5bf9\u5e94\u7684data\uff1b")),(0,r.kt)("h3",{id:"static-generation-with-data"},"Static Generation with data"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u67d0\u4e9b\u9875\u9762\uff0c\u5982\u679c\u4e0d\u9996\u5148\u83b7\u53d6\u4e00\u4e9b\u5916\u90e8\u6570\u636e\uff0c\u53ef\u80fd\u65e0\u6cd5\u5448\u73b0 HTML\u3002\u4e5f\u8bb8\u9700\u8981\u5728\u6784\u5efa\u65f6\u8bbf\u95ee\u6587\u4ef6\u7cfb\u7edf\u3001\u83b7\u53d6\u5916\u90e8 API \u6216\u67e5\u8be2\u6570\u636e\u5e93\u3002Next.js\u5f00\u7bb1\u5373\u7528\u5730\u652f\u6301\u8fd9\u79cd\u60c5\u51b5\u2014\u2014",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/pages#static-generation-with-data"},(0,r.kt)("strong",{parentName:"a"},"\u5e26\u6570\u636e\u7684\u9759\u6001\u751f\u6210"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://nextjs.org/static/images/learn/data-fetching/static-generation-with-data.png",alt:"Image about Static Generation with Data From Next.js Document"})),(0,r.kt)("h4",{id:"\u65b9\u6cd5-getstaticprops"},"\u65b9\u6cd5\uff1a ",(0,r.kt)("inlineCode",{parentName:"h4"},"getStaticProps")),(0,r.kt)("p",null,"\u5728 Next.js \u4e2d\uff0c\u5bfc\u51fa\u9875\u9762\u7ec4\u4ef6\u65f6\uff0c\u4f60\u53ef\u4ee5\u5bfc\u51fa\u4e00\u4e2a\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps")," \u7684",(0,r.kt)("inlineCode",{parentName:"p"},"async")," function\uff08\u5f02\u6b65\u51fd\u6570\uff09\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation"},(0,r.kt)("inlineCode",{parentName:"a"},"getStaticProps")),"\u5728\u751f\u4ea7\u4e2d\u7684 ",(0,r.kt)("em",{parentName:"li"},"\u6784\u5efa")," \u65f6\u8fd0\u884c"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u51fd\u6570\u5185\u90e8\uff0c\u53ef\u4ee5\u83b7\u53d6\u5916\u90e8\u6570\u636e\u5e76\u5c06\u5176\u4f5c\u4e3aprops\u53d1\u9001\u5230page\u3002")),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"export default function Home(props) { ... }\n\nexport async function getStaticProps() {\n  // Get external data from the file system, API, DB, etc.\n  const data = ...\n\n  // The value of the `props` key will be\n  //  passed to the `Home` component\n  return {\n    props: ...\n  }\n}\n")),(0,r.kt)("p",null,"\u8fd9\u662f\u4e00\u6bb5\u5b98\u7f51\u89e3\u91ca\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Essentially,\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps")," allows you to tell Next.js:\xa0",(0,r.kt)("em",{parentName:"p"},"\u201cHey, this page has some data dependencies \u2014 so when you pre-render this page at build time, make sure to resolve them first!\u201d")),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": In ",(0,r.kt)("strong",{parentName:"p"},"development mode"),",\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps")," \xa0runs on each request instead.")),(0,r.kt)("h4",{id:"\u4eceapi\u62ff\u6570\u636e"},"\u4eceAPI\u62ff\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export async function getSortedPostsData() {\n  // Instead of the file system,\n  // fetch post data from an external API endpoint\n  const res = await fetch('..');\n  return res.json();\n}\n")),(0,r.kt)("h4",{id:"\u4ece\u6570\u636e\u5e93\u62ff\u6570\u636e"},"\u4ece\u6570\u636e\u5e93\u62ff\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import someDatabaseSDK from 'someDatabaseSDK'\n\nconst databaseClient = someDatabaseSDK.createClient(...)\n\nexport async function getSortedPostsData() {\n  // Instead of the file system,\n  // fetch post data from a database\n  return databaseClient.query('SELECT posts...')\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps"),"\u53ea",(0,r.kt)("strong",{parentName:"p"},"\u5728\u670d\u52a1\u5668\u7aef\u8fd0\u884c"),"\u3002\u5b83\u6c38\u8fdc\u4e0d\u4f1a\u5728\u5ba2\u6237\u7aef\u8fd0\u884c\u3002\u5b83\u751a\u81f3\u4e0d\u4f1a\u5305\u542b\u5728\u6d4f\u89c8\u5668\u7684 JS \u5305\u4e2d\u3002\u8fd9\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u7f16\u5199\u76f4\u63a5\u6570\u636e\u5e93\u67e5\u8be2\u7b49\u4ee3\u7801\uff0c\u800c\u65e0\u9700\u5c06\u5b83\u4eec\u53d1\u9001\u5230\u6d4f\u89c8\u5668\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728",(0,r.kt)("strong",{parentName:"p"},"\u5f00\u53d1"),"\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"yarn dev"),"\uff09\u4e2d\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation"},(0,r.kt)("inlineCode",{parentName:"a"},"getStaticProps")),"\u5728 ",(0,r.kt)("em",{parentName:"p"},"\u6bcf\u4e2a\u8bf7\u6c42\uff08request\uff09")," \u4e0a\u8fd0\u884c\u3002\n\u5728",(0,r.kt)("strong",{parentName:"p"},"\u751f\u4ea7"),"\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps"),"\u5728 ",(0,r.kt)("em",{parentName:"p"},"\u6784\u5efa\u65f6")," \u8fd0\u884c\u3002\u4f46\u662f\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticPaths"),"\u8fd4\u56de\u7684",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#fallback-false"},(0,r.kt)("inlineCode",{parentName:"a"},"fallback")," key "),"\u6765\u589e\u5f3a\u6b64\u884c\u4e3a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps"),"\u53ea\u80fd\u4ece",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/pages"},(0,r.kt)("strong",{parentName:"a"},"page")),"\u5bfc\u51fa\u3002\u4e0d\u80fd\u4ecenon-page\u6587\u4ef6\u4e2d\u5bfc\u51fa\u5b83\u3002")),(0,r.kt)("h3",{id:"static-generation-with-data-\u603b\u7ed3"},"Static Generation with data \u603b\u7ed3"),(0,r.kt)("p",null,"\u7531\u4e8e",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/pages#static-generation-recommended"},"\u9759\u6001\u751f\u6210"),"\u5728 ",(0,r.kt)("em",{parentName:"p"},"build")," \u65f6\u53d1\u751f\u4e00\u6b21\uff0c\u56e0\u6b64\u5b83\u4e0d\u9002\u5408\u9891\u7e41\u66f4\u65b0\u6216\u6839\u636e\u6bcf\u4e2a\u7528\u6237\u8bf7\u6c42\u66f4\u6539\u7684\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u7684\u6570\u636e\u53ef\u80fd\u4f1a\u53d1\u751f\u53d8\u5316\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("strong",{parentName:"p"},"\u670d\u52a1\u5668\u7aef\u6e32\u67d3"),"\u3002"),(0,r.kt)("h2",{id:"server-side-rendering-with-data"},"Server-side Rendering With Data"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://nextjs.org/static/images/learn/data-fetching/server-side-rendering-with-data.png",alt:null})),(0,r.kt)("p",null,"\u4e3a\u4e86\u4f7f\u7528\xa0",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/pages#server-side-rendering"},"Server-side Rendering")," \u4f60\u9700\u8981\u4ece\u9875\u9762\u5bfc\u51fa\xa0",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering"},(0,r.kt)("inlineCode",{parentName:"a"},"getServerSideProps"))," \u65b9\u6cd5\xa0\u800c\u4e0d\u662f\u4e4b\u524d \u63d0\u5230\u7684\xa0",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation"},(0,r.kt)("inlineCode",{parentName:"a"},"getStaticProps")),"\xa0\u65b9\u6cd5\u3002"),(0,r.kt)("p",null,"\u4ec5\u5f53\u4f60\u9700\u8981\u9884\u6e32\u67d3\u7684\u6570\u636e",(0,r.kt)("strong",{parentName:"p"},"\u5fc5\u987b"),"\u5728\u8bf7\u6c42\u65f6\u83b7\u53d6\uff0c\u624d\u5e94\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),"\u3002\n\u8fd9\u4e48\u505a\uff0c\u7528\u6237\u63a5\u6536\u5230\u9875\u9762\u7b2c\u4e00\u4e2a\u5b57\u8282\u6240\u82b1\u8d39\u7684\u65f6\u95f4time to first byte (",(0,r.kt)("a",{parentName:"p",href:"https://web.dev/time-to-first-byte/"},"TTFB"),") \u4f1a\u6bd4\xa0",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation"},(0,r.kt)("inlineCode",{parentName:"a"},"getStaticProps")),"\xa0\u957f\uff0c\u56e0\u4e3a\u670d\u52a1\u5668\u8981\u8ba1\u7b97\u6bcf\u4e00\u4e2arequest\u7684\u7ed3\u679c\uff0c \u5e76\u4e14\u5982\u679c\u6ca1\u6709\u989d\u5916\u914d\u7f6e\uff0c\xa0",(0,r.kt)("a",{parentName:"p",href:"https://vercel.com/docs/edge-network/overview"},"CDN"),"\u65e0\u6cd5\u7f13\u5b58\u7ed3\u679c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"export async function getServerSideProps(context) {\n  return {\n    props: {\n      // props for your component\n    },\n  };\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),"\u5728\u8bf7\u6c42\u65f6\u88ab\u8c03\u7528\uff0c\u5b83\u7684\u53c2\u6570 (\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"context"),") \u5305\u542b\u8bf7\u6c42\u7279\u5b9a\u7684\u53c2\u6570\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4e0d\u9700\u8981\u9884\u6e32\u67d3data\uff0c ",(0,r.kt)("em",{parentName:"p"},"\u6307\u4ec5\u9884\u6e32\u67d3page\uff0c\u53ef\u80fd\u7531\u4e8edata\u65f6\u6548\u6027\u8981\u6c42\u5f88\u9ad8\uff0c\u4e0d\u9700\u8981\u9884\u6e32\u67d3data"),"\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/data-fetching#fetching-data-on-the-client-side"},(0,r.kt)("strong",{parentName:"a"},"Client-side Rendering"))," \uff0c\u6bd4\u5982\uff0c\u5728dashboard\u7528\u6237\u4eea\u8868\u677f\u573a\u666f\u4e2d\uff0cdashboard\u662f\u79c1\u6709\u7684\u3001\u7279\u5b9a\u4e8e\u7528\u6237\u7684\u9875\u9762\uff0c\u6240\u4ee5 SEO\u4e0d\u76f8\u5173\uff0c\u4e14\u4e0d\u9700\u8981\u5728\u670d\u52a1\u5668\u7aef\u9884\u6e32\u67d3\uff08\u4e0d\u77e5\u9053\u7528\u6237\u4fe1\u606f\uff0c\u9884\u6e32\u67d3\u65e0\u610f\u4e49\uff09\uff1b\u6570\u636e\u66f4\u65b0\u9891\u7e41\uff0c\u9700\u8981\u8bf7\u6c42\u65f6\u53d6\u6570\u636e\u3002"),(0,r.kt)("h2",{id:"client-side-rendering"},"Client-side Rendering"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9759\u6001\u751f\u6210\uff08\u9884\u6e32\u67d3\uff09\u9875\u9762\u65f6\uff0c\u4e0d\u9700\u8981\u5916\u90e8\u6570\u636e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u9875\u9762\u52a0\u8f7d\u65f6\uff0c\u624d\u4f7f\u7528 JavaScript \u4ece\u5ba2\u6237\u7aef\u83b7\u53d6\u5916\u90e8\u6570\u636e\u5e76\u586b\u5145\u5176\u4f59\u90e8")),(0,r.kt)("h3",{id:"\u9002\u7528\u573a\u666f"},"\u9002\u7528\u573a\u666f"),(0,r.kt)("p",null,"\u4e0e SEO \u65e0\u5173\u7684\u79c1\u4eba\u7684\u3001\u7528\u6237\u7279\u5b9a\u7684\u9875\u9762"),(0,r.kt)("h3",{id:"\u9002\u5e94\u573a\u666f\u4e3e\u4f8b"},"\u9002\u5e94\u573a\u666f\u4e3e\u4f8b"),(0,r.kt)("p",null,"  \u6bd4\u5982\uff0c\u5728dashboard\u7528\u6237\u4eea\u8868\u677f\u573a\u666f\u4e2d\uff0cdashboard\u662f\u79c1\u6709\u7684\u3001\u7279\u5b9a\u4e8e\u7528\u6237\u7684\u9875\u9762\uff0c\u6240\u4ee5 SEO\u4e0d\u76f8\u5173\uff0c\u4e14\u4e0d\u9700\u8981\u5728\u670d\u52a1\u5668\u7aef\u9884\u6e32\u67d3\uff08\u4e0d\u77e5\u9053\u7528\u6237\u4fe1\u606f\uff0c\u9884\u6e32\u67d3\u65e0\u610f\u4e49\uff09\uff1b\u6570\u636e\u66f4\u65b0\u9891\u7e41\uff0c\u9700\u8981\u8bf7\u6c42\u65f6\u53d6\u6570\u636e\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://nextjs.org/static/images/learn/data-fetching/client-side-rendering.png",alt:null})),(0,r.kt)("h3",{id:"swr"},"SWR"),(0,r.kt)("p",null,"\u5982\u679c\u5728\u5ba2\u6237\u7aef\u83b7\u53d6\u6570\u636e\uff0c\u53ef\u4ee5\u4f7f\u7528Next.js\u56e2\u961f\u51fa\u7684SWR\uff0c\u8fd9\u662f\u4e00\u4e2aReact Hook\uff0c\u5b83\u5904\u7406\u7f13\u5b58\u3001\u91cd\u65b0\u9a8c\u8bc1\u3001\u7126\u70b9\u8ddf\u8e2a\u3001\u95f4\u9694\u91cd\u65b0\u83b7\u53d6\u7b49\u3002"),(0,r.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import useSWR from 'swr';\n\nfunction Profile() {\n  const { data, error } = useSWR('/api/user', fetch);\n\n  if (error) return <div>failed to load</div>;\n  if (!data) return <div>loading...</div>;\n  return <div>hello {data.name}!</div>;\n}\n")),(0,r.kt)("p",null,"\u67e5\u770b",(0,r.kt)("a",{parentName:"p",href:"https://swr.vercel.app/"},"SWR \u6587\u6863"),"\u4ee5\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002"))}g.isMDXComponent=!0}}]);