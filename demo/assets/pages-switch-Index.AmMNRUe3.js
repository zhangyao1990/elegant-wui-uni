import{u as e,_ as l}from"./wui-message-box.YSJ-FpWy.js";import{d as a,r as o,a as u,b as t,o as n,c as d,w as s,e as i,f as m,t as c,i as v}from"./index-CUFtuoyb.js";import{e as r,a as f,b as p}from"./page-wraper.DLIaUpRJ.js";import{_ as V}from"./demo-block.Ctz988W3.js";import"./wui-button.DUavKKI0.js";import"./wui-input.DUVHXPRR.js";import"./useTranslate.DXLkZrRM.js";const g=p(a({__name:"Index",setup(a){const p=o(!0),g=o("沃特"),_=o(!0),b=o(!0),h=o(!0),w=o(!1),j=o(!1),U=e(),x=({value:e,resolve:l})=>{U.confirm("是否切换开关").then((()=>{l(!0)})).catch((()=>{l(!1)}))};function C({value:e}){console.log(e)}function k({value:e}){console.log(e)}function I({value:e}){console.log(e)}function y({value:e}){console.log(e)}function z({value:e}){console.log(e)}return(e,a)=>{const o=u(t("wui-message-box"),l),U=u(t("wui-switch"),r),F=u(t("demo-block"),V),G=v,T=u(t("page-wraper"),f);return n(),d(T,null,{default:s((()=>[i(o),i(G,null,{default:s((()=>[i(F,{title:"基本用法"},{default:s((()=>[i(U,{modelValue:p.value,"onUpdate:modelValue":a[0]||(a[0]=e=>p.value=e),onChange:C},null,8,["modelValue"])])),_:1}),i(F,{title:"修改值 active-value 、 inactive-value"},{default:s((()=>[i(G,{style:{"margin-bottom":"10px"}},{default:s((()=>[m(c(g.value),1)])),_:1}),i(U,{modelValue:g.value,"onUpdate:modelValue":a[1]||(a[1]=e=>g.value=e),"active-value":"沃特","inactive-value":"商家后台",onChange:k},null,8,["modelValue"])])),_:1}),i(F,{title:"自定义颜色 active-color 、 inactive-color"},{default:s((()=>[i(U,{modelValue:_.value,"onUpdate:modelValue":a[2]||(a[2]=e=>_.value=e),"active-color":"#13ce66","inactive-color":"#f00",onChange:I},null,8,["modelValue"])])),_:1}),i(F,{title:"自定义大小"},{default:s((()=>[i(U,{modelValue:b.value,"onUpdate:modelValue":a[3]||(a[3]=e=>b.value=e),size:24,onChange:y},null,8,["modelValue"])])),_:1}),i(F,{title:"选中禁用"},{default:s((()=>[i(U,{modelValue:h.value,"onUpdate:modelValue":a[4]||(a[4]=e=>h.value=e),disabled:""},null,8,["modelValue"])])),_:1}),i(F,{title:"非选中禁用"},{default:s((()=>[i(U,{modelValue:w.value,"onUpdate:modelValue":a[5]||(a[5]=e=>w.value=e),disabled:""},null,8,["modelValue"])])),_:1}),i(F,{title:"before-change 修改前钩子函数"},{default:s((()=>[i(U,{modelValue:j.value,"onUpdate:modelValue":a[6]||(a[6]=e=>j.value=e),"before-change":x,onChange:z},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-aeedecb1"]]);export{g as default};