import{d as s,c as a,e as o,f as e,w as t,y as l,n as r,z as i,h as u,t as n,s as d,k as p}from"./index-DUOrDz0Y.js";import{f as c,E as g,n as m,i as b,F as h,r as y,h as f,o as v,a as w}from"./page-wraper.BMayt547.js";const _=w(s({name:"wui-badge",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...c,modelValue:g,showZero:m(!1),bgColor:String,max:Number,isDot:Boolean,hidden:Boolean,type:b(void 0),top:g,right:g},setup(s){const c=s,g=a((()=>{const{modelValue:s,max:a,isDot:o}=c;if(o)return"";let e=s;return e&&a&&h(e)&&!Number.isNaN(e)&&!Number.isNaN(a)&&(e=a<e?`${a}+`:e),e})),m=a((()=>{const s={};return y(c.bgColor)&&(s.backgroundColor=c.bgColor),y(c.top)&&(s.top=f(c.top)),y(c.right)&&(s.right=f(c.right)),v(s)})),b=a((()=>!c.hidden&&(g.value||0===g.value&&c.showZero||c.isDot)));return(s,a)=>{const c=p;return o(),e(c,{class:r(["wui-badge",s.customClass]),style:i(s.customStyle)},{default:t((()=>[l(s.$slots,"default",{},void 0,!0),b.value?(o(),e(c,{key:0,class:r(["wui-badge__content","is-fixed",s.type?"wui-badge__content--"+s.type:"",s.isDot?"is-dot":""]),style:i(m.value)},{default:t((()=>[u(n(g.value),1)])),_:1},8,["class","style"])):d("",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-679694e4"]]);export{_ as w};
