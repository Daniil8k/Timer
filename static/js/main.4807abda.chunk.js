(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(4),s=n.n(i),a=(n(10),n(11),n.p+"static/media/logo.f3c4a504.webp"),r=n(2),l=n(5),o=n.n(l),u=n(0);var b=function(e){var t=e.time,n=e.setTime,c=e.isTimerStarted,i=e.label,s=function(e){return 1===e.toString().length?"0"+e:e.toString()};return Object(u.jsxs)("div",{className:"flex flex-col gap-1",children:[Object(u.jsx)("label",{for:"".concat(i,"-input"),className:"text-lg select-none mb-2",children:i}),Object(u.jsx)("button",{className:"time-picker-cell__arrow ".concat(c?"invisible":"visible"),onClick:function(){var e=+t,c="00";e<59&&(c=e+1),c=s(c),n(c)},children:"\u1403"}),Object(u.jsx)(o.a,{id:"".concat(i,"-input"),className:"time-picker-cell__input",value:t,mask:"99",maskChar:null,alwaysShowMask:"false",disabled:c,onChange:function(e){n(e.target.value)},onBlur:function(e){!function(e){if(e>59)n("00");else{var t=s(e);n(t)}}(e.target.value)}}),Object(u.jsx)("button",{className:"time-picker-cell__arrow ".concat(c?"invisible":"visible"),onClick:function(){var e=+t,c="59";e>0&&(c=e-1),c=s(c),n(c)},children:"\u1401"})]})},j=n.p+"static/media/bell.70927a4a.mp3",m=null;var d=function(){var e="05",t="30",n=Object(c.useState)(!0),i=Object(r.a)(n,2),s=i[0],a=i[1],l=Object(c.useState)(!0),o=Object(r.a)(l,2),d=o[0],f=o[1],h=Object(c.useState)(!1),x=Object(r.a)(h,2),O=x[0],g=x[1],v=Object(c.useState)(0),p=Object(r.a)(v,2),k=p[0],N=p[1],S=Object(c.useState)(e),w=Object(r.a)(S,2),y=w[0],C=w[1],_=Object(c.useState)(t),T=Object(r.a)(_,2),A=T[0],B=T[1],I=function(e){return 1===e.toString().length?"0"+e:e.toString()};Object(c.useEffect)((function(){if(document.title="".concat(I(y),":").concat(I(A)," | Timer"),O)return 0===+y&&0===+A?(C(e),B(t),N((function(e){return e+1})),F(e,t),void E()):void(-1===+A&&(B("59"),C((function(e){return I(e-1)}))))}),[A,y,O,e,t]);var E=function(){new Audio(j).play()},F=function(e,t){var n=document.getElementById("timeCircleAnimation");n.setAttribute("dur",60*+e+ +t),n.beginElement()},P=function(){0===+y&&0===+A||(m=setInterval((function(){B((function(e){return I(e-1)}))}),1e3),F(y,A),e=y,t=A,g(!0))},D=function(){clearInterval(m),document.getElementById("timeCircleAnimation").setAttribute("dur",0),g(!1)};return Object(u.jsxs)("div",{children:[Object(u.jsxs)("svg",{id:"svg1",xmlns:"http://www.w3.org/2000/svg",height:"200",className:"mx-auto",viewBox:"0 0 120 120",children:[Object(u.jsx)("rect",{width:"100%",height:"100%",fill:"transparent"}),Object(u.jsx)("circle",{cx:"60",cy:"60",r:"50",fill:"none",stroke:"transparent",strokeWidth:"5"}),Object(u.jsx)("circle",{cx:"60",cy:"60",r:"50",transform:"rotate(-90 60 60)",fill:"none",strokeDashoffset:"314",strokeDasharray:"314",stroke:"white",strokeWidth:"5",children:Object(u.jsx)("animate",{id:"timeCircleAnimation",attributeName:"stroke-dashoffset",begin:"indefinite",dur:"0",values:"314;0"})}),Object(u.jsx)("text",{x:"50%",y:"60%",fill:"#e7e7e7",textAnchor:"middle",dy:"7",fontSize:"48",children:k})]}),Object(u.jsxs)("div",{className:"flex items-center justify-center gap-2 -m-2",children:[Object(u.jsx)(b,{label:"minutes",time:y,setTime:C,isTimerStarted:O}),Object(u.jsx)("span",{className:"text-5xl mt-12",children:":"}),Object(u.jsx)(b,{label:"seconds",time:A,setTime:B,isTimerStarted:O})]}),Object(u.jsxs)("div",{className:"mt-12 flex items-center justify-center gap-8",children:[s&&Object(u.jsx)("button",{className:"btn btn_success btn_big",onClick:function(){P(),a(!1),f(!0)},children:"Start"}),!s&&Object(u.jsx)("button",{className:"btn btn_danger btn_md",onClick:function(){D(),a(!0),C(e),B(t),N(0)},children:"Stop"}),!s&&Object(u.jsx)("button",{className:"btn btn_fancy btn_md",onClick:d?function(){D(),f(!1)}:function(){P(),f(!0)},children:d?"Pause":"Play"})]})]})};n(14);var f=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"hamburger container",children:[Object(u.jsxs)("header",{className:"flex items-center justify-start gap-2",children:[Object(u.jsx)("img",{className:"logo",width:"32",height:"32",src:a,alt:"logo"}),Object(u.jsx)("h1",{className:"italic",children:"Timer"})]}),Object(u.jsx)("main",{children:Object(u.jsx)(d,{})}),Object(u.jsx)("footer",{className:"text-sm text-right",children:"\xa9 timer 2021"})]})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};s.a.render(Object(u.jsx)(f,{}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.4807abda.chunk.js.map