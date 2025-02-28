import{d as e,r as a,z as l,H as n,a as t,g as u,i as s,B as o,s as i,w as r,x as c,h as d,a9 as m,n as v,p as h,aa as g,F as p,k as f,t as y,O as w}from"./index-C9W9llSX.js";import{J as k,k as b,l as x,m as _,c as C,M as K,R as $,x as I,K as S,Q as P,$ as E,P as O,n as V,a as H}from"./page-wraper.BAAFjrch.js";function D(e,a,l){let n=K(e)?e:[e];const t=new Set(e.map($));if(1!==t.size&&t.has("object"))throw Error("The columns are correct");K(e[0])||(n=[n]);return n.map((e=>e.map((e=>{if(!I(e))return{[a]:e,[l]:e};if(!e.hasOwnProperty(a)&&!e.hasOwnProperty(l))throw Error("Can't find valueKey and labelKey in columns");return e.hasOwnProperty(l)||(e[l]=e[a]),e.hasOwnProperty(a)||(e[a]=e[l]),e}))))}const j=H(e({name:"wui-picker-view",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...C,loading:b(!1),loadingColor:x("#4D80F0"),columnsHeight:_(217),valueKey:x("value"),labelKey:x("label"),immediateChange:b(!1),modelValue:{type:[String,Number,Boolean,Array,Array,Array],default:"",required:!0},columns:k(),columnChange:Function},emits:["change","pickstart","pickend","update:modelValue"],setup(e,{expose:k,emit:b}){const x=e,_=b,C=a([]),I=a(35),H=a([]);l([()=>x.modelValue,()=>x.columns],((e,a)=>{!O(a[1],e[1])&&K(e[1])&&e[1].length>0&&(C.value=D(e[1],x.valueKey,x.labelKey)),V(e[0])&&function(e){if(0===C.value.length)return;(""===e||!V(e)||K(e)&&0===e.length)&&(e=C.value.map((e=>e[0][x.valueKey])));const a=$(e),l=["string","number","boolean","array"];-1===l.indexOf(a)&&console.error(`value must be one of ${l.toString()}`);e=(e=K(e)?e:[e]).slice(0,C.value.length);let n=P(H.value);e.forEach(((e,a)=>{let l=C.value[a].findIndex((a=>a[x.valueKey].toString()===e.toString()));l=-1===l?0:l,n=A(a,l,n)})),H.value=n.slice(0,e.length)}(e[0])}),{deep:!0,immediate:!0});const{proxy:j}=n();function A(e,a,l){const n=C.value[e];if(!n||!n[a])throw Error(`The value to select with Col:${e} Row:${a} is incorrect`);const t=P(l);if(t[e]=a,n[a].disabled){const l=n.slice(0,a).reverse().findIndex((e=>!e.disabled)),u=n.slice(a+1).findIndex((e=>!e.disabled));-1!==l?t[e]=a-1-l:-1!==u?t[e]=a+1+u:void 0===t[e]&&(t[e]=0)}return t}function F({detail:{value:e}}){const a=function(e){e=e.slice(0,C.value.length);const a=P(H.value);let l=P(H.value);e.forEach(((e,n)=>{(e=E(e,0,C.value[n].length-1))!==a[n]&&(l=A(n,e,l))}));const n=function(e,a){if(!e||!a)return-1;const l=e.findIndex(((e,l)=>e!==a[l]));return l}(l,a);if(-1===n)return;const t=l[n];return 1===l.length?t:n}(e=e.map((e=>Number(e||0))));H.value=P(e),w((()=>{H.value=function(e){let a=P(e);return e.forEach(((e,l)=>{e=E(e,0,C.value[l].length-1),a=A(l,e,a)})),a}(e),x.columnChange?x.columnChange.length<4?(x.columnChange(j.$.exposed,z(),a||0,(()=>{})),T(a||0)):x.columnChange(j.$.exposed,z(),a||0,(()=>{T(a||0)})):T(a||0)}))}function T(e){const a=B();O(a,x.modelValue)||(_("update:modelValue",a),setTimeout((()=>{_("change",{picker:j.$.exposed,value:a,index:e})}),0))}function z(){const e=H.value.map(((e,a)=>C.value[a][e]));return 1===e.length?e[0]:e}function B(){const{valueKey:e}=x,a=H.value.map(((a,l)=>C.value[l][a][e]));return 1===a.length?a[0]:a}function N(){_("pickstart")}function R(){_("pickend")}return k({getSelects:z,getValues:B,setColumnData:function(e,a,l=0){C.value[e]=D(a,x.valueKey,x.labelKey).reduce(((e,a)=>e.concat(a)),[]),H.value=A(e,l,H.value)},getColumnsData:function(){return P(C.value)},getColumnData:function(e){return C.value[e]},getColumnIndex:function(e){return H.value[e]},getLabels:function(){const{labelKey:e}=x;return H.value.map(((a,l)=>C.value[l][a][e]))},getSelectedIndex:function(){return H.value},resetColumns:function(e){K(e)&&e.length&&(C.value=D(e,x.valueKey,x.labelKey))}}),(e,a)=>{const l=s,n=g,w=m;return u(),t(l,{class:i(`wui-picker-view ${e.customClass}`),style:o(e.customStyle)},{default:r((()=>[e.loading?(u(),t(l,{key:0,class:"wui-picker-view__loading"},{default:r((()=>[d(S,{color:e.loadingColor},null,8,["color"])])),_:1})):c("",!0),d(l,{style:o(`height: ${e.columnsHeight-20}px;`)},{default:r((()=>[d(w,{"mask-class":"wui-picker-view__mask","indicator-class":"wui-picker-view__roller","indicator-style":`height: ${I.value}px;`,style:o(`height: ${e.columnsHeight-20}px;`),value:H.value,"immediate-change":e.immediateChange,onChange:F,onPickstart:N,onPickend:R},{default:r((()=>[(u(!0),v(p,null,h(C.value,((a,s)=>(u(),t(n,{key:s,class:"wui-picker-view-column"},{default:r((()=>[(u(!0),v(p,null,h(a,((a,n)=>(u(),t(l,{key:n,class:i(`wui-picker-view-column__item ${a.disabled?"wui-picker-view-column__item--disabled":""}  ${H.value[s]==n?"wui-picker-view-column__item--active":""}`),style:o(`line-height: ${I.value}px;`)},{default:r((()=>[f(y(a[e.labelKey]),1)])),_:2},1032,["class","style"])))),128))])),_:2},1024)))),128))])),_:1},8,["indicator-style","style","value","immediate-change"])])),_:1},8,["style"])])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-9408c468"]]);export{j as _,D as f};
