(window.webpackJsonp=window.webpackJsonp||[]).push([[394,119,129],{1020:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(1046),c=t(1031),i=function(){var e=Object(c.useLocation)().pathname;return e.endsWith("/")?r.a.createElement(c.Redirect,{to:e.slice(0,-1)}):e.endsWith(".html")?r.a.createElement(c.Redirect,{to:e.slice(0,-5)}):null};a.a=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,null),r.a.createElement(l.a,e))}},476:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(1020),c=t(1105),i=t(1032),m=t(1073);a.default=function(e){var a=e.metadata,t=e.items,n=e.sidebar,s=a.allTagsPath,o=a.name,u=a.count;return r.a.createElement(l.a,{title:'Posts tagged "'+o+'"',description:'Blog | Tagged "'+o+'"'},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(m.a,{sidebar:n})),r.a.createElement("main",{className:"col col--8"},r.a.createElement("h1",null,u," ",function(e,a){return e>1?a+"s":a}(u,"post"),' tagged with "',o,'"'),r.a.createElement(i.a,{href:s},"View All Tags"),r.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content;return r.a.createElement(c.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},r.a.createElement(a,null))})))))))}}}]);