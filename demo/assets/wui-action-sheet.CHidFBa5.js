import{d as e,r as a,v as s,o as t,c as l,w as n,e as o,n as c,y as i,f as u,t as d,p as r,g as m,h as _,F as p,x as f,i as h,Z as k,l as w}from"./index-CUFtuoyb.js";import{f as y,i as g,l as b,z as x,N as C,m as v,w as z,k as I,p as $,r as V,b as A}from"./page-wraper.DLIaUpRJ.js";const B=A(e({name:"wui-action-sheet",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...y,customHeaderClass:g(""),modelValue:{...b(!1),...x(Boolean)},actions:C(),panels:C(),title:String,cancelText:String,closeOnClickAction:b(!0),closeOnClickModal:b(!0),duration:v(200),zIndex:v(10),lazyRender:b(!0),safeAreaInsetBottom:b(!0)},emits:["select","click-modal","cancel","closed","close","open","opened","update:modelValue"],setup(e,{emit:y}){const g=e,b=y,x=a([]),C=a(!1);function v(){return g.panels.length&&!V(g.panels[0])}function A(e,a,s){if("action"===a){if(g.actions[e].disabled||g.actions[e].loading)return;b("select",{item:g.actions[e],index:e})}else v()?b("select",{item:g.panels[Number(s)],index:s}):b("select",{item:g.panels[e][Number(s)],rowIndex:e,colIndex:s});M()}function B(){b("click-modal")}function H(){b("cancel"),M()}function M(){b("update:modelValue",!1),b("close")}function N(){b("open")}function O(){b("opened")}function S(){b("closed")}return s((()=>g.panels),(function(){x.value=v()?[g.panels]:g.panels}),{deep:!0,immediate:!0}),s((()=>g.modelValue),(e=>{C.value=e}),{deep:!0,immediate:!0}),(e,a)=>{const s=h,y=k,g=w;return t(),l(s,null,{default:n((()=>[o(I,{"custom-class":"wui-action-sheet__popup","custom-style":""+(e.actions&&e.actions.length||e.panels&&e.panels.length?"background: transparent;":""),modelValue:C.value,"onUpdate:modelValue":a[0]||(a[0]=e=>C.value=e),duration:e.duration,position:"bottom","close-on-click-modal":e.closeOnClickModal,"safe-area-inset-bottom":e.safeAreaInsetBottom,"lazy-render":e.lazyRender,onEnter:N,onClose:M,onAfterEnter:O,onAfterLeave:S,onClickModal:B,"z-index":e.zIndex},{default:n((()=>[o(s,{class:c(`wui-action-sheet ${e.customClass}`),style:i(`${e.actions&&e.actions.length||e.panels&&e.panels.length?"margin: 0 10px calc(var(--window-bottom) + 10px) 10px; border-radius: 16px;":"margin-bottom: var(--window-bottom);"} ${e.customStyle}`)},{default:n((()=>[e.title?(t(),l(s,{key:0,class:c(`wui-action-sheet__header ${e.customHeaderClass}`)},{default:n((()=>[u(d(e.title)+" ",1),o(z,{"custom-class":"wui-action-sheet__close",name:"add",onClick:M})])),_:1},8,["class"])):r("",!0),e.actions&&e.actions.length?(t(),l(s,{key:1,class:"wui-action-sheet__actions"},{default:n((()=>[(t(!0),m(p,null,_(e.actions,((e,a)=>(t(),l(y,{key:a,class:c(`wui-action-sheet__action ${e.disabled?"wui-action-sheet__action--disabled":""}  ${e.loading?"wui-action-sheet__action--loading":""}`),style:i(`color: ${e.color}`),onClick:e=>A(a,"action")},{default:n((()=>[e.loading?(t(),l($,{key:0,"custom-class":"`wui-action-sheet__action-loading"})):(t(),l(s,{key:1,class:"wui-action-sheet__name"},{default:n((()=>[u(d(e.name),1)])),_:2},1024)),!e.loading&&e.subname?(t(),l(s,{key:2,class:"wui-action-sheet__subname"},{default:n((()=>[u(d(e.subname),1)])),_:2},1024)):r("",!0)])),_:2},1032,["class","style","onClick"])))),128))])),_:1})):r("",!0),x.value&&x.value.length?(t(),l(s,{key:2},{default:n((()=>[(t(!0),m(p,null,_(x.value,((e,a)=>(t(),l(s,{key:a,class:"wui-action-sheet__panels"},{default:n((()=>[o(s,{class:"wui-action-sheet__panels-content"},{default:n((()=>[(t(!0),m(p,null,_(e,((e,c)=>(t(),l(s,{key:c,class:"wui-action-sheet__panel",onClick:e=>A(a,"panels",c)},{default:n((()=>[o(g,{class:"wui-action-sheet__panel-img",src:e.iconUrl},null,8,["src"]),o(s,{class:"wui-action-sheet__panel-title"},{default:n((()=>[u(d(e.title),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:2},1024)])),_:2},1024)))),128))])),_:1})):r("",!0),f(e.$slots,"default",{},void 0,!0),e.cancelText?(t(),l(y,{key:3,class:"wui-action-sheet__cancel",onClick:H},{default:n((()=>[u(d(e.cancelText),1)])),_:1})):r("",!0)])),_:3},8,["class","style"])])),_:3},8,["custom-style","modelValue","duration","close-on-click-modal","safe-area-inset-bottom","lazy-render","z-index"])])),_:3})}}}),[["__scopeId","data-v-244ac92d"]]);export{B as _};