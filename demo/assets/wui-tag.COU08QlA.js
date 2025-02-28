import{d as a,r as s,z as o,c as e,a as l,g as t,w as n,x as u,h as i,i as c,A as r,B as d,K as m,a6 as p,u as f,n as y,F as _,D as g,k as v,t as k,s as w}from"./index-C9W9llSX.js";import{c as b,k as h,l as C,o as $,b as x,a as I}from"./page-wraper.BAAFjrch.js";import{u as S}from"./useTranslate.Dk0WeNHw.js";const j=I(a({name:"wui-tag",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...b,useIconSlot:h(!1),type:C("default"),icon:C(""),closable:h(!1),plain:h(!1),dynamic:h(!1),color:C(""),bgColor:C(""),round:h(!1),mark:h(!1)},emits:["click","close","confirm"],setup(a,{emit:b}){const h=a,C=b,{translate:I}=S("tag"),j=s(""),V=s(""),B=s(!1);o([()=>h.useIconSlot,()=>h.icon,()=>h.plain,()=>h.dynamic,()=>h.round,()=>h.mark],(()=>{F()}),{deep:!0,immediate:!0}),o((()=>h.type),(a=>{if(!a)return;const s=["primary","danger","warning","success","default"];-1===s.indexOf(a)&&console.error(`type must be one of ${s.toString()}`),F()}),{deep:!0,immediate:!0}),o((()=>B.value),(()=>{F()}),{deep:!0,immediate:!0});const z=e((()=>`wui-tag ${h.customClass} ${j.value}`)),A=e((()=>{const a={};return!h.plain&&h.bgColor&&(a.background=h.bgColor),h.bgColor&&(a["border-color"]=h.bgColor),`${$(a)};${h.customStyle}`})),D=e((()=>{const a={};return h.color&&(a.color=h.color),$(a)}));function F(){const{type:a,plain:s,round:o,mark:e,dynamic:l,icon:t,useIconSlot:n}=h;let u=[];a&&u.push(`is-${a}`),s&&u.push("is-plain"),o&&u.push("is-round"),e&&u.push("is-mark"),l&&u.push("is-dynamic"),B.value&&u.push("is-dynamic-input"),(t||n)&&u.push("is-icon"),j.value=u.join(" ")}function G(a){C("click",a)}function H(a){C("close",a)}function K(){B.value=!0,V.value=""}function O(){U()}function T(a){U(),C("confirm",{value:a.detail.value})}function U(){B.value=!1}return(a,s)=>{const o=c,e=p,b=g;return t(),l(o,{class:w(z.value),style:d(A.value),onClick:G},{default:n((()=>[a.useIconSlot?(t(),l(o,{key:0,class:"wui-tag__icon"},{default:n((()=>[r(a.$slots,"icon",{},void 0,!0)])),_:3})):a.icon?(t(),l(x,{key:1,name:a.icon,"custom-class":"wui-tag__icon"},null,8,["name"])):u("",!0),i(o,{class:"wui-tag__text",style:d(D.value)},{default:n((()=>[r(a.$slots,"default",{},void 0,!0)])),_:3},8,["style"]),a.closable&&a.round?(t(),l(o,{key:2,class:"wui-tag__close",onClick:m(H,["stop"])},{default:n((()=>[i(x,{name:"error-fill"})])),_:1})):u("",!0),B.value&&a.dynamic?(t(),l(e,{key:3,class:"wui-tag__add-text",placeholder:f(I)("placeholder"),type:"text",focus:!0,modelValue:V.value,"onUpdate:modelValue":s[0]||(s[0]=a=>V.value=a),onBlur:O,onConfirm:T},null,8,["placeholder","modelValue"])):a.dynamic?(t(),l(o,{key:4,class:"wui-tag__text",style:d(D.value),onClick:m(K,["stop"])},{default:n((()=>[a.$slots.add?r(a.$slots,"add",{key:0},void 0,!0):(t(),y(_,{key:1},[i(x,{name:"add","custom-class":"wui-tag__add wui-tag__icon"}),i(b,null,{default:n((()=>[v(k(f(I)("add")),1)])),_:1})],64))])),_:3},8,["style"])):u("",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-e705f11d"]]);export{j as _};
