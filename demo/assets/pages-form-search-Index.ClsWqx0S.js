import{d as e,r as a,a as l,b as t,e as o,f as n,w as u,g as s,h as r,t as d,u as i,ak as c,k as p,A as m}from"./index-72jEY8AL.js";import{s as f,g as _,b as v,_ as V,a as w}from"./page-wraper.DpqTXTZc.js";import{_ as h}from"./wui-search.BoCnnkPK.js";import{_ as g}from"./demo-block.BGbMmBVB.js";import{_ as x}from"./wui-popover.BR7UhwLT.js";import"./useTranslate.C1TcN3no.js";import"./usePopover.k5XQgUGx.js";import"./clickoutside.CJmLG0WC.js";const j=w(e({__name:"Index",setup(e){const{closeOutside:w}=f(),j=a(""),k=a("初始文案"),b=a(""),U=a(""),C=a(""),y=a("全部"),I=a([{content:"全部"},{content:"订单号"},{content:"退款单号"}]);function z(e){c({title:"搜索"+e.value})}function A(){c({title:"清空"})}function M(){c({title:"取消"})}function O(e){console.log(e.value)}function P({item:e,index:a}){}return(e,a)=>{const c=l(t("wui-toast"),_),f=l(t("wui-search"),h),Q=l(t("demo-block"),g),S=p,T=m,q=l(t("wui-icon"),v),B=l(t("wui-popover"),x),D=l(t("page-wraper"),V);return o(),n(S,{onClick:i(w)},{default:u((()=>[s(c),s(D,null,{default:u((()=>[s(Q,{title:"基本用法",transparent:""},{default:u((()=>[s(f,{modelValue:j.value,"onUpdate:modelValue":a[0]||(a[0]=e=>j.value=e),onSearch:z,onChange:O,onCancel:M,onClear:A},null,8,["modelValue"])])),_:1}),s(Q,{title:"白色输入框",transparent:""},{default:u((()=>[s(f,{light:""})])),_:1}),s(Q,{title:"搜索占位符居左",transparent:""},{default:u((()=>[s(f,{"placeholder-left":""})])),_:1}),s(Q,{title:"禁用且隐藏取消按钮",transparent:""},{default:u((()=>[s(f,{disabled:"","hide-cancel":""})])),_:1}),s(S,{style:{margin:"15px 0",color:"#666"}},{default:u((()=>[s(S,{style:{padding:"0 15px",margin:"10px 0","font-size":"13px"}},{default:u((()=>[r("自定义左侧插槽")])),_:1}),s(f,{modelValue:b.value,"onUpdate:modelValue":a[1]||(a[1]=e=>b.value=e)},{prefix:u((()=>[s(B,{mode:"menu",content:I.value,onMenuclick:P},{default:u((()=>[s(S,{class:"search-type"},{default:u((()=>[s(T,null,{default:u((()=>[r(d(y.value),1)])),_:1}),s(q,{class:"icon-arrow",name:"fill-arrow-down"})])),_:1})])),_:1},8,["content"])])),_:1},8,["modelValue"])])),_:1}),s(Q,{title:"自定义右侧文案",transparent:""},{default:u((()=>[s(f,{placeholder:"请输入订单号/订单名称","cancel-txt":"搜索"})])),_:1}),s(Q,{title:"设置最大长度",transparent:""},{default:u((()=>[s(f,{modelValue:k.value,"onUpdate:modelValue":a[2]||(a[2]=e=>k.value=e),maxlength:4},null,8,["modelValue"])])),_:1}),s(Q,{title:"清空后自动聚焦",transparent:""},{default:u((()=>[s(f,{modelValue:U.value,"onUpdate:modelValue":a[3]||(a[3]=e=>U.value=e),"focus-when-clear":""},null,8,["modelValue"])])),_:1}),s(Q,{title:"自动聚焦",transparent:""},{default:u((()=>[s(f,{modelValue:C.value,"onUpdate:modelValue":a[4]||(a[4]=e=>C.value=e),focus:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["onClick"])}}}),[["__scopeId","data-v-bf7a36f7"]]);export{j as default};
