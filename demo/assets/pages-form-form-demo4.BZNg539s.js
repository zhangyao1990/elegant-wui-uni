import{_ as e}from"./wui-input.C1veFYji.js";import{d as a,E as l,r,a as o,b as s,e as u,f as t,w as p,g as d,h as m,k as i}from"./index-72jEY8AL.js";import{_ as f}from"./wui-cell-group.OGgFKfrn.js";import{_ as n}from"./wui-button.jKeBZ4e9.js";import{_ as c}from"./wui-form.9_GfZPio.js";import{f as w,_,a as v}from"./page-wraper.DpqTXTZc.js";import"./useTranslate.C1TcN3no.js";import"./useChildren.BgpN10K6.js";const b=v(a({__name:"demo4",setup(a){const{success:v}=w(),b=l({value1:"",value2:""}),g=r();function h(){g.value.validate().then((({valid:e,errors:a})=>{e&&v({msg:"校验通过"})})).catch((e=>{console.log(e,"error")}))}return(a,l)=>{const r=o(s("wui-input"),e),w=o(s("wui-cell-group"),f),v=o(s("wui-button"),n),j=i,V=o(s("wui-form"),c),y=o(s("page-wraper"),_);return u(),t(y,null,{default:p((()=>[d(V,{ref_key:"form",ref:g,model:b,errorType:"toast"},{default:p((()=>[d(w,{border:""},{default:p((()=>[d(r,{label:"汪汪队","label-width":"100px",prop:"value1",clearable:"",modelValue:b.value1,"onUpdate:modelValue":l[0]||(l[0]=e=>b.value1=e),placeholder:"请输入汪汪队",rules:[{required:!0,message:"请填写汪汪队"}]},null,8,["modelValue"]),d(r,{label:"汪汪队","label-width":"100px",prop:"value2","show-password":"",clearable:"",modelValue:b.value2,"onUpdate:modelValue":l[1]||(l[1]=e=>b.value2=e),placeholder:"请输入汪汪队",rules:[{required:!0,message:"请填写汪汪队"}]},null,8,["modelValue"])])),_:1}),d(j,{class:"footer"},{default:p((()=>[d(v,{type:"primary",size:"large",onClick:h,block:""},{default:p((()=>[m("提交")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})}}}),[["__scopeId","data-v-f15a860f"]]);export{b as default};
