(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return y});var a=n(0),o=n.n(a),i=n(4),r=n.n(i),l=(n(162),n(159)),c=n(183),m=n(163),s=n(178),u=n.n(s),d=n(177),p=n(218),g=l.d.section.withConfig({displayName:"tag-page__Wrapper",componentId:"sc-1eo1xtj-0"})(["margin:",";padding:",";"],function(e){return e.theme.page.margin},function(e){return e.theme.page.padding}),h=l.d.header.withConfig({displayName:"tag-page__Header",componentId:"sc-1eo1xtj-1"})(["font-family:",";border-bottom:1px solid rgba(0,0,0,0.125);margin:",";"],function(e){return e.theme.page.header.fontFamily},function(e){return e.theme.page.header.margin}),f=l.d.h1.withConfig({displayName:"tag-page__H1",componentId:"sc-1eo1xtj-2"})(["font-size:1.8rem;padding:0;span{border-bottom:1px solid rgba(0,0,0,0.44);display:inline-block;padding-bottom:",";margin-bottom:-1px;}"],function(e){return e.theme.scale(3.5)}),b=function(e){var t=e.data,n=e.pageContext,a=e.location,i=t.allMarkdownRemark.edges.map(function(e){return e.node}),r=t.site.siteMetadata.author,l=o.a.createElement(m.b,{id:"tags.allTagsLink"},function(e){return o.a.createElement(p.a,{to:"/"+n.langKey+"/tags/"},e)});return o.a.createElement(d.a,{location:a},o.a.createElement(g,null,o.a.createElement(m.b,{id:"tags"},function(e){return o.a.createElement(h,null,o.a.createElement(u.a,{title:n.tag+" | "+e,meta:[{name:"description",content:e}]}),o.a.createElement(f,null,o.a.createElement("span",null,o.a.createElement(m.b,{id:"tags.nPostsTaggedWith",values:{nPosts:t.allMarkdownRemark.totalCount}},function(e){return e+' "'+n.tag+'"'}))))}),o.a.createElement(c.a,{posts:i,author:r}),o.a.createElement("footer",null,l)))};b.propTypes={data:r.a.object,location:r.a.object.isRequired,pageContext:r.a.object},t.default=b;var y="2475724376"},172:function(e,t,n){"use strict";var a=n(162),o=n(159).d.a.withConfig({displayName:"A",componentId:"g1ipn4-0"})(["color:",";text-decoration:",";cursor:pointer;transition:0.3s;&:hover{color:",";transition:0.3s;}"],function(e){return e.theme.a.color},function(e){return e.theme.a.textDecoration},function(e){return e.theme.a.hover.color});t.a=o.withComponent(a.Link)},181:function(e,t,n){"use strict";n(187);var a=n(0),o=n.n(a),i=n(4),r=n.n(i),l=n(159),c=n(165),m=n(192),s=n.n(m),u=(n(32),n(163)),d=function(e){return o.a.createElement("time",Object.assign({},e,{dateTime:e.date}),o.a.createElement(u.a,{value:new Date(e.date),month:"long",day:"numeric",year:"numeric"}))};d.propTypes={date:r.a.string.isRequired};var p=d,g=(n(200),Object(l.d)(c.b).withConfig({displayName:"PostAuthor__Wrapper",componentId:"sc-19mapmw-0"})(["font-family:",";font-size:",";line-height:",";"],function(e){return e.theme.blog.author.fontFamily},function(e){return e.theme.blog.author.fontSize},function(e){return e.theme.blog.author.lineHeight})),h=l.d.span.withConfig({displayName:"PostAuthor__Date",componentId:"sc-19mapmw-1"})(["color:",";display:block;"],function(e){return e.theme.blog.author.time.color}),f=Object(l.d)(s.a).withConfig({displayName:"PostAuthor__ProfilePicture",componentId:"sc-19mapmw-2"})(["display:block;border-radius:50%;"]),b=l.d.a.withConfig({displayName:"PostAuthor__FollowButton",componentId:"sc-19mapmw-3"})(["display:inline-block;vertical-align:middle;cursor:pointer;height:19px;padding:0 10px;color:rgba(0,0,0,.84);border:1px solid rgba(0,0,0,.68);border-radius:4px;user-select:none!important;margin:0 14px 4px;span{font-size:13px;line-height:19px;padding-bottom:2px;}"]),y=function(e){var t,n,a=e.author,i=e.className,r=e.date,l=e.showFollow,m=e.timeToRead;return o.a.createElement(g,{columns:"50px 1fr",className:i},o.a.createElement(c.a,{middle:!0},o.a.createElement(f,{email:a.email,alt:a.name,width:42,height:42})),o.a.createElement(c.a,{middle:!0},o.a.createElement("span",null,a.name,l?o.a.createElement(b,{href:"http://twitter.com/"+a.twitter,target:"_blank"},o.a.createElement("span",null,"Follow")):null),o.a.createElement(h,null,o.a.createElement(p,{pubdate:"pubdate",date:r}),m&&" • "+(t=m,n=Math.round(t/5),new Array(n||1).fill("☕️").join("")+" "+t+" min read"))))};y.propTypes={author:r.a.object.isRequired,className:r.a.string,date:r.a.string.isRequired,showFollow:r.a.bool,timeToRead:r.a.number};t.a=y},183:function(e,t,n){"use strict";n(32);var a=n(0),o=n.n(a),i=n(4),r=n.n(i),l=n(170),c=n.n(l),m=n(172),s=n(159),u=n(165),d=n(195),p=n.n(d),g=n(181),h=n(174);function f(){var e=c()(["\n    ",";\n  "]);return f=function(){return e},e}var b=Object(s.d)(u.b).withConfig({displayName:"PostCard__GridContainer",componentId:"sc-1ei7i98-0"})(["height:100%;"]),y=Object(s.d)(b).withConfig({displayName:"PostCard__Wrapper",componentId:"sc-1ei7i98-1"})(["border:",";border-radius:0.25rem;grid-template-rows:repeat(1,1fr);grid-template-columns:3fr 5fr;",""],function(e){return e.theme.blog.list.item.border},h.b.md(f(),function(e){return e.imageOnTop?" grid-template-rows: repeat(2,1fr);\n        grid-template-columns: 1fr;":""})),w=Object(s.d)(u.a).withConfig({displayName:"PostCard__Body",componentId:"sc-1ei7i98-2"})(["padding:",";"],function(e){return e.theme.blog.list.item.padding}),E=Object(s.d)(u.a).withConfig({displayName:"PostCard__Footer",componentId:"sc-1ei7i98-3"})(["font-family:",";font-size:",";padding:",";line-height:",";height:auto;position:relative;"],function(e){return e.theme.blog.author.fontFamily},function(e){return e.theme.blog.author.fontSize},function(e){var t=e.theme;return t.scale(-1.5)+" "+t.scale(1.2)+" "+t.scale(0)},function(e){return e.theme.blog.author.lineHeight}),x=s.d.h2.withConfig({displayName:"PostCard__Title",componentId:"sc-1ei7i98-4"})(["padding:0;font-family:",";font-size:",";line-height:",";margin:",";"],function(e){return e.theme.blog.list.item.title.fontFamily},function(e){return e.theme.blog.list.item.title.fontSize},function(e){return e.theme.blog.list.item.title.lineHeight},function(e){return e.theme.blog.list.item.title.margin}),C=Object(s.d)(m.a).withConfig({displayName:"PostCard__TitleLink",componentId:"sc-1ei7i98-5"})(["color:",";&:hover{color:",";}"],function(e){return e.theme.blog.list.item.title.color},function(e){return e.theme.blog.list.item.title.hover.color}),_=s.d.p.withConfig({displayName:"PostCard__Text",componentId:"sc-1ei7i98-6"})(["font-family:",";font-size:",";color:",";margin:",";padding:",";line-height:",";"],function(e){return e.theme.blog.list.item.text.fontFamily},function(e){return e.theme.blog.list.item.text.fontSize},function(e){return e.theme.blog.list.item.text.color},function(e){return e.theme.blog.list.item.text.margin},function(e){return e.theme.blog.list.item.text.padding},function(e){return e.theme.blog.list.item.text.lineHeight}),v=s.d.div.withConfig({displayName:"PostCard__Label",componentId:"sc-1ei7i98-7"})(["position:absolute;right:18px;bottom:18px;"]),k=Object(s.d)(p.a).withConfig({displayName:"PostCard__Image",componentId:"sc-1ei7i98-8"})(["height:100%;"]),j=function(e){var t=e.post,n=e.author,a=e.imageOnTop;return o.a.createElement(y,{imageOnTop:a},o.a.createElement(u.a,null,o.a.createElement(m.a,{to:t.fields.slug},o.a.createElement(k,{sizes:t.frontmatter.image.childImageSharp.sizes}))),o.a.createElement(u.a,null,o.a.createElement(b,{columns:1,rows:"1fr auto"},o.a.createElement(w,null,o.a.createElement(x,null,o.a.createElement(C,{to:t.fields.slug},t.frontmatter.title)),o.a.createElement(_,null,t.excerpt)),o.a.createElement(E,null,o.a.createElement(g.a,{author:n,date:t.frontmatter.date}),o.a.createElement(v,null,o.a.createElement(m.a,{to:t.fields.slug},o.a.createElement("svg",{width:"25",height:"25"},o.a.createElement("path",{d:"M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z",fillRule:"evenodd"}))))))))};j.propTypes={post:r.a.shape({fields:r.a.shape({slug:r.a.string.isRequired,langKey:r.a.string.isRequired}),frontmatter:r.a.shape({title:r.a.string.isRequired,date:r.a.string.isRequired}),excerpt:r.a.string.isRequired}),author:r.a.object.isRequired,imageOnTop:r.a.bool};var N=j,I=function(e){return o.a.createElement("nav",null,o.a.createElement(u.b,{columns:"repeat(auto-fit,minmax(360px,1fr))",gap:"30px",alignContent:"stretch"},e.posts.map(function(t){return o.a.createElement(u.a,{key:t.fields.slug},o.a.createElement(N,Object.assign({post:t},e)))})))};I.propTypes={posts:r.a.array.isRequired,author:r.a.object.isRequired,imageOnTop:r.a.bool};t.a=I},218:function(e,t,n){"use strict";var a=n(162),o=n(159),i=Object(o.d)(a.Link).withConfig({displayName:"BtnLink",componentId:"sc-1yklihl-0"})(["font-family:",";background-color:",";padding:1rem;margin:"," auto;color:",";border-radius:0.2rem;text-decoration:none;display:table;transition:0.3s;&:hover{background-color:",";color:",";transition:0.3s;}"],function(e){return e.theme.fonts.SansSerif},function(e){return e.theme.colors.white},function(e){return e.theme.scale(2)},function(e){return e.theme.colors.black},function(e){return e.theme.colors.blackShades[0]},function(e){return e.theme.colors.white});t.a=i}}]);
//# sourceMappingURL=component---src-templates-tag-page-js-9dafd9a71c1b224301ff.js.map