import{d as e,r as s,c as l,v as t,Y as a,e as o,f as r,w as i,g as c,A as u,u as n,q as h,B as p,K as d,k as v,S as f}from"./index-5xMnJkKH.js";import{c as w,l as g,E as _,e as m,o as z,a as x}from"./page-wraper.C2FurGxh.js";const y=x(e({name:"wui-resize",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...w,customContainerClass:g("")},emits:["resize"],setup(e,{emit:w}){const g=e,x=w,y=s(0),C=s(0),$=s(0),S=s(0),b=s(0),H=s(0),E=s(0),W=l((()=>{const e={width:m(H.value),height:m(b.value)};return`${z(e)};${g.customStyle}`}));let j=()=>{};const{proxy:I}=d(),R=s(`resize${_()}`);function k({lastWidth:e,lastHeight:s}){y.value=1e5+s,C.value=3*b.value+s,$.value=1e5+e,S.value=3*H.value+e}return t((()=>{a().in(I).select(`#${R.value}`).boundingClientRect().exec((([e])=>{let s=e.height,l=e.width;b.value=s,H.value=l,j=()=>{a().in(I).select(`#${R.value}`).boundingClientRect().exec((([e])=>{if(0==E.value++){const s={};["bottom","top","left","right","height","width"].forEach((l=>{s[l]=e[l]})),x("resize",s)}if(E.value<3)return;const t=e.height,a=e.width;b.value=t,H.value=a;const o=[];if(t!==s&&(s=t,o.push(1)),a!==l&&(l=a,o.push(1)),0!==o.length){const s={};["bottom","top","left","right","height","width"].forEach((l=>{s[l]=e[l]})),x("resize",s)}k({lastWidth:l,lastHeight:s})}))},k({lastWidth:l,lastHeight:s})}))})),(e,s)=>{const l=v,t=f;return o(),r(l,{class:h(`wui-resize ${e.customClass}`),style:p(W.value)},{default:i((()=>[c(l,{id:R.value,class:h(`wui-resize__container ${e.customContainerClass}`)},{default:i((()=>[u(e.$slots,"default",{},void 0,!0),c(t,{class:"wui-resize__wrapper","scroll-y":!0,"scroll-top":y.value,"scroll-x":!0,"scroll-left":$.value,onScroll:n(j)},{default:i((()=>[c(l,{class:"wui-resize__wrapper--placeholder",style:{height:"100000px",width:"100000px"}})])),_:1},8,["scroll-top","scroll-left","onScroll"]),c(t,{class:"wui-resize__wrapper","scroll-y":!0,"scroll-top":C.value,"scroll-x":!0,"scroll-left":S.value,onScroll:n(j)},{default:i((()=>[c(l,{class:"wui-resize__wrapper--placeholder",style:{height:"250%",width:"250%"}})])),_:1},8,["scroll-top","scroll-left","onScroll"])])),_:3},8,["id","class"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-2da6afce"]]);export{y as w};
