import{l,t as s,k as t,c as a,p as o,a as i,_ as e,b as c}from"./page-wraper.BAAFjrch.js";import{d as r,H as d,r as u,c as _,N as n,v as f,O as p,a as x,g as b,w,h,x as m,S as v,i as y,A as g,B as k,e as W,f as C,n as A,F as S,p as B,s as z,D as I,k as $,t as j}from"./index-C9W9llSX.js";import{_ as F}from"./demo-block.CQ-UumbW.js";const L=i(r({name:"wui-scroll-list",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...a,indicator:t(!0),indicatorWidth:s(60),indicatorBarWidth:s(20),indicatorColor:l(""),indicatorActiveColor:l(""),indicatorStyle:l("")},emits:["left","right"],setup(l,{emit:s}){const{proxy:t}=d(),a=l,i=s,e=u({scrollLeft:0,scrollWidth:0}),c=u(0),r=_((()=>{const l=e.value.scrollLeft,s=e.value.scrollWidth,t=n(Number(a.indicatorWidth))-n(Number(a.indicatorBarWidth));return{transform:`translateX(${l/(s-c.value)*t}px)`,width:`${a.indicatorBarWidth}rpx`,backgroundColor:a.indicatorActiveColor}})),W=_((()=>({width:`${a.indicatorWidth}rpx`,backgroundColor:a.indicatorColor}))),C=l=>{e.value=l.detail},A=()=>{i("left"),e.value.scrollLeft=0},S=()=>{i("right")},B=()=>{o(".wui-scroll-list",!1,t).then((l=>{l?c.value=l.width:setTimeout((()=>{B()}),10)}))};return f((()=>{p((()=>{B()}))})),(l,s)=>{const t=y,a=v;return b(),x(t,{class:"wui-scroll-list"},{default:w((()=>[h(a,{class:"wui-scroll-list__scroll-view","scroll-x":"","upper-threshold":0,"lower-threshold":0,onScroll:C,onScrolltoupper:A,onScrolltolower:S},{default:w((()=>[h(t,{class:"wui-scroll-list__content"},{default:w((()=>[g(l.$slots,"default",{},void 0,!0)])),_:3})])),_:3}),l.indicator?(b(),x(t,{key:0,class:"wui-scroll-list__indicator",style:k([l.indicatorStyle])},{default:w((()=>[h(t,{class:"wui-scroll-list__indicator-line",style:k([W.value])},{default:w((()=>[h(t,{class:"wui-scroll-list__indicator-line-bar",style:k([r.value])},null,8,["style"])])),_:1},8,["style"])])),_:1},8,["style"])):m("",!0)])),_:3})}}}),[["__scopeId","data-v-d53d0f91"]]),N=i(r({__name:"Index",setup(l){function s(l){const s=16*Math.random()+1;return"wui-cool-bg-color-"+Math.floor(s)}return(l,t)=>{const a=W(C("wui-icon"),c),o=y,i=I,r=W(C("wui-scroll-list"),L),d=W(C("demo-block"),F),u=W(C("page-wraper"),e);return b(),x(u,null,{default:w((()=>[h(o,{class:"wrapper"},{default:w((()=>[h(d,{"custom-class":"pop",title:"基本使用"},{default:w((()=>[h(r,null,{default:w((()=>[h(o,null,{default:w((()=>[h(o,{class:"scroll-list-box"},{default:w((()=>[(b(),A(S,null,B(14,((l,t)=>h(o,{key:t,class:"scroll-list-box__item"},{default:w((()=>[h(o,{class:"scroll-list-box__content"},{default:w((()=>[h(o,{class:z(["scroll-list-box__icon wui-shadow-blur",[s()]])},{default:w((()=>[h(a,{name:"github-filled",size:"22px"})])),_:2},1032,["class"]),h(o,{class:"scroll-list-box__text"},{default:w((()=>[h(i,{class:"wui-text-ellipsis"},{default:w((()=>[$("汪汪队"+j(l),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024))),64))])),_:1}),h(o,{class:"scroll-list-box"},{default:w((()=>[(b(),A(S,null,B(14,((l,t)=>h(o,{key:t,class:"scroll-list-box__item"},{default:w((()=>[h(o,{class:"scroll-list-box__content"},{default:w((()=>[h(o,{class:z(["scroll-list-box__icon wui-shadow-blur",[s()]])},{default:w((()=>[h(a,{name:"github-filled",size:"22px"})])),_:2},1032,["class"]),h(o,{class:"scroll-list-box__text"},{default:w((()=>[h(i,{class:"wui-text-ellipsis"},{default:w((()=>[$("汪汪队"+j(l),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024))),64))])),_:1})])),_:1})])),_:1})])),_:1}),h(d,{"custom-class":"pop",title:"隐藏指示器"},{default:w((()=>[h(r,{indicator:!1},{default:w((()=>[h(o,{class:"scroll-list-box"},{default:w((()=>[(b(),A(S,null,B(14,((l,t)=>h(o,{key:t,class:"scroll-list-box__item"},{default:w((()=>[h(o,{class:"scroll-list-box__content"},{default:w((()=>[h(o,{class:z(["scroll-list-box__icon wui-shadow-blur",[s()]])},{default:w((()=>[h(a,{name:"github-filled",size:"22px"})])),_:2},1032,["class"]),h(o,{class:"scroll-list-box__text"},{default:w((()=>[h(i,{class:"wui-text-ellipsis"},{default:w((()=>[$("汪汪队"+j(l),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024))),64))])),_:1})])),_:1})])),_:1}),h(d,{"custom-class":"pop",title:"自定义指示器样式"},{default:w((()=>[h(r,{"indicator-width":100,"indicator-bar-width":30,"indicator-color":"#D6F4FA","indicator-active-color":"#27A1BA"},{default:w((()=>[h(o,{class:"scroll-list-box"},{default:w((()=>[(b(),A(S,null,B(14,((l,t)=>h(o,{key:t,class:"scroll-list-box__item"},{default:w((()=>[h(o,{class:"scroll-list-box__content"},{default:w((()=>[h(o,{class:z(["scroll-list-box__icon wui-shadow-blur",[s()]])},{default:w((()=>[h(a,{name:"github-filled",size:"22px"})])),_:2},1032,["class"]),h(o,{class:"scroll-list-box__text"},{default:w((()=>[h(i,{class:"wui-text-ellipsis"},{default:w((()=>[$("汪汪队"+j(l),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024))),64))])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-fe4ac77a"]]);export{N as default};
