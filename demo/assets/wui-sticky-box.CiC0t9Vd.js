import{d as t,r as e,Z as o,c as s,e as i,f as a,w as n,g as l,A as u,z as r,p as d,k as c,N as h,ad as p,R as f}from"./index-B1zkhFT1.js";import{w as v}from"./wui-resize.BadfkWer.js";import{f as b,m as y,I as m,g,h as w,o as x,t as k,J as $,a as C}from"./page-wraper.D5sIAHqb.js";import{u as _}from"./useChildren.COqmfdId.js";const S={...b,zIndex:y(1),offsetTop:y(0)},z=Symbol("wui-sticky-box"),I=C(t({name:"wui-sticky",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:S,setup(t,{expose:f}){const b=t,y=e(`wui-sticky${m()}`),C=e([]),_=o({position:"absolute",boxLeaved:!1,top:0,height:0,width:0,state:""}),{parent:S}=g(z),{proxy:I}=h(),T=s((()=>{const t={"z-index":b.zIndex,height:w(_.height),width:w(_.width)};return _.boxLeaved||(t.position="relative"),`${x(t)};${b.customStyle}`})),R=s((()=>{const t={"z-index":b.zIndex,height:w(_.height),width:w(_.width)};return _.boxLeaved||(t.position="relative"),`${x(t)};`})),L=s((()=>{const t={position:_.position,top:w(_.top)};return x(t)})),N=s((()=>{let t=0;return t=44,44+b.offsetTop}));async function j(t){_.width=t.width,_.height=t.height,await k(),function(){if(0===_.height&&0===_.width)return;const t=N.value+_.height;(function(){for(;0!==C.value.length;)C.value.pop().disconnect()})(),function(){const t=p(I,{thresholds:[0,.5]});return C.value.push(t),t}().relativeToViewport({top:-t}).observe(`#${y.value}`,(t=>{P(t)})),$(`#${y.value}`,!1,I).then((e=>{e.bottom=Number(e.bottom)+44,Number(e.bottom)<=t&&P({boundingClientRect:e})}))}(),S&&S.observerForChild&&S.observerForChild(I)}function P({boundingClientRect:t}){if(S&&_.height>=S.boxStyle.height)return _.position="absolute",void(_.top=0);let e=t.top<=N.value;e=t.top<N.value,e?(_.state="sticky",_.boxLeaved=!1,_.position="fixed",_.top=N.value):(_.state="normal",_.boxLeaved=!1,_.position="absolute",_.top=0)}return f({setPosition:function(t,e,o){_.boxLeaved=t,_.position=e,_.top=o},stickyState:_,offsetTop:b.offsetTop}),(t,e)=>{const o=c;return i(),a(o,{style:u(`${T.value};display: inline-block;`)},{default:n((()=>[l(o,{class:d(`wui-sticky ${t.customClass}`),style:u(R.value),id:y.value},{default:n((()=>[l(o,{class:"wui-sticky__container",style:u(L.value)},{default:n((()=>[l(v,{onResize:j,"custom-style":"display: inline-block;"},{default:n((()=>[r(t.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["style"])])),_:3},8,["class","style","id"])])),_:3},8,["style"])}}}),[["__scopeId","data-v-a170594c"]]),T=C(t({name:"wui-sticky-box",options:{addGlobalClass:!0,styleIsolation:"shared"},props:b,setup(t){const s=t,b=e(`wui-sticky-box${m()}`),y=e(new Map),g=o({height:0,width:0}),{proxy:w}=h(),{children:x,linkChildren:k}=_(z);function C(t){g.width=t.width,g.height=t.height;const e=y.value;y.value=new Map;for(const[o]of e){S(x.find((t=>t.$.uid===o)))}e.forEach((t=>{t.disconnect()})),e.clear()}function S(t){!function(t){const e=y.value.get(t.$.uid);e&&(e.disconnect(),y.value.delete(t.$.uid))}(t);const e=function(t){const e=p(w,{thresholds:[0,.5]});return y.value.set(t.$.uid,e),e}(t),o=t.$.exposed;let s=o.stickyState.height+o.offsetTop;s+=44,g.height<=o.stickyState.height&&o.setPosition(!1,"absolute",0),e.relativeToViewport({top:-s}).observe(`#${b.value}`,(t=>{I(o,t)})),$(`#${b.value}`,!1,w).then((t=>{t.bottom=Number(t.bottom)+44,Number(t.bottom)<=s&&I(o,{boundingClientRect:t})})).catch((t=>{console.log(t)}))}function I(t,{boundingClientRect:e}){let o=t.offsetTop;o+=44;const s=t.stickyState.height+o;let i=e.bottom<=s;if(i=e.bottom<s,i)t.setPosition(!0,"absolute",e.height-t.stickyState.height);else if(e.top<=s&&!i){if("normal"===t.stickyState.state)return;t.setPosition(!1,"fixed",o)}}return k({boxStyle:g,observerForChild:S}),f((()=>{y.value=new Map})),(t,e)=>{const o=c;return i(),a(o,{style:{position:"relative"}},{default:n((()=>[l(o,{class:d(`wui-sticky-box ${s.customClass}`),style:u(t.customStyle),id:b.value},{default:n((()=>[l(v,{onResize:C},{default:n((()=>[r(t.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["class","style","id"])])),_:3})}}}),[["__scopeId","data-v-a63f14a0"]]);export{T as a,I as w};
