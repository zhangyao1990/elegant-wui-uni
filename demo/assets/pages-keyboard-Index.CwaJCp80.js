import{i as e,y as t,l,p as a,w as o,b as s,f as i,m as n,k as u,c as r,d,_ as c,a as y}from"./page-wraper.DRSg2Trj.js";import{d as p,r as v,q as k,a as x,b as m,o as b,c as w,w as _,e as f,p as h,g,F as C,f as I,t as D,n as T,i as U,v as K,x as V,h as z,y as S,j as A}from"./index-ZLmWPcj7.js";import{_ as j}from"./wui-cell-group.Cggl4_1J.js";import{_ as B}from"./demo-block.YLy05Wjt.js";import{u as O}from"./useTouch.B3voJ16M.js";import"./useChildren.Cu3CY4jX.js";const $=s(p({name:"wui-key",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{type:e(""),text:t(""),wider:l(!1),large:l(!1),loading:l(!1)},emits:["press"],setup(e,{emit:t}){const l=e,s=t,i=O(),n=v(!1),u=k((()=>`wui-key ${l.large?"wui-key--large":""} ${"delete"===l.type?"wui-key--delete":""} ${"close"===l.type?"wui-key--close":""}`));function r(e){i.touchStart(e),n.value=!0}function d(e){i.touchMove(e),i.direction.value&&(n.value=!1)}function c(){n.value&&(n.value=!1,s("press",l.text,l.type))}return(e,t)=>{const s=x(m("wui-loading"),a),i=x(m("wui-icon"),o),n=U;return b(),w(n,{class:T("wui-key-wrapper "+(e.wider?"wui-key-wrapper--wider":"")),onTouchstart:r,onTouchmove:d,onTouchend:c},{default:_((()=>[f(n,{class:T(u.value)},{default:_((()=>[l.loading?(b(),w(s,{key:0,"custom-class":"wui-key__loading-icon"})):h("",!0),"delete"===e.type?(b(),g(C,{key:1},[e.text?(b(),g(C,{key:0},[I(D(e.text),1)],64)):(b(),w(i,{key:1,"custom-class":"wui-key__icon",name:"keyboard-delete",size:"22px"}))],64)):"extra"===e.type?(b(),g(C,{key:2},[e.text?(b(),g(C,{key:0},[I(D(e.text),1)],64)):(b(),w(i,{key:1,"custom-class":"wui-key__icon",name:"keyboard-collapse",size:"22px"}))],64)):(b(),g(C,{key:3},[I(D(e.text),1)],64))])),_:1},8,["class"])])),_:1},8,["class"])}}}),[["__scopeId","data-v-9589cc7f"]]),M={...i,visible:l(!1),modelValue:e(""),title:String,mode:e("default"),zIndex:n(100),maxlength:n(1/0),showDeleteKey:l(!0),randomKeyOrder:l(!1),closeText:String,deleteText:String,closeButtonLoading:l(!1),modal:l(!1),hideOnClickOutside:l(!0),lockScroll:l(!0),safeAreaInsetBottom:l(!0),extraKey:[String,Array]},P=["京","沪","粤","津","冀","豫","云","辽","黑","湘","皖","鲁","苏","浙","赣","鄂","桂","甘","晋","陕","蒙","吉","闽","贵","渝","川","青","琼","宁","挂","藏","港","澳","新","使","学"],G=[1,2,3,4,5,6,7,8,9,0,"Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"],H=s(p({name:"wui-keyboard",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:M,emits:["update:visible","input","close","delete","update:modelValue"],setup(e,{emit:t}){const l=e,a=t,o=v(l.visible);K((()=>l.visible),(e=>{o.value=e}));const s=v("zh"),i=k((()=>"car"!==l.mode?"custom"===l.mode?function(){const e=d(),t=Array.isArray(l.extraKey)?l.extraKey:[l.extraKey];1===t.length?e.push({text:0,wider:!0},{text:t[0],type:"extra"}):2===t.length&&e.push({text:t[0],type:"extra"},{text:0},{text:t[1],type:"extra"});return e}():[...d(),{text:l.extraKey,type:"extra"},{text:0},{text:l.showDeleteKey?l.deleteText:"",type:l.showDeleteKey?"delete":""}]:function(){const[e,t]=function(){const e="zh"===s.value?P.map((e=>({text:e}))):G.map((e=>({text:e})));return[e.slice(0,30),e.slice(30)]}();return[...e,{text:"zh"===s.value?"ABC":"返回",type:"extra",wider:!0},...t,{text:l.deleteText,type:"delete",wider:!0}]}())),n=k((()=>l.closeText&&("default"===l.mode||"car"===l.mode))),r=k((()=>l.title||n.value));function d(){const e=Array.from({length:9},((e,t)=>({text:t+1})));return l.randomKeyOrder?function(e){const t=[...e];for(let l=t.length-1;l>0;l--){const e=Math.floor(Math.random()*(l+1));[t[l],t[e]]=[t[e],t[l]]}return t}(e):e}const c=()=>{a("close"),a("update:visible",!1)},y=(e,t)=>{if("extra"===t){if(""===e)return c();if("ABC"===e||"返回"===e)return void(s.value="zh"===s.value?"en":"zh")}const o=l.modelValue;"delete"===t?(a("delete"),a("update:modelValue",o.slice(0,o.length-1))):"close"===t?c():o.length<+l.maxlength&&(a("input",e),a("update:modelValue",o+e))};return(e,t)=>{const l=A,a=U;return b(),w(u,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=e=>o.value=e),position:"bottom","z-index":e.zIndex,"safe-area-inset-bottom":e.safeAreaInsetBottom,"modal-style":e.modal?"":"opacity: 0;",modal:e.hideOnClickOutside,lockScroll:e.lockScroll,onClickModal:c},{default:_((()=>[f(a,{class:T(`wui-keyboard ${e.customClass}`),style:S(e.customStyle)},{default:_((()=>[r.value?(b(),w(a,{key:0,class:"wui-keyboard__header"},{default:_((()=>[V(e.$slots,"title",{},(()=>[f(l,{class:"wui-keyboard__title"},{default:_((()=>[I(D(e.title),1)])),_:1})]),!0),n.value?(b(),w(a,{key:0,class:"wui-keyboard__close","hover-class":"wui-keyboard__close--hover",onClick:c},{default:_((()=>[f(l,null,{default:_((()=>[I(D(e.closeText),1)])),_:1})])),_:1})):h("",!0)])),_:3})):h("",!0),"car"!==e.mode?(b(),w(a,{key:1,class:"wui-keyboard__body"},{default:_((()=>[f(a,{class:"wui-keyboard__keys"},{default:_((()=>[(b(!0),g(C,null,z(i.value,(e=>(b(),w($,{key:e.text,text:e.text,type:e.type,wider:e.wider,onPress:y},null,8,["text","type","wider"])))),128))])),_:1}),"custom"===e.mode?(b(),w(a,{key:0,class:"wui-keyboard__sidebar"},{default:_((()=>[e.showDeleteKey?(b(),w($,{key:0,large:"",text:e.deleteText,type:"delete",onPress:y},null,8,["text"])):h("",!0),f($,{large:"",text:e.closeText,type:"close",loading:e.closeButtonLoading,onPress:y},null,8,["text","loading"])])),_:1})):h("",!0)])),_:1})):h("",!0),"car"===e.mode?(b(),w(a,{key:2,class:"wui-keyboard-car__body"},{default:_((()=>[f(a,{class:"wui-keyboard-car__keys"},{default:_((()=>[(b(!0),g(C,null,z(i.value,(e=>(b(),w($,{key:e.text,text:e.text,type:e.type,wider:e.wider,onPress:y},null,8,["text","type","wider"])))),128))])),_:1})])),_:1})):h("",!0)])),_:3},8,["class","style"])])),_:3},8,["modelValue","z-index","safe-area-inset-bottom","modal-style","modal","lockScroll"])}}}),[["__scopeId","data-v-621d0add"]]),L=p({__name:"Index",setup(e){const{show:t}=r(),l=v(!1),a=v(!1),o=v(!1),s=v(!1),i=v(!1),n=v(!1),u=v(!1),p=v(!1),k=v(!1),w=v(!1),h=[l,a,o,s,i,n,u,p,k,w],D=v("");function T(e){h.forEach(((t,l)=>t.value=l===e-1))}const U=e=>t(`${e}`),K=()=>t("删除");return(e,t)=>{const r=x(m("wui-toast"),d),v=x(m("wui-cell"),c),h=x(m("wui-cell-group"),j),V=x(m("demo-block"),B),z=x(m("wui-keyboard"),H),S=A,O=x(m("page-wraper"),y);return b(),g(C,null,[f(r),f(O,null,{default:_((()=>[f(V,{title:"基本用法",transparent:""},{default:_((()=>[f(h,{border:""},{default:_((()=>[f(v,{title:"默认键盘","is-link":"",onClick:t[0]||(t[0]=e=>T(1))}),f(v,{title:"带右侧栏的键盘","is-link":"",onClick:t[1]||(t[1]=e=>T(2))}),f(v,{title:"身份证键盘","is-link":"",onClick:t[2]||(t[2]=e=>T(3))}),f(v,{title:"带标题的键盘","is-link":"",onClick:t[3]||(t[3]=e=>T(4))}),f(v,{title:"slot自定义标题","is-link":"",onClick:t[4]||(t[4]=e=>T(9))}),f(v,{title:"多个额外按键","is-link":"",onClick:t[5]||(t[5]=e=>T(5))}),f(v,{title:"随机数字键盘","is-link":"",onClick:t[6]||(t[6]=e=>T(6))}),f(v,{title:"车牌号键盘","is-link":"",onClick:t[7]||(t[7]=e=>T(10))}),f(v,{title:"双向绑定",clickable:"",value:D.value,onClick:t[8]||(t[8]=e=>T(7))},null,8,["value"]),f(v,{title:"展示蒙层",clickable:"",onClick:t[9]||(t[9]=e=>T(8))})])),_:1})])),_:1}),f(z,{visible:l.value,"onUpdate:visible":t[10]||(t[10]=e=>l.value=e),onInput:U,onDelete:K},null,8,["visible"]),f(z,{visible:a.value,"onUpdate:visible":t[11]||(t[11]=e=>a.value=e),mode:"custom","extra-key":".","close-text":"完成",onInput:U,onDelete:K},null,8,["visible"]),f(z,{visible:o.value,"onUpdate:visible":t[12]||(t[12]=e=>o.value=e),"extra-key":"X","close-text":"完成",onInput:U,onDelete:K},null,8,["visible"]),f(z,{visible:s.value,"onUpdate:visible":t[13]||(t[13]=e=>s.value=e),title:"输入密码","extra-key":".","close-text":"完成",onInput:U,onDelete:K},null,8,["visible"]),f(z,{visible:k.value,"onUpdate:visible":t[14]||(t[14]=e=>k.value=e),"extra-key":".","close-text":"完成",onInput:U,onDelete:K},{title:_((()=>[f(S,{style:{color:"red"}},{default:_((()=>[I("自定义标题")])),_:1})])),_:1},8,["visible"]),f(z,{visible:i.value,"onUpdate:visible":t[15]||(t[15]=e=>i.value=e),mode:"custom","extra-key":["00","."],"close-text":"完成",onInput:U,onDelete:K},null,8,["visible","extra-key"]),f(z,{visible:n.value,"onUpdate:visible":t[16]||(t[16]=e=>n.value=e),"random-key-order":"",onInput:U,onDelete:K},null,8,["visible"]),f(z,{modelValue:D.value,"onUpdate:modelValue":t[17]||(t[17]=e=>D.value=e),maxlength:6,visible:u.value,"onUpdate:visible":t[18]||(t[18]=e=>u.value=e),title:"键盘标题","extra-key":".","close-text":"完成",onInput:U,onDelete:K},null,8,["modelValue","visible"]),f(z,{modal:!0,visible:p.value,"onUpdate:visible":t[19]||(t[19]=e=>p.value=e),onInput:U,onDelete:K},null,8,["visible"]),f(z,{visible:w.value,"onUpdate:visible":t[20]||(t[20]=e=>w.value=e),mode:"car",onInput:U,onDelete:K},null,8,["visible"])])),_:1})],64)}}});export{L as default};
