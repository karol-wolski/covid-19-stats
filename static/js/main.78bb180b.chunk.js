(this["webpackJsonpcovid-19-stats"]=this["webpackJsonpcovid-19-stats"]||[]).push([[0],{28:function(e,t,n){e.exports=n(59)},59:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(20),o=n.n(c),l=n(14),u=n(9),i=n(2),s=n(1);function d(){var e=Object(i.a)(["\n\n*, *::before, *::after {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  font-family: 'Lato', sans-serif;\n  font-size: 1.6rem;\n  background-color: ",";\n  color: ",";\n  max-width: 80rem;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n}\n"]);return d=function(){return e},e}var f=Object(s.c)(d(),(function(e){return e.theme.bgSite}),(function(e){return e.theme.baseline1})),m=n(3);function h(){var e=Object(i.a)(["\n  text-decoration: none;\n  color: ",";\n"]);return h=function(){return e},e}function p(){var e=Object(i.a)(["\n  font-size: 1.2rem;\n  line-height: 1.6;\n"]);return p=function(){return e},e}function b(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 1.5rem 0;\n"]);return b=function(){return e},e}var v=s.d.footer(b()),g=s.d.p(p()),E=s.d.a(h(),(function(e){return e.theme.baseline2})),j=function(){return a.a.createElement(v,null,a.a.createElement(g,null,"Created by ",a.a.createElement(E,{href:"#"},"Karol Wolski"),"."),a.a.createElement(g,null,"Powered by"," ",a.a.createElement(E,{href:"https://rapidapi.com/api-sports/api/covid-193"},"COVID-19 Api")))};function O(){var e=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 5rem;\n\n  h1 {\n    font-size: 2.4rem;\n\n    @media (min-width: 640px) {\n      font-size: 3rem;\n    }\n\n    a {\n      text-decoration: none;\n      color: ",";\n    }\n  }\n"]);return O=function(){return e},e}var y=s.d.header(O(),(function(e){return e.theme.baseline1})),x=function(e){var t=e.children,n=e.handleCountryChange;return a.a.createElement(y,null,a.a.createElement("h1",null,a.a.createElement(l.b,{to:"/",onClick:function(){return n("all")}},"Covid-19 Statistics")),t)};function w(){var e=Object(i.a)(["\n  width: 100%;\n  margin: 1rem 0;\n  padding: 1rem;\n"]);return w=function(){return e},e}var k=s.d.select(w()),C=n(11),S=n.n(C),A=n(15),D=function(){var e=Object(A.a)(S.a.mark((function e(t){var n,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"GET",n={"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"fc24f745afmsh5c605a8b12b0360p15d513jsn4348e33eae7f"},e.next=4,fetch("".concat("https://covid-193.p.rapidapi.com").concat(t),{headers:n,method:"GET"});case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return r?e.replace(new RegExp(t,"g"),n):e.replace(t,n)};function z(){return(z=Object(A.a)(S.a.mark((function e(t,n,r,a,c){var o,l;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(!1),e.next=4,n(t);case 4:return o=e.sent,e.next=7,o.json();case 7:l=e.sent,r(l),c&&c(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),c&&c(!1),a(!0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}var F=function(e,t,n,r,a){return z.apply(this,arguments)};function I(){var e=Object(i.a)(["\n  padding: 1rem;\n  font-size: 1.4rem;\n  text-align: center;\n"]);return I=function(){return e},e}var J=s.d.div(I()),R=function(e){var t=e.children;return a.a.createElement(J,null,t)},L=function(e){var t=e.handleCountryChange,n=e.selectCountry,c=Object(r.useState)([]),o=Object(m.a)(c,2),l=o[0],u=o[1],i=Object(r.useState)(!1),s=Object(m.a)(i,2),d=s[0],f=s[1],h=Object(r.useState)(),p=Object(m.a)(h,2),b=p[0],v=p[1];return Object(r.useEffect)((function(){F("/countries",D,u,f)}),[]),Object(r.useEffect)((function(){return v("all"===n?"Select country":n)}),[n]),a.a.createElement("div",null,a.a.createElement(k,{id:"countries",onInput:function(e){return t(e.target.value)},value:b},a.a.createElement("option",{key:"select",value:"all"},"Select Country"),l.response&&l.response.map((function(e){return"all"!==e&&a.a.createElement("option",{key:e,value:e},T(e,"-"," ",!0))}))),d&&a.a.createElement(R,null,"An error has occurred from the server, please come back later."))};function M(){var e=Object(i.a)(["\n  overflow-x: auto;\n  min-height: 20rem;\n  position: relative;\n"]);return M=function(){return e},e}function P(){var e=Object(i.a)(["\n  padding: 1rem;\n  ","\n"]);return P=function(){return e},e}function G(){var e=Object(i.a)(["\n  tr:nth-of-type(odd) {\n    background: ",";\n  }\n"]);return G=function(){return e},e}function K(){var e=Object(i.a)(["\n  th {\n    padding: 1rem 0;\n    cursor: pointer;\n  }\n"]);return K=function(){return e},e}function N(){var e=Object(i.a)(["\n  width: 100%;\n  margin: 1.5rem 0;\n  text-align: center;\n"]);return N=function(){return e},e}var W=s.d.table(N()),Y=s.d.thead(K()),B=s.d.tbody(G(),(function(e){return e.theme.surface})),H=s.d.td(P(),(function(e){return e.pointer&&"\n    cursor: pointer;\n    "})),V=s.d.div(M()),Z=n(25),q=n.n(Z);function Q(){var e=Object(i.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  background: ",";\n  z-index: 2;\n"]);return Q=function(){return e},e}var U=s.d.div(Q(),(function(e){return e.theme.bgSite})),X=function(){var e=Object(r.useContext)(s.a);return a.a.createElement(U,null,a.a.createElement(q.a,{type:"ThreeDots",color:e.baseline1,height:75,width:75}))},$=function(e){var t=e.handleCountryChange,n=Object(r.useState)([]),c=Object(m.a)(n,2),o=c[0],l=c[1],u=Object(r.useState)(!1),i=Object(m.a)(u,2),s=i[0],d=i[1],f=Object(r.useState)(!1),h=Object(m.a)(f,2),p=h[0],b=h[1],v=Object(r.useState)(!1),g=Object(m.a)(v,2),E=g[0],j=g[1],O=Object(r.useState)(!1),y=Object(m.a)(O,2),x=y[0],w=y[1],k=Object(r.useState)(!0),C=Object(m.a)(k,2),S=C[0],A=C[1],z=Object(r.useState)(!1),I=Object(m.a)(z,2),J=I[0],L=I[1];Object(r.useEffect)((function(){F("/statistics",D,l,L,A)}),[]);var M=function(e,t){var n=o;"country"===e?(n.response.sort((function(e,n){return t?e.country.charCodeAt(0)-n.country.charCodeAt(0):n.country.charCodeAt(0)-e.country.charCodeAt(0)})),d(!t)):"cases"===e?(n.response.sort((function(e,n){return t?e.cases.total-n.cases.total:n.cases.total-e.cases.total})),b(!t)):"recovered"===e?(n.response.sort((function(e,n){return t?e.cases.total-n.cases.total:n.cases.total-e.cases.total})),w(!t)):"deaths"===e&&(n.response.sort((function(e,n){return t?e.deaths.total-n.deaths.total:n.deaths.total-e.deaths.total})),j(!t)),l(n)};return a.a.createElement(V,null,S&&a.a.createElement(X,null),J&&a.a.createElement(R,null,"An error has occurred from the server, please come back later."),o.response&&a.a.createElement(W,null,a.a.createElement(Y,null,a.a.createElement("tr",null,a.a.createElement("th",{onClick:function(){return M("country",s)}},"Country"),a.a.createElement("th",{onClick:function(){return M("cases",p)}},"Cases"),a.a.createElement("th",{onClick:function(){return M("recovered",x)}},"Recovered"),a.a.createElement("th",{onClick:function(){return M("deaths",E)}},"Deaths"))),a.a.createElement(B,null,o.response.map((function(e){var n=e.country,r=e.cases,c=e.deaths;return"All"!==n&&a.a.createElement("tr",{key:n},a.a.createElement(H,{pointer:!0,role:"gridcell",onClick:function(){return t(n)},onKeyPress:function(){return t(n)}},T(n,"-"," ",!0)),a.a.createElement(H,null,r.total),a.a.createElement(H,null,r.recovered),a.a.createElement(H,null,c.total))})))))};function _(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  & > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"]);return _=function(){return e},e}function ee(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 1.6rem;\n  color: ",";\n\n  span {\n    display: block;\n  }\n"]);return ee=function(){return e},e}function te(){var e=Object(i.a)(["\n  font-size: 1.2rem;\n"]);return te=function(){return e},e}function ne(){var e=Object(i.a)(["\n  display: block;\n  font-weight: 700;\n  font-size: 5rem;\n  margin-right: 1rem;\n"]);return ne=function(){return e},e}function re(){var e=Object(i.a)(["\n  text-align: center;\n  font-size: 1.8rem;\n  padding: 1rem 0;\n"]);return re=function(){return e},e}function ae(){var e=Object(i.a)(["\n  margin: 1rem 0;\n"]);return ae=function(){return e},e}function ce(){var e=Object(i.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: center;\n  ","\n\n  @media (min-width: 360px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  @media (min-width: 768px) {\n    grid-template-columns: repeat(",", 1fr);\n  }\n"]);return ce=function(){return e},e}function oe(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 1.5rem 0;\n"]);return oe=function(){return e},e}var le=s.d.div(oe()),ue=s.d.div(ce(),(function(e){var t=e.border,n=e.theme;return t&&"\n      border-top: 1px dashed;\n      border-bottom: 1px dashed;\n      border-color: ".concat(n.surface,";\n  ")}),(function(e){return e.row})),ie=s.d.h2(ae()),se=(s.d.p(re()),s.d.span(ne()),s.d.p(te()));s.d.span(ee(),(function(e){var t=e.theme,n=e.type;return"danger"===n?t.danger:"success"===n?t.success:"info"===n?t.info:t.baseline1})),s.d.div(_());function de(){var e=Object(i.a)(["\n  font-weight: 700;\n  font-size: 2.8rem;\n  color: ",";\n"]);return de=function(){return e},e}function fe(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0 1.5rem;\n  margin: 1.5rem 0;\n\n  ","\n"]);return fe=function(){return e},e}var me=s.d.div(fe(),(function(e){return e.rowAll&&"\n    @media(min-width: 360px) and (max-width: 767px) {\n      grid-column-start: 1;\n      grid-column-end: 4;\n    }\n  "})),he=s.d.p(de(),(function(e){var t=e.theme,n=e.type;return"danger"===n?t.danger:"success"===n?t.success:t.baseline1})),pe=function(e){var t=e.title,n=e.value,r=e.type,c=e.rowAll;return a.a.createElement(me,{rowAll:c},a.a.createElement("h3",null,t),a.a.createElement(he,{type:r},n))},be=function(e){return e<10?"0".concat(e):e},ve=function(e){var t=e.localisation,n=Object(r.useState)([]),c=Object(m.a)(n,2),o=c[0],l=c[1],u=Object(r.useState)(),i=Object(m.a)(u,2),s=i[0],d=i[1];Object(r.useEffect)((function(){F("/statistics?country=".concat(t),D,l,d)}),[t]);var f=function(e){return null!==e?e.replace(/[^a-zA-Z0-9 ]/g,""):0};return a.a.createElement(a.a.Fragment,null,s&&a.a.createElement(R,null,"An error has occurred from the server, please come back later."),o.response&&o.response.map((function(e){var t=e.country,n=e.cases,r=e.deaths,c=e.time;return a.a.createElement(le,{key:t},a.a.createElement(ie,null,"All"===t?"World stats":"Stats for ".concat(T(t,"-"," ",!0))),a.a.createElement(se,null,"Last update: ",function(e){var t=new Date(e),n=be(t.getDate()),r=be(t.getMonth()+1),a=be(t.getFullYear()),c=be(t.getHours()),o=be(t.getMinutes());return"".concat(n,".").concat(r,".").concat(a," ").concat(c,":").concat(o)}(c)),a.a.createElement(ue,{row:"3"},a.a.createElement(pe,{value:"Today",rowAll:!0}),a.a.createElement(pe,{title:"Detected",value:f(n.new)}),a.a.createElement(pe,{type:"danger",title:"Deaths",value:f(r.new)})),a.a.createElement(ue,{row:"3",border:!0},a.a.createElement(pe,{value:"Total",rowAll:!0}),a.a.createElement(pe,{title:"Detected",value:n.total}),a.a.createElement(pe,{type:"danger",title:"Deaths",value:r.total})),a.a.createElement(ue,{row:"3"},a.a.createElement(pe,{value:"Cases",rowAll:!0}),a.a.createElement(pe,{title:"Active",value:n.active}),a.a.createElement(pe,{type:"success",title:"Recovered",value:n.recovered})))})))};function ge(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return ge=function(){return e},e}function Ee(){var e=Object(i.a)(["\n  overflow-x: auto;\n"]);return Ee=function(){return e},e}function je(){var e=Object(i.a)(["\n  tr:nth-of-type(odd) {\n    background: ",";\n  }\n\n  td {\n    padding: 1rem 0;\n  }\n"]);return je=function(){return e},e}function Oe(){var e=Object(i.a)(["\n  th {\n    padding: 1rem 0;\n    cursor: pointer;\n  }\n"]);return Oe=function(){return e},e}function ye(){var e=Object(i.a)(["\n  width: 100%;\n  margin: 1.5rem 0;\n  text-align: center;\n"]);return ye=function(){return e},e}var xe=s.d.table(ye()),we=s.d.thead(Oe()),ke=s.d.tbody(je(),(function(e){return e.theme.surface})),Ce=s.d.div(Ee()),Se=s.d.div(ge()),Ae=function(e){var t=e.localisation,n=Object(r.useState)([]),c=Object(m.a)(n,2),o=c[0],l=c[1],u=Object(r.useState)(),i=Object(m.a)(u,2),s=i[0],d=i[1],f=Object(r.useState)(!1),h=Object(m.a)(f,2),p=h[0],b=h[1],v=Object(r.useState)(!1),g=Object(m.a)(v,2),E=g[0],j=g[1],O=Object(r.useState)(!1),y=Object(m.a)(O,2),x=y[0],w=y[1],k=Object(r.useState)(!1),C=Object(m.a)(k,2),S=C[0],A=C[1];Object(r.useEffect)((function(){F("/history?country=".concat(t),D,l,d)}),[t]);var T=function(e,t){var n=o;"date"===e?(n.response.sort((function(e,n){return t?new Date(e.day).getTime()-new Date(n.day).getTime():new Date(n.day).getTime()-new Date(e.day).getTime()})),b(!t)):"cases"===e?(n.response.sort((function(e,n){return t?e.cases.total-n.cases.total:n.cases.total-e.cases.total})),j(!t)):"recovered"===e?(n.response.sort((function(e,n){return t?e.cases.total-n.cases.total:n.cases.total-e.cases.total})),A(!t)):"deaths"===e&&(n.response.sort((function(e,n){return t?e.deaths.total-n.deaths.total:n.deaths.total-e.deaths.total})),w(!t)),l(n)};return a.a.createElement(Se,null,a.a.createElement("h3",null,"Last 10 days"),a.a.createElement(Ce,null,s&&a.a.createElement(R,null,"An error has occurred from the server, please come back later."),o.response&&a.a.createElement(xe,null,a.a.createElement(we,null,a.a.createElement("tr",null,a.a.createElement("th",{onClick:function(){return T("date",p)}},"Date"),a.a.createElement("th",{onClick:function(){return T("cases",E)}},"Cases"),a.a.createElement("th",{onClick:function(){return T("recovered",S)}},"Recovered"),a.a.createElement("th",{onClick:function(){return T("deaths",x)}},"Deaths"))),a.a.createElement(ke,null,o.response.reverse().filter((function(e,t,n){return t===n.findIndex((function(t){return t.day===e.day}))})).reverse().filter((function(e,t){return t<10})).map((function(e){var t=e.time,n=e.cases,r=e.deaths;return a.a.createElement("tr",{key:t},a.a.createElement("td",null,function(e,t){var n=new Date(e);n.setDate(n.getDate()-t);var r=be(n.getDate()),a=be(n.getMonth()+1),c=be(n.getFullYear());return"".concat(r,".").concat(a,".").concat(c)}(t,1)),a.a.createElement("td",null,n.total),a.a.createElement("td",null,n.recovered),a.a.createElement("td",null,r.total))}))))))},De=n(26),Te={danger:"#fb0404",success:"#43a047",info:"#ffeb3b",baseline1:"#1f1f1f",baseline2:"#121212",bgSite:"#F6F6F6",surface:"#b5b5b5",themeToggle:"#ffaa00"},ze={danger:"#fb0404",success:"#43a047",info:"#ffeb3b",bgSite:"#121212",surface:"#1f1f1f",baseline1:"#E1E1E1",baseline2:"#A5A5A5",themeToggle:"#ffaa00"},Fe=function(e,t){return localStorage.setItem(e,JSON.stringify(t))},Ie=function(e){return JSON.parse(localStorage.getItem(e))},Je=Object(r.createContext)(),Re={dark:{mode:"dark",pallete:ze},light:{mode:"light",pallete:Te}},Le=function(e){var t=e.children,n=Ie("theme"),c=Object(r.useState)({mode:n?n.mode:Re.dark.mode,pallete:n?n.pallete:Re.dark.pallete,switchTo:function(e){return u(Object(De.a)({},l,{},Re[e]))}}),o=Object(m.a)(c,2),l=o[0],u=o[1];Object(r.useEffect)((function(){Fe("theme",l)}),[l]);var i=l.pallete;return a.a.createElement(Je.Provider,{value:l},a.a.createElement(s.b,{theme:i},t))};function Me(){var e=Object(i.a)(["\n  width: ",";\n  height: ",";\n  appearance: none;\n  cursor: pointer;\n  border-radius: 1rem;\n  color: ",";\n  transition: all 500ms;\n  box-shadow: ",";\n"]);return Me=function(){return e},e}function Pe(){var e=Object(i.a)(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n"]);return Pe=function(){return e},e}var Ge="calc(".concat("2rem"," * -0.4)"),Ke="calc(".concat("2rem"," * 0.65)"),Ne="calc(".concat("2rem"," * 0.45)"),We=s.d.label(Pe()),Ye=s.d.input.attrs({type:"checkbox"})(Me(),"2rem","2rem",(function(e){return e.theme.themeToggle}),(function(e){return"light"===e.active?"inset calc(2rem * 0.33) calc(2rem * -0.25) 0":"\n      inset 0 0 0 ".concat("2rem",",\n      calc(").concat(Ke," * -1) 0 0 ").concat(Ge,",\n      ").concat(Ke," 0 0 ").concat(Ge,",\n      0 calc(").concat(Ke," * -1) 0 ").concat(Ge,",\n      0 ").concat(Ke," 0 ").concat(Ge,",\n      calc(").concat(Ne," * -1) calc(").concat(Ne," * -1) 0 ").concat(Ge,",\n      ").concat(Ne," ").concat(Ne," 0 ").concat(Ge,",\n      calc(").concat(Ne," * -1) ").concat(Ne," 0 ").concat(Ge,",\n      ").concat(Ne," calc(").concat(Ne," * -1) 0 ").concat(Ge,"\n  ")})),Be=function(){var e=Object(r.useContext)(Je),t=e.switchTo,n=e.mode,c="dark"===n?"light":"dark";return a.a.createElement(a.a.Fragment,null,a.a.createElement(We,{htmlFor:"themeToggle"},"Set theme"),a.a.createElement(Ye,{id:"themeToggle",active:n,onClick:function(){return t(c)}}))},He=function(){var e=Object(r.useState)("all"),t=Object(m.a)(e,2),n=t[0],c=t[1],o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all";c(e)};return a.a.createElement(a.a.Fragment,null,a.a.createElement(x,{handleCountryChange:o},a.a.createElement(Be,null)),a.a.createElement(L,{handleCountryChange:o,selectCountry:n}),a.a.createElement(ve,{localisation:n}),"all"===n?a.a.createElement($,{handleCountryChange:o}):a.a.createElement(Ae,{localisation:n}),a.a.createElement(j,null))},Ve=function(){return a.a.createElement(Le,null,a.a.createElement(f,null),a.a.createElement(l.a,{basename:"covid-19-stats"},a.a.createElement(u.a,{path:"/",component:He,exact:!0})))};o.a.render(a.a.createElement(Ve,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.78bb180b.chunk.js.map