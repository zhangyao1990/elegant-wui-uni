import{d as e,c as l,x as a,X as s,e as u,f as o,w as t,n as c,z as i,g as n,s as r,y as d,k as h,I as m}from"./index-72jEY8AL.js";import{c as p,k as b,l as v,m as x,d as f,b as k,n as g,H as y,a as V}from"./page-wraper.DpqTXTZc.js";const $=Symbol("wui-checkbox-group"),_={...p,modelValue:{type:Array,default:()=>[]},cell:b(!1),shape:v("circle"),checkedColor:String,disabled:b(!1),min:x(0),max:x(0),inline:b(!1),size:String},S=V(e({name:"wui-checkbox",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...p,customLabelClass:v(""),customShapeClass:v(""),modelValue:{type:[String,Number,Boolean],required:!0,default:!1},shape:{type:String},checkedColor:String,disabled:{type:[Boolean,null],default:null},trueValue:{type:[String,Number,Boolean],default:!0},falseValue:{type:[String,Number,Boolean],default:!1},size:String,maxWidth:String},emits:["change","update:modelValue"],setup(e,{expose:p,emit:b}){const v=e,x=b;p({toggle:H});const{parent:V,index:_}=f($),S=l((()=>V?V.props.modelValue.indexOf(v.modelValue)>-1:v.modelValue===v.trueValue)),C=l((()=>0===_.value)),w=l((()=>{const e=g(V)?V.children:[];return _.value===e.length-1})),{proxy:z}=m();a((()=>v.modelValue),(()=>{V&&V&&V.children&&V.children.forEach((e=>{e.$.uid!==z.$.uid&&e.modelValue===v.modelValue&&console.error(`The checkbox's bound value: ${v.modelValue} has been used`)}))})),a((()=>v.shape),(e=>{const l=["circle","square","button"];g(e)&&-1===l.indexOf(e)&&console.error(`shape must be one of ${l.toString()}`)}));const q=l((()=>v.shape||y(V,"props.shape")||"circle")),B=l((()=>v.checkedColor||y(V,"props.checkedColor"))),I=l((()=>{if(!V)return v.disabled;const{max:e,min:l,modelValue:a,disabled:s}=V.props;return!!(e&&a.length>=e&&!S.value||l&&a.length<=l&&S.value||!0===v.disabled||s&&null===v.disabled)||v.disabled})),N=l((()=>y(V,"props.inline")||!1)),W=l((()=>y(V,"props.cell")||!1)),j=l((()=>v.size||y(V,"props.size")));function H(){if(!I.value)if(V)x("change",{value:!S.value}),V.changeSelectState(v.modelValue);else{const e=v.modelValue===v.trueValue?v.falseValue:v.trueValue;x("update:modelValue",e),x("change",{value:e})}}return s((()=>{null===v.modelValue&&console.error("checkbox's value must be set")})),(e,l)=>{const a=h;return u(),o(a,{class:c(`wui-checkbox ${W.value?"is-cell-box":""} ${"button"===q.value?"is-button-box":""} ${S.value?"is-checked":""} ${C.value?"is-first-child":""} ${w.value?"is-last-child":""} ${N.value?"is-inline":""} ${"button"===q.value?"is-button":""} ${I.value?"is-disabled":""} ${j.value?"is-"+j.value:""} ${e.customClass}`),style:i(e.customStyle),onClick:H},{default:t((()=>["button"!==q.value?(u(),o(a,{key:0,class:c(`wui-checkbox__shape ${"square"===q.value?"is-square":""} ${e.customShapeClass}`),style:i(S.value&&!I.value&&B.value?"color :"+B.value:"")},{default:t((()=>[n(k,{"custom-class":"wui-checkbox__check",name:"check-bold"})])),_:1},8,["class","style"])):r("",!0),n(a,{class:c(`wui-checkbox__label ${e.customLabelClass}`),style:i(S.value&&"button"===q.value&&!I.value&&B.value?"color:"+B.value:"")},{default:t((()=>["button"===q.value&&S.value?(u(),o(k,{key:0,"custom-class":"wui-checkbox__btn-check",name:"check-bold"})):r("",!0),n(a,{class:"wui-checkbox__txt",style:i(e.maxWidth?"max-width:"+e.maxWidth:"")},{default:t((()=>[d(e.$slots,"default",{},void 0,!0)])),_:3},8,["style"])])),_:3},8,["class","style"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-ce622494"]]);export{$ as C,S as _,_ as c};
