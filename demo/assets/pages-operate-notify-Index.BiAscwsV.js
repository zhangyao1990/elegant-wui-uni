import{u as e,_ as i,h as t,b as l,ab as s}from"./page-wraper.BAAFjrch.js";import{d as a,r as n,a as o,w as r,e as u,f as c,g as k,h as d,k as f}from"./index-C9W9llSX.js";import{_ as p}from"./wui-cell-group.DgBU2Fom.js";import{_ as m}from"./demo-block.CQ-UumbW.js";import"./useChildren.B38JgdGT.js";const _=a({__name:"Index",setup(a){let _;const g=n(!1),{showNotify:b}=e(),w=e=>{b({message:"通知内容",type:e})},C=()=>b("测试"),v=()=>{b({color:"#ad0000",message:"自定义颜色",background:"#ffe1e1"})},y=()=>{b({message:"自定义位置",position:"bottom"})},h=()=>{b({message:"自定义时长",duration:1e3})},j=()=>{g.value=!0,_&&clearTimeout(_),_=setTimeout((()=>{g.value=!1}),2e3)};return(e,a)=>{const n=u(c("wui-cell"),t),_=u(c("wui-cell-group"),p),b=u(c("demo-block"),m),x=u(c("wui-icon"),l),N=u(c("wui-notify"),s),T=u(c("page-wraper"),i);return k(),o(T,null,{default:r((()=>[d(b,{title:"基本用法",transparent:""},{default:r((()=>[d(_,null,{default:r((()=>[d(n,{title:"基础用法","is-link":"",onClick:C})])),_:1})])),_:1}),d(b,{title:"通知类型",transparent:""},{default:r((()=>[d(_,null,{default:r((()=>[d(n,{title:"主要通知","is-link":"",onClick:a[0]||(a[0]=e=>w("primary"))}),d(n,{title:"成功通知","is-link":"",onClick:a[1]||(a[1]=e=>w("success"))}),d(n,{title:"危险通知","is-link":"",onClick:a[2]||(a[2]=e=>w("danger"))}),d(n,{title:"警告通知","is-link":"",onClick:a[3]||(a[3]=e=>w("warning"))})])),_:1})])),_:1}),d(b,{title:"自定义配置",transparent:""},{default:r((()=>[d(_,null,{default:r((()=>[d(n,{title:"自定义颜色","is-link":"",onClick:v}),d(n,{title:"自定义位置","is-link":"",onClick:y}),d(n,{title:"自定义时长","is-link":"",onClick:h})])),_:1})])),_:1}),d(b,{title:"使用 Notify 组件",transparent:""},{default:r((()=>[d(_,null,{default:r((()=>[d(n,{title:"使用 Notify 组件","is-link":"",onClick:j})])),_:1})])),_:1}),d(N,{selector:"visible",type:"success",visible:g.value,"onUpdate:visible":a[4]||(a[4]=e=>g.value=e)},{default:r((()=>[d(x,{name:"check-outline",size:"inherit",color:"inherit"}),f(" 成功通知 ")])),_:1},8,["visible"])])),_:1})}}});export{_ as default};
