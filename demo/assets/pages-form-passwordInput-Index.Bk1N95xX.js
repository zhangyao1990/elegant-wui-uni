import{d as e,e as l,f as a,w as u,g as s,n as o,p as t,F as d,q as n,h as i,t as r,x as m,B as v,k as p,u as c,C as f,r as V,z as _,a as b,b as w}from"./index-5xMnJkKH.js";import{c as g,l as y,k as h,t as k,m as U,e as x,a as I,_ as F}from"./page-wraper.C2FurGxh.js";import{_ as j}from"./wui-number-keyboard.1phwWjmW.js";import{_ as C}from"./demo-block.B3LgEloV.js";import"./useTouch.kzWXrY9K.js";const T=I(e({name:"wui-password-input",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...g,modelValue:y(""),mask:h(!0),info:y(""),errorInfo:y(""),gutter:k(0),length:U(6),focused:h(!0)},emits:["focus"],setup(e,{emit:V}){const _=V;function b(e){_("focus",e)}return(e,V)=>{const _=p,w=f;return l(),a(_,{class:n(`wui-password-input ${e.customClass}`),style:v(e.customStyle)},{default:u((()=>[s(_,{onTouchstart:b,class:"wui-password-input__security"},{default:u((()=>[(l(!0),o(d,null,t(e.length,((o,t)=>(l(),a(_,{key:t,class:n("wui-password-input__item "+(e.gutter?"":"is-border")),style:v({marginLeft:0!==t&&e.gutter?c(x)(e.gutter):0})},{default:u((()=>[e.focused&&t===e.modelValue.length?(l(),a(_,{key:0,class:"wui-password-input__cursor"})):(l(),a(_,{key:1,class:n("wui-password-input__value")},{default:u((()=>[s(_,{style:v({visibility:e.mask&&e.modelValue[t]?"visible":"hidden"}),class:"wui-password-input__mask"},null,8,["style"]),!e.mask&&e.modelValue[t]?(l(),a(w,{key:0},{default:u((()=>[i(r(e.modelValue[t]),1)])),_:2},1024)):m("",!0)])),_:2},1024))])),_:2},1032,["class","style"])))),128))])),_:1}),e.info||e.errorInfo?(l(),a(_,{key:0,class:n("wui-password-input__info "+(e.errorInfo?"is-error":""))},{default:u((()=>[i(r(e.errorInfo||e.info),1)])),_:1},8,["class"])):m("",!0)])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-a341dcfe"]]),q=I(e({__name:"Index",setup(e){const o=V("123"),t=V("123"),d=V("123"),n=V("123"),i=V("123"),r=V(""),m=V(!0),v=V(!1),c=V(!1),f=V(!1),g=V(!1),y=[m,v,c,f,g];function h(e){y.forEach(((l,a)=>l.value=a===e-1))}return _(i,(e=>{6===e.length&&"123456"!==e?r.value="密码错误":r.value=""})),(e,V)=>{const _=b(w("wui-password-input"),T),y=b(w("wui-number-keyboard"),j),k=b(w("demo-block"),C),U=p,x=b(w("page-wraper"),F);return l(),a(x,null,{default:u((()=>[s(U,{class:"password-input"},{default:u((()=>[s(k,{title:"基本用法",transparent:""},{default:u((()=>[s(_,{modelValue:o.value,"onUpdate:modelValue":V[0]||(V[0]=e=>o.value=e),focused:m.value,onFocus:V[1]||(V[1]=e=>h(1))},null,8,["modelValue","focused"]),s(y,{visible:m.value,"onUpdate:visible":V[2]||(V[2]=e=>m.value=e),modelValue:o.value,"onUpdate:modelValue":V[3]||(V[3]=e=>o.value=e),maxlength:6},null,8,["visible","modelValue"])])),_:1}),s(k,{title:"自定义长度",transparent:""},{default:u((()=>[s(_,{modelValue:t.value,"onUpdate:modelValue":V[4]||(V[4]=e=>t.value=e),length:4,focused:v.value,onFocus:V[5]||(V[5]=e=>h(2))},null,8,["modelValue","focused"]),s(y,{visible:v.value,"onUpdate:visible":V[6]||(V[6]=e=>v.value=e),modelValue:t.value,"onUpdate:modelValue":V[7]||(V[7]=e=>t.value=e),maxlength:4},null,8,["visible","modelValue"])])),_:1}),s(k,{title:"限制最大最小值",transparent:""},{default:u((()=>[s(_,{modelValue:d.value,"onUpdate:modelValue":V[8]||(V[8]=e=>d.value=e),gutter:10,focused:c.value,onFocus:V[9]||(V[9]=e=>h(3))},null,8,["modelValue","focused"]),s(y,{visible:c.value,"onUpdate:visible":V[10]||(V[10]=e=>c.value=e),modelValue:d.value,"onUpdate:modelValue":V[11]||(V[11]=e=>d.value=e),maxlength:6},null,8,["visible","modelValue"])])),_:1}),s(k,{title:"明文展示",transparent:""},{default:u((()=>[s(_,{modelValue:n.value,"onUpdate:modelValue":V[12]||(V[12]=e=>n.value=e),mask:!1,focused:f.value,onFocus:V[13]||(V[13]=e=>h(4))},null,8,["modelValue","focused"]),s(y,{visible:f.value,"onUpdate:visible":V[14]||(V[14]=e=>f.value=e),modelValue:n.value,"onUpdate:modelValue":V[15]||(V[15]=e=>n.value=e),maxlength:6},null,8,["visible","modelValue"])])),_:1}),s(k,{title:"提示信息",transparent:""},{default:u((()=>[s(_,{modelValue:i.value,"onUpdate:modelValue":V[16]||(V[16]=e=>i.value=e),info:"密码为 6 位数字","error-info":r.value,focused:g.value,onFocus:V[17]||(V[17]=e=>h(5))},null,8,["modelValue","error-info","focused"]),s(y,{visible:g.value,"onUpdate:visible":V[18]||(V[18]=e=>g.value=e),modelValue:i.value,"onUpdate:modelValue":V[19]||(V[19]=e=>i.value=e),maxlength:6},null,8,["visible","modelValue"])])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-f6e4ee25"]]);export{q as default};
