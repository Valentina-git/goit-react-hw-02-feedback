(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{22:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(0),r=n(8),o=n.n(r),s=(n(22),n(9)),i=n(10),b=n(11),u=n(16),d=n(15),l=n(2),p=n(3);function j(){var t=Object(l.a)(["\n  .feedback-btn {\n    font-weight: 700;\n    padding: 7px 15px;\n    border: 1px solid navy;\n    border-radius: 5px;\n    background-color: lightblue;\n    box-shadow: 1px 1px 7px 0px rgba(140, 140, 140, 0.75);\n  }\n  .feedback-btn:hover,\n  .feedback-btn:focus {\n    background-color: yellow;\n  }\n  .feedback-btn:not(:last-child) {\n    margin-right: 15px;\n  }\n"]);return j=function(){return t},t}var x=p.a.div(j()),f=function(t){var e=t.options,n=t.onLeaveFeedback;return Object(a.jsx)(x,{children:Object.keys(e).map((function(t){return Object(a.jsx)("button",{className:"feedback-btn",onClick:n,type:"button",name:t,children:t[0].toUpperCase()+t.slice(1)},t)}))})};function h(){var t=Object(l.a)(["\n  padding: 30px 10px;\n  margin: 0 auto;\n  width: 350px;\n  .section-title {\n    font-size: 30px;\n    margin-bottom: 20px;\n  }\n"]);return h=function(){return t},t}var v=p.a.div(h()),g=function(t){var e=t.title,n=t.children;return Object(a.jsxs)(v,{children:[Object(a.jsx)("h2",{className:"section-title",children:e}),n]})};function O(){var t=Object(l.a)(["\n  .stat {\n    font-weight: 500;\n  }\n  .stat:not(:last-child) {\n    margin-bottom: 10px;\n  }\n  .statNumber {\n    font-weight: 700;\n  }\n"]);return O=function(){return t},t}var m=p.a.div(O()),k=function(t){var e=t.props,n=t.total,c=t.positivePercentage;return Object(a.jsxs)(m,{children:[Object.keys(e).map((function(t){return Object(a.jsxs)("p",{className:"stat",children:[t[0].toUpperCase()+t.slice(1)," :",Object(a.jsx)("span",{className:"statNumber",children:e[t]})]},t)})),Object(a.jsxs)("p",{className:"stat",children:["Total: ",n()]}),Object(a.jsxs)("p",{className:"stat",children:["Positive feedback: ",c(),"%"]})]})},w=function(t){var e=t.message;return Object(a.jsx)("p",{children:e})};function y(){var t=Object(l.a)(["\n  padding: 20px;\n  border: 1px solid navy;\n  border-radius: 10px;\n  width: max-content;\n  margin: 0 auto;\n  background-color: #efefef;\n  box-shadow: 7px 5px 7px 5px rgba(140, 140, 140, 0.75);\n"]);return y=function(){return t},t}var N=p.a.div(y()),F=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={good:0,bad:0,neutral:0},t.handleIncreament=function(e){var n=e.target.name;t.setState((function(t){return Object(s.a)({},n,t[n]+1)}))},t.countTotalFeedback=function(){return t.state.good+t.state.bad+t.state.neutral},t.countPositiveFeedbackPercentage=function(){return t.state.good/t.countTotalFeedback()*100},t}return Object(b.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(N,{children:[Object(a.jsx)(g,{title:"Please leave feedback",children:Object(a.jsx)(f,{options:this.state,onLeaveFeedback:this.handleIncreament})}),Object(a.jsx)(g,{title:"Statistics",children:this.countTotalFeedback()?Object(a.jsx)(k,{props:this.state,total:this.countTotalFeedback,positivePercentage:this.countPositiveFeedbackPercentage}):Object(a.jsx)(w,{message:"No feedback given"})})]})}}]),n}(c.Component),P=function(){return Object(a.jsx)(F,{})};o.a.render(Object(a.jsx)(P,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.7bf426c2.chunk.js.map