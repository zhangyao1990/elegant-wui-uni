import{c as l,k as s,t,l as a,p as o,a as i,b as e,_ as c}from"./page-wraper.DpqTXTZc.js";import{d as r,r as d,c as u,q as _,L as n,e as f,f as b,w as p,g as x,y as w,z as h,s as m,M as v,k as y,S as g,I as k,a as W,b as C,l as A,m as S,F as z,n as I,h as B,t as L,A as $}from"./index-72jEY8AL.js";import{_ as j}from"./demo-block.BGbMmBVB.js";const F=i(r({name:"wui-scroll-list",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...l,indicator:s(!0),indicatorWidth:t(60),indicatorBarWidth:t(20),indicatorColor:a(""),indicatorActiveColor:a(""),indicatorStyle:a("")},emits:["left","right"],setup(l,{emit:s}){const{proxy:t}=k(),a=l,i=s,e=d({scrollLeft:0,scrollWidth:0}),c=d(0),r=u((()=>{const l=e.value.scrollLeft,s=e.value.scrollWidth,t=v(Number(a.indicatorWidth))-v(Number(a.indicatorBarWidth));return{transform:`translateX(${l/(s-c.value)*t}px)`,width:`${a.indicatorBarWidth}rpx`,backgroundColor:a.indicatorActiveColor}})),W=u((()=>({width:`${a.indicatorWidth}rpx`,backgroundColor:a.indicatorColor}))),C=l=>{e.value=l.detail},A=()=>{i("left"),e.value.scrollLeft=0},S=()=>{i("right")},z=()=>{o(".wui-scroll-list",!1,t).then((l=>{l?c.value=l.width:setTimeout((()=>{z()}),10)}))};return _((()=>{n((()=>{z()}))})),(l,s)=>{const t=y,a=g;return f(),b(t,{class:"wui-scroll-list"},{default:p((()=>[x(a,{class:"wui-scroll-list__scroll-view","scroll-x":"","upper-threshold":0,"lower-threshold":0,onScroll:C,onScrolltoupper:A,onScrolltolower:S},{default:p((()=>[x(t,{class:"wui-scroll-list__content"},{default:p((()=>[w(l.$slots,"default",{},void 0,!0)])),_:3})])),_:3}),l.indicator?(f(),b(t,{key:0,class:"wui-scroll-list__indicator",style:h([l.indicatorStyle])},{default:p((()=>[x(t,{class:"wui-scroll-list__indicator-line",style:h([W.value])},{default:p((()=>[x(t,{class:"wui-scroll-list__indicator-line-bar",style:h([r.value])},null,8,["style"])])),_:1},8,["style"])])),_:1},8,["style"])):m("",!0)])),_:3})}}}),[["__scopeId","data-v-709ffd16"]]),M=i(r({__name:"Index",setup(l){function s(l){const s=16*Math.random()+1;return"wui-cool-bg-color-"+Math.floor(s)}return(l,t)=>{const a=W(C("wui-icon"),e),o=y,i=$,r=W(C("wui-scroll-list"),F),d=W(C("demo-block"),j),u=W(C("page-wraper"),c);return f(),b(u,null,{default:p((()=>[x(o,{class:"wrapper"},{default:p((()=>[x(d,{"custom-class":"pop",title:"基本使用"},{default:p((()=>[x(r,null,{default:p((()=>[x(o,null,{default:p((()=>[x(o,{class:"scroll-list-box"},{default:p((()=>[(f(),A(z,null,S(14,((l,t)=>x(o,{key:t,class:"scroll-list-box__item"},{default:p((()=>[x(o,{class:"scroll-list-box__content"},{default:p((()=>[x(o,{class:I(["scroll-list-box__icon wui-shadow-blur",[s()]])},{default:p((()=>[x(a,{name:"github-filled",size:"22px"})])),_:2},1032,["class"]),x(o,{class:"scroll-list-box__text"},{default:p((()=>[x(i,{class:"wui-text-ellipsis"},{default:p((()=>[B("汪汪队"+L(l),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024))),64))])),_:1}),x(o,{class:"scroll-list-box"},{default:p((()=>[(f(),A(z,null,S(14,((l,t)=>x(o,{key:t,class:"scroll-list-box__item"},{default:p((()=>[x(o,{class:"scroll-list-box__content"},{default:p((()=>[x(o,{class:I(["scroll-list-box__icon wui-shadow-blur",[s()]])},{default:p((()=>[x(a,{name:"github-filled",size:"22px"})])),_:2},1032,["class"]),x(o,{class:"scroll-list-box__text"},{default:p((()=>[x(i,{class:"wui-text-ellipsis"},{default:p((()=>[B("汪汪队"+L(l),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024))),64))])),_:1})])),_:1})])),_:1})])),_:1}),x(d,{"custom-class":"pop",title:"隐藏指示器"},{default:p((()=>[x(r,{indicator:!1},{default:p((()=>[x(o,{class:"scroll-list-box"},{default:p((()=>[(f(),A(z,null,S(14,((l,t)=>x(o,{key:t,class:"scroll-list-box__item"},{default:p((()=>[x(o,{class:"scroll-list-box__content"},{default:p((()=>[x(o,{class:I(["scroll-list-box__icon wui-shadow-blur",[s()]])},{default:p((()=>[x(a,{name:"github-filled",size:"22px"})])),_:2},1032,["class"]),x(o,{class:"scroll-list-box__text"},{default:p((()=>[x(i,{class:"wui-text-ellipsis"},{default:p((()=>[B("汪汪队"+L(l),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024))),64))])),_:1})])),_:1})])),_:1}),x(d,{"custom-class":"pop",title:"自定义指示器样式"},{default:p((()=>[x(r,{"indicator-width":100,"indicator-bar-width":30,"indicator-color":"#D6F4FA","indicator-active-color":"#27A1BA"},{default:p((()=>[x(o,{class:"scroll-list-box"},{default:p((()=>[(f(),A(z,null,S(14,((l,t)=>x(o,{key:t,class:"scroll-list-box__item"},{default:p((()=>[x(o,{class:"scroll-list-box__content"},{default:p((()=>[x(o,{class:I(["scroll-list-box__icon wui-shadow-blur",[s()]])},{default:p((()=>[x(a,{name:"github-filled",size:"22px"})])),_:2},1032,["class"]),x(o,{class:"scroll-list-box__text"},{default:p((()=>[x(i,{class:"wui-text-ellipsis"},{default:p((()=>[B("汪汪队"+L(l),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024))),64))])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-fe4ac77a"]]);export{M as default};
