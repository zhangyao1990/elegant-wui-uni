import{d as e,r as a,c as t,z as l,e as s,f as r,a as n,g as o,w as i,x as u,h as d,i as m,A as c,s as f,B as w,k as g,t as p,u as h,n as v,F as y,p as _}from"./index-C9W9llSX.js";import{_ as D,a as k}from"./wui-tabs.CE0_LOuH.js";import{_ as Y}from"./wui-tag.COU08QlA.js";import{m as b,c as C,k as F,l as $,J as x,v as M,N as V,Q as S,M as T,d as O,O as j,b as W,V as z,y as A,P as I,a as q}from"./page-wraper.BAAFjrch.js";import{i as N,_ as P,g as R}from"./wui-calendar-view.B46MeEcd.js";import{_ as B}from"./wui-action-sheet.RZIYEo-q.js";import{_ as H}from"./wui-button.BxzuRTK_.js";import{d as L}from"./dayjs.DrCsbnPW.js";import{u as U}from"./useTranslate.Dk0WeNHw.js";const G=q(e({name:"wui-calendar",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...C,modelValue:M([Number,Array,null]),type:$("date"),minDate:b(new Date((new Date).getFullYear(),(new Date).getMonth()-6,(new Date).getDate()).getTime()),maxDate:b(new Date((new Date).getFullYear(),(new Date).getMonth()+6,(new Date).getDate(),23,59,59).getTime()),firstDayOfWeek:b(0),formatter:Function,maxRange:Number,rangePrompt:String,allowSameDay:F(!1),defaultTime:{type:[String,Array]},timeFilter:Function,hideSecond:F(!1),label:String,labelWidth:String,disabled:F(!1),readonly:F(!1),placeholder:String,title:String,alignRight:F(!1),error:F(!1),required:F(!1),size:String,center:F(!1),closeOnClickModal:F(!0),zIndex:b(15),showConfirm:F(!0),confirmText:String,displayFormat:Function,innerDisplayFormat:Function,ellipsis:F(!1),showTypeSwitch:F(!1),shortcuts:x(),onShortcutsClick:Function,safeAreaInsetBottom:F(!0),beforeConfirm:Function,prop:String,rules:x(),customViewClass:$(""),customLabelClass:$(""),customValueClass:$(""),immediateChange:F(!1),withCell:F(!0)},emits:["cancel","change","update:modelValue","confirm","open"],setup(e,{expose:b,emit:C}){const{translate:F}=U("calendar"),$=(e,a)=>{switch(a){case"date":return L(e).format("YYYY-MM-DD");case"dates":return e.map((e=>L(e).format("YYYY-MM-DD"))).join(", ");case"daterange":return`${e[0]?L(e[0]).format("YYYY-MM-DD"):F("startTime")} ${F("to")} ${e[1]?L(e[1]).format("YYYY-MM-DD"):F("endTime")}`;case"datetime":return L(e).format("YYYY-MM-DD HH:mm:ss");case"datetimerange":return`${e[0]?L(e[0]).format(F("timeFormat")):F("startTime")} ${F("to")}\n${e[1]?L(e[1]).format(F("timeFormat")):F("endTime")}`;case"week":{const a=new Date(e),t=a.getFullYear(),l=R(e);new Date(a).setDate(a.getDate()-a.getDay()+1);const s=new Date(a);s.setDate(a.getDate()+(7-a.getDay()));const r=s.getFullYear()>t?s.getFullYear():t;return F("weekFormat",r,z(l))}case"weekrange":{const a=new Date(e[0]),t=new Date(e[1]),l=a.getFullYear(),s=t.getFullYear(),r=R(e[0]),n=R(e[1]);new Date(a).setDate(a.getDate()-a.getDay()+1);const o=new Date(a);o.setDate(a.getDate()+(7-a.getDay()));new Date(t).setDate(t.getDate()-t.getDay()+1);const i=new Date(t);i.setDate(t.getDate()+(7-t.getDay()));const u=o.getFullYear()>l?o.getFullYear():l,d=i.getFullYear()>s?i.getFullYear():s;return`${e[0]?F("weekFormat",u,z(r)):F("startWeek")} - ${e[1]?F("weekFormat",d,z(n)):F("endWeek")}`}case"month":return L(e).format("YYYY / MM");case"monthrange":return`${e[0]?L(e[0]).format("YYYY / MM"):F("startMonth")} ${F("to")} ${e[1]?L(e[1]).format("YYYY / MM"):F("endMonth")}`}},x=(e,a,t)=>{switch(t){case"daterange":return e?L(e).format(F("dateFormat")):F("end"===a?"endTime":"startTime");case"datetimerange":return e?L(e).format(F("timeFormat")):F("end"===a?"endTime":"startTime");case"weekrange":{if(!e)return F("end"===a?"endWeek":"startWeek");const t=new Date(e).getFullYear(),l=R(e);return F("weekFormat",t,z(l))}case"monthrange":return e?L(e).format(F("monthFormat")):F("end"===a?"endMonth":"startMonth")}},M=e,q=C,G=a(!1),J=a(null),Q=a(null),E=a(338),K=a(!0),X=a(0),Z=a(0),ee=a("date"),ae=a(),te=a(!1),le=V(),se=a(),re=a(),ne=t((()=>{const[e,a]=S(T(J.value)?J.value:[]);return[e,a].map(((e,a)=>(M.innerDisplayFormat||x)(e,0===a?"start":"end",ee.value)))})),oe=t((()=>!T(M.modelValue)&&M.modelValue||T(M.modelValue)&&M.modelValue.length?(M.displayFormat||$)(M.modelValue,ae.value||ee.value):""));l((()=>M.modelValue),((e,a)=>{I(e,a)||(J.value=S(e),K.value=ge(e))}),{immediate:!0}),l((()=>M.type),((e,a)=>{if(M.showTypeSwitch){const a=["date","week","month"],t=["daterange","weekrange","monthrange"],l=e.indexOf("range")>-1?t.indexOf(e)||0:a.indexOf(e);X.value=l}E.value=M.showConfirm?338:400,ee.value=S(e)}),{deep:!0,immediate:!0}),l((()=>M.showConfirm),(e=>{E.value=e?338:400}),{deep:!0,immediate:!0});const{parent:ie}=O(j),ue=t((()=>ie&&M.prop&&ie.errorMessages&&ie.errorMessages[M.prop]?ie.errorMessages[M.prop]:"")),de=t((()=>{let e=!1;if(ie&&ie.props.rules){const a=ie.props.rules;for(const t in a)Object.prototype.hasOwnProperty.call(a,t)&&t===M.prop&&Array.isArray(a[t])&&(e=a[t].some((e=>e.required)))}return M.required||M.rules.some((e=>e.required))||e})),me=t((()=>e=>N(e)));async function ce(){const{disabled:e,readonly:a}=M;e||a||(te.value=!0,G.value=!0,Q.value=S(J.value),Z.value=X.value,ae.value=ee.value,await A(),se.value&&se.value&&se.value.$.exposed.scrollIntoView(),setTimeout((()=>{M.showTypeSwitch&&(re.value.scrollIntoView(),re.value.updateLineStyle(!1))}),250),q("open"))}function fe(){G.value=!1,setTimeout((()=>{J.value=S(Q.value),X.value=Z.value,ee.value=ae.value||"date",K.value=ge(Q.value)}),250),q("cancel")}function we({index:e}){const a=M.type.indexOf("range")>-1?["daterange","weekrange","monthrange"][e]:["date","week","month"][e];X.value=e,ee.value=a}function ge(e){let a=!1;return(!(M.type.indexOf("range")>-1)||T(e)&&e[0]&&e[1]&&e)&&("dates"!==M.type||T(e)&&0!==e.length&&e)&&e||(a=!0),a}function pe({value:e}){J.value=S(e),K.value=ge(e),q("change",{value:e}),M.showConfirm||K.value||he()}function he(){M.beforeConfirm?M.beforeConfirm({value:J.value,resolve:e=>{e&&ve()}}):ve()}function ve(){G.value=!1,ae.value=ee.value,q("update:modelValue",J.value),q("confirm",{value:J.value,type:ee.value})}return b({close:fe,open:ce}),(e,a)=>{const t=m,l=s(r("wui-tab"),D),b=s(r("wui-tabs"),k),C=s(r("wui-tag"),Y);return o(),n(t,{class:f(`wui-calendar ${h(le).border.value?"is-border":""} ${e.customClass}`)},{default:i((()=>[e.withCell?(o(),n(t,{key:0,class:"wui-calendar__field",onClick:ce},{default:i((()=>[e.$slots.default?c(e.$slots,"default",{key:0},void 0,!0):(o(),n(t,{key:1,class:f(`wui-calendar__cell ${e.disabled?"is-disabled":""} ${e.readonly?"is-readonly":""} ${e.alignRight?"is-align-right":""} ${e.error?"is-error":""} ${e.size?"is-"+e.size:""} ${e.center?"is-center":""}`)},{default:i((()=>[e.label||e.$slots.label?(o(),n(t,{key:0,class:f(`wui-calendar__label ${de.value?"is-required":""} ${e.customLabelClass}`),style:w(e.labelWidth?"min-width:"+e.labelWidth+";max-width:"+e.labelWidth+";":"")},{default:i((()=>[c(e.$slots,"label",{},(()=>[g(p(e.label),1)]),!0)])),_:3},8,["class","style"])):u("",!0),d(t,{class:"wui-calendar__body"},{default:i((()=>[d(t,{class:"wui-calendar__value-wraper"},{default:i((()=>[d(t,{class:f(`wui-calendar__value ${e.ellipsis?"is-ellipsis":""} ${e.customValueClass} ${oe.value?"":"wui-calendar__value--placeholder"}`)},{default:i((()=>[g(p(oe.value||e.placeholder||h(F)("placeholder")),1)])),_:1},8,["class"]),e.disabled||e.readonly?u("",!0):(o(),n(W,{key:0,"custom-class":"wui-calendar__arrow",name:"arrow-right"}))])),_:1}),ue.value?(o(),n(t,{key:0,class:"wui-calendar__error-message"},{default:i((()=>[g(p(ue.value),1)])),_:1})):u("",!0)])),_:1})])),_:3},8,["class"]))])),_:3})):u("",!0),d(B,{modelValue:G.value,"onUpdate:modelValue":a[2]||(a[2]=e=>G.value=e),duration:250,"close-on-click-modal":e.closeOnClickModal,"safe-area-inset-bottom":e.safeAreaInsetBottom,"z-index":e.zIndex,onClose:fe},{default:i((()=>[d(t,{class:"wui-calendar__header"},{default:i((()=>[e.showTypeSwitch||0!==e.shortcuts.length?u("",!0):(o(),n(t,{key:0,class:"wui-calendar__title"},{default:i((()=>[g(p(e.title||h(F)("title")),1)])),_:1})),e.showTypeSwitch?(o(),n(t,{key:1,class:"wui-calendar__tabs"},{default:i((()=>[d(b,{ref_key:"calendarTabs",ref:re,modelValue:X.value,"onUpdate:modelValue":a[0]||(a[0]=e=>X.value=e),onChange:we},{default:i((()=>[d(l,{title:h(F)("day"),name:h(F)("day")},null,8,["title","name"]),d(l,{title:h(F)("week"),name:h(F)("week")},null,8,["title","name"]),d(l,{title:h(F)("month"),name:h(F)("month")},null,8,["title","name"])])),_:1},8,["modelValue"])])),_:1})):u("",!0),e.shortcuts.length>0?(o(),n(t,{key:2,class:"wui-calendar__shortcuts"},{default:i((()=>[(o(!0),v(y,null,_(e.shortcuts,((e,a)=>(o(),n(C,{key:a,"custom-class":"wui-calendar__tag",type:"primary",plain:"",round:"",onClick:e=>function(e){M.onShortcutsClick&&"function"==typeof M.onShortcutsClick&&(J.value=S(M.onShortcutsClick({item:M.shortcuts[e],index:e})),K.value=ge(J.value)),M.showConfirm||he()}(a)},{default:i((()=>[g(p(e.text),1)])),_:2},1032,["onClick"])))),128))])),_:1})):u("",!0),d(W,{"custom-class":"wui-calendar__close",name:"add",onClick:fe})])),_:1}),te.value?(o(),n(t,{key:0,class:f(`wui-calendar__view  ${ee.value.indexOf("range")>-1?"is-range":""} ${e.showConfirm?"is-show-confirm":""}`)},{default:i((()=>[me.value(e.type)?(o(),n(t,{key:0,class:f("wui-calendar__range-label "+("monthrange"===e.type?"is-monthrange":""))},{default:i((()=>[d(t,{class:f("wui-calendar__range-label-item "+(J.value&&h(T)(J.value)&&J.value[0]?"":"is-placeholder")),style:{"text-align":"right"}},{default:i((()=>[g(p(ne.value[0]),1)])),_:1},8,["class"]),d(t,{class:"wui-calendar__range-sperator"},{default:i((()=>[g("/")])),_:1}),d(t,{class:f("wui-calendar__range-label-item "+(J.value&&h(T)(J.value)&&J.value[1]?"":"is-placeholder"))},{default:i((()=>[g(p(ne.value[1]),1)])),_:1},8,["class"])])),_:1},8,["class"])):u("",!0),d(P,{ref_key:"calendarView",ref:se,modelValue:J.value,"onUpdate:modelValue":a[1]||(a[1]=e=>J.value=e),type:ee.value,"min-date":e.minDate,"max-date":e.maxDate,"first-day-of-week":e.firstDayOfWeek,formatter:e.formatter,"panel-height":E.value,"max-range":e.maxRange,"range-prompt":e.rangePrompt,"allow-same-day":e.allowSameDay,"default-time":e.defaultTime,"time-filter":e.timeFilter,"hide-second":e.hideSecond,"show-panel-title":!me.value(e.type),"immediate-change":e.immediateChange,onChange:pe},null,8,["modelValue","type","min-date","max-date","first-day-of-week","formatter","panel-height","max-range","range-prompt","allow-same-day","default-time","time-filter","hide-second","show-panel-title","immediate-change"])])),_:1},8,["class"])):u("",!0),e.showConfirm?(o(),n(t,{key:1,class:"wui-calendar__confirm"},{default:i((()=>[d(H,{block:"",disabled:K.value,onClick:he},{default:i((()=>[g(p(e.confirmText||h(F)("confirm")),1)])),_:1},8,["disabled"])])),_:1})):u("",!0)])),_:1},8,["modelValue","close-on-click-modal","safe-area-inset-bottom","z-index"])])),_:3},8,["class"])}}}),[["__scopeId","data-v-1894c7f8"]]);export{G as _};
