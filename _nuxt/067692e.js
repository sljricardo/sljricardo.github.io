(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{234:function(t,e,r){"use strict";r.r(e);var n=r(21),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"desktop-header-3 fixed-bottom py-2",staticStyle:{background:"orange"}},[e("div",{staticClass:"container"},[e("nav",{staticClass:"navbar navbar-expand navbar-dark"},[e("a",{staticClass:"navbar-brand"}),this._v(" "),this._m(0),this._v(" "),e("div",{staticClass:"collapse navbar-collapse justify-content-center",attrs:{id:"navbarNavDropdown"}},[e("ul",{staticClass:"navbar-nav d-flex justify-content-center"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"/"}},[e("svg",{staticClass:"bi bi-house-fill mb-1 mr-1",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"}}),this._v(" "),e("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"}})]),this._v("\n                        Home")])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{"aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation","data-target":"#navbarNavDropdown","data-toggle":"collapse",type:"button"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(234).default})},273:function(t,e,r){"use strict";r.r(e);r(236),r(22);var n=r(2),l={data:function(){return{articleId:this.$router.currentRoute.params.id,nextArticle:{title:"",link:""},prevArticle:{title:"",link:""}}},methods:{getPreviousArticle:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=t.articleId){e.next=3;break}return t.prevArticle.title="",e.abrupt("return");case 3:return r=parseInt(t.articleId)-1,e.next=6,t.$firebase.get("/site/blog/articles/".concat(r));case 6:if(null!==(article=e.sent).val()){e.next=10;break}return t.prevArticle.title="",e.abrupt("return");case 10:t.prevArticle.title=article.val().title,t.prevArticle.link="/article/"+(parseInt(t.articleId)-1);case 12:case"end":return e.stop()}}),e)})))()},getNextArticle:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=parseInt(t.articleId)+1,e.next=3,t.$firebase.get("/site/blog/articles/".concat(r));case 3:if(null!==(article=e.sent).val()){e.next=7;break}return t.nextArticle.title="",e.abrupt("return");case 7:t.nextArticle.title=article.val().title,t.nextArticle.link="/article/"+(parseInt(t.articleId)+1);case 9:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getPreviousArticle(),this.getNextArticle()}},c=r(21),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex justify-content-between mb-5 mt-4"},[r("NuxtLink",{directives:[{name:"show",rawName:"v-show",value:t.prevArticle.title,expression:"prevArticle.title"}],attrs:{to:t.prevArticle.link}},[r("svg",{staticClass:"bi bi-arrow-left",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"}})]),t._v("\n        "+t._s(t.prevArticle.title)+"\n    ")]),t._v(" "),r("NuxtLink",{directives:[{name:"show",rawName:"v-show",value:t.nextArticle.title,expression:"nextArticle.title"}],attrs:{to:t.nextArticle.link}},[t._v("\n        "+t._s(t.nextArticle.title)+"\n        "),r("svg",{staticClass:"bi bi-arrow-right",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"}})])])],1)}),[],!1,null,null,null);e.default=component.exports},279:function(t,e,r){"use strict";r.r(e);r(22);var n=r(2),l=(r(235),{data:function(){return{article:{content:"",title:"",img:""}}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,content;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$router.currentRoute.params.id,e.next=3,t.$firebase.get("/site/blog/articles/".concat(r));case 3:content=e.sent,t.article=content.val();case 5:case"end":return e.stop()}}),e)})))()}}),c=r(21),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"pb-5"},[r("Header"),t._v(" "),r("div",{staticClass:"container px-4"},[r("h2",{staticClass:"section-title wow fadeInUp mb-4"},[t._v(t._s(t.article.title))]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("img",{staticClass:"shadow-sm",attrs:{src:t.article.img,alt:"main"}})]),t._v(" "),r("div",{domProps:{innerHTML:t._s(t.article.content)}})]),t._v(" "),r("FooterNavigation")],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(234).default,FooterNavigation:r(273).default})}}]);