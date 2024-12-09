import{d as e,r as l,q as a,v as s,m as o,S as t,a9 as u,o as i,c as n,w as r,e as c,x as d,n as m,y as p,g as v,f,t as g,F as y,p as _,u as h,V as b,i as k,L as w}from"./index-ZLmWPcj7.js";import{f as C,i as V,l as S,m as x,N as $,O as F,g as K,U as T,r as I,t as z,T as q,W as A,w as B,k as L,P as O,E as W,b as j}from"./page-wraper.DRSg2Trj.js";import{f as M,w as P}from"./wui-picker-view.B9xWZfqC.js";import{u as D}from"./useTranslate.D675u6qD.js";const H=j(e({name:"wui-picker",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...C,customLabelClass:V(""),customValueClass:V(""),customViewClass:V(""),label:String,placeholder:String,disabled:S(!1),readonly:S(!1),loading:S(!1),loadingColor:V("#4D80F0"),title:String,cancelButtonText:String,confirmButtonText:String,required:S(!1),size:String,labelWidth:String,useDefaultSlot:S(!1),useLabelSlot:S(!1),error:S(!1),alignRight:S(!1),beforeConfirm:Function,closeOnClickModal:S(!0),safeAreaInsetBottom:S(!0),ellipsis:S(!1),columnsHeight:x(217),valueKey:V("value"),labelKey:V("label"),modelValue:{type:[String,Number,Array],default:""},columns:{type:Array,default:()=>[]},columnChange:Function,displayFormat:Function,zIndex:x(15),prop:String,rules:$(),immediateChange:S(!1),clearable:S(!1)},emits:["confirm","open","cancel","clear","update:modelValue"],setup(e,{expose:C,emit:V}){const{translate:S}=D("picker"),x=e,$=V,j=l(null),H=F(),U=l(!1),E=l(!1),N=l(""),R=l(""),G=l([]),J=l([]),Q=l(!1),X=l(!1),Y=a((()=>x.loading||U.value));s((()=>x.displayFormat),(e=>{e&&!W(e)&&console.error("The type of displayFormat must be Function"),j.value&&0!==j.value.getSelectedIndex().length&&se(x.modelValue)}),{immediate:!0,deep:!0}),s((()=>x.modelValue),(e=>{R.value=e,se(e)}),{deep:!0,immediate:!0}),s((()=>x.columns),(e=>{G.value=T(e),J.value=T(e),se(x.modelValue)}),{deep:!0,immediate:!0}),s((()=>x.columnChange),(e=>{e&&!W(e)&&console.error("The type of columnChange must be Function")}),{deep:!0,immediate:!0});const{parent:Z}=K(O),ee=a((()=>Z&&x.prop&&Z.errorMessages&&Z.errorMessages[x.prop]?Z.errorMessages[x.prop]:"")),le=a((()=>{let e=!1;if(Z&&Z.props.rules){const l=Z.props.rules;for(const a in l)Object.prototype.hasOwnProperty.call(l,a)&&a===x.prop&&Array.isArray(l[a])&&(e=l[a].some((e=>e.required)))}return x.required||x.rules.some((e=>e.required))||e})),{proxy:ae}=w();function se(e){I(e)&&e.length>0||z(e)&&!I(e)&&""!==e?j.value?u((()=>{re(j.value.getSelects())})):re(function(e){const l=M(x.columns,x.valueKey,x.labelKey);if(0===x.columns.length)return;if(""===e||!z(e)||I(e)&&0===e.length)return;const a=q(e);if(-1===["string","number","boolean","array"].indexOf(a))return[];e=I(e)?e:[e],e=e.slice(0,l.length),0===e.length&&(e=l.map((()=>0)));let s=[];e.forEach(((e,a)=>{let o=l[a].findIndex((l=>l[x.valueKey].toString()===e.toString()));o=-1===o?0:o,s.push(o)}));const o=s.map(((e,a)=>l[a][e]));if(1===o.length)return o[0];return o}(e)):N.value=""}function oe(){x.disabled||x.readonly||($("open"),E.value=!0,R.value=x.modelValue,G.value=J.value)}function te(){E.value=!1,$("cancel");let e=setTimeout((()=>{clearTimeout(e),z(j.value)&&j.value.resetColumns(J.value)}),300)}function ue(){if(Y.value)return;if(Q.value)return void(X.value=!0);const{beforeConfirm:e}=x;e&&W(e)?e(R.value,(e=>{e&&ie()}),ae.$.exposed):ie()}function ie(){if(Y.value||x.disabled)return void(E.value=!1);const e=j.value.getSelects(),l=j.value.getValues(),a=j.value.getColumnsData();E.value=!1,J.value=T(a),$("update:modelValue",l),re(e),$("confirm",{value:l,selectedItems:e})}function ne({value:e}){R.value=e}function re(e){if(I(e)&&!e.length||!e)return;const{valueKey:l,labelKey:a}=x;N.value=(x.displayFormat||A)(e,{valueKey:l,labelKey:a})}function ce(){}function de(){Q.value=!0}function me(){Q.value=!1,X.value&&(X.value=!1,ue())}o((()=>{se(x.modelValue)})),t((()=>{G.value=T(x.columns),J.value=T(x.columns)}));const pe=a((()=>x.clearable&&!x.disabled&&!x.readonly&&N.value.length));function ve(){const e=I(R.value)?[]:"";$("update:modelValue",e),$("clear")}const fe=a((()=>!x.disabled&&!x.readonly&&!pe.value));return C({close:function(){te()},open:function(){oe()},setLoading:function(e){U.value=e}}),(e,l)=>{const a=k;return i(),n(a,{class:m(`wui-picker ${e.disabled?"is-disabled":""} ${e.size?"is-"+e.size:""}  ${h(H).border.value?"is-border":""} ${e.alignRight?"is-align-right":""} ${e.error?"is-error":""} ${e.customClass}`),style:p(e.customStyle)},{default:r((()=>[c(a,{class:"wui-picker__field",onClick:oe},{default:r((()=>[e.useDefaultSlot?d(e.$slots,"default",{key:0},void 0,!0):(i(),n(a,{key:1,class:"wui-picker__cell"},{default:r((()=>[e.label||e.useLabelSlot?(i(),n(a,{key:0,class:m(`wui-picker__label ${e.customLabelClass}  ${le.value?"is-required":""}`),style:p(e.labelWidth?"min-width:"+e.labelWidth+";max-width:"+e.labelWidth+";":"")},{default:r((()=>[e.label?(i(),v(y,{key:0},[f(g(e.label),1)],64)):d(e.$slots,"label",{key:1},void 0,!0)])),_:3},8,["class","style"])):_("",!0),c(a,{class:"wui-picker__body"},{default:r((()=>[c(a,{class:"wui-picker__value-wraper"},{default:r((()=>[c(a,{class:m(`wui-picker__value ${e.ellipsis&&"is-ellipsis"} ${e.customValueClass} ${N.value?"":"wui-picker__placeholder"}`)},{default:r((()=>[f(g(N.value?N.value:e.placeholder||h(S)("placeholder")),1)])),_:1},8,["class"]),fe.value?(i(),n(B,{key:0,"custom-class":"wui-picker__arrow",name:"arrow-right"})):pe.value?(i(),n(a,{key:1,onClick:b(ve,["stop"])},{default:r((()=>[c(B,{"custom-class":"wui-picker__clear",name:"error-fill"})])),_:1})):_("",!0)])),_:1}),ee.value?(i(),n(a,{key:0,class:"wui-picker__error-message"},{default:r((()=>[f(g(ee.value),1)])),_:1})):_("",!0)])),_:1})])),_:3}))])),_:3}),c(L,{modelValue:E.value,"onUpdate:modelValue":l[1]||(l[1]=e=>E.value=e),position:"bottom","hide-when-close":!1,"close-on-click-modal":e.closeOnClickModal,"z-index":e.zIndex,"safe-area-inset-bottom":e.safeAreaInsetBottom,onClose:te,"custom-class":"wui-picker__popup"},{default:r((()=>[c(a,{class:"wui-picker__wraper"},{default:r((()=>[c(a,{class:"wui-picker__toolbar",onTouchmove:ce},{default:r((()=>[c(a,{class:"wui-picker__action wui-picker__action--cancel",onClick:te},{default:r((()=>[f(g(e.cancelButtonText||h(S)("cancel")),1)])),_:1}),e.title?(i(),n(a,{key:0,class:"wui-picker__title"},{default:r((()=>[f(g(e.title),1)])),_:1})):_("",!0),c(a,{class:m("wui-picker__action "+(Y.value?"is-loading":"")),onClick:ue},{default:r((()=>[f(g(e.confirmButtonText||h(S)("done")),1)])),_:1},8,["class"])])),_:1}),c(P,{ref_key:"pickerViewWd",ref:j,"custom-class":e.customViewClass,modelValue:R.value,"onUpdate:modelValue":l[0]||(l[0]=e=>R.value=e),columns:G.value,loading:Y.value,"loading-color":e.loadingColor,"columns-height":e.columnsHeight,"value-key":e.valueKey,"label-key":e.labelKey,"immediate-change":e.immediateChange,onChange:ne,onPickstart:de,onPickend:me,"column-change":e.columnChange},null,8,["custom-class","modelValue","columns","loading","loading-color","columns-height","value-key","label-key","immediate-change","column-change"])])),_:1})])),_:1},8,["modelValue","close-on-click-modal","z-index","safe-area-inset-bottom"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-6702e823"]]);export{H as _};