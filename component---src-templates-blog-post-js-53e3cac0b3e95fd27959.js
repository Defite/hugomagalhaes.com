(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{149:function(e,t,n){"use strict";n.r(t);var r=n(6),o=n.n(r),a=n(0),i=n.n(a),l=n(4),c=n.n(l),u=n(158),s=n(170),m=n.n(s),d=n(152),p=(n(69),n(365)),f=n.n(p),h=d.d.a.withConfig({displayName:"EditBtn__A",componentId:"v55wgo-0"})(["display:block;text-align:center;padding:1rem;color:",";cursor:pointer;font-size:1rem;transition:0.3s;&:hover{transition:0.3s;color:",";}"],function(e){return e.theme.colors.green},function(e){return e.theme.colors.white}),g=Object(d.d)(f.a).withConfig({displayName:"EditBtn__EditIcon",componentId:"v55wgo-1"})(["padding:0 "," 0 0;"],function(e){return e.theme.scale(-8)}),b=function(e){return"https://github.com/hugomn/hugomn/blob/master/src/"+e.split("/src/")[1]},y=function(e){var t=e.fileAbsolutePath,n=e.currentLangKey;return i.a.createElement(h,{href:b(t),target:"_blank"},i.a.createElement(g,null),{en:"Edit",fr:"Modifier",pt:"Editar"}[n])};y.propTypes={fileAbsolutePath:c.a.string,currentLangKey:c.a.string};n(213);var v=d.d.section.withConfig({displayName:"Tags__Section",componentId:"ba2vl1-0"})(["text-align:celeftnter;margin:1rem 0;padding:0;"]),w=d.d.li.withConfig({displayName:"Tags__Li",componentId:"ba2vl1-1"})(["display:inline;&:not(:last-child):after{content:' ';margin:0 1rem 0 0;display:inline-block;}"]),E=Object(d.d)(u.Link).withConfig({displayName:"Tags__A",componentId:"ba2vl1-2"})(["font-family:",";font-size:",";color:",";background:rgba(0,0,0,.05);border-radius:3px;display:inline-block;position:relative;transition:0.3s;padding:"," ",";&:hover{color:",";transition:0.3s;}"],function(e){return e.theme.fonts.SansSerif},function(e){return e.theme.scale(0)},function(e){return e.theme.colors.black},function(e){return e.theme.scale(-2)},function(e){return e.theme.scale(-2)},function(e){return e.theme.colors.green}),_=function(e){var t=e.tag;return i.a.createElement(w,null,i.a.createElement(E,{to:t.link},t.tag))};_.propTypes={tag:c.a.object};var O=d.d.ul.withConfig({displayName:"Tags__Ul",componentId:"ba2vl1-3"})(["list-style:none;margin:0;padding:0;display:block;"]),j=function(e){return e.tags&&0!==e.tags.length?i.a.createElement(v,null,i.a.createElement(O,null,(e.tags||[]).map(function(e,t){return i.a.createElement(_,{tag:e,key:t})}))):null};j.propTypes={tags:c.a.array};var q=j,C=n(177),x=(n(27),n(572)),k=n.n(x),N=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return i.a.createElement(k.a,Object.assign({onNewComment:this.handleNewComment},this.props))},t}(i.a.PureComponent);N.propTypes={shortname:c.a.string,identifier:c.a.string,title:c.a.string,url:c.a.string,category_id:c.a.string};var S=Object(d.d)(N).withConfig({displayName:"Comments",componentId:"sc-1bd7u1q-0"})(["margin:"," 0;"],function(e){return e.theme.scale(6)}),I=(n(173),n(168)),P=n(187),z=n.n(P),T=n(208),R=n.n(T),L=n(209),D=n.n(L),M=n(634),B=n.n(M),U=n(210),A=n.n(U),F=n(172),H=function(e,t){return"https://twitter.com/intent/tweet/?text="+encodeURIComponent(t||"")+"&url="+encodeURIComponent(e||"")},W=function(e){return"https://facebook.com/sharer/sharer.php?u="+encodeURIComponent(e||"")},G=function(e){return"https://plus.google.com/share?url="+encodeURIComponent(e||"")},J=function(e,t){return"https://www.linkedin.com/shareArticle?mini=true&url="+encodeURIComponent(e||"")+"&title="+encodeURIComponent(t||"")+"&summary="+encodeURIComponent(t||"")+"&source="+encodeURIComponent(e||"")},Q=!1,K=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){this._resetComments()},n.componentDidUpdate=function(){this._resetComments()},n._resetComments=function(){this._addDisqusScript(),"undefined"!=typeof DISQUSWIDGETS&&DISQUSWIDGETS.getCount({reset:!0})},n._addDisqusScript=function(){if(!Q){var e=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0],t=document.createElement("script");t.async=!0,t.id="dsq-count-scr",t.type="text/javascript",t.src="//"+this.props.shortname+".disqus.com/count.js",e.appendChild(t),Q=!0}},n.render=function(){return this.props.isLink?i.a.createElement("a",{href:this.props.url+"#disqus_thread"},this.props.children):i.a.createElement("span",{className:["disqus-comment-count"],"data-disqus-url":this.props.url},this.props.children)},t}(a.Component);K.propTypes={shortname:c.a.string.isRequired,url:c.a.string.isRequired,children:c.a.element,isLink:c.a.bool},K.defaultProps={isLink:!1};var V=d.d.ul.withConfig({displayName:"ShareWidget__Ul",componentId:"pej4hz-0"})(["display:flex;flex-wrap:wrap;flex-direction:column;align-items:center;justify-content:center;margin:",";padding:",";list-style:none;"],function(e){return e.theme.socialLinks.margin},function(e){return e.theme.socialLinks.padding}),X=d.d.a.withConfig({displayName:"ShareWidget__A",componentId:"pej4hz-1"})(["color:",";text-decoration:none;font-size:",";display:inline-block;margin:",";padding:",";transition:0.3s;opacity:0.7;&:hover{opacity:1;color:",";transition:0.3s;}"],function(e){return e.theme.socialLinks.a.color},function(e){return e.theme.socialLinks.a.fontSize},function(e){return e.theme.socialLinks.a.margin},function(e){return e.theme.socialLinks.a.padding},function(e){return e.theme.socialLinks.a.hover.color}),Y=d.d.section.withConfig({displayName:"ShareWidget__Wrapper",componentId:"pej4hz-2"})(["position:fixed;top:0;width:60px;transform:translateY(230px) translateX(-100px);",""],F.c.lg),Z=d.d.li.withConfig({displayName:"ShareWidget__DisqusContainer",componentId:"pej4hz-3"})(["color:rgba(0,0,0,0.44);border-top:1px solid rgba(0,0,0,0.30);padding-top:20px;font-size:0.7rem;max-width:60px;text-align:center;"]),$=function(e){var t=e.disqusShortname,n=e.url,r=e.message;return i.a.createElement(Y,null,i.a.createElement(V,null,i.a.createElement("li",null,i.a.createElement(X,{href:H(n,r),target:"_blank",rel:"noreferrer noopener","aria-label":"Share on twitter",title:"Share on twitter"},i.a.createElement(D.a,null))),i.a.createElement("li",null,i.a.createElement(X,{href:W(n,r),target:"_blank",rel:"noreferrer noopener","aria-label":"Share on facebook",title:"Share on facebook"},i.a.createElement(R.a,null))),i.a.createElement("li",null,i.a.createElement(X,{href:J(n,r),target:"_blank",rel:"noreferrer noopener","aria-label":"Share on Linkedin",title:"Share on Linkedin"},i.a.createElement(A.a,null))),i.a.createElement("li",null,i.a.createElement(X,{href:G(n,r),target:"_blank",rel:"noreferrer noopener","aria-label":"Share on Google+",title:"Share on Google+"},i.a.createElement(B.a,null))),i.a.createElement(Z,null,i.a.createElement(K,{url:n,shortname:t}))))};$.propTypes={disqusShortname:c.a.string.isRequired,url:c.a.string.isRequired,message:c.a.string.isRequired};var ee=$,te=n(169);n.d(t,"pageQuery",function(){return le});var ne=d.d.article.withConfig({displayName:"blog-post__Post",componentId:"lodmgn-0"})(["margin:",";padding:",";max-width:",";"],function(e){return e.theme.blog.post.margin},function(e){return e.theme.blog.post.padding},function(e){return e.theme.blog.post.maxWidth}),re=d.d.h1.withConfig({displayName:"blog-post__H1",componentId:"lodmgn-1"})(["padding:0;font-family:",";margin:",";font-size:",";"],function(e){return e.theme.blog.post.header.fontFamily},function(e){return e.theme.blog.post.header.margin},function(e){return e.theme.blog.post.header.fontSize}),oe=d.d.section.withConfig({displayName:"blog-post__Content",componentId:"lodmgn-2"})(["margin:0 0 "," 0;font-family:",";p > code{color:",";font-size:",";margin:",";padding:",";background-color:",";border-radius:",";}.gatsby-highlight{margin:",";padding:",";background-color:",";display:flex;border-radius:",";overflow:auto;code{color:",";}pre{width:100%;border:2px solid ",";}}p{margin:",";padding:",";font-size:",";line-height:",";}strong{font-weight:bold;}ul,ol{margin:",";padding:",";font-size:",";}ul{list-style:disc;}ol{list-style:decimal;}li{padding-top:1rem;}blockquote{border-left:4px solid #00ab6b;font-style:italic;margin:"," 0 0;padding:"," ",";position:relative;text-align:left;color:",";}blockquote p{margin:0;padding:0;}img{max-width:100%;}"],function(e){return e.theme.scale(6)},function(e){return e.theme.blog.post.content.fontFamily},function(e){return e.theme.blog.post.content.code.color},function(e){return e.theme.blog.post.content.code.fontSize},function(e){return e.theme.blog.post.content.code.margin},function(e){return e.theme.blog.post.content.code.padding},function(e){return e.theme.blog.post.content.code.backgroundColor},function(e){return e.theme.blog.post.content.code.borderRadius},function(e){return e.theme.blog.post.content.highlight.margin},function(e){return e.theme.blog.post.content.highlight.padding},function(e){return e.theme.blog.post.content.highlight.backgroundColor},function(e){return e.theme.blog.post.content.highlight.borderRadius},function(e){return e.theme.blog.post.content.highlight.code.color},function(e){return e.theme.colors.white},function(e){return e.theme.blog.post.content.p.margin},function(e){return e.theme.blog.post.content.p.padding},function(e){return e.theme.p.fontSize},function(e){return e.theme.p.lineHeight},function(e){return e.theme.blog.post.content.ul.margin},function(e){return e.theme.blog.post.content.ul.padding},function(e){return e.theme.blog.post.content.ul.fontSize},function(e){return e.theme.scale(3)},function(e){return e.theme.scale(0)},function(e){return e.theme.scale(1)},function(e){return e.theme.colors.lightGray}),ae=Object(d.d)(te.a).withConfig({displayName:"blog-post__Author",componentId:"lodmgn-3"})(["padding:",";"],function(e){return"0 0 "+e.theme.scale(3.2)}),ie=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=Object(C.a)(e),n=this.props.data.site.siteMetadata,r=n.author,o=n.disqusShortname,a=n.siteUrl,l=""+a+e.fields.slug;return i.a.createElement(I.a,{location:this.props.location},i.a.createElement(ne,null,i.a.createElement(m.a,null,i.a.createElement("title",null,e.frontmatter.title),i.a.createElement("link",{rel:"canonical",href:l}),i.a.createElement("meta",{name:"description",content:e.excerpt}),i.a.createElement("meta",{name:"og:description",content:e.excerpt}),i.a.createElement("meta",{name:"og:title",content:e.frontmatter.title}),i.a.createElement("meta",{name:"og:type",content:"article"}),i.a.createElement("meta",{name:"og:url",content:l}),i.a.createElement("meta",{name:"og:image",content:""+a+Object(u.withPrefix)(e.frontmatter.image.publicURL)})),i.a.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:t}}),i.a.createElement("header",null,i.a.createElement(re,null,e.frontmatter.title),i.a.createElement(ae,{author:r,date:e.frontmatter.date,timeToRead:e.timeToRead,showFollow:!0}),i.a.createElement(z.a,{sizes:e.frontmatter.image.childImageSharp.sizes})),i.a.createElement(oe,{dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement(q,{tags:e.fields.tagSlugs}),i.a.createElement(S,{shortname:o,identifier:e.fields.slug,title:e.frontmatter.title,url:l}),i.a.createElement(ee,{disqusShortname:o,url:l,message:e.excerpt})))},t}(i.a.PureComponent);ie.propTypes={data:c.a.object,location:c.a.object.isRequired};t.default=ie;var le="3654479263"},161:function(e,t,n){"use strict";var r=n(158),o=n(152).d.a.withConfig({displayName:"A",componentId:"g1ipn4-0"})(["color:",";text-decoration:",";cursor:pointer;transition:0.3s;&:hover{color:",";transition:0.3s;}"],function(e){return e.theme.a.color},function(e){return e.theme.a.textDecoration},function(e){return e.theme.a.hover.color});t.a=o.withComponent(r.Link)},164:function(e,t,n){n(27);var r={hugomn:{name:"Hugo Nogueira",additionalName:"hugomn",address:"Berlin CA",birthDate:"1986-09-01",birthPlace:"Juiz de Fora BR",brand:"Hugo Nogueira, Software Engineer, Lead Front-end engineer, Senior ReactJs developer",children:"...",email:"hugomn@gmail.com",familyName:"Nogueira",gender:"Male",givenName:"Hugo",height:"...",homeLocation:"Berlin",jobTitle:"Software Engineering Lead",knows:"...",memberOf:"...",nationality:"Brazilian",owns:"...",parent:"...",performerIn:"...",publishingPrinciples:"...",relatedTo:"...",seeks:"...",sibling:"...",spouse:{additionalName:"Lunara Leto Costa",name:"Lunara Leto Costa",givenName:"Lunara",familyName:"Costa",gender:"Female",nationality:"Brazilian",homeLocation:"Berlin"},telephone:"...",weight:"...",workLocation:"...",worksFor:"...",description:"...",disambiguatingDescription:"...",identifier:"...",image:"http://www.gravatar.com/avatar/9174fca44b5ca403593ac9cb2407e0e7",sameAs:"https://hugomagalhaes.com/en/about/",url:"https://hugomagalhaes.com/en/about/"}};e.exports={authors:r,getAuthor:function(e){var t=Object.assign({},r[e],{"@type":"Person"});return t||r[0]}}},169:function(e,t,n){"use strict";n(178);var r=n(0),o=n.n(r),a=n(4),i=n.n(a),l=n(152),c=n(154),u=n(183),s=n.n(u),m=(n(27),n(157)),d=function(e){return o.a.createElement("time",Object.assign({},e,{dateTime:e.date}),o.a.createElement(m.a,{value:new Date(e.date),month:"long",day:"numeric",year:"numeric"}))};d.propTypes={date:i.a.string.isRequired};var p=d,f=(n(192),Object(l.d)(c.b).withConfig({displayName:"PostAuthor__Wrapper",componentId:"sc-19mapmw-0"})(["font-family:",";font-size:",";line-height:",";"],function(e){return e.theme.blog.author.fontFamily},function(e){return e.theme.blog.author.fontSize},function(e){return e.theme.blog.author.lineHeight})),h=l.d.span.withConfig({displayName:"PostAuthor__Date",componentId:"sc-19mapmw-1"})(["color:",";display:block;"],function(e){return e.theme.blog.author.time.color}),g=Object(l.d)(s.a).withConfig({displayName:"PostAuthor__ProfilePicture",componentId:"sc-19mapmw-2"})(["display:block;border-radius:50%;"]),b=l.d.a.withConfig({displayName:"PostAuthor__FollowButton",componentId:"sc-19mapmw-3"})(["display:inline-block;vertical-align:middle;cursor:pointer;height:19px;padding:0 10px;color:rgba(0,0,0,.84);border:1px solid rgba(0,0,0,.68);border-radius:4px;user-select:none!important;margin:0 14px 4px;span{font-size:13px;line-height:19px;padding-bottom:2px;}"]),y=function(e){var t,n,r=e.author,a=e.className,i=e.date,l=e.showFollow,u=e.timeToRead;return o.a.createElement(f,{columns:"50px 1fr",className:a},o.a.createElement(c.a,{middle:!0},o.a.createElement(g,{email:r.email,alt:r.name,width:42,height:42})),o.a.createElement(c.a,{middle:!0},o.a.createElement("span",null,r.name,l?o.a.createElement(b,{href:"http://twitter.com/"+r.twitter,target:"_blank"},o.a.createElement("span",null,"Follow")):null),o.a.createElement(h,null,o.a.createElement(p,{pubdate:"pubdate",date:i}),u&&" • "+(t=u,n=Math.round(t/5),new Array(n||1).fill("☕️").join("")+" "+t+" min read"))))};y.propTypes={author:i.a.object.isRequired,className:i.a.string,date:i.a.string.isRequired,showFollow:i.a.bool,timeToRead:i.a.number};t.a=y},173:function(e,t,n){"use strict";n(27);var r=n(0),o=n.n(r),a=n(4),i=n.n(a),l=n(167),c=n.n(l),u=n(161),s=n(152),m=n(154),d=n(187),p=n.n(d),f=n(169),h=n(172);function g(){var e=c()(["\n    ",";\n  "]);return g=function(){return e},e}var b=Object(s.d)(m.b).withConfig({displayName:"PostCard__GridContainer",componentId:"sc-1ei7i98-0"})(["height:100%;"]),y=Object(s.d)(b).withConfig({displayName:"PostCard__Wrapper",componentId:"sc-1ei7i98-1"})(["border:",";border-radius:0.25rem;grid-template-rows:repeat(1,1fr);grid-template-columns:3fr 5fr;",""],function(e){return e.theme.blog.list.item.border},h.b.md(g(),function(e){return e.imageOnTop?" grid-template-rows: repeat(2,1fr);\n        grid-template-columns: 1fr;":""})),v=Object(s.d)(m.a).withConfig({displayName:"PostCard__Body",componentId:"sc-1ei7i98-2"})(["padding:",";"],function(e){return e.theme.blog.list.item.padding}),w=Object(s.d)(m.a).withConfig({displayName:"PostCard__Footer",componentId:"sc-1ei7i98-3"})(["font-family:",";font-size:",";padding:",";line-height:",";height:auto;position:relative;"],function(e){return e.theme.blog.author.fontFamily},function(e){return e.theme.blog.author.fontSize},function(e){var t=e.theme;return t.scale(-1.5)+" "+t.scale(1.2)+" "+t.scale(0)},function(e){return e.theme.blog.author.lineHeight}),E=s.d.h2.withConfig({displayName:"PostCard__Title",componentId:"sc-1ei7i98-4"})(["padding:0;font-family:",";font-size:",";line-height:",";margin:",";"],function(e){return e.theme.blog.list.item.title.fontFamily},function(e){return e.theme.blog.list.item.title.fontSize},function(e){return e.theme.blog.list.item.title.lineHeight},function(e){return e.theme.blog.list.item.title.margin}),_=Object(s.d)(u.a).withConfig({displayName:"PostCard__TitleLink",componentId:"sc-1ei7i98-5"})(["color:",";&:hover{color:",";}"],function(e){return e.theme.blog.list.item.title.color},function(e){return e.theme.blog.list.item.title.hover.color}),O=s.d.p.withConfig({displayName:"PostCard__Text",componentId:"sc-1ei7i98-6"})(["font-family:",";font-size:",";color:",";margin:",";padding:",";line-height:",";"],function(e){return e.theme.blog.list.item.text.fontFamily},function(e){return e.theme.blog.list.item.text.fontSize},function(e){return e.theme.blog.list.item.text.color},function(e){return e.theme.blog.list.item.text.margin},function(e){return e.theme.blog.list.item.text.padding},function(e){return e.theme.blog.list.item.text.lineHeight}),j=s.d.div.withConfig({displayName:"PostCard__Label",componentId:"sc-1ei7i98-7"})(["position:absolute;right:18px;bottom:18px;"]),q=Object(s.d)(p.a).withConfig({displayName:"PostCard__Image",componentId:"sc-1ei7i98-8"})(["height:100%;"]),C=function(e){var t=e.post,n=e.author,r=e.imageOnTop;return o.a.createElement(y,{imageOnTop:r},o.a.createElement(m.a,null,o.a.createElement(u.a,{to:t.fields.slug},o.a.createElement(q,{sizes:t.frontmatter.image.childImageSharp.sizes}))),o.a.createElement(m.a,null,o.a.createElement(b,{columns:1,rows:"1fr auto"},o.a.createElement(v,null,o.a.createElement(E,null,o.a.createElement(_,{to:t.fields.slug},t.frontmatter.title)),o.a.createElement(O,null,t.excerpt)),o.a.createElement(w,null,o.a.createElement(f.a,{author:n,date:t.frontmatter.date}),o.a.createElement(j,null,o.a.createElement(u.a,{to:t.fields.slug},o.a.createElement("svg",{width:"25",height:"25"},o.a.createElement("path",{d:"M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z",fillRule:"evenodd"}))))))))};C.propTypes={post:i.a.shape({fields:i.a.shape({slug:i.a.string.isRequired,langKey:i.a.string.isRequired}),frontmatter:i.a.shape({title:i.a.string.isRequired,date:i.a.string.isRequired}),excerpt:i.a.string.isRequired}),author:i.a.object.isRequired,imageOnTop:i.a.bool};var x=C,k=function(e){return o.a.createElement("nav",null,o.a.createElement(m.b,{columns:"repeat(auto-fit,minmax(260px,1fr))",gap:"30px",alignContent:"stretch"},e.posts.map(function(t){return o.a.createElement(m.a,{key:t.fields.slug},o.a.createElement(x,Object.assign({post:t},e)))})))};k.propTypes={posts:i.a.array.isRequired,author:i.a.object.isRequired,imageOnTop:i.a.bool};t.a=k},177:function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"b",function(){return h});n(27);var r=n(179),o=n(204),a=n(164),i=Object(r.curry)(function(e,t){return Object(o.isNilOrEmpty)(t)?t:Object(r.keys)(t).reduce(function(n,r){var o=t[r];return"object"==typeof o?n[r]=i(e,t[r]):e(o)&&(n[r]=t[r]),n},{})}),l=i(function(e){return Object(o.isNotNilOrEmpty)(e)&&"..."!==e}),c=function(e){return Object(r.keys)(e).reduce(function(t,n){return t["type"===n?"@type":n]=e[n],t},{})},u=function(e){return e["@context"]="http://schema.org/",e},s=Object(r.pipe)(Object(r.prop)("frontmatter"),Object(r.prop)("date")),m=Object(r.pipe)(Object(r.prop)("frontmatter"),Object(r.prop)("title")),d=Object(r.pipe)(Object(r.prop)("html")),p=Object(r.pipe)(Object(r.prop)("frontmatter"),Object(r.prop)("title")),f=Object(r.pipe)(function(e){return Object(r.assocPath)(["frontmatter","structuredData","datePublished"],s(e),e)},function(e){return Object(r.assocPath)(["frontmatter","structuredData","headline"],m(e),e)},function(e){return Object(r.assocPath)(["frontmatter","structuredData","articleBody"],d(e),e)},function(e){return Object(r.assocPath)(["fields","langKey"],p(e),e)},Object(r.prop)("frontmatter"),Object(r.prop)("structuredData"),c,u,function(e){return e.author?Object.assign({},e,{author:Object(a.getAuthor)(e.author)}):e},l,JSON.stringify),h=Object(r.pipe)(c,u,l,JSON.stringify)},208:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=i(n(0)),a=i(n(155));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return o.default.createElement(a.default,r({viewBox:"0 0 40 40"},e),o.default.createElement("g",null,o.default.createElement("path",{d:"m29.4 0.3v5.9h-3.5q-1.9 0-2.6 0.8t-0.7 2.4v4.2h6.6l-0.9 6.6h-5.7v16.9h-6.8v-16.9h-5.7v-6.6h5.7v-4.9q0-4.1 2.3-6.4t6.2-2.3q3.3 0 5.1 0.3z"})))},e.exports=t.default},209:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=i(n(0)),a=i(n(155));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return o.default.createElement(a.default,r({viewBox:"0 0 40 40"},e),o.default.createElement("g",null,o.default.createElement("path",{d:"m37.7 9.1q-1.5 2.2-3.7 3.7 0.1 0.3 0.1 1 0 2.9-0.9 5.8t-2.6 5.5-4.1 4.7-5.7 3.3-7.2 1.2q-6.1 0-11.1-3.3 0.8 0.1 1.7 0.1 5 0 9-3-2.4-0.1-4.2-1.5t-2.6-3.5q0.8 0.1 1.4 0.1 1 0 1.9-0.3-2.5-0.5-4.1-2.5t-1.7-4.6v0q1.5 0.8 3.3 0.9-1.5-1-2.4-2.6t-0.8-3.4q0-2 0.9-3.7 2.7 3.4 6.6 5.4t8.3 2.2q-0.2-0.9-0.2-1.7 0-3 2.1-5.1t5.1-2.1q3.2 0 5.3 2.3 2.4-0.5 4.6-1.7-0.8 2.5-3.2 3.9 2.1-0.2 4.2-1.1z"})))},e.exports=t.default},210:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=i(n(0)),a=i(n(155));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return o.default.createElement(a.default,r({viewBox:"0 0 40 40"},e),o.default.createElement("g",null,o.default.createElement("path",{d:"m8.3 31.6h5.1v-15.5h-5.1v15.5z m5.5-20.3q0-1.2-0.8-1.9t-2.1-0.8-2.1 0.8-0.8 1.9q0 1.1 0.8 1.9t2 0.8h0.1q1.3 0 2.1-0.8t0.8-1.9z m13 20.3h5.2v-8.9q0-3.5-1.6-5.2t-4.3-1.8q-3.1 0-4.7 2.6h0v-2.2h-5.1q0 1.4 0 15.5h5.1v-8.7q0-0.8 0.2-1.2 0.3-0.8 1-1.4t1.7-0.5q2.5 0 2.5 3.5v8.3z m10.5-22.3v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"})))},e.exports=t.default},365:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=i(n(0)),a=i(n(155));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return o.default.createElement(a.default,r({viewBox:"0 0 40 40"},e),o.default.createElement("g",null,o.default.createElement("path",{d:"m19.8 26.4l2.6-2.6-3.4-3.4-2.6 2.6v1.3h2.2v2.1h1.2z m9.8-16q-0.3-0.4-0.7 0l-7.8 7.8q-0.4 0.4 0 0.7t0.7 0l7.8-7.8q0.4-0.4 0-0.7z m1.8 13.2v4.3q0 2.6-1.9 4.5t-4.5 1.9h-18.6q-2.6 0-4.5-1.9t-1.9-4.5v-18.6q0-2.7 1.9-4.6t4.5-1.8h18.6q1.4 0 2.6 0.5 0.3 0.2 0.4 0.5 0.1 0.4-0.2 0.7l-1.1 1.1q-0.3 0.3-0.7 0.1-0.5-0.1-1-0.1h-18.6q-1.4 0-2.5 1.1t-1 2.5v18.6q0 1.4 1 2.5t2.5 1h18.6q1.5 0 2.5-1t1.1-2.5v-2.9q0-0.2 0.2-0.4l1.4-1.5q0.3-0.3 0.8-0.1t0.4 0.6z m-2.1-16.5l6.4 6.5-15 15h-6.4v-6.5z m9.9 3l-2.1 2-6.4-6.4 2.1-2q0.6-0.7 1.5-0.7t1.5 0.7l3.4 3.4q0.6 0.6 0.6 1.5t-0.6 1.5z"})))},e.exports=t.default},572:function(e,t,n){"use strict";e.exports=n(573)},573:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=l(n(0)),i=l(n(4));function l(e){return e&&e.__esModule?e:{default:e}}var c=["shortname","identifier","title","url","category_id","onNewComment","language"],u=!1;function s(e,t){var n=t.onNewComment,r=t.language,o=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["onNewComment","language"]);for(var a in o)e.page[a]=o[a];e.language=r,n&&(e.callbacks={onNewComment:[n]})}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce(function(t,n){return c.some(function(e){return e===n})?t:r({},t,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e.props[n]))},{});return a.default.createElement("div",t,a.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!u){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),u=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};c.forEach(function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])}),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){s(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){s(this,t)},this.addDisqusScript())}}]),t}();m.displayName="DisqusThread",m.propTypes={id:i.default.string,shortname:i.default.string.isRequired,identifier:i.default.string,title:i.default.string,url:i.default.string,category_id:i.default.string,onNewComment:i.default.func,language:i.default.string},m.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=m},634:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=i(n(0)),a=i(n(155));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return o.default.createElement(a.default,r({viewBox:"0 0 40 40"},e),o.default.createElement("g",null,o.default.createElement("path",{d:"m25.2 20.3q0 3.6-1.6 6.5t-4.3 4.4-6.5 1.6q-2.6 0-5-1t-4.1-2.7-2.7-4.1-1-5 1-5 2.7-4.1 4.1-2.7 5-1q5 0 8.6 3.3l-3.5 3.4q-2-2-5.1-2-2.1 0-4 1.1t-2.8 2.9-1.1 4.1 1.1 4.1 2.8 2.9 4 1.1q1.5 0 2.7-0.4t2-1 1.4-1.4 0.8-1.4 0.4-1.3h-7.3v-4.4h12.1q0.3 1.1 0.3 2.1z m15.1-2.1v3.6h-3.6v3.7h-3.7v-3.7h-3.7v-3.6h3.7v-3.7h3.7v3.7h3.6z"})))},e.exports=t.default}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-53e3cac0b3e95fd27959.js.map