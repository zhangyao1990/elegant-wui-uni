import{u as e,_ as l}from"./wui-message-box.BEJ1CW8I.js";import{d as a,r as o,a as u,w as t,e as n,f as d,g as s,h as i,i as m,k as c,t as v}from"./index-C9W9llSX.js";import{_ as r,i as f,a as p}from"./page-wraper.BAAFjrch.js";import{_ as V}from"./demo-block.CQ-UumbW.js";import"./wui-button.BxzuRTK_.js";import"./wui-input.N2V4XW2q.js";import"./useTranslate.Dk0WeNHw.js";const g=p(a({__name:"Index",setup(a){const p=o(!0),g=o("沃特"),_=o(!0),h=o(!0),b=o(!0),w=o(!1),j=o(!1),U=e(),x=({value:e,resolve:l})=>{U.confirm("是否切换开关").then((()=>{l(!0)})).catch((()=>{l(!1)}))};function C({value:e}){console.log(e)}function k({value:e}){console.log(e)}function z({value:e}){console.log(e)}function I({value:e}){console.log(e)}function y({value:e}){console.log(e)}return(e,a)=>{const o=n(d("wui-message-box"),l),U=n(d("wui-switch"),f),B=n(d("demo-block"),V),T=m,q=n(d("page-wraper"),r);return s(),u(q,null,{default:t((()=>[i(o),i(T,null,{default:t((()=>[i(B,{title:"基本用法"},{default:t((()=>[i(U,{modelValue:p.value,"onUpdate:modelValue":a[0]||(a[0]=e=>p.value=e),onChange:C},null,8,["modelValue"])])),_:1}),i(B,{title:"修改值 active-value 、 inactive-value"},{default:t((()=>[i(T,{style:{"margin-bottom":"10px"}},{default:t((()=>[c(v(g.value),1)])),_:1}),i(U,{modelValue:g.value,"onUpdate:modelValue":a[1]||(a[1]=e=>g.value=e),"active-value":"沃特","inactive-value":"商家后台",onChange:k},null,8,["modelValue"])])),_:1}),i(B,{title:"自定义颜色 active-color 、 inactive-color"},{default:t((()=>[i(U,{modelValue:_.value,"onUpdate:modelValue":a[2]||(a[2]=e=>_.value=e),"active-color":"#13ce66","inactive-color":"#f00",onChange:z},null,8,["modelValue"])])),_:1}),i(B,{title:"自定义大小"},{default:t((()=>[i(U,{modelValue:h.value,"onUpdate:modelValue":a[3]||(a[3]=e=>h.value=e),size:24,onChange:I},null,8,["modelValue"])])),_:1}),i(B,{title:"选中禁用"},{default:t((()=>[i(U,{modelValue:b.value,"onUpdate:modelValue":a[4]||(a[4]=e=>b.value=e),disabled:""},null,8,["modelValue"])])),_:1}),i(B,{title:"非选中禁用"},{default:t((()=>[i(U,{modelValue:w.value,"onUpdate:modelValue":a[5]||(a[5]=e=>w.value=e),disabled:""},null,8,["modelValue"])])),_:1}),i(B,{title:"before-change 修改前钩子函数"},{default:t((()=>[i(U,{modelValue:j.value,"onUpdate:modelValue":a[6]||(a[6]=e=>j.value=e),"before-change":x,onChange:y},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-a5e17215"]]);export{g as default};
