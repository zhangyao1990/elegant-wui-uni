var e=Object.defineProperty,t=(t,a,l)=>((t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l)(t,"symbol"!=typeof a?a+"":a,l);import{P as a,d as l,q as o,o as s,c as r,w as n,p as i,n as u,y as c,l as d,i as f,Q as v,R as p,r as m,M as h,e as g,x as w,f as y,t as b,S as x,k,T as $,v as C,U as _,V as O,W as S,I as F,X as M,u as z,g as B,F as A,Y as I,Z as N,_ as T,$ as V,m as j,a as G,b as E}from"./index-Dr4mJiuc.js";class D{constructor(e){t(this,"promise"),t(this,"_reject",null),this.promise=new Promise(((t,a)=>{e(t,a),this._reject=a}))}abort(e){this._reject&&this._reject(e)}then(e,t){return this.promise.then(e,t)}catch(e){return this.promise.catch(e)}}function P(){return Y()+Y()+Y()+Y()+Y()+Y()+Y()+Y()}function Y(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}function R(e){return Number.isNaN(Number(e))?`${e}`:`${e}px`}function H(e){return"[object Object]"===Object.prototype.toString.call(e)||"object"==typeof e}function L(e){const t=Object.prototype.toString.call(e).match(/\[object (\w+)\]/);return t&&t.length?t[1].toLowerCase():""}const U=function(e,t){const a=(null==t?void 0:t.labelKey)||"value";return Array.isArray(e)?e.map((e=>e[a])).join(", "):e[a]},W=e=>null!=e,q=(e,t="value")=>{if(e<0)throw new Error(`${t} shouldn't be less than zero`)};function Q(e,t,a){const l=(e<<16|t<<8|a).toString(16);return"#"+"0".repeat(Math.max(0,6-l.length))+l}function K(e){const t=[];for(let a=1;a<7;a+=2)t.push(parseInt("0x"+e.slice(a,a+2),16));return t}const Z=(e,t,a)=>Math.min(Math.max(e,t),a),X=(e,t)=>{if(e===t)return!0;if(!Array.isArray(e)||!Array.isArray(t))return!1;if(e.length!==t.length)return!1;for(let a=0;a<e.length;++a)if(e[a]!==t[a])return!1;return!0},J=(e,t=2)=>{let a=e.toString();for(;a.length<t;)a="0"+a;return a},ee={id:1e3};function te(e,t,l,o){return new Promise(((o,s)=>{let r=null;r=l?a().in(l):a();const n=e=>{t&&le(e)&&e.length>0||!t&&e?o(e):s(new Error("No nodes found"))};r[t?"selectAll":"select"](e).boundingClientRect(n).exec()}))}function ae(e){return e.replace(/-(\w)/g,((e,t)=>t.toUpperCase()))}function le(e){return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}function oe(e){return"function"===L(e)}function se(e){return"string"===L(e)}function re(e){return"number"===L(e)}function ne(e){return!(!H(e)||!W(e))&&(oe(e.then)&&oe(e.catch))}function ie(e){return"boolean"==typeof e}function ue(e){return void 0===e}function ce(e){if("number"!=typeof e)throw new Error("输入必须为数字");return e%2==1}function de(e){return/^data:image\/(png|jpg|jpeg|gif|bmp);base64,/.test(e)}function fe(e){return le(e)?e.filter((function(e){return null!=e&&""!==e})).map((function(e){return fe(e)})).join(";"):se(e)?e:H(e)?Object.keys(e).filter((function(t){return null!=e[t]&&""!==e[t]})).map((function(t){return[(a=t,a.replace(/[A-Z]/g,(function(e){return"-"+e})).toLowerCase()),e[t]].join(":");var a})).join(";"):""}const ve=(e=1e3/30)=>new D((t=>{const a=setTimeout((()=>{clearTimeout(a),t(!0)}),e)}));function pe(e,t=new Map){if(null===e||"object"!=typeof e)return e;if(be(e))return new Date(e.getTime());if(e instanceof RegExp)return new RegExp(e.source,e.flags);if(e instanceof Error){const t=new Error(e.message);return t.stack=e.stack,t}if(t.has(e))return t.get(e);const a=Array.isArray(e)?[]:{};t.set(e,a);for(const l in e)Object.prototype.hasOwnProperty.call(e,l)&&(a[l]=pe(e[l],t));return a}function me(e,t){if("object"!=typeof(e=pe(e))||"object"!=typeof t)throw new Error("Both target and source must be objects.");for(const a in t)t.hasOwnProperty(a)&&(e[a]=t[a]);return e}function he(e,t){return Object.keys(t).forEach((a=>{const l=e[a],o=t[a];H(l)&&H(o)?he(l,o):e[a]=o})),e}function ge(e,t){const a=Object.entries(t).map((([e,t])=>`${e}=${encodeURIComponent(t)}`)).join("&"),l=e.includes("?")?"&":"?";return`${e}${l}${a}`}function we(e,t,a={}){let l,o,s,r=null;const n=!!W(a.leading)&&a.leading,i=!W(a.trailing)||a.trailing;function u(){void 0!==l&&(s=e.apply(o,l),l=void 0)}function c(){r=setTimeout((()=>{r=null,i&&u()}),t)}return function(...e){return l=e,o=this,null===r?(n&&u(),c()):i&&(null!==r&&(clearTimeout(r),r=null),c()),s}}const ye=(e,t)=>{const a=t.split(".");try{return a.reduce(((e,t)=>null!=e?e[t]:void 0),e)}catch(l){return}},be=e=>"[object Date]"===Object.prototype.toString.call(e)&&!Number.isNaN(e.getTime());function xe(e){return/\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|video)/i.test(e)}function ke(e){return/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg|image)/i.test(e)}const $e=(()=>{let e=!1;return e=!0,true})();function Ce(e,t){const a=pe(e);return Object.keys(a).forEach((e=>t(a[e],e)&&delete a[e])),a}function _e(e=0,t=0,a=0,l=0){return a*(1-Math.pow(2,-10*e/l))*1024/1023+t}function Oe(e,t){return e.reduce(((e,a)=>Math.abs(a-t)<Math.abs(e-t)?a:e))}const Se=[Number,String],Fe={type:Boolean,default:!0},Me=e=>({type:e,required:!0}),ze=()=>({type:Array,default:()=>[]}),Be=e=>({type:Boolean,default:e}),Ae=e=>({type:Number,default:e}),Ie=e=>({type:Se,default:e}),Ne=e=>({type:String,default:e}),Te={customStyle:Ne(""),customClass:Ne("")},Ve=(e,t)=>{const a=e.__vccOpts||e;for(const[l,o]of t)a[l]=o;return a},je=Ve(l({name:"wui-icon",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...Te,name:Me(String),color:String,size:String,classPrefix:Ne("wui-icon")},emits:["click","touch"],setup(e,{emit:t}){const a=e,l=t,v=o((()=>W(a.name)&&ke(a.name))),p=o((()=>{const e=a.classPrefix;return`${e} ${a.customClass} ${v.value?"wui-icon--image":e+"-"+a.name}`})),m=o((()=>{const e={};return a.color&&(e.color=a.color),a.size&&(e["font-size"]=R(a.size)),`${fe(e)}; ${a.customStyle}`}));function h(e){l("click",e)}return(e,t)=>{const a=d,l=f;return s(),r(l,{onClick:h,class:u(p.value),style:c(m.value)},{default:n((()=>[v.value?(s(),r(a,{key:0,class:"wui-icon__image",src:e.name},null,8,["src"])):i("",!0)])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-863323ff"]]);function Ge(e){const t=v(e,null);if(t){const e=h(),{link:a,unlink:l,internalChildren:s}=t;a(e),p((()=>l(e)));return{parent:t,index:o((()=>s.indexOf(e)))}}return{parent:null,index:m(-1)}}const Ee=Symbol("wui-cell-group"),De={...Te,title:String,value:String,useSlot:Be(!1),border:Be(!1)};function Pe(){const{parent:e,index:t}=Ge(Ee);return{border:o((()=>e&&e.props.border&&t.value))}}const Ye=Symbol("wui-form"),Re={...Te,model:Me(Object),rules:{type:Object,default:()=>({})},resetOnChange:Be(!0),errorType:{type:String,default:"message"}},He=Ve(l({name:"wui-cell",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...Te,title:String,value:Ie(""),icon:String,label:String,isLink:Be(!1),to:String,replace:Be(!1),clickable:Be(!1),size:String,border:Be(void 0),titleWidth:String,center:Be(!1),required:Be(!1),vertical:Be(!1),prop:String,rules:ze(),customIconClass:Ne(""),customLabelClass:Ne(""),customValueClass:Ne(""),customTitleClass:Ne("")},emits:["click"],setup(e,{emit:t}){const a=e,l=t,d=Pe(),v=o((()=>Boolean(W(a.border)?a.border:d.border.value))),{parent:p}=Ge(Ye),m=o((()=>p&&a.prop&&p.errorMessages&&p.errorMessages[a.prop]?p.errorMessages[a.prop]:"")),h=o((()=>{let e=!1;if(p&&p.props.rules){const t=p.props.rules;for(const l in t)Object.prototype.hasOwnProperty.call(t,l)&&l===a.prop&&Array.isArray(t[l])&&(e=t[l].some((e=>e.required)))}return a.required||a.rules.some((e=>e.required))||e}));function $(){const e=a.to;(a.clickable||a.isLink)&&l("click"),e&&a.isLink&&(a.replace?x({url:e}):k({url:e}))}return(e,t)=>{const a=f;return s(),r(a,{class:u(["wui-cell",v.value?"is-border":"",e.size?"is-"+e.size:"",e.center?"is-center":"",e.customClass]),style:c(e.customStyle),"hover-class":e.isLink||e.clickable?"is-hover":"none","hover-stay-time":70,onClick:$},{default:n((()=>[g(a,{class:u(["wui-cell__wrapper",e.vertical?"is-vertical":""])},{default:n((()=>[g(a,{class:u(["wui-cell__left",h.value?"is-required":""]),style:c(e.titleWidth?"min-width:"+e.titleWidth+";max-width:"+e.titleWidth+";":"")},{default:n((()=>[e.icon?(s(),r(je,{key:0,name:e.icon,"custom-class":`wui-cell__icon  ${e.customIconClass}`},null,8,["name","custom-class"])):w(e.$slots,"icon",{key:1},void 0,!0),g(a,{class:"wui-cell__title"},{default:n((()=>[e.title?(s(),r(a,{key:0,class:u(e.customTitleClass)},{default:n((()=>[y(b(e.title),1)])),_:1},8,["class"])):w(e.$slots,"title",{key:1},void 0,!0),e.label?(s(),r(a,{key:2,class:u(`wui-cell__label ${e.customLabelClass}`)},{default:n((()=>[y(b(e.label),1)])),_:1},8,["class"])):w(e.$slots,"label",{key:3},void 0,!0)])),_:3})])),_:3},8,["class","style"]),g(a,{class:"wui-cell__right"},{default:n((()=>[g(a,{class:"wui-cell__body"},{default:n((()=>[g(a,{class:u(`wui-cell__value ${e.customValueClass}`)},{default:n((()=>[w(e.$slots,"default",{},(()=>[y(b(e.value),1)]),!0)])),_:3},8,["class"]),e.isLink?(s(),r(je,{key:0,"custom-class":"wui-cell__arrow-right",name:"arrow-right"})):w(e.$slots,"right-icon",{key:1},void 0,!0)])),_:3}),m.value?(s(),r(a,{key:0,class:"wui-cell__error-message"},{default:n((()=>[y(b(m.value),1)])),_:1})):i("",!0)])),_:3})])),_:3},8,["class"])])),_:3},8,["class","style","hover-class"])}}}),[["__scopeId","data-v-7530228a"]]),Le=Ve(l({name:"wui-switch",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...Te,modelValue:{type:[Boolean,String,Number],required:!0,default:!1},disabled:Be(!1),activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},activeColor:String,inactiveColor:String,size:{type:Se},beforeChange:Function},emits:["change","update:modelValue"],setup(e,{emit:t}){const a=e,l=t,i=o((()=>`wui-switch ${a.customClass} ${a.disabled?"is-disabled":""} ${a.modelValue===a.activeValue?"is-checked":""}`)),d=o((()=>{const e={background:a.modelValue===a.activeValue?a.activeColor:a.inactiveColor,"border-color":a.modelValue===a.activeValue?a.activeColor:a.inactiveColor};return a.size&&(e["font-size"]=R(a.size)),`${fe(e)};${a.customStyle}`})),v=o((()=>a.modelValue===a.activeValue&&a.activeColor||a.modelValue!==a.activeValue&&a.inactiveColor?"box-shadow: none;":""));function p(){if(a.disabled)return;const e=a.modelValue===a.activeValue?a.inactiveValue:a.activeValue;a.beforeChange&&oe(a.beforeChange)?a.beforeChange({value:e,resolve:t=>{t&&(l("update:modelValue",e),l("change",{value:e}))}}):(l("update:modelValue",e),l("change",{value:e}))}return $((()=>{-1===[a.activeValue,a.inactiveValue].indexOf(a.modelValue)&&(l("update:modelValue",a.inactiveValue),l("change",{value:a.inactiveValue}))})),(e,t)=>{const a=f;return s(),r(a,{class:u(i.value),style:c(d.value),onClick:p},{default:n((()=>[g(a,{class:"wui-switch__circle",style:c(v.value)},null,8,["style"])])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-5643569f"]]),Ue=Ve(l({name:"wui-gap",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...Te,bgColor:Ne("transparent"),safeAreaBottom:Be(!1),height:Ie(15)},setup(e){const t=e,a=o((()=>{const e={};return W(t.bgColor)&&(e.background=t.bgColor),W(t.height)&&(e.height=R(t.height)),`${fe(e)};${t.customStyle}`}));return(e,t)=>{const l=f;return s(),r(l,{class:u(`wui-gap ${e.safeAreaBottom?"wui-gap--safe":""} ${e.customClass}`),style:c(a.value)},null,8,["class","style"])}}}),[["__scopeId","data-v-4e8bade4"]]),We=Ve(l({name:"wui-transition",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...Te,show:Be(!1),duration:{type:[Object,Number,Boolean],default:300},lazyRender:Be(!1),name:[String,Array],destroy:Be(!0),enterClass:Ne(""),enterActiveClass:Ne(""),enterToClass:Ne(""),leaveClass:Ne(""),leaveActiveClass:Ne(""),leaveToClass:Ne("")},emits:["click","before-enter","enter","before-leave","leave","after-leave","after-enter"],setup(e,{emit:t}){const a=e=>{let t=`${l.enterClass} ${l.enterActiveClass}`,a=`${l.enterToClass} ${l.enterActiveClass}`,o=`${l.leaveClass} ${l.leaveActiveClass}`,s=`${l.leaveToClass} ${l.leaveActiveClass}`;if(Array.isArray(e))for(let l=0;l<e.length;l++)t=`wui-${e[l]}-enter wui-${e[l]}-enter-active ${t}`,a=`wui-${e[l]}-enter-to wui-${e[l]}-enter-active ${a}`,o=`wui-${e[l]}-leave wui-${e[l]}-leave-active ${o}`,s=`wui-${e[l]}-leave-to wui-${e[l]}-leave-active ${s}`;else e&&(t=`wui-${e}-enter wui-${e}-enter-active ${t}`,a=`wui-${e}-enter-to wui-${e}-enter-active ${a}`,o=`wui-${e}-leave wui-${e}-leave-active ${o}`,s=`wui-${e}-leave-to wui-${e}-leave-active ${s}`);return{enter:t,"enter-to":a,leave:o,"leave-to":s}},l=e,d=t,v=m(!1),p=m(!1),h=m(""),g=m(!1),y=m(300),b=m(""),x=m(null),k=m(null),_=m(null),O=o((()=>`-webkit-transition-duration:${y.value}ms;transition-duration:${y.value}ms;${p.value||!l.destroy?"":"display: none;"}${l.customStyle}`)),S=o((()=>`wui-transition ${l.customClass}  ${b.value}`));function F(){d("click")}function M(){x.value=new D((async e=>{try{const t=a(l.name),o=H(l.duration)?l.duration.enter:l.duration;h.value="enter",d("before-enter"),k.value=ve(),await k.value,d("enter"),b.value=t.enter,y.value=o,k.value=ve(),await k.value,v.value=!0,p.value=!0,k.value=ve(),await k.value,k.value=null,g.value=!1,b.value=t["enter-to"],e()}catch(t){}}))}function z(){g.value||(g.value=!0,"leave"===h.value?d("after-leave"):"enter"===h.value&&d("after-enter"),!l.show&&p.value&&(p.value=!1))}return $((()=>{l.show&&M()})),C((()=>l.show),(e=>{e?(ne(x.value)&&x.value.abort(),ne(k.value)&&k.value.abort(),ne(_.value)&&_.value.abort(),x.value=null,k.value=null,_.value=null,M()):async function(){if(!x.value)return g.value=!1,z();try{if(await x.value,!p.value)return;const e=a(l.name),t=H(l.duration)?l.duration.leave:l.duration;h.value="leave",d("before-leave"),y.value=t,_.value=ve(),await _.value,d("leave"),b.value=e.leave,_.value=ve(),await _.value,g.value=!1,b.value=e["leave-to"],_.value=function(e){return new D((t=>{const a=setTimeout((()=>{clearTimeout(a),t()}),e)}))}(y.value),await _.value,_.value=null,z(),x.value=null}catch(e){}}()}),{deep:!0}),(e,t)=>{const a=f;return!e.lazyRender||v.value?(s(),r(a,{key:0,class:u(S.value),style:c(O.value),onTransitionend:z,onClick:F},{default:n((()=>[w(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])):i("",!0)}}}),[["__scopeId","data-v-a9b8d02b"]]);function qe(e){const t=m(0),a=()=>{0===t.value&&(document.getElementsByTagName("body")[0].style.overflow="hidden"),t.value++},l=()=>{t.value>0&&(t.value--,0===t.value&&(document.getElementsByTagName("body")[0].style.overflow=""))},o=()=>{e()&&l()};return C(e,(e=>{e?a():l()})),_(o),O(o),{lock:a,unlock:l}}const Qe=Ve(l({name:"wui-overlay",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...Te,show:Be(!1),duration:{type:[Object,Number,Boolean],default:300},lockScroll:Be(!0),zIndex:Ae(10)},emits:["click"],setup(e,{emit:t}){const a=e,l=t;function o(){l("click")}function i(){}return qe((()=>a.show&&a.lockScroll)),(e,t)=>(s(),r(We,{show:e.show,name:"fade","custom-class":"wui-overlay",duration:e.duration,"custom-style":`z-index: ${e.zIndex}; ${e.customStyle}`,onClick:o,onTouchmove:t[0]||(t[0]=S((t=>e.lockScroll?i:""),["stop","prevent"]))},{default:n((()=>[w(e.$slots,"default",{},void 0,!0)])),_:3},8,["show","duration","custom-style"]))}}),[["__scopeId","data-v-9099d4d5"]]),Ke=Ve(l({name:"wui-popup",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...Te,transition:String,closable:Be(!1),position:Ne("center"),closeOnClickModal:Be(!0),duration:{type:[Number,Boolean],default:300},modal:Be(!0),zIndex:Ae(10),hideWhenClose:Be(!0),modalStyle:Ne(""),safeAreaInsetBottom:Be(!1),modelValue:Be(!1),lazyRender:Be(!0),lockScroll:Be(!0)},emits:["update:modelValue","before-enter","enter","before-leave","leave","after-leave","after-enter","click-modal","close"],setup(e,{emit:t}){const a=e,l=t,u=o((()=>a.transition?a.transition:"center"===a.position?["zoom-in","fade"]:"left"===a.position?"slide-left":"right"===a.position?"slide-right":"bottom"===a.position?"slide-up":"top"===a.position?"slide-down":"slide-up")),c=m(0),d=o((()=>`z-index:${a.zIndex}; padding-bottom: ${c.value}px;${a.customStyle}`)),v=o((()=>`wui-popup wui-popup--${a.position} ${a.transition||"center"!==a.position?"":"is-deep"} ${a.customClass||""}`));function p(){l("click-modal"),a.closeOnClickModal&&h()}function h(){l("close"),l("update:modelValue",!1)}function y(){}return $((()=>{if(a.safeAreaInsetBottom){const{safeArea:e,screenHeight:t,safeAreaInsets:a}=F();c.value=e&&a?a.bottom:0}})),(e,t)=>{const a=f;return s(),r(a,{class:"wui-popup-wrapper"},{default:n((()=>[e.modal?(s(),r(Qe,{key:0,show:e.modelValue,"z-index":e.zIndex,"lock-scroll":e.lockScroll,duration:e.duration,"custom-style":e.modalStyle,onClick:p,onTouchmove:y},null,8,["show","z-index","lock-scroll","duration","custom-style"])):i("",!0),g(We,{"lazy-render":e.lazyRender,"custom-class":v.value,"custom-style":d.value,duration:e.duration,show:e.modelValue,name:u.value,destroy:e.hideWhenClose,onBeforeEnter:t[0]||(t[0]=e=>l("before-enter")),onEnter:t[1]||(t[1]=e=>l("enter")),onAfterEnter:t[2]||(t[2]=e=>l("after-enter")),onBeforeLeave:t[3]||(t[3]=e=>l("before-leave")),onLeave:t[4]||(t[4]=e=>l("leave")),onAfterLeave:t[5]||(t[5]=e=>l("after-leave"))},{default:n((()=>[w(e.$slots,"default",{},void 0,!0),e.closable?(s(),r(je,{key:0,"custom-class":"wui-popup__close",name:"add",onClick:h})):i("",!0)])),_:3},8,["lazy-render","custom-class","custom-style","duration","show","name","destroy"])])),_:3})}}}),[["__scopeId","data-v-ecbc2874"]]),Ze={type:Ne("danger"),color:Ne(""),zIndex:Ae(99),visible:Be(!1),message:Ie(""),selector:Ne(""),duration:Ae(3e3),position:Ne("top"),safeHeight:Number,background:Ne("")};let Xe,Je={type:"danger",color:void 0,zIndex:99,message:"",duration:3e3,position:"top",safeHeight:void 0,background:void 0,onClick:void 0,onClosed:void 0,onOpened:void 0};const et="__NOTIFY_OPTION__",tt=Symbol("None"),at=(e="")=>{const t=lt(e),a=v(t,m(tt));a.value===tt&&(a.value=Je,M(t,a));const l=()=>{Xe&&clearTimeout(Xe),a.value!==tt&&(a.value.visible=!1)};return{showNotify:e=>{const t=me(Je,se(e)?{message:e}:e);a.value=me(t,{visible:!0}),a.value.duration&&a.value.duration>0&&(Xe&&clearTimeout(Xe),Xe=setTimeout((()=>l()),t.duration))},closeNotify:l}},lt=e=>e?`${et}${e}`:et;const ot=Ve(l({name:"wui-notify",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:Ze,emits:["update:visible","click","closed","opened"],setup(e,{emit:t}){const a=e,l=t,i=v(lt(a.selector),m(a)),d=o((()=>{const{safeHeight:e,position:t}=i.value;let a="";switch(t){case"top":a=`top: calc(var(--window-top) + ${R(e||0)})`;break;case"bottom":a="bottom: var(--window-bottom)"}return a})),p=e=>{if(oe(i.value.onClick))return i.value.onClick(e);l("click",e)},h=()=>{if(oe(i.value.onClosed))return i.value.onClosed();l("closed")},x=()=>{if(oe(i.value.onOpened))return i.value.onOpened();l("opened")};return C((()=>i.value.visible),(e=>{l("update:visible",e)}),{deep:!0}),(e,t)=>{const a=f;return s(),r(Ke,{modelValue:z(i).visible,"onUpdate:modelValue":t[0]||(t[0]=e=>z(i).visible=e),"custom-style":d.value,position:z(i).position,"z-index":z(i).zIndex,duration:250,modal:!1,onLeave:h,onEnter:x},{default:n((()=>[g(a,{class:u(["wui-notify",[`wui-notify--${z(i).type}`]]),style:c({color:z(i).color,background:z(i).background}),onClick:p},{default:n((()=>[w(e.$slots,"default",{},(()=>[y(b(z(i).message),1)]),!0)])),_:3},8,["class","style"])])),_:3},8,["modelValue","custom-style","position","z-index"])}}}),[["__scopeId","data-v-fdcbd50e"]]),st=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"],rt=e=>e.replace(/[+/]/g,(e=>"+"===e?"-":"_")).replace(/=+\$/m,""),nt="function"==typeof btoa?e=>btoa(e):e=>{if(e.charCodeAt(0)>255)throw new RangeError("The string contains invalid characters.");return((e,t=!1)=>{let a="";for(let l=0,o=e.length;l<o;l+=3){const[t,o,s]=[e[l],e[l+1],e[l+2]],r=t<<16|o<<8|s;a+=st[r>>>18],a+=st[r>>>12&63],a+=void 0!==o?st[r>>>6&63]:"=",a+=void 0!==s?st[63&r]:"="}return t?rt(a):a})(Uint8Array.from(e,(e=>e.charCodeAt(0))))};function it(e,t=!1){const a=nt((e=>unescape(encodeURIComponent(e)))(e));return t?rt(a):a}const ut=Ve(l({name:"wui-loading",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...Te,type:Ne("ring"),color:Ne("#4D80F0"),size:Ie("")},setup(e){const t=ee.id++,a=ee.id++,l=ee.id++,i={outline:(e="#4D80F0")=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><defs><linearGradient x1="100%" y1="0%" x2="0%" y2="0%" id="${t}"><stop stop-color="#FFF" offset="0%" stop-opacity="0"/><stop stop-color="#FFF" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M21 1c11.046 0 20 8.954 20 20s-8.954 20-20 20S1 32.046 1 21 9.954 1 21 1zm0 7C13.82 8 8 13.82 8 21s5.82 13 13 13 13-5.82 13-13S28.18 8 21 8z" fill="${e}"/><path d="M4.599 21c0 9.044 7.332 16.376 16.376 16.376 9.045 0 16.376-7.332 16.376-16.376" stroke="url(#${t}) " stroke-width="3.5" stroke-linecap="round"/></g></svg>`,ring:(e="#4D80F0",t="#a6bff7")=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><linearGradient id="${a}" gradientUnits="userSpaceOnUse" x1="50" x2="50" y2="180"><stop offset="0" stop-color="${e}"></stop> <stop offset="1" stop-color="${t}"></stop></linearGradient> <path fill="url(#${a})" d="M20 100c0-44.1 35.9-80 80-80V0C44.8 0 0 44.8 0 100s44.8 100 100 100v-20c-44.1 0-80-35.9-80-80z"></path> <linearGradient id="${l}" gradientUnits="userSpaceOnUse" x1="150" y1="20" x2="150" y2="180"><stop offset="0" stop-color="#fff" stop-opacity="0"></stop> <stop offset="1" stop-color="${t}"></stop></linearGradient> <path fill="url(#${l})" d="M100 0v20c44.1 0 80 35.9 80 80s-35.9 80-80 80v20c55.2 0 100-44.8 100-100S155.2 0 100 0z"></path> <circle cx="100" cy="10" r="10" fill="${e}"></circle></svg>`},d=e,v=m(""),p=m(""),h=m(null);C((()=>d.size),(e=>{h.value=R(e)}),{deep:!0,immediate:!0}),C((()=>d.type),(()=>{y()}),{deep:!0,immediate:!0});const w=o((()=>{const e={};return W(h.value)&&(e.height=R(h.value),e.width=R(h.value)),`${fe(e)}; ${d.customStyle}`}));function y(){const{type:e,color:t}=d;let a=W(e)?e:"ring";const l=`"data:image/svg+xml;base64,${it("ring"===a?i[a](t,p.value):i[a](t))}"`;v.value=l}return $((()=>{p.value=((e,t,a=2)=>{const l=K(e),o=K(t),s=(o[0]-l[0])/a,r=(o[1]-l[1])/a,n=(o[2]-l[2])/a,i=[];for(let u=0;u<a;u++)i.push(Q(parseInt(String(s*u+l[0])),parseInt(String(r*u+l[1])),parseInt(String(n*u+l[2]))));return i})(d.color,"#ffffff",2)[1],y()})),(e,t)=>{const a=f;return s(),r(a,{class:u(`wui-loading ${d.customClass}`),style:c(w.value)},{default:n((()=>[g(a,{class:"wui-loading__body"},{default:n((()=>[g(a,{class:"wui-loading__svg",style:c(`background-image: url(${v.value});`)},null,8,["style"])])),_:1})])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-3cfbfa74"]]),ct="__TOAST_OPTION__",dt={msg:"",duration:2e3,loadingType:"outline",loadingColor:"#4D80F0",iconColor:"#4D80F0",position:"middle",show:!1,zIndex:100},ft=Symbol("None");function vt(e=""){const t=pt(e),a=v(t,m(ft));a.value===ft&&(a.value=dt,M(t,a));let l=null;const o=e=>t=>s(me(e,"string"==typeof t?{msg:t}:t)),s=e=>{const t=me(dt,"string"==typeof e?{msg:e}:e);a.value=me(t,{show:!0}),l&&clearTimeout(l),a.value.duration&&a.value.duration>0&&(l=setTimeout((()=>{l&&clearTimeout(l),d()}),t.duration))},r=o({iconName:"loading",duration:0,cover:!0}),n=o({iconName:"success",duration:1500}),i=o({iconName:"error"}),u=o({iconName:"warning"}),c=o({iconName:"info"}),d=()=>{a.value={show:!1}};return{show:s,loading:r,success:n,error:i,warning:u,info:c,close:d}}const pt=e=>e?`${ct}${e}`:ct,mt={success:()=>'<svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>成功</title><desc>Created with Sketch.</desc><defs><filter x="-63.2%" y="-80.0%" width="226.3%" height="260.0%" filterUnits="objectBoundingBox" id="filter-1"><feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.122733141   0 0 0 0 0.710852582   0 0 0 0 0.514812768  0 0 0 1 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix><feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter><rect id="path-2" x="3.4176226" y="5.81442199" width="3" height="8.5" rx="1.5"></rect><linearGradient x1="50%" y1="0.126649064%" x2="50%" y2="100%" id="linearGradient-4"><stop stop-color="#ACFFBD" stop-opacity="0.208123907" offset="0%"></stop><stop stop-color="#10B87C" offset="100%"></stop></linearGradient></defs><g id="规范" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="反馈-轻提示" transform="translate(-388.000000, -538.000000)"><g id="成功" transform="translate(388.000000, 538.000000)"><circle id="Oval" fill="#34D19D" opacity="0.400000006" cx="21" cy="21" r="20"></circle><circle id="Oval" fill="#34D19D" cx="21" cy="21" r="16"></circle><g id="Group-6" filter="url(#filter-1)" transform="translate(11.500000, 14.000000)"><mask id="mask-3" fill="white"><use xlink:href="#path-2"></use></mask><use id="Rectangle-Copy-24" fill="#C4FFEB" transform="translate(4.917623, 10.064422) rotate(-45.000000) translate(-4.917623, -10.064422) " xlink:href="#path-2"></use><rect id="Rectangle" fill="url(#linearGradient-4)" mask="url(#mask-3)" transform="translate(6.215869, 11.372277) rotate(-45.000000) translate(-6.215869, -11.372277) " x="4.71586891" y="9.52269089" width="3" height="3.69917136"></rect><rect id="Rectangle" fill="#FFFFFF" transform="translate(11.636236, 7.232744) scale(1, -1) rotate(-45.000000) translate(-11.636236, -7.232744) " x="10.1362361" y="-1.02185365" width="3" height="16.5091951" rx="1.5"></rect></g></g></g></g></svg>',warning:()=>'<svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>警告</title><desc>Created with Sketch.</desc> <defs> <filter x="-240.0%" y="-60.0%" width="580.0%" height="220.0%" filterUnits="objectBoundingBox" id="filter-1"><feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.824756567   0 0 0 0 0.450356612   0 0 0 0 0.168550194  0 0 0 1 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix><feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs><g id="规范" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="反馈-轻提示" transform="translate(-580.000000, -538.000000)"> <g id="警告" transform="translate(580.000000, 538.000000)"><circle id="Oval" fill="#F0883A" opacity="0.400000006" cx="21" cy="21" r="20"></circle><circle id="Oval" fill="#F0883A" cx="21" cy="21" r="16"></circle><g id="Group-6" filter="url(#filter-1)" transform="translate(18.500000, 10.800000)"><rect id="Rectangle" fill="#FFFFFF" transform="translate(2.492935, 7.171583) scale(1, -1) rotate(-360.000000) translate(-2.492935, -7.171583) " x="0.992934699" y="0.955464537" width="3" height="12.4322365" rx="1.5"></rect><rect id="Rectangle-Copy-25" fill="#FFDEC5" transform="translate(2.508751, 17.202636) scale(1, -1) rotate(-360.000000) translate(-2.508751, -17.202636) " x="1.00875134" y="15.200563" width="3" height="4.00414639" rx="1.5"></rect></g></g></g></g></svg>',info:()=>'<svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>常规</title><desc>Created with Sketch.</desc><defs><filter x="-300.0%" y="-57.1%" width="700.0%" height="214.3%" filterUnits="objectBoundingBox" id="filter-1"><feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.362700096   0 0 0 0 0.409035039   0 0 0 0 0.520238904  0 0 0 1 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix><feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs><g id="规范" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="反馈-轻提示" transform="translate(-772.000000, -538.000000)"><g id="常规" transform="translate(772.000000, 538.000000)"><circle id="Oval" fill="#909CB7" opacity="0.4" cx="21" cy="21" r="20"></circle><circle id="Oval" fill="#909CB7" cx="21" cy="21" r="16"></circle><g id="Group-6" filter="url(#filter-1)" transform="translate(18.500000, 9.800000)"><g id="编组-2" transform="translate(2.492935, 10.204709) rotate(-180.000000) translate(-2.492935, -10.204709) translate(0.992935, 0.204709)"><rect id="Rectangle" fill="#FFFFFF" transform="translate(1.500000, 7.000000) scale(1, -1) rotate(-360.000000) translate(-1.500000, -7.000000) " x="0" y="0" width="3" height="14" rx="1.5"></rect><rect id="Rectangle-Copy-25" fill="#EEEEEE" transform="translate(1.500000, 18.000000) scale(1, -1) rotate(-360.000000) translate(-1.500000, -18.000000) " x="0" y="16" width="3" height="4" rx="1.5"></rect></g></g></g></g></g></svg>',error:()=>'<svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>toast</title><desc>Created with Sketch.</desc><defs><linearGradient x1="99.6229896%" y1="50.3770104%" x2="0.377010363%" y2="50.3770104%" id="linearGradient-1"><stop stop-color="#FFDFDF" offset="0%"></stop><stop stop-color="#F9BEBE" offset="100%"></stop></linearGradient><linearGradient x1="0.377010363%" y1="50.3770104%" x2="99.6229896%" y2="50.3770104%" id="linearGradient-2"><stop stop-color="#FFDFDF" offset="0%"></stop><stop stop-color="#F9BEBE" offset="100%"></stop></linearGradient></defs><g id="规范" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="反馈-轻提示" transform="translate(-196.000000, -538.000000)"> <g id="toast" transform="translate(196.000000, 538.000000)"><circle id="Oval" fill="#FA4350" opacity="0.400000006" cx="21" cy="21" r="20"></circle><circle id="Oval" fill="#FA4350" opacity="0.900000036" cx="21" cy="21" r="16"></circle><rect id="矩形" fill="#FFDFDF" transform="translate(21.071068, 21.071068) rotate(-225.000000) translate(-21.071068, -21.071068) " x="12.5710678" y="19.5710678" width="17" height="3" rx="1.5"></rect><rect id="矩形" fill="url(#linearGradient-1)" transform="translate(19.303301, 22.838835) rotate(-225.000000) translate(-19.303301, -22.838835) " x="17.3033009" y="21.3388348" width="4" height="3"></rect><rect id="矩形" fill="url(#linearGradient-2)" transform="translate(22.838835, 19.303301) rotate(-225.000000) translate(-22.838835, -19.303301) " x="20.8388348" y="17.8033009" width="4" height="3"></rect><rect id="矩形" fill="#FFFFFF" transform="translate(21.071068, 21.071068) rotate(-315.000000) translate(-21.071068, -21.071068) " x="12.5710678" y="19.5710678" width="17" height="3" rx="1.5"></rect></g></g></g></svg>'},ht=Ve(l({name:"wui-toast",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...Te,selector:Ne("")},setup(e){const t=e,a=m(""),l=m(""),d=m("middle"),p=m(!1),h=m(100),w=m("outline"),x=m("#4D80F0"),k=m(),_=m(),O=m(""),S=m(!1),F=m("wui-icon"),M=m("");let z=null,I=null;const N=pt(t.selector),T=v(N,m(dt));C((()=>T.value),(e=>{var t;(t=e)&&(p.value=!!W(t.show)&&t.show,p.value&&(a.value=W(t.iconName)?t.iconName:"",M.value=W(t.iconClass)?t.iconClass:"",l.value=W(t.msg)?t.msg:"",d.value=W(t.position)?t.position:"middle",h.value=W(t.zIndex)?t.zIndex:100,w.value=W(t.loadingType)?t.loadingType:"outline",x.value=W(t.loadingColor)?t.loadingColor:"#4D80F0",k.value=W(t.iconSize)?R(t.iconSize):t.iconSize,_.value=W(t.loadingSize)?R(t.loadingSize):t.loadingSize,S.value=!!W(t.cover)&&t.cover,F.value=W(t.classPrefix)?t.classPrefix:"wui-icon",I=oe(t.closed)?t.closed:null,z=oe(t.opened)?t.opened:null))}),{deep:!0,immediate:!0}),C((()=>a.value),(()=>{P()}),{deep:!0,immediate:!0});const V=o((()=>fe({"z-index":h.value,position:"fixed",top:"50%",left:0,width:"100%",transform:"translate(0, -50%)","text-align":"center"}))),j=o((()=>`wui-toast ${t.customClass} wui-toast--${d.value} ${"loading"===a.value&&!l.value||!a.value&&!M.value?"":"wui-toast--with-icon"} ${"loading"!==a.value||l.value?"":"wui-toast--loading"}`)),G=o((()=>{const e={backgroundImage:`url(${O.value})`};return W(k.value)&&(e.width=k.value,e.height=k.value),fe(e)}));function E(){oe(z)&&z()}function D(){oe(I)&&I()}function P(){if("success"!==a.value&&"warning"!==a.value&&"info"!==a.value&&"error"!==a.value)return;const e=`"data:image/svg+xml;base64,${it(mt[a.value]())}"`;O.value=e}return $((()=>{P()})),(e,t)=>{const o=f;return s(),B(A,null,[S.value?(s(),r(Qe,{key:0,"z-index":h.value,"lock-scroll":"",show:p.value,"custom-style":"background-color: transparent;pointer-events: auto;"},null,8,["z-index","show"])):i("",!0),g(We,{name:"fade",show:p.value,"custom-style":V.value,onAfterEnter:E,onAfterLeave:D},{default:n((()=>[g(o,{class:u(j.value)},{default:n((()=>["loading"===a.value?(s(),r(ut,{key:0,type:w.value,color:x.value,size:_.value,"custom-class":"wui-toast__icon"},null,8,["type","color","size"])):"success"===a.value||"warning"===a.value||"info"===a.value||"error"===a.value?(s(),r(o,{key:1,class:"wui-toast__iconWrap wui-toast__icon"},{default:n((()=>[g(o,{class:"wui-toast__iconBox"},{default:n((()=>[g(o,{class:"wui-toast__iconSvg",style:c(G.value)},null,8,["style"])])),_:1})])),_:1})):M.value?(s(),r(je,{key:2,"custom-class":"wui-toast__icon",size:k.value,"class-prefix":F.value,name:M.value},null,8,["size","class-prefix","name"])):i("",!0),l.value?(s(),r(o,{key:3,class:"wui-toast__msg"},{default:n((()=>[y(b(l.value),1)])),_:1})):i("",!0)])),_:1},8,["class"])])),_:1},8,["show","custom-style"])],64)}}}),[["__scopeId","data-v-110eb55c"]]),gt=l({name:"wui-config-provider",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...Te,theme:Ne("light"),themeVars:{type:Object,default:()=>({})}},setup(e){const t=e,a=o((()=>`wui-theme-${t.theme} ${t.customClass}`)),l=o((()=>{const e=i(t.themeVars);return e?`${fe(e)};${t.customStyle}`:t.customStyle})),i=e=>{if(!e)return;const t={};return Object.keys(e).forEach((a=>{var l;t[`--wui-${l=a,(l=l.replace(l.charAt(0),l.charAt(0).toLocaleLowerCase())).replace(/([a-z])([A-Z])/g,((e,t,a)=>t+"-"+a.toLowerCase()))}`]=e[a]})),t};return(e,t)=>{const o=f;return s(),r(o,{class:u(a.value),style:c(l.value)},{default:n((()=>[w(e.$slots,"default")])),_:3},8,["class","style"])}}}),wt="__QUEUE_KEY__";function yt(){const e=m([]);function t(t){e.value.forEach((e=>{e.$.uid!==t.$.uid&&e.$.exposed.close()}))}function a(){e.value.forEach((e=>{e.$.exposed.close()}))}return M(wt,{queue:e,pushToQueue:function(t){e.value.push(t)},removeFromQueue:function(t){e.value=e.value.filter((e=>e.$.uid!==t.$.uid))},closeOther:t,closeOutside:a}),{closeOther:t,closeOutside:a}}const bt=m("zh-CN"),xt=I({"zh-CN":{calendar:{placeholder:"请选择",title:"选择日期",day:"日",week:"周",month:"月",confirm:"确定",startTime:"开始时间",endTime:"结束时间",to:"至",timeFormat:"YY年MM月DD日 HH:mm:ss",dateFormat:"YYYY年MM月DD日",weekFormat:(e,t)=>`${e} 第 ${t} 周`,startWeek:"开始周",endWeek:"结束周",startMonth:"开始月",endMonth:"结束月",monthFormat:"YYYY年MM月"},calendarView:{startTime:"开始",endTime:"结束",weeks:{sun:"日",mon:"一",tue:"二",wed:"三",thu:"四",fri:"五",sat:"六"},rangePrompt:e=>`选择天数不能超过${e}天`,rangePromptWeek:e=>`选择周数不能超过${e}周`,rangePromptMonth:e=>`选择月份不能超过${e}个月`,monthTitle:"YYYY年M月",yearTitle:"YYYY年",month:"M月",hour:e=>`${e}时`,minute:e=>`${e}分`,second:e=>`${e}秒`},collapse:{expand:"展开",retract:"收起"},colPicker:{title:"请选择",placeholder:"请选择",select:"请选择"},datetimePicker:{start:"开始时间",end:"结束时间",to:"至",placeholder:"请选择",confirm:"完成",cancel:"取消"},loadmore:{loading:"正在努力加载中...",finished:"已加载完毕",error:"加载失败",retry:"点击重试"},messageBox:{inputPlaceholder:"请输入",confirm:"确定",cancel:"取消",inputNoValidate:"输入的数据不合法"},numberKeyboard:{confirm:"完成"},pagination:{prev:"上一页",next:"下一页",page:e=>`当前页：${e}`,total:e=>`当前数据：${e}条`,size:e=>`分页大小：${e}`},picker:{cancel:"取消",done:"完成",placeholder:"请选择"},imgCropper:{confirm:"完成",cancel:"取消"},search:{search:"搜索",cancel:"取消"},steps:{wait:"未开始",finished:"已完成",process:"进行中",failed:"失败"},tabs:{all:"全部"},upload:{error:"上传失败"},input:{placeholder:"请输入..."},selectPicker:{title:"请选择",placeholder:"请选择",select:"请选择",confirm:"确认",filterPlaceholder:"搜索"},tag:{placeholder:"请输入",add:"新增标签"},textarea:{placeholder:"请输入..."},tableCol:{indexLabel:"序号"},signature:{confirmText:"确认",clearText:"清空"}}}),kt={messages:()=>xt[bt.value],use(e,t){bt.value=e,t&&this.add({[e]:t})},add(e={}){he(xt,e)}},$t=m(!1);const Ct=Ve(l({options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},__name:"page-wraper",props:{showDarkMode:{type:Boolean,default:!1},safeAreaInsetBottom:{type:Boolean,default:!0},useWxAd:{type:Boolean,default:!0},useRewardFab:{type:Boolean,default:!1}},setup(e){const t=e;o((()=>t.useRewardFab&&!0)),function(){const{loading:e,close:t,show:a}=vt();let l=null;(function(){const e=N("freeAdTime");if(e){const t=(new Date).getTime()-e;$t.value=!(t>864e5)}else $t.value=!1})()}();const a=V(),{closeOutside:l}=yt(),u=m(!1),c=m(!1),d={colorTheme:"red"},v=o((()=>a.isDark.value||u.value?"dark":"light"));return j((()=>{Je=me(Je,{onClick:e=>console.log("onClick",e),onClosed:()=>console.log("onClosed"),onOpened:()=>console.log("onOpened")})})),(e,t)=>{const a=G(E("wui-switch"),Le),o=G(E("wui-cell"),He),p=G(E("wui-gap"),Ue),m=f,h=G(E("wui-notify"),ot),y=G(E("wui-toast"),ht),b=G(E("wui-config-provider"),gt);return s(),r(b,{theme:v.value,"theme-vars":c.value?d:{}},{default:n((()=>[g(m,{class:"page-wraper",onClick:z(l)},{default:n((()=>[e.showDarkMode?(s(),r(o,{key:0,title:"切换暗黑","title-width":"240px",center:""},{default:n((()=>[g(a,{modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=e=>u.value=e)},null,8,["modelValue"])])),_:1})):i("",!0),e.showDarkMode?(s(),r(o,{key:1,title:"切换主题色","title-width":"240px",center:""},{default:n((()=>[g(a,{modelValue:c.value,"onUpdate:modelValue":t[1]||(t[1]=e=>c.value=e)},null,8,["modelValue"])])),_:1})):i("",!0),w(e.$slots,"default",{},void 0,!0),e.safeAreaInsetBottom?(s(),r(p,{key:2,height:"0","safe-area-bottom":""})):i("",!0)])),_:3},8,["onClick"]),g(h),g(y)])),_:3},8,["theme","theme-vars"])}}}),[["__scopeId","data-v-504d72a0"]]);export{q as $,it as A,ae as B,ye as C,oe as D,Se as E,re as F,De as G,Ee as H,P as I,te as J,wt as K,kt as L,me as M,he as N,ze as O,Pe as P,X as Q,Ye as R,Me as S,ne as T,L as U,pe as V,Z as W,U as X,se as Y,we as Z,He as _,Ct as a,ie as a0,qe as a1,ee as a2,xe as a3,ke as a4,J as a5,be as a6,Re as a7,de as a8,ge as a9,Ue as aa,Qe as ab,ce as ac,$e as ad,_e as ae,Fe as af,Oe as ag,Ve as b,vt as c,ht as d,Le as e,Te as f,Ge as g,R as h,Ne as i,yt as j,We as k,Ke as l,Ae as m,Be as n,fe as o,ot as p,ut as q,W as r,le as s,ve as t,at as u,H as v,je as w,Ce as x,ue as y,Ie as z};
