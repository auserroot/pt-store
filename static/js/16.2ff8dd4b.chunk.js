(this["webpackJsonppt-store"]=this["webpackJsonppt-store"]||[]).push([[16],{247:function(t,n,e){},273:function(t,n,e){"use strict";e.r(n);var r=e(55),c=e.n(r),o=e(56),u=e(13),a=e(14),i=e(16),s=e(15),f=e(0),l=e(28),p=e(79),d=e(57),h=e(27),m=(e(76),e(247),e(5)),g=function(t){Object(i.a)(e,t);var n=Object(s.a)(e);function e(){return Object(u.a)(this,e),n.apply(this,arguments)}return Object(a.a)(e,[{key:"componentDidMount",value:function(){var t=Object(o.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l.a.dispatch(Object(d.c)());case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return console.log(this.props.informationsdata),Object(m.jsxs)("div",{className:"information",children:[Object(m.jsx)(p.a,{title:"\u6d88\u606f\u4e2d\u5fc3",back:!0,AD:!1}),Object(m.jsx)("div",{className:"information-main",children:this.props.informationsdata.map((function(t,n){return Object(m.jsxs)("div",{className:"information-items",children:[Object(m.jsx)("div",{children:Object(m.jsx)("span",{className:"iconfont icon-xinxitongzhi"})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{className:"types",children:t.type}),Object(m.jsx)("p",{className:"titles",children:t.title})]}),Object(m.jsx)("div",{children:Object(m.jsx)("span",{children:t.time})})]},n)}))})]})}}]),e}(f.Component);n.default=Object(h.b)((function(t){return{informationsdata:t.homeHeaderReducer.informationsData}}),null)(g)},54:function(t,n,e){"use strict";e.d(n,"g",(function(){return u})),e.d(n,"h",(function(){return a})),e.d(n,"d",(function(){return i})),e.d(n,"a",(function(){return s})),e.d(n,"c",(function(){return f})),e.d(n,"k",(function(){return l})),e.d(n,"b",(function(){return p})),e.d(n,"i",(function(){return d})),e.d(n,"e",(function(){return h})),e.d(n,"f",(function(){return m})),e.d(n,"j",(function(){return g})),e.d(n,"l",(function(){return j})),e.d(n,"m",(function(){return v})),e.d(n,"n",(function(){return b})),e.d(n,"p",(function(){return y})),e.d(n,"o",(function(){return O}));var r=e(61),c=e.n(r).a.create({baseURL:"http://rap2api.taobao.org/app/mock/278826/"});c.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),c.interceptors.response.use((function(t){return t.data}),(function(t){return Promise.reject(t)}));var o=c,u=function(){return o.get("/Category/getList").catch((function(t){console.log(t)}))},a=function(){return o.get("/Category/getNav").catch((function(t){console.log(t)}))},i=function(){return o.get("/Category/getGoodsData").catch((function(t){console.log(t)}))},s=function(t){return o({url:"cart/getCartMsg",method:"GET",params:t})};function f(t){return o({url:"cart/getCouponsMsg",method:"GET",params:t})}var l=function(){return o.get("home/swiperdata").catch((function(t){console.log(t)}))},p=function(){return o.get("home/centerdata").catch((function(t){console.log(t)}))},d=function(){return o.get("home/purchase").catch((function(t){console.log(t)}))},h=function(){return o.get("home/packcluster").catch((function(t){console.log(t)}))},m=function(){return o.get("home/informationdata").catch((function(t){console.log(t)}))},g=function(){return o.get("home/search").catch((function(t){console.log(t)}))},j=function(){return o.get("My/getbalance").catch((function(t){return console.log(t)}))},v=function(){return o.get("My/geticon").catch((function(t){return console.log(t)}))},b=function(){return o.get("My/getsecondicon").catch((function(t){return console.log(t)}))},y=function(){return o.get("My/getuser").catch((function(t){return console.log(t)}))},O=function(){return o.get("Myorder/getorder").catch((function(t){return console.log(t)}))}},57:function(t,n,e){"use strict";e.d(n,"f",(function(){return i})),e.d(n,"a",(function(){return s})),e.d(n,"d",(function(){return f})),e.d(n,"b",(function(){return l})),e.d(n,"c",(function(){return p})),e.d(n,"e",(function(){return d}));var r=e(55),c=e.n(r),o=e(56),u=e(1),a=e(54),i=(u.q,function(t){return function(){var t=Object(o.a)(c.a.mark((function t(n){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(a.k)();case 2:e=t.sent,n({type:u.w,payload:{swiperData:e.data}});case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}),s=function(t){return function(){var t=Object(o.a)(c.a.mark((function t(n){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(a.b)();case 2:e=t.sent,n({type:u.r,payload:e.data});case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},f=function(t){return function(){var t=Object(o.a)(c.a.mark((function t(n){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(a.i)();case 2:e=t.sent,n({type:u.u,payload:e.data});case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},l=function(t){return function(){var t=Object(o.a)(c.a.mark((function t(n){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(a.e)();case 2:e=t.sent,n({type:u.s,payload:e.data});case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},p=function(t){return function(){var t=Object(o.a)(c.a.mark((function t(n){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(a.f)();case 2:e=t.sent,n({type:u.t,payload:e.data});case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},d=function(t){return function(){var t=Object(o.a)(c.a.mark((function t(n){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(a.j)();case 2:e=t.sent,n({type:u.v,payload:e.data});case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}},65:function(t,n){var e,r,c=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function a(t){if(e===setTimeout)return setTimeout(t,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"===typeof setTimeout?setTimeout:o}catch(t){e=o}try{r="function"===typeof clearTimeout?clearTimeout:u}catch(t){r=u}}();var i,s=[],f=!1,l=-1;function p(){f&&i&&(f=!1,i.length?s=i.concat(s):l=-1,s.length&&d())}function d(){if(!f){var t=a(p);f=!0;for(var n=s.length;n;){for(i=s,s=[];++l<n;)i&&i[l].run();l=-1,n=s.length}i=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(n){try{return r.call(null,t)}catch(n){return r.call(this,t)}}}(t)}}function h(t,n){this.fun=t,this.array=n}function m(){}c.nextTick=function(t){var n=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)n[e-1]=arguments[e];s.push(new h(t,n)),1!==s.length||f||a(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=m,c.addListener=m,c.once=m,c.off=m,c.removeListener=m,c.removeAllListeners=m,c.emit=m,c.prependListener=m,c.prependOnceListener=m,c.listeners=function(t){return[]},c.binding=function(t){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(t){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},76:function(t,n,e){},79:function(t,n,e){"use strict";var r=e(13),c=e(14),o=e(16),u=e(15),a=e(0),i=e.n(a),s=e(4),f=e(5),l=function(t){Object(o.a)(e,t);var n=Object(u.a)(e);function e(){var t;Object(r.a)(this,e);for(var c=arguments.length,o=new Array(c),u=0;u<c;u++)o[u]=arguments[u];return(t=n.call.apply(n,[this].concat(o))).handleGoBack=function(n){t.props.history.go(-1)},t}return Object(c.a)(e,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"ptHeader",children:[Object(f.jsx)("div",{className:"ptHeaderLeft",onClick:this.handleGoBack,children:this.props.back?"<":""}),Object(f.jsx)("div",{className:"ptHeaderMid",children:this.props.title}),Object(f.jsxs)("div",{className:"ptHeaderRight",children:[" ",this.props.AD?"\u6dfb\u52a0\u5730\u5740":""]})]})}}]),e}(i.a.PureComponent);n.a=Object(s.o)(l)}}]);
//# sourceMappingURL=16.2ff8dd4b.chunk.js.map