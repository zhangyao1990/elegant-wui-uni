import{d as e,c as l,z as a,a as s,g as o,i as t,B as u,s as n,w as i,h as c,A as r,x as d}from"./index-C9W9llSX.js";import{l as p,k as m,c as v,v as h,d as b,H as y,n as f,b as g,a as $}from"./page-wraper.BAAFjrch.js";import{u as k}from"./useChildren.B38JgdGT.js";const S=Symbol("wui-radio-group"),_={...v,modelValue:[String,Number,Boolean],shape:p("check"),checkedColor:String,disabled:m(!1),cell:m(!1),size:p(""),inline:m(!1),iconPlacement:p("auto")},C=$(e({name:"wui-radio",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...v,value:h([String,Number,Boolean]),shape:String,checkedColor:String,disabled:{type:[Boolean,null],default:null},cell:{type:[Boolean,null],default:null},size:String,inline:{type:[Boolean,null],default:null},maxWidth:String,iconPlacement:{type:[String,null],default:null}},setup(e){const p=e,{parent:m}=b(S),v=l((()=>!!m&&p.value===m.props.modelValue)),h=l((()=>p.shape||y(m,"props.shape"))),$=l((()=>p.checkedColor||y(m,"props.checkedColor"))),k=l((()=>f(p.disabled)?p.disabled:y(m,"props.disabled"))),_=l((()=>f(p.inline)?p.inline:y(m,"props.inline"))),C=l((()=>p.size||y(m,"props.size"))),w=l((()=>f(p.cell)?p.cell:y(m,"props.cell"))),x=l((()=>f(p.iconPlacement)?p.iconPlacement:y(m,"props.iconPlacement")));function B(){const{value:e}=p;!k.value&&m&&f(e)&&m.updateValue(e)}return a((()=>p.shape),(e=>{const l=["check","dot","button"];e&&-1!==l.indexOf(e)||console.error(`shape must be one of ${l.toString()}`)})),(e,l)=>{const a=t;return o(),s(a,{class:n(`wui-radio ${w.value?"is-cell-radio":""} ${w.value&&"button"==h.value?"is-button-radio":""} ${C.value?"is-"+C.value:""} ${_.value?"is-inline":""} ${v.value?"is-checked":""} ${"check"!==h.value?"is-"+h.value:""} ${k.value?"is-disabled":""} icon-placement-${x.value} ${e.customClass}`),style:u(e.customStyle),onClick:B},{default:i((()=>[c(a,{class:"wui-radio__label",style:u(`${e.maxWidth?"max-width:"+e.maxWidth:""};  ${v.value&&"button"===h.value&&!k.value?"color :"+$.value:""}`)},{default:i((()=>[r(e.$slots,"default",{},void 0,!0)])),_:3},8,["style"]),c(a,{class:"wui-radio__shape",style:u(v.value&&!k.value?"color: "+$.value:"")},{default:i((()=>["check"===h.value?(o(),s(g,{key:0,style:u(v.value&&!k.value?"color: "+$.value:""),name:"check"},null,8,["style"])):d("",!0)])),_:1},8,["style"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-8c82d107"]]),w=$(e({name:"wui-radio-group",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:_,emits:["change","update:modelValue"],setup(e,{emit:l}){const c=e,d=l,{linkChildren:p}=k(S);return p({props:c,updateValue:function(e){d("update:modelValue",e),d("change",{value:e})}}),a((()=>c.shape),(e=>{const l=["check","dot","button"];-1===l.indexOf(e)&&console.error(`shape must be one of ${l.toString()}`)}),{deep:!0,immediate:!0}),(e,l)=>{const a=t;return o(),s(a,{class:n(`wui-radio-group  ${e.customClass} ${e.cell&&"button"===e.shape?"is-button":""}`),style:u(e.customStyle)},{default:i((()=>[r(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-ac59f69e"]]);export{C as _,w as a};
