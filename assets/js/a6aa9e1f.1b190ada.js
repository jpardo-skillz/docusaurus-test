(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{108:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(16),i=t(116),s=t(123),m=t(115),c=t(114);var o=function(e){var a=e.metadata,t=a.previousPage,l=a.nextPage;return r.a.createElement("nav",{className:"pagination-nav","aria-label":Object(c.b)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(m.a,{className:"pagination-nav__link",to:t},r.a.createElement("div",{className:"pagination-nav__label"},"\xab"," ",r.a.createElement(c.a,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l&&r.a.createElement(m.a,{className:"pagination-nav__link",to:l},r.a.createElement("div",{className:"pagination-nav__label"},r.a.createElement(c.a,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},g=t(118),d=t(112);a.default=function(e){var a=e.metadata,t=e.items,l=e.sidebar,m=Object(n.default)().siteConfig.title,c=a.blogDescription,u=a.blogTitle,p="/"===a.permalink?m:u;return r.a.createElement(i.a,{title:p,description:c,wrapperClassName:d.ThemeClassNames.wrapper.blogPages,pageClassName:d.ThemeClassNames.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"}},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},r.a.createElement(g.a,{sidebar:l})),r.a.createElement("main",{className:"col col--7"},t.map((function(e){var a=e.content;return r.a.createElement(s.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},r.a.createElement(a,null))})),r.a.createElement(o,{metadata:a})))))}},118:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var l=t(0),r=t.n(l),n=t(113),i=t(115),s=t(56),m=t.n(s);function c(e){var a=e.sidebar;return 0===a.items.length?null:r.a.createElement("div",{className:Object(n.a)(m.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:m.a.sidebarItemTitle},a.title),r.a.createElement("ul",{className:m.a.sidebarItemList},a.items.map((function(e){return r.a.createElement("li",{key:e.permalink,className:m.a.sidebarItem},r.a.createElement(i.a,{isNavLink:!0,to:e.permalink,className:m.a.sidebarItemLink,activeClassName:m.a.sidebarItemLinkActive},e.title))}))))}},123:function(e,a,t){"use strict";var l=t(0),r=t.n(l),n=t(113),i=t(111),s=t(114),m=t(115),c=t(124),o=t(122),g=t(58),d=t.n(g),u=t(112);a.a=function(e){var a,t,l=(a=Object(u.usePluralForm)().selectMessage,function(e){var t=Math.ceil(e);return a(t,Object(s.b)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),g=e.children,p=e.frontMatter,b=e.metadata,v=e.truncated,E=e.isBlogPostPage,h=void 0!==E&&E,N=b.date,_=b.formattedDate,f=b.permalink,k=b.tags,w=b.readingTime,T=p.author,L=p.title,P=p.image,M=p.keywords,O=p.author_url||p.authorURL,x=p.author_title||p.authorTitle,y=p.author_image_url||p.authorImageURL;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{keywords:M,image:P}),r.a.createElement("article",{className:h?void 0:"margin-bottom--xl"},(t=h?"h1":"h2",r.a.createElement("header",null,r.a.createElement(t,{className:Object(n.a)("margin-bottom--sm",d.a.blogPostTitle)},h?L:r.a.createElement(m.a,{to:f},L)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:N,className:d.a.blogPostDate},_,w&&r.a.createElement(r.a.Fragment,null," \xb7 ",l(w)))),r.a.createElement("div",{className:"avatar margin-vert--md"},y&&r.a.createElement(m.a,{className:"avatar__photo-link avatar__photo",href:O},r.a.createElement("img",{src:y,alt:T})),r.a.createElement("div",{className:"avatar__intro"},T&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement(m.a,{href:O},T)),r.a.createElement("small",{className:"avatar__subtitle"},x)))))),r.a.createElement("div",{className:"markdown"},r.a.createElement(i.a,{components:c.a},g)),(k.length>0||v)&&r.a.createElement("footer",{className:"row margin-vert--lg"},k.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,r.a.createElement(s.a,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),k.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(m.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),v&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(m.a,{to:b.permalink,"aria-label":"Read more about "+L},r.a.createElement("strong",null,r.a.createElement(s.a,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}}}]);