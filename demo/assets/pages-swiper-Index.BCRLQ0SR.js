import{d as t,e,l as a,f as o,w as i,g as s,s as l,F as n,m as u,h as r,t as c,z as p,n as d,k as m,r as v,x as y,c as h,u as g,y as f,ar as _,as as w,N as C,al as x,j as k,A as b,at as j,a as $,b as I}from"./index-CppQkjPQ.js";import{f as P,m as V,i as M,n as U,a as N,z as S,I as z,v as K,r as A,h as T,a3 as F,aa as H,e as W,d as E,_ as L}from"./page-wraper.BtTn2L9S.js";import{_ as B}from"./demo-block.Brm4S8Bi.js";import{_ as G}from"./wui-cell-group.DZq-tyDJ.js";import{_ as O}from"./wui-button.D5TM7_AH.js";import"./useChildren.BQ208M7a.js";const q=N(t({__name:"wui-swiper-nav",props:{...P,current:V(0),direction:M("horizontal"),minShowNum:V(2),indicatorPosition:M("bottom"),showControls:U(!1),total:V(0),type:M("dots")},emits:["change"],setup(t,{emit:v}){const y=v;function h(t){y("change",{dir:t,source:"nav"})}return(t,v)=>{const y=m;return e(),a(n,null,[t.showControls?(e(),o(y,{key:0,class:"wui-swiper-nav__btn"},{default:i((()=>[s(y,{class:"wui-swiper-nav__btn--prev",onClick:v[0]||(v[0]=t=>h("prev"))}),s(y,{class:"wui-swiper-nav__btn--next",onClick:v[1]||(v[1]=t=>h("next"))})])),_:1})):l("",!0),t.total>=t.minShowNum?(e(),o(y,{key:1,style:p(t.customStyle),class:d(`wui-swiper-nav wui-swiper-nav--${t.direction} wui-swiper-nav--${t.type} wui-swiper-nav--${t.indicatorPosition} ${t.customClass}`)},{default:i((()=>["dots"===t.type||"dots-bar"===t.type?(e(!0),a(n,{key:0},u(t.total,((a,i)=>(e(),o(y,{key:i,class:d(`wui-swiper-nav__item--${t.type} ${t.current===i?"is-active":""} is-${t.direction}`)},null,8,["class"])))),128)):l("",!0),"fraction"===t.type?(e(),a(n,{key:1},[r(c(t.current+1)+"/"+c(t.total),1)],64)):l("",!0)])),_:1},8,["style","class"])):l("",!0)],64)}}}),[["__scopeId","data-v-a0ad19dd"]]),D=N(t({name:"wui-swiper",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...P,autoplay:U(!0),current:V(0),direction:M("horizontal"),displayMultipleItems:V(1),duration:V(300),easingFunction:M("default"),height:S("192"),interval:V(5e3),list:{type:Array,default:()=>[]},loop:U(!0),videoLoop:U(!0),muted:U(!0),nextMargin:S("0"),indicatorPosition:M("bottom"),previousMargin:S("0"),snapToEdge:U(!1),indicator:{type:[Boolean,Object],default:!0},imageMode:M("aspectFill"),valueKey:M("value"),textKey:M("text"),autoplayVideo:U(!0),stopPreviousVideo:U(!0),stopAutoplayWhenVideoPlay:U(!1),adjustHeight:M("highest"),adjustVerticalHeight:U(!1),customIndicatorClass:M(""),customImageClass:M(""),customPrevImageClass:M(""),customNextImageClass:M(""),customItemClass:M(""),customPrevClass:M(""),customNextClass:M(""),customTextClass:M(""),customTextStyle:M("")},emits:["click","change","animationfinish","update:current"],setup(t,{emit:$}){const I=t,P=$,V=v(I.current),M=v(I.current),U=(t,e=!1)=>{M.value=t,e&&(V.value=t),P("update:current",t)},N=v(!1),{proxy:S}=C(),H=v(z());y((()=>I.current),(t=>{t<0?I.loop?G():B():t>=I.list.length?I.loop?B():G():L(t)}));const W=h((()=>{const{list:t,direction:e,indicatorPosition:a,indicator:o}=I,i={current:M.value||0,total:t.length||0,direction:e||"horizontal",indicatorPosition:a||"bottom"};return K(o)&&(i.type=o.type||"dots",i.minShowNum=o.minShowNum||2,i.showControls=o.showControls||!1),i})),E=t=>((t,e)=>{const a=t=>F(t);return K(t)?t.type&&["video","image"].includes(t.type)?t.type===e:a(t[I.valueKey]):a(t)})(t,"video");function L(t){t!==M.value&&U(t,!0)}function B(){L(0)}function G(){L(I.list.length-1)}function O(){I.stopAutoplayWhenVideoPlay&&(N.value=!0)}function D(){N.value=!1}function J(t,e,a){let o="";return function(t,e,a){return(t-1+a.length)%a.length===e}(t,e,a)&&(o=I.customPrevClass||I.customPrevImageClass),function(t,e,a){return(t+1+a.length)%a.length===e}(t,e,a)&&(o=I.customNextClass||I.customNextImageClass),o}function Q(t){const{current:e,source:a}=t.detail,o=M.value;if(P("change",{current:e,source:a}),e!==M.value){U(e,"autoplay"===a||"touch"===a)}!function(t,e){(function(t){if(I.stopPreviousVideo){const e=I.list[t];if(A(e)&&E(e)){_(`video-${t}-${H.value}`,S).pause()}}else I.stopAutoplayWhenVideoPlay&&D()})(t),function(t){if(I.autoplayVideo){const e=I.list[t];if(A(e)&&E(e)){_(`video-${t}-${H.value}`,S).play()}}}(e)}(o,e)}function R(t){const{current:e,source:a}=t.detail;if(e!==M.value){U(e,"autoplay"===a||"touch"===a)}P("animationfinish",{current:e,source:a})}function X(t,e){P("click",{index:t,item:e})}function Y({dir:t}){const{list:e,loop:a}=I,o=e.length;let i="next"===t?M.value+1:M.value-1;i=a?"next"===t?(M.value+1)%o:(M.value-1+o)%o:i<0||i>=o?M.value:i,i!==M.value&&L(i)}return(t,v)=>{const y=x,h=k,_=b,C=j,$=w,I=m;return e(),o(I,{class:d(`wui-swiper ${t.customClass}`),style:p(t.customStyle)},{default:i((()=>[s($,{"adjust-height":t.adjustHeight,"adjust-vertical-height":t.adjustVerticalHeight,class:"wui-swiper__track",autoplay:t.autoplay&&!N.value,current:V.value,interval:t.interval,duration:t.duration,circular:t.loop,vertical:"vertical"==t.direction,"easing-function":t.easingFunction,"previous-margin":g(T)(t.previousMargin),"next-margin":g(T)(t.nextMargin),"snap-to-edge":t.snapToEdge,"display-multiple-items":t.displayMultipleItems,style:p({height:g(T)(t.height)}),onChange:Q,onAnimationfinish:R},{default:i((()=>[(e(!0),a(n,null,u(t.list,((a,s)=>(e(),o(C,{key:s,class:"wui-swiper__item"},{default:i((()=>[E(a)?(e(),o(y,{key:0,id:`video-${s}-${H.value}`,style:p({height:g(T)(t.height)}),src:g(K)(a)?a[t.valueKey]:a,poster:g(K)(a)?a.poster:"",class:d(`wui-swiper__video ${t.customItemClass} ${J(M.value,s,t.list)}`),onPlay:O,onPause:D,"enable-progress-gesture":!1,loop:t.videoLoop,muted:t.muted,autoplay:t.autoplayVideo,objectFit:"cover",onClick:t=>X(s,a)},null,8,["id","style","src","poster","class","loop","muted","autoplay","onClick"])):(e(),o(h,{key:1,src:g(K)(a)?a[t.valueKey]:a,class:d(`wui-swiper__image ${t.customImageClass} ${t.customItemClass} ${J(M.value,s,t.list)}`),style:p({height:g(T)(t.height)}),mode:t.imageMode,onClick:t=>X(s,a)},null,8,["src","class","style","mode","onClick"])),g(K)(a)&&a[t.textKey]?(e(),o(_,{key:2,class:d(`wui-swiper__text ${t.customTextClass}`),style:p(t.customTextStyle)},{default:i((()=>[r(c(a[t.textKey]),1)])),_:2},1032,["class","style"])):l("",!0)])),_:2},1024)))),128))])),_:1},8,["adjust-height","adjust-vertical-height","autoplay","current","interval","duration","circular","vertical","easing-function","previous-margin","next-margin","snap-to-edge","display-multiple-items","style"]),t.indicator?(e(),a(n,{key:0},[f(t.$slots,"indicator",{current:M.value,total:t.list.length},void 0,!0),t.$slots.indicator?l("",!0):(e(),o(q,{key:0,"custom-class":t.customIndicatorClass,type:W.value.type,current:W.value.current,total:W.value.total,direction:W.value.direction,"indicator-position":W.value.indicatorPosition,"min-show-num":W.value.minShowNum,"show-controls":W.value.showControls,onChange:Y},null,8,["custom-class","type","current","total","direction","indicator-position","min-show-num","show-controls"]))],64)):l("",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-13ee49a8"]]),J=N(t({__name:"Index",setup(t){const a=v(["https://cdn.pixabay.com/photo/2014/10/10/10/49/forest-483207_1280.jpg","https://cdn.pixabay.com/photo/2018/04/06/00/25/trees-3294681_640.jpg","https://cdn.pixabay.com/photo/2020/09/22/11/36/moss-5592802_640.jpg","https://cdn.pixabay.com/photo/2016/08/11/23/55/trees-1587301_640.jpg","https://cdn.pixabay.com/photo/2017/03/29/11/48/meadow-2184989_640.jpg"]),l=v([{url:"https://cdn.pixabay.com/photo/2016/11/18/12/41/autumn-1834228_640.jpg",title:"小熊猫！"},{url:"https://cdn.pixabay.com/photo/2012/11/29/14/35/florida-67897_640.jpg",title:"卡！皮！巴！拉！"},{url:"https://cdn.pixabay.com/photo/2015/11/12/21/27/fern-1041021_640.jpg",title:"大熊猫！"},{url:"https://cdn.pixabay.com/photo/2020/11/13/20/10/forest-5739807_640.jpg",title:"诗画中国！"}]),n=v(["https://standard-hospital-xnykd.oss-cn-hangzhou.aliyuncs.com/sys/video/1735897454073_.mp4","https://standard-hospital-xnykd.oss-cn-hangzhou.aliyuncs.com/sys/video/1735897475859_.mp4","https://standard-hospital-xnykd.oss-cn-hangzhou.aliyuncs.com/sys/video/1735897494353_.mp4","https://cdn.pixabay.com/photo/2016/04/23/21/51/fern-1348353_640.jpg"]),u=v(0),p=v(1),d=v(2),y=v(3),h=v(4),g=v(0),f=v(0),_=v(0),w=v(0),C=v(0),x=v(!1);function k(t){console.log(t)}function b(t){console.log(t)}return(t,v)=>{const j=$(I("wui-swiper"),D),P=$(I("demo-block"),B),V=m,M=$(I("wui-gap"),H),U=$(I("wui-switch"),W),N=$(I("wui-cell"),E),S=$(I("wui-cell-group"),G),z=$(I("wui-button"),O),K=$(I("page-wraper"),L);return e(),o(K,null,{default:i((()=>[s(P,{title:"点状指示器"},{default:i((()=>[s(j,{list:a.value,autoplay:"",current:u.value,"onUpdate:current":v[0]||(v[0]=t=>u.value=t),indicator:{type:"dots"},onClick:k,onChange:b},null,8,["list","current"])])),_:1}),s(P,{title:"点条状指示器"},{default:i((()=>[s(j,{list:a.value,autoplay:"",current:p.value,"onUpdate:current":v[1]||(v[1]=t=>p.value=t),indicator:{type:"dots-bar"},onClick:k,onChange:b},null,8,["list","current"])])),_:1}),s(P,{title:"数字指示器"},{default:i((()=>[s(j,{list:a.value,autoplay:"",current:d.value,"onUpdate:current":v[2]||(v[2]=t=>d.value=t),indicator:{type:"fraction"},"indicator-position":"bottom-right",onClick:k,onChange:b},null,8,["list","current"])])),_:1}),s(P,{title:"视频轮播"},{default:i((()=>[s(j,{list:n.value,autoplay:"",indicator:{type:"fraction"},"indicator-position":"top-right",onClick:k,onChange:b},null,8,["list"])])),_:1}),s(P,{title:"手动播放视频"},{default:i((()=>[s(j,{list:n.value,autoplay:"",autoplayVideo:!1,indicator:{type:"fraction"},"indicator-position":"top-right",onClick:k,onChange:b},null,8,["list"])])),_:1}),s(P,{title:"播放视频时停止轮播"},{default:i((()=>[s(j,{list:n.value,autoplay:"",stopAutoplayWhenVideoPlay:"",autoplayVideo:!1,indicator:{type:"fraction"},"indicator-position":"top-right",onClick:k,onChange:b},null,8,["list"])])),_:1}),s(P,{title:"手动切换"},{default:i((()=>[s(j,{list:a.value,autoplay:!1,current:y.value,"onUpdate:current":v[3]||(v[3]=t=>y.value=t),indicator:{showControls:!0},loop:!1,onClick:k,onChange:b},null,8,["list","current"])])),_:1}),s(P,{title:"卡片样式"},{default:i((()=>[s(V,{class:"card-swiper"},{default:i((()=>[s(j,{autoplay:"",current:h.value,"onUpdate:current":v[4]||(v[4]=t=>h.value=t),"custom-indicator-class":"custom-indicator-class","custom-image-class":"custom-image","custom-next-image-class":"custom-image-prev","custom-prev-image-class":"custom-image-prev",indicator:{type:"dots"},list:a.value,previousMargin:"24px",nextMargin:"24px"},null,8,["current","list"])])),_:1})])),_:1}),s(P,{title:"同时展示2个滑块"},{default:i((()=>[s(V,{class:"card-swiper"},{default:i((()=>[s(j,{autoplay:"",current:g.value,"onUpdate:current":v[5]||(v[5]=t=>g.value=t),"display-multiple-items":2,"custom-indicator-class":"custom-indicator-class","custom-image-class":"custom-image","custom-next-image-class":"custom-image-prev","custom-prev-image-class":"custom-image-prev",indicator:{type:"dots"},list:a.value,previousMargin:"24px",nextMargin:"24px"},null,8,["current","list"])])),_:1})])),_:1}),s(P,{title:"垂直方向"},{default:i((()=>[s(j,{list:a.value,direction:"vertical","indicator-position":"right",autoplay:"",current:f.value,"onUpdate:current":v[6]||(v[6]=t=>f.value=t),indicator:{type:"dots-bar"},onClick:k,onChange:b},null,8,["list","current"])])),_:1}),s(P,{title:"自定义指示器"},{default:i((()=>[s(j,{list:a.value,direction:"vertical","indicator-position":"right",autoplay:"",current:_.value,"onUpdate:current":v[7]||(v[7]=t=>_.value=t),onClick:k,onChange:b},{indicator:i((({current:t,total:e})=>[s(V,{class:"custom-indicator",style:{position:"absolute",bottom:"24rpx",right:"24rpx"}},{default:i((()=>[r(c(t+1)+"/"+c(e),1)])),_:2},1024)])),_:1},8,["list","current"])])),_:1}),s(P,{title:"指定valueKey和textKey"},{default:i((()=>[s(j,{"value-key":"url","text-key":"title",list:l.value,autoplay:"",current:C.value,"onUpdate:current":v[8]||(v[8]=t=>C.value=t),onClick:k,onChange:b},null,8,["list","current"])])),_:1}),s(P,{title:"属性控制切换"},{default:i((()=>[s(j,{loop:x.value,autoplay:!1,list:a.value,current:w.value,"onUpdate:current":v[9]||(v[9]=t=>w.value=t)},null,8,["loop","list","current"]),s(M),s(S,null,{default:i((()=>[s(N,{title:"loop"},{default:i((()=>[s(U,{modelValue:x.value,"onUpdate:modelValue":v[10]||(v[10]=t=>x.value=t),size:"24px"},null,8,["modelValue"])])),_:1}),s(N,{title:"current",value:w.value.toString()},null,8,["value"])])),_:1}),s(V,{style:{display:"flex","justify-content":"space-between"}},{default:i((()=>[s(z,{onClick:v[11]||(v[11]=t=>w.value--)},{default:i((()=>[r("prev")])),_:1}),s(z,{type:"success",onClick:v[12]||(v[12]=t=>w.value++)},{default:i((()=>[r("next")])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-9754224f"]]);export{J as default};
