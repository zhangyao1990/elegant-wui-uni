import{_ as e}from"./wui-input.DaUIuTAn.js";import{d as a,Z as l,r as s,a as o,b as r,e as u,f as t,w as p,g as m,l as i,m as n,F as d,h as f,k as c}from"./index-B1zkhFT1.js";import{_ as b}from"./wui-button.GUQvrKFc.js";import{c as _,b as w,_ as h,a as v}from"./page-wraper.D5sIAHqb.js";import{_ as y}from"./wui-cell-group.DAC16Zf5.js";import{_ as k}from"./wui-form.v1KYwP26.js";import"./useTranslate.BDowZoYF.js";import"./useChildren.COqmfdId.js";const g=v(a({__name:"demo1",setup(a){const v=l({name:"",phoneNumbers:[{key:Date.now(),value:""}]}),{success:g}=_(),j=s(),V=()=>{v.phoneNumbers.splice(v.phoneNumbers.length-1,1)},N=()=>{v.phoneNumbers.push({key:Date.now(),value:""})},x=()=>{j.value.reset()},C=()=>{j.value.validate().then((({valid:e,errors:a})=>{e&&g("校验通过")}))};return(a,l)=>{const s=o(r("wui-input"),e),_=o(r("wui-button"),b),g=c,z=o(r("wui-cell"),w),U=o(r("wui-cell-group"),y),q=o(r("wui-form"),k),D=o(r("page-wraper"),h);return u(),t(D,null,{default:p((()=>[m(q,{ref_key:"form",ref:j,model:v},{default:p((()=>[m(U,{border:""},{default:p((()=>[m(s,{label:"汪汪队名","label-width":"100px",prop:"name",clearable:"",modelValue:v.name,"onUpdate:modelValue":l[0]||(l[0]=e=>v.name=e),placeholder:"请输入汪汪队",rules:[{required:!0,message:"请填写汪汪队"}]},null,8,["modelValue"]),(u(!0),i(d,null,n(v.phoneNumbers,((e,a)=>(u(),t(s,{key:e.key,label:"汪汪队单号"+a,prop:"phoneNumbers."+a+".value","label-width":"100px",clearable:"",modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,placeholder:"汪汪队单号",rules:[{required:!0,message:"请填写汪汪队单号"+a}]},null,8,["label","prop","modelValue","onUpdate:modelValue","rules"])))),128)),m(z,{"title-width":"0px"},{default:p((()=>[m(g,{class:"footer"},{default:p((()=>[m(_,{size:"small",type:"info",plain:"",onClick:N},{default:p((()=>[f("添加")])),_:1}),m(_,{size:"small",type:"info",plain:"",onClick:V},{default:p((()=>[f("删除")])),_:1}),m(_,{size:"small",type:"info",plain:"",onClick:x},{default:p((()=>[f("重置")])),_:1}),m(_,{type:"primary",size:"small",onClick:C},{default:p((()=>[f("提交")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})}}}),[["__scopeId","data-v-d92ff0db"]]);export{g as default};
