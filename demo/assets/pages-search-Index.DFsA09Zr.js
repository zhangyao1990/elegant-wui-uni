import{d as e,r as a,a as l,b as t,o,c as n,w as u,e as s,f as r,t as d,u as i,z as c,i as p,j as m}from"./index-Dr4mJiuc.js";import{j as f,d as _,w as v,a as V,b as w}from"./page-wraper.DKh8GSae.js";import{_ as h}from"./wui-search.DjiEtsQv.js";import{_ as x}from"./demo-block.DQEtA4yj.js";import{_ as j}from"./wui-popover.BYLWWon7.js";import"./useTranslate.lVjJraGZ.js";import"./usePopover.yf2qn47o.js";import"./clickoutside.CJmLG0WC.js";const g=w(e({__name:"Index",setup(e){const{closeOutside:w}=f(),g=a(""),k=a("初始文案"),C=a(""),b=a(""),U=a(""),y=a("全部"),z=a([{content:"全部"},{content:"订单号"},{content:"退款单号"}]);function I(e){c({title:"搜索"+e.value})}function A(){c({title:"清空"})}function B(){c({title:"取消"})}function M(e){console.log(e.value)}function O({item:e,index:a}){}return(e,a)=>{const c=l(t("wui-toast"),_),f=l(t("wui-search"),h),P=l(t("demo-block"),x),S=p,T=m,q=l(t("wui-icon"),v),D=l(t("wui-popover"),j),E=l(t("page-wraper"),V);return o(),n(S,{onClick:i(w)},{default:u((()=>[s(c),s(E,null,{default:u((()=>[s(P,{title:"基本用法",transparent:""},{default:u((()=>[s(f,{modelValue:g.value,"onUpdate:modelValue":a[0]||(a[0]=e=>g.value=e),onSearch:I,onChange:M,onCancel:B,onClear:A},null,8,["modelValue"])])),_:1}),s(P,{title:"白色输入框",transparent:""},{default:u((()=>[s(f,{light:""})])),_:1}),s(P,{title:"搜索占位符居左",transparent:""},{default:u((()=>[s(f,{"placeholder-left":""})])),_:1}),s(P,{title:"禁用且隐藏取消按钮",transparent:""},{default:u((()=>[s(f,{disabled:"","hide-cancel":""})])),_:1}),s(S,{style:{margin:"15px 0",color:"#666"}},{default:u((()=>[s(S,{style:{padding:"0 15px",margin:"10px 0","font-size":"13px"}},{default:u((()=>[r("自定义左侧插槽")])),_:1}),s(f,{modelValue:C.value,"onUpdate:modelValue":a[1]||(a[1]=e=>C.value=e)},{prefix:u((()=>[s(D,{mode:"menu",content:z.value,onMenuclick:O},{default:u((()=>[s(S,{class:"search-type"},{default:u((()=>[s(T,null,{default:u((()=>[r(d(y.value),1)])),_:1}),s(q,{class:"icon-arrow",name:"fill-arrow-down"})])),_:1})])),_:1},8,["content"])])),_:1},8,["modelValue"])])),_:1}),s(P,{title:"自定义右侧文案",transparent:""},{default:u((()=>[s(f,{placeholder:"请输入订单号/订单名称","cancel-txt":"搜索"})])),_:1}),s(P,{title:"设置最大长度",transparent:""},{default:u((()=>[s(f,{modelValue:k.value,"onUpdate:modelValue":a[2]||(a[2]=e=>k.value=e),maxlength:4},null,8,["modelValue"])])),_:1}),s(P,{title:"清空后自动聚焦",transparent:""},{default:u((()=>[s(f,{modelValue:b.value,"onUpdate:modelValue":a[3]||(a[3]=e=>b.value=e),"focus-when-clear":""},null,8,["modelValue"])])),_:1}),s(P,{title:"自动聚焦",transparent:""},{default:u((()=>[s(f,{modelValue:U.value,"onUpdate:modelValue":a[4]||(a[4]=e=>U.value=e),focus:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["onClick"])}}}),[["__scopeId","data-v-88a03704"]]);export{g as default};
