(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{150:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),o=n(193),i={titleId:"contact",content:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"I’d love to ",r.a.createElement("strong",null,"chat")," and ",r.a.createElement("strong",null,"meet new people"),". I’m looking for ",r.a.createElement("strong",null,"problems worth solving"),", a place that will ",r.a.createElement("strong",null,"challenge me"),", and ",r.a.createElement("strong",null,"opportunities")," that I can help others and myself ",r.a.createElement("strong",null,"grow"),". "),r.a.createElement("p",null,"Let’s do something awesome."),r.a.createElement("p",null,"Email: ",r.a.createElement("a",{href:"mailto:hello@hugomagalhaes.com"},"hello@hugomagalhaes.com"),r.a.createElement("br",null),"Linkedin: ",r.a.createElement("a",{href:"http://linkedin.hugomagalhaes.com",target:"_blank"},"http://linkedin.hugomagalhaes.com"),r.a.createElement("br",null),"GitHub: ",r.a.createElement("a",{href:"http://github.hugomagalhaes.com",target:"_blank"},"http://github.hugomagalhaes.com"))),description:"\n    I’d love to chat and meet new people. I’m looking for problems worth solving, a place that will challenge me, and opportunities that I can help others and myself grow. \n  "};t.default=function(e){return r.a.createElement(o.a,Object.assign({i18n:i},e))}},172:function(e,t,n){n(32);var a={hugomn:{name:"Hugo Nogueira",additionalName:"hugomn",address:"Berlin CA",birthDate:"1986-09-01",birthPlace:"Juiz de Fora BR",brand:"Hugo Nogueira, Software Engineer, Lead Front-end engineer, Senior ReactJs developer",children:"...",email:"hugomn@gmail.com",familyName:"Nogueira",gender:"Male",givenName:"Hugo",height:"...",homeLocation:"Berlin",jobTitle:"Software Engineering Lead",knows:"...",memberOf:"...",nationality:"Brazilian",owns:"...",parent:"...",performerIn:"...",publishingPrinciples:"...",relatedTo:"...",seeks:"...",sibling:"...",spouse:{additionalName:"Lunara Leto Costa",name:"Lunara Leto Costa",givenName:"Lunara",familyName:"Costa",gender:"Female",nationality:"Brazilian",homeLocation:"Berlin"},telephone:"...",weight:"...",workLocation:"...",worksFor:"...",description:"...",disambiguatingDescription:"...",identifier:"...",image:"http://www.gravatar.com/avatar/9174fca44b5ca403593ac9cb2407e0e7",sameAs:"https://hugomagalhaes.com/en/about/",url:"https://hugomagalhaes.com/en/about/"}};e.exports={authors:a,getAuthor:function(e){var t=Object.assign({},a[e],{"@type":"Person"});return t||a[0]}}},185:function(e,t,n){"use strict";n.d(t,"a",function(){return d}),n.d(t,"b",function(){return h});n(32);var a=n(168),r=n(212),o=n(172),i=Object(a.curry)(function(e,t){return Object(r.isNilOrEmpty)(t)?t:Object(a.keys)(t).reduce(function(n,a){var r=t[a];return"object"==typeof r?n[a]=i(e,t[a]):e(r)&&(n[a]=t[a]),n},{})}),c=i(function(e){return Object(r.isNotNilOrEmpty)(e)&&"..."!==e}),l=function(e){return Object(a.keys)(e).reduce(function(t,n){return t["type"===n?"@type":n]=e[n],t},{})},u=function(e){return e["@context"]="http://schema.org/",e},m=Object(a.pipe)(Object(a.prop)("frontmatter"),Object(a.prop)("date")),s=Object(a.pipe)(Object(a.prop)("frontmatter"),Object(a.prop)("title")),p=Object(a.pipe)(Object(a.prop)("html")),g=Object(a.pipe)(Object(a.prop)("frontmatter"),Object(a.prop)("title")),d=Object(a.pipe)(function(e){return Object(a.assocPath)(["frontmatter","structuredData","datePublished"],m(e),e)},function(e){return Object(a.assocPath)(["frontmatter","structuredData","headline"],s(e),e)},function(e){return Object(a.assocPath)(["frontmatter","structuredData","articleBody"],p(e),e)},function(e){return Object(a.assocPath)(["fields","langKey"],g(e),e)},Object(a.prop)("frontmatter"),Object(a.prop)("structuredData"),l,u,function(e){return e.author?Object.assign({},e,{author:Object(o.getAuthor)(e.author)}):e},c,JSON.stringify),h=Object(a.pipe)(l,u,c,JSON.stringify)},193:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(172),l=n(185),u=n(159),m=n(162),s=n(175),p=n.n(s),g=n(173),d=u.d.article.withConfig({displayName:"Page__Wrapper",componentId:"sc-1ds72z7-0"})(["margin:",";padding:",";max-width:",";"],function(e){return e.theme.page.margin},function(e){return e.theme.page.padding},function(e){return e.theme.page.maxWidth}),h=u.d.header.withConfig({displayName:"Page__Header",componentId:"sc-1ds72z7-1"})(["font-family:",";border-bottom:1px solid rgba(0,0,0,0.125);margin:",";"],function(e){return e.theme.page.header.fontFamily},function(e){return e.theme.page.header.margin}),f=u.d.section.withConfig({displayName:"Page__Content",componentId:"sc-1ds72z7-2"})(["font-family:",";p{margin:",";padding:",";font-size:",";line-height:",";}"],function(e){return e.theme.page.content.fontFamily},function(e){return e.theme.page.content.p.margin},function(e){return e.theme.page.content.p.padding},function(e){return e.theme.p.fontSize},function(e){return e.theme.p.lineHeight}),b=u.d.h1.withConfig({displayName:"Page__H1",componentId:"sc-1ds72z7-3"})(["font-size:",";padding:0;span{border-bottom:1px solid rgba(0,0,0,0.44);display:inline-block;padding-bottom:",";margin-bottom:-1px;}"],function(e){return e.theme.page.header.fontSize},function(e){return e.theme.scale(3.5)}),j=function(e){var t=Object(c.getAuthor)("hugomn");t.description=e.i18n.description;var n=Object(l.b)(t);return r.a.createElement(g.a,{location:e.location},r.a.createElement(d,null,r.a.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:n}}),r.a.createElement(m.b,{id:e.i18n.titleId},function(t){return r.a.createElement(h,null,r.a.createElement(p.a,{title:t,meta:[{name:"description",content:e.i18n.description}]}),r.a.createElement(b,null,r.a.createElement("span",null,t)))}),r.a.createElement(f,null,e.i18n.content)))};j.propTypes={i18n:i.a.shape({titleId:i.a.string.isRequired,content:i.a.object.isRequired,description:i.a.string.isRequired}).isRequired,location:i.a.object.isRequired},t.a=j}}]);
//# sourceMappingURL=component---src-pages-contact-index-pt-js-e50e85288f8c3ec16b11.js.map