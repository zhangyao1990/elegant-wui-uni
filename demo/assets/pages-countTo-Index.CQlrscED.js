import{d as e,q as t,v as a,m as s,o,c as r,w as i,x as l,n as u,i as n,e as f,r as c,a as p,b as d}from"./index-ZLmWPcj7.js";import{w as m}from"./wui-text.mgdhpXJg.js";import{f as x,m as V,i as y,l as w,K as z,ac as _,b,a as j}from"./page-wraper.DRSg2Trj.js";import{u as v}from"./useCountDown.C8Y_-0mS.js";import{_ as S}from"./demo-block.YLy05Wjt.js";import{_ as g,a as h}from"./wui-grid.NT36d4RO.js";import"./dayjs.OcYunQ3I.js";import"./useRaf.CAJ6cDE-.js";import"./wui-badge.CoW9TEjf.js";import"./useChildren.Cu3CY4jX.js";const k=b(e({name:"wui-count-to",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...x,fontSize:V(16),color:y(""),type:y("default"),startVal:V(0),endVal:V(2024),duration:V(3e3),autoStart:w(!0),decimals:{type:Number,required:!1,default:0,validator:e=>e>=0},decimal:y("."),separator:y(","),prefix:y(""),suffix:y(""),useEasing:w(!0),customStyle:y(""),customClass:y("")},emits:["mounted","finish"],setup(e,{expose:c,emit:p}){const d=e,x=p,{start:V,pause:y,reset:w,current:b}=v({time:d.duration,millisecond:!0,onFinish:()=>x("finish")}),j=t((()=>`wui-count-to ${d.customClass}`)),S=t((()=>function(e){const{startVal:t,endVal:a,duration:s,useEasing:o}=d,r=s-e,i=t>a,l=r/s;let u;u=o?i?t-_(r,0,t-a,s)||0:_(r,t,a-t,s):i?t-(t-a)*l:t+(a-t)*l;return u=i?Math.max(a,u):Math.min(a,u),function(e){if("number"!=typeof e&&(e=parseFloat(e),isNaN(e)))return"0";const t=(e=e.toFixed(d.decimals)).split(".");let a=t[0];const s=t.length>1?d.decimal+t[1]:"",o=/(\d+)(\d{3})/;if(d.separator&&!z(d.separator))for(;o.test(a);)a=a.replace(o,"$1"+d.separator+"$2");return a+s}(u)}(b.value.total)));function g(){w(d.duration),d.autoStart&&V()}return a([()=>d.startVal,()=>d.endVal,()=>d.duration],g,{immediate:!1}),s((()=>{g(),x("mounted")})),c({start:V,reset:g,pause:y}),(e,t)=>{const a=n;return o(),r(a,{class:u(j.value)},{default:i((()=>[l(e.$slots,"prefix",{},(()=>[f(m,{type:d.type,color:d.color,size:.7*d.fontSize+"px",text:d.prefix},null,8,["type","color","size","text"])]),!0),l(e.$slots,"default",{},(()=>[f(m,{type:d.type,color:d.color,size:`${d.fontSize}px`,text:S.value},null,8,["type","color","size","text"])]),!0),l(e.$slots,"suffix",{},(()=>[f(m,{type:d.type,color:d.color,size:.7*d.fontSize+"px",text:d.suffix},null,8,["type","color","size","text"])]),!0)])),_:3},8,["class"])}}}),[["__scopeId","data-v-0a0807cd"]]),$=e({__name:"Index",setup(e){const t=c(2024),a=c(),s=()=>{a.value.start()},l=()=>{a.value.pause()},u=()=>{a.value.reset()};return(e,n)=>{const c=p(d("wui-count-to"),k),m=p(d("demo-block"),S),x=p(d("wui-grid-item"),g),V=p(d("wui-grid"),h),y=p(d("page-wraper"),j);return o(),r(y,null,{default:i((()=>[f(m,{title:"基本用法"},{default:i((()=>[f(c,{endVal:t.value,suffix:"年",color:"#16baaa"},null,8,["endVal"]),f(c,{prefix:"￥",decimals:2,endVal:186.321,fontSize:32,suffix:"%",color:"#1e9fff"}),f(c,{prefix:"￥",decimals:2,endVal:21286.321,fontSize:32,suffix:"%",color:"#ff5722"}),f(c,{prefix:"￥",decimals:2,endVal:21286.321,fontSize:32,suffix:"%",color:"#ffb800",duration:2e3})])),_:1}),f(m,{title:"设置主题"},{default:i((()=>[f(c,{type:"primary",prefix:"￥",startVal:0,endVal:888888,suffix:"%"}),f(c,{type:"error",prefix:"￥",startVal:0,endVal:888888,suffix:"%"}),f(c,{type:"success",prefix:"￥",startVal:0,endVal:888888,suffix:"%"}),f(c,{type:"warning",prefix:"￥",startVal:0,endVal:888888,suffix:"%"}),f(c,{prefix:"￥",startVal:0,endVal:888888,suffix:"%"})])),_:1}),f(m,{title:"手动控制"},{default:i((()=>[f(c,{ref_key:"countTo",ref:a,"auto-start":!1,prefix:"￥",startVal:1e3,decimals:3,endVal:9999.32,fontSize:32,suffix:"%",color:"#1e9fff"},null,512),f(V,{clickable:"",border:""},{default:i((()=>[f(x,{text:"开始",icon:"play-circle-stroke",onItemclick:s}),f(x,{text:"暂停",icon:"pause-circle",onItemclick:l}),f(x,{text:"重置",icon:"refresh",onItemclick:u})])),_:1})])),_:1})])),_:1})}}});export{$ as default};
