(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{154:function(t,n,e){"use strict";e.r(n),e.d(n,"pageQuery",function(){return a});var o=e(0),r=e.n(o),u=e(271);n.default=function(t){return r.a.createElement(u.a,t)};var a="4165824166"},172:function(t,n,e){"use strict";var o=e(162),r=e(159).d.a.withConfig({displayName:"A",componentId:"g1ipn4-0"})(["color:",";text-decoration:",";cursor:pointer;transition:0.3s;&:hover{color:",";transition:0.3s;}"],function(t){return t.theme.a.color},function(t){return t.theme.a.textDecoration},function(t){return t.theme.a.hover.color});n.a=r.withComponent(o.Link)},197:function(t,n,e){var o=e(279).Symbol;t.exports=o},219:function(t,n,e){var o=e(278);t.exports=function(t){return null==t?"":o(t)}},271:function(t,n,e){"use strict";var o=e(0),r=e.n(o),u=e(4),a=e.n(u),i=e(172),c=e(272),f=e.n(c),d=e(159),l=e(163),s=e(178),p=e.n(s),x=e(177),m=d.d.section.withConfig({displayName:"Tags__Wrapper",componentId:"sc-12d2sa0-0"})(["margin:",";padding:",";"],function(t){return t.theme.page.margin},function(t){return t.theme.page.padding}),g=d.d.nav.withConfig({displayName:"Tags__Nav",componentId:"sc-12d2sa0-1"})(["margin-top:",";margin-bottom:",";column-count:2;@media (min-width:450px){column-count:3;}@media (min-width:650px){column-count:4;}"],function(t){return t.theme.scale(-1)},function(t){return t.theme.scale(6)}),b=d.d.li.withConfig({displayName:"Tags__Li",componentId:"sc-12d2sa0-2"})(["font-size:",";padding:"," 0;"],function(t){return t.theme.scale(1)},function(t){return t.theme.scale(-1)}),h=d.d.header.withConfig({displayName:"Tags__Header",componentId:"sc-12d2sa0-3"})(["font-family:",";border-bottom:1px solid rgba(0,0,0,0.125);margin:",";"],function(t){return t.theme.page.header.fontFamily},function(t){return t.theme.page.header.margin}),v=d.d.h1.withConfig({displayName:"Tags__H1",componentId:"sc-12d2sa0-4"})(["font-size:",";padding:0;span{border-bottom:1px solid rgba(0,0,0,0.44);display:inline-block;padding-bottom:",";margin-bottom:-1px;}"],function(t){return t.theme.page.header.fontSize},function(t){return t.theme.scale(3.5)}),y=function(t){var n=t.data.allMarkdownRemark.group;return r.a.createElement(x.a,{location:t.location},r.a.createElement(m,null,r.a.createElement(l.b,{id:"tags"},function(t){return r.a.createElement(h,null,r.a.createElement(p.a,{title:t,meta:[{name:"description",content:t}]}),r.a.createElement(v,null,r.a.createElement("span",null,t)))}),r.a.createElement(g,null,r.a.createElement("ul",null,n.map(function(n){return r.a.createElement(b,{key:n.fieldValue},r.a.createElement(i.a,{style:{textDecoration:"none"},to:t.pageContext.langKey+"/tags/"+f()(n.fieldValue)+"/"},n.fieldValue," (",n.totalCount,")"))})))))};y.propTypes={data:a.a.object,pageContext:a.a.object,location:a.a.object.isRequired},n.a=y},272:function(t,n,e){var o=e(273)(function(t,n,e){return t+(e?"-":"")+n.toLowerCase()});t.exports=o},273:function(t,n,e){var o=e(274),r=e(275),u=e(288),a=RegExp("['’]","g");t.exports=function(t){return function(n){return o(u(r(n).replace(a,"")),t,"")}}},274:function(t,n){t.exports=function(t,n,e,o){var r=-1,u=null==t?0:t.length;for(o&&u&&(e=t[++r]);++r<u;)e=n(e,t[r],r,t);return e}},275:function(t,n,e){var o=e(276),r=e(219),u=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=r(t))&&t.replace(u,o).replace(a,"")}},276:function(t,n,e){var o=e(277)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});t.exports=o},277:function(t,n){t.exports=function(t){return function(n){return null==t?void 0:t[n]}}},278:function(t,n,e){var o=e(197),r=e(281),u=e(282),a=e(283),i=1/0,c=o?o.prototype:void 0,f=c?c.toString:void 0;t.exports=function t(n){if("string"==typeof n)return n;if(u(n))return r(n,t)+"";if(a(n))return f?f.call(n):"";var e=n+"";return"0"==e&&1/n==-i?"-0":e}},279:function(t,n,e){var o=e(280),r="object"==typeof self&&self&&self.Object===Object&&self,u=o||r||Function("return this")();t.exports=u},280:function(t,n,e){(function(n){var e="object"==typeof n&&n&&n.Object===Object&&n;t.exports=e}).call(this,e(73))},281:function(t,n){t.exports=function(t,n){for(var e=-1,o=null==t?0:t.length,r=Array(o);++e<o;)r[e]=n(t[e],e,t);return r}},282:function(t,n){var e=Array.isArray;t.exports=e},283:function(t,n,e){var o=e(284),r=e(287),u="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||r(t)&&o(t)==u}},284:function(t,n,e){var o=e(197),r=e(285),u=e(286),a="[object Null]",i="[object Undefined]",c=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?i:a:c&&c in Object(t)?r(t):u(t)}},285:function(t,n,e){var o=e(197),r=Object.prototype,u=r.hasOwnProperty,a=r.toString,i=o?o.toStringTag:void 0;t.exports=function(t){var n=u.call(t,i),e=t[i];try{t[i]=void 0;var o=!0}catch(c){}var r=a.call(t);return o&&(n?t[i]=e:delete t[i]),r}},286:function(t,n){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},287:function(t,n){t.exports=function(t){return null!=t&&"object"==typeof t}},288:function(t,n,e){var o=e(289),r=e(290),u=e(219),a=e(291);t.exports=function(t,n,e){return t=u(t),void 0===(n=e?void 0:n)?r(t)?a(t):o(t):t.match(n)||[]}},289:function(t,n){var e=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(e)||[]}},290:function(t,n){var e=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return e.test(t)}},291:function(t,n){var e="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+e+"]",r="\\d+",u="[\\u2700-\\u27bf]",a="[a-z\\xdf-\\xf6\\xf8-\\xff]",i="[^\\ud800-\\udfff"+e+r+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",d="[A-Z\\xc0-\\xd6\\xd8-\\xde]",l="(?:"+a+"|"+i+")",s="(?:"+d+"|"+i+")",p="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",x="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",c,f].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),m="(?:"+[u,c,f].join("|")+")"+x,g=RegExp([d+"?"+a+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[o,d,"$"].join("|")+")",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[o,d+l,"$"].join("|")+")",d+"?"+l+"+(?:['’](?:d|ll|m|re|s|t|ve))?",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",r,m].join("|"),"g");t.exports=function(t){return t.match(g)||[]}}}]);
//# sourceMappingURL=component---src-pages-tags-index-en-js-6a50cddc65097817863b.js.map