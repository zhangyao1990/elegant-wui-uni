import{c as e,d as l,b as t,e as a,_ as u,a as i}from"./page-wraper.D5sIAHqb.js";import{d as n,r as s,a as o,b as d,e as r,f as c,w as f,g as _,h as p,k as m}from"./index-B1zkhFT1.js";import{_ as v}from"./wui-cell-group.DAC16Zf5.js";import{_ as g}from"./demo-block.DvOYrTD7.js";import{_ as b}from"./wui-rate.Gn3xiIgD.js";import{_ as w}from"./wui-slider.CEhn28Xu.js";import{_ as x}from"./wui-button.GUQvrKFc.js";import"./useChildren.COqmfdId.js";import"./useTouch.CFsfeR2z.js";const h=i(n({__name:"Index",setup(i){const n=s(0),h=s(0),k=s("");function j({value:e}){console.log(e)}function V({value:e}){console.log(e)}function z({value:e}){console.log(e)}const C=e();function I(){C.show("点击")}return(e,i)=>{const s=o(d("wui-toast"),l),C=o(d("wui-cell"),t),y=o(d("wui-cell-group"),v),U=o(d("demo-block"),g),q=m,T=o(d("wui-rate"),b),A=o(d("wui-slider"),w),B=o(d("wui-button"),x),D=o(d("wui-switch"),a),E=o(d("page-wraper"),u);return r(),c(E,null,{default:f((()=>[_(s),_(U,{title:"基本用法",transparent:""},{default:f((()=>[_(y,null,{default:f((()=>[_(C,{title:"标题文字",value:"内容"}),_(C,{title:"标题文字",label:"描述信息",value:"内容"})])),_:1})])),_:1}),_(U,{title:"图标",transparent:""},{default:f((()=>[_(y,null,{default:f((()=>[_(C,{title:"标题文字",value:"内容",icon:"setting"}),_(C,{title:"标题文字",value:"内容"},{icon:f((()=>[_(q,{class:"cell-icon"})])),_:1})])),_:1})])),_:1}),_(U,{title:"分组标题",transparent:""},{default:f((()=>[_(y,{title:"交易管理",value:"内容"},{default:f((()=>[_(C,{title:"标题文字",value:"内容"}),_(C,{title:"标题文字",label:"黄鹤断矶头，故人今在否？旧江山浑是新愁。欲买桂花同载酒，终不似，少年游。",value:"内容"})])),_:1})])),_:1}),_(U,{title:"大尺寸",transparent:""},{default:f((()=>[_(y,null,{default:f((()=>[_(C,{size:"large",title:"标题文字",value:"内容"}),_(C,{title:"标题文字",value:"内容",size:"large",icon:"setting","is-link":""}),_(C,{size:"large",title:"标题文字",label:"描述信息",value:"内容"})])),_:1})])),_:1}),_(U,{title:"展示边框线",transparent:""},{default:f((()=>[_(y,{title:"交易管理",border:""},{default:f((()=>[_(C,{title:"标题文字",value:"内容"}),_(C,{border:!1,title:"标题文字",label:"这一个cell不想要边框",value:"内容"}),_(C,{title:"标题文字",label:"描述信息",value:"内容"})])),_:1})])),_:1}),_(U,{title:"点击事件",transparent:""},{default:f((()=>[_(y,null,{default:f((()=>[_(C,{title:"标题文字",value:"内容",clickable:"",onClick:I})])),_:1})])),_:1}),_(U,{title:"页面跳转",transparent:""},{default:f((()=>[_(y,null,{default:f((()=>[_(C,{title:"帮助与反馈","is-link":"",to:"/pages/index/Index"}),_(C,{title:"设置",value:"内容","is-link":"",to:"/pages/button/Index",replace:""})])),_:1})])),_:1}),_(U,{title:"垂直居中",transparent:""},{default:f((()=>[_(y,null,{default:f((()=>[_(C,{title:"标题文字",value:"内容",center:""}),_(C,{title:"标题文字",label:"描述信息",value:"内容",center:""})])),_:1})])),_:1}),_(U,{title:"表单属性",transparent:""},{default:f((()=>[_(y,{border:""},{default:f((()=>[_(C,{title:"必填",required:""},{default:f((()=>[_(T,{modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=e=>n.value=e),icon:"dong","active-icon":"dong",onChange:j},null,8,["modelValue"])])),_:1}),_(C,{title:"上下结构",vertical:""},{default:f((()=>[_(A,{modelValue:h.value,"onUpdate:modelValue":i[1]||(i[1]=e=>h.value=e),onChange:V},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),_(U,{title:"设置宽度",transparent:""},{default:f((()=>[_(y,null,{default:f((()=>[_(C,{title:"标题文字",label:"这里是文字描述这里是文字描述这里是文字描述","title-width":"200px",value:"内容"})])),_:1})])),_:1}),_(U,{title:"自定义slot",transparent:""},{default:f((()=>[_(y,null,{default:f((()=>[_(C,{title:"标题文字",center:""},{default:f((()=>[_(B,{"custom-class":"custom-value",size:"small",plain:""},{default:f((()=>[p("按钮")])),_:1})])),_:1}),_(C,{title:"标题文字",center:""},{default:f((()=>[_(q,{class:"custom-value",style:{height:"32px"}},{default:f((()=>[_(D,{modelValue:k.value,"onUpdate:modelValue":i[2]||(i[2]=e=>k.value=e),onChange:z},null,8,["modelValue"])])),_:1})])),_:1}),_(C,{title:"标题文字","is-link":"",to:"/pages/index/Index"},{default:f((()=>[_(q,{class:"custom-text"},{default:f((()=>[p("订购")])),_:1})])),_:1}),_(C,null,{title:f((()=>[_(q,null,{default:f((()=>[_(q,{style:{display:"inline-block"}},{default:f((()=>[p("标题文字")])),_:1}),_(q,{class:"end-time"},{default:f((()=>[p("25天后到期")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-2b6da548"]]);export{h as default};
