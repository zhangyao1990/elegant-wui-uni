import{d as e,r as a,q as t,v as s,o as l,c as r,w as i,g as o,h as n,F as u,n as c,y as d,i as m,e as p}from"./index-CxD5Cs3x.js";import{f as y,m as g,l as b,i as h,w as v,b as f}from"./page-wraper.Dkub_oR0.js";const w=f(e({name:"wui-rate",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...y,num:g(5),modelValue:{type:[String,Number,null],default:null},readonly:b(!1),size:h("16px"),space:h("4px"),color:h("#E8E8E8"),activeColor:{type:[String,Array],default:"linear-gradient(180deg, rgba(255,238,0,1) 0%,rgba(250,176,21,1) 100%)"},icon:h("star-on"),activeIcon:h("star-on"),disabled:b(!1),disabledColor:h("linear-gradient(315deg, rgba(177,177,177,1) 0%,rgba(199,199,199,1) 100%)")},emits:["update:modelValue","change"],setup(e,{emit:y}){const g=e,b=y,h=a([]),f=a(""),w=t((()=>`background:${g.color}; -webkit-background-clip: text; color: transparent`)),_=t((()=>`background:${g.disabled?g.disabledColor:f.value}; -webkit-background-clip: text; color: transparent`));function z(){const{activeColor:e,modelValue:a,num:t}=g;let s="";s=Array.isArray(e)&&e.length?Number(a)<=.6*t||!e[1]?e[0]:e[1]:e,f.value=s}return s((()=>g.activeColor),(e=>{Array.isArray(e)&&!e.length&&console.error("activeColor cannot be an empty array"),z()}),{immediate:!0,deep:!0}),s([()=>g.num,()=>g.modelValue],(()=>{!function(){const{modelValue:e,num:a}=g;if(null===e||!a)return;if("number"!=typeof e)return void console.error("[Wui Design] error(wui-rate): the value of wui-rate should be a number");const t=[],s=Math.ceil(e)-1;for(let l=0;l<a;l++)if(l<s)t.push("100%");else if(l===s){const a=e-s>.5?1:.5;t.push(100*a+"%")}else t.push("0");h.value=t,z()}()}),{immediate:!0,deep:!0}),(e,a)=>{const t=m;return l(),r(t,{class:c(`wui-rate ${e.customClass}`),style:d(e.customStyle)},{default:i((()=>[(l(!0),o(u,null,n(h.value,((a,s)=>(l(),r(t,{key:s,"data-index":s,style:d({"margin-right":s==h.value.length-1?0:e.space}),class:"wui-rate__item",onClick:e=>function(e){g.readonly||g.disabled||(b("update:modelValue",e+1),b("change",{value:e+1}))}(s)},{default:i((()=>[p(t,{class:"wui-rate__item-star",style:d({width:e.size,height:e.size})},{default:i((()=>[p(v,{name:e.icon,size:e.size,"custom-style":w.value},null,8,["name","size","custom-style"])])),_:1},8,["style"]),p(t,{class:"wui-rate__item-star wui-rate__item-star--active",style:d({width:a,height:e.size})},{default:i((()=>[p(v,{name:e.activeIcon,size:e.size,"custom-style":_.value},null,8,["name","size","custom-style"])])),_:2},1032,["style"])])),_:2},1032,["data-index","style","onClick"])))),128))])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-75533a1a"]]);export{w as _};