import{_ as l,a as e}from"./wui-sidebar.YxFw2NV8.js";import{d as a,r as t,v as i,a as s,w as o,e as u,f as n,g as r,h as c,i as d,n as m,F as p,p as b,S as f}from"./index-C9W9llSX.js";import{p as v,_,b as w,h as g,a as h}from"./page-wraper.BAAFjrch.js";import{_ as y}from"./wui-cell-group.DgBU2Fom.js";import"./wui-badge.D2bLHt6j.js";import"./useChildren.B38JgdGT.js";const j=h(a({__name:"demo3",setup(a){const h=t(0),j=t(0),x=t([]),k=new Array(24).fill({title:"标题文字",label:"这是描述这是描述"},0,24),V=t([{label:"分类一",title:"标题一",icon:"thumb-up",items:k},{label:"分类二",title:"标题二",icon:"qrcode",items:k},{label:"分类三",title:"标题三",icon:"location",items:k.slice(0,18)},{label:"分类四",title:"标题四",icon:"ie",items:k.slice(0,21)},{label:"分类五",title:"标题五",icon:"github-filled",items:k},{label:"分类六",title:"标题六",icon:"chrome",items:k.slice(0,18)},{label:"分类七",title:"标题七",icon:"android",items:k}]);function C({value:l}){h.value=l,j.value=x.value[l]}function I(l){const{scrollTop:e}=l.detail;if(e<50)return void(h.value=0);const a=x.value.findIndex((l=>l>e&&l-e<=50));a>-1&&(h.value=a)}return i((()=>{v(".category",!0).then((l=>{x.value=l.map((l=>l.top||0)),j.value=l[h.value].top||0}))})),(a,t)=>{const i=u(n("wui-sidebar-item"),l),v=u(n("wui-sidebar"),e),x=u(n("wui-icon"),w),k=u(n("wui-cell"),g),S=u(n("wui-cell-group"),y),q=d,z=f,A=u(n("page-wraper"),_);return r(),s(A,null,{default:o((()=>[c(q,{class:"wraper"},{default:o((()=>[c(v,{modelValue:h.value,"onUpdate:modelValue":t[0]||(t[0]=l=>h.value=l),onChange:C},{default:o((()=>[(r(!0),m(p,null,b(V.value,((l,e)=>(r(),s(i,{key:e,value:e,label:l.label,icon:l.icon},null,8,["value","label","icon"])))),128))])),_:1},8,["modelValue"]),c(z,{class:"content","scroll-y":"","scroll-with-animation":"","scroll-top":j.value,throttle:!1,onScroll:I},{default:o((()=>[(r(!0),m(p,null,b(V.value,((l,e)=>(r(),s(q,{key:e,class:"category"},{default:o((()=>[c(S,{title:l.title,border:""},{default:o((()=>[(r(!0),m(p,null,b(l.items,((l,e)=>(r(),s(k,{key:e,title:l.title,label:l.label},{default:o((()=>[c(x,{name:"github-filled",size:"24px"})])),_:2},1032,["title","label"])))),128))])),_:2},1032,["title"])])),_:2},1024)))),128))])),_:1},8,["scroll-top"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-31705d5a"]]);export{j as default};
