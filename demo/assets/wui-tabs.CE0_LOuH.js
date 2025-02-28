import{d as a,H as e,c as s,r as t,z as l,a as i,g as n,w as o,x as u,i as c,B as d,s as r,A as m,I as _,v as b,O as p,e as w,f,h as v,u as y,S as h,n as g,F as x,p as k,Q as I,V as $,D as C,k as S,t as N}from"./index-C9W9llSX.js";import{l as T,m as L,k as V,z as j,t as z,c as P,d as H,n as W,o as X,a1 as A,a2 as G,a as M,W as O,b as Z,e as B,p as D,Z as E}from"./page-wraper.BAAFjrch.js";import{_ as F}from"./wui-badge.D2bLHt6j.js";import{_ as Q,a as R}from"./wui-sticky-box.DZf04OOk.js";import{u as Y}from"./useTouch.7qJXdJWm.js";import{u as q}from"./useChildren.B38JgdGT.js";import{u as J}from"./useTranslate.Dk0WeNHw.js";const K=Symbol("wui-tabs"),U={...P,modelValue:z(0),slidableNum:L(6),mapNum:L(10),mapTitle:String,sticky:V(!1),offsetTop:L(0),swipeable:V(!1),autoLineWidth:V(!1),lineWidth:j,lineHeight:j,color:T(""),inactiveColor:T(""),animated:V(!1),duration:L(300),slidable:T("auto")},aa=M(a({name:"wui-tab",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...P,name:j,title:String,disabled:V(!1),lazy:V(!0),badgeProps:Object},setup(a){const _=a,{proxy:b}=e(),{parent:p,index:w}=H(K),f=s((()=>!!W(p)&&p.state.activeIndex===w.value)),v=t(f.value),y=s((()=>{const a={};return f.value||W(p)&&p.props.animated||(a.display="none"),X(a)})),h=s((()=>!_.lazy||v.value||f.value));return l(f,(a=>{a&&(v.value=!0)})),l((()=>_.name),(a=>{!W(a)||A(a)||G(a)?p&&function(a){const{name:e}=_;if(null==e||""===e)return;p&&p.children.forEach((s=>{s.$.uid!==a.$.uid&&s.name===e&&console.error(`The tab's bound value: ${e} has been used`)}))}(b):console.error("[wui design] error(wui-tab): the type of name should be number or string")}),{deep:!0,immediate:!0}),(a,e)=>{const s=c;return n(),i(s,{class:r(`wui-tab ${a.customClass}`),style:d(a.customStyle)},{default:o((()=>[h.value?(n(),i(s,{key:0,class:r(["wui-tab__body",{"wui-tab__body--inactive":!f.value}]),style:d(y.value)},{default:o((()=>[m(a.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])):u("",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-a90fc4f3"]]),ea=M(a({name:"wui-tabs",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:U,emits:["change","disabled","click","update:modelValue"],setup(a,{expose:t,emit:T}){const L=".wui-tabs__nav-item",V=a,j=T,{translate:z}=J("tabs"),P=_({activeIndex:0,lineStyle:"display:none;",useInnerLine:!1,inited:!1,animating:!1,mapShow:!1,scrollLeft:0}),{children:H,linkChildren:M}=q(K);M({state:P,props:V});const{proxy:U}=e(),aa=Y(),ea=s((()=>"always"===V.slidable||H.length>V.slidableNum)),sa=s((()=>V.animated?X({left:-100*P.activeIndex+"%","transition-duration":V.duration+"ms","-webkit-transition-duration":V.duration+"ms"}):"")),ta=(a,e)=>W(a.name)?a.name:e,la=(a=0,e=!1,s=!0)=>{0!==H.length&&(a=_a(a),H[a].disabled||(P.activeIndex=a,s&&(oa(!1===e),ua()),function(){if(!P.inited)return;const a=ta(H[P.activeIndex],P.activeIndex);a!==V.modelValue&&(j("change",{index:P.activeIndex,name:a}),j("update:modelValue",a))}()))},ia=O(la,100,{leading:!0});function na(){P.mapShow?(P.animating=!1,setTimeout((()=>{P.mapShow=!1}),300)):(P.mapShow=!0,setTimeout((()=>{P.animating=!0}),100))}async function oa(a=!0){if(!P.inited)return;const{autoLineWidth:e,lineWidth:s,lineHeight:t}=V;try{const l={};if(W(s))l.width=B(s);else if(e){const a=await D(".wui-tabs__nav-item-text",!0,U),e=Number(a[P.activeIndex].width);l.width=B(e)}W(t)&&(l.height=B(t),l.borderRadius=`calc(${B(t)} / 2)`);const i=await D(L,!0,U),n=i[P.activeIndex];let o=i.slice(0,P.activeIndex).reduce(((a,e)=>a+Number(e.width)),0)+Number(n.width)/2;o&&(l.transform=`translateX(${o}px) translateX(-50%)`,a&&(l.transition="width 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);"),P.useInnerLine=!1,P.lineStyle=X(l))}catch(l){console.error("[wui design] error(wui-tabs): update line style failed",l)}}function ua(){P.inited&&Promise.all([D(L,!0,U),D(".wui-tabs__nav-container",!1,U)]).then((([a,e])=>{const s=a[P.activeIndex],t=a.slice(0,P.activeIndex).reduce(((a,e)=>a+e.width),0)-(e.width-Number(s.width))/2;t===P.scrollLeft?P.scrollLeft=t+Math.random()/1e4:P.scrollLeft=t}))}function ca(a){if(void 0===a)return;const{disabled:e}=H[a],s=ta(H[a],a);e?j("disabled",{index:a,name:s}):(P.mapShow&&na(),ia(a),j("click",{index:a,name:s}))}function da(a){V.swipeable&&aa.touchStart(a)}function ra(a){V.swipeable&&aa.touchMove(a)}function ma(){if(!V.swipeable)return;const{direction:a,deltaX:e,offsetX:s}=aa;"horizontal"===a.value&&s.value>=50&&(e.value>0&&0!==P.activeIndex?ia(P.activeIndex-1):e.value<0&&P.activeIndex!==H.length-1&&ia(P.activeIndex+1))}function _a(a){if(A(a)&&a>=H.length&&(console.error("[wui design] warning(wui-tabs): the type of tabs' value is Number shouldn't be less than its children"),a=0),G(a)){const e=H.findIndex((e=>e.name===a));a=-1===e?0:e}return a}return l((()=>V.modelValue),(a=>{A(a)||G(a)||console.error("[wui design] error(wui-tabs): the type of value should be number or string"),""!==a&&W(a)||console.error("[wui design] error(wui-tabs): tabs's value cannot be '' null or undefined"),"number"==typeof a&&a<0&&console.error("[wui design] error(wui-tabs): tabs's value cannot be less than zero")}),{immediate:!0,deep:!0}),l((()=>V.modelValue),(a=>{const e=_a(a);ia(a,!1,e!==P.activeIndex)}),{immediate:!1,deep:!0}),l((()=>H.length),(()=>{P.inited&&p((()=>{ia(V.modelValue)}))})),l((()=>V.slidableNum),(a=>{E(a,"slidableNum")})),l((()=>V.mapNum),(a=>{E(a,"mapNum")})),b((()=>{P.inited=!0,p((()=>{la(V.modelValue,!0),P.useInnerLine=!0}))})),t({setActive:ia,scrollIntoView:ua,updateLineStyle:oa}),(a,e)=>{const s=C,t=w(f("wui-badge"),F),l=c,_=h;return a.sticky?(n(),i(R,{key:0},{default:o((()=>[v(l,{class:r(`wui-tabs ${a.customClass} ${ea.value?"is-slide":""} ${a.mapNum<y(H).length&&0!==a.mapNum?"is-map":""}`),style:d(a.customStyle)},{default:o((()=>[v(Q,{"offset-top":a.offsetTop},{default:o((()=>[v(l,{class:"wui-tabs__nav wui-tabs__nav--sticky"},{default:o((()=>[v(l,{class:"wui-tabs__nav--wrap"},{default:o((()=>[v(_,{"scroll-x":ea.value,"scroll-with-animation":"","scroll-left":P.scrollLeft},{default:o((()=>[v(l,{class:"wui-tabs__nav-container"},{default:o((()=>[(n(!0),g(x,null,k(y(H),((e,c)=>(n(),i(l,{onClick:a=>ca(c),key:c,class:r(`wui-tabs__nav-item  ${P.activeIndex===c?"is-active":""} ${e.disabled?"is-disabled":""}`),style:d(P.activeIndex===c?a.color?"color:"+a.color:"":a.inactiveColor?"color:"+a.inactiveColor:"")},{default:o((()=>[e.badgeProps?(n(),i(t,I($({key:0},e.badgeProps)),{default:o((()=>[v(s,{class:"wui-tabs__nav-item-text"},{default:o((()=>[S(N(e.title),1)])),_:2},1024)])),_:2},1040)):(n(),i(s,{key:1,class:"wui-tabs__nav-item-text"},{default:o((()=>[S(N(e.title),1)])),_:2},1024)),P.activeIndex===c&&P.useInnerLine?(n(),i(l,{key:2,class:"wui-tabs__line wui-tabs__line--inner"})):u("",!0)])),_:2},1032,["onClick","class","style"])))),128)),v(l,{class:"wui-tabs__line",style:d(P.lineStyle)},null,8,["style"])])),_:1})])),_:1},8,["scroll-x","scroll-left"])])),_:1}),a.mapNum<y(H).length&&0!==a.mapNum?(n(),i(l,{key:0,class:"wui-tabs__map"},{default:o((()=>[v(l,{class:r("wui-tabs__map-btn  "+(P.animating?"is-open":"")),onClick:na},{default:o((()=>[v(l,{class:r("wui-tabs__map-arrow  "+(P.animating?"is-open":""))},{default:o((()=>[v(Z,{name:"arrow-down"})])),_:1},8,["class"])])),_:1},8,["class"]),v(l,{class:"wui-tabs__map-header",style:d(`${P.mapShow?"":"display:none;"}  ${P.animating?"opacity:1;":""}`)},{default:o((()=>[S(N(a.mapTitle||y(z)("all")),1)])),_:1},8,["style"]),v(l,{class:r("wui-tabs__map-body  "+(P.animating?"is-open":"")),style:d(P.mapShow?"":"display:none")},{default:o((()=>[(n(!0),g(x,null,k(y(H),((e,s)=>(n(),i(l,{class:"wui-tabs__map-nav-item",key:s,onClick:a=>ca(s)},{default:o((()=>[v(l,{class:r(`wui-tabs__map-nav-btn ${P.activeIndex===s?"is-active":""}  ${e.disabled?"is-disabled":""}`),style:d(P.activeIndex===s?a.color?"color:"+a.color+";border-color:"+a.color:"":a.inactiveColor?"color:"+a.inactiveColor:"")},{default:o((()=>[S(N(e.title),1)])),_:2},1032,["class","style"])])),_:2},1032,["onClick"])))),128))])),_:1},8,["class","style"])])),_:1})):u("",!0)])),_:1})])),_:1},8,["offset-top"]),v(l,{class:"wui-tabs__container",onTouchstart:da,onTouchmove:ra,onTouchend:ma,onTouchcancel:ma},{default:o((()=>[v(l,{class:r(["wui-tabs__body",a.animated?"is-animated":""]),style:d(sa.value)},{default:o((()=>[m(a.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])])),_:3}),v(l,{class:"wui-tabs__mask",style:d(`${P.mapShow?"":"display:none;"} ${P.animating?"opacity:1;":""}`),onClick:na},null,8,["style"])])),_:3},8,["class","style"])])),_:3})):(n(),i(l,{key:1,class:r(`wui-tabs ${a.customClass} ${ea.value?"is-slide":""} ${a.mapNum<y(H).length&&0!==a.mapNum?"is-map":""}`)},{default:o((()=>[v(l,{class:"wui-tabs__nav"},{default:o((()=>[v(l,{class:"wui-tabs__nav--wrap"},{default:o((()=>[v(_,{"scroll-x":ea.value,"scroll-with-animation":"","scroll-left":P.scrollLeft},{default:o((()=>[v(l,{class:"wui-tabs__nav-container"},{default:o((()=>[(n(!0),g(x,null,k(y(H),((e,c)=>(n(),i(l,{onClick:a=>ca(c),key:c,class:r(`wui-tabs__nav-item ${P.activeIndex===c?"is-active":""} ${e.disabled?"is-disabled":""}`),style:d(P.activeIndex===c?a.color?"color:"+a.color:"":a.inactiveColor?"color:"+a.inactiveColor:"")},{default:o((()=>[e.badgeProps?(n(),i(t,$({key:0,"custom-class":"wui-tabs__nav-item-badge"},e.badgeProps),{default:o((()=>[v(s,{class:"wui-tabs__nav-item-text"},{default:o((()=>[S(N(e.title),1)])),_:2},1024)])),_:2},1040)):(n(),i(s,{key:1,class:"wui-tabs__nav-item-text"},{default:o((()=>[S(N(e.title),1)])),_:2},1024)),P.activeIndex===c&&P.useInnerLine?(n(),i(l,{key:2,class:"wui-tabs__line wui-tabs__line--inner"})):u("",!0)])),_:2},1032,["onClick","class","style"])))),128)),v(l,{class:"wui-tabs__line",style:d(P.lineStyle)},null,8,["style"])])),_:1})])),_:1},8,["scroll-x","scroll-left"])])),_:1}),a.mapNum<y(H).length&&0!==a.mapNum?(n(),i(l,{key:0,class:"wui-tabs__map"},{default:o((()=>[v(l,{class:"wui-tabs__map-btn",onClick:na},{default:o((()=>[v(l,{class:r("wui-tabs__map-arrow "+(P.animating?"is-open":""))},{default:o((()=>[v(Z,{name:"arrow-down"})])),_:1},8,["class"])])),_:1}),v(l,{class:"wui-tabs__map-header",style:d(`${P.mapShow?"":"display:none;"}  ${P.animating?"opacity:1;":""}`)},{default:o((()=>[S(N(a.mapTitle||y(z)("all")),1)])),_:1},8,["style"]),v(l,{class:r("wui-tabs__map-body "+(P.animating?"is-open":"")),style:d(P.mapShow?"":"display:none")},{default:o((()=>[(n(!0),g(x,null,k(y(H),((a,e)=>(n(),i(l,{class:"wui-tabs__map-nav-item",key:e,onClick:a=>ca(e)},{default:o((()=>[v(l,{class:r(`wui-tabs__map-nav-btn ${P.activeIndex===e?"is-active":""}  ${a.disabled?"is-disabled":""}`)},{default:o((()=>[S(N(a.title),1)])),_:2},1032,["class"])])),_:2},1032,["onClick"])))),128))])),_:1},8,["class","style"])])),_:1})):u("",!0)])),_:1}),v(l,{class:"wui-tabs__container",onTouchstart:da,onTouchmove:ra,onTouchend:ma,onTouchcancel:ma},{default:o((()=>[v(l,{class:r(["wui-tabs__body",a.animated?"is-animated":""]),style:d(sa.value)},{default:o((()=>[m(a.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])])),_:3}),v(l,{class:"wui-tabs__mask",style:d(`${P.mapShow?"":"display:none;"}  ${P.animating?"opacity:1":""}`),onClick:na},null,8,["style"])])),_:3},8,["class"]))}}}),[["__scopeId","data-v-154a3bb3"]]);export{aa as _,ea as a};
