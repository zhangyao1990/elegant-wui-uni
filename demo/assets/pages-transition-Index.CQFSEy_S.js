import{_ as e}from"./wui-button.DMa_qzEf.js";import{d as t,r as a,a as l,b as o,e as n,f as u,w as s,g as i,h as c,k as d}from"./index-COubmJ4C.js";import{_ as f}from"./demo-block.ByILMKb2.js";import{k as r,_ as m,a as _}from"./page-wraper.BUz7wgOB.js";const v=_(t({__name:"Index",setup(t){const _=a(!1),v=a(),k=a(!1);function p(){S("fade")}function w(){S("fade-up")}function C(){S("fade-down")}function h(){S("fade-left")}function b(){S("fade-right")}function g(){S("slide-up")}function j(){S("slide-down")}function z(){S("slide-left")}function x(){S("slide-right")}function I(){S("zoom-in")}function T(){S("zoom-out")}function F(){k.value=!0,setTimeout((()=>{k.value=!1}),1200)}function S(e){v.value=e,_.value=!0,setTimeout((()=>{_.value=!1}),500)}return(t,a)=>{const S=l(o("wui-button"),e),Z=l(o("demo-block"),f),q=l(o("wui-transition"),r),y=l(o("page-wraper"),m),A=d;return n(),u(A,null,{default:s((()=>[i(y,null,{default:s((()=>[i(Z,{title:"Fade 动画"},{default:s((()=>[i(S,{onClick:p},{default:s((()=>[c("fade")])),_:1}),i(S,{onClick:w},{default:s((()=>[c("fade-up")])),_:1}),i(S,{onClick:C},{default:s((()=>[c("fade-down")])),_:1}),i(S,{onClick:h},{default:s((()=>[c("fade-left")])),_:1}),i(S,{onClick:b},{default:s((()=>[c("fade-right")])),_:1})])),_:1}),i(Z,{title:"Slide 动画"},{default:s((()=>[i(S,{onClick:g},{default:s((()=>[c("slide-up")])),_:1}),i(S,{onClick:j},{default:s((()=>[c("slide-down")])),_:1}),i(S,{onClick:z},{default:s((()=>[c("slide-left")])),_:1}),i(S,{onClick:x},{default:s((()=>[c("slide-right")])),_:1})])),_:1}),i(Z,{title:"Zoom 动画"},{default:s((()=>[i(S,{onClick:I},{default:s((()=>[c("zoom-in")])),_:1}),i(S,{onClick:T},{default:s((()=>[c("zoom-out")])),_:1})])),_:1}),i(Z,{title:"自定义动画"},{default:s((()=>[i(S,{onClick:F},{default:s((()=>[c("custom")])),_:1})])),_:1}),i(q,{show:_.value,name:v.value,"custom-class":"block"},null,8,["show","name"]),i(q,{show:k.value,duration:{enter:700,leave:1e3},"enter-class":"custom-enter","enter-active-class":"custom-enter-active","enter-to-class":"custom-enter-to","leave-class":"custom-leave","leave-active-class":"custom-leave-active","leave-to-class":"custom-leave-to","custom-class":"block"},null,8,["show"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-b860119d"]]);export{v as default};
