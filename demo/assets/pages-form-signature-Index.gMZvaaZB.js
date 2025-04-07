import{d as e,H as t,r as a,I as l,z as s,c as o,v as i,Z as n,e as u,f as c,n as r,g as d,h as f,w as h,a as _,x as p,i as v,B as g,ao as m,A as w,k as y,t as x,u as b,s as k,F as C,ap as T,aq as S,an as F,p as I}from"./index-bEG1XB1Q.js";import{_ as z}from"./wui-button.DhVOx6nU.js";import{c as P,z as W,f as R,E as H,n as j,e as q,o as B,g as $,p as D,a as L,_ as N,w as V}from"./page-wraper.C7tkx3Q6.js";import{u as A}from"./useTranslate.DEQ35e5z.js";import{_ as E}from"./wui-img.DKCkrWPh.js";import{_ as G}from"./demo-block.VBxGQQdw.js";const J=L(e({name:"wui-signature",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...P,penColor:{type:String,default:"#000"},lineWidth:{type:Number,default:3},clearText:String,confirmText:String,fileType:{type:String,default:"png"},quality:{type:Number,default:1},exportScale:{type:Number,default:1},disabled:{type:Boolean,default:!1},height:W,width:W,backgroundColor:String,disableScroll:{type:Boolean,default:!0},showFooter:{type:Boolean,default:!0},isRotate:{type:Boolean,default:!1},promptText:String},emits:["start","end","signing","confirm","clear"],setup(e,{expose:I,emit:P}){const W=R("wui-signature"),L=e,N=P,{translate:V}=A("signature"),{proxy:E}=t(),G=a(`signature${H()}`);const J=a(!1),M=a(1),U=l({canvasWidth:0,canvasHeight:0,ctx:null});s((()=>L.penColor),(()=>{le()})),s((()=>L.lineWidth),(()=>{le()}));const Z=o((()=>{const e={};return j(L.width)&&(e.width=q(L.width)),j(L.height)&&(e.height=q(L.height)),`${B(e)};`})),K=o((()=>L.disableScroll));let O=[];const Q=e=>{e.preventDefault(),J.value=!0,le(),N("start",e),ae(e)},X=e=>{e.preventDefault(),J.value=!1;const{ctx:t}=U;if(t){t.beginPath(),t.draw(!0);const a=e.changedTouches[0],l={x:a.x,y:a.y};O.unshift({x:l.x,y:l.y,r:0,time:Date.now()})}N("end",e)},Y=()=>{new Promise((e=>{const{ctx:t}=U;if(t)return e(t);setTimeout((()=>{D(`#${G.value}`,!1,E).then((t=>{var a,l;a=t.width,l=t.height,U.canvasHeight=l*M.value,U.canvasWidth=a*M.value,U.ctx=T(G.value,E),U.ctx&&U.ctx.scale(M.value,M.value),e(U.ctx)}))}),500)})).then((()=>{const{ctx:e}=U;e&&j(L.backgroundColor)&&(e.fillStyle=L.backgroundColor,e.fillRect(0,0,U.canvasWidth,U.canvasHeight),e.draw(),O=[])}))},ee=()=>{const{canvasWidth:e,canvasHeight:t,ctx:a}=U;a&&(a.clearRect(0,0,e,t),j(L.backgroundColor)&&(a.fillStyle=L.backgroundColor,a.fillRect(0,0,e,t)),a.draw(),O=[]),N("clear")},te=()=>{!function(){const{fileType:e,quality:t,exportScale:a}=L,{canvasWidth:l,canvasHeight:s,ctx:o}=U;if(!O.length||!o)return void W.show({msg:L.promptText||V("promptText")});S({width:l*a,height:s*a,destWidth:l*a,destHeight:s*a,fileType:e,quality:t,canvasId:G.value,canvas:null,success:e=>{if(L.isRotate)t=e.tempFilePath,F({src:t,success:e=>{let t=T("canvasRotateId",E),a=300/(e.height/e.width),l=300;t.translate(l/2,a/2),t.rotate(270*Math.PI/180),t.drawImage(e.path,-a/2,-150,a,l),t.draw(!1,(e=>{S({canvasId:"canvasRotateId",fileType:"png",quality:1,success(e){const t={tempFilePath:e.tempFilePath,width:a*L.exportScale/M.value,height:l*L.exportScale/M.value,success:!0};N("confirm",t)}},E)}))}});else{const t={tempFilePath:e.tempFilePath,width:l*a/M.value,height:s*a/M.value,success:!0};N("confirm",t)}var t},fail:()=>{const e={tempFilePath:"",width:l*a/M.value,height:s*a/M.value,success:!1};N("confirm",e)}},E)}()},ae=e=>{e.preventDefault();const{ctx:t}=U;if(!J.value||L.disabled||!t)return;const{x:a,y:l}=e.touches[0];t.lineTo(a,l),t.stroke(),t.draw(!0),t.moveTo(a,l),N("signing",e)};function le(){const{ctx:e}=U;e&&(e.setLineWidth(L.lineWidth),e.setStrokeStyle(L.penColor),e.setLineJoin("round"),e.setLineCap("round"))}return i((()=>{Y()})),n((()=>{})),I({clear:ee,confirm:te}),(e,t)=>{const a=m,l=v,s=u(c("wui-button"),z);return d(),r(C,null,[f(l,{class:k(`wui-signature ${e.customClass}`)},{default:h((()=>[f(l,{class:"wui-signature__content",style:g(Z.value)},{default:h((()=>[f(a,{class:"wui-signature__content-canvas","canvas-id":G.value,width:U.canvasWidth,height:U.canvasHeight,id:G.value,"disable-scroll":K.value,onTouchstart:Q,onTouchend:X,onTouchmove:ae},null,8,["canvas-id","width","height","id","disable-scroll"])])),_:1},8,["style"]),e.showFooter?(d(),_(l,{key:0,class:"wui-signature__footer"},{default:h((()=>[w(e.$slots,"footer",{clear:ee,confirm:te},(()=>[f(s,{size:"small",plain:"",onClick:ee},{default:h((()=>[y(x(e.clearText||b(V)("clearText")),1)])),_:1}),f(s,{size:"small",onClick:te},{default:h((()=>[y(x(e.confirmText||b(V)("confirmText")),1)])),_:1})]),!0)])),_:3})):p("",!0),f($,{selector:"wui-signature"})])),_:3},8,["class"]),f(a,{style:{position:"fixed",left:"9999px",bottom:"9999px"},"canvas-id":"canvasRotateId"})],64)}}}),[["__scopeId","data-v-6f500b56"]]),M=L(e({__name:"Index",setup(e){const t=a({}),l=a(!0);function s(e){t.value=e}function o(){t.value={}}function i(){l.value=!1}const n=a(!1),m=a(["#080808","#E83A30"]),w=a(m.value[0]);function x(){n.value=!0}const b=a(),T=()=>{b.value.clear()},S=()=>{b.value.confirm()};function F(){n.value=!1,t.value={}}function P(e){console.log("handleSignConfirm",e),n.value=!1,t.value=e}return(e,a)=>{const W=u(c("wui-signature"),J),R=v,H=u(c("wui-img"),E),j=u(c("demo-block"),G),q=u(c("wui-button"),z),B=u(c("page-wraper"),N),$=u(c("wui-popup"),V);return d(),r(C,null,[f(B,null,{default:h((()=>[f(j,{title:"基础用法"},{default:h((()=>[f(R,{class:"signature-h"},{default:h((()=>[f(W,{onConfirm:s,onClear:o,"export-scale":2})])),_:1}),t.value.tempFilePath?(d(),_(H,{key:0,style:{"margin-top":"10rpx"},mode:"widthFix",width:"100%",src:t.value.tempFilePath},null,8,["src"])):p("",!0)])),_:1}),f(j,{title:"自定义画笔颜色"},{default:h((()=>[f(R,{class:"signature-h"},{default:h((()=>[f(W,{"pen-color":"red"})])),_:1})])),_:1}),f(j,{title:"自定义画笔宽度"},{default:h((()=>[f(R,{class:"signature-h"},{default:h((()=>[f(W,{"line-width":6})])),_:1})])),_:1}),f(j,{title:"自定义背景颜色"},{default:h((()=>[f(R,{class:"signature-h"},{default:h((()=>[f(W)])),_:1})])),_:1}),f(j,{title:"自定义插槽"},{default:h((()=>[f(R,{class:"signature-h"},{default:h((()=>[f(W,{disabled:l.value,onConfirm:P},{footer:h((({clear:e,confirm:t})=>[l.value?(d(),_(q,{key:0,block:"",onClick:i},{default:h((()=>[y("开始签名")])),_:1})):p("",!0),l.value?p("",!0):(d(),_(q,{key:1,size:"small",plain:"",onClick:e},{default:h((()=>[y("清除")])),_:2},1032,["onClick"])),l.value?p("",!0):(d(),_(q,{key:2,size:"small",style:{"margin-left":"4px"},onClick:t},{default:h((()=>[y("确认")])),_:2},1032,["onClick"]))])),_:1},8,["disabled"])])),_:1})])),_:1}),f(j,{title:"横屏"},{default:h((()=>[f(q,{block:"",onClick:x},{default:h((()=>[y("开始签名")])),_:1})])),_:1})])),_:1}),f($,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=e=>n.value=e),zIndex:9999,"lock-scroll":"","custom-style":"width:100%; height: 100%;",onClose:F},{default:h((()=>[f(R,{class:"wui-sign-board"},{default:h((()=>[f(R,{class:"wui-sign-board__content"},{default:h((()=>[n.value?(d(),_(W,{key:0,ref_key:"signRef",ref:b,showFooter:!1,isRotate:!0,"pen-color":w.value,onConfirm:P,"line-width":6},null,8,["pen-color"])):p("",!0)])),_:1}),f(R,{class:"wui-sign-board__tools"},{default:h((()=>[f(R,{class:"wui-sign-board__tools__color"},{default:h((()=>[(d(!0),r(C,null,I(m.value,((e,t)=>(d(),_(R,{key:t,class:k(["wui-sign-board__tools__color__item",[{"wui-sign-board__tools__color__item--active":w.value===e}]]),style:g({backgroundColor:e}),onClick:t=>{return a=e,void(w.value=a);var a}},null,8,["class","style","onClick"])))),128))])),_:1}),f(R,{class:"wui-sign-board__tools__button"},{default:h((()=>[f(R,{class:"wui-sign-board__tools__button__item"},{default:h((()=>[f(q,{type:"error",size:"small",onClick:T},{default:h((()=>[y("清除")])),_:1})])),_:1}),f(R,{class:"wui-sign-board__tools__button__item"},{default:h((()=>[f(q,{size:"small",onClick:S},{default:h((()=>[y("保存")])),_:1})])),_:1}),f(R,{class:"wui-sign-board__tools__button__item"},{default:h((()=>[f(q,{type:"warning",size:"small",onClick:F},{default:h((()=>[y("关闭")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}}),[["__scopeId","data-v-0ea20563"]]);export{M as default};
