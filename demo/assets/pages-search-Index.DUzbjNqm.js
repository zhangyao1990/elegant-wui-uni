import{d as e,r as a,a as l,b as t,e as o,f as n,w as u,g as s,h as r,t as d,u as i,B as c,k as p,A as m}from"./index-DUOrDz0Y.js";import{j as f,c as _,w as v,_ as V,a as w}from"./page-wraper.BMayt547.js";import{_ as h}from"./wui-search.C9zTn3xN.js";import{_ as x}from"./demo-block.Q9v4xHZp.js";import{_ as g}from"./wui-popover.vmsDcmgP.js";import"./useTranslate.n1NBPQjv.js";import"./usePopover.DL7FaLiC.js";import"./clickoutside.CJmLG0WC.js";const j=w(e({__name:"Index",setup(e){const{closeOutside:w}=f(),j=a(""),k=a("初始文案"),C=a(""),U=a(""),b=a(""),y=a("全部"),I=a([{content:"全部"},{content:"订单号"},{content:"退款单号"}]);function q(e){c({title:"搜索"+e.value})}function z(){c({title:"清空"})}function A(){c({title:"取消"})}function B(e){console.log(e.value)}function D({item:e,index:a}){}return(e,a)=>{const c=l(t("wui-toast"),_),f=l(t("wui-search"),h),E=l(t("demo-block"),x),M=p,O=m,P=l(t("wui-icon"),v),S=l(t("wui-popover"),g),T=l(t("page-wraper"),V);return o(),n(M,{onClick:i(w)},{default:u((()=>[s(c),s(T,null,{default:u((()=>[s(E,{title:"基本用法",transparent:""},{default:u((()=>[s(f,{modelValue:j.value,"onUpdate:modelValue":a[0]||(a[0]=e=>j.value=e),onSearch:q,onChange:B,onCancel:A,onClear:z},null,8,["modelValue"])])),_:1}),s(E,{title:"白色输入框",transparent:""},{default:u((()=>[s(f,{light:""})])),_:1}),s(E,{title:"搜索占位符居左",transparent:""},{default:u((()=>[s(f,{"placeholder-left":""})])),_:1}),s(E,{title:"禁用且隐藏取消按钮",transparent:""},{default:u((()=>[s(f,{disabled:"","hide-cancel":""})])),_:1}),s(M,{style:{margin:"15px 0",color:"#666"}},{default:u((()=>[s(M,{style:{padding:"0 15px",margin:"10px 0","font-size":"13px"}},{default:u((()=>[r("自定义左侧插槽")])),_:1}),s(f,{modelValue:C.value,"onUpdate:modelValue":a[1]||(a[1]=e=>C.value=e)},{prefix:u((()=>[s(S,{mode:"menu",content:I.value,onMenuclick:D},{default:u((()=>[s(M,{class:"search-type"},{default:u((()=>[s(O,null,{default:u((()=>[r(d(y.value),1)])),_:1}),s(P,{class:"icon-arrow",name:"fill-arrow-down"})])),_:1})])),_:1},8,["content"])])),_:1},8,["modelValue"])])),_:1}),s(E,{title:"自定义右侧文案",transparent:""},{default:u((()=>[s(f,{placeholder:"请输入订单号/订单名称","cancel-txt":"搜索"})])),_:1}),s(E,{title:"设置最大长度",transparent:""},{default:u((()=>[s(f,{modelValue:k.value,"onUpdate:modelValue":a[2]||(a[2]=e=>k.value=e),maxlength:4},null,8,["modelValue"])])),_:1}),s(E,{title:"清空后自动聚焦",transparent:""},{default:u((()=>[s(f,{modelValue:U.value,"onUpdate:modelValue":a[3]||(a[3]=e=>U.value=e),"focus-when-clear":""},null,8,["modelValue"])])),_:1}),s(E,{title:"自动聚焦",transparent:""},{default:u((()=>[s(f,{modelValue:b.value,"onUpdate:modelValue":a[4]||(a[4]=e=>b.value=e),focus:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["onClick"])}}}),[["__scopeId","data-v-88a03704"]]);export{j as default};
