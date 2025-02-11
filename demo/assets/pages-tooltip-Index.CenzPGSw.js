import{f as t,i as e,n as o,w as l,k as n,K as a,b as s,c as u,j as c,d,a as i}from"./page-wraper.DKh8GSae.js";import{d as f,Q as r,r as p,v as _,m,T as g,V as h,o as w,c as v,w as C,e as b,f as y,t as k,p as V,n as x,u as S,y as A,x as j,W as O,M as Q,i as $,a as I,b as T}from"./index-Dr4mJiuc.js";import{_ as F}from"./wui-button.D-2fgW8t.js";import{u as P}from"./usePopover.yf2qn47o.js";import{p as U,r as z,c as B}from"./clickoutside.CJmLG0WC.js";import{_ as G}from"./demo-block.DQEtA4yj.js";const H=s(f({name:"wui-tooltip",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...t,customArrow:e(""),customPop:e(""),visibleArrow:o(!0),content:{type:[String,Array]},placement:e("bottom"),offset:{type:[Number,Array,Object],default:0},useContentSlot:o(!1),disabled:o(!1),showClose:o(!1),modelValue:o(!1)},emits:["update:modelValue","menuclick","change","open","close"],setup(t,{expose:e,emit:o}){const s=t,u=o,c=P(s.visibleArrow),d=r(a,null),i="tooltip",{proxy:f}=Q(),I=p(!1);function T(){s.disabled||F(!I.value)}function F(t){I.value=t,u("update:modelValue",t)}return _((()=>s.content),(t=>{null==t&&console.error("[wui-design] warning(wui-tooltip): content can't be null or undefined")})),_((()=>s.placement),(()=>{c.init(s.placement,s.visibleArrow,i)})),_((()=>s.modelValue),(t=>{I.value=t})),_((()=>I.value),(t=>{t&&(c.control(s.placement,s.offset),d&&d.closeOther?d.closeOther(f):B(f)),c.showStyle.value=t?"display: inline-block;":"display: none;",u("change",{show:t}),u(""+(t?"open":"close"))})),m((()=>{c.init(s.placement,s.visibleArrow,i)})),g((()=>{d&&d.pushToQueue?d.pushToQueue(f):U(f),c.showStyle.value=s.modelValue?"opacity: 1;":"opacity: 0;"})),h((()=>{d&&d.removeFromQueue?d.removeFromQueue(f):z(f)})),e({open:function(){F(!0)},close:function(){F(!1)}}),(t,e)=>{const o=$;return w(),v(o,{class:x(`wui-tooltip ${t.customClass}`),style:A(t.customStyle),id:"tooltip",onClick:O(S(c).noop,["stop"])},{default:C((()=>[b(o,{class:"wui-tooltip__pos wui-tooltip__hidden",id:"pos"},{default:C((()=>[b(o,{class:"wui-tooltip__container custom-pop"},{default:C((()=>[t.useContentSlot?V("",!0):(w(),v(o,{key:0,class:"wui-tooltip__inner"},{default:C((()=>[y(k(t.content),1)])),_:1}))])),_:1})])),_:1}),b(n,{"custom-class":"wui-tooltip__pos","custom-style":S(c).popStyle.value,show:I.value,name:"fade",duration:200},{default:C((()=>[b(o,{class:"wui-tooltip__container custom-pop"},{default:C((()=>[t.visibleArrow?(w(),v(o,{key:0,class:x(`wui-tooltip__arrow ${S(c).arrowClass.value} ${t.customArrow}`),style:A(S(c).arrowStyle.value)},null,8,["class","style"])):V("",!0),t.useContentSlot?j(t.$slots,"content",{key:2},void 0,!0):(w(),v(o,{key:1,class:"wui-tooltip__inner"},{default:C((()=>[y(k(t.content),1)])),_:1}))])),_:3}),t.showClose?(w(),v(l,{key:0,name:"close","custom-class":"wui-tooltip__close-icon",onClick:T})):V("",!0)])),_:3},8,["custom-style","show"]),b(o,{onClick:T,class:"wui-tooltip__target",id:"target"},{default:C((()=>[j(t.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["class","style","onClick"])}}}),[["__scopeId","data-v-4260b9f4"]]),K=s(f({__name:"Index",setup(t){const e=p(!1),o=p(!1),n=p("显示内容"),a=u(),{closeOutside:s}=c();function f(){e.value=!e.value}function r(){console.log("显示")}function _(){a.show("文字提示关闭")}function m(t){console.log(t)}function g(t){console.log(t)}function h(t){console.log(t)}function V(t){console.log(t)}function x(t){console.log(t)}function A(t){console.log(t)}function j(t){console.log(t)}function Q(t){console.log(t)}function P(t){console.log(t)}function U(t){console.log(t)}function z(t){console.log(t)}function B(t){console.log(t)}function K(t){console.log(t)}function M(t){console.log(t)}function N(t){console.log(t)}function W(t){console.log(t)}function q(){a.show("复制"),o.value=!1}function D(){a.show("回复"),o.value=!1}function E(){a.show("撤回"),o.value=!1}return(t,a)=>{const u=I(T("wui-toast"),d),c=I(T("wui-button"),F),p=I(T("wui-tooltip"),H),J=$,L=I(T("wui-icon"),l),R=I(T("demo-block"),G),X=I(T("page-wraper"),i);return w(),v(X,null,{default:C((()=>[b(u),b(J,{style:{overflow:"hidden"},class:"page-tooltip",onClick:O(S(s),["stop"])},{default:C((()=>[b(R,{title:"基本用法"},{default:C((()=>[b(J,null,{default:C((()=>[b(J,{class:"top"},{default:C((()=>[b(p,{placement:"bottom-start",content:"bottom-start 提示文字",onChange:m},{default:C((()=>[b(c,{round:!1},{default:C((()=>[y("bottom-start")])),_:1})])),_:1}),b(p,{placement:"bottom",content:"bottom 提示文字",onChange:g},{default:C((()=>[b(c,{round:!1},{default:C((()=>[y("bottom")])),_:1})])),_:1}),b(p,{placement:"bottom-end",content:"bottom-end 提示文字",onChange:h},{default:C((()=>[b(c,{round:!1},{default:C((()=>[y("bottom-end")])),_:1})])),_:1})])),_:1})])),_:1}),b(J,{class:"left"},{default:C((()=>[b(p,{placement:"right-start",content:"right-start 提示文字",onChange:V},{default:C((()=>[b(c,{round:!1},{default:C((()=>[y("right-start")])),_:1})])),_:1}),b(p,{placement:"right",content:"right 提示文字",customStyle:"margin: 20px 0",onChange:x},{default:C((()=>[b(c,{round:!1},{default:C((()=>[y("right")])),_:1})])),_:1}),b(p,{placement:"right-end",content:"right-end 提示文字",onChange:A},{default:C((()=>[b(c,{round:!1},{default:C((()=>[y("right-end")])),_:1})])),_:1})])),_:1}),b(J,{class:"right"},{default:C((()=>[b(p,{placement:"left-start",content:"left-start 提示文字",onChange:j},{default:C((()=>[b(c,{round:!1},{default:C((()=>[y(" left-start "),b(L,{name:"setting"})])),_:1})])),_:1}),b(p,{placement:"left",content:"left 提示文字",customStyle:"margin: 20px 0",onChange:Q},{default:C((()=>[b(c,{round:!1},{default:C((()=>[y("left")])),_:1})])),_:1}),b(p,{placement:"left-end",content:"left-end 提示文字",onChange:P},{default:C((()=>[b(c,{round:!1},{default:C((()=>[y("left-end")])),_:1})])),_:1})])),_:1}),b(J,{class:"bottom"},{default:C((()=>[b(p,{placement:"top-start",content:"top-start 提示文字",onChange:U},{default:C((()=>[b(c,{round:!1},{default:C((()=>[y("top-start")])),_:1})])),_:1}),b(p,{placement:"top",content:"top 提示文字",onChange:z},{default:C((()=>[b(c,{round:!1},{default:C((()=>[y("top")])),_:1})])),_:1}),b(p,{placement:"top-end",content:"top-end 提示文字",onChange:B},{default:C((()=>[b(c,{round:!1},{default:C((()=>[y("top-end")])),_:1})])),_:1})])),_:1})])),_:1}),b(R,{title:"显示关闭按钮"},{default:C((()=>[b(J,{class:"demo-left"},{default:C((()=>[b(p,{content:"显示关闭按钮",placement:"right","show-close":"",onChange:K},{default:C((()=>[b(c,{round:!1},{default:C((()=>[y("显示关闭按钮")])),_:1})])),_:1})])),_:1})])),_:1}),b(R,{title:"多行文本"},{default:C((()=>[b(J,{class:"demo-left lines-demo"},{default:C((()=>[b(p,{placement:"right","use-content-slot":"",onChange:M},{content:C((()=>[b(J,{class:"lines-content"},{default:C((()=>[b(J,null,{default:C((()=>[y("第一行文本")])),_:1}),b(J,null,{default:C((()=>[y("第二行文本")])),_:1}),b(J,null,{default:C((()=>[y("第三行文本")])),_:1})])),_:1})])),default:C((()=>[b(c,{round:!1},{default:C((()=>[y("多行文本")])),_:1})])),_:1})])),_:1})])),_:1}),b(R,{title:"插槽使用"},{default:C((()=>[b(J,{class:"demo-left lines-demo"},{default:C((()=>[b(p,{placement:"top-start","use-content-slot":"",modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=t=>o.value=t)},{content:C((()=>[b(J,{class:"line-slot-content"},{default:C((()=>[b(J,{class:"copy-text",onClick:q},{default:C((()=>[y("复制")])),_:1}),b(J,{class:"reply-text",onClick:D},{default:C((()=>[y("回复")])),_:1}),b(J,{class:"withdraw-text",onClick:E},{default:C((()=>[y("撤回")])),_:1})])),_:1})])),default:C((()=>[b(c,{round:!1},{default:C((()=>[y("插槽使用")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),b(R,{title:"控制显隐"},{default:C((()=>[b(J,{onClick:O(f,["stop"])},{default:C((()=>[b(c,{plain:"",size:"small",class:"button-control"},{default:C((()=>[y(k(e.value?"关闭":"打开"),1)])),_:1})])),_:1}),b(J,{class:"demo-left demo-control"},{default:C((()=>[b(p,{placement:"top",content:"控制显隐",modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=t=>e.value=t)},{default:C((()=>[b(c,{round:!1},{default:C((()=>[y("top")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),b(R,{title:"绑定change事件"},{default:C((()=>[b(J,{class:"demo-left"},{default:C((()=>[b(p,{placement:"right-end",content:n.value,onOpen:r,onClose:_,onChange:N},{default:C((()=>[b(c,{round:!1},{default:C((()=>[y("事件")])),_:1})])),_:1},8,["content"])])),_:1})])),_:1}),b(R,{title:"禁用"},{default:C((()=>[b(J,{class:"demo-left"},{default:C((()=>[b(p,{placement:"right-end",content:"禁用",disabled:"",onChange:W},{default:C((()=>[b(c,{round:!1},{default:C((()=>[y("禁用")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["onClick"])])),_:1})}}}),[["__scopeId","data-v-723b741a"]]);export{K as default};
