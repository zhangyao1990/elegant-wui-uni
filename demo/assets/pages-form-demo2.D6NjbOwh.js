import{_ as e}from"./wui-input.DI2LB9Bu.js";import{d as a,X as l,r,a as o,b as u,o as s,c as t,w as m,e as n,f as p,i as d}from"./index-ZLmWPcj7.js";import{_ as i}from"./wui-cell-group.Cggl4_1J.js";import{_ as c}from"./wui-form.yOXFdrL4.js";import{_ as f}from"./wui-button.CFbUOCHb.js";import{c as b,a as _,b as h}from"./page-wraper.DRSg2Trj.js";import"./useTranslate.D675u6qD.js";import"./useChildren.Cu3CY4jX.js";const w=h(a({__name:"demo2",setup(a){const h=l({name:"",phoneNumber:""}),{success:w}=b(),g=r();function j(e){g.value.validate(e)}function v(){g.value.validate().then((({valid:e})=>{e&&w("校验通过")})).catch((e=>{console.log(e,"error")}))}return(a,l)=>{const r=o(u("wui-input"),e),b=o(u("wui-cell-group"),i),w=o(u("wui-form"),c),V=o(u("wui-button"),f),x=d,N=o(u("page-wraper"),_);return s(),t(N,null,{default:m((()=>[n(w,{ref_key:"form",ref:g,model:h,"reset-on-change":!1},{default:m((()=>[n(b,{border:""},{default:m((()=>[n(r,{label:"歪比巴卜","label-width":"100px",prop:"name",clearable:"",modelValue:h.name,"onUpdate:modelValue":l[0]||(l[0]=e=>h.name=e),placeholder:"请输入歪比巴卜",onBlur:l[1]||(l[1]=e=>j("name")),rules:[{required:!0,message:"请填写歪比巴卜"}]},null,8,["modelValue"]),n(r,{label:"玛卡巴卡单号",prop:"phoneNumber","label-width":"100px",clearable:"",onBlur:l[2]||(l[2]=e=>j("phoneNumber")),modelValue:h.phoneNumber,"onUpdate:modelValue":l[3]||(l[3]=e=>h.phoneNumber=e),placeholder:"玛卡巴卡单号",rules:[{required:!0,message:"请填写玛卡巴卡单号"}]},null,8,["modelValue"])])),_:1})])),_:1},8,["model"]),n(x,{class:"footer"},{default:m((()=>[n(V,{type:"primary",size:"large",block:"",onClick:v},{default:m((()=>[p("提交")])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-e0d697ae"]]);export{w as default};
