import{d as e,r as l,v as o,o as t,c as a,w as n,e as u,y as s,k as i,l as c,i as r,a as v,b as d,f}from"./index-CUFtuoyb.js";import{_ as m}from"./wui-button.DUavKKI0.js";import{_ as p}from"./demo-block.Ctz988W3.js";import{f as h,l as w,i as _,m as C,w as k,k as b,b as g,a as x}from"./page-wraper.DLIaUpRJ.js";const y=g(e({name:"wui-curtain",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...h,value:w(!1),closePosition:_("inset"),src:String,to:String,width:Number,closeOnClickModal:w(!1),hideWhenClose:w(!0),zIndex:C(10)},emits:["beforeenter","enter","afterenter","beforeleave","leave","afterleave","close","closed","click-modal","load","error","click"],setup(e,{emit:v}){const d=e,f=v,m=l(!1),p=l(!0),h=l(""),w=l(1);function _(){let e="";d.width&&(e+=`width: ${d.width}px ;`,e+=`height: ${d.width/w.value}px`),h.value=e}function C(){f("beforeenter")}function g(){f("enter")}function x(){f("afterenter")}function y(){f("beforeleave")}function I(){f("leave")}function j(){f("afterleave"),f("closed")}function z(){m.value=!1,f("close")}function E(){f("click-modal")}function L(e){const{height:l,width:o}=e.detail;w.value=o/l,p.value=!0,_(),f("load")}function $(){p.value=!1,f("error")}function M(){d.to&&i({url:d.to}),f("click"),z()}return o((()=>d.value),(()=>{d.value&&p.value?m.value=!0:(m.value=!1,z())}),{deep:!0,immediate:!0}),o((()=>d.width),(()=>{_()}),{deep:!0,immediate:!0}),(e,l)=>{const o=c,i=r;return t(),a(i,{class:"wui-curtain-wrapper"},{default:n((()=>[u(b,{modelValue:m.value,"onUpdate:modelValue":l[0]||(l[0]=e=>m.value=e),transition:"zoom-in",position:"center","close-on-click-modal":e.closeOnClickModal,"hide-when-close":e.hideWhenClose,"z-index":e.zIndex,onBeforeEnter:C,onEnter:g,onAfterEnter:x,onBeforeLeave:y,onLeave:I,onAfterLeave:j,onClose:z,onClickModal:E,"custom-class":`wui-curtain ${e.customClass}`,"custom-style":e.customStyle},{default:n((()=>[u(i,{class:"wui-curtain__content"},{default:n((()=>[u(o,{src:e.src,class:"wui-curtain__content-img",style:s(h.value),onClick:M,onError:$,onLoad:L},null,8,["src","style"]),u(k,{name:"close-outline","custom-class":`wui-curtain__content-close ${e.closePosition}`,onClick:z},null,8,["custom-class"])])),_:1})])),_:1},8,["modelValue","close-on-click-modal","hide-when-close","z-index","custom-class","custom-style"])])),_:1})}}}),[["__scopeId","data-v-61b0ecad"]]),I=g(e({__name:"Index",setup(e){const o=l(!1),s=l(!1),i=l(!1),c=l(!1),h=l(!1),w=l(!1),_=l(!1),C=l(!1),k=l("https://img20.360buyimg.com/da/jfs/t1/141592/25/8861/261559/5f68d8c1E33ed78ab/698ad655bfcfbaed.png"),b=l("/pages/index/index");function g(){o.value=!0}function I(){o.value=!1}function j(){s.value=!0}function z(){s.value=!1}function E(){i.value=!0}function L(){i.value=!1}function $(){c.value=!0}function M(){c.value=!1}function S(){h.value=!0}function V(){h.value=!1}function A(){w.value=!0}function B(){w.value=!1}function O(){_.value=!0}function P(){_.value=!1}function W(){C.value=!0}function G(){C.value=!1}return(e,l)=>{const H=v(d("wui-button"),m),N=v(d("demo-block"),p),U=r,q=v(d("wui-curtain"),y),D=v(d("page-wraper"),x);return t(),a(D,null,{default:n((()=>[u(N,{title:"基本用法"},{default:n((()=>[u(H,{onClick:g},{default:n((()=>[f("关闭按钮在内部")])),_:1})])),_:1}),u(N,{title:"修改按钮位置"},{default:n((()=>[u(U,null,{default:n((()=>[u(H,{onClick:j},{default:n((()=>[f("左上")])),_:1}),u(H,{onClick:E},{default:n((()=>[f("顶部")])),_:1}),u(H,{onClick:$},{default:n((()=>[f("右上")])),_:1})])),_:1}),u(U,null,{default:n((()=>[u(H,{onClick:S},{default:n((()=>[f("左下")])),_:1}),u(H,{onClick:A},{default:n((()=>[f("底部")])),_:1}),u(H,{onClick:O},{default:n((()=>[f("右下")])),_:1})])),_:1})])),_:1}),u(N,{title:"点击遮罩关闭"},{default:n((()=>[u(H,{onClick:W},{default:n((()=>[f("点击遮罩关闭")])),_:1})])),_:1}),u(q,{value:o.value,src:k.value,to:b.value,onClose:I,width:280},null,8,["value","src","to"]),u(q,{value:s.value,src:k.value,to:b.value,"close-position":"top-left",width:200,onClose:z},null,8,["value","src","to"]),u(q,{value:i.value,src:k.value,to:b.value,"close-position":"top",width:200,onClose:L},null,8,["value","src","to"]),u(q,{value:c.value,src:k.value,to:b.value,"close-position":"top-right",width:240,onClose:M},null,8,["value","src","to"]),u(q,{value:h.value,src:k.value,to:b.value,"close-position":"bottom-left",width:240,onClose:V},null,8,["value","src","to"]),u(q,{value:w.value,src:k.value,to:b.value,"close-position":"bottom",width:240,onClose:B},null,8,["value","src","to"]),u(q,{value:_.value,src:k.value,to:b.value,"close-position":"bottom-right",width:240,onClose:P},null,8,["value","src","to"]),u(q,{value:C.value,src:k.value,to:b.value,"close-position":"bottom-right",width:240,onClose:G,"close-on-click-modal":!0},null,8,["value","src","to"])])),_:1})}}}),[["__scopeId","data-v-fb374cfc"]]);export{I as default};