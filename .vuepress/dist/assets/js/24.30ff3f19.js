(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{282:function(t,e,r){},295:function(t,e,r){"use strict";r(282)},307:function(t,e,r){"use strict";r.r(e);var n={name:"Footer",data:()=>({footerList:[],government:{},currentYear:""}),props:["sidebarItems"],mounted(){this.footerList=this.$site.themeConfig.footer.friendLinks,this.government=this.$site.themeConfig.footer.copyright,this.currentYear=(new Date).getFullYear()}},s=(r(295),r(4)),i=Object(s.a)(n,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"footer"},[t._l(t.footerList,(function(r,n){return e("div",{key:n,staticClass:"footer-item"},[e("a",{attrs:{href:r.href,target:"_blank",rel:"noopener noreferrer"}},[r.icon?e("img",{staticClass:"item-icon",attrs:{src:r.icon,alt:"icon"}}):t._e(),t._v(" "),e("span",{staticClass:"item-text"},[t._v(t._s(r.label))])])])})),t._v(" "),e("div",{staticClass:"copy-right"},[e("span",{staticClass:"name"},[t._v(t._s(t.currentYear+" 梅院指南 by H  ")+" ")]),t._v(" "),e("a",{attrs:{href:t.government.href,target:"_blank",rel:"noreferrer"}},[t._v("\n          "+t._s(t.government.name)+"\n        ")])])],2)}),[],!1,null,null,null);e.default=i.exports}}]);