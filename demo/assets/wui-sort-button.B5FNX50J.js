import{d as s,a as t,g as a,w as e,h as o,i as l,s as u,k as i,t as r,x as n,B as c}from"./index-C9W9llSX.js";import{c as d,k as m,l as w,m as p,b as _,a as b}from"./page-wraper.BAAFjrch.js";const f=b(s({name:"wui-sort-button",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...d,modelValue:p(0),title:w(""),allowReset:m(!1),descFirst:m(!1),line:m(!0)},emits:["change","update:modelValue"],setup(s,{emit:d}){const m=s,w=d;function p(){let{modelValue:s,allowReset:t,descFirst:a}=m;a?0===s?s=-1:-1===s?s=1:1===s&&(s=t?0:-1):0===s?s=1:1===s?s=-1:-1===s&&(s=t?0:1),w("update:modelValue",s),w("change",{value:s})}return(s,d)=>{const m=l;return a(),t(m,{class:u(`wui-sort-button ${s.line?"wui-sort-button--line":""} ${s.customClass}`),style:c(s.customStyle),onClick:p},{default:e((()=>[o(m,{class:"wui-sort-button__wrapper"},{default:e((()=>[o(m,{class:u("wui-sort-button__left "+(0!==s.modelValue?"is-active":""))},{default:e((()=>[i(r(s.title),1)])),_:1},8,["class"]),o(m,{class:u("wui-sort-button__right "+(0!==s.modelValue?"is-active":""))},{default:e((()=>[1!==s.modelValue?(a(),t(_,{key:0,name:"arrow-up","custom-class":"wui-sort-button__icon-up"})):n("",!0),-1!==s.modelValue?(a(),t(_,{key:1,name:"arrow-down","custom-class":"wui-sort-button__icon-down"})):n("",!0)])),_:1},8,["class"])])),_:1})])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-6eab24ec"]]);export{f as w};
