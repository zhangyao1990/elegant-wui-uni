import{d as a,r as e,v as l,o as s,c as t,w as u,e as o,f as i,t as n,u as d,p as r,n as p,y as c,j as _,i as m}from"./index-Dr4mJiuc.js";import{f as g,S as f,m as w,n as v,w as h,b as y}from"./page-wraper.DKh8GSae.js";import{_ as V}from"./wui-button.D-2fgW8t.js";import{u as b}from"./useTranslate.lVjJraGZ.js";const k=y(a({name:"wui-pagination",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...g,modelValue:f(Number),totalPage:w(1),showIcon:v(!1),showMessage:v(!1),total:w(0),pageSize:w(10),prevText:String,nextText:String,hideIfOnePage:v(!0)},emits:["change","update:modelValue"],setup(a,{emit:g}){const{translate:f}=b("pagination"),w=a,v=g,y=e(0);function k(){const{modelValue:a}=w;a>y.value-1||(v("change",{value:a+1}),v("update:modelValue",a+1))}function x(){const{modelValue:a}=w;a<2||(v("change",{value:a-1}),v("update:modelValue",a-1))}return l((()=>w.totalPage),(a=>{!y.value&&a&&(y.value=a)}),{immediate:!0,deep:!0}),l((()=>w.total),(()=>{!function(){const{total:a,pageSize:e}=w;a&&(y.value=Math.ceil(a/e))}()}),{immediate:!0,deep:!0}),(a,e)=>{const l=_,g=m;return a.hideIfOnePage&&1===y.value?r("",!0):(s(),t(g,{key:0,class:p(`wui-pager ${a.customClass}`),style:c(a.customStyle)},{default:u((()=>[o(g,{class:"wui-pager__content"},{default:u((()=>[o(V,{plain:a.modelValue>1,type:"info",size:"small",disabled:a.modelValue<=1,"custom-class":"wui-pager__nav",onClick:x},{default:u((()=>[a.showIcon?(s(),t(h,{key:1,"custom-class":"wui-pager__left wui-pager__icon "+(a.modelValue<=1?"wui-pager__nav--disabled":"wui-pager__nav--active"),name:"arrow-right"},null,8,["custom-class"])):(s(),t(l,{key:0},{default:u((()=>[i(n(a.prevText||d(f)("prev")),1)])),_:1}))])),_:1},8,["plain","disabled"]),o(g,{class:"wui-pager__size"},{default:u((()=>[o(l,{class:"wui-pager__current"},{default:u((()=>[i(n(a.modelValue),1)])),_:1}),o(l,{class:"wui-pager__separator"},{default:u((()=>[i("/")])),_:1}),o(l,null,{default:u((()=>[i(n(y.value),1)])),_:1})])),_:1}),o(V,{plain:a.modelValue<y.value,type:"info",size:"small",disabled:a.modelValue>=y.value,"custom-class":"wui-pager__nav",onClick:k},{default:u((()=>[a.showIcon?(s(),t(h,{key:1,"custom-class":"wui-pager__icon "+(a.modelValue>=y.value?"wui-pager__nav--disabled":"wui-pager__nav--active"),name:"arrow-right"},null,8,["custom-class"])):(s(),t(l,{key:0},{default:u((()=>[i(n(a.nextText||d(f)("next")),1)])),_:1}))])),_:1},8,["plain","disabled"])])),_:1}),a.showMessage?(s(),t(g,{key:0,class:"wui-pager__message"},{default:u((()=>[o(l,null,{default:u((()=>[i(n(d(f)("page",a.modelValue))+"，",1)])),_:1}),a.total?(s(),t(l,{key:0},{default:u((()=>[i(n(d(f)("total",a.total))+"，",1)])),_:1})):r("",!0),o(l,null,{default:u((()=>[i(n(d(f)("size",a.pageSize)),1)])),_:1})])),_:1})):r("",!0)])),_:1},8,["class","style"]))}}}),[["__scopeId","data-v-503e1cf8"]]);export{k as _};
