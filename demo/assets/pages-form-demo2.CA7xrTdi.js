import{_ as e}from"./wui-input.B8QcNBcY.js";import{d as a,_ as l,r as o,a as r,b as u,e as s,f as d,w as t,g as n,h as i,k as m}from"./index-CppQkjPQ.js";import{_ as p}from"./wui-cell-group.DZq-tyDJ.js";import{_ as c}from"./wui-form.Yevl3Ohq.js";import{_ as f}from"./wui-button.D5TM7_AH.js";import{b,_ as h,a as _}from"./page-wraper.BtTn2L9S.js";import"./useTranslate.Cnv2QAD4.js";import"./useChildren.BQ208M7a.js";const w=_(a({__name:"demo2",setup(a){const _=l({name:"",phoneNumber:"",id:""}),{success:w}=b(),g=o();function v(e){g.value.validate(e)}function V(){g.value.validate(["phoneNumber","id"]).then((({valid:e})=>{e&&w("校验通过")})).catch((e=>{console.log(e,"error")}))}function j(){g.value.validate().then((({valid:e})=>{e&&w("校验通过")})).catch((e=>{console.log(e,"error")}))}return(a,l)=>{const o=r(u("wui-input"),e),b=r(u("wui-cell-group"),p),w=r(u("wui-form"),c),y=r(u("wui-button"),f),N=m,x=r(u("page-wraper"),h);return s(),d(x,null,{default:t((()=>[n(w,{ref_key:"form",ref:g,model:_,"reset-on-change":!1},{default:t((()=>[n(b,{border:""},{default:t((()=>[n(o,{label:"汪汪队","label-width":"100px",prop:"name",clearable:"",modelValue:_.name,"onUpdate:modelValue":l[0]||(l[0]=e=>_.name=e),placeholder:"请输入汪汪队",onBlur:l[1]||(l[1]=e=>v("name")),rules:[{required:!0,message:"请填写汪汪队"}]},null,8,["modelValue"]),n(o,{label:"汪汪队单号",prop:"phoneNumber","label-width":"100px",clearable:"",onBlur:l[2]||(l[2]=e=>v("phoneNumber")),modelValue:_.phoneNumber,"onUpdate:modelValue":l[3]||(l[3]=e=>_.phoneNumber=e),placeholder:"汪汪队单号",rules:[{required:!0,message:"请填写汪汪队单号"}]},null,8,["modelValue"]),n(o,{label:"汪汪队id",prop:"id","label-width":"100px",clearable:"",onBlur:l[4]||(l[4]=e=>v("id")),modelValue:_.id,"onUpdate:modelValue":l[5]||(l[5]=e=>_.id=e),placeholder:"汪汪队id",rules:[{required:!0,message:"请填写汪汪队id"}]},null,8,["modelValue"])])),_:1})])),_:1},8,["model"]),n(N,{class:"footer"},{default:t((()=>[n(y,{type:"primary",onClick:j},{default:t((()=>[i("提交")])),_:1}),n(y,{type:"primary",onClick:V},{default:t((()=>[i("校验单号和ID")])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-05e769b7"]]);export{w as default};
