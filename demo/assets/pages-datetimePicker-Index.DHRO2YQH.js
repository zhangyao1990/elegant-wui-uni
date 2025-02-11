import{c as e,d as l,a}from"./page-wraper.DKh8GSae.js";import{d as o,r as u,a as n,b as t,o as m,c as d,w as r,e as i}from"./index-Dr4mJiuc.js";import{_ as s}from"./wui-datetime-picker.wAwqnRZT.js";import{_ as f}from"./wui-cell-group.DfpMszCp.js";import{_ as v}from"./demo-block.DQEtA4yj.js";import"./wui-datetime-picker-view.D4mFX62m.js";import"./wui-picker-view.BQeJbAJd.js";import"./dayjs.Ckuo39rO.js";import"./useTranslate.lVjJraGZ.js";import"./useChildren.sgdd5yxK.js";const V=o({__name:"Index",setup(o){const V=u(""),c=u(Date.now()),p=u(Date.now()),b=u("09:20"),w=u(Date.now()),g=u(Date.now()),D=u(Date.now()),C=u(Date.now()),U=u(Date.now()),_=u(Date.now()),j=u(""),y=u(""),$=u(Date.now()),h=u(["",""]),k=u(["",Date.now()]),x=u(Date.now()),T=u(Date.now()),L=u(Date.now()),q=u(new Date((new Date).getFullYear()+1,(new Date).getMonth(),(new Date).getDate()).getTime()),z=(e,l)=>{switch(e){case"year":return l+"年";case"month":return l+"月";case"date":return l+"日";case"hour":return l+"时";case"minute":return l+"分";default:return l}},F=(e,l)=>"minute"===e?l.filter((e=>e%5==0)):l,I=e=>`${e[0].label}年${e[1].label}月${e[2].label}日 ${e[3].label}:${e[4].label}`,M=e(),Q=(e,l,a)=>{a.setLoading(!0),setTimeout((()=>{a.setLoading(!1),e>Date.now()?(l(!1),M.error("不能选择大于今天的日期")):l(!0)}),2e3)},Y=e=>`${e[0].label}年${e[1].label}月${e[2].label}日 ${e[3].label}:${e[4].label}`;function A({value:e}){console.log(new Date(e))}function B({value:e}){console.log(e)}function E({value:e}){console.log(e)}function G({value:e}){console.log(e)}function H({value:e}){console.log(e)}function J({value:e}){console.log(e)}function K({value:e}){console.log(e)}function N({value:e}){console.log(e)}function O({value:e}){console.log(e)}function P({value:e}){console.log(e)}function R({value:e}){console.log(e)}function S({value:e}){console.log(e)}function W({value:e}){console.log(e)}function X({value:e}){console.log(e)}function Z({value:e}){console.log(e)}function ee({value:e}){console.log(e)}return(e,o)=>{const u=n(t("wui-toast"),l),M=n(t("wui-datetime-picker"),s),le=n(t("wui-cell-group"),f),ae=n(t("demo-block"),v),oe=n(t("page-wraper"),a);return m(),d(oe,null,{default:r((()=>[i(u),i(ae,{transparent:""},{default:r((()=>[i(le,{border:""},{default:r((()=>[i(M,{label:"日期选择",modelValue:V.value,"onUpdate:modelValue":o[0]||(o[0]=e=>V.value=e),onConfirm:A},null,8,["modelValue"]),i(M,{label:"年月日",modelValue:c.value,"onUpdate:modelValue":o[1]||(o[1]=e=>c.value=e),type:"date",onConfirm:B},null,8,["modelValue"]),i(M,{label:"年月",modelValue:p.value,"onUpdate:modelValue":o[2]||(o[2]=e=>p.value=e),type:"year-month",onConfirm:E},null,8,["modelValue"]),i(M,{label:"年",modelValue:x.value,"onUpdate:modelValue":o[3]||(o[3]=e=>x.value=e),type:"year",onConfirm:ee},null,8,["modelValue"]),i(M,{label:"时分",modelValue:b.value,"onUpdate:modelValue":o[4]||(o[4]=e=>b.value=e),type:"time",onConfirm:G},null,8,["modelValue"]),i(M,{label:"展示格式",modelValue:w.value,"onUpdate:modelValue":o[5]||(o[5]=e=>w.value=e),"display-format":I,onConfirm:H},null,8,["modelValue"]),i(M,{label:"内部格式",modelValue:g.value,"onUpdate:modelValue":o[6]||(o[6]=e=>g.value=e),formatter:z,onConfirm:J},null,8,["modelValue"]),i(M,{label:"过滤选项",modelValue:D.value,"onUpdate:modelValue":o[7]||(o[7]=e=>D.value=e),filter:F,onConfirm:K},null,8,["modelValue"]),i(M,{label:"before-confirm",modelValue:C.value,"onUpdate:modelValue":o[8]||(o[8]=e=>C.value=e),"before-confirm":Q,onConfirm:N},null,8,["modelValue"]),i(M,{label:"错误",modelValue:U.value,"onUpdate:modelValue":o[9]||(o[9]=e=>U.value=e),error:"",onConfirm:O},null,8,["modelValue"]),i(M,{label:"必填",modelValue:_.value,"onUpdate:modelValue":o[10]||(o[10]=e=>_.value=e),required:"",onConfirm:P},null,8,["modelValue"]),i(M,{label:"默认日期",modelValue:c.value,"onUpdate:modelValue":o[11]||(o[11]=e=>c.value=e),"default-value":c.value},null,8,["modelValue","default-value"]),i(M,{label:"时间范围一年",minDate:L.value,maxDate:q.value,modelValue:T.value,"onUpdate:modelValue":o[12]||(o[12]=e=>T.value=e),onConfirm:A},null,8,["minDate","maxDate","modelValue"])])),_:1})])),_:1}),i(ae,{title:"label 不传",transparent:""},{default:r((()=>[i(M,{modelValue:j.value,"onUpdate:modelValue":o[13]||(o[13]=e=>j.value=e),onConfirm:R},null,8,["modelValue"])])),_:1}),i(ae,{title:"大小",transparent:""},{default:r((()=>[i(M,{label:"日期选择",size:"large",modelValue:y.value,"onUpdate:modelValue":o[14]||(o[14]=e=>y.value=e),onConfirm:S},null,8,["modelValue"])])),_:1}),i(ae,{title:"值靠右展示",transparent:""},{default:r((()=>[i(M,{label:"日期选择","align-right":"",modelValue:$.value,"onUpdate:modelValue":o[15]||(o[15]=e=>$.value=e),onConfirm:W},null,8,["modelValue"])])),_:1}),i(ae,{title:"区域选择",transparent:""},{default:r((()=>[i(M,{label:"日期选择",title:"请选择区间",modelValue:h.value,"onUpdate:modelValue":o[16]||(o[16]=e=>h.value=e),onConfirm:X},null,8,["modelValue"])])),_:1}),i(ae,{title:"范围tab展示格式",transparent:""},{default:r((()=>[i(M,{label:"日期选择",modelValue:k.value,"onUpdate:modelValue":o[17]||(o[17]=e=>k.value=e),onConfirm:Z,"display-format-tab-label":Y},null,8,["modelValue"])])),_:1})])),_:1})}}});export{V as default};
