(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),l=(n(12),n(1)),s=n(2),i=n(4),h=n(3),d=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"screen"},this.props.display)}}]),n}(a.Component),u=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("p",{onClick:function(){return e.props.handlePrint(e.props.button)},className:"button"},"/"===this.props.button?r.a.createElement("span",null,"\xf7"):"*"===this.props.button?r.a.createElement("span",null,"\xd7"):this.props.button)}}]),n}(a.Component),p=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={advanceClass:"advance",advanceBodyClass:"advance-body",n:0},e.handleAdvance=function(){var t="advance"!==e.state.advanceClass;e.setState({advanceClass:t?"advance":"advance advance-open",advanceBodyClass:t?"advance-body":"advance-body advance-body-open"})},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"calc-body"},r.a.createElement("div",{className:"number"},r.a.createElement(u,{handlePrint:this.props.handlePrint,button:"7"}),r.a.createElement(u,{handlePrint:this.props.handlePrint,button:"8"}),r.a.createElement(u,{handlePrint:this.props.handlePrint,button:"9"}),r.a.createElement(u,{handlePrint:this.props.handlePrint,button:"4"}),r.a.createElement(u,{handlePrint:this.props.handlePrint,button:"5"}),r.a.createElement(u,{handlePrint:this.props.handlePrint,button:"6"}),r.a.createElement(u,{handlePrint:this.props.handlePrint,button:"1"}),r.a.createElement(u,{handlePrint:this.props.handlePrint,button:"2"}),r.a.createElement(u,{handlePrint:this.props.handlePrint,button:"3"}),r.a.createElement(u,{handlePrint:this.props.handlePrint,button:"0"}),r.a.createElement(u,{handlePrint:this.props.handlePrint,button:"."}),r.a.createElement(u,{button:"="})),r.a.createElement("div",{className:"operation"},r.a.createElement(u,{button:"AC"}),r.a.createElement(u,{button:"/"}),r.a.createElement(u,{button:"*"}),r.a.createElement(u,{button:"-"}),r.a.createElement(u,{button:"+"})),r.a.createElement("div",{onClick:this.handleAdvance,className:this.state.advanceClass},r.a.createElement("p",null,"\u2039")),r.a.createElement("div",{className:this.state.advanceBodyClass},"asaasas"))}}]),n}(a.Component),m=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={height:window.innerHeight,n:0},e.handlePrint=function(t){e.setState({n:t})},e}return Object(s.a)(n,[{key:"render",value:function(){return console.log(this.state.height),r.a.createElement("div",{style:{height:this.state.height},className:"app"},r.a.createElement(d,{display:this.state.n}),r.a.createElement(p,{handlePrint:this.handlePrint}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.a06d688b.chunk.js.map