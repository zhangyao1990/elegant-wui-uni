import{_ as e}from"./wui-input-number.BfzoZU2M.js";import{d as l,r as a,a as o,b as u,o as n,c as t,w as d,e as m,f as s,t as i,i as p}from"./index-Dr4mJiuc.js";import{_ as c}from"./demo-block.DQEtA4yj.js";import{c as v,a as V,b as f}from"./page-wraper.DKh8GSae.js";const r=f(l({__name:"Index",setup(l){const{loading:f,close:r}=v(),g=a(1),_=a(1),h=a(1),U=a(2),b=a(1),w=a("1.205"),C=a(1),x=a(2),j=a(""),I=a(1),k=a(1);function y({value:e}){console.log(e)}function P({value:e}){console.log(e)}function T({value:e}){console.log(e)}function $({value:e}){console.log(e)}function q({value:e}){console.log(e)}function z({value:e}){console.log(e)}function A({value:e}){console.log(e)}function B({value:e}){console.log(e)}function D({value:e}){console.log(e)}const E=e=>(f({msg:`正在更新到${e}...`}),new Promise((e=>{setTimeout((()=>{r(),e(!0)}),500)})));return(l,a)=>{const v=o(u("wui-input-number"),e),f=o(u("demo-block"),c),r=p,F=o(u("page-wraper"),V);return n(),t(F,null,{default:d((()=>[m(f,{title:"基本用法"},{default:d((()=>[m(v,{modelValue:g.value,"onUpdate:modelValue":a[0]||(a[0]=e=>g.value=e),onChange:y},null,8,["modelValue"])])),_:1}),m(f,{title:"设置步长"},{default:d((()=>[m(v,{modelValue:_.value,"onUpdate:modelValue":a[1]||(a[1]=e=>_.value=e),onChange:P,step:2},null,8,["modelValue"])])),_:1}),m(f,{title:"限制最大最小值"},{default:d((()=>[m(v,{modelValue:h.value,"onUpdate:modelValue":a[2]||(a[2]=e=>h.value=e),onChange:T,min:3,max:10},null,8,["modelValue"])])),_:1}),m(f,{title:"禁用"},{default:d((()=>[m(v,{modelValue:U.value,"onUpdate:modelValue":a[3]||(a[3]=e=>U.value=e),onChange:$,disabled:""},null,8,["modelValue"])])),_:1}),m(f,{title:"禁用输入框"},{default:d((()=>[m(v,{modelValue:I.value,"onUpdate:modelValue":a[4]||(a[4]=e=>I.value=e),onChange:$,"disable-input":""},null,8,["modelValue"])])),_:1}),m(f,{title:"无输入框"},{default:d((()=>[m(r,{class:"flex"},{default:d((()=>[m(r,null,{default:d((()=>[s("数量："+i(b.value),1)])),_:1}),m(v,{modelValue:b.value,"onUpdate:modelValue":a[5]||(a[5]=e=>b.value=e),onChange:q,"without-input":""},null,8,["modelValue"])])),_:1})])),_:1}),m(f,{title:"设置小数精度"},{default:d((()=>[m(v,{modelValue:w.value,"onUpdate:modelValue":a[6]||(a[6]=e=>w.value=e),onChange:z,precision:2,step:.1},null,8,["modelValue"])])),_:1}),m(f,{title:"输入严格为步数的倍数"},{default:d((()=>[m(v,{modelValue:C.value,"onUpdate:modelValue":a[7]||(a[7]=e=>C.value=e),onChange:A,"step-strictly":"",step:2},null,8,["modelValue"])])),_:1}),m(f,{title:"修改输入框宽度"},{default:d((()=>[m(v,{modelValue:x.value,"onUpdate:modelValue":a[8]||(a[8]=e=>x.value=e),"input-width":"70px",onChange:B},null,8,["modelValue"])])),_:1}),m(f,{title:"允许空值，并设置 placeholder"},{default:d((()=>[m(v,{modelValue:j.value,"onUpdate:modelValue":a[9]||(a[9]=e=>j.value=e),"allow-null":"",placeholder:"不限","input-width":"70px",onChange:D},null,8,["modelValue"])])),_:1}),m(f,{title:"异步变更"},{default:d((()=>[m(v,{modelValue:k.value,"onUpdate:modelValue":a[10]||(a[10]=e=>k.value=e),"before-change":E},null,8,["modelValue"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-68bc0508"]]);export{r as default};
