(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(4),s=n.n(i),a=(n(10),n(11),n.p+"static/media/logo.f3c4a504.webp"),r=n(2),l=n(5),o=n.n(l),u=n(0);var m=function(e){var t=e.time,n=e.setTime,c=e.isTimerStarted,i=e.label,s=function(e){return 1===(e=e.toString()).length&&(e="0"+e),e};return Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"".concat(i,"-input"),className:"block text-lg select-none mb-4 mx-auto",children:i}),Object(u.jsxs)("div",{className:"flex flex-col gap-1",children:[Object(u.jsx)("button",{className:"time-picker-cell__arrow ".concat(c?"invisible":"visible"),onClick:function(){var e,c=Number(t);e=59===c?"00":(c+1).toString(),e=s(e),n(e)},children:"\u1403"}),Object(u.jsx)(o.a,{id:"".concat(i,"-input"),className:"time-picker-cell__input",value:t,mask:"99",maskChar:null,alwaysShowMask:"false",disabled:c,onChange:function(e){n(e.target.value)},onBlur:function(e){!function(e){if(Number(e)>59)n("00");else{var t=s(e);n(t)}}(e.target.value)}}),Object(u.jsx)("button",{className:"time-picker-cell__arrow ".concat(c?"invisible":"visible"),onClick:function(){var e,c=Number(t);e=0===c?"59":(c-1).toString(),e=s(e),n(e)},children:"\u1401"})]})]})},b=n.p+"static/media/bell.70927a4a.mp3",j=null,d="05",f="30";var h=function(){var e=Object(c.useState)(!0),t=Object(r.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(!0),a=Object(r.a)(s,2),l=a[0],o=a[1],h=Object(c.useState)(!1),x=Object(r.a)(h,2),O=x[0],g=x[1],v=Object(c.useState)(0),p=Object(r.a)(v,2),N=p[0],k=p[1],w=Object(c.useState)(d),S=Object(r.a)(w,2),y=S[0],C=S[1],T=Object(c.useState)(f),_=Object(r.a)(T,2),A=_[0],B=_[1],I=function(e){return 1===(e=e.toString()).length&&(e="0"+e),e};Object(c.useEffect)((function(){document.title="".concat(I(y),":").concat(I(A)," | Timer"),O&&(0===+y&&0===+A?(C(d),B(f),k((function(e){return e+1})),E(),F(d,f)):-1===+A&&(B("59"),C((function(e){return I(e-1)}))))}),[A,y,O]);var E=function(){new Audio(b).play()},F=function(e,t){var n=document.getElementById("timeCircleAnimation");n.setAttribute("dur",60*+e+ +t),n.beginElement()},P=function(){0===+y&&0===+A||(j=setInterval((function(){B((function(e){return I(e-1)}))}),1e3),F(y,A),d=y,f=A,g(!0))},D=function(){clearInterval(j),document.getElementById("timeCircleAnimation").setAttribute("dur",0),g(!1)};return Object(u.jsxs)("div",{className:"mx-auto w-max",children:[Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"120",height:"120",className:"mx-auto",viewBox:"0 0 120 120",children:[Object(u.jsx)("circle",{cx:"60",cy:"60",r:"50",fill:"none",stroke:"transparent",strokeWidth:"5"}),Object(u.jsx)("circle",{cx:"60",cy:"60",r:"50",transform:"rotate(-90 60 60)",fill:"none",strokeDashoffset:"314",strokeDasharray:"314",stroke:"white",strokeWidth:"5",children:Object(u.jsx)("animate",{id:"timeCircleAnimation",attributeName:"stroke-dashoffset",begin:"indefinite",dur:"0",values:"314;0"})}),Object(u.jsx)("text",{x:"50%",y:"60%",fill:"#e7e7e7",textAnchor:"middle",dy:"7",fontSize:"48",children:N})]}),Object(u.jsxs)("div",{className:"flex items-center justify-center gap-2 -m-2",children:[Object(u.jsx)(m,{label:"minutes",time:y,setTime:C,isTimerStarted:O}),Object(u.jsx)("span",{className:"text-5xl mt-12",children:":"}),Object(u.jsx)(m,{label:"seconds",time:A,setTime:B,isTimerStarted:O})]}),Object(u.jsxs)("div",{className:"mt-12 flex items-center justify-center gap-7",children:[n&&Object(u.jsx)("button",{className:"btn btn_success w-full",onClick:function(){P(),i(!1),o(!0)},children:"Start"}),!n&&Object(u.jsx)("button",{className:"btn btn_danger w-1/2",onClick:function(){D(),i(!0),C(d),B(f),k(0)},children:"Stop"}),!n&&Object(u.jsx)("button",{className:"btn btn_fancy w-1/2",onClick:l?function(){D(),o(!1)}:function(){P(),o(!0)},children:l?"Pause":"Play"})]})]})};n(14);var x=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"hamburger container",children:[Object(u.jsxs)("header",{className:"flex items-center justify-start gap-2",children:[Object(u.jsx)("img",{className:"logo",width:"32",height:"32",src:a,alt:"logo"}),Object(u.jsx)("h1",{className:"italic",children:"Timer"})]}),Object(u.jsx)("main",{children:Object(u.jsx)(h,{})}),Object(u.jsx)("footer",{className:"text-sm text-right",children:"\xa9 timer 2021"})]})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};s.a.render(Object(u.jsx)(x,{}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.0a211884.chunk.js.map