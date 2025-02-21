import{d as e,r as a,E as t,x as l,c as s,q as o,X as i,a as n,b as u,e as c,f as r,w as d,g as _,z as f,y as h,s as g,n as v,am as m,an as p,ao as w,k as b,h as y,t as k,u as x,I as C,l as T,F as S,m as W}from"./index-72jEY8AL.js";import{_ as z}from"./wui-button.jKeBZ4e9.js";import{c as F,z as H,f as I,E as P,g as j,n as $,e as q,o as R,p as B,a as D,_ as E,w as L}from"./page-wraper.DpqTXTZc.js";import{u as N}from"./useTranslate.C1TcN3no.js";import{_ as V}from"./wui-img.sKVSTgmO.js";import{_ as A}from"./demo-block.BGbMmBVB.js";const G=D(e({name:"wui-signature",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...F,penColor:{type:String,default:"#000"},lineWidth:{type:Number,default:3},clearText:String,confirmText:String,fileType:{type:String,default:"png"},quality:{type:Number,default:1},exportScale:{type:Number,default:1},disabled:{type:Boolean,default:!1},height:H,width:H,backgroundColor:String,disableScroll:{type:Boolean,default:!0},showFooter:{type:Boolean,default:!0}},emits:["start","end","signing","confirm","clear"],setup(e,{expose:T,emit:S}){I("wui-signature");const W=e,F=S,{translate:H}=N("signature"),{proxy:D}=C(),E=a(`signature${P()}`);const L=a(!1),V=a(1),A=t({canvasWidth:0,canvasHeight:0,ctx:null});l((()=>W.penColor),(()=>{Y()})),l((()=>W.lineWidth),(()=>{Y()}));const G=s((()=>{const e={};return $(W.width)&&(e.width=q(W.width)),$(W.height)&&(e.height=q(W.height)),`${R(e)};`})),J=s((()=>W.disableScroll)),U=e=>{e.preventDefault(),L.value=!0,Y(),F("start",e),Q(e)},X=e=>{e.preventDefault(),L.value=!1;const{ctx:a}=A;a&&(a.beginPath(),a.draw(!0)),F("end",e)},K=()=>{new Promise((e=>{const{ctx:a}=A;if(a)return e(a);setTimeout((()=>{B(`#${E.value}`,!1,D).then((a=>{var t,l;t=a.width,l=a.height,A.canvasHeight=l*V.value,A.canvasWidth=t*V.value,console.log("canvasState",A),A.ctx=m(E.value,D),A.ctx&&A.ctx.scale(V.value,V.value),e(A.ctx)}))}),500)})).then((()=>{const{ctx:e}=A;e&&$(W.backgroundColor)&&(e.fillStyle=W.backgroundColor,e.fillRect(0,0,A.canvasWidth,A.canvasHeight),e.draw())}))},M=()=>{const{canvasWidth:e,canvasHeight:a,ctx:t}=A;t&&(t.clearRect(0,0,e,a),$(W.backgroundColor)&&(t.fillStyle=W.backgroundColor,t.fillRect(0,0,e,a)),t.draw()),F("clear")},O=()=>{!function(){const{fileType:e,quality:a,exportScale:t}=W,{canvasWidth:l,canvasHeight:s}=A;p({width:l*t,height:s*t,destWidth:l*t,destHeight:s*t,fileType:e,quality:a,canvasId:E.value,canvas:null,success:e=>{const a={tempFilePath:e.tempFilePath,width:l*t/V.value,height:s*t/V.value,success:!0};F("confirm",a)},fail:()=>{const e={tempFilePath:"",width:l*t/V.value,height:s*t/V.value,success:!1};F("confirm",e)}},D)}()},Q=e=>{e.preventDefault();const{ctx:a}=A;if(!L.value||W.disabled||!a)return;const{x:t,y:l}=e.touches[0];a.lineTo(t,l),a.stroke(),a.draw(!0),a.moveTo(t,l),F("signing",e)};function Y(){const{ctx:e}=A;e&&(e.setLineWidth(W.lineWidth),e.setStrokeStyle(W.penColor),e.setLineJoin("round"),e.setLineCap("round"))}return o((()=>{K()})),i((()=>{})),T({clear:M,confirm:O}),(e,a)=>{const t=w,l=b,s=n(u("wui-button"),z);return c(),r(l,{class:v(`wui-signature ${e.customClass}`)},{default:d((()=>[_(l,{class:"wui-signature__content",style:f(G.value)},{default:d((()=>[_(t,{class:"wui-signature__content-canvas","canvas-id":E.value,width:A.canvasWidth,height:A.canvasHeight,id:E.value,"disable-scroll":J.value,onTouchstart:U,onTouchend:X,onTouchmove:Q},null,8,["canvas-id","width","height","id","disable-scroll"])])),_:1},8,["style"]),e.showFooter?(c(),r(l,{key:0,class:"wui-signature__footer"},{default:d((()=>[h(e.$slots,"footer",{clear:M,confirm:O},(()=>[_(s,{size:"small",plain:"",onClick:M},{default:d((()=>[y(k(e.clearText||x(H)("clearText")),1)])),_:1}),_(s,{size:"small",onClick:O},{default:d((()=>[y(k(e.confirmText||x(H)("confirmText")),1)])),_:1})]),!0)])),_:3})):g("",!0),_(j,{selector:"wui-signature"})])),_:3},8,["class"])}}}),[["__scopeId","data-v-1cc40eac"]]),J=D(e({__name:"Index",setup(e){const t=a({}),l=a(!0);function s(e){t.value=e}function o(){t.value={}}function i(){l.value=!1}const h=a(!1),m=a(["#080808","#E83A30"]),p=a(m.value[0]);function w(){h.value=!0}const k=a(),x=()=>{k.value.clear()},C=()=>{k.value.confirm()};function F(){h.value=!1,t.value={}}function H(e){console.log("handleSignConfirm",e),h.value=!1,t.value=e}return(e,a)=>{const I=n(u("wui-signature"),G),P=b,j=n(u("wui-img"),V),$=n(u("demo-block"),A),q=n(u("wui-button"),z),R=n(u("page-wraper"),E),B=n(u("wui-popup"),L);return c(),T(S,null,[_(R,null,{default:d((()=>[_($,{title:"基础用法"},{default:d((()=>[_(P,{class:"signature-h"},{default:d((()=>[_(I,{onConfirm:s,onClear:o,"export-scale":2})])),_:1}),t.value.tempFilePath?(c(),r(j,{key:0,style:{"margin-top":"10rpx"},mode:"widthFix",width:"100%",src:t.value.tempFilePath},null,8,["src"])):g("",!0)])),_:1}),_($,{title:"自定义画笔颜色"},{default:d((()=>[_(P,{class:"signature-h"},{default:d((()=>[_(I,{"pen-color":"red"})])),_:1})])),_:1}),_($,{title:"自定义画笔宽度"},{default:d((()=>[_(P,{class:"signature-h"},{default:d((()=>[_(I,{"line-width":6})])),_:1})])),_:1}),_($,{title:"自定义背景颜色"},{default:d((()=>[_(P,{class:"signature-h"},{default:d((()=>[_(I)])),_:1})])),_:1}),_($,{title:"自定义插槽"},{default:d((()=>[_(P,{class:"signature-h"},{default:d((()=>[_(I,{disabled:l.value,onConfirm:H},{footer:d((({clear:e,confirm:a})=>[l.value?(c(),r(q,{key:0,block:"",onClick:i},{default:d((()=>[y("开始签名")])),_:1})):g("",!0),l.value?g("",!0):(c(),r(q,{key:1,size:"small",plain:"",onClick:e},{default:d((()=>[y("清除")])),_:2},1032,["onClick"])),l.value?g("",!0):(c(),r(q,{key:2,size:"small",style:{"margin-left":"4px"},onClick:a},{default:d((()=>[y("确认")])),_:2},1032,["onClick"]))])),_:1},8,["disabled"])])),_:1})])),_:1}),_($,{title:"横屏"},{default:d((()=>[_(q,{block:"",onClick:w},{default:d((()=>[y("开始签名")])),_:1})])),_:1})])),_:1}),_(B,{modelValue:h.value,"onUpdate:modelValue":a[0]||(a[0]=e=>h.value=e),zIndex:9999,"lock-scroll":"","custom-style":"width:100%; height: 100%;",onClose:F},{default:d((()=>[_(P,{class:"wui-sign-board"},{default:d((()=>[_(P,{class:"wui-sign-board__content"},{default:d((()=>[h.value?(c(),r(I,{key:0,ref_key:"signRef",ref:k,showFooter:!1,"pen-color":p.value,onConfirm:H,"line-width":6},null,8,["pen-color"])):g("",!0)])),_:1}),_(P,{class:"wui-sign-board__tools"},{default:d((()=>[_(P,{class:"wui-sign-board__tools__color"},{default:d((()=>[(c(!0),T(S,null,W(m.value,((e,a)=>(c(),r(P,{key:a,class:v(["wui-sign-board__tools__color__item",[{"wui-sign-board__tools__color__item--active":p.value===e}]]),style:f({backgroundColor:e}),onClick:a=>{return t=e,void(p.value=t);var t}},null,8,["class","style","onClick"])))),128))])),_:1}),_(P,{class:"wui-sign-board__tools__button"},{default:d((()=>[_(P,{class:"wui-sign-board__tools__button__item"},{default:d((()=>[_(q,{type:"error",size:"small",onClick:x},{default:d((()=>[y("清除")])),_:1})])),_:1}),_(P,{class:"wui-sign-board__tools__button__item"},{default:d((()=>[_(q,{size:"small",onClick:C},{default:d((()=>[y("保存")])),_:1})])),_:1}),_(P,{class:"wui-sign-board__tools__button__item"},{default:d((()=>[_(q,{type:"warning",size:"small",onClick:F},{default:d((()=>[y("关闭")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}}),[["__scopeId","data-v-d24a4b60"]]);export{J as default};
