(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return y});var a=n(0),i=n.n(a),o=n(4),r=n.n(o),l=n(159),s=n(152),c=n(174),m=n(155),u=n(168),d=n.n(u),p=n(166),g=s.d.header.withConfig({displayName:"tag-page__Header",componentId:"sc-1eo1xtj-0"})(["text-align:center;font-size:",";"],function(e){return e.theme.scale(1)}),h=s.d.span.withConfig({displayName:"tag-page__TagName",componentId:"sc-1eo1xtj-1"})(["font-size:",";display:block;text-align:center;"],function(e){return e.theme.scale(5)}),f=Object(s.d)(l.Link).withConfig({displayName:"tag-page__AllTagsLink",componentId:"sc-1eo1xtj-2"})(["text-align:center;padding:"," 0;font-weight:bold;color:",";font-size:",";display:block;position:relative;text-decoration:underline;transition:0.3s;&:hover{color:",";transition:0.3s;}"],function(e){return e.theme.scale(1)},function(e){return e.theme.colors.green},function(e){return e.theme.scale(0)},function(e){return e.theme.colors.white}),b=function(e){var t=e.data,n=e.pageContext,a=e.location,o=t.allMarkdownRemark.edges.map(function(e){return e.node}),r=t.site.siteMetadata.author,l=i.a.createElement(m.b,{id:"tags.allTagsLink"},function(e){return i.a.createElement(f,{to:"/"+n.langKey+"/tags/"},e)});return i.a.createElement(p.a,{location:a},i.a.createElement("section",null,i.a.createElement(g,null,i.a.createElement(m.b,{id:"tags"},function(e){return i.a.createElement(d.a,{title:n.tag+" | "+e,meta:[{name:"description",content:e}]})}),i.a.createElement(m.b,{id:"tags.nPostsTaggedWith",values:{nPosts:t.allMarkdownRemark.totalCount}}),i.a.createElement(h,null,"“",n.tag,"”"),l),i.a.createElement(c.a,{posts:o,author:r}),i.a.createElement("footer",null,l)))};b.propTypes={data:r.a.object,location:r.a.object.isRequired,pageContext:r.a.object},t.default=b;var y="2475724376"},172:function(e,t,n){"use strict";n(182);var a=n(0),i=n.n(a),o=n(4),r=n.n(o),l=n(152),s=n(158),c=n(191),m=n.n(c),u=(n(28),n(155)),d=function(e){return i.a.createElement("time",Object.assign({},e,{dateTime:e.date}),i.a.createElement(u.a,{value:new Date(e.date),month:"long",day:"numeric",year:"numeric"}))};d.propTypes={date:r.a.string.isRequired};var p=d,g=(n(192),Object(l.d)(s.b).withConfig({displayName:"PostAuthor__Wrapper",componentId:"sc-19mapmw-0"})(["font-family:",";font-size:",";line-height:",";"],function(e){return e.theme.blog.author.fontFamily},function(e){return e.theme.blog.author.fontSize},function(e){return e.theme.blog.author.lineHeight})),h=l.d.span.withConfig({displayName:"PostAuthor__Date",componentId:"sc-19mapmw-1"})(["color:",";display:block;"],function(e){return e.theme.blog.author.time.color}),f=Object(l.d)(m.a).withConfig({displayName:"PostAuthor__ProfilePicture",componentId:"sc-19mapmw-2"})(["display:block;border-radius:50%;"]),b=l.d.a.withConfig({displayName:"PostAuthor__FollowButton",componentId:"sc-19mapmw-3"})(["display:inline-block;vertical-align:middle;cursor:pointer;height:19px;padding:0 10px;color:rgba(0,0,0,.84);border:1px solid rgba(0,0,0,.68);border-radius:4px;user-select:none!important;margin:0 14px 4px;span{font-size:13px;line-height:19px;padding-bottom:2px;}"]),y=function(e){var t,n,a=e.author,o=e.className,r=e.date,l=e.showFollow,c=e.timeToRead;return i.a.createElement(g,{columns:"50px 1fr",className:o},i.a.createElement(s.a,{middle:!0},i.a.createElement(f,{email:a.email,alt:a.name,width:42,height:42})),i.a.createElement(s.a,{middle:!0},i.a.createElement("span",null,a.name,l?i.a.createElement(b,{href:"http://twitter.com/"+a.twitter,target:"_blank"},i.a.createElement("span",null,"Follow")):null),i.a.createElement(h,null,i.a.createElement(p,{pubdate:"pubdate",date:r})," • "+(t=c,n=Math.round(t/5),new Array(n||1).fill("☕️").join("")+" "+t+" min read"))))};y.propTypes={author:r.a.object.isRequired,className:r.a.string,date:r.a.string.isRequired,showFollow:r.a.bool,timeToRead:r.a.number.isRequired};t.a=y},174:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(4),r=n.n(o),l=n(167),s=n(152),c=n(158),m=n(185),u=n.n(m),d=n(172),p=Object(s.d)(c.b).withConfig({displayName:"PostCard__GridContainer",componentId:"sc-1ei7i98-0"})(["border:",";border-radius:0.25rem;height:100%;"],function(e){return e.theme.blog.list.item.border}),g=Object(s.d)(c.a).withConfig({displayName:"PostCard__Body",componentId:"sc-1ei7i98-1"})(["padding:",";"],function(e){return e.theme.blog.list.item.padding}),h=Object(s.d)(c.a).withConfig({displayName:"PostCard__Footer",componentId:"sc-1ei7i98-2"})(["font-family:",";font-size:",";padding:",";line-height:",";height:auto;position:relative;"],function(e){return e.theme.blog.author.fontFamily},function(e){return e.theme.blog.author.fontSize},function(e){var t=e.theme;return t.scale(-1.5)+" "+t.scale(1.2)+" "+t.scale(0)},function(e){return e.theme.blog.author.lineHeight}),f=s.d.h2.withConfig({displayName:"PostCard__Title",componentId:"sc-1ei7i98-3"})(["padding:0;font-family:",";font-size:",";line-height:",";margin:",";"],function(e){return e.theme.blog.list.item.title.fontFamily},function(e){return e.theme.blog.list.item.title.fontSize},function(e){return e.theme.blog.list.item.title.lineHeight},function(e){return e.theme.blog.list.item.title.margin}),b=Object(s.d)(l.a).withConfig({displayName:"PostCard__TitleLink",componentId:"sc-1ei7i98-4"})(["color:",";&:hover{color:",";}"],function(e){return e.theme.blog.list.item.title.color},function(e){return e.theme.blog.list.item.title.hover.color}),y=s.d.p.withConfig({displayName:"PostCard__Text",componentId:"sc-1ei7i98-5"})(["font-family:",";font-size:",";color:",";margin:",";padding:",";line-height:",";"],function(e){return e.theme.blog.list.item.text.fontFamily},function(e){return e.theme.blog.list.item.text.fontSize},function(e){return e.theme.blog.list.item.text.color},function(e){return e.theme.blog.list.item.text.margin},function(e){return e.theme.blog.list.item.text.padding},function(e){return e.theme.blog.list.item.text.lineHeight}),w=s.d.div.withConfig({displayName:"PostCard__Label",componentId:"sc-1ei7i98-6"})(["position:absolute;right:18px;bottom:18px;"]),E=function(e){var t=e.post,n=e.author;return i.a.createElement(p,{columns:1,rows:"auto 1fr auto"},i.a.createElement(c.a,null,i.a.createElement(l.a,{to:t.fields.slug},i.a.createElement(u.a,{sizes:t.frontmatter.image.childImageSharp.sizes}))),i.a.createElement(g,null,i.a.createElement(f,null,i.a.createElement(b,{to:t.fields.slug},t.frontmatter.title)),i.a.createElement(y,null,t.excerpt)),i.a.createElement(h,null,i.a.createElement(d.a,{author:n,date:t.frontmatter.date,timeToRead:t.timeToRead}),i.a.createElement(w,null,i.a.createElement(l.a,{to:t.fields.slug},i.a.createElement("svg",{width:"25",height:"25"},i.a.createElement("path",{d:"M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z",fillRule:"evenodd"}))))))};E.propTypes={post:r.a.shape({fields:r.a.shape({slug:r.a.string.isRequired,langKey:r.a.string.isRequired}),frontmatter:r.a.shape({title:r.a.string.isRequired,date:r.a.string.isRequired}),excerpt:r.a.string.isRequired}),author:r.a.object.isRequired};var x=E,_=(s.d.ul.withConfig({displayName:"PostCardList__Ul",componentId:"f36t2h-0"})(["list-style:none;margin:",";padding:",";"],function(e){return e.theme.blog.list.ul.margin},function(e){return e.theme.blog.list.ul.padding}),function(e){return i.a.createElement("nav",null,i.a.createElement(c.b,{columns:"repeat(auto-fit,minmax(360px,1fr))",gap:"30px",alignContent:"stretch"},e.posts.map(function(t){return i.a.createElement(c.a,{key:t.fields.slug},i.a.createElement(x,{post:t,author:e.author}))})))});_.propTypes={posts:r.a.array.isRequired,author:r.a.object.isRequired};t.a=_}}]);
//# sourceMappingURL=component---src-templates-tag-page-js-b5b4ddd97b2a3e96d779.js.map