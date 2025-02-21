import{c as t,l as e,k as o,b as l,j as n,q as a,a as s,f as u,s as c,g as d,_ as i}from"./page-wraper.DpqTXTZc.js";import{d as f,D as r,r as p,x as _,q as m,X as g,G as h,e as w,f as v,w as C,g as b,h as y,t as k,s as V,n as x,u as S,z as A,y as j,H as I,I as O,k as Q,a as $,b as q}from"./index-72jEY8AL.js";import{_ as z}from"./wui-button.jKeBZ4e9.js";import{u as F}from"./usePopover.k5XQgUGx.js";import{p as G,r as H,c as P}from"./clickoutside.CJmLG0WC.js";import{_ as T}from"./demo-block.BGbMmBVB.js";const U=s(f({name:"wui-tooltip",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...t,customArrow:e(""),customPop:e(""),visibleArrow:o(!0),content:{type:[String,Array]},placement:e("bottom"),offset:{type:[Number,Array,Object],default:0},useContentSlot:o(!1),disabled:o(!1),showClose:o(!1),modelValue:o(!1)},emits:["update:modelValue","menuclick","change","open","close"],setup(t,{expose:e,emit:o}){const s=t,u=o,c=F(s.visibleArrow),d=r(a,null),i="tooltip",{proxy:f}=O(),$=p(!1);function q(){s.disabled||z(!$.value)}function z(t){$.value=t,u("update:modelValue",t)}return _((()=>s.content),(t=>{null==t&&console.error("[wui-design] warning(wui-tooltip): content can't be null or undefined")})),_((()=>s.placement),(()=>{c.init(s.placement,s.visibleArrow,i)})),_((()=>s.modelValue),(t=>{$.value=t})),_((()=>$.value),(t=>{t&&(c.control(s.placement,s.offset),d&&d.closeOther?d.closeOther(f):P(f)),c.showStyle.value=t?"display: inline-block;":"display: none;",u("change",{show:t}),u(""+(t?"open":"close"))})),m((()=>{c.init(s.placement,s.visibleArrow,i)})),g((()=>{d&&d.pushToQueue?d.pushToQueue(f):G(f),c.showStyle.value=s.modelValue?"opacity: 1;":"opacity: 0;"})),h((()=>{d&&d.removeFromQueue?d.removeFromQueue(f):H(f)})),e({open:function(){z(!0)},close:function(){z(!1)}}),(t,e)=>{const o=Q;return w(),v(o,{class:x(`wui-tooltip ${t.customClass}`),style:A(t.customStyle),id:"tooltip",onClick:I(S(c).noop,["stop"])},{default:C((()=>[b(o,{class:"wui-tooltip__pos wui-tooltip__hidden",id:"pos"},{default:C((()=>[b(o,{class:"wui-tooltip__container custom-pop"},{default:C((()=>[t.useContentSlot?V("",!0):(w(),v(o,{key:0,class:"wui-tooltip__inner"},{default:C((()=>[y(k(t.content),1)])),_:1}))])),_:1})])),_:1}),b(n,{"custom-class":"wui-tooltip__pos","custom-style":S(c).popStyle.value,show:$.value,name:"fade",duration:200},{default:C((()=>[b(o,{class:"wui-tooltip__container custom-pop"},{default:C((()=>[t.visibleArrow?(w(),v(o,{key:0,class:x(`wui-tooltip__arrow ${S(c).arrowClass.value} ${t.customArrow}`),style:A(S(c).arrowStyle.value)},null,8,["class","style"])):V("",!0),t.useContentSlot?j(t.$slots,"content",{key:2},void 0,!0):(w(),v(o,{key:1,class:"wui-tooltip__inner"},{default:C((()=>[y(k(t.content),1)])),_:1}))])),_:3}),t.showClose?(w(),v(l,{key:0,name:"close","custom-class":"wui-tooltip__close-icon",onClick:q})):V("",!0)])),_:3},8,["custom-style","show"]),b(o,{onClick:q,class:"wui-tooltip__target",id:"target"},{default:C((()=>[j(t.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["class","style","onClick"])}}}),[["__scopeId","data-v-4260b9f4"]]),D=s(f({__name:"Index",setup(t){const e=p(!1),o=p(!1),n=p("显示内容"),a=u(),{closeOutside:s}=c();function f(){e.value=!e.value}function r(){console.log("显示")}function _(){a.show("文字提示关闭")}function m(t){console.log(t)}function g(t){console.log(t)}function h(t){console.log(t)}function V(t){console.log(t)}function x(t){console.log(t)}function A(t){console.log(t)}function j(t){console.log(t)}function O(t){console.log(t)}function F(t){console.log(t)}function G(t){console.log(t)}function H(t){console.log(t)}function P(t){console.log(t)}function D(t){console.log(t)}function N(t){console.log(t)}function X(t){console.log(t)}function B(t){console.log(t)}function E(){a.show("复制"),o.value=!1}function J(){a.show("回复"),o.value=!1}function K(){a.show("撤回"),o.value=!1}return(t,a)=>{const u=$(q("wui-toast"),d),c=$(q("wui-button"),z),p=$(q("wui-tooltip"),U),L=Q,M=$(q("wui-icon"),l),R=$(q("demo-block"),T),W=$(q("page-wraper"),i);return w(),v(W,null,{default:C((()=>[b(u),b(L,{style:{overflow:"hidden"},class:"page-tooltip",onClick:I(S(s),["stop"])},{default:C((()=>[b(R,{title:"基本用法"},{default:C((()=>[b(L,null,{default:C((()=>[b(L,{class:"top"},{default:C((()=>[b(p,{placement:"bottom-start",content:"bottom-start 提示文字",onChange:m},{default:C((()=>[b(c,{round:!1},{default:C((()=>[y("bottom-start")])),_:1})])),_:1}),b(p,{placement:"bottom",content:"bottom 提示文字",onChange:g},{default:C((()=>[b(c,{round:!1},{default:C((()=>[y("bottom")])),_:1})])),_:1}),b(p,{placement:"bottom-end",content:"bottom-end 提示文字",onChange:h},{default:C((()=>[b(c,{round:!1},{default:C((()=>[y("bottom-end")])),_:1})])),_:1})])),_:1})])),_:1}),b(L,{class:"left"},{default:C((()=>[b(p,{placement:"right-start",content:"right-start 提示文字",onChange:V},{default:C((()=>[b(c,{round:!1},{default:C((()=>[y("right-start")])),_:1})])),_:1}),b(p,{placement:"right",content:"right 提示文字",customStyle:"margin: 20px 0",onChange:x},{default:C((()=>[b(c,{round:!1},{default:C((()=>[y("right")])),_:1})])),_:1}),b(p,{placement:"right-end",content:"right-end 提示文字",onChange:A},{default:C((()=>[b(c,{round:!1},{default:C((()=>[y("right-end")])),_:1})])),_:1})])),_:1}),b(L,{class:"right"},{default:C((()=>[b(p,{placement:"left-start",content:"left-start 提示文字",onChange:j},{default:C((()=>[b(c,{round:!1},{default:C((()=>[y(" left-start "),b(M,{name:"setting"})])),_:1})])),_:1}),b(p,{placement:"left",content:"left 提示文字",customStyle:"margin: 20px 0",onChange:O},{default:C((()=>[b(c,{round:!1},{default:C((()=>[y("left")])),_:1})])),_:1}),b(p,{placement:"left-end",content:"left-end 提示文字",onChange:F},{default:C((()=>[b(c,{round:!1},{default:C((()=>[y("left-end")])),_:1})])),_:1})])),_:1}),b(L,{class:"bottom"},{default:C((()=>[b(p,{placement:"top-start",content:"top-start 提示文字",onChange:G},{default:C((()=>[b(c,{round:!1},{default:C((()=>[y("top-start")])),_:1})])),_:1}),b(p,{placement:"top",content:"top 提示文字",onChange:H},{default:C((()=>[b(c,{round:!1},{default:C((()=>[y("top")])),_:1})])),_:1}),b(p,{placement:"top-end",content:"top-end 提示文字",onChange:P},{default:C((()=>[b(c,{round:!1},{default:C((()=>[y("top-end")])),_:1})])),_:1})])),_:1})])),_:1}),b(R,{title:"显示关闭按钮"},{default:C((()=>[b(L,{class:"demo-left"},{default:C((()=>[b(p,{content:"显示关闭按钮",placement:"right","show-close":"",onChange:D},{default:C((()=>[b(c,{round:!1},{default:C((()=>[y("显示关闭按钮")])),_:1})])),_:1})])),_:1})])),_:1}),b(R,{title:"多行文本"},{default:C((()=>[b(L,{class:"demo-left lines-demo"},{default:C((()=>[b(p,{placement:"right","use-content-slot":"",onChange:N},{content:C((()=>[b(L,{class:"lines-content"},{default:C((()=>[b(L,null,{default:C((()=>[y("第一行文本")])),_:1}),b(L,null,{default:C((()=>[y("第二行文本")])),_:1}),b(L,null,{default:C((()=>[y("第三行文本")])),_:1})])),_:1})])),default:C((()=>[b(c,{round:!1},{default:C((()=>[y("多行文本")])),_:1})])),_:1})])),_:1})])),_:1}),b(R,{title:"插槽使用"},{default:C((()=>[b(L,{class:"demo-left lines-demo"},{default:C((()=>[b(p,{placement:"top-start","use-content-slot":"",modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=t=>o.value=t)},{content:C((()=>[b(L,{class:"line-slot-content"},{default:C((()=>[b(L,{class:"copy-text",onClick:E},{default:C((()=>[y("复制")])),_:1}),b(L,{class:"reply-text",onClick:J},{default:C((()=>[y("回复")])),_:1}),b(L,{class:"withdraw-text",onClick:K},{default:C((()=>[y("撤回")])),_:1})])),_:1})])),default:C((()=>[b(c,{round:!1},{default:C((()=>[y("插槽使用")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),b(R,{title:"控制显隐"},{default:C((()=>[b(L,{onClick:I(f,["stop"])},{default:C((()=>[b(c,{plain:"",size:"small",class:"button-control"},{default:C((()=>[y(k(e.value?"关闭":"打开"),1)])),_:1})])),_:1}),b(L,{class:"demo-left demo-control"},{default:C((()=>[b(p,{placement:"top",content:"控制显隐",modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=t=>e.value=t)},{default:C((()=>[b(c,{round:!1},{default:C((()=>[y("top")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),b(R,{title:"绑定change事件"},{default:C((()=>[b(L,{class:"demo-left"},{default:C((()=>[b(p,{placement:"right-end",content:n.value,onOpen:r,onClose:_,onChange:X},{default:C((()=>[b(c,{round:!1},{default:C((()=>[y("事件")])),_:1})])),_:1},8,["content"])])),_:1})])),_:1}),b(R,{title:"禁用"},{default:C((()=>[b(L,{class:"demo-left"},{default:C((()=>[b(p,{placement:"right-end",content:"禁用",disabled:"",onChange:B},{default:C((()=>[b(c,{round:!1},{default:C((()=>[y("禁用")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["onClick"])])),_:1})}}}),[["__scopeId","data-v-3ac1902f"]]);export{D as default};
