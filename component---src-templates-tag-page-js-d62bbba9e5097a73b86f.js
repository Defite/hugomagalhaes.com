(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return w});var a=n(0),i=n.n(a),o=n(4),r=n.n(o),l=n(155),c=n(152),s=n(176),m=n(156),u=n(171),d=n.n(u),p=n(170),g=c.d.header.withConfig({displayName:"tag-page__Header",componentId:"sc-1eo1xtj-0"})(["text-align:center;font-size:",";"],function(e){return e.theme.scale(1)}),h=c.d.span.withConfig({displayName:"tag-page__TagName",componentId:"sc-1eo1xtj-1"})(["font-size:",";display:block;text-align:center;"],function(e){return e.theme.scale(5)}),f=Object(c.d)(l.Link).withConfig({displayName:"tag-page__AllTagsLink",componentId:"sc-1eo1xtj-2"})(["text-align:center;padding:"," 0;font-weight:bold;color:",";font-size:",";display:block;position:relative;text-decoration:underline;transition:0.3s;&:hover{color:",";transition:0.3s;}"],function(e){return e.theme.scale(1)},function(e){return e.theme.colors.green},function(e){return e.theme.scale(0)},function(e){return e.theme.colors.white}),b=function(e){var t=e.data,n=e.pageContext,a=e.location,o=t.allMarkdownRemark.edges.map(function(e){return e.node}),r=t.site.siteMetadata.author,l=i.a.createElement(m.b,{id:"tags.allTagsLink"},function(e){return i.a.createElement(f,{to:"/"+n.langKey+"/tags/"},e)});return i.a.createElement(p.a,{location:a},i.a.createElement("section",null,i.a.createElement(g,null,i.a.createElement(m.b,{id:"tags"},function(e){return i.a.createElement(d.a,{title:n.tag+" | "+e,meta:[{name:"description",content:e}]})}),i.a.createElement(m.b,{id:"tags.nPostsTaggedWith",values:{nPosts:t.allMarkdownRemark.totalCount}}),i.a.createElement(h,null,"“",n.tag,"”"),l),i.a.createElement(s.a,{posts:o,author:r}),i.a.createElement("footer",null,l)))};b.propTypes={data:r.a.object,location:r.a.object.isRequired,pageContext:r.a.object},t.default=b;var w="2475724376"},165:function(e,t,n){"use strict";var a=n(155),i=n(152).d.a.withConfig({displayName:"A",componentId:"g1ipn4-0"})(["color:",";text-decoration:",";cursor:pointer;transition:0.3s;&:hover{color:",";transition:0.3s;}"],function(e){return e.theme.a.color},function(e){return e.theme.a.textDecoration},function(e){return e.theme.a.hover.color});t.a=i.withComponent(a.Link)},174:function(e,t,n){"use strict";n(180);var a=n(0),i=n.n(a),o=n(4),r=n.n(o),l=n(152),c=n(158),s=n(185),m=n.n(s),u=(n(27),n(156)),d=function(e){return i.a.createElement("time",Object.assign({},e,{dateTime:e.date}),i.a.createElement(u.a,{value:new Date(e.date),month:"long",day:"numeric",year:"numeric"}))};d.propTypes={date:r.a.string.isRequired};var p=d,g=(n(194),Object(l.d)(c.b).withConfig({displayName:"PostAuthor__Wrapper",componentId:"sc-19mapmw-0"})(["font-family:",";font-size:",";line-height:",";"],function(e){return e.theme.blog.author.fontFamily},function(e){return e.theme.blog.author.fontSize},function(e){return e.theme.blog.author.lineHeight})),h=l.d.span.withConfig({displayName:"PostAuthor__Date",componentId:"sc-19mapmw-1"})(["color:",";display:block;"],function(e){return e.theme.blog.author.time.color}),f=Object(l.d)(m.a).withConfig({displayName:"PostAuthor__ProfilePicture",componentId:"sc-19mapmw-2"})(["display:block;border-radius:50%;"]),b=l.d.a.withConfig({displayName:"PostAuthor__FollowButton",componentId:"sc-19mapmw-3"})(["display:inline-block;vertical-align:middle;cursor:pointer;height:19px;padding:0 10px;color:rgba(0,0,0,.84);border:1px solid rgba(0,0,0,.68);border-radius:4px;user-select:none!important;margin:0 14px 4px;span{font-size:13px;line-height:19px;padding-bottom:2px;}"]),w=function(e){var t,n,a=e.author,o=e.className,r=e.date,l=e.showFollow,s=e.timeToRead;return i.a.createElement(g,{columns:"50px 1fr",className:o},i.a.createElement(c.a,{middle:!0},i.a.createElement(f,{email:a.email,alt:a.name,width:42,height:42})),i.a.createElement(c.a,{middle:!0},i.a.createElement("span",null,a.name,l?i.a.createElement(b,{href:"http://twitter.com/"+a.twitter,target:"_blank"},i.a.createElement("span",null,"Follow")):null),i.a.createElement(h,null,i.a.createElement(p,{pubdate:"pubdate",date:r}),s&&" • "+(t=s,n=Math.round(t/5),new Array(n||1).fill("☕️").join("")+" "+t+" min read"))))};w.propTypes={author:r.a.object.isRequired,className:r.a.string,date:r.a.string.isRequired,showFollow:r.a.bool,timeToRead:r.a.number};t.a=w},176:function(e,t,n){"use strict";n(27);var a=n(0),i=n.n(a),o=n(4),r=n.n(o),l=n(163),c=n.n(l),s=n(165),m=n(152),u=n(158),d=n(188),p=n.n(d),g=n(174),h=n(167);function f(){var e=c()(["\n    ",";\n  "]);return f=function(){return e},e}var b=Object(m.d)(u.b).withConfig({displayName:"PostCard__GridContainer",componentId:"sc-1ei7i98-0"})(["height:100%;"]),w=Object(m.d)(b).withConfig({displayName:"PostCard__Wrapper",componentId:"sc-1ei7i98-1"})(["border:",";border-radius:0.25rem;grid-template-rows:repeat(1,1fr);grid-template-columns:3fr 5fr;",""],function(e){return e.theme.blog.list.item.border},h.b.md(f(),function(e){return e.imageOnTop?" grid-template-rows: repeat(2,1fr);\n        grid-template-columns: 1fr;":""})),y=Object(m.d)(u.a).withConfig({displayName:"PostCard__Body",componentId:"sc-1ei7i98-2"})(["padding:",";"],function(e){return e.theme.blog.list.item.padding}),E=Object(m.d)(u.a).withConfig({displayName:"PostCard__Footer",componentId:"sc-1ei7i98-3"})(["font-family:",";font-size:",";padding:",";line-height:",";height:auto;position:relative;"],function(e){return e.theme.blog.author.fontFamily},function(e){return e.theme.blog.author.fontSize},function(e){var t=e.theme;return t.scale(-1.5)+" "+t.scale(1.2)+" "+t.scale(0)},function(e){return e.theme.blog.author.lineHeight}),x=m.d.h2.withConfig({displayName:"PostCard__Title",componentId:"sc-1ei7i98-4"})(["padding:0;font-family:",";font-size:",";line-height:",";margin:",";"],function(e){return e.theme.blog.list.item.title.fontFamily},function(e){return e.theme.blog.list.item.title.fontSize},function(e){return e.theme.blog.list.item.title.lineHeight},function(e){return e.theme.blog.list.item.title.margin}),_=Object(m.d)(s.a).withConfig({displayName:"PostCard__TitleLink",componentId:"sc-1ei7i98-5"})(["color:",";&:hover{color:",";}"],function(e){return e.theme.blog.list.item.title.color},function(e){return e.theme.blog.list.item.title.hover.color}),C=m.d.p.withConfig({displayName:"PostCard__Text",componentId:"sc-1ei7i98-6"})(["font-family:",";font-size:",";color:",";margin:",";padding:",";line-height:",";"],function(e){return e.theme.blog.list.item.text.fontFamily},function(e){return e.theme.blog.list.item.text.fontSize},function(e){return e.theme.blog.list.item.text.color},function(e){return e.theme.blog.list.item.text.margin},function(e){return e.theme.blog.list.item.text.padding},function(e){return e.theme.blog.list.item.text.lineHeight}),v=m.d.div.withConfig({displayName:"PostCard__Label",componentId:"sc-1ei7i98-7"})(["position:absolute;right:18px;bottom:18px;"]),j=Object(m.d)(p.a).withConfig({displayName:"PostCard__Image",componentId:"sc-1ei7i98-8"})(["height:100%;"]),N=function(e){var t=e.post,n=e.author,a=e.imageOnTop;return i.a.createElement(w,{imageOnTop:a},i.a.createElement(u.a,null,i.a.createElement(s.a,{to:t.fields.slug},i.a.createElement(j,{sizes:t.frontmatter.image.childImageSharp.sizes}))),i.a.createElement(u.a,null,i.a.createElement(b,{columns:1,rows:"1fr auto"},i.a.createElement(y,null,i.a.createElement(x,null,i.a.createElement(_,{to:t.fields.slug},t.frontmatter.title)),i.a.createElement(C,null,t.excerpt)),i.a.createElement(E,null,i.a.createElement(g.a,{author:n,date:t.frontmatter.date}),i.a.createElement(v,null,i.a.createElement(s.a,{to:t.fields.slug},i.a.createElement("svg",{width:"25",height:"25"},i.a.createElement("path",{d:"M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z",fillRule:"evenodd"}))))))))};N.propTypes={post:r.a.shape({fields:r.a.shape({slug:r.a.string.isRequired,langKey:r.a.string.isRequired}),frontmatter:r.a.shape({title:r.a.string.isRequired,date:r.a.string.isRequired}),excerpt:r.a.string.isRequired}),author:r.a.object.isRequired,imageOnTop:r.a.bool};var T=N,I=function(e){return i.a.createElement("nav",null,i.a.createElement(u.b,{columns:"repeat(auto-fit,minmax(360px,1fr))",gap:"30px",alignContent:"stretch"},e.posts.map(function(t){return i.a.createElement(u.a,{key:t.fields.slug},i.a.createElement(T,Object.assign({post:t},e)))})))};I.propTypes={posts:r.a.array.isRequired,author:r.a.object.isRequired,imageOnTop:r.a.bool};t.a=I}}]);
//# sourceMappingURL=component---src-templates-tag-page-js-d62bbba9e5097a73b86f.js.map