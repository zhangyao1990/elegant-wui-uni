import{_ as l,a as e}from"./wui-sidebar.BX7Hyl67.js";import{d as a,r as t,q as s,a as i,b as u,e as o,f as r,w as n,g as c,l as d,m,F as p,k as b,S as f}from"./index-72jEY8AL.js";import{p as v,b as _,h as w,_ as g,a as y}from"./page-wraper.DpqTXTZc.js";import{_ as h}from"./wui-cell-group.OGgFKfrn.js";import"./wui-badge.CcQp3D5t.js";import"./useChildren.BgpN10K6.js";const j=y(a({__name:"demo1",setup(a){const y=t(1),j=t(0),k=t([]),x=new Array(24).fill({title:"标题文字",label:"这是描述这是描述"},0,24),V=t([{label:"分类一",title:"标题一",items:x},{label:"分类二",title:"标题二",items:x},{label:"分类三",title:"标题三",items:x.slice(0,18)},{label:"分类四",title:"标题四",items:x.slice(0,21)},{label:"分类五",title:"标题五",items:x},{label:"分类六",title:"标题六",items:x.slice(0,18)},{label:"分类七",title:"标题七",items:x}]);function C({value:l}){y.value=l,j.value=k.value[l]}function I(l){const{scrollTop:e}=l.detail;if(e<50)return void(y.value=0);const a=k.value.findIndex((l=>l>e&&l-e<=50));a>-1&&(y.value=a)}return s((()=>{v(".category",!0).then((l=>{k.value=l.map((l=>l.top||0)),j.value=l[y.value].top||0}))})),(a,t)=>{const s=i(u("wui-sidebar-item"),l),v=i(u("wui-sidebar"),e),k=i(u("wui-icon"),_),x=i(u("wui-cell"),w),S=i(u("wui-cell-group"),h),q=b,z=f,A=i(u("page-wraper"),g);return o(),r(A,null,{default:n((()=>[c(q,{class:"wraper"},{default:n((()=>[c(v,{modelValue:y.value,"onUpdate:modelValue":t[0]||(t[0]=l=>y.value=l),onChange:C},{default:n((()=>[(o(!0),d(p,null,m(V.value,((l,e)=>(o(),r(s,{key:e,value:e,label:l.label},null,8,["value","label"])))),128))])),_:1},8,["modelValue"]),c(z,{class:"content","scroll-y":"","scroll-with-animation":"","scroll-top":j.value,throttle:!1,onScroll:I},{default:n((()=>[(o(!0),d(p,null,m(V.value,((l,e)=>(o(),r(q,{key:e,class:"category"},{default:n((()=>[c(S,{title:l.title,border:""},{default:n((()=>[(o(!0),d(p,null,m(l.items,((l,e)=>(o(),r(x,{key:e,title:l.title,label:l.label},{default:n((()=>[c(k,{name:"github-filled",size:"24px"})])),_:2},1032,["title","label"])))),128))])),_:2},1032,["title"])])),_:2},1024)))),128))])),_:1},8,["scroll-top"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-df1c08c3"]]);export{j as default};
