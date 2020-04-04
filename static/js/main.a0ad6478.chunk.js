(this["webpackJsonpcovid-19-stats"]=this["webpackJsonpcovid-19-stats"]||[]).push([[0],{29:function(e,n,t){e.exports=t(41)},41:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(22),o=t.n(c),u=t(26),i=t(10),l=t(1),s=t(2);function f(){var e=Object(s.a)(["\n\n*, *::before, *::after {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  font-family: 'Lato', sans-serif;\n  font-size: 1.6rem;\n  background-color: ",";\n  color: ",";\n  max-width: 80rem;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n}\n"]);return f=function(){return e},e}var m=Object(l.b)(f(),(function(e){return e.theme.bgSite}),(function(e){return e.theme.baseline1})),d={danger:"#B31412",success:"#43a047",info:"#ffeb3b",bgSite:"#121212",surface:"#1f1f1f",baseline1:"#E1E1E1",baseline2:"#A5A5A5"},p=t(4);function h(){var e=Object(s.a)(["\n  text-decoration: none;\n  color: ",";\n"]);return h=function(){return e},e}function b(){var e=Object(s.a)(["\n  font-size: 1.2rem;\n  line-height: 1.6;\n"]);return b=function(){return e},e}function v(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 1.5rem 0;\n"]);return v=function(){return e},e}var g=l.c.footer(v()),E=l.c.p(b()),y=l.c.a(h(),(function(e){return e.theme.baseline2})),j=function(){return r.a.createElement(g,null,r.a.createElement(E,null,"Created by ",r.a.createElement(y,{href:"#"},"Karol Wolski"),"."),r.a.createElement(E,null,"Powered by"," ",r.a.createElement(y,{href:"https://rapidapi.com/api-sports/api/covid-193"},"COVID-19 Api")))};function O(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 5rem;\n\n  h1 {\n    font-size: 2rem;\n\n    @media (min-width: 640px) {\n      font-size: 3rem;\n    }\n  }\n"]);return O=function(){return e},e}var x=l.c.header(O()),w=function(e){var n=e.children;return r.a.createElement(x,null,r.a.createElement("h1",null,"Covid-19 Statistics"),n)},k=t(5),C=t.n(k),A=t(8);function S(){var e=Object(s.a)(["\n  width: 100%;\n  margin: 1rem 0;\n  padding: 1rem;\n"]);return S=function(){return e},e}var D=l.c.select(S()),z=function(){var e=Object(A.a)(C.a.mark((function e(n){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"GET",t={"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"fc24f745afmsh5c605a8b12b0360p15d513jsn4348e33eae7f"},e.next=4,fetch("".concat("https://covid-193.p.rapidapi.com").concat(n),{headers:t,method:"GET"});case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),T=function(e){var n=e.handleCountryChange,t=Object(a.useState)([]),c=Object(p.a)(t,2),o=c[0],u=c[1];return Object(a.useEffect)((function(){function e(){return(e=Object(A.a)(C.a.mark((function e(){var n,t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z("/countries");case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,u(t.response),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",null,r.a.createElement(D,{id:"countries",onInput:function(e){return n(e.target.value)}},r.a.createElement("option",{key:"all",value:"all"},"Global Stats"),o&&o.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))))},F=t(17);function I(){var e=Object(s.a)(["\n  tr:nth-of-type(odd) {\n    background: ",";\n  }\n\n  td {\n    padding: 1rem 0;\n\n    span {\n      color: ",";\n      display: block;\n      margin-top: 0.5rem;\n\n      @media (min-width: 640px) {\n        display: inline-block;\n        margin: 0 0 0 1rem;\n      }\n    }\n  }\n"]);return I=function(){return e},e}function G(){var e=Object(s.a)(["\n  th {\n    padding: 1rem 0;\n    cursor: pointer;\n  }\n"]);return G=function(){return e},e}function L(){var e=Object(s.a)(["\n  width: 100%;\n  margin: 1.5rem 0;\n  text-align: center;\n"]);return L=function(){return e},e}var B=l.c.table(L()),J=l.c.thead(G()),M=l.c.tbody(I(),(function(e){return e.theme.surface}),(function(e){return e.theme.danger})),W=function(){var e=Object(a.useState)([]),n=Object(p.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(!1),u=Object(p.a)(o,2),i=u[0],l=u[1],s=Object(a.useState)(!1),f=Object(p.a)(s,2),m=f[0],d=f[1],h=Object(a.useState)(!1),b=Object(p.a)(h,2),v=b[0],g=b[1];Object(a.useEffect)((function(){function e(){return(e=Object(A.a)(C.a.mark((function e(){var n,t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z("/statistics");case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,c(t.response),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var E=function(e,n){var a=Object(F.a)(t);"country"===e?(a.sort((function(e,t){return n?e.country.charCodeAt(0)-t.country.charCodeAt(0):t.country.charCodeAt(0)-e.country.charCodeAt(0)})),l(!n)):"cases"===e?(a.sort((function(e,t){return n?e.cases.total-t.cases.total:t.cases.total-e.cases.total})),d(!n)):"deaths"===e&&(a.sort((function(e,t){return n?e.deaths.total-t.deaths.total:t.deaths.total-e.deaths.total})),g(!n)),c(a)};return r.a.createElement(B,null,r.a.createElement(J,null,r.a.createElement("tr",null,r.a.createElement("th",{onClick:function(){return E("country",i)}},"Country"),r.a.createElement("th",{onClick:function(){return E("cases",m)}},"Cases"),r.a.createElement("th",{onClick:function(){return E("deaths",v)}},"Deaths"))),r.a.createElement(M,null,t&&t.map((function(e){var n=e.country,t=e.cases,a=e.deaths;return"All"!==n&&r.a.createElement("tr",{key:n},r.a.createElement("td",null,n),r.a.createElement("td",null,t.total),r.a.createElement("td",null,a.total))}))))};function H(){var e=Object(s.a)(["\n  tr:nth-of-type(odd) {\n    background: ",";\n  }\n\n  td {\n    padding: 1rem 0;\n\n    span {\n      color: ",";\n      display: block;\n      margin-top: 0.5rem;\n\n      @media (min-width: 640px) {\n        display: inline-block;\n        margin: 0 0 0 1rem;\n      }\n    }\n  }\n"]);return H=function(){return e},e}function K(){var e=Object(s.a)(["\n  th {\n    padding: 1rem 0;\n    cursor: pointer;\n  }\n"]);return K=function(){return e},e}function P(){var e=Object(s.a)(["\n  width: 100%;\n  margin: 1.5rem 0;\n  text-align: center;\n"]);return P=function(){return e},e}var R=l.c.table(P()),V=l.c.thead(K()),Y=l.c.tbody(H(),(function(e){return e.theme.surface}),(function(e){return e.theme.danger})),Z=function(e){var n=e.localisation,t=Object(a.useState)([]),c=Object(p.a)(t,2),o=c[0],u=c[1],i=Object(a.useState)(!1),l=Object(p.a)(i,2),s=l[0],f=l[1],m=Object(a.useState)(!1),d=Object(p.a)(m,2),h=d[0],b=d[1],v=Object(a.useState)(!1),g=Object(p.a)(v,2),E=g[0],y=g[1];Object(a.useEffect)((function(){function e(){return(e=Object(A.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(n),e.next=4,z("/history?country=".concat(n));case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,u(a.response),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]);var j=function(e,n){var t=Object(F.a)(o);"date"===e?(t.sort((function(e,t){return n?new Date(e.day).getTime()-new Date(t.day).getTime():new Date(t.day).getTime()-new Date(e.day).getTime()})),f(!n)):"cases"===e?(t.sort((function(e,t){return n?e.cases.total-t.cases.total:t.cases.total-e.cases.total})),b(!n)):"deaths"===e&&(t.sort((function(e,t){return n?e.deaths.total-t.deaths.total:t.deaths.total-e.deaths.total})),y(!n)),u(t)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Last 10 days"),r.a.createElement(R,null,r.a.createElement(V,null,r.a.createElement("tr",null,r.a.createElement("th",{onClick:function(){return j("date",s)}},"Date"),r.a.createElement("th",{onClick:function(){return j("cases",h)}},"Cases"),r.a.createElement("th",{onClick:function(){return j("deaths",E)}},"Deaths"))),r.a.createElement(Y,null,o&&o.filter((function(e,n,t){return n===t.findIndex((function(n){return n.day===e.day}))})).filter((function(e,n){return n>0&&n<=10})).map((function(e){var n=e.day,t=e.cases,a=e.deaths;return r.a.createElement("tr",{key:n},r.a.createElement("td",null,n),r.a.createElement("td",null,t.total),r.a.createElement("td",null,a.total))})))))};function q(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  & > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"]);return q=function(){return e},e}function N(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 1.6rem;\n  color: ",";\n\n  span {\n    display: block;\n  }\n"]);return N=function(){return e},e}function Q(){var e=Object(s.a)(["\n  font-size: 1.2rem;\n"]);return Q=function(){return e},e}function U(){var e=Object(s.a)(["\n  display: block;\n  font-weight: 700;\n  font-size: 5rem;\n  margin-right: 1rem;\n"]);return U=function(){return e},e}function X(){var e=Object(s.a)(["\n  text-align: center;\n  font-size: 1.8rem;\n  padding: 1rem 0;\n"]);return X=function(){return e},e}function $(){var e=Object(s.a)(["\n  margin: 1rem 0;\n"]);return $=function(){return e},e}function _(){var e=Object(s.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: center;\n  ","\n\n  @media (min-width: 360px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  @media (min-width: 768px) {\n    grid-template-columns: repeat(",", 1fr);\n  }\n"]);return _=function(){return e},e}function ee(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 1.5rem 0;\n"]);return ee=function(){return e},e}var ne=l.c.div(ee()),te=l.c.div(_(),(function(e){var n=e.border,t=e.theme;return n&&"\n      border-top: 1px dashed;\n      border-bottom: 1px dashed;\n      border-color: ".concat(t.surface,";\n  ")}),(function(e){return e.row})),ae=l.c.h2($()),re=(l.c.p(X()),l.c.span(U()),l.c.p(Q()));l.c.span(N(),(function(e){var n=e.theme,t=e.type;return"danger"===t?n.danger:"success"===t?n.success:"info"===t?n.info:n.baseline1})),l.c.div(q());function ce(){var e=Object(s.a)(["\n  font-weight: 700;\n  font-size: 2.8rem;\n  color: ",";\n"]);return ce=function(){return e},e}function oe(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0 1.5rem;\n  margin: 1.5rem 0;\n\n  ","\n"]);return oe=function(){return e},e}var ue=l.c.div(oe(),(function(e){return e.rowAll&&"\n    @media(min-width: 360px) and (max-width: 767px) {\n      grid-column-start: 1;\n      grid-column-end: 4;\n    }\n  "})),ie=l.c.p(ce(),(function(e){var n=e.theme,t=e.type;return"danger"===t?n.danger:"success"===t?n.success:n.baseline1})),le=function(e){var n=e.title,t=e.value,a=e.type,c=e.rowAll;return r.a.createElement(ue,{rowAll:c},r.a.createElement("h3",null,n),r.a.createElement(ie,{type:a},t))},se=function(e){var n=new Date(e),t=n.getDay(),a=n.getMonth(),r=n.getFullYear(),c=n.getHours();c=c<10?"0".concat(c):c;var o=n.getMinutes();return o=o<10?"0".concat(o):o,"".concat(t,".").concat(a,".").concat(r," ").concat(c,":").concat(o)},fe=function(e){var n=e.localisation,t=Object(a.useState)([]),c=Object(p.a)(t,2),o=c[0],u=c[1];Object(a.useEffect)((function(){function e(){return(e=Object(A.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z("/statistics?country=".concat(n));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,u(a.response),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]);var i=function(e){return null!==e?e.replace(/[^a-zA-Z0-9 ]/g,""):0};return r.a.createElement(r.a.Fragment,null,o&&o.map((function(e){var n=e.country,t=e.cases,a=e.deaths,c=e.time;return r.a.createElement(ne,{key:n},r.a.createElement(ae,null,"All"===n?"World stats":"Stats for ".concat(n)),r.a.createElement(re,null,"Last update: ",se(c)),r.a.createElement(te,{row:"3"},r.a.createElement(le,{value:"Today",rowAll:!0}),r.a.createElement(le,{title:"Detected",value:i(t.new)}),r.a.createElement(le,{type:"danger",title:"Deaths",value:i(a.new)})),r.a.createElement(te,{row:"3",border:!0},r.a.createElement(le,{value:"Total",rowAll:!0}),r.a.createElement(le,{title:"Detected",value:t.total}),r.a.createElement(le,{type:"danger",title:"Deaths",value:a.total})),r.a.createElement(te,{row:"3"},r.a.createElement(le,{value:"Cases",rowAll:!0}),r.a.createElement(le,{title:"Active",value:t.active}),r.a.createElement(le,{type:"success",title:"Recovered",value:t.recovered})))})))},me=function(){var e=Object(a.useState)("all"),n=Object(p.a)(e,2),t=n[0],c=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null),r.a.createElement(T,{handleCountryChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all";c(e)}}),r.a.createElement(fe,{localisation:t}),"all"===t?r.a.createElement(W,null):r.a.createElement(Z,{localisation:t}),r.a.createElement(j,null))},de=function(){return r.a.createElement(l.a,{theme:d},r.a.createElement(m,null),r.a.createElement(u.a,null,r.a.createElement(i.a,{path:"/",component:me,exact:!0})))};o.a.render(r.a.createElement(de,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.a0ad6478.chunk.js.map