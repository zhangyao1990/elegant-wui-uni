import{d as a,r as e,z as l,a as s,x as t,g as u,w as o,h as i,i as n,D as d,k as r,t as p,u as c,B as _,s as m}from"./index-C9W9llSX.js";import{k as g,m as f,v as w,c as v,b as h,a as V}from"./page-wraper.BAAFjrch.js";import{_ as y}from"./wui-button.BxzuRTK_.js";import{u as k}from"./useTranslate.Dk0WeNHw.js";const b=V(a({name:"wui-pagination",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...v,modelValue:w(Number),totalPage:f(1),showIcon:g(!1),showMessage:g(!1),total:f(0),pageSize:f(10),prevText:String,nextText:String,hideIfOnePage:g(!0)},emits:["change","update:modelValue"],setup(a,{emit:g}){const{translate:f}=k("pagination"),w=a,v=g,V=e(0);function b(){const{modelValue:a}=w;a>V.value-1||(v("change",{value:a+1}),v("update:modelValue",a+1))}function x(){const{modelValue:a}=w;a<2||(v("change",{value:a-1}),v("update:modelValue",a-1))}return l((()=>w.totalPage),(a=>{!V.value&&a&&(V.value=a)}),{immediate:!0,deep:!0}),l((()=>w.total),(()=>{!function(){const{total:a,pageSize:e}=w;V.value=Math.ceil(a||0/e)}()}),{immediate:!0,deep:!0}),(a,e)=>{const l=d,g=n;return a.hideIfOnePage&&1===V.value?t("",!0):(u(),s(g,{key:0,class:m(`wui-pager ${a.customClass}`),style:_(a.customStyle)},{default:o((()=>[i(g,{class:"wui-pager__content"},{default:o((()=>[i(y,{plain:a.modelValue>1,type:"info",size:"small",disabled:a.modelValue<=1,"custom-class":"wui-pager__nav",onClick:x},{default:o((()=>[a.showIcon?(u(),s(h,{key:1,"custom-class":"wui-pager__left wui-pager__icon "+(a.modelValue<=1?"wui-pager__nav--disabled":"wui-pager__nav--active"),name:"arrow-right"},null,8,["custom-class"])):(u(),s(l,{key:0},{default:o((()=>[r(p(a.prevText||c(f)("prev")),1)])),_:1}))])),_:1},8,["plain","disabled"]),i(g,{class:"wui-pager__size"},{default:o((()=>[i(l,{class:"wui-pager__current"},{default:o((()=>[r(p(a.modelValue),1)])),_:1}),i(l,{class:"wui-pager__separator"},{default:o((()=>[r("/")])),_:1}),i(l,null,{default:o((()=>[r(p(V.value),1)])),_:1})])),_:1}),i(y,{plain:a.modelValue<V.value,type:"info",size:"small",disabled:a.modelValue>=V.value,"custom-class":"wui-pager__nav",onClick:b},{default:o((()=>[a.showIcon?(u(),s(h,{key:1,"custom-class":"wui-pager__icon "+(a.modelValue>=V.value?"wui-pager__nav--disabled":"wui-pager__nav--active"),name:"arrow-right"},null,8,["custom-class"])):(u(),s(l,{key:0},{default:o((()=>[r(p(a.nextText||c(f)("next")),1)])),_:1}))])),_:1},8,["plain","disabled"])])),_:1}),a.showMessage?(u(),s(g,{key:0,class:"wui-pager__message"},{default:o((()=>[i(l,null,{default:o((()=>[r(p(c(f)("page",a.modelValue))+"，",1)])),_:1}),a.total?(u(),s(l,{key:0},{default:o((()=>[r(p(c(f)("total",a.total))+"，",1)])),_:1})):t("",!0),i(l,null,{default:o((()=>[r(p(c(f)("size",a.pageSize)),1)])),_:1})])),_:1})):t("",!0)])),_:1},8,["class","style"]))}}}),[["__scopeId","data-v-f18f2976"]]);export{b as _};
