(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return r});var a=n(0),i=n.n(a),o=n(258);t.default=function(e){return i.a.createElement(o.a,e)};var r="2599829947"},161:function(e,t,n){"use strict";var a=n(158),i=n(152).d.a.withConfig({displayName:"A",componentId:"g1ipn4-0"})(["color:",";text-decoration:",";cursor:pointer;transition:0.3s;&:hover{color:",";transition:0.3s;}"],function(e){return e.theme.a.color},function(e){return e.theme.a.textDecoration},function(e){return e.theme.a.hover.color});t.a=i.withComponent(a.Link)},169:function(e,t,n){"use strict";n(178);var a=n(0),i=n.n(a),o=n(4),r=n.n(o),l=n(152),m=n(154),c=n(183),s=n.n(c),d=(n(27),n(157)),u=function(e){return i.a.createElement("time",Object.assign({},e,{dateTime:e.date}),i.a.createElement(d.a,{value:new Date(e.date),month:"long",day:"numeric",year:"numeric"}))};u.propTypes={date:r.a.string.isRequired};var p=u,g=(n(192),Object(l.d)(m.b).withConfig({displayName:"PostAuthor__Wrapper",componentId:"sc-19mapmw-0"})(["font-family:",";font-size:",";line-height:",";"],function(e){return e.theme.blog.author.fontFamily},function(e){return e.theme.blog.author.fontSize},function(e){return e.theme.blog.author.lineHeight})),h=l.d.span.withConfig({displayName:"PostAuthor__Date",componentId:"sc-19mapmw-1"})(["color:",";display:block;"],function(e){return e.theme.blog.author.time.color}),f=Object(l.d)(s.a).withConfig({displayName:"PostAuthor__ProfilePicture",componentId:"sc-19mapmw-2"})(["display:block;border-radius:50%;"]),b=l.d.a.withConfig({displayName:"PostAuthor__FollowButton",componentId:"sc-19mapmw-3"})(["display:inline-block;vertical-align:middle;cursor:pointer;height:19px;padding:0 10px;color:rgba(0,0,0,.84);border:1px solid rgba(0,0,0,.68);border-radius:4px;user-select:none!important;margin:0 14px 4px;span{font-size:13px;line-height:19px;padding-bottom:2px;}"]),w=function(e){var t,n,a=e.author,o=e.className,r=e.date,l=e.showFollow,c=e.timeToRead;return i.a.createElement(g,{columns:"50px 1fr",className:o},i.a.createElement(m.a,{middle:!0},i.a.createElement(f,{email:a.email,alt:a.name,width:42,height:42})),i.a.createElement(m.a,{middle:!0},i.a.createElement("span",null,a.name,l?i.a.createElement(b,{href:"http://twitter.com/"+a.twitter,target:"_blank"},i.a.createElement("span",null,"Follow")):null),i.a.createElement(h,null,i.a.createElement(p,{pubdate:"pubdate",date:r}),c&&" • "+(t=c,n=Math.round(t/5),new Array(n||1).fill("☕️").join("")+" "+t+" min read"))))};w.propTypes={author:r.a.object.isRequired,className:r.a.string,date:r.a.string.isRequired,showFollow:r.a.bool,timeToRead:r.a.number};t.a=w},173:function(e,t,n){"use strict";n(27);var a=n(0),i=n.n(a),o=n(4),r=n.n(o),l=n(167),m=n.n(l),c=n(161),s=n(152),d=n(154),u=n(187),p=n.n(u),g=n(169),h=n(172);function f(){var e=m()(["\n    ",";\n  "]);return f=function(){return e},e}var b=Object(s.d)(d.b).withConfig({displayName:"PostCard__GridContainer",componentId:"sc-1ei7i98-0"})(["height:100%;"]),w=Object(s.d)(b).withConfig({displayName:"PostCard__Wrapper",componentId:"sc-1ei7i98-1"})(["border:",";border-radius:0.25rem;grid-template-rows:repeat(1,1fr);grid-template-columns:3fr 5fr;",""],function(e){return e.theme.blog.list.item.border},h.b.md(f(),function(e){return e.imageOnTop?" grid-template-rows: repeat(2,1fr);\n        grid-template-columns: 1fr;":""})),y=Object(s.d)(d.a).withConfig({displayName:"PostCard__Body",componentId:"sc-1ei7i98-2"})(["padding:",";"],function(e){return e.theme.blog.list.item.padding}),E=Object(s.d)(d.a).withConfig({displayName:"PostCard__Footer",componentId:"sc-1ei7i98-3"})(["font-family:",";font-size:",";padding:",";line-height:",";height:auto;position:relative;"],function(e){return e.theme.blog.author.fontFamily},function(e){return e.theme.blog.author.fontSize},function(e){var t=e.theme;return t.scale(-1.5)+" "+t.scale(1.2)+" "+t.scale(0)},function(e){return e.theme.blog.author.lineHeight}),_=s.d.h2.withConfig({displayName:"PostCard__Title",componentId:"sc-1ei7i98-4"})(["padding:0;font-family:",";font-size:",";line-height:",";margin:",";"],function(e){return e.theme.blog.list.item.title.fontFamily},function(e){return e.theme.blog.list.item.title.fontSize},function(e){return e.theme.blog.list.item.title.lineHeight},function(e){return e.theme.blog.list.item.title.margin}),x=Object(s.d)(c.a).withConfig({displayName:"PostCard__TitleLink",componentId:"sc-1ei7i98-5"})(["color:",";&:hover{color:",";}"],function(e){return e.theme.blog.list.item.title.color},function(e){return e.theme.blog.list.item.title.hover.color}),C=s.d.p.withConfig({displayName:"PostCard__Text",componentId:"sc-1ei7i98-6"})(["font-family:",";font-size:",";color:",";margin:",";padding:",";line-height:",";"],function(e){return e.theme.blog.list.item.text.fontFamily},function(e){return e.theme.blog.list.item.text.fontSize},function(e){return e.theme.blog.list.item.text.color},function(e){return e.theme.blog.list.item.text.margin},function(e){return e.theme.blog.list.item.text.padding},function(e){return e.theme.blog.list.item.text.lineHeight}),v=s.d.div.withConfig({displayName:"PostCard__Label",componentId:"sc-1ei7i98-7"})(["position:absolute;right:18px;bottom:18px;"]),N=Object(s.d)(p.a).withConfig({displayName:"PostCard__Image",componentId:"sc-1ei7i98-8"})(["height:100%;"]),j=function(e){var t=e.post,n=e.author,a=e.imageOnTop;return i.a.createElement(w,{imageOnTop:a},i.a.createElement(d.a,null,i.a.createElement(c.a,{to:t.fields.slug},i.a.createElement(N,{sizes:t.frontmatter.image.childImageSharp.sizes}))),i.a.createElement(d.a,null,i.a.createElement(b,{columns:1,rows:"1fr auto"},i.a.createElement(y,null,i.a.createElement(_,null,i.a.createElement(x,{to:t.fields.slug},t.frontmatter.title)),i.a.createElement(C,null,t.excerpt)),i.a.createElement(E,null,i.a.createElement(g.a,{author:n,date:t.frontmatter.date}),i.a.createElement(v,null,i.a.createElement(c.a,{to:t.fields.slug},i.a.createElement("svg",{width:"25",height:"25"},i.a.createElement("path",{d:"M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z",fillRule:"evenodd"}))))))))};j.propTypes={post:r.a.shape({fields:r.a.shape({slug:r.a.string.isRequired,langKey:r.a.string.isRequired}),frontmatter:r.a.shape({title:r.a.string.isRequired,date:r.a.string.isRequired}),excerpt:r.a.string.isRequired}),author:r.a.object.isRequired,imageOnTop:r.a.bool};var I=j,R=function(e){return i.a.createElement("nav",null,i.a.createElement(d.b,{columns:"repeat(auto-fit,minmax(260px,1fr))",gap:"30px",alignContent:"stretch"},e.posts.map(function(t){return i.a.createElement(d.a,{key:t.fields.slug},i.a.createElement(I,Object.assign({post:t},e)))})))};R.propTypes={posts:r.a.array.isRequired,author:r.a.object.isRequired,imageOnTop:r.a.bool};t.a=R},258:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(4),r=n.n(o),l=n(173),m=n(170),c=n.n(m),s=n(157),d=n(168),u=n(152),p=u.d.section.withConfig({displayName:"Blog__Wrapper",componentId:"sc-1ixqbjd-0"})(["margin:",";padding:",";"],function(e){return e.theme.page.margin},function(e){return e.theme.page.padding}),g=u.d.header.withConfig({displayName:"Blog__Header",componentId:"sc-1ixqbjd-1"})(["font-family:",";border-bottom:1px solid rgba(0,0,0,0.125);margin:",";"],function(e){return e.theme.page.header.fontFamily},function(e){return e.theme.page.header.margin}),h=u.d.h1.withConfig({displayName:"Blog__H1",componentId:"sc-1ixqbjd-2"})(["font-size:",";padding:0;span{border-bottom:1px solid rgba(0,0,0,0.44);display:inline-block;padding-bottom:",";margin-bottom:-1px;}"],function(e){return e.theme.page.header.fontSize},function(e){return e.theme.scale(3.5)}),f=function(e){var t=e.data.site.siteMetadata.author;return i.a.createElement(d.a,{location:e.location},i.a.createElement(p,null,i.a.createElement(s.b,{id:"posts"},function(e){return i.a.createElement(g,null,i.a.createElement(c.a,{title:e,meta:[{name:"description",content:e}]}),i.a.createElement(h,null,i.a.createElement("span",null,e)))}),i.a.createElement(l.a,{posts:e.data.allMarkdownRemark.edges.map(function(e){return e.node}),author:t,imageOnTop:!0})))};f.propTypes={data:r.a.object.isRequired,location:r.a.object.isRequired},t.a=f}}]);
//# sourceMappingURL=component---src-pages-blog-index-en-js-80c252d1c390ccb1f49f.js.map