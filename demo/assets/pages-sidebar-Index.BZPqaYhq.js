import{d as e,r as a,a as l,b as t,e as u,f as o,w as s,g as d,h as r,V as n,k as i}from"./index-CppQkjPQ.js";import{_ as b,a as m}from"./wui-sidebar.9RVBlDzw.js";import{_ as p}from"./demo-block.Brm4S8Bi.js";import{_ as f}from"./wui-button.D5TM7_AH.js";import{b as _,_ as c,a as v}from"./page-wraper.BtTn2L9S.js";import"./wui-badge.B1pn-hyG.js";import"./useChildren.BQ208M7a.js";const g=v(e({__name:"Index",setup(e){const{loading:v,close:g}=_(),V=a(0),w=a(0),k=a(0),j=({value:e,resolve:a})=>{v("切换中"),setTimeout((()=>{g(),a(!0)}),2e3)};function x(){n({url:"/pages/sidebar/demo1"})}function y(){n({url:"/pages/sidebar/demo2"})}function C(){n({url:"/pages/sidebar/demo3"})}return(e,a)=>{const n=l(t("wui-sidebar-item"),b),_=l(t("wui-sidebar"),m),v=i,g=l(t("demo-block"),p),h=l(t("wui-button"),f),z=l(t("page-wraper"),c);return u(),o(z,null,{default:s((()=>[d(g,{title:"基础用法",transparent:""},{default:s((()=>[d(v,{style:{display:"flex","justify-content":"space-around"}},{default:s((()=>[d(_,{modelValue:V.value,"onUpdate:modelValue":a[0]||(a[0]=e=>V.value=e)},{default:s((()=>[d(n,{value:0,label:"标签名称"}),d(n,{value:1,label:"标签名称"}),d(n,{value:2,label:"标签名称"})])),_:1},8,["modelValue"]),d(_,{modelValue:w.value,"onUpdate:modelValue":a[1]||(a[1]=e=>w.value=e)},{default:s((()=>[d(n,{value:0,label:"标签名称","is-dot":""}),d(n,{value:1,label:"标签名称",badge:"5"}),d(n,{value:2,label:"标签名称",badge:"2","badge-props":{type:"warning",modelValue:55,max:99}})])),_:1},8,["modelValue"]),d(_,{modelValue:k.value,"onUpdate:modelValue":a[2]||(a[2]=e=>k.value=e),"before-change":j},{default:s((()=>[d(n,{value:0,label:"标签名称"}),d(n,{value:1,label:"标签名称",disabled:""}),d(n,{value:2,label:"标签名称"})])),_:1},8,["modelValue"])])),_:1})])),_:1}),d(g,{title:"锚点用法示例",transparent:""},{default:s((()=>[d(v,{class:"demo-button"},{default:s((()=>[d(h,{onClick:x,round:!1,block:"",size:"large"},{default:s((()=>[r("锚点用法")])),_:1})])),_:1})])),_:1}),d(g,{title:"切换页面用法示例",transparent:""},{default:s((()=>[d(v,{class:"demo-button"},{default:s((()=>[d(h,{onClick:y,round:!1,block:"",size:"large"},{default:s((()=>[r("切换页面")])),_:1})])),_:1})])),_:1}),d(g,{title:"自定义图标示例",transparent:""},{default:s((()=>[d(v,{class:"demo-button"},{default:s((()=>[d(h,{onClick:C,round:!1,block:"",size:"large"},{default:s((()=>[r("自定义图标")])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-62421b79"]]);export{g as default};
