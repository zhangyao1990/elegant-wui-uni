import{d as e,c as a,e as s,f as l,w as t,y as i,s as o,g as d,h as u,t as n,aa as r,n as m,z as c,k as b}from"./index-DUOrDz0Y.js";import{f as p,z as f,S as v,n as g,g as w,w as h,N as x,x as y,r as _,y as C,a as $,D as I}from"./page-wraper.BMayt547.js";import{w as S}from"./wui-badge.DDFUSv_A.js";import{u as V}from"./useChildren.DAW_Lzzu.js";const j=Symbol("wui-sidebar"),k={...p,modelValue:f(0),beforeChange:Function},D=$(e({name:"wui-sidebar-item",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...p,label:v(String),value:v([Number,String]),badge:{type:[String,Number,null],default:null},badgeProps:Object,icon:String,isDot:{type:Boolean,default:void 0},max:Number,disabled:g(!1)},setup(e){const p=e,{parent:f}=w(j),v=a((()=>{const e=x(_(p.badgeProps)?y(p.badgeProps,C):{},y({max:p.max,isDot:p.isDot,modelValue:p.badge},C));return _(e.max)||(e.max=99),e})),g=a((()=>{let e=!1;return f&&f.props.modelValue===p.value&&(e=!0),e})),$=a((()=>{let e=!1;if(f){let a=f.children.findIndex((e=>e.value===f.props.modelValue));f.children.findIndex((e=>e.value===p.value))===a-1&&(e=!0)}return e})),I=a((()=>{let e=!1;if(f){let a=f.children.findIndex((e=>e.value===f.props.modelValue));f.children.findIndex((e=>e.value===p.value))===a+1&&(e=!0)}return e}));function V(){p.disabled||f&&f.setChange(p.value,p.label)}return(e,a)=>{const p=b;return s(),l(p,{onClick:V,class:m(`wui-sidebar-item ${g.value?"wui-sidebar-item--active":""} ${$.value?"wui-sidebar-item--prefix":""}  ${I.value?"wui-sidebar-item--suffix":""} ${e.disabled?"wui-sidebar-item--disabled":""} ${e.customClass}`),style:c(e.customStyle)},{default:t((()=>[i(e.$slots,"icon",{},void 0,!0),!e.$slots.icon&&e.icon?(s(),l(h,{key:0,"custom-class":"wui-sidebar-item__icon",name:e.icon},null,8,["name"])):o("",!0),d(S,r(v.value,{"custom-class":"wui-sidebar-item__badge"}),{default:t((()=>[u(n(e.label),1)])),_:1},16)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-d2cf0e6d"]]),N=$(e({name:"wui-sidebar",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:k,emits:["change","update:modelValue"],setup(e,{emit:a}){const o=e,u=a,{linkChildren:n}=V(j);function r(e,a){u("update:modelValue",e),u("change",{value:e,label:a})}return n({props:o,setChange:function(e,a){I(o.beforeChange)?o.beforeChange({value:e,resolve:s=>{s&&r(e,a)}}):r(e,a)}}),(e,a)=>{const o=b;return s(),l(o,{class:m(`wui-sidebar ${e.customClass}`),style:c(e.customStyle)},{default:t((()=>[i(e.$slots,"default",{},void 0,!0),d(o,{class:"wui-sidebar__padding"})])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-01b06a54"]]);export{D as _,N as a};
