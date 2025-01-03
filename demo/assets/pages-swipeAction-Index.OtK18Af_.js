import{f as e,i as a,l as t,J as l,b as s,c as u,d as o,_ as n,a as c}from"./page-wraper.Dkub_oR0.js";import{d as i,P as d,r as f,v as r,S as _,m as b,U as p,o as v,c as k,w as m,e as h,x as g,y as w,n as y,V as C,L as $,i as V,a as x,b as T,f as j,u as z}from"./index-CxD5Cs3x.js";import{p as I,r as Q,q as F,c as M,u as O}from"./clickoutside.BACs6YSn.js";import{u as P}from"./useTouch.BRlGJw2b.js";import{_ as S}from"./demo-block.C2UZKcqn.js";import{_ as U}from"./wui-button.zs8JeWaC.js";const q=s(i({name:"wui-swipe-action",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...e,modelValue:a("close"),disabled:t(!1),beforeClose:Function},emits:["click","update:modelValue"],setup(e,{expose:a,emit:t}){const s=e,u=t,o=d(F,null),n=f(""),c=f(0),i=f(0),x=f(!1),T=P(),{proxy:j}=$();function z(e,a){s.disabled||O().then((([t,l])=>{switch(e){case"close":if(0===i.value)return;G("value",a);break;case"left":S(t);break;case"right":S(-l)}}))}function O(){return Promise.all([l(".wui-swipe-action__left",!1,j).then((e=>e.width?e.width:0)),l(".wui-swipe-action__right",!1,j).then((e=>e.width?e.width:0))])}function S(e=0){const a=`translate3d(${e}px, 0, 0)`,t=x.value?"none":".6s cubic-bezier(0.18, 0.89, 0.32, 1)";n.value=`\n        -webkit-transform: ${a};\n        -webkit-transition: ${t};\n        transform: ${a};\n        transition: ${t};\n      `,i.value=e}function U(e){s.disabled||0===i.value||(G("click",e=e||"inside"),u("click",{value:e}))}function q(e){s.disabled||(c.value=i.value,T.touchStart(e),o&&o.closeOther?o.closeOther(j):M(j))}function B(e){if(s.disabled)return;if(T.touchMove(e),"vertical"===T.direction.value)return;e.preventDefault(),e.stopPropagation(),x.value=!0;const a=c.value+T.deltaX.value;O().then((([t,l])=>0===t&&a>0||0===l&&a<0?(S(0),q(e)):0!==t&&a>=t?(S(t),q(e)):0!==l&&-a>=l?(S(-l),q(e)):void S(a)))}function D(){if(s.disabled)return;const e=.3;x.value=!1,O().then((([a,t])=>{c.value<0&&i.value<0&&i.value-c.value<t*e?(S(-t),u("update:modelValue","right")):c.value>0&&i.value>0&&c.value-i.value<a*e?(S(a),u("update:modelValue","left")):t>0&&c.value>=0&&i.value<0&&Math.abs(i.value)>t*e?(S(-t),u("update:modelValue","right")):a>0&&c.value<=0&&i.value>0&&Math.abs(i.value)>a*e?(S(a),u("update:modelValue","left")):G("swipe")}))}function G(e,a){if("swipe"===e&&0===c.value)return S(0);"swipe"===e&&c.value>0?a="left":"swipe"===e&&c.value<0&&(a="right"),e&&a&&s.beforeClose&&s.beforeClose(e,a),S(0),"close"!==s.modelValue&&u("update:modelValue","close")}return r((()=>s.modelValue),((e,a)=>{z(e,a)}),{deep:!0}),_((()=>{o&&o.pushToQueue?o.pushToQueue(j):I(j),c.value=0,i.value=0,x.value=!1})),b((()=>{x.value=!0,z(s.modelValue),x.value=!1})),p((()=>{o&&o.removeFromQueue?o.removeFromQueue(j):Q(j)})),a({close:G}),(e,a)=>{const t=V;return v(),k(t,{class:y(`wui-swipe-action ${e.customClass}`),style:w(e.customStyle),onClick:a[2]||(a[2]=C((e=>U()),["stop"])),onTouchstart:q,onTouchmove:B,onTouchend:D,onTouchcancel:D},{default:m((()=>[h(t,{class:"wui-swipe-action__wrapper",style:w(n.value)},{default:m((()=>[h(t,{class:"wui-swipe-action__left",onClick:a[0]||(a[0]=e=>U("left"))},{default:m((()=>[g(e.$slots,"left",{},void 0,!0)])),_:3}),g(e.$slots,"default",{},void 0,!0),h(t,{class:"wui-swipe-action__right",onClick:a[1]||(a[1]=e=>U("right"))},{default:m((()=>[g(e.$slots,"right",{},void 0,!0)])),_:3})])),_:3},8,["style"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-29ada837"]]),B=s(i({__name:"Index",setup(e){const{closeOutside:a}=O(),t=u(),l=f("close"),s=(e,a)=>{"click"===e?t.show(`${e} ${a}导致滑动按钮关闭`):t.show(`${e}导致${a}滑动按钮关闭`)};function i(e){l.value=e}function d({value:e}){t.show(`点击${e}关闭操作按钮`)}function r(e){t.show(`点击了${e}`)}function _(){}return(e,t)=>{const u=x(T("wui-toast"),o),f=x(T("wui-cell"),n),b=V,p=x(T("wui-swipe-action"),q),g=x(T("demo-block"),S),w=x(T("wui-button"),U),y=x(T("page-wraper"),c);return v(),k(y,null,{default:m((()=>[h(u),h(b,{onClick:C(z(a),["stop"])},{default:m((()=>[h(g,{transparent:"",title:"基本用法"},{default:m((()=>[h(p,null,{right:m((()=>[h(b,{class:"action"},{default:m((()=>[h(b,{class:"button",style:{background:"#fa4350"},onClick:t[0]||(t[0]=e=>r("操作1"))},{default:m((()=>[j("操作1")])),_:1}),h(b,{class:"button",style:{background:"#f0883a"},onClick:t[1]||(t[1]=e=>r("操作2"))},{default:m((()=>[j("操作2")])),_:1}),h(b,{class:"button",style:{background:"#4d80f0"},onClick:t[2]||(t[2]=e=>r("操作3"))},{default:m((()=>[j("操作3")])),_:1})])),_:1})])),default:m((()=>[h(f,{title:"标题文字",value:"内容"})])),_:1})])),_:1}),h(g,{transparent:"",title:"左右滑动"},{default:m((()=>[h(p,null,{left:m((()=>[h(b,{class:"action"},{default:m((()=>[h(b,{class:"button",style:{background:"#fa4350"}},{default:m((()=>[j("操作1")])),_:1}),h(b,{class:"button",style:{background:"#f0883a"}},{default:m((()=>[j("操作2")])),_:1}),h(b,{class:"button",style:{background:"#4d80f0"}},{default:m((()=>[j("操作3")])),_:1})])),_:1})])),right:m((()=>[h(b,{class:"action"},{default:m((()=>[h(b,{class:"button",style:{background:"#fa4350"}},{default:m((()=>[j("操作4")])),_:1}),h(b,{class:"button",style:{background:"#f0883a"}},{default:m((()=>[j("操作5")])),_:1}),h(b,{class:"button",style:{background:"#4d80f0"}},{default:m((()=>[j("操作6")])),_:1})])),_:1})])),default:m((()=>[h(f,{title:"标题文字",value:"内容"})])),_:1})])),_:1}),h(g,{transparent:"",title:"切换按钮"},{default:m((()=>[h(p,{modelValue:l.value,"onUpdate:modelValue":t[3]||(t[3]=e=>l.value=e),"before-close":s},{left:m((()=>[h(b,{class:"action"},{default:m((()=>[h(b,{class:"button",style:{background:"#fa4350"}},{default:m((()=>[j("操作1")])),_:1}),h(b,{class:"button",style:{background:"#f0883a"}},{default:m((()=>[j("操作2")])),_:1}),h(b,{class:"button",style:{background:"#4d80f0"}},{default:m((()=>[j("操作3")])),_:1})])),_:1})])),right:m((()=>[h(b,{class:"action"},{default:m((()=>[h(b,{class:"button",style:{background:"#fa4350"}},{default:m((()=>[j("操作4")])),_:1}),h(b,{class:"button",style:{background:"#f0883a"}},{default:m((()=>[j("操作5")])),_:1}),h(b,{class:"button",style:{background:"#4d80f0"}},{default:m((()=>[j("操作6")])),_:1})])),_:1})])),default:m((()=>[h(f,{title:"标题文字",value:"内容"})])),_:1},8,["modelValue"])])),_:1}),h(b,{class:"button-group"},{default:m((()=>[h(b,{onClick:C(_,["stop"])},{default:m((()=>[h(w,{size:"small",onClick:t[4]||(t[4]=e=>i("left"))},{default:m((()=>[j("打开左边")])),_:1})])),_:1}),h(b,{onClick:C(_,["stop"])},{default:m((()=>[h(w,{size:"small",onClick:t[5]||(t[5]=e=>i("close"))},{default:m((()=>[j("关闭所有")])),_:1})])),_:1}),h(b,{onClick:C(_,["stop"])},{default:m((()=>[h(w,{size:"small",onClick:t[6]||(t[6]=e=>i("right"))},{default:m((()=>[j("打开右边")])),_:1})])),_:1})])),_:1}),h(g,{transparent:"",title:"点击事件"},{default:m((()=>[h(p,{onClick:d},{right:m((()=>[h(b,{class:"action"},{default:m((()=>[h(b,{class:"button",style:{background:"#fa4350"}},{default:m((()=>[j("操作1")])),_:1}),h(b,{class:"button",style:{background:"#f0883a"}},{default:m((()=>[j("操作2")])),_:1}),h(b,{class:"button",style:{background:"#4d80f0"}},{default:m((()=>[j("操作3")])),_:1})])),_:1})])),default:m((()=>[h(f,{title:"标题文字",value:"内容"})])),_:1})])),_:1}),h(g,{transparent:"",title:"禁用滑动按钮"},{default:m((()=>[h(p,{disabled:""},{right:m((()=>[h(b,{class:"action"},{default:m((()=>[h(b,{class:"button",style:{background:"#fa4350"}},{default:m((()=>[j("操作1")])),_:1}),h(b,{class:"button",style:{background:"#f0883a"}},{default:m((()=>[j("操作2")])),_:1}),h(b,{class:"button",style:{background:"#4d80f0"}},{default:m((()=>[j("操作3")])),_:1})])),_:1})])),default:m((()=>[h(f,{title:"标题文字",value:"内容"})])),_:1})])),_:1})])),_:1},8,["onClick"])])),_:1})}}}),[["__scopeId","data-v-3ceef8e7"]]);export{B as default};