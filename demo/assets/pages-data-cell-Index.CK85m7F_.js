import{f as e,_ as l,g as t,h as a,i as u,a as i}from"./page-wraper.BAAFjrch.js";import{d as n,r as s,a as o,w as r,e as d,f,g as c,h as _,i as p,k as m}from"./index-C9W9llSX.js";import{_ as v}from"./wui-cell-group.DgBU2Fom.js";import{_ as g}from"./demo-block.CQ-UumbW.js";import{_ as b}from"./wui-rate.DKTRiQzF.js";import{_ as w}from"./wui-slider.g-v_eTlG.js";import{_ as h}from"./wui-button.BxzuRTK_.js";import"./useChildren.B38JgdGT.js";import"./useTouch.7qJXdJWm.js";const x=i(n({__name:"Index",setup(i){const n=s(0),x=s(0),k=s("");function j({value:e}){console.log(e)}function V({value:e}){console.log(e)}function C({value:e}){console.log(e)}const I=e();function y(){I.show("点击")}return(e,i)=>{const s=d(f("wui-toast"),t),I=d(f("wui-cell"),a),z=d(f("wui-cell-group"),v),U=d(f("demo-block"),g),q=p,E=d(f("wui-rate"),b),T=d(f("wui-slider"),w),Z=d(f("wui-button"),h),A=d(f("wui-switch"),u),B=d(f("page-wraper"),l);return c(),o(B,null,{default:r((()=>[_(s),_(U,{title:"基本用法",transparent:""},{default:r((()=>[_(z,null,{default:r((()=>[_(I,{title:"标题文字",value:"内容"}),_(I,{title:"标题文字",label:"描述信息",value:"内容"})])),_:1})])),_:1}),_(U,{title:"图标",transparent:""},{default:r((()=>[_(z,null,{default:r((()=>[_(I,{title:"标题文字",value:"内容",icon:"setting"}),_(I,{title:"标题文字",value:"内容"},{icon:r((()=>[_(q,{class:"cell-icon"})])),_:1})])),_:1})])),_:1}),_(U,{title:"分组标题",transparent:""},{default:r((()=>[_(z,{title:"交易管理",value:"内容"},{default:r((()=>[_(I,{title:"标题文字",value:"内容"}),_(I,{title:"标题文字",label:"黄鹤断矶头，故人今在否？旧江山浑是新愁。欲买桂花同载酒，终不似，少年游。",value:"内容"})])),_:1})])),_:1}),_(U,{title:"大尺寸",transparent:""},{default:r((()=>[_(z,null,{default:r((()=>[_(I,{size:"large",title:"标题文字",value:"内容"}),_(I,{title:"标题文字",value:"内容",size:"large",icon:"setting","is-link":""}),_(I,{size:"large",title:"标题文字",label:"描述信息",value:"内容"})])),_:1})])),_:1}),_(U,{title:"展示边框线",transparent:""},{default:r((()=>[_(z,{title:"交易管理",border:""},{default:r((()=>[_(I,{title:"标题文字",value:"内容"}),_(I,{border:!1,title:"标题文字",label:"这一个cell不想要边框",value:"内容"}),_(I,{title:"标题文字",label:"描述信息",value:"内容"})])),_:1})])),_:1}),_(U,{title:"点击事件",transparent:""},{default:r((()=>[_(z,null,{default:r((()=>[_(I,{title:"标题文字",value:"内容",clickable:"",onClick:y})])),_:1})])),_:1}),_(U,{title:"页面跳转",transparent:""},{default:r((()=>[_(z,null,{default:r((()=>[_(I,{title:"帮助与反馈","is-link":"",to:"/pages/index/Index"}),_(I,{title:"设置",value:"内容","is-link":"",to:"/pages/button/Index",replace:""})])),_:1})])),_:1}),_(U,{title:"垂直居中",transparent:""},{default:r((()=>[_(z,null,{default:r((()=>[_(I,{title:"标题文字",value:"内容",center:""}),_(I,{title:"标题文字",label:"描述信息",value:"内容",center:""})])),_:1})])),_:1}),_(U,{title:"表单属性",transparent:""},{default:r((()=>[_(z,{border:""},{default:r((()=>[_(I,{title:"必填",required:""},{default:r((()=>[_(E,{modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=e=>n.value=e),icon:"dong","active-icon":"dong",onChange:j},null,8,["modelValue"])])),_:1}),_(I,{title:"上下结构",vertical:""},{default:r((()=>[_(T,{modelValue:x.value,"onUpdate:modelValue":i[1]||(i[1]=e=>x.value=e),onChange:V},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),_(U,{title:"设置宽度",transparent:""},{default:r((()=>[_(z,null,{default:r((()=>[_(I,{title:"标题文字",label:"这里是文字描述这里是文字描述这里是文字描述","title-width":"200px",value:"内容"})])),_:1})])),_:1}),_(U,{title:"自定义slot",transparent:""},{default:r((()=>[_(z,null,{default:r((()=>[_(I,{title:"标题文字",center:""},{default:r((()=>[_(Z,{"custom-class":"custom-value",size:"small",plain:""},{default:r((()=>[m("按钮")])),_:1})])),_:1}),_(I,{title:"标题文字",center:""},{default:r((()=>[_(q,{class:"custom-value",style:{height:"32px"}},{default:r((()=>[_(A,{modelValue:k.value,"onUpdate:modelValue":i[2]||(i[2]=e=>k.value=e),onChange:C},null,8,["modelValue"])])),_:1})])),_:1}),_(I,{title:"标题文字","is-link":"",to:"/pages/index/Index"},{default:r((()=>[_(q,{class:"custom-text"},{default:r((()=>[m("订购")])),_:1})])),_:1}),_(I,null,{title:r((()=>[_(q,null,{default:r((()=>[_(q,{style:{display:"inline-block"}},{default:r((()=>[m("标题文字")])),_:1}),_(q,{class:"end-time"},{default:r((()=>[m("25天后到期")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-57f83e0c"]]);export{x as default};
