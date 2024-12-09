import{d as e,r as s,q as t,v as a,m as o,o as r,c as i,w as l,e as u,x as n,g as p,y as c,ad as d,f as m,t as g,F as b,n as v,ae as $,R as f,af as x,k as h,i as y}from"./index-ZLmWPcj7.js";import{f as k,l as w,i as C,g as S,w as _,t as I,Z as T,v as q,x as z,b as j,S as N}from"./page-wraper.DRSg2Trj.js";import{w as P}from"./wui-badge.CoW9TEjf.js";import{u as B}from"./useChildren.Cu3CY4jX.js";const D=Symbol("wui-grid"),G={...k,clickable:w(!1),square:w(!1),column:Number,border:w(!1),bgColor:C(""),gutter:Number},H=j(e({name:"wui-grid-item",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...k,customText:C(""),customIcon:C(""),icon:C(""),iconSize:C("26px"),text:String,url:String,linkType:C("navigateTo"),useSlot:w(!1),useIconSlot:w(!1),useTextSlot:w(!1),isDot:{type:Boolean,default:void 0},type:String,value:Number,max:Number,badgeProps:Object},emits:["itemclick"],setup(e,{expose:k,emit:w}){const C=e,j=w,N=s(""),B=s(""),G=s(""),H=s(0),E=s(!1),F=s(!0),{parent:L}=S(D),O=t((()=>I(L)&&I(L.children)?L.children.length:0)),R=t((()=>T(I(C.badgeProps)?q(C.badgeProps,z):{},q({max:C.max,isDot:C.isDot,modelValue:C.value,type:C.type},z))));function V(){if(!L)return;const e=L.children,s=L.props.column?100/L.props.column+"%":100/e.length+"%",t=L.props.gutter?`padding:${L.props.gutter}px ${L.props.gutter}px 0 0; background-color: transparent;`:"",a=L.props.square?`background-color:transparent; padding-bottom: 0; padding-top:${s}`:"";B.value=L.props.gutter&&L.props.square?`right: ${L.props.gutter}px; bottom:${L.props.gutter}px;height: auto; background-color: ${L.props.bgColor}`:`background-color: ${L.props.bgColor}`,F.value=Boolean(L.props.border),E.value=Boolean(L.props.square),H.value=Number(L.props.gutter),N.value=`width: ${s}; ${a||t}`}function Z(){if(L&&!L.props.clickable)return;const{url:e,linkType:s}=C;if(j("itemclick"),e)switch(s){case"navigateTo":h({url:e});break;case"reLaunch":x({url:e});break;case"redirectTo":f({url:e});break;case"switchTab":$({url:e});break;default:console.error(`[wui-design] warning(wui-grid-item): linkType can not be ${s}`)}}return a((()=>O.value),(()=>{if(!L)return;const e=L.props.column?100/L.props.column+"%":100/(O.value||1)+"%",s=L.props.gutter?`padding:${L.props.gutter}px ${L.props.gutter}px 0 0; background-color: transparent;`:"",t=L.props.square?`background-color:transparent; padding-bottom: 0; padding-top:${e}`:"";N.value=`width: ${e}; ${t||s}`}),{deep:!0,immediate:!0}),o((()=>{V()})),k({setiIemClass:function(e){G.value=e},itemClass:G,init:V}),(e,s)=>{const t=y;return r(),i(t,{class:v(`wui-grid-item ${F.value&&!H.value?G.value:""} ${e.customClass}`),onClick:Z,style:c(`${N.value};${e.customStyle}`)},{default:l((()=>[u(t,{class:v(`wui-grid-item__content ${E.value?"is-square":""} ${F.value&&H.value>0?"is-round":""}`),style:c(B.value)},{default:l((()=>[e.useSlot?n(e.$slots,"default",{key:0},void 0,!0):(r(),p(b,{key:1},[u(t,{style:c("width:"+e.iconSize+"; height: "+e.iconSize),class:"wui-grid-item__wrapper"},{default:l((()=>[u(P,d({"custom-class":"badge"},R.value),{default:l((()=>[e.useIconSlot?n(e.$slots,"icon",{key:0},void 0,!0):(r(),i(_,{key:1,name:e.icon,size:e.iconSize,"custom-class":e.customIcon},null,8,["name","size","custom-class"]))])),_:3},16)])),_:3},8,["style"]),e.useTextSlot?n(e.$slots,"text",{key:0},void 0,!0):(r(),i(t,{key:1,class:"wui-grid-item__text custom-text"},{default:l((()=>[m(g(e.text),1)])),_:1}))],64))])),_:3},8,["class","style"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-080e034c"]]),E=j(e({name:"wui-grid",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:G,setup(e){const s=()=>new Promise((e=>setTimeout(e,20))),o=e,{linkChildren:u,children:p}=B(D);u({props:o}),a((()=>o.column),((e,s)=>{e!==s&&((!e||e<=0)&&console.error("The number of columns attribute value is invalid. The attribute must be greater than 0 and it is not recommended to use a larger value attribute."),s&&g())}),{deep:!0,immediate:!0}),a((()=>o.border),(e=>{e&&Promise.resolve().then(s).then((()=>{g()}))}),{deep:!0,immediate:!0}),a((()=>p),(()=>{m()}),{deep:!0});const d=t((()=>`${o.gutter?"padding-left:"+o.gutter+"px;padding-bottom:"+o.gutter+"px;":""}${o.customStyle}`)),m=N((()=>{g()}),50);function g(){p&&p.forEach(((e,s)=>{if(o.border){const{column:t}=o;if(t){const a=p.length-1===s||(s+1)%t==0,o=s+1<=t;o&&e.$.exposed.setiIemClass("is-first"),a&&e.$.exposed.setiIemClass("is-right"),!o&&e.$.exposed.setiIemClass("is-border")}else e.$.exposed.setiIemClass("is-first");p.length-1===s&&e.$.exposed.setiIemClass(e.$.exposed.itemClass.value+" is-last")}e.$.exposed.init()}))}return(e,s)=>{const t=y;return r(),i(t,{class:v(`wui-grid ${e.customClass}`),style:c(d.value)},{default:l((()=>[n(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-bbaa43fb"]]);export{H as _,E as a};
