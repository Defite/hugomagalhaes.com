(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{139:function(e,t,n){"use strict";n.r(t);n(27);var a=n(0),r=n.n(a),i=n(189),o={titleId:"about",content:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Olá!"),r.a.createElement("p",null,"I’m a software engineer with 12 years of experience. I’ve started my career when I was ",r.a.createElement("strong",null,"12"),", playing around with HTML, CSS, and JavaScript, creating small websites for companies in my hometown in the country-side of Brazil. Soon, I fell in love with dynamic languages like PHP. I also had a crush with ",r.a.createElement("strong",null,"graphic design"),"."),r.a.createElement("p",null,"In 2004 I went to a ",r.a.createElement("strong",null,"technical")," school where I learned hardware and programming languages like Delphi and C++. After that, I studied 4 years of ",r.a.createElement("strong",null,"Computer Science"),", where I could improve my skills with other languages like Java, #Net and mainly web-related technologies. "),r.a.createElement("p",null,"In my professional career, I spent 6 years working for big companies like ",r.a.createElement("a",{href:"https://twitter.com/Accenture",target:"_blank"},"Accenture"),", ",r.a.createElement("a",{href:"https://www.sydle.com",target:"_blank"},"Sydle"),", ",r.a.createElement("a",{href:"https://www.avenuecode.com/",target:"_blank"},"Avenue Code"),", and after that, I founded my own web agency, called Verticis. After 2 years, I’ve created my first ",r.a.createElement("strong",null,"startup"),", called ",r.a.createElement("a",{href:"https://meuingresso.com",target:"_blank"},"meuingresso.com"),", that is today one of the biggest ticket-selling platforms in Brazil. During that time I gained experience and passion for ",r.a.createElement("strong",null,"managing people")," and ",r.a.createElement("strong",null,"leading tech teams"),"."),r.a.createElement("p",null,"Today I work in the ",r.a.createElement("a",{href:"https://en.99designs.de/blog/business/berlin-silicon-allee-vs-silicon-valley-infographic/",target:"_blank"},"Silicon Allee")," as a ",r.a.createElement("strong",null,"senior front-end developer")," and ",r.a.createElement("strong",null,"tech lead")," at ",r.a.createElement("a",{href:"http://infinitec.solutions",target:"_blank"},"Infinitec Solutions"),", one of the ventures backed by the giant ",r.a.createElement("a",{href:"https://www.finleap.com/",target:"_blank"},"FinLeap"),". "),r.a.createElement("p",null,"I build web apps. My passion is ",r.a.createElement("strong",null,"front-end development"),". But I also know how to build performant and modern ",r.a.createElement("strong",null,"server applications")," and I have huge experience with ",r.a.createElement("strong",null,"mobile development"),". I speak Portuguese, English, ein bisschen Deutsch, ",r.a.createElement("strong",null,"React")," and ",r.a.createElement("strong",null,"Node.js.")," I believe beautiful ",r.a.createElement("strong",null,"user interfaces")," are one of the keys to great ",r.a.createElement("strong",null,"experiences"),". "),r.a.createElement("p",null,"If you want to know more, ",r.a.createElement("a",{href:"/contact"},"please contact me"),". I’d love to chat or have a ",r.a.createElement("strong",null,"beer"),"."),r.a.createElement("p",null,"Cheers!")),description:"\n    Engineering Lead e desenvolvedor web com 12 anos de experiência.\n  "};t.default=function(e){return r.a.createElement(i.a,Object.assign({i18n:o},e))}},169:function(e,t,n){n(27);var a={hugomn:{name:"Hugo Nogueira",additionalName:"hugomn",address:"Berlin CA",birthDate:"1986-09-01",birthPlace:"Juiz de Fora BR",brand:"Hugo Nogueira, Software Engineer, Lead Front-end engineer, Senior ReactJs developer",children:"...",email:"hugomn@gmail.com",familyName:"Nogueira",gender:"Male",givenName:"Hugo",height:"...",homeLocation:"Berlin",jobTitle:"Software Engineering Lead",knows:"...",memberOf:"...",nationality:"Brazilian",owns:"...",parent:"...",performerIn:"...",publishingPrinciples:"...",relatedTo:"...",seeks:"...",sibling:"...",spouse:{additionalName:"Lunara Leto Costa",name:"Lunara Leto Costa",givenName:"Lunara",familyName:"Costa",gender:"Female",nationality:"Brazilian",homeLocation:"Berlin"},telephone:"...",weight:"...",workLocation:"...",worksFor:"...",description:"...",disambiguatingDescription:"...",identifier:"...",image:"http://www.gravatar.com/avatar/9174fca44b5ca403593ac9cb2407e0e7",sameAs:"https://hugomagalhaes.com/en/about/",url:"https://hugomagalhaes.com/en/about/"}};e.exports={authors:a,getAuthor:function(e){var t=Object.assign({},a[e],{"@type":"Person"});return t||a[0]}}},181:function(e,t,n){"use strict";n.d(t,"a",function(){return g}),n.d(t,"b",function(){return h});n(27);var a=n(162),r=n(205),i=n(169),o=Object(a.curry)(function(e,t){return Object(r.isNilOrEmpty)(t)?t:Object(a.keys)(t).reduce(function(n,a){var r=t[a];return"object"==typeof r?n[a]=o(e,t[a]):e(r)&&(n[a]=t[a]),n},{})}),l=o(function(e){return Object(r.isNotNilOrEmpty)(e)&&"..."!==e}),c=function(e){return Object(a.keys)(e).reduce(function(t,n){return t["type"===n?"@type":n]=e[n],t},{})},s=function(e){return e["@context"]="http://schema.org/",e},u=Object(a.pipe)(Object(a.prop)("frontmatter"),Object(a.prop)("date")),m=Object(a.pipe)(Object(a.prop)("frontmatter"),Object(a.prop)("title")),p=Object(a.pipe)(Object(a.prop)("html")),d=Object(a.pipe)(Object(a.prop)("frontmatter"),Object(a.prop)("title")),g=Object(a.pipe)(function(e){return Object(a.assocPath)(["frontmatter","structuredData","datePublished"],u(e),e)},function(e){return Object(a.assocPath)(["frontmatter","structuredData","headline"],m(e),e)},function(e){return Object(a.assocPath)(["frontmatter","structuredData","articleBody"],p(e),e)},function(e){return Object(a.assocPath)(["fields","langKey"],d(e),e)},Object(a.prop)("frontmatter"),Object(a.prop)("structuredData"),c,s,function(e){return e.author?Object.assign({},e,{author:Object(i.getAuthor)(e.author)}):e},l,JSON.stringify),h=Object(a.pipe)(c,s,l,JSON.stringify)},189:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(169),c=n(181),s=n(152),u=n(156),m=n(171),p=n.n(m),d=n(170),g=s.d.article.withConfig({displayName:"Page__Wrapper",componentId:"sc-1ds72z7-0"})(["margin:",";padding:",";max-width:",";"],function(e){return e.theme.page.margin},function(e){return e.theme.page.padding},function(e){return e.theme.page.maxWidth}),h=s.d.header.withConfig({displayName:"Page__Header",componentId:"sc-1ds72z7-1"})(["font-family:",";border-bottom:1px solid rgba(0,0,0,0.125);margin:",";"],function(e){return e.theme.page.header.fontFamily},function(e){return e.theme.page.header.margin}),f=s.d.section.withConfig({displayName:"Page__Content",componentId:"sc-1ds72z7-2"})(["font-family:",";p{margin:",";padding:",";font-size:",";line-height:",";}"],function(e){return e.theme.page.content.fontFamily},function(e){return e.theme.page.content.p.margin},function(e){return e.theme.page.content.p.padding},function(e){return e.theme.p.fontSize},function(e){return e.theme.p.lineHeight}),b=s.d.h1.withConfig({displayName:"Page__H1",componentId:"sc-1ds72z7-3"})(["font-size:",";padding:0;span{border-bottom:1px solid rgba(0,0,0,0.44);display:inline-block;padding-bottom:",";margin-bottom:-1px;}"],function(e){return e.theme.page.header.fontSize},function(e){return e.theme.scale(3.5)}),w=function(e){var t=Object(l.getAuthor)("hugomn");t.description=e.i18n.description;var n=Object(c.b)(t);return r.a.createElement(d.a,{location:e.location},r.a.createElement(g,null,r.a.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:n}}),r.a.createElement(u.b,{id:e.i18n.titleId},function(t){return r.a.createElement(h,null,r.a.createElement(p.a,{title:t,meta:[{name:"description",content:e.i18n.description}]}),r.a.createElement(b,null,r.a.createElement("span",null,t)))}),r.a.createElement(f,null,e.i18n.content)))};w.propTypes={i18n:o.a.shape({titleId:o.a.string.isRequired,content:o.a.object.isRequired,description:o.a.string.isRequired}).isRequired,location:o.a.object.isRequired},t.a=w}}]);
//# sourceMappingURL=component---src-pages-about-index-pt-js-5f025aeafce2529e9d5a.js.map