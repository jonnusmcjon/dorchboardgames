(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(12),i=n.n(a),s=(n(22),n(13)),o=n(14),u=n(17),h=n(16),l=(n(23),n(15)),p=n.n(l),d=n(1),j=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={response:{}},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/api/v1/say-something").then((function(t){var n=t.data;e.setState({response:n})}))}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Here is our new feature!"}),Object(d.jsx)("h1",{children:this.state.response.body})]})}}]),n}(c.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root")),b()}},[[43,1,2]]]);
//# sourceMappingURL=main.0a738112.chunk.js.map