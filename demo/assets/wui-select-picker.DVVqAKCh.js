import{d as e,r as l,q as a,v as o,T as s,a as t,b as i,o as r,c as u,w as c,e as n,x as d,n as p,y as m,g as f,f as v,t as b,F as y,p as k,u as h,W as _,h as g,aa as w,i as x,ab as C,M as V,j as $}from"./index-Dr4mJiuc.js";import{f as S,i as K,n as z,m as j,S as F,O as I,P as O,g as T,s as q,w as M,q as P,R as B,r as A,J as U,t as W,D,b as L}from"./page-wraper.DKh8GSae.js";import{_ as R}from"./wui-search.DjiEtsQv.js";import{_ as E}from"./wui-action-sheet.CqdJJt1i.js";import{_ as G}from"./wui-checkbox.BXkPrWBS.js";import{w as H}from"./wui-checkbox-group.BjNh4w19.js";import{a as J,_ as N}from"./wui-radio-group.FUiPMZ9_.js";import{_ as Q}from"./wui-button.D-2fgW8t.js";import{u as X}from"./useTranslate.lVjJraGZ.js";const Y=L(e({name:"wui-select-picker",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...S,label:String,labelWidth:K("33%"),disabled:z(!1),readonly:Boolean,placeholder:String,title:String,alignRight:z(!1),error:z(!1),required:z(!1),useLabelSlot:z(!1),useDefaultSlot:z(!1),size:String,checkedColor:String,min:j(0),max:j(0),selectSize:String,loading:z(!1),loadingColor:K("#4D80F0"),closeOnClickModal:z(!0),modelValue:F([String,Number,Boolean,Array]),columns:I(),type:K("checkbox"),valueKey:K("value"),labelKey:K("label"),confirmButtonText:String,displayFormat:Function,beforeConfirm:Function,zIndex:j(15),safeAreaInsetBottom:z(!0),filterable:z(!1),filterPlaceholder:String,ellipsis:z(!1),scrollIntoView:z(!0),prop:String,rules:I(),customContentClass:K(""),customLabelClass:K(""),customValueClass:K(""),showConfirm:z(!0),clearable:z(!1)},emits:["change","cancel","confirm","clear","update:modelValue","open","close"],setup(e,{expose:S,emit:K}){const{translate:z}=X("select-picker"),j=e,F=K,I=l(!1),L=l([]),Y=l(!1),Z=l([]),ee=l(""),le=l([]),ae=l(0),oe=O(),se=a((()=>{const e=de(j.modelValue);let l="";if(j.displayFormat)l=j.displayFormat(e,j.columns);else{const{type:a,labelKey:o}=j;if("checkbox"===a){l=(q(e)?e:[]).map((e=>ne(e))).map((e=>e[o])).join(", ")}else if("radio"===a){l=ne(e)[o]}else l=e}return l}));o((()=>j.modelValue),(e=>{e!==L.value&&(L.value=de(e),Z.value=de(e))}),{deep:!0,immediate:!0}),o((()=>j.columns),(e=>{j.filterable&&ee.value?he(e,ee.value):le.value=e}),{deep:!0,immediate:!0}),o((()=>j.displayFormat),(e=>{e&&!D(e)&&console.error("The type of displayFormat must be Function")}),{deep:!0,immediate:!0}),o((()=>j.beforeConfirm),(e=>{e&&!D(e)&&console.error("The type of beforeConfirm must be Function")}),{deep:!0,immediate:!0});const{parent:te}=T(B),ie=a((()=>te&&j.prop&&te.errorMessages&&te.errorMessages[j.prop]?te.errorMessages[j.prop]:"")),re=a((()=>{let e=!1;if(te&&te.props.rules){const l=te.props.rules;for(const a in l)Object.prototype.hasOwnProperty.call(l,a)&&a===j.prop&&Array.isArray(l[a])&&(e=l[a].some((e=>e.required)))}return j.required||j.rules.some((e=>e.required))||e}));s((()=>{L.value=de(j.modelValue),le.value=j.columns}));const{proxy:ue}=V();function ce(){}function ne(e){const{valueKey:l,labelKey:a,columns:o}=j,s=o.filter((a=>a[l]===e));return s.length>0?s[0]:{[l]:e,[a]:""}}function de(e){return"checkbox"===j.type?q(e)?e:[]:e}function pe({value:e}){L.value=e,F("change",{value:e}),"radio"!==j.type||j.showConfirm||ve()}function me(){I.value=!1,Y.value||(L.value=de(Z.value)),F("cancel"),F("close")}function fe(){j.disabled||j.readonly||(L.value=de(j.modelValue),I.value=!0,Y.value=!1,F("open"))}function ve(){if(j.loading)return I.value=!1,F("confirm"),void F("close");j.beforeConfirm?j.beforeConfirm(L.value,(e=>{e&&be()})):be()}function be(){Y.value=!0,I.value=!1,Z.value=de(L.value);let e={};e="checkbox"===j.type?(q(Z.value)?Z.value:[]).map((e=>ne(e))):ne(Z.value),F("update:modelValue",Z.value),F("confirm",{value:Z.value,selectedItems:e}),F("close")}function ye(e,l){const a=new RegExp(`(${l})`,"g");return e.split(a).map((e=>({type:e===l?"active":"normal",label:e})))}function ke({value:e}){""===e?(le.value=[],ee.value=e,w((()=>{le.value=j.columns}))):(ee.value=e,he(j.columns,e))}function he(e,l){const a=e.filter((e=>e[j.labelKey].indexOf(l)>-1)).map((e=>({...e,[j.labelKey]:ye(e[j.labelKey],l)})));le.value=[],w((()=>{le.value=a}))}const _e=a((()=>"radio"===j.type&&j.showConfirm||"checkbox"===j.type)),ge=a((()=>j.clearable&&!j.disabled&&!j.readonly&&se.value.length));function we(){F("update:modelValue","checkbox"===j.type?[]:""),F("clear")}const xe=a((()=>!j.disabled&&!j.readonly&&!ge.value));return S({close:me,open:fe}),(e,l)=>{const a=x,o=t(i("wui-icon"),M),s=t(i("wui-search"),R),V=$,S=C;return r(),u(a,{class:p(`wui-select-picker ${h(oe).border.value?"is-border":""} ${e.customClass}`),style:m(e.customStyle)},{default:c((()=>[n(a,{class:"wui-select-picker__field",onClick:fe},{default:c((()=>[e.useDefaultSlot?d(e.$slots,"default",{key:0},void 0,!0):(r(),u(a,{key:1,class:p(`wui-select-picker__cell ${e.disabled&&"is-disabled"} ${e.readonly&&"is-readonly"} ${e.alignRight&&"is-align-right"} ${e.error&&"is-error"} ${e.size&&"is-"+e.size}`)},{default:c((()=>[e.label||e.useLabelSlot?(r(),u(a,{key:0,class:p(`wui-select-picker__label ${re.value&&"is-required"} ${e.customLabelClass}`),style:m(e.labelWidth?"min-width:"+e.labelWidth+";max-width:"+e.labelWidth+";":"")},{default:c((()=>[e.label?(r(),f(y,{key:0},[v(b(e.label),1)],64)):d(e.$slots,"label",{key:1},void 0,!0)])),_:3},8,["class","style"])):k("",!0),n(a,{class:"wui-select-picker__body"},{default:c((()=>[n(a,{class:"wui-select-picker__value-wraper"},{default:c((()=>[n(a,{class:p(`wui-select-picker__value ${e.ellipsis&&"is-ellipsis"} ${e.customValueClass} ${se.value?"":"wui-select-picker__value--placeholder"}`)},{default:c((()=>[v(b(se.value||e.placeholder||h(z)("placeholder")),1)])),_:1},8,["class"]),xe.value?(r(),u(o,{key:0,"custom-class":"wui-select-picker__arrow",name:"arrow-right"})):ge.value?(r(),u(a,{key:1,onClick:_(we,["stop"])},{default:c((()=>[n(o,{"custom-class":"wui-select-picker__clear",name:"error-fill"})])),_:1})):k("",!0)])),_:1}),ie.value?(r(),u(a,{key:0,class:"wui-select-picker__error-message"},{default:c((()=>[v(b(ie.value),1)])),_:1})):k("",!0)])),_:1})])),_:3},8,["class"]))])),_:3}),n(E,{modelValue:I.value,"onUpdate:modelValue":l[3]||(l[3]=e=>I.value=e),duration:250,title:e.title||h(z)("title"),"close-on-click-modal":e.closeOnClickModal,"z-index":e.zIndex,"safe-area-inset-bottom":e.safeAreaInsetBottom,onClose:me,onOpened:l[4]||(l[4]=l=>e.scrollIntoView?async function(){let e="",l=[];A(L.value)&&""!==L.value&&!q(L.value)?(e="#wui-radio-group",l=[U(`#radio${L.value}`,!1,ue)]):q(L.value)&&L.value.length>0&&(L.value.forEach((e=>{l.push(U(`#check${e}`,!1,ue))})),e="#wui-checkbox-group"),e&&(await W(2e3/30),Promise.all([U(".wui-select-picker__wrapper",!1,ue),U(e,!1,ue),...l]).then((e=>{if(A(e)&&q(e)){const l=e[0],a=e[1],o=e.slice(2)||[];A(a)&&A(l)&&o.findIndex((e=>e.bottom>l.top&&e.top<l.bottom))<0&&(ae.value=-1,w((()=>{ae.value=Math.max(0,o[0].top-a.top-l.height/2)})))}})))}():""),"custom-header-class":"wui-select-picker__header"},{default:c((()=>[e.filterable?(r(),u(s,{key:0,modelValue:ee.value,"onUpdate:modelValue":l[0]||(l[0]=e=>ee.value=e),placeholder:e.filterPlaceholder||h(z)("filterPlaceholder"),"hide-cancel":"","placeholder-left":"",onChange:ke},null,8,["modelValue","placeholder"])):k("",!0),n(S,{class:p(`wui-select-picker__wrapper ${e.filterable?"is-filterable":""} ${e.loading?"is-loading":""} ${e.customContentClass}`),"scroll-y":!e.loading,"scroll-top":ae.value,"scroll-with-animation":!0},{default:c((()=>["checkbox"===e.type&&h(q)(L.value)?(r(),u(a,{key:0,id:"wui-checkbox-group"},{default:c((()=>[n(H,{modelValue:L.value,"onUpdate:modelValue":l[1]||(l[1]=e=>L.value=e),cell:"",size:e.selectSize,"checked-color":e.checkedColor,min:e.min,max:e.max,onChange:pe},{default:c((()=>[(r(!0),f(y,null,g(le.value,(l=>(r(),u(a,{key:l[e.valueKey],id:"check"+l[e.valueKey]},{default:c((()=>[n(G,{modelValue:l[e.valueKey],disabled:l.disabled},{default:c((()=>[e.filterable&&ee.value?(r(!0),f(y,{key:0},g(l[e.labelKey],(e=>(r(),f(y,{key:e.label},["active"===e.type?(r(),u(V,{key:0,class:"wui-select-picker__text-active"},{default:c((()=>[v(b(e.label),1)])),_:2},1024)):(r(),f(y,{key:1},[v(b(e.label),1)],64))],64)))),128)):(r(),f(y,{key:1},[v(b(l[e.labelKey]),1)],64))])),_:2},1032,["modelValue","disabled"])])),_:2},1032,["id"])))),128))])),_:1},8,["modelValue","size","checked-color","min","max"])])),_:1})):k("",!0),"radio"!==e.type||h(q)(L.value)?k("",!0):(r(),u(a,{key:1,id:"wui-radio-group"},{default:c((()=>[n(J,{modelValue:L.value,"onUpdate:modelValue":l[2]||(l[2]=e=>L.value=e),cell:"",size:e.selectSize,"checked-color":e.checkedColor,onChange:pe},{default:c((()=>[(r(!0),f(y,null,g(le.value,((l,o)=>(r(),u(a,{key:o,id:"radio"+l[e.valueKey]},{default:c((()=>[n(N,{value:l[e.valueKey],disabled:l.disabled},{default:c((()=>[e.filterable&&ee.value?(r(!0),f(y,{key:0},g(l[e.labelKey],(e=>(r(),u(V,{key:e.label,class:p(""+("active"===e.type?"wui-select-picker__text-active":""))},{default:c((()=>[v(b(e.label),1)])),_:2},1032,["class"])))),128)):(r(),f(y,{key:1},[v(b(l[e.labelKey]),1)],64))])),_:2},1032,["value","disabled"])])),_:2},1032,["id"])))),128))])),_:1},8,["modelValue","size","checked-color"])])),_:1})),e.loading?(r(),u(a,{key:2,class:"wui-select-picker__loading",onTouchmove:ce},{default:c((()=>[n(P,{color:e.loadingColor},null,8,["color"])])),_:1})):k("",!0)])),_:1},8,["class","scroll-y","scroll-top"]),_e.value?(r(),u(a,{key:1,class:"wui-select-picker__footer"},{default:c((()=>[n(Q,{block:"",size:"large",onClick:ve,disabled:e.loading},{default:c((()=>[v(b(e.confirmButtonText||h(z)("confirm")),1)])),_:1},8,["disabled"])])),_:1})):k("",!0)])),_:1},8,["modelValue","title","close-on-click-modal","z-index","safe-area-inset-bottom"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-273a0677"]]);export{Y as _};
