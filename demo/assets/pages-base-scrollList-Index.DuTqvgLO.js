import{c as l,k as s,t,l as a,p as o,a as i,b as e,_ as c}from"./page-wraper.C2FurGxh.js";import{d as r,r as d,c as u,v as _,N as n,e as f,f as p,w as x,g as b,A as w,B as h,x as m,O as v,k as y,S as g,K as k,a as C,b as W,n as A,p as S,F as B,q as z,h as I,t as $,C as j}from"./index-5xMnJkKH.js";import{_ as F}from"./demo-block.B3LgEloV.js";const L=i(r({name:"wui-scroll-list",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...l,indicator:s(!0),indicatorWidth:t(60),indicatorBarWidth:t(20),indicatorColor:a(""),indicatorActiveColor:a(""),indicatorStyle:a("")},emits:["left","right"],setup(l,{emit:s}){const{proxy:t}=k(),a=l,i=s,e=d({scrollLeft:0,scrollWidth:0}),c=d(0),r=u((()=>{const l=e.value.scrollLeft,s=e.value.scrollWidth,t=v(Number(a.indicatorWidth))-v(Number(a.indicatorBarWidth));return{transform:`translateX(${l/(s-c.value)*t}px)`,width:`${a.indicatorBarWidth}rpx`,backgroundColor:a.indicatorActiveColor}})),C=u((()=>({width:`${a.indicatorWidth}rpx`,backgroundColor:a.indicatorColor}))),W=l=>{e.value=l.detail},A=()=>{i("left"),e.value.scrollLeft=0},S=()=>{i("right")},B=()=>{o(".wui-scroll-list",!1,t).then((l=>{l?c.value=l.width:setTimeout((()=>{B()}),10)}))};return _((()=>{n((()=>{B()}))})),(l,s)=>{const t=y,a=g;return f(),p(t,{class:"wui-scroll-list"},{default:x((()=>[b(a,{class:"wui-scroll-list__scroll-view","scroll-x":"","upper-threshold":0,"lower-threshold":0,onScroll:W,onScrolltoupper:A,onScrolltolower:S},{default:x((()=>[b(t,{class:"wui-scroll-list__content"},{default:x((()=>[w(l.$slots,"default",{},void 0,!0)])),_:3})])),_:3}),l.indicator?(f(),p(t,{key:0,class:"wui-scroll-list__indicator",style:h([l.indicatorStyle])},{default:x((()=>[b(t,{class:"wui-scroll-list__indicator-line",style:h([C.value])},{default:x((()=>[b(t,{class:"wui-scroll-list__indicator-line-bar",style:h([r.value])},null,8,["style"])])),_:1},8,["style"])])),_:1},8,["style"])):m("",!0)])),_:3})}}}),[["__scopeId","data-v-709ffd16"]]),N=i(r({__name:"Index",setup(l){function s(l){const s=16*Math.random()+1;return"wui-cool-bg-color-"+Math.floor(s)}return(l,t)=>{const a=C(W("wui-icon"),e),o=y,i=j,r=C(W("wui-scroll-list"),L),d=C(W("demo-block"),F),u=C(W("page-wraper"),c);return f(),p(u,null,{default:x((()=>[b(o,{class:"wrapper"},{default:x((()=>[b(d,{"custom-class":"pop",title:"基本使用"},{default:x((()=>[b(r,null,{default:x((()=>[b(o,null,{default:x((()=>[b(o,{class:"scroll-list-box"},{default:x((()=>[(f(),A(B,null,S(14,((l,t)=>b(o,{key:t,class:"scroll-list-box__item"},{default:x((()=>[b(o,{class:"scroll-list-box__content"},{default:x((()=>[b(o,{class:z(["scroll-list-box__icon wui-shadow-blur",[s()]])},{default:x((()=>[b(a,{name:"github-filled",size:"22px"})])),_:2},1032,["class"]),b(o,{class:"scroll-list-box__text"},{default:x((()=>[b(i,{class:"wui-text-ellipsis"},{default:x((()=>[I("汪汪队"+$(l),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024))),64))])),_:1}),b(o,{class:"scroll-list-box"},{default:x((()=>[(f(),A(B,null,S(14,((l,t)=>b(o,{key:t,class:"scroll-list-box__item"},{default:x((()=>[b(o,{class:"scroll-list-box__content"},{default:x((()=>[b(o,{class:z(["scroll-list-box__icon wui-shadow-blur",[s()]])},{default:x((()=>[b(a,{name:"github-filled",size:"22px"})])),_:2},1032,["class"]),b(o,{class:"scroll-list-box__text"},{default:x((()=>[b(i,{class:"wui-text-ellipsis"},{default:x((()=>[I("汪汪队"+$(l),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024))),64))])),_:1})])),_:1})])),_:1})])),_:1}),b(d,{"custom-class":"pop",title:"隐藏指示器"},{default:x((()=>[b(r,{indicator:!1},{default:x((()=>[b(o,{class:"scroll-list-box"},{default:x((()=>[(f(),A(B,null,S(14,((l,t)=>b(o,{key:t,class:"scroll-list-box__item"},{default:x((()=>[b(o,{class:"scroll-list-box__content"},{default:x((()=>[b(o,{class:z(["scroll-list-box__icon wui-shadow-blur",[s()]])},{default:x((()=>[b(a,{name:"github-filled",size:"22px"})])),_:2},1032,["class"]),b(o,{class:"scroll-list-box__text"},{default:x((()=>[b(i,{class:"wui-text-ellipsis"},{default:x((()=>[I("汪汪队"+$(l),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024))),64))])),_:1})])),_:1})])),_:1}),b(d,{"custom-class":"pop",title:"自定义指示器样式"},{default:x((()=>[b(r,{"indicator-width":100,"indicator-bar-width":30,"indicator-color":"#D6F4FA","indicator-active-color":"#27A1BA"},{default:x((()=>[b(o,{class:"scroll-list-box"},{default:x((()=>[(f(),A(B,null,S(14,((l,t)=>b(o,{key:t,class:"scroll-list-box__item"},{default:x((()=>[b(o,{class:"scroll-list-box__content"},{default:x((()=>[b(o,{class:z(["scroll-list-box__icon wui-shadow-blur",[s()]])},{default:x((()=>[b(a,{name:"github-filled",size:"22px"})])),_:2},1032,["class"]),b(o,{class:"scroll-list-box__text"},{default:x((()=>[b(i,{class:"wui-text-ellipsis"},{default:x((()=>[I("汪汪队"+$(l),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024))),64))])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-fe4ac77a"]]);export{N as default};
