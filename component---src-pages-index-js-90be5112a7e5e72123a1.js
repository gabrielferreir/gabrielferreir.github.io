(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{234:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(235),s=(t(146),t(24)),l=(t(232),function(e){var a=new Date(e);return a.getDate()+"/"+i(a.getMonth())}),i=function(e){switch(e){case 0:return"JAN";case 1:return"FEV";case 2:return"MAR";case 3:return"ABR";case 4:return"MAI";case 5:return"JUN";case 6:return"JUL";case 7:return"AGO";case 8:return"SET";case 9:return"OUT";case 10:return"NOV";case 11:return"DEZ"}},o=function(e){var a=e.path,t=(e.image,e.title),r=e.description,c=e.date;return n.a.createElement("div",{className:"post",onClick:function(){Object(s.navigate)(a)}},n.a.createElement("div",{className:"post__content"},n.a.createElement("h1",{className:"post__data"},l(c)),n.a.createElement("h1",{className:"post__title"},t),n.a.createElement("h2",{className:"post__description"},r)))};t.d(a,"pageQuery",function(){return m});a.default=function(e){var a=e.data.allMarkdownRemark.edges.filter(function(e){return!!e.node.frontmatter.date}).map(function(e){return console.log(e),n.a.createElement(o,{path:e.node.frontmatter.path,image:e.node.frontmatter.image,description:e.node.excerpt,title:e.node.frontmatter.title,date:e.node.frontmatter.date})});return n.a.createElement(c.a,null,a)};var m="2642093892"},235:function(e,a,t){"use strict";var r=t(0),n=t.n(r);t(228);a.a=function(e){var a=e.children;return n.a.createElement("div",{className:"wrapper"},n.a.createElement("aside",{className:"navbar"},n.a.createElement("header",{className:"navbar__header"},n.a.createElement("div",{className:"navbar__image"}),n.a.createElement("div",null,n.a.createElement("h1",{className:"navbar__name"},"Gabriel Ferreira"),n.a.createElement("h2",{className:"navbar__work"},"Fullstack Developer")))),n.a.createElement("main",{className:"main"},a))}}}]);
//# sourceMappingURL=component---src-pages-index-js-90be5112a7e5e72123a1.js.map