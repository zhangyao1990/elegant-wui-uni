import{d as e,r as t,c as a,E as l,x as n,q as i,aq as o,_ as s,L as r,e as u,f as c,w as d,y as f,g as p,z as v,l as x,F as y,m as w,h as b,t as _,s as m,n as h,k as g,I as k,a as $,b as C,K as D}from"./index-72jEY8AL.js";import{c as T,l as j,k as I,m as S,b as z,o as F,n as P,M as A,p as q,a as E,_ as G}from"./page-wraper.DpqTXTZc.js";import{_ as H}from"./demo-block.BGbMmBVB.js";import{_ as K}from"./wui-button.jKeBZ4e9.js";const L=E(e({name:"wui-notice-bar",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...T,text:{type:[String,Array],default:""},type:j("warning"),scrollable:I(!0),delay:S(1),speed:S(50),closable:I(!1),wrapable:I(!1),prefix:String,color:String,backgroundColor:String,direction:j("horizontal")},emits:["close","next","click"],setup(e,{expose:$,emit:C}){const D=e,T=C,j=t(0),I=t(!0),S=t(0),E=a((()=>Array.isArray(D.text)?D.text:[D.text])),G=a((()=>E.value[S.value])),H=t(0),K=t(null),L=t(null),M=a((()=>"horizontal"===D.direction)),N=a((()=>"vertical"===D.direction)),U=l({transitionProperty:"unset",transitionDelay:"unset",transitionDuration:"unset",transform:"none",transitionTimingFunction:"linear"}),V=a((()=>F(U))),W=a((()=>{const e={};return P(D.color)&&(e.color=D.color),P(D.backgroundColor)&&(e.background=D.backgroundColor),`${F(e)};${D.customStyle}`})),X=a((()=>{const{type:e,wrapable:t,scrollable:a}=D;let l=[];return e&&l.push(`is-${e}`),M.value?!t&&!a&&l.push("wui-notice-bar--ellipse"):l.push("wui-notice-bar--ellipse"),t&&!a&&l.push("wui-notice-bar--wrap"),l.join(" ")})),{proxy:Y}=k();function B(){O(),J()}function J(){r((()=>async function(){const[e,t]=await Z();if(!e.width||!t.width||!t.height)return;K.value=e,L.value=t,j.value=e.width,M.value?D.scrollable&&R({duration:t.width/D.speed,delay:D.delay,translate:-t.width}):E.value.length>1&&ee(t.height)}()))}function O(){U.transitionProperty="unset",U.transitionDelay="unset",U.transitionDuration="unset",U.transform="none",U.transitionTimingFunction="linear",S.value=0,H.value=0}function Q(){I.value=!1,T("close")}function R({duration:e,delay:t,translate:a}){U.transitionProperty="all",U.transitionDelay=`${t}s`,U.transitionDuration=`${e}s`,U.transform=`${"vertical"===D.direction?"translateY":"translateX"}(${a}px)`,U.transitionTimingFunction="linear"}function Z(){return Promise.all([q(".wui-notice-bar__wrap",!1,Y),q(".wui-notice-bar__content",!1,Y)])}async function ee(e){const t=-e/(E.value.length+1)*(S.value+1);R({duration:e/(E.value.length+1)/D.speed,delay:D.delay,translate:t})}function te(){M.value?R({duration:0,delay:0,translate:j.value+1}):++H.value>=E.value.length&&(H.value=0,R({duration:0,delay:0,translate:0}));const e=setTimeout((()=>{S.value>=E.value.length-1?S.value=0:S.value++,T("next",S.value),r((async()=>{try{const[e,t]=await Z();K.value=e,L.value=t,j.value=e.width||0}catch(e){}L.value&&L.value.width&&L.value.height&&(M.value?R({duration:(j.value+L.value.width)/D.speed,delay:D.delay,translate:-L.value.width}):ee(L.value.height))})),clearTimeout(e)}),20)}function ae(){const e=A(D.text)?{index:S.value,text:D.text[S.value]}:{index:0,text:D.text};T("click",e)}return n((()=>D.text),(()=>{B()}),{deep:!0}),i((()=>{J()})),o((()=>{J()})),s((()=>{O()})),$({reset:B}),(e,t)=>{const a=g;return I.value?(u(),c(a,{key:0,class:h(`wui-notice-bar ${e.customClass} ${X.value}`),style:v(W.value)},{default:d((()=>[e.prefix?(u(),c(z,{key:0,"custom-class":"wui-notice-bar__prefix",name:e.prefix},null,8,["name"])):f(e.$slots,"prefix",{key:1},void 0,!0),p(a,{class:"wui-notice-bar__wrap"},{default:d((()=>[p(a,{class:"wui-notice-bar__content",style:v(V.value),onTransitionend:te,onClick:ae},{default:d((()=>[N.value?(u(),x(y,{key:0},[(u(!0),x(y,null,w(E.value,(e=>(u(),c(a,{key:e},{default:d((()=>[b(_(e),1)])),_:2},1024)))),128)),E.value.length>1?(u(),c(a,{key:0},{default:d((()=>[b(_(E.value[0]),1)])),_:1})):m("",!0)],64)):f(e.$slots,"default",{key:1},(()=>[b(_(G.value),1)]),!0)])),_:3},8,["style"])])),_:3}),e.closable?(u(),c(z,{key:2,"custom-class":"wui-notice-bar__suffix",name:"close-bold",onClick:Q})):f(e.$slots,"suffix",{key:3},void 0,!0)])),_:3},8,["class","style"])):m("",!0)}}}),[["__scopeId","data-v-48e8d66e"]]),M=E(e({__name:"Index",setup(e){const a=t();function l(){var e;null==(e=a.value)||e.reset()}const n=t(["欢迎使用Eleagnt Wui Uni","该组件库基于uniapp ->Vue3, ts构建","项目地址：https://github.com/zhangyao1990/elegant-wui-uni","我们的目标是打造最强uniapp组件库","诚挚邀请大家共同建设","这是一条消息提示信息，这是一条消息提示信息，这是一条消息提示信息，这是一条消息提示信息，这是一条消息提示信息"]),i=e=>{console.log("展示下一条，index: ",e),console.log("文本是："+n.value[e])};function o(e){console.log(e)}return(e,t)=>{const s=$(C("wui-notice-bar"),L),r=$(C("demo-block"),H),f=$(C("wui-icon"),z),v=$(C("wui-button"),K),x=g,y=$(C("page-wraper"),G);return u(),c(y,null,{default:d((()=>[p(x,null,{default:d((()=>[p(r,{title:"基本用法"},{default:d((()=>[p(s,{text:"这是一条消息提示信息这是一条消息提示信息这是一条消息提示信息",prefix:"warn-bold"})])),_:1}),p(r,{title:"类型修改"},{default:d((()=>[p(s,{type:"danger",text:"当前网络不可用，请检查你的网络设置。当前网络不可用，请检查你的网络设置。",prefix:"wifi-error","custom-class":"space"}),p(s,{type:"info",text:"pc-win沃特已登录，可在“设备管理”中查看详情。pc-win沃特已登录，可在“设备管理”中查看详情。",prefix:"check-outline"})])),_:1}),p(r,{title:"禁止滚动"},{default:d((()=>[p(s,{scrollable:!1,text:"通知被禁或时段内消息屏蔽可能造成消…",prefix:"warn-bold"})])),_:1}),p(r,{title:"插槽"},{default:d((()=>[p(s,{scrollable:!1},{prefix:d((()=>[p(f,{"custom-class":"prefix",name:"warn-bold"},{default:d((()=>[b("占位符")])),_:1})])),suffix:d((()=>[D("div",{style:{color:"#4d80f0"}},"查看")])),default:d((()=>[b(" 通知被禁或时段内消息屏蔽可能造成消… ")])),_:1})])),_:1}),p(r,{title:"可关闭的"},{default:d((()=>[p(s,{text:"挂起后，电脑与手机均不会有新客户接入。挂起后，电脑与手机均不会有新客户接入。",closable:"",prefix:"warn-bold"})])),_:1}),p(r,{title:"多行展示"},{default:d((()=>[p(s,{text:"这是一条消息提示信息，这是一条消息提示信息，这是一条消息提示信息这是一条消息提示信息，这是一条消息提示信息，这是一条消息提示信息",wrapable:"",scrollable:!1})])),_:1}),p(r,{title:"自定义颜色"},{default:d((()=>[p(s,{text:"这是一条消息提示信息，这是一条消息提示信息，这是一条消息提示信息",prefix:"check-outline",color:"#34D19D","background-color":"#f0f9eb"})])),_:1}),p(r,{title:"多文本轮播"},{default:d((()=>[p(s,{onClick:o,text:n.value,prefix:"check-outline",onNext:i},null,8,["text"])])),_:1}),p(r,{title:"垂直滚动"},{default:d((()=>[p(s,{onClick:o,prefix:"warn-bold",direction:"vertical",text:n.value,delay:3,"custom-class":"space"},null,8,["text"]),p(s,{onClick:o,prefix:"warn-bold",direction:"vertical",text:"只有一条消息不会滚动",delay:3,"custom-class":"space"})])),_:1}),p(r,{title:"重置播放动画"},{default:d((()=>[p(s,{ref_key:"notice",ref:a,prefix:"warn-bold",direction:"vertical",text:n.value,delay:3,"custom-class":"space"},null,8,["text"]),p(v,{onClick:l},{default:d((()=>[b("重置播放动画")])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-f13a9a5e"]]);export{M as default};
