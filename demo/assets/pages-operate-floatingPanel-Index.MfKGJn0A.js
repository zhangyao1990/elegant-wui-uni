import{d as a,r as e,c as t,z as s,Z as l,L as o,a as n,g as u,w as r,h as i,i as c,s as h,S as d,K as g,A as m,B as v,ar as f,n as p,F as _,e as w,f as b,p as j,k as x,t as I,u as T}from"./index-C9W9llSX.js";import{c as y,a8 as $,t as A,k as B,J as M,m as S,e as C,o as D,a9 as H,a as k,f as P,g as V,h as Y,_ as z}from"./page-wraper.BAAFjrch.js";import{_ as F}from"./wui-cell-group.DgBU2Fom.js";import{u as U}from"./useTouch.7qJXdJWm.js";import{_ as Z,a as E}from"./wui-tabs.CE0_LOuH.js";import"./useChildren.B38JgdGT.js";import"./wui-badge.D2bLHt6j.js";import"./wui-sticky-box.DZf04OOk.js";import"./wui-resize.BEnzHKrV.js";import"./useTranslate.Dk0WeNHw.js";const G=k(a({name:"wui-floating-panel",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...y,height:S(0),anchors:M(),safeAreaInsetBottom:B(!1),showScrollbar:$,duration:A(300),contentDraggable:$},emits:["update:height","height-change"],setup(a,{emit:f}){const p=U(),_=a,w=f,b=e(_.height);let j;const x=e(0),I=e(!1),T=t((()=>({min:_.anchors[0]?_.anchors[0]:100,max:_.anchors[_.anchors.length-1]?_.anchors[_.anchors.length-1]:Math.round(.6*x.value)}))),y=t((()=>_.anchors.length>=2?_.anchors:[T.value.min,T.value.max])),$=t((()=>{const a={height:C(T.value.max),transform:`translateY(calc(100% + ${C(-b.value)}))`,transition:I.value?"none":`transform ${_.duration}ms cubic-bezier(0.18, 0.89, 0.32, 1.28)`};return`${D(a)};${_.customStyle}`})),A=a=>{b.value=a,w("update:height",a)},B=a=>{p.touchStart(a),I.value=!0,j=-b.value},M=a=>{if("content"==a.currentTarget.dataset.id&&!_.contentDraggable)return;p.touchMove(a);const e=p.deltaY.value+j;A(-k(e))},S=()=>{I.value=!1,A(H(y.value,b.value)),b.value!==-j&&w("height-change",{height:b.value})},k=a=>{const e=Math.abs(a),{min:t,max:s}=T.value;return e>s?-(s+.2*(e-s)):e<t?-(t-.2*(t-e)):a};return s((()=>_.height),(a=>{b.value=a})),s(T,(()=>{A(H(y.value,b.value))}),{immediate:!0}),l((()=>{const{windowHeight:a}=o();x.value=a})),(a,e)=>{const t=c,s=d;return u(),n(t,{class:h(`wui-floating-panel ${a.customClass} ${a.safeAreaInsetBottom?"is-safe":""}`),style:v($.value),onTouchstartPassive:B,onTouchmovePassive:M,onTouchend:S,onTouchcancel:S},{default:r((()=>[i(t,{class:h("wui-floating-panel__header")},{default:r((()=>[i(t,{class:h("wui-floating-panel__header-bar")})])),_:1}),i(s,{class:h("wui-floating-panel__content"),"data-id":"content","show-scrollbar":a.showScrollbar,"scroll-y":"",onTouchmove:g(M,["stop","prevent"])},{default:r((()=>[m(a.$slots,"default",{},void 0,!0)])),_:3},8,["show-scrollbar"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-57e5e93f"]]),J=k(a({__name:"Index",setup(a){const{show:t}=P(),s=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],l=e(0),n=e(0),h=e(0),d=e([]),g=({height:a})=>{t(C(a))};return f((()=>{h.value=o().windowHeight,d.value=[100,Math.round(.4*h.value),Math.round(.7*h.value)],n.value=d.value[1]})),(a,e)=>{const t=w(b("wui-toast"),V),o=w(b("wui-cell"),Y),h=w(b("wui-cell-group"),F),m=w(b("wui-floating-panel"),G),v=w(b("wui-tab"),Z),f=c,y=w(b("wui-tabs"),E),$=w(b("page-wraper"),z);return u(),p(_,null,[i(t),i(f,{class:"floating-panel"},{default:r((()=>[i($,null,{default:r((()=>[i(y,{modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=a=>l.value=a)},{default:r((()=>[i(v,{title:"基础用法"},{default:r((()=>[i(m,{safeAreaInsetBottom:"",contentDraggable:!1},{default:r((()=>[i(h,{border:""},{default:r((()=>[(u(),p(_,null,j(s,(a=>i(o,{key:a,title:a},null,8,["title"]))),64))])),_:1})])),_:1})])),_:1}),i(v,{title:"自定义锚点"},{default:r((()=>[i(m,{height:n.value,"onUpdate:height":e[0]||(e[0]=a=>n.value=a),anchors:d.value,safeAreaInsetBottom:"",onHeightChange:g},{default:r((()=>[i(f,{class:"inner-content"},{default:r((()=>[x("自定义锚点 "+I(d.value.map(T(C)))+" - "+I(T(C)(n.value.toFixed(0))),1)])),_:1})])),_:1},8,["height","anchors"])])),_:1}),i(v,{title:"仅头部拖拽"},{default:r((()=>[i(m,{contentDraggable:!1},{default:r((()=>[i(f,{class:"inner-content"},{default:r((()=>[x("内容区不可以拖拽")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})],64)}}}),[["__scopeId","data-v-9d1378cc"]]);export{J as default};
