import{d as e,y as a,r as t,ap as l,J as s,c as u,s as i,e as o,f as n,w as r,A as d,v as c,p as m,K as g,k as f,ab as p,a as v,b as h,l as _,g as y,h as b,F as w}from"./index-B1zkhFT1.js";import{f as z,i as x,m as $,n as k,z as I,I as V,a8 as C,a9 as S,h as j,o as X,a as A,b as F,_ as P}from"./page-wraper.D5sIAHqb.js";import{_ as W}from"./wui-button.GUQvrKFc.js";import{_ as Y}from"./demo-block.DvOYrTD7.js";import{w as D}from"./wui-badge.DUzuBgyI.js";import{_ as H}from"./wui-cell-group.DAC16Zf5.js";import"./useChildren.COqmfdId.js";const O=A(e({name:"wui-watermark",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...z,content:x(""),image:x(""),imageHeight:$(100),imageWidth:$(100),gutterX:$(0),gutterY:$(0),width:$(100),height:$(100),fullScreen:k(!0),color:x("#8c8c8c"),size:$(14),fontStyle:x("normal"),fontWeight:I("normal"),fontFamily:x("PingFang SC"),rotate:$(-25),zIndex:$(1100),opacity:$(.5)},setup(e){const v=e;a((()=>v),(()=>{x.value=!0,w.value=(v.height+v.gutterY)*b.value,z.value=(v.width+v.gutterX)*b.value,p((()=>{I()}))}),{deep:!0});const h=t(`water${V()}`),_=t(""),y=t(l("createOffscreenCanvas")&&Boolean(uni.createOffscreenCanvas)),b=t(s().pixelRatio),w=t((v.height+v.gutterY)*b.value),z=t((v.width+v.gutterX)*b.value),x=t(!0),$=u((()=>{let e="wui-watermark";return v.fullScreen&&(e=`${e} is-fullscreen`),`${e} ${v.customClass}`})),k=u((()=>{const e={opacity:v.opacity,backgroundSize:j(v.width+v.gutterX)};return _.value&&(e.backgroundImage=`url('${_.value}')`),`${X(e)};${v.customStyle}`}));function I(){x.value=!1;const{width:e,height:a,color:t,size:l,fontStyle:s,fontWeight:u,fontFamily:i,content:o,rotate:n,gutterX:r,gutterY:d,image:c,imageHeight:m,imageWidth:g}=v;!function(e,a,t,l,s,u,i,o,n,r,d,c,m,g){const f=(a+d)*b.value,p=(e+r)*b.value,v=e*b.value,h=a*b.value,y=l*b.value;!function(e,a,t,l,s,u,i,o,n,r,d,c,m,g){const f=document.createElement("canvas"),p=f.getContext("2d");if(f.setAttribute("width",`${a}px`),f.setAttribute("height",`${e}px`),p)if(c){!async function(e,a,t,l,s,u,i,o,n){e.translate(i/2,o/2),e.rotate(Math.PI/180*Number(u)),a.crossOrigin="anonymous",a.referrerPolicy="no-referrer",C(t)?a.src=t:a.src=S(t,{timestamp:`${(new Date).getTime()}`});a.onload=()=>{e.drawImage(a,-s*b.value/2,-l*b.value/2,s*b.value,l*b.value),e.restore(),_.value=n.toDataURL()}}(p,new Image,c,m,g,s,t,l,f)}else!function(e,a,t,l,s,u,i,o,n,r,d){e.textBaseline="middle",e.textAlign="center",e.translate(t/2,t/2),e.rotate(Math.PI/180*s),e.font=`${o} normal ${n} ${u}px/${l}px ${i}`,e.fillStyle=r,e.fillText(a,0,0),e.restore(),_.value=d.toDataURL()}(p,d,t,l,s,u,i,o,n,r,f);else console.error("无法获取canvas上下文，请确认当前环境是否支持canvas")}(f,p,v,h,n,y,i,s,u,t,o,c,m,g)}(e,a,t,l,s,u,i,o,n,r,d,c,m,g)}return i((()=>{I()})),(e,a)=>{const t=g,l=f;return o(),n(l,{class:m($.value),style:d(k.value)},{default:r((()=>[!y.value&&x.value?(o(),n(t,{key:0,type:"2d",style:d({height:w.value+"px",width:z.value+"px",visibility:"hidden"}),"canvas-id":h.value,id:h.value},null,8,["style","canvas-id","id"])):c("",!0)])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-d2e0ee03"]]),R=A(e({__name:"Index",setup(e){const a=t(!1),l=u((()=>a.value?"https://isdm-public.oss-cn-hangzhou.aliyuncs.com/image/vue-logo.png":""));function s(e){a.value=e}return(e,a)=>{const t=v(h("wui-watermark"),O),u=v(h("wui-button"),W),i=v(h("demo-block"),Y),n=v(h("wui-badge"),D),d=v(h("wui-cell"),F),c=v(h("wui-cell-group"),H),m=v(h("page-wraper"),P),g=f;return o(),_(w,null,[y(t,{image:l.value,width:130,height:140,"image-width":38,content:"elegant-wui-uni","image-height":38,opacity:.5},null,8,["image"]),y(g,null,{default:r((()=>[y(m,null,{default:r((()=>[y(i,{title:"基础用法"},{default:r((()=>[y(u,{onClick:a[0]||(a[0]=e=>s(!1)),plain:""},{default:r((()=>[b("文字水印")])),_:1}),y(u,{onClick:a[1]||(a[1]=e=>s(!0)),plain:""},{default:r((()=>[b("图片水印")])),_:1})])),_:1}),y(i,{title:"展示效果"},{default:r((()=>[y(n,{"custom-class":"badge",modelValue:200,max:99},{default:r((()=>[y(u,{round:!1,type:"info",size:"small"},{default:r((()=>[b("评论")])),_:1})])),_:1}),y(n,{"custom-class":"badge",modelValue:200,max:10},{default:r((()=>[y(u,{round:!1,type:"info",size:"small"},{default:r((()=>[b("回复")])),_:1})])),_:1})])),_:1}),y(i,{title:"局部水印"},{default:r((()=>[y(t,{opacity:.8,image:"https://isdm-public.oss-cn-hangzhou.aliyuncs.com/image/vue-logo.png","image-width":38,"image-height":38,"full-screen":!1}),y(n,{"custom-class":"badge",modelValue:12},{default:r((()=>[y(u,{round:!1,type:"info",size:"small"},{default:r((()=>[b("评论")])),_:1})])),_:1}),y(n,{"custom-class":"badge",modelValue:3,"bg-color":"pink"},{default:r((()=>[y(u,{round:!1,type:"info",size:"small"},{default:r((()=>[b("回复")])),_:1})])),_:1}),y(n,{"custom-class":"badge",modelValue:1,type:"primary"},{default:r((()=>[y(u,{round:!1,type:"info",size:"small"},{default:r((()=>[b("评论")])),_:1})])),_:1}),y(n,{"custom-class":"badge",modelValue:2,type:"warning"},{default:r((()=>[y(u,{round:!1,type:"info",size:"small"},{default:r((()=>[b("回复")])),_:1})])),_:1}),y(n,{"custom-class":"badge",modelValue:1,type:"success"},{default:r((()=>[y(u,{round:!1,type:"info",size:"small"},{default:r((()=>[b("评论")])),_:1})])),_:1}),y(n,{"custom-class":"badge",modelValue:2,type:"info"},{default:r((()=>[y(u,{round:!1,type:"info",size:"small"},{default:r((()=>[b("回复")])),_:1})])),_:1}),y(c,{border:""},{default:r((()=>[y(d,{size:"large",title:"标题文字",value:"内容"}),y(d,{title:"标题文字",value:"内容",size:"large",icon:"setting","is-link":""}),y(d,{size:"large",title:"标题文字",label:"描述信息",value:"内容"}),y(d,{size:"large",title:"标题文字",value:"内容"}),y(d,{title:"标题文字",value:"内容",size:"large",icon:"setting","is-link":""}),y(d,{size:"large",title:"标题文字",label:"描述信息",value:"内容"})])),_:1})])),_:1}),y(i,{title:"展示效果"},{default:r((()=>[y(n,{"custom-class":"badge",modelValue:"new"},{default:r((()=>[y(u,{round:!1,type:"info",size:"small"},{default:r((()=>[b("评论")])),_:1})])),_:1}),y(n,{"custom-class":"badge",modelValue:"hot"},{default:r((()=>[y(u,{round:!1,type:"info",size:"small"},{default:r((()=>[b("回复")])),_:1})])),_:1})])),_:1}),y(i,{title:"展示效果"},{default:r((()=>[y(n,{"custom-class":"badge","is-dot":""},{default:r((()=>[b("数据查询")])),_:1}),y(n,{"custom-class":"badge","is-dot":""},{default:r((()=>[y(u,{round:!1,type:"info",size:"small"},{default:r((()=>[b("回复")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})],64)}}}),[["__scopeId","data-v-862a778c"]]);export{R as default};
