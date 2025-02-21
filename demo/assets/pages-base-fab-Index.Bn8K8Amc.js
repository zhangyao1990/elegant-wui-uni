import{c as e,k as a,l as t,m as l,b as o,j as s,q as u,n as i,o as d,p as n,r as c,a as r,f as m,s as p,g as v,i as f,_}from"./page-wraper.DpqTXTZc.js";import{d as b,r as h,D as g,x as w,E as y,c as x,q as k,G as C,e as V,f as T,w as z,g as I,y as j,H as L,z as $,s as U,n as Q,I as H,k as O,J as F,a as q,b as G,l as R,h as X,u as Y,F as D}from"./index-72jEY8AL.js";import{_ as E,a as J}from"./wui-radio-group.DA3AFxFW.js";import{_ as K}from"./demo-block.BGbMmBVB.js";import{_ as S}from"./wui-button.jKeBZ4e9.js";import{r as W,p as A,c as B}from"./clickoutside.CJmLG0WC.js";import{u as M}from"./useRaf.BJOhbxGn.js";import"./useChildren.BgpN10K6.js";const N=r(b({name:"wui-fab",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...e,active:a(!1),type:t("primary"),position:t("right-bottom"),direction:t("top"),disabled:a(!1),inactiveIcon:t("add"),activeIcon:t("close"),zIndex:l(99),draggable:a(!1),gap:{type:Object,default:()=>({})},expandable:a(!0)},emits:["update:active","click"],setup(e,{expose:a,emit:t}){const l=e,r=t,m=h(!1),p=h(!1),v=g(u,null),{proxy:f}=H();w((()=>l.active),(e=>{p.value=e}),{immediate:!0,deep:!0}),w((()=>p.value),(e=>{e&&(v&&v.closeOther?v.closeOther(f):B(f))}));const _=h(l.direction);w((()=>l.direction),(e=>_.value=e)),w((()=>l.position),(()=>Y()));const b=h(0),q=h(0),G=y({width:0,height:0}),R=y({width:56,height:56}),X=y({minTop:0,minLeft:0,maxTop:0,maxLeft:0});function Y(){const e=l.position,{minLeft:a,minTop:t,maxLeft:o,maxTop:s}=X;"left-top"===e?(b.value=t,q.value=a):"right-top"===e?(b.value=t,q.value=o):"left-bottom"===e?(b.value=s,q.value=a):"right-bottom"===e&&(b.value=s,q.value=o)}const D=y({x:0,y:0}),E=h(!1);function J(e){if(!1===l.draggable)return;const a=e.touches[0];D.x=a.clientX-q.value,D.y=a.clientY-b.value,E.value=!1}function K(e){if(!1===l.draggable)return;const a=e.touches[0],{minLeft:t,minTop:o,maxLeft:s,maxTop:u}=X;let i=a.clientX-D.x,d=a.clientY-D.y;i<t?i=t:i>s&&(i=s),d<o?d=o:d>u&&(d=u),b.value=d,q.value=i}function N(){if(!1===l.draggable)return;const e=G.width/2,a=q.value+R.width/2;E.value=!0,a<e?(q.value=X.minLeft,_.value="right"):(q.value=X.maxLeft,_.value="left")}const P=x((()=>{const e={top:b.value+"px",left:q.value+"px",transition:E.value?"all ease 0.3s":"none"};return i(l.zIndex)&&(e["z-index"]=l.zIndex),`${d(e)};${l.customStyle}`}));function Z(){l.disabled||(l.expandable?(p.value=!p.value,r("update:active",p.value)):r("click"))}return k((()=>{v&&v.pushToQueue?v.pushToQueue(f):A(f);const{start:e}=M((async()=>{await async function(){const e=F();try{const e=await n("#trigger",!1,f);R.width=e.width||56,R.height=e.height||56}catch(u){console.log(u)}const{top:a=16,left:t=16,right:o=16,bottom:s=16}=l.gap;G.width=e.windowWidth,G.height=c?e.windowTop+e.windowHeight:e.windowHeight,X.minTop=c?e.windowTop+a:a,X.minLeft=t,X.maxLeft=G.width-R.width-o,X.maxTop=G.height-R.height-s}(),Y(),m.value=!0}));e()})),C((()=>{v&&v.removeFromQueue?v.removeFromQueue(f):W(f)})),a({open:function(){p.value=!0,r("update:active",!0)},close:function(){p.value=!1,r("update:active",!1)}}),(e,a)=>{const t=O;return V(),T(t,{onTouchmove:L(K,["stop","prevent"]),onTouchstart:J,onTouchend:N,class:Q(`wui-fab ${e.customClass}`),style:$(P.value),onClick:a[1]||(a[1]=L((()=>{}),["stop"]))},{default:z((()=>[I(t,{onClick:a[0]||(a[0]=L((()=>{}),["stop"])),style:$({visibility:m.value?"visible":"hidden"}),id:"trigger"},{default:z((()=>[e.$slots.trigger?j(e.$slots,"trigger",{key:0},void 0,!0):(V(),T(S,{key:1,onClick:Z,"custom-class":"wui-fab__trigger",round:"",type:e.type,disabled:e.disabled},{default:z((()=>[I(o,{"custom-class":"wui-fab__icon",name:p.value?e.activeIcon:e.inactiveIcon},null,8,["name"])])),_:1},8,["type","disabled"]))])),_:3},8,["style"]),e.expandable?(V(),T(s,{key:0,"enter-class":`wui-fab__transition-enter--${_.value}`,"enter-active-class":"wui-fab__transition-enter-active","leave-to-class":`wui-fab__transition-leave-to--${_.value}`,"leave-active-class":"wui-fab__transition-leave-active","custom-class":`wui-fab__actions wui-fab__actions--${_.value}`,show:p.value,duration:300},{default:z((()=>[j(e.$slots,"default",{},void 0,!0)])),_:3},8,["enter-class","leave-to-class","custom-class","show"])):U("",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-3ad3c8bf"]]),P=r(b({__name:"Index",setup(e){const{show:a}=m(),t=h(!1),l=h("primary"),s=h("left-bottom"),u=h("top"),i=h(!1),d=h(!1),n=h(!1),{closeOutside:c}=p();function r(){a("分享给朋友")}return(e,m)=>{const p=q(G("wui-toast"),v),b=q(G("wui-radio"),E),h=q(G("wui-radio-group"),J),g=q(G("demo-block"),K),w=q(G("wui-switch"),f),y=O,x=q(G("wui-button"),S),k=q(G("wui-icon"),o),C=q(G("wui-fab"),N),j=q(G("page-wraper"),_);return V(),R(D,null,[I(p),I(y,{class:"fab",onClick:Y(c)},{default:z((()=>[I(j,null,{default:z((()=>[I(g,{title:"悬浮按钮主题色"},{default:z((()=>[I(h,{modelValue:l.value,"onUpdate:modelValue":m[0]||(m[0]=e=>l.value=e),inline:"",shape:"dot"},{default:z((()=>[I(b,{value:"primary","custom-class":"custom-radio"},{default:z((()=>[X("主要按钮")])),_:1}),I(b,{value:"success","custom-class":"custom-radio"},{default:z((()=>[X("成功按钮")])),_:1}),I(b,{value:"warning","custom-class":"custom-radio"},{default:z((()=>[X("警告按钮")])),_:1}),I(b,{value:"error","custom-class":"custom-radio"},{default:z((()=>[X("危险按钮")])),_:1}),I(b,{value:"info","custom-class":"custom-radio"},{default:z((()=>[X("信息按钮")])),_:1})])),_:1},8,["modelValue"])])),_:1}),I(g,{title:"悬浮按钮位置"},{default:z((()=>[I(h,{modelValue:s.value,"onUpdate:modelValue":m[1]||(m[1]=e=>s.value=e),inline:"",shape:"dot"},{default:z((()=>[I(b,{value:"left-top","custom-class":"custom-radio"},{default:z((()=>[X("左上")])),_:1}),I(b,{value:"right-top","custom-class":"custom-radio"},{default:z((()=>[X("右上")])),_:1}),I(b,{value:"left-bottom","custom-class":"custom-radio"},{default:z((()=>[X("左下")])),_:1}),I(b,{value:"right-bottom","custom-class":"custom-radio"},{default:z((()=>[X("右下")])),_:1})])),_:1},8,["modelValue"])])),_:1}),I(g,{title:"菜单弹出方向"},{default:z((()=>[I(h,{modelValue:u.value,"onUpdate:modelValue":m[2]||(m[2]=e=>u.value=e),inline:"",shape:"dot"},{default:z((()=>[I(b,{value:"top","custom-class":"custom-radio"},{default:z((()=>[X("向上")])),_:1}),I(b,{value:"bottom","custom-class":"custom-radio"},{default:z((()=>[X("向下")])),_:1}),I(b,{value:"right","custom-class":"custom-radio"},{default:z((()=>[X("向右")])),_:1}),I(b,{value:"left","custom-class":"custom-radio"},{default:z((()=>[X("向左")])),_:1})])),_:1},8,["modelValue"])])),_:1}),I(g,{title:"禁用"},{default:z((()=>[I(y,{onClick:m[4]||(m[4]=L((()=>{}),["stop"]))},{default:z((()=>[I(w,{modelValue:i.value,"onUpdate:modelValue":m[3]||(m[3]=e=>i.value=e),size:"22px"},null,8,["modelValue"])])),_:1})])),_:1}),I(g,{title:"可拖动"},{default:z((()=>[I(y,{onClick:m[6]||(m[6]=L((()=>{}),["stop"]))},{default:z((()=>[I(w,{modelValue:d.value,"onUpdate:modelValue":m[5]||(m[5]=e=>d.value=e),size:"22px"},null,8,["modelValue"])])),_:1})])),_:1}),I(g,{title:"切换展示"},{default:z((()=>[I(y,{onClick:m[8]||(m[8]=L((()=>{}),["stop"]))},{default:z((()=>[I(x,{type:"primary",onClick:m[7]||(m[7]=e=>t.value=!t.value),round:""},{default:z((()=>[X("切换")])),_:1})])),_:1})])),_:1}),I(g,{title:"自定义触发器"},{default:z((()=>[I(y,{onClick:m[10]||(m[10]=L((()=>{}),["stop"]))},{default:z((()=>[I(w,{modelValue:n.value,"onUpdate:modelValue":m[9]||(m[9]=e=>n.value=e),size:"22px"},null,8,["modelValue"])])),_:1})])),_:1}),n.value?(V(),T(C,{key:1,position:"left-bottom",draggable:d.value,expandable:!1},{trigger:z((()=>[I(x,{onClick:r,icon:"share",type:"error"},{default:z((()=>[X("分享给朋友")])),_:1})])),_:1},8,["draggable"])):(V(),T(C,{key:0,active:t.value,"onUpdate:active":m[15]||(m[15]=e=>t.value=e),disabled:i.value,type:l.value,position:s.value,direction:u.value,draggable:d.value,onClick:m[16]||(m[16]=e=>Y(a)("我被点了"))},{default:z((()=>[I(x,{onClick:m[11]||(m[11]=e=>Y(a)("一键三连")),disabled:i.value,"custom-class":"custom-button",type:"primary",round:""},{default:z((()=>[I(k,{name:"github-filled",size:"22px"})])),_:1},8,["disabled"]),I(x,{onClick:m[12]||(m[12]=e=>Y(a)("我要收藏")),disabled:i.value,"custom-class":"custom-button",type:"success",round:""},{default:z((()=>[I(k,{name:"star",size:"22px"})])),_:1},8,["disabled"]),I(x,{onClick:m[13]||(m[13]=e=>Y(a)("我要投币")),disabled:i.value,"custom-class":"custom-button",type:"error",round:""},{default:z((()=>[I(k,{name:"money-circle",size:"22px"})])),_:1},8,["disabled"]),I(x,{onClick:m[14]||(m[14]=e=>Y(a)("我要点赞")),disabled:i.value,"custom-class":"custom-button",type:"warning",round:""},{default:z((()=>[I(k,{name:"thumb-up",size:"22px"})])),_:1},8,["disabled"])])),_:1},8,["active","disabled","type","position","direction","draggable"]))])),_:1})])),_:1},8,["onClick"])],64)}}}),[["__scopeId","data-v-4eadb228"]]);export{P as default};
