(this["webpackJsonppt-store"]=this["webpackJsonppt-store"]||[]).push([[5],{169:function(t,e,n){},170:function(t,e,n){},171:function(t,e,n){},172:function(t,e,n){},290:function(t,e,n){"use strict";n.r(e);var r=n(55),c=n.n(r),a=n(56),o=n(13),i=n(14),s=n(16),u=n(15),p=n(0),l=n.n(p),h=n(28),d=n(57),f=n(27),j=n(4),b=(n(76),n(169),n(5)),m=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).handleGoToAddress=function(e){t.props.history.push("/address")},t.handleGoToInformation=function(e){t.props.history.push("/information")},t.handleGoToSearch=function(e){t.props.history.push("/search")},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"homeHead",children:[Object(b.jsxs)("div",{className:"homeHead-left",children:[Object(b.jsx)("span",{className:"iconfont icon-dizhi",onClick:this.handleGoToAddress}),Object(b.jsx)("select",{name:"",id:"",children:Object(b.jsx)("option",{value:"",children:"\u4e0a\u6d77\u975c\u5b89"})})]}),Object(b.jsxs)("div",{className:"homeHead-center ",children:[Object(b.jsx)("span",{className:"iconfont icon-sousuo"}),Object(b.jsx)("input",{type:"text",className:"search",placeholder:"\u627e\u6700\u597d\u770b\u7684\u8863\u670d",onClick:this.handleGoToSearch})]}),Object(b.jsx)("div",{className:"homeHead-right",children:Object(b.jsx)("span",{className:"iconfont icon-lanlvtubiaozhizuomoban-14",onClick:this.handleGoToInformation})})]})}}]),n}(p.Component),O=Object(j.o)(m),g=(n(170),function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).handleGoToDetail=function(e){t.props.history.push("/"+e.navigator_url)},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(b.jsx)("div",{className:"ptMedi",children:this.props.centerData.map((function(e){return Object(b.jsxs)("div",{className:"ptMedishow",children:[Object(b.jsx)("img",{src:e.image_src,onClick:t.handleGoToDetail.bind(t,e),alt:""}),Object(b.jsx)("span",{children:e.title})]},e.image_src)}))})}}]),n}(l.a.Component)),v=Object(j.o)(g),y=(n(171),function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).handleGoToProduct=function(e){t.props.history.push("/productdetails")},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(b.jsxs)("div",{className:"purchase",children:[Object(b.jsx)("div",{className:"purchase-top",children:Object(b.jsx)("img",{src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F32156082.jpeg&refer=http%3A%2F%2Fwww.17qq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617940039&t=2e0c66b4351c502ea926361af3f8483f",alt:""})}),Object(b.jsx)("div",{className:"purchase-main",children:this.props.purchaseData.map((function(e,n){return Object(b.jsxs)("div",{className:"purchase-items",children:[Object(b.jsx)("img",{src:e.image_src,alt:"",onClick:t.handleGoToProduct}),Object(b.jsx)("p",{children:e.title}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:e.newprice})," ",Object(b.jsx)("span",{className:"oldp",children:e.oldprice})]})]},n)}))})]})}}]),n}(p.Component)),x=Object(j.o)(y),w=n(98),k=(n(172),n(71)),N=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=Object(a.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:h.a.dispatch(Object(d.a)()),h.a.dispatch(Object(d.d)()),h.a.dispatch(Object(d.b)());case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"HomeCenter",children:[Object(b.jsxs)("div",{className:"HomeCenter-top",children:[Object(b.jsx)("span",{children:"\u6025\u901f\u9001\u9054"}),Object(b.jsx)("span",{children:"100%\u68c0\u6d4b"}),Object(b.jsx)("span",{children:"\u4ea7\u5730\u76f4\u9500"})]}),Object(b.jsx)("div",{className:"HomeCenter-center",children:Object(b.jsx)("img",{src:"https://ThorUI.cn/images/mall/activity/img_coupon_banner.png",alt:""})}),Object(b.jsx)(v,{centerData:this.props.centerData}),Object(b.jsx)(x,{purchaseData:this.props.purchaseData}),Object(b.jsx)(w.a,{groupShopData:this.props.groupShopData}),Object(b.jsx)(k.a,{})]})}}]),n}(p.Component),D=Object(f.b)((function(t){return{centerData:t.homeCenterReducer.centerData,purchaseData:t.homeCenterReducer.purchaseData,groupShopData:t.homeCenterReducer.groupShopData}}),null)(N),C=n(62),G=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={imgHeight:180},t.handleGoToDetail=function(e){t.props.history.push("/goodDetail/"+e.goods_id)},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(b.jsx)(C.b,{autoplay:!0,infinite:!0,children:this.props.swiperData.map((function(e){return Object(b.jsx)("div",{onClick:t.handleGoToDetail.bind(t,e),style:{display:"inline-block",width:"100%",height:t.state.imgHeight},children:Object(b.jsx)("img",{src:e.image_src,alt:"",style:{width:"100%",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),t.setState({imgHeight:"auto"})}})},e.image_src)}))})}}]),n}(l.a.Component),S=Object(j.o)(G),T=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=Object(a.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:h.a.dispatch(Object(d.f)());case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"ptHome",children:[Object(b.jsx)(O,{}),Object(b.jsx)(S,{swiperData:this.props.swiperData}),Object(b.jsx)(D,{})]})}}]),n}(p.Component);e.default=Object(f.b)((function(t){return{swiperData:t.homeReducer.swiperData}}),null)(T)},54:function(t,e,n){"use strict";n.d(e,"g",(function(){return o})),n.d(e,"h",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return u})),n.d(e,"c",(function(){return p})),n.d(e,"k",(function(){return l})),n.d(e,"b",(function(){return h})),n.d(e,"i",(function(){return d})),n.d(e,"e",(function(){return f})),n.d(e,"f",(function(){return j})),n.d(e,"j",(function(){return b})),n.d(e,"l",(function(){return m})),n.d(e,"m",(function(){return O})),n.d(e,"n",(function(){return g})),n.d(e,"p",(function(){return v})),n.d(e,"o",(function(){return y}));var r=n(61),c=n.n(r).a.create({baseURL:"http://rap2api.taobao.org/app/mock/278826/"});c.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),c.interceptors.response.use((function(t){return t.data}),(function(t){return Promise.reject(t)}));var a=c,o=function(){return a.get("/Category/getList").catch((function(t){console.log(t)}))},i=function(){return a.get("/Category/getNav").catch((function(t){console.log(t)}))},s=function(){return a.get("/Category/getGoodsData").catch((function(t){console.log(t)}))},u=function(t){return a({url:"cart/getCartMsg",method:"GET",params:t})};function p(t){return a({url:"cart/getCouponsMsg",method:"GET",params:t})}var l=function(){return a.get("home/swiperdata").catch((function(t){console.log(t)}))},h=function(){return a.get("home/centerdata").catch((function(t){console.log(t)}))},d=function(){return a.get("home/purchase").catch((function(t){console.log(t)}))},f=function(){return a.get("home/packcluster").catch((function(t){console.log(t)}))},j=function(){return a.get("home/informationdata").catch((function(t){console.log(t)}))},b=function(){return a.get("home/search").catch((function(t){console.log(t)}))},m=function(){return a.get("My/getbalance").catch((function(t){return console.log(t)}))},O=function(){return a.get("My/geticon").catch((function(t){return console.log(t)}))},g=function(){return a.get("My/getsecondicon").catch((function(t){return console.log(t)}))},v=function(){return a.get("My/getuser").catch((function(t){return console.log(t)}))},y=function(){return a.get("Myorder/getorder").catch((function(t){return console.log(t)}))}},57:function(t,e,n){"use strict";n.d(e,"f",(function(){return s})),n.d(e,"a",(function(){return u})),n.d(e,"d",(function(){return p})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return h})),n.d(e,"e",(function(){return d}));var r=n(55),c=n.n(r),a=n(56),o=n(1),i=n(54),s=(o.q,function(t){return function(){var t=Object(a.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.k)();case 2:n=t.sent,e({type:o.w,payload:{swiperData:n.data}});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}),u=function(t){return function(){var t=Object(a.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.b)();case 2:n=t.sent,e({type:o.r,payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(t){return function(){var t=Object(a.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.i)();case 2:n=t.sent,e({type:o.u,payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},l=function(t){return function(){var t=Object(a.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.e)();case 2:n=t.sent,e({type:o.s,payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(t){return function(){var t=Object(a.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.f)();case 2:n=t.sent,e({type:o.t,payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(t){return function(){var t=Object(a.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.j)();case 2:n=t.sent,e({type:o.v,payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},58:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,c=!1,a=void 0;try{for(var o,i=t[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(s){c=!0,a=s}finally{try{r||null==i.return||i.return()}finally{if(c)throw a}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return c}))},66:function(t,e,n){},67:function(t,e,n){},71:function(t,e,n){"use strict";var r=n(58),c=(n(66),[{id:1,name:"\u9996\u9875",icon:"icon-shouye",path:"/"},{id:2,name:"\u5546\u57ce",icon:"icon-leimupinleifenleileibie2",path:"/category"},{id:3,name:"\u76f4\u64ad",icon:"icon-zhibojianying",path:"/liveshow"},{id:4,name:"\u8d2d\u7269\u8f66",icon:"icon-03f",path:"/cart"},{id:5,name:"\u6211\u7684",icon:"icon-wodedangxuan",path:"/my"}]),a=(n(67),n(0)),o=n(4),i=n(5);e.a=function(){var t=Object(o.k)(),e=Object(a.useState)(""),n=Object(r.a)(e,2),s=n[0],u=n[1],p=Object(a.useState)(t.location.pathname),l=Object(r.a)(p,2),h=l[0],d=l[1];return Object(a.useEffect)((function(){u(c.map((function(e){var n=e.path===h?" tabbar-active":"";return Object(i.jsxs)("div",{className:"tabbar-item"+n,onClick:function(){t.push(e.path),d(t.location.pathname)},children:[Object(i.jsx)("span",{className:"iconfont "+e.icon}),Object(i.jsx)("span",{children:e.name})]},e.id)})))}),[]),Object(i.jsx)("div",{className:"tabbar",children:s})}},76:function(t,e,n){},98:function(t,e,n){"use strict";var r=n(13),c=n(14),a=n(16),o=n(15),i=n(0),s=n(4),u=(n(99),n(5)),p=function(t){Object(a.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).handleGoToShopping=function(e){t.props.history.push("/groupshopping")},t.handleGoToGroup=function(e){t.props.history.push("/detailsGroup")},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this;return Object(u.jsxs)("div",{className:"groupShop",children:[Object(u.jsx)("div",{className:"groupShop-top",children:Object(u.jsx)("img",{onClick:this.handleGoToShopping,src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp9.itc.cn%2Fq_70%2Fimages03%2F20210210%2Feb9eea96dd4f4cdd9e470acae0c99907.png&refer=http%3A%2F%2Fp9.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617948022&t=d643c3ca0f569266a50216b34d8ed44d",alt:""})}),Object(u.jsx)("div",{className:"groupShop-main",children:this.props.groupShopData.map((function(e,n){return Object(u.jsxs)("dl",{className:"groupShop-items",children:[Object(u.jsx)("dt",{children:Object(u.jsx)("img",{src:e.image_src,alt:""})}),Object(u.jsxs)("dd",{children:[Object(u.jsx)("p",{children:e.title}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("span",{className:"nums",children:[e.num,"\u4eba\u56e2"]}),Object(u.jsx)("span",{children:e.newprice}),Object(u.jsx)("span",{className:"oldp",children:e.oldprice}),Object(u.jsx)("p",{className:"LJPT",onClick:t.handleGoToGroup,children:"\u7acb\u5373\u62fc\u56e2"})]})]})]},n)}))})]})}}]),n}(i.Component);e.a=Object(s.o)(p)},99:function(t,e,n){}}]);
//# sourceMappingURL=5.5a2627cd.chunk.js.map