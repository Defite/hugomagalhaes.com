(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return i});var a=n(0),r=n.n(a),o=n(285);t.default=function(e){return r.a.createElement(o.a,e)};var i="1735813968"},165:function(e,t,n){"use strict";var a=n(155),r=n(152).d.a.withConfig({displayName:"A",componentId:"g1ipn4-0"})(["color:",";text-decoration:",";cursor:pointer;transition:0.3s;&:hover{color:",";transition:0.3s;}"],function(e){return e.theme.a.color},function(e){return e.theme.a.textDecoration},function(e){return e.theme.a.hover.color});t.a=r.withComponent(a.Link)},174:function(e,t,n){"use strict";n(180);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(152),c=n(158),u=n(185),m=n.n(u),s=(n(27),n(156)),d=function(e){return r.a.createElement("time",Object.assign({},e,{dateTime:e.date}),r.a.createElement(s.a,{value:new Date(e.date),month:"long",day:"numeric",year:"numeric"}))};d.propTypes={date:i.a.string.isRequired};var f=d,p=(n(194),Object(l.d)(c.b).withConfig({displayName:"PostAuthor__Wrapper",componentId:"sc-19mapmw-0"})(["font-family:",";font-size:",";line-height:",";"],function(e){return e.theme.blog.author.fontFamily},function(e){return e.theme.blog.author.fontSize},function(e){return e.theme.blog.author.lineHeight})),h=l.d.span.withConfig({displayName:"PostAuthor__Date",componentId:"sc-19mapmw-1"})(["color:",";display:block;"],function(e){return e.theme.blog.author.time.color}),g=Object(l.d)(m.a).withConfig({displayName:"PostAuthor__ProfilePicture",componentId:"sc-19mapmw-2"})(["display:block;border-radius:50%;"]),b=l.d.a.withConfig({displayName:"PostAuthor__FollowButton",componentId:"sc-19mapmw-3"})(["display:inline-block;vertical-align:middle;cursor:pointer;height:19px;padding:0 10px;color:rgba(0,0,0,.84);border:1px solid rgba(0,0,0,.68);border-radius:4px;user-select:none!important;margin:0 14px 4px;span{font-size:13px;line-height:19px;padding-bottom:2px;}"]),v=function(e){var t,n,a=e.author,o=e.className,i=e.date,l=e.showFollow,u=e.timeToRead;return r.a.createElement(p,{columns:"50px 1fr",className:o},r.a.createElement(c.a,{middle:!0},r.a.createElement(g,{email:a.email,alt:a.name,width:42,height:42})),r.a.createElement(c.a,{middle:!0},r.a.createElement("span",null,a.name,l?r.a.createElement(b,{href:"http://twitter.com/"+a.twitter,target:"_blank"},r.a.createElement("span",null,"Follow")):null),r.a.createElement(h,null,r.a.createElement(f,{pubdate:"pubdate",date:i}),u&&" • "+(t=u,n=Math.round(t/5),new Array(n||1).fill("☕️").join("")+" "+t+" min read"))))};v.propTypes={author:i.a.object.isRequired,className:i.a.string,date:i.a.string.isRequired,showFollow:i.a.bool,timeToRead:i.a.number};t.a=v},176:function(e,t,n){"use strict";n(27);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(163),c=n.n(l),u=n(165),m=n(152),s=n(158),d=n(188),f=n.n(d),p=n(174),h=n(167);function g(){var e=c()(["\n    ",";\n  "]);return g=function(){return e},e}var b=Object(m.d)(s.b).withConfig({displayName:"PostCard__GridContainer",componentId:"sc-1ei7i98-0"})(["height:100%;"]),v=Object(m.d)(b).withConfig({displayName:"PostCard__Wrapper",componentId:"sc-1ei7i98-1"})(["border:",";border-radius:0.25rem;grid-template-rows:repeat(1,1fr);grid-template-columns:3fr 5fr;",""],function(e){return e.theme.blog.list.item.border},h.b.md(g(),function(e){return e.imageOnTop?" grid-template-rows: repeat(2,1fr);\n        grid-template-columns: 1fr;":""})),E=Object(m.d)(s.a).withConfig({displayName:"PostCard__Body",componentId:"sc-1ei7i98-2"})(["padding:",";"],function(e){return e.theme.blog.list.item.padding}),y=Object(m.d)(s.a).withConfig({displayName:"PostCard__Footer",componentId:"sc-1ei7i98-3"})(["font-family:",";font-size:",";padding:",";line-height:",";height:auto;position:relative;"],function(e){return e.theme.blog.author.fontFamily},function(e){return e.theme.blog.author.fontSize},function(e){var t=e.theme;return t.scale(-1.5)+" "+t.scale(1.2)+" "+t.scale(0)},function(e){return e.theme.blog.author.lineHeight}),_=m.d.h2.withConfig({displayName:"PostCard__Title",componentId:"sc-1ei7i98-4"})(["padding:0;font-family:",";font-size:",";line-height:",";margin:",";"],function(e){return e.theme.blog.list.item.title.fontFamily},function(e){return e.theme.blog.list.item.title.fontSize},function(e){return e.theme.blog.list.item.title.lineHeight},function(e){return e.theme.blog.list.item.title.margin}),q=Object(m.d)(u.a).withConfig({displayName:"PostCard__TitleLink",componentId:"sc-1ei7i98-5"})(["color:",";&:hover{color:",";}"],function(e){return e.theme.blog.list.item.title.color},function(e){return e.theme.blog.list.item.title.hover.color}),w=m.d.p.withConfig({displayName:"PostCard__Text",componentId:"sc-1ei7i98-6"})(["font-family:",";font-size:",";color:",";margin:",";padding:",";line-height:",";"],function(e){return e.theme.blog.list.item.text.fontFamily},function(e){return e.theme.blog.list.item.text.fontSize},function(e){return e.theme.blog.list.item.text.color},function(e){return e.theme.blog.list.item.text.margin},function(e){return e.theme.blog.list.item.text.padding},function(e){return e.theme.blog.list.item.text.lineHeight}),x=m.d.div.withConfig({displayName:"PostCard__Label",componentId:"sc-1ei7i98-7"})(["position:absolute;right:18px;bottom:18px;"]),z=Object(m.d)(f.a).withConfig({displayName:"PostCard__Image",componentId:"sc-1ei7i98-8"})(["height:100%;"]),C=function(e){var t=e.post,n=e.author,a=e.imageOnTop;return r.a.createElement(v,{imageOnTop:a},r.a.createElement(s.a,null,r.a.createElement(u.a,{to:t.fields.slug},r.a.createElement(z,{sizes:t.frontmatter.image.childImageSharp.sizes}))),r.a.createElement(s.a,null,r.a.createElement(b,{columns:1,rows:"1fr auto"},r.a.createElement(E,null,r.a.createElement(_,null,r.a.createElement(q,{to:t.fields.slug},t.frontmatter.title)),r.a.createElement(w,null,t.excerpt)),r.a.createElement(y,null,r.a.createElement(p.a,{author:n,date:t.frontmatter.date}),r.a.createElement(x,null,r.a.createElement(u.a,{to:t.fields.slug},r.a.createElement("svg",{width:"25",height:"25"},r.a.createElement("path",{d:"M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z",fillRule:"evenodd"}))))))))};C.propTypes={post:i.a.shape({fields:i.a.shape({slug:i.a.string.isRequired,langKey:i.a.string.isRequired}),frontmatter:i.a.shape({title:i.a.string.isRequired,date:i.a.string.isRequired}),excerpt:i.a.string.isRequired}),author:i.a.object.isRequired,imageOnTop:i.a.bool};var O=C,j=function(e){return r.a.createElement("nav",null,r.a.createElement(s.b,{columns:"repeat(auto-fit,minmax(360px,1fr))",gap:"30px",alignContent:"stretch"},e.posts.map(function(t){return r.a.createElement(s.a,{key:t.fields.slug},r.a.createElement(O,Object.assign({post:t},e)))})))};j.propTypes={posts:i.a.array.isRequired,author:i.a.object.isRequired,imageOnTop:i.a.bool};t.a=j},209:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=i(n(0)),o=i(n(157));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement(o.default,a({viewBox:"0 0 40 40"},e),r.default.createElement("g",null,r.default.createElement("path",{d:"m29.4 0.3v5.9h-3.5q-1.9 0-2.6 0.8t-0.7 2.4v4.2h6.6l-0.9 6.6h-5.7v16.9h-6.8v-16.9h-5.7v-6.6h5.7v-4.9q0-4.1 2.3-6.4t6.2-2.3q3.3 0 5.1 0.3z"})))},e.exports=t.default},210:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=i(n(0)),o=i(n(157));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement(o.default,a({viewBox:"0 0 40 40"},e),r.default.createElement("g",null,r.default.createElement("path",{d:"m37.7 9.1q-1.5 2.2-3.7 3.7 0.1 0.3 0.1 1 0 2.9-0.9 5.8t-2.6 5.5-4.1 4.7-5.7 3.3-7.2 1.2q-6.1 0-11.1-3.3 0.8 0.1 1.7 0.1 5 0 9-3-2.4-0.1-4.2-1.5t-2.6-3.5q0.8 0.1 1.4 0.1 1 0 1.9-0.3-2.5-0.5-4.1-2.5t-1.7-4.6v0q1.5 0.8 3.3 0.9-1.5-1-2.4-2.6t-0.8-3.4q0-2 0.9-3.7 2.7 3.4 6.6 5.4t8.3 2.2q-0.2-0.9-0.2-1.7 0-3 2.1-5.1t5.1-2.1q3.2 0 5.3 2.3 2.4-0.5 4.6-1.7-0.8 2.5-3.2 3.9 2.1-0.2 4.2-1.1z"})))},e.exports=t.default},211:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=i(n(0)),o=i(n(157));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement(o.default,a({viewBox:"0 0 40 40"},e),r.default.createElement("g",null,r.default.createElement("path",{d:"m8.3 31.6h5.1v-15.5h-5.1v15.5z m5.5-20.3q0-1.2-0.8-1.9t-2.1-0.8-2.1 0.8-0.8 1.9q0 1.1 0.8 1.9t2 0.8h0.1q1.3 0 2.1-0.8t0.8-1.9z m13 20.3h5.2v-8.9q0-3.5-1.6-5.2t-4.3-1.8q-3.1 0-4.7 2.6h0v-2.2h-5.1q0 1.4 0 15.5h5.1v-8.7q0-0.8 0.2-1.2 0.3-0.8 1-1.4t1.7-0.5q2.5 0 2.5 3.5v8.3z m10.5-22.3v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"})))},e.exports=t.default},262:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=i(n(0)),o=i(n(157));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement(o.default,a({viewBox:"0 0 40 40"},e),r.default.createElement("g",null,r.default.createElement("path",{d:"m33.4 31.8v-14.4h-3q0.4 1.4 0.4 2.9 0 2.8-1.4 5.2t-3.9 3.7-5.3 1.4q-4.4 0-7.6-3t-3.1-7.3q0-1.5 0.5-2.9h-3.2v14.4q0 0.6 0.4 1t1 0.4h23.8q0.6 0 1-0.4t0.4-1z m-6.3-11.9q0-2.7-2.1-4.7t-4.8-1.9q-2.9 0-4.9 1.9t-2 4.7 2 4.8 4.9 1.9q2.8 0 4.8-1.9t2.1-4.8z m6.3-8v-3.7q0-0.6-0.4-1.1t-1.1-0.4h-3.9q-0.7 0-1.1 0.4t-0.5 1.1v3.7q0 0.6 0.5 1.1t1.1 0.4h3.9q0.6 0 1.1-0.4t0.4-1.1z m3.9-4.6v25.4q0 1.9-1.3 3.1t-3.1 1.3h-25.5q-1.8 0-3.1-1.3t-1.3-3.1v-25.4q0-1.9 1.3-3.1t3.1-1.3h25.5q1.8 0 3.1 1.3t1.3 3.1z"})))},e.exports=t.default},263:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=i(n(0)),o=i(n(157));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement(o.default,a({viewBox:"0 0 40 40"},e),r.default.createElement("g",null,r.default.createElement("path",{d:"m25.9 33.5q-1-5.4-3.2-11.1h0l-0.1 0q-0.3 0.1-0.9 0.4t-2.3 1-3 1.9-3 2.5-2.3 3.3l-0.3-0.2q4.1 3.3 9.3 3.3 3 0 5.8-1.1z m-4.2-13.6q-0.4-1.1-1.2-2.4-6.9 2-15 2 0 0.2 0 0.5 0 2.8 1 5.3t2.8 4.5q1.1-2 2.7-3.7t3.2-2.8 2.9-1.8 2.2-1.1l0.9-0.3q0 0 0.2-0.1t0.3-0.1z m-2.4-4.7q-2.6-4.8-5.4-8.4-3.1 1.4-5.2 4.1t-2.9 6.1q6.8 0 13.5-1.8z m15.3 7.1q-4.7-1.3-9.1-0.6 1.9 5.3 2.8 10.4 2.5-1.6 4.2-4.2t2.1-5.6z m-18-16.5q0 0 0 0 0 0 0 0z m13.2 3.2q-4.1-3.6-9.7-3.6-1.7 0-3.4 0.4 2.9 3.8 5.5 8.5 1.5-0.6 2.9-1.3t2.1-1.4 1.5-1.3 0.8-0.9z m5 10.8q-0.1-5.1-3.3-9.1l-0.1 0q-0.2 0.3-0.4 0.6t-1 1-1.5 1.3-2.3 1.5-2.9 1.4q0.6 1.2 1 2.1 0 0.1 0.1 0.4t0.2 0.4q0.8-0.1 1.6-0.2t1.7 0 1.5 0 1.5 0.1 1.2 0.1 1.1 0.2 0.8 0.1 0.6 0.1z m2.5 0.2q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"})))},e.exports=t.default},285:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=(n(180),n(163)),c=n.n(l),u=n(152),m=n(185),s=n.n(m),d=n(158),f=n(209),p=n.n(f),h=n(210),g=n.n(h),b=n(211),v=n.n(b),E=n(262),y=n.n(E),_=n(263),q=n.n(_),w=n(230),x=n.n(w),z=n(167);function C(){var e=c()(["\n    font-size: 2.1rem;\n  "]);return C=function(){return e},e}function O(){var e=c()(["\n    br { display: block; }\n    font-size: 1rem;\n  "]);return O=function(){return e},e}var j=Object(u.d)(d.b).withConfig({displayName:"Welcome__Wrapper",componentId:"sc-6dlbh4-0"})(["margin-top:",";margin-bottom:",";font-family:",";font-size:",";line-height:",";"],function(e){return e.theme.welcome.marginTop},function(e){return e.theme.welcome.marginBottom},function(e){return e.theme.blog.author.fontFamily},function(e){return e.theme.blog.author.fontSize},function(e){return e.theme.blog.author.lineHeight}),k=Object(u.d)(s.a).withConfig({displayName:"Welcome__ProfilePicture",componentId:"sc-6dlbh4-1"})(["display:block;border-radius:50%;border:4px solid #ecf0f1;"]),N=u.d.span.withConfig({displayName:"Welcome__Bio",componentId:"sc-6dlbh4-2"})(["color:",";display:block;font-size:0.8rem;br{display:none;}",""],function(e){return e.theme.blog.author.time.color},z.b.md(O())),I=u.d.ul.withConfig({displayName:"Welcome__SocialLinks",componentId:"sc-6dlbh4-3"})(["margin-top:6px;list-style:none;li{display:inline-block;margin-right:5px;}"]),P=u.d.a.withConfig({displayName:"Welcome__A",componentId:"sc-6dlbh4-4"})(["color:",";text-decoration:none;font-size:1.5rem;display:inline-block;padding:",";transition:0.3s;opacity:0.8;&:hover{opacity:1;color:",";transition:0.3s;}"],function(e){return e.theme.colors.black},function(e){return e.theme.socialLinks.a.padding},function(e){return e.theme.socialLinks.a.hover.color}),T=u.d.span.withConfig({displayName:"Welcome__Name",componentId:"sc-6dlbh4-5"})(["font-size:1.6rem;font-family:",";margin-bottom:0.3rem;",""],function(e){return e.theme.fonts.SansSerif},z.b.md(C())),R=function(e){var t=e.author,n=e.className;return r.a.createElement(j,{columns:"153px 1fr",className:n},r.a.createElement(d.a,{middle:!0},r.a.createElement(k,{email:t.email,alt:t.name,size:128})),r.a.createElement(d.a,{middle:!0},r.a.createElement(T,null,t.name),r.a.createElement(N,{dangerouslySetInnerHTML:{__html:t.bio}}),r.a.createElement(I,null,r.a.createElement("li",null,r.a.createElement(P,{href:"https://facebook.hugomagalhaes.com",target:"_blank",rel:"noreferrer noopener"},r.a.createElement(p.a,null))),r.a.createElement("li",null,r.a.createElement(P,{href:"https://twitter.hugomagalhaes.com",target:"_blank",rel:"noreferrer noopener"},r.a.createElement(g.a,null))),r.a.createElement("li",null,r.a.createElement(P,{href:"https://linkedin.hugomagalhaes.com",target:"_blank",rel:"noreferrer noopener"},r.a.createElement(v.a,null))),r.a.createElement("li",null,r.a.createElement(P,{href:"https://instagram.hugomagalhaes.com",target:"_blank",rel:"noreferrer noopener"},r.a.createElement(y.a,null))),r.a.createElement("li",null,r.a.createElement(P,{href:"https://dribbble.hugomagalhaes.com",target:"_blank",rel:"noreferrer noopener"},r.a.createElement(q.a,null))),r.a.createElement("li",null,r.a.createElement(P,{href:"https://github.hugomagalhaes.com",target:"_blank",rel:"noreferrer noopener"},r.a.createElement(x.a,null))))))};R.propTypes={author:i.a.object.isRequired,className:i.a.string};var M=R,S=n(170),F=n(176),L=n(156),B=n(155),H=Object(u.d)(B.Link).withConfig({displayName:"BtnLink",componentId:"sc-1yklihl-0"})(["font-family:",";background-color:",";padding:1rem;margin:"," auto;color:",";border-radius:0.2rem;text-decoration:none;display:table;transition:0.3s;&:hover{background-color:",";color:",";transition:0.3s;}"],function(e){return e.theme.fonts.SansSerif},function(e){return e.theme.colors.white},function(e){return e.theme.scale(2)},function(e){return e.theme.colors.black},function(e){return e.theme.colors.blackShades[0]},function(e){return e.theme.colors.white}),W=u.d.section.withConfig({displayName:"Index__FeaturedContainer",componentId:"car5un-0"})(["margin:",";"],function(e){return e.theme.blog.list.margin}),A=u.d.section.withConfig({displayName:"Index__AllStoriesContainer",componentId:"car5un-1"})(["margin:",";"],function(e){return e.theme.blog.list.margin}),D=u.d.h2.withConfig({displayName:"Index__H2",componentId:"car5un-2"})(["font-size:1.4rem;border-bottom:1px solid rgba(0,0,0,0.125);margin-bottom:27px;padding-top:25px;span{border-bottom:1px solid rgba(0,0,0,0.44);display:inline-block;padding-bottom:20px;margin-bottom:-1px;}"]),J=function(e){var t=e.data.all.edges.map(function(e){return e.node}),n=e.data.featured.edges.map(function(e){return e.node}),a=e.data.site.siteMetadata.author,o=e.pageContext.langKey;return r.a.createElement(S.a,{location:e.location},r.a.createElement("div",null,r.a.createElement(M,{author:a}),r.a.createElement(W,null,r.a.createElement(D,null,r.a.createElement(L.b,{id:"index.featured"},function(e){return r.a.createElement("span",null,e)})),r.a.createElement(F.a,{posts:n,author:a})),r.a.createElement(A,null,r.a.createElement(D,null,r.a.createElement(L.b,{id:"index.stories"},function(e){return r.a.createElement("span",null,e)})),r.a.createElement(F.a,{posts:t,author:a,imageOnTop:!0}),r.a.createElement(L.b,{id:"posts.seeMore"},function(e){return r.a.createElement(H,{to:"/"+o+"/blog/"},e)}))))};J.propTypes={data:i.a.object.isRequired,pageContext:i.a.object.isRequired,location:i.a.object.isRequired};t.a=J}}]);
//# sourceMappingURL=component---src-pages-index-pt-js-2464f2341405a069722c.js.map