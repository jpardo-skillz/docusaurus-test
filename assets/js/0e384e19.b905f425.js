(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{111:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return r?a.a.createElement(m,c(c({ref:t},u),{},{components:r})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(111)),i={sidebar_position:1},c={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Tutorial Intro",description:"Let's discover Docusaurus in less than 5 minutes.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docusaurus-test/docs/intro",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Create a Page",permalink:"/docusaurus-test/docs/tutorial-basics/create-a-page"}},s=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Generate a new site",id:"generate-a-new-site",children:[]},{value:"Start your site",id:"start-your-site",children:[]}],u={toc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Let's discover ",Object(o.b)("strong",{parentName:"p"},"Docusaurus in less than 5 minutes"),"."),Object(o.b)("h2",{id:"getting-started"},"Getting Started"),Object(o.b)("p",null,"Get started by ",Object(o.b)("strong",{parentName:"p"},"creating a new site"),"."),Object(o.b)("p",null,"Or ",Object(o.b)("strong",{parentName:"p"},"try Docusaurus immediately")," with ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://new.docusaurus.io"},"new.docusaurus.io")),"."),Object(o.b)("h2",{id:"generate-a-new-site"},"Generate a new site"),Object(o.b)("p",null,"Generate a new Docusaurus site using the ",Object(o.b)("strong",{parentName:"p"},"classic template"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"npx @docusaurus/init@latest init my-website classic\n")),Object(o.b)("h2",{id:"start-your-site"},"Start your site"),Object(o.b)("p",null,"Run the development server:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"cd my-website\n\nnpx docusaurus start\n")),Object(o.b)("p",null,"Your site starts at ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:3000"),"."),Object(o.b)("p",null,"Open ",Object(o.b)("inlineCode",{parentName:"p"},"docs/intro.md")," and edit some lines: the site ",Object(o.b)("strong",{parentName:"p"},"reloads automatically")," and display your changes."))}l.isMDXComponent=!0}}]);