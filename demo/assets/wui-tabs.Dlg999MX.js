import{d as a,c as e,r as s,x as t,e as l,f as i,w as n,n as o,z as u,y as c,s as d,k as r,I as m,E as _,q as b,L as p,a as w,b as f,g as v,l as y,m as h,u as g,F as x,h as k,t as I,S as $,O as C,T as S,A as N}from"./index-72jEY8AL.js";import{c as T,t as L,m as V,k as j,z,l as P,d as W,n as X,o as H,a1 as A,a2 as E,a as G,W as M,b as O,e as Z,p as q,Z as F}from"./page-wraper.DpqTXTZc.js";import{_ as R}from"./wui-badge.CcQp3D5t.js";import{_ as Y,a as B}from"./wui-sticky-box.BN1OnZiP.js";import{u as D}from"./useTouch.zfwUbf7V.js";import{u as J}from"./useChildren.BgpN10K6.js";import{u as K}from"./useTranslate.C1TcN3no.js";const Q=Symbol("wui-tabs"),U={...T,modelValue:L(0),slidableNum:V(6),mapNum:V(10),mapTitle:String,sticky:j(!1),offsetTop:V(0),swipeable:j(!1),autoLineWidth:j(!1),lineWidth:z,lineHeight:z,color:P(""),inactiveColor:P(""),animated:j(!1),duration:V(300),slidable:P("auto")},aa=G(a({name:"wui-tab",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...T,name:z,title:String,disabled:j(!1),lazy:j(!0),badgeProps:Object},setup(a){const _=a,{proxy:b}=m(),{parent:p,index:w}=W(Q),f=e((()=>!!X(p)&&p.state.activeIndex===w.value)),v=s(f.value),y=e((()=>{const a={};return f.value||X(p)&&p.props.animated||(a.display="none"),H(a)})),h=e((()=>!_.lazy||v.value||f.value));return t(f,(a=>{a&&(v.value=!0)})),t((()=>_.name),(a=>{!X(a)||A(a)||E(a)?p&&function(a){const{name:e}=_;if(null==e||""===e)return;p&&p.children.forEach((s=>{s.$.uid!==a.$.uid&&s.name===e&&console.error(`The tab's bound value: ${e} has been used`)}))}(b):console.error("[wui design] error(wui-tab): the type of name should be number or string")}),{deep:!0,immediate:!0}),(a,e)=>{const s=r;return l(),i(s,{class:o(`wui-tab ${a.customClass}`),style:u(a.customStyle)},{default:n((()=>[h.value?(l(),i(s,{key:0,class:o(["wui-tab__body",{"wui-tab__body--inactive":!f.value}]),style:u(y.value)},{default:n((()=>[c(a.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])):d("",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-a90fc4f3"]]),ea=G(a({name:"wui-tabs",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:U,emits:["change","disabled","click","update:modelValue"],setup(a,{expose:s,emit:T}){const L=".wui-tabs__nav-item",V=a,j=T,{translate:z}=K("tabs"),P=_({activeIndex:0,lineStyle:"display:none;",useInnerLine:!1,inited:!1,animating:!1,mapShow:!1,scrollLeft:0}),{children:W,linkChildren:G}=J(Q);G({state:P,props:V});const{proxy:U}=m(),aa=D(),ea=e((()=>"always"===V.slidable||W.length>V.slidableNum)),sa=e((()=>V.animated?H({left:-100*P.activeIndex+"%","transition-duration":V.duration+"ms","-webkit-transition-duration":V.duration+"ms"}):"")),ta=(a,e)=>X(a.name)?a.name:e,la=(a=0,e=!1,s=!0)=>{0!==W.length&&(a=_a(a),W[a].disabled||(P.activeIndex=a,s&&(oa(!1===e),ua()),function(){if(!P.inited)return;const a=ta(W[P.activeIndex],P.activeIndex);a!==V.modelValue&&(j("change",{index:P.activeIndex,name:a}),j("update:modelValue",a))}()))},ia=M(la,100,{leading:!0});function na(){P.mapShow?(P.animating=!1,setTimeout((()=>{P.mapShow=!1}),300)):(P.mapShow=!0,setTimeout((()=>{P.animating=!0}),100))}async function oa(a=!0){if(!P.inited)return;const{autoLineWidth:e,lineWidth:s,lineHeight:t}=V;try{const l={};if(X(s))l.width=Z(s);else if(e){const a=await q(".wui-tabs__nav-item-text",!0,U),e=Number(a[P.activeIndex].width);l.width=Z(e)}X(t)&&(l.height=Z(t),l.borderRadius=`calc(${Z(t)} / 2)`);const i=await q(L,!0,U),n=i[P.activeIndex];let o=i.slice(0,P.activeIndex).reduce(((a,e)=>a+Number(e.width)),0)+Number(n.width)/2;o&&(l.transform=`translateX(${o}px) translateX(-50%)`,a&&(l.transition="width 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);"),P.useInnerLine=!1,P.lineStyle=H(l))}catch(l){console.error("[wui design] error(wui-tabs): update line style failed",l)}}function ua(){P.inited&&Promise.all([q(L,!0,U),q(".wui-tabs__nav-container",!1,U)]).then((([a,e])=>{const s=a[P.activeIndex],t=a.slice(0,P.activeIndex).reduce(((a,e)=>a+e.width),0)-(e.width-Number(s.width))/2;t===P.scrollLeft?P.scrollLeft=t+Math.random()/1e4:P.scrollLeft=t}))}function ca(a){if(void 0===a)return;const{disabled:e}=W[a],s=ta(W[a],a);e?j("disabled",{index:a,name:s}):(P.mapShow&&na(),ia(a),j("click",{index:a,name:s}))}function da(a){V.swipeable&&aa.touchStart(a)}function ra(a){V.swipeable&&aa.touchMove(a)}function ma(){if(!V.swipeable)return;const{direction:a,deltaX:e,offsetX:s}=aa;"horizontal"===a.value&&s.value>=50&&(e.value>0&&0!==P.activeIndex?ia(P.activeIndex-1):e.value<0&&P.activeIndex!==W.length-1&&ia(P.activeIndex+1))}function _a(a){if(A(a)&&a>=W.length&&(console.error("[wui design] warning(wui-tabs): the type of tabs' value is Number shouldn't be less than its children"),a=0),E(a)){const e=W.findIndex((e=>e.name===a));a=-1===e?0:e}return a}return t((()=>V.modelValue),(a=>{A(a)||E(a)||console.error("[wui design] error(wui-tabs): the type of value should be number or string"),""!==a&&X(a)||console.error("[wui design] error(wui-tabs): tabs's value cannot be '' null or undefined"),"number"==typeof a&&a<0&&console.error("[wui design] error(wui-tabs): tabs's value cannot be less than zero")}),{immediate:!0,deep:!0}),t((()=>V.modelValue),(a=>{const e=_a(a);ia(a,!1,e!==P.activeIndex)}),{immediate:!1,deep:!0}),t((()=>W.length),(()=>{P.inited&&p((()=>{ia(V.modelValue)}))})),t((()=>V.slidableNum),(a=>{F(a,"slidableNum")})),t((()=>V.mapNum),(a=>{F(a,"mapNum")})),b((()=>{P.inited=!0,p((()=>{la(V.modelValue,!0),P.useInnerLine=!0}))})),s({setActive:ia,scrollIntoView:ua,updateLineStyle:oa}),(a,e)=>{const s=N,t=w(f("wui-badge"),R),m=r,_=$;return a.sticky?(l(),i(B,{key:0},{default:n((()=>[v(m,{class:o(`wui-tabs ${a.customClass} ${ea.value?"is-slide":""} ${a.mapNum<g(W).length&&0!==a.mapNum?"is-map":""}`),style:u(a.customStyle)},{default:n((()=>[v(Y,{"offset-top":a.offsetTop},{default:n((()=>[v(m,{class:"wui-tabs__nav wui-tabs__nav--sticky"},{default:n((()=>[v(m,{class:"wui-tabs__nav--wrap"},{default:n((()=>[v(_,{"scroll-x":ea.value,"scroll-with-animation":"","scroll-left":P.scrollLeft},{default:n((()=>[v(m,{class:"wui-tabs__nav-container"},{default:n((()=>[(l(!0),y(x,null,h(g(W),((e,c)=>(l(),i(m,{onClick:a=>ca(c),key:c,class:o(`wui-tabs__nav-item  ${P.activeIndex===c?"is-active":""} ${e.disabled?"is-disabled":""}`),style:u(P.activeIndex===c?a.color?"color:"+a.color:"":a.inactiveColor?"color:"+a.inactiveColor:"")},{default:n((()=>[e.badgeProps?(l(),i(t,C(S({key:0},e.badgeProps)),{default:n((()=>[v(s,{class:"wui-tabs__nav-item-text"},{default:n((()=>[k(I(e.title),1)])),_:2},1024)])),_:2},1040)):(l(),i(s,{key:1,class:"wui-tabs__nav-item-text"},{default:n((()=>[k(I(e.title),1)])),_:2},1024)),P.activeIndex===c&&P.useInnerLine?(l(),i(m,{key:2,class:"wui-tabs__line wui-tabs__line--inner"})):d("",!0)])),_:2},1032,["onClick","class","style"])))),128)),v(m,{class:"wui-tabs__line",style:u(P.lineStyle)},null,8,["style"])])),_:1})])),_:1},8,["scroll-x","scroll-left"])])),_:1}),a.mapNum<g(W).length&&0!==a.mapNum?(l(),i(m,{key:0,class:"wui-tabs__map"},{default:n((()=>[v(m,{class:o("wui-tabs__map-btn  "+(P.animating?"is-open":"")),onClick:na},{default:n((()=>[v(m,{class:o("wui-tabs__map-arrow  "+(P.animating?"is-open":""))},{default:n((()=>[v(O,{name:"arrow-down"})])),_:1},8,["class"])])),_:1},8,["class"]),v(m,{class:"wui-tabs__map-header",style:u(`${P.mapShow?"":"display:none;"}  ${P.animating?"opacity:1;":""}`)},{default:n((()=>[k(I(a.mapTitle||g(z)("all")),1)])),_:1},8,["style"]),v(m,{class:o("wui-tabs__map-body  "+(P.animating?"is-open":"")),style:u(P.mapShow?"":"display:none")},{default:n((()=>[(l(!0),y(x,null,h(g(W),((e,s)=>(l(),i(m,{class:"wui-tabs__map-nav-item",key:s,onClick:a=>ca(s)},{default:n((()=>[v(m,{class:o(`wui-tabs__map-nav-btn ${P.activeIndex===s?"is-active":""}  ${e.disabled?"is-disabled":""}`),style:u(P.activeIndex===s?a.color?"color:"+a.color+";border-color:"+a.color:"":a.inactiveColor?"color:"+a.inactiveColor:"")},{default:n((()=>[k(I(e.title),1)])),_:2},1032,["class","style"])])),_:2},1032,["onClick"])))),128))])),_:1},8,["class","style"])])),_:1})):d("",!0)])),_:1})])),_:1},8,["offset-top"]),v(m,{class:"wui-tabs__container",onTouchstart:da,onTouchmove:ra,onTouchend:ma,onTouchcancel:ma},{default:n((()=>[v(m,{class:o(["wui-tabs__body",a.animated?"is-animated":""]),style:u(sa.value)},{default:n((()=>[c(a.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])])),_:3}),v(m,{class:"wui-tabs__mask",style:u(`${P.mapShow?"":"display:none;"} ${P.animating?"opacity:1;":""}`),onClick:na},null,8,["style"])])),_:3},8,["class","style"])])),_:3})):(l(),i(m,{key:1,class:o(`wui-tabs ${a.customClass} ${ea.value?"is-slide":""} ${a.mapNum<g(W).length&&0!==a.mapNum?"is-map":""}`)},{default:n((()=>[v(m,{class:"wui-tabs__nav"},{default:n((()=>[v(m,{class:"wui-tabs__nav--wrap"},{default:n((()=>[v(_,{"scroll-x":ea.value,"scroll-with-animation":"","scroll-left":P.scrollLeft},{default:n((()=>[v(m,{class:"wui-tabs__nav-container"},{default:n((()=>[(l(!0),y(x,null,h(g(W),((e,c)=>(l(),i(m,{onClick:a=>ca(c),key:c,class:o(`wui-tabs__nav-item ${P.activeIndex===c?"is-active":""} ${e.disabled?"is-disabled":""}`),style:u(P.activeIndex===c?a.color?"color:"+a.color:"":a.inactiveColor?"color:"+a.inactiveColor:"")},{default:n((()=>[e.badgeProps?(l(),i(t,S({key:0,"custom-class":"wui-tabs__nav-item-badge"},e.badgeProps),{default:n((()=>[v(s,{class:"wui-tabs__nav-item-text"},{default:n((()=>[k(I(e.title),1)])),_:2},1024)])),_:2},1040)):(l(),i(s,{key:1,class:"wui-tabs__nav-item-text"},{default:n((()=>[k(I(e.title),1)])),_:2},1024)),P.activeIndex===c&&P.useInnerLine?(l(),i(m,{key:2,class:"wui-tabs__line wui-tabs__line--inner"})):d("",!0)])),_:2},1032,["onClick","class","style"])))),128)),v(m,{class:"wui-tabs__line",style:u(P.lineStyle)},null,8,["style"])])),_:1})])),_:1},8,["scroll-x","scroll-left"])])),_:1}),a.mapNum<g(W).length&&0!==a.mapNum?(l(),i(m,{key:0,class:"wui-tabs__map"},{default:n((()=>[v(m,{class:"wui-tabs__map-btn",onClick:na},{default:n((()=>[v(m,{class:o("wui-tabs__map-arrow "+(P.animating?"is-open":""))},{default:n((()=>[v(O,{name:"arrow-down"})])),_:1},8,["class"])])),_:1}),v(m,{class:"wui-tabs__map-header",style:u(`${P.mapShow?"":"display:none;"}  ${P.animating?"opacity:1;":""}`)},{default:n((()=>[k(I(a.mapTitle||g(z)("all")),1)])),_:1},8,["style"]),v(m,{class:o("wui-tabs__map-body "+(P.animating?"is-open":"")),style:u(P.mapShow?"":"display:none")},{default:n((()=>[(l(!0),y(x,null,h(g(W),((a,e)=>(l(),i(m,{class:"wui-tabs__map-nav-item",key:e,onClick:a=>ca(e)},{default:n((()=>[v(m,{class:o(`wui-tabs__map-nav-btn ${P.activeIndex===e?"is-active":""}  ${a.disabled?"is-disabled":""}`)},{default:n((()=>[k(I(a.title),1)])),_:2},1032,["class"])])),_:2},1032,["onClick"])))),128))])),_:1},8,["class","style"])])),_:1})):d("",!0)])),_:1}),v(m,{class:"wui-tabs__container",onTouchstart:da,onTouchmove:ra,onTouchend:ma,onTouchcancel:ma},{default:n((()=>[v(m,{class:o(["wui-tabs__body",a.animated?"is-animated":""]),style:u(sa.value)},{default:n((()=>[c(a.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])])),_:3}),v(m,{class:"wui-tabs__mask",style:u(`${P.mapShow?"":"display:none;"}  ${P.animating?"opacity:1":""}`),onClick:na},null,8,["style"])])),_:3},8,["class"]))}}}),[["__scopeId","data-v-154a3bb3"]]);export{aa as _,ea as a};
