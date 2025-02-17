import{f as a,S as e,n as t,i as l,t as s,J as o,h as n,o as i,v as u,a as d,c as p,l as v,_ as c}from"./page-wraper.BMayt547.js";import{d as r,_,c as m,x as f,q as b,e as h,f as y,w as g,l as x,m as w,F as k,g as I,n as S,z as j,k as C,u as U,y as z,h as $,t as A,au as q,N,r as V,a as E,b as F,j as G}from"./index-DUOrDz0Y.js";import{_ as H}from"./demo-block.Q9v4xHZp.js";import{_ as J}from"./wui-button.CrJDGPw3.js";const R=d(r({name:"wui-segmented",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...a,value:e([String,Number]),disabled:t(!1),size:l("middle"),options:{type:Array,required:!0,default:()=>[]},vibrateShort:t(!1)},emits:["update:value","change","click"],setup(a,{expose:e,emit:t}){const l=a,d=t,p=_({activeIndex:0,activeStyle:""}),v=m((()=>l.disabled||!(!l.options[0]||!u(l.options[0]))&&l.options[0].disabled));f((()=>l.value),(()=>{V(),r(),l.vibrateShort&&q({})}),{immediate:!1});const{proxy:c}=N();function r(a=!0){o(".wui-segmented__item",!0,c).then((e=>{const t=e[p.activeIndex],l={position:"absolute",width:n(t.width),"z-index":0},s=e.slice(0,p.activeIndex).reduce(((a,e)=>a+Number(e.width)),0);s&&(l.transform=`translateX(${s}px)`),a&&(l.transition="all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)"),p.activeStyle=i(l)}))}function V(){const a=l.options.findIndex((a=>(u(a)?a.value:a)==l.value));if(a>=0)p.activeIndex=a;else{const a=u(l.options[0])?l.options[0].value:l.options[0];d("update:value",a),d("change",u(l.options[0])?l.options[0]:{value:a})}}return b((async()=>{V(),await s(),r(!1)})),e({updateActiveStyle:r}),(a,e)=>{const t=C;return h(),y(t,{class:S(`wui-segmented ${a.customClass}`),style:j(a.customStyle)},{default:g((()=>[(h(!0),x(k,null,w(a.options,((e,s)=>(h(),y(t,{class:S(`wui-segmented__item is-${a.size} ${p.activeIndex===s?"is-active":""} ${a.disabled||U(u)(e)&&e.disabled?"is-disabled":""}`),onClick:a=>function(a,e){if(l.disabled||u(a)&&a.disabled)return;const t=u(a)?a.value:a;p.activeIndex=e,r(),d("update:value",t),d("change",u(a)?a:{value:t}),d("click",u(a)?a:{value:t})}(e,s),key:s},{default:g((()=>[I(t,{class:"wui-segmented__item-label"},{default:g((()=>[a.$slots.label?z(a.$slots,"label",{key:0,option:U(u)(e)?e:{value:e}},void 0,!0):(h(),x(k,{key:1},[$(A(U(u)(e)?e.value:e),1)],64))])),_:2},1024)])),_:2},1032,["class","onClick"])))),128)),I(t,{class:S("wui-segmented__item--active "+(v.value?"is-disabled":"")),style:j(p.activeStyle)},null,8,["class","style"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-49461124"]]),T=d(r({__name:"Index",setup(a){const e=V(["评论","点赞","贡献","打赏"]),t=V([{value:"李雷",disabled:!1,payload:{avatar:"https://cdn.pixabay.com/photo/2023/03/13/23/48/woman-7851025_960_720.jpg"}},{value:"韩梅梅",disabled:!1,payload:{avatar:"https://cdn.pixabay.com/photo/2022/06/26/12/48/animal-7285346_960_720.jpg"}},{value:"林涛",disabled:!0,payload:{avatar:"https://cdn.pixabay.com/photo/2024/11/24/06/33/fireworks-9220290_960_720.jpg"}},{value:"Tom",disabled:!1,payload:{avatar:"https://cdn.pixabay.com/photo/2022/10/02/06/12/dent-blanche-7492786_960_720.jpg"}}]),l=V("简介"),s=V("详情"),o=V("评论"),n=V("打赏"),i=V("韩梅梅"),u=V("评论");function d(a){console.log(a)}const r=V("点赞"),_=V(),m=V(!1);function f(){m.value=!0}function b(){var a;null==(a=_.value)||a.updateActiveStyle()}return(a,x)=>{const w=E(F("wui-toast"),p),k=E(F("wui-segmented"),R),S=C,j=E(F("demo-block"),H),U=G,z=E(F("wui-button"),J),q=E(F("wui-popup"),v),N=E(F("page-wraper"),c);return h(),y(S,null,{default:g((()=>[I(w),I(N,null,{default:g((()=>[I(j,{title:"大型分段器",transparent:""},{default:g((()=>[I(S,{class:"section"},{default:g((()=>[I(k,{options:e.value,value:l.value,"onUpdate:value":x[0]||(x[0]=a=>l.value=a),size:"large",onChange:d},null,8,["options","value"])])),_:1})])),_:1}),I(j,{title:"默认分段器",transparent:""},{default:g((()=>[I(S,{class:"section"},{default:g((()=>[I(k,{options:e.value,value:s.value,"onUpdate:value":x[1]||(x[1]=a=>s.value=a)},null,8,["options","value"])])),_:1})])),_:1}),I(j,{title:"小型分段器",transparent:""},{default:g((()=>[I(S,{class:"section"},{default:g((()=>[I(k,{options:e.value,value:o.value,"onUpdate:value":x[2]||(x[2]=a=>o.value=a),size:"small"},null,8,["options","value"])])),_:1})])),_:1}),I(j,{title:"带振动效果的分段器",transparent:""},{default:g((()=>[I(S,{class:"section"},{default:g((()=>[I(k,{options:e.value,value:n.value,"onUpdate:value":x[3]||(x[3]=a=>n.value=a),"vibrate-short":!0},null,8,["options","value"])])),_:1})])),_:1}),I(j,{title:"禁用分段器",transparent:""},{default:g((()=>[I(S,{class:"section"},{default:g((()=>[I(k,{options:e.value,value:u.value,"onUpdate:value":x[4]||(x[4]=a=>u.value=a),disabled:""},null,8,["options","value"])])),_:1})])),_:1}),I(j,{title:"自定义渲染分段器标签",transparent:""},{default:g((()=>[I(S,{class:"section"},{default:g((()=>[I(k,{options:t.value,value:i.value,"onUpdate:value":x[5]||(x[5]=a=>i.value=a),"vibrate-short":!0,onChange:d},{label:g((({option:a})=>[I(S,{class:"section-slot"},{default:g((()=>[I(U,{style:{"border-radius":"50%",width:"32px",height:"32px"},src:a.payload.avatar},null,8,["src"]),I(S,{class:"name"},{default:g((()=>[$(A(a.value),1)])),_:2},1024)])),_:2},1024)])),_:1},8,["options","value"])])),_:1})])),_:1}),I(j,{title:"在弹出框中使用",transparent:""},{default:g((()=>[I(S,{class:"section"},{default:g((()=>[I(z,{onClick:f},{default:g((()=>[$("打开弹窗")])),_:1})])),_:1})])),_:1}),I(q,{modelValue:m.value,"onUpdate:modelValue":x[7]||(x[7]=a=>m.value=a),position:"bottom",onAfterEnter:b,closable:"","custom-style":"height: 300px;padding: 0 24rpx;"},{default:g((()=>[I(S,{class:"title"},{default:g((()=>[$("在弹出框中使用")])),_:1}),I(k,{options:e.value,value:r.value,"onUpdate:value":x[6]||(x[6]=a=>r.value=a),onChange:d,ref_key:"segmentedRef",ref:_},null,8,["options","value"])])),_:1},8,["modelValue"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-c476b2db"]]);export{T as default};
