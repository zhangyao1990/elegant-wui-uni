import{d as e,q as a,o as s,c as l,w as t,x as i,p as d,e as o,f as u,t as r,ad as n,n as m,y as c,i as p}from"./index-ZLmWPcj7.js";import{f as b,y as f,z as v,l as g,g as w,w as x,Z as y,v as _,t as h,x as C,b as $}from"./page-wraper.DRSg2Trj.js";import{w as I}from"./wui-badge.CoW9TEjf.js";import{u as S}from"./useChildren.Cu3CY4jX.js";const V=Symbol("wui-sidebar"),j={...b,modelValue:f(0)},k=$(e({name:"wui-sidebar-item",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...b,label:v(String),value:v([Number,String]),badge:{type:[String,Number,null],default:null},badgeProps:Object,icon:String,isDot:{type:Boolean,default:void 0},max:Number,disabled:g(!1)},setup(e){const b=e,{parent:f}=w(V),v=a((()=>{const e=y(h(b.badgeProps)?_(b.badgeProps,C):{},_({max:b.max,isDot:b.isDot,modelValue:b.badge},C));return h(e.max)||(e.max=99),e})),g=a((()=>{let e=!1;return f&&f.props.modelValue===b.value&&(e=!0),e})),$=a((()=>{let e=!1;if(f){let a=f.children.findIndex((e=>e.value===f.props.modelValue));f.children.findIndex((e=>e.value===b.value))===a-1&&(e=!0)}return e})),S=a((()=>{let e=!1;if(f){let a=f.children.findIndex((e=>e.value===f.props.modelValue));f.children.findIndex((e=>e.value===b.value))===a+1&&(e=!0)}return e}));function j(){b.disabled||f&&f.setChange(b.value,b.label)}return(e,a)=>{const b=p;return s(),l(b,{onClick:j,class:m(`wui-sidebar-item ${g.value?"wui-sidebar-item--active":""} ${$.value?"wui-sidebar-item--prefix":""}  ${S.value?"wui-sidebar-item--suffix":""} ${e.disabled?"wui-sidebar-item--disabled":""} ${e.customClass}`),style:c(e.customStyle)},{default:t((()=>[i(e.$slots,"icon",{},void 0,!0),!e.$slots.icon&&e.icon?(s(),l(x,{key:0,"custom-class":"wui-sidebar-item__icon",name:e.icon},null,8,["name"])):d("",!0),o(I,n(v.value,{"custom-class":"wui-sidebar-item__badge"}),{default:t((()=>[u(r(e.label),1)])),_:1},16)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-d2cf0e6d"]]),D=$(e({name:"wui-sidebar",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:j,emits:["change","update:modelValue"],setup(e,{emit:a}){const d=e,u=a,{linkChildren:r}=S(V);return r({props:d,setChange:function(e,a){u("update:modelValue",e),u("change",{value:e,label:a})}}),(e,a)=>{const d=p;return s(),l(d,{class:m(`wui-sidebar ${e.customClass}`),style:c(e.customStyle)},{default:t((()=>[i(e.$slots,"default",{},void 0,!0),o(d,{class:"wui-sidebar__padding"})])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-c28013d2"]]);export{k as _,D as a};
