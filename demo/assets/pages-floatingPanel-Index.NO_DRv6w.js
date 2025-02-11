import{d as a,r as e,q as t,v as s,T as l,I as o,o as n,c as u,w as r,e as i,n as c,x as h,W as d,y as g,i as m,ab as v,D as f,a as p,b as _,g as w,F as b,h as x,f as j,t as I,u as T}from"./index-Dr4mJiuc.js";import{f as y,m as $,O as D,n as M,af as S,z as A,h as B,o as C,ag as H,b as V,c as z,d as F,_ as P,a as U}from"./page-wraper.DKh8GSae.js";import{_ as Y}from"./wui-cell-group.DfpMszCp.js";import{u as k}from"./useTouch.BCR70F8p.js";import{_ as G,a as J}from"./wui-tabs.B7gMy4eM.js";import"./useChildren.sgdd5yxK.js";import"./wui-badge.B7RngZNw.js";import"./wui-sticky-box.CEC2N1Sm.js";import"./wui-resize.B_i3LZAR.js";import"./useTranslate.lVjJraGZ.js";const K=V(a({name:"wui-floating-panel",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...y,height:$(0),anchors:D(),safeAreaInsetBottom:M(!1),showScrollbar:S,duration:A(300),contentDraggable:S},emits:["update:height","height-change"],setup(a,{emit:f}){const p=k(),_=a,w=f,b=e(_.height);let x;const j=e(0),I=e(!1),T=t((()=>({min:_.anchors[0]?_.anchors[0]:100,max:_.anchors[_.anchors.length-1]?_.anchors[_.anchors.length-1]:Math.round(.6*j.value)}))),y=t((()=>_.anchors.length>=2?_.anchors:[T.value.min,T.value.max])),$=t((()=>{const a={height:B(T.value.max),transform:`translateY(calc(100% + ${B(-b.value)}))`,transition:I.value?"none":`transform ${_.duration}ms cubic-bezier(0.18, 0.89, 0.32, 1.28)`};return`${C(a)};${_.customStyle}`})),D=a=>{b.value=a,w("update:height",a)},M=a=>{p.touchStart(a),I.value=!0,x=-b.value},S=a=>{if("content"==a.currentTarget.dataset.id&&!_.contentDraggable)return;p.touchMove(a);const e=p.deltaY.value+x;D(-V(e))},A=()=>{I.value=!1,D(H(y.value,b.value)),b.value!==-x&&w("height-change",{height:b.value})},V=a=>{const e=Math.abs(a),{min:t,max:s}=T.value;return e>s?-(s+.2*(e-s)):e<t?-(t-.2*(t-e)):a};return s((()=>_.height),(a=>{b.value=a})),s(T,(()=>{D(H(y.value,b.value))}),{immediate:!0}),l((()=>{const{windowHeight:a}=o();j.value=a})),(a,e)=>{const t=m,s=v;return n(),u(t,{class:c(`wui-floating-panel ${a.customClass} ${a.safeAreaInsetBottom?"is-safe":""}`),style:g($.value),onTouchstartPassive:M,onTouchmovePassive:S,onTouchend:A,onTouchcancel:A},{default:r((()=>[i(t,{class:c("wui-floating-panel__header")},{default:r((()=>[i(t,{class:c("wui-floating-panel__header-bar")})])),_:1}),i(s,{class:c("wui-floating-panel__content"),"data-id":"content","show-scrollbar":a.showScrollbar,"scroll-y":"",onTouchmove:d(S,["stop","prevent"])},{default:r((()=>[h(a.$slots,"default",{},void 0,!0)])),_:3},8,["show-scrollbar"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-57e5e93f"]]),O=V(a({__name:"Index",setup(a){const{show:t}=z(),s=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],l=e(0),u=e(0),c=e(0),h=e([]),d=({height:a})=>{t(B(a))};return f((()=>{c.value=o().windowHeight,h.value=[100,Math.round(.4*c.value),Math.round(.7*c.value)],u.value=h.value[1]})),(a,e)=>{const t=p(_("wui-toast"),F),o=p(_("wui-cell"),P),c=p(_("wui-cell-group"),Y),g=p(_("wui-floating-panel"),K),v=p(_("wui-tab"),G),f=m,y=p(_("wui-tabs"),J),$=p(_("page-wraper"),U);return n(),w(b,null,[i(t),i(f,{class:"floating-panel"},{default:r((()=>[i($,null,{default:r((()=>[i(y,{modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=a=>l.value=a)},{default:r((()=>[i(v,{title:"基础用法"},{default:r((()=>[i(g,{safeAreaInsetBottom:"",contentDraggable:!1},{default:r((()=>[i(c,{border:""},{default:r((()=>[(n(),w(b,null,x(s,(a=>i(o,{key:a,title:a},null,8,["title"]))),64))])),_:1})])),_:1})])),_:1}),i(v,{title:"自定义锚点"},{default:r((()=>[i(g,{height:u.value,"onUpdate:height":e[0]||(e[0]=a=>u.value=a),anchors:h.value,safeAreaInsetBottom:"",onHeightChange:d},{default:r((()=>[i(f,{class:"inner-content"},{default:r((()=>[j("自定义锚点 "+I(h.value.map(T(B)))+" - "+I(T(B)(u.value.toFixed(0))),1)])),_:1})])),_:1},8,["height","anchors"])])),_:1}),i(v,{title:"仅头部拖拽"},{default:r((()=>[i(g,{contentDraggable:!1},{default:r((()=>[i(f,{class:"inner-content"},{default:r((()=>[j("内容区不可以拖拽")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})],64)}}}),[["__scopeId","data-v-60982fb4"]]);export{O as default};
