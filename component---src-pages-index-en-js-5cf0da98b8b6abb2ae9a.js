(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return i});var a=n(0),o=n.n(a),r=n(279);t.default=function(e){return o.a.createElement(r.a,e)};var i="1280238051"},172:function(e,t,n){"use strict";n(182);var a=n(0),o=n.n(a),r=n(4),i=n.n(r),l=n(152),u=n(158),s=n(191),c=n.n(s),m=(n(28),n(155)),d=function(e){return o.a.createElement("time",Object.assign({},e,{dateTime:e.date}),o.a.createElement(m.a,{value:new Date(e.date),month:"long",day:"numeric",year:"numeric"}))};d.propTypes={date:i.a.string.isRequired};var p=d,g=Object(l.d)(u.b).withConfig({displayName:"PostAuthor__Wrapper",componentId:"sc-19mapmw-0"})(["font-family:",";font-size:",";line-height:",";"],function(e){return e.theme.blog.author.fontFamily},function(e){return e.theme.blog.author.fontSize},function(e){return e.theme.blog.author.lineHeight}),h=Object(l.d)(p).withConfig({displayName:"PostAuthor__Date",componentId:"sc-19mapmw-1"})(["color:",";display:block;"],function(e){return e.theme.blog.author.time.color}),f=Object(l.d)(c.a).withConfig({displayName:"PostAuthor__ProfilePicture",componentId:"sc-19mapmw-2"})(["display:block;border-radius:50%;"]),b=l.d.a.withConfig({displayName:"PostAuthor__FollowButton",componentId:"sc-19mapmw-3"})(["display:inline-block;vertical-align:middle;cursor:pointer;height:21px;padding:0 10px;color:rgba(0,0,0,.84);border:1px solid rgba(0,0,0,.68);border-radius:4px;user-select:none!important;margin-left:14px;span{font-size:13px;line-height:19px;padding-bottom:2px;}"]),v=function(e){var t=e.author,n=e.className,a=e.date,r=e.showFollow;return o.a.createElement(g,{columns:"50px 1fr",className:n},o.a.createElement(u.a,{middle:!0},o.a.createElement(f,{email:t.email,alt:t.name,width:42,height:42})),o.a.createElement(u.a,{middle:!0},o.a.createElement("span",null,t.name,r?o.a.createElement(b,{href:"http://twitter.com/"+t.twitter,target:"_blank"},o.a.createElement("span",null,"Follow")):null),o.a.createElement(h,{pubdate:"pubdate",date:a})))};v.propTypes={author:i.a.object.isRequired,className:i.a.string,date:i.a.string.isRequired,showFollow:i.a.boolean};t.a=v},174:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(4),i=n.n(r),l=n(167),u=n(152),s=n(158),c=n(185),m=n.n(c),d=n(172),p=Object(u.d)(s.b).withConfig({displayName:"PostCard__GridContainer",componentId:"sc-1ei7i98-0"})(["border:",";border-radius:0.25rem;height:100%;"],function(e){return e.theme.blog.list.item.border}),g=Object(u.d)(s.a).withConfig({displayName:"PostCard__Body",componentId:"sc-1ei7i98-1"})(["padding:",";"],function(e){return e.theme.blog.list.item.padding}),h=Object(u.d)(s.a).withConfig({displayName:"PostCard__Footer",componentId:"sc-1ei7i98-2"})(["font-family:",";font-size:",";padding:",";line-height:",";height:auto;position:relative;"],function(e){return e.theme.blog.author.fontFamily},function(e){return e.theme.blog.author.fontSize},function(e){var t=e.theme;return t.scale(-1.5)+" "+t.scale(1.2)+" "+t.scale(0)},function(e){return e.theme.blog.author.lineHeight}),f=u.d.h2.withConfig({displayName:"PostCard__Title",componentId:"sc-1ei7i98-3"})(["padding:0;font-family:",";font-size:",";line-height:",";margin:",";"],function(e){return e.theme.blog.list.item.title.fontFamily},function(e){return e.theme.blog.list.item.title.fontSize},function(e){return e.theme.blog.list.item.title.lineHeight},function(e){return e.theme.blog.list.item.title.margin}),b=Object(u.d)(l.a).withConfig({displayName:"PostCard__TitleLink",componentId:"sc-1ei7i98-4"})(["color:",";&:hover{color:",";}"],function(e){return e.theme.blog.list.item.title.color},function(e){return e.theme.blog.list.item.title.hover.color}),v=u.d.p.withConfig({displayName:"PostCard__Text",componentId:"sc-1ei7i98-5"})(["font-family:",";font-size:",";color:",";margin:",";padding:",";line-height:",";"],function(e){return e.theme.blog.list.item.text.fontFamily},function(e){return e.theme.blog.list.item.text.fontSize},function(e){return e.theme.blog.list.item.text.color},function(e){return e.theme.blog.list.item.text.margin},function(e){return e.theme.blog.list.item.text.padding},function(e){return e.theme.blog.list.item.text.lineHeight}),y=u.d.div.withConfig({displayName:"PostCard__Label",componentId:"sc-1ei7i98-6"})(["position:absolute;right:18px;bottom:18px;"]),E=function(e){var t=e.post,n=e.author;return o.a.createElement(p,{columns:1,rows:"auto 1fr auto"},o.a.createElement(s.a,null,o.a.createElement(l.a,{to:t.fields.slug},o.a.createElement(m.a,{sizes:t.frontmatter.image.childImageSharp.sizes}))),o.a.createElement(g,null,o.a.createElement(f,null,o.a.createElement(b,{to:t.fields.slug},t.frontmatter.title)),o.a.createElement(v,null,t.excerpt)),o.a.createElement(h,null,o.a.createElement(d.a,{author:n,date:t.frontmatter.date}),o.a.createElement(y,null,o.a.createElement(l.a,{to:t.fields.slug},o.a.createElement("svg",{width:"25",height:"25"},o.a.createElement("path",{d:"M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z",fillRule:"evenodd"}))))))};E.propTypes={post:i.a.shape({fields:i.a.shape({slug:i.a.string.isRequired,langKey:i.a.string.isRequired}),frontmatter:i.a.shape({title:i.a.string.isRequired,date:i.a.string.isRequired}),excerpt:i.a.string.isRequired}),author:i.a.object.isRequired};var w=E,x=(u.d.ul.withConfig({displayName:"PostCardList__Ul",componentId:"f36t2h-0"})(["list-style:none;margin:",";padding:",";"],function(e){return e.theme.blog.list.ul.margin},function(e){return e.theme.blog.list.ul.padding}),function(e){return console.log("[dev:hugo] props",e),o.a.createElement("nav",null,o.a.createElement(s.b,{columns:"repeat(auto-fit,minmax(360px,1fr))",gap:"30px",alignContent:"stretch"},e.posts.map(function(t){return o.a.createElement(s.a,{key:t.fields.slug},o.a.createElement(w,{post:t,author:e.author}))})))});x.propTypes={posts:i.a.array.isRequired,author:i.a.object.isRequired};t.a=x},279:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(4),i=n.n(r),l=n(152),u=l.d.section.withConfig({displayName:"Welcome__Wrapper",componentId:"sc-6dlbh4-0"})(["margin-top:",";margin-bottom:",";"],function(e){return e.theme.welcome.marginTop},function(e){return e.theme.welcome.marginBottom}),s=function(e){var t=e.currentLangKey;return o.a.createElement(u,null,{en:o.a.createElement("p",null,"Hi! Welcome to my site, where you can learn about Web, App and software development.",o.a.createElement("br",null),"I welcome you to accept my challenge: ",o.a.createElement("mark",null," Study every day "),", at least 10 minutes. Do NOT stop learning about tecnology, life, arts, languages, anything that you like.",o.a.createElement("br",null),o.a.createElement("br",null),"Face your fears! Learning keeps us young, it makes us see the universe in a new perspective and fall in love.",o.a.createElement("br",null),"Are you ready to learn and change your life?"),pt:o.a.createElement("p",null,"Oi! Bem-vindo ao meu site, aqui você pode aprender sobre desenvolvimento de aplicações Web, Sites e Apps.",o.a.createElement("br",null),"Convido você a aceitar o meu desafio: ",o.a.createElement("mark",null," Estude todos os dias "),", pelo menos 10 minutos. NÃO pare de estudar sobre tecnologia, vida, artes, idiomas, qualquer coisa que você goste.",o.a.createElement("br",null),o.a.createElement("br",null),"Enfrente seus medos! Aprender nos mantém jovens, faz-nos ver o universo em uma nova perspectiva e se apaixonar.",o.a.createElement("br",null),"Você está pronto para aprender e mudar sua vida?"),fr:o.a.createElement("p",null,"Salut! Bienvenue sur mon site, ici vous pouvez en apprendre davantage sur le développement d'applications Web.",o.a.createElement("br",null),"Je vous invite à accepter mon défi: ",o.a.createElement("mark",null," Étudie chaque jour ")," au moins 10 minutes. Ne cessez pas d'étudier la technologie, la vie, les arts, les langues, tout ce que vous aimez.",o.a.createElement("br",null),o.a.createElement("br",null),"Faites face à vos peurs! L'apprentissage nous garde jeune, nous fait voir l'univers d' une nouvelle perspective et nous fait tomber amoureux.",o.a.createElement("br",null),"Êtes-vous prêt à apprendre et à changer votre vie?")}[t])};s.propTypes={currentLangKey:i.a.string};var c=n(166),m=(n(167),n(174)),d=(n(155),l.d.h2.withConfig({displayName:"H2",componentId:"mf6odb-0"})(["font-size:",";margin:",";padding:",";text-align:",";"],function(e){return e.theme.h2.fontSize},function(e){return e.theme.h2.margin},function(e){return e.theme.h2.padding},function(e){return e.theme.h2.textAlign}),n(159)),p=(Object(l.d)(d.Link).withConfig({displayName:"BtnLink",componentId:"sc-1yklihl-0"})(["background-color:",";padding:1rem;margin:"," auto;color:",";border-radius:0.2rem;text-decoration:none;display:table;transition:0.3s;&:hover{background-color:",";color:",";transition:0.3s;}"],function(e){return e.theme.colors.white},function(e){return e.theme.scale(2)},function(e){return e.theme.colors.black},function(e){return e.theme.colors.blackShades[0]},function(e){return e.theme.colors.yellow}),l.d.section.withConfig({displayName:"Index__PostCardListContainer",componentId:"car5un-0"})(["margin:",";"],function(e){return e.theme.blog.list.margin})),g=function(e){var t=e.data.allMarkdownRemark.edges.map(function(e){return e.node}),n=e.data.site.siteMetadata.author;e.pageContext.langKey;return o.a.createElement(c.a,{location:e.location},o.a.createElement("div",null,o.a.createElement(p,null,o.a.createElement(m.a,{posts:t,author:n}))))};g.propTypes={data:i.a.object.isRequired,pageContext:i.a.object.isRequired,location:i.a.object.isRequired};t.a=g}}]);
//# sourceMappingURL=component---src-pages-index-en-js-5cf0da98b8b6abb2ae9a.js.map