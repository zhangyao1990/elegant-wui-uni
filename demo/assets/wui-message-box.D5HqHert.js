import{S as e,r as t,Y as o,d as s,c as a,Z as n,y as l,e as u,f as i,w as r,g as c,p,h as m,t as d,v as f,l as w,u as h,F as _,z as y,a9 as x,k as b}from"./index-B1zkhFT1.js";import{M as C,f as B,i as g,l as V,N as k,r as z,x as v,D as P,y as E,a as T}from"./page-wraper.D5sIAHqb.js";import{_ as I}from"./wui-button.GUQvrKFc.js";import{_ as M}from"./wui-input.DaUIuTAn.js";import{u as O}from"./useTranslate.BDowZoYF.js";const S="__MESSAGE_OPTION__",$=Symbol("None"),j={title:"",showCancelButton:!1,show:!1,closeOnClickModal:!0,msg:"",type:"alert",inputType:"text",inputValue:"",showErr:!1,zIndex:99,lazyRender:!0,inputError:""};function R(s=""){const a=s?S+s:S,n=e(a,t($));n.value===$&&(n.value=j,o(a,n));const l=e=>t=>{const o=C({type:e},"string"==typeof t?{title:t}:t);return"confirm"===o.type||"prompt"===o.type?o.showCancelButton=!0:o.showCancelButton=!1,u(o)},u=e=>new Promise(((t,o)=>{const s=C(j,"string"==typeof e?{title:e}:e);n.value=C(s,{show:!0,success:e=>{t(e)},fail:e=>{o(e)}})})),i=l("alert"),r=l("confirm"),c=l("prompt");return{show:u,alert:i,confirm:r,prompt:c,close:()=>{n.value!==$&&(n.value.show=!1)}}}const N=T(s({name:"wui-message-box",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...B,selector:g("")},setup(o){const s=o,{translate:C}=O("message-box"),B=a((()=>`wui-message-box__container ${s.customClass}`)),g=a((()=>`wui-message-box__body ${N.title?"":"is-no-title"} ${"prompt"===N.type?"is-prompt":""}`)),T=($=s.selector)?`${S}${$}`:S;var $;const R=e(T,t(j)),N=n({msg:"",show:!1,title:"",showCancelButton:!1,closeOnClickModal:!0,confirmButtonText:"",cancelButtonText:"",type:"alert",inputType:"text",inputValue:"",inputPlaceholder:"",inputError:"",showErr:!1,zIndex:99,lazyRender:!0}),G=a((()=>{const e=k({block:!0},z(N.confirmButtonProps)?v(N.confirmButtonProps,E):{});return e.customClass=`${e.customClass||""} wui-message-box__actions-btn`,e})),H=a((()=>{const e=k({block:!0,type:"info"},z(N.cancelButtonProps)?v(N.cancelButtonProps,E):{});return e.customClass=`${e.customClass||""} wui-message-box__actions-btn`,e}));function U(e){if(("modal"!==e||N.closeOnClickModal)&&("prompt"!==N.type||"confirm"!==e||function(){if(N.inputPattern&&!N.inputPattern.test(String(N.inputValue)))return N.showErr=!0,!1;if("function"==typeof N.inputValidate){if(!N.inputValidate(N.inputValue))return N.showErr=!0,!1}return N.showErr=!1,!0}()))switch(e){case"confirm":N.beforeConfirm?N.beforeConfirm({resolve:t=>{t&&A({action:e,value:N.inputValue})}}):A({action:e,value:N.inputValue});break;case"cancel":D({action:e});break;default:D({action:"modal"})}}function A(e){N.show=!1,P(N.success)&&N.success(e)}function D(e){N.show=!1,P(N.fail)&&N.fail(e)}function F({value:e}){""!==e?N.inputValue=e:N.showErr=!1}return l((()=>R.value),(e=>{var t;(t=e)&&(N.title=z(t.title)?t.title:"",N.showCancelButton=!!z(t.showCancelButton)&&t.showCancelButton,N.show=t.show,N.closeOnClickModal=t.closeOnClickModal,N.confirmButtonText=t.confirmButtonText,N.cancelButtonText=t.cancelButtonText,N.msg=t.msg,N.type=t.type,N.inputType=t.inputType,N.inputSize=t.inputSize,N.inputValue=t.inputValue,N.inputPlaceholder=t.inputPlaceholder,N.inputPattern=t.inputPattern,N.inputValidate=t.inputValidate,N.success=t.success,N.fail=t.fail,N.beforeConfirm=t.beforeConfirm,N.inputError=t.inputError,N.showErr=t.showErr,N.zIndex=t.zIndex,N.lazyRender=t.lazyRender,N.confirmButtonProps=t.confirmButtonProps,N.cancelButtonProps=t.cancelButtonProps)}),{deep:!0,immediate:!0}),l((()=>N.show),(e=>{!1===!!e&&(N.showErr=!1)}),{deep:!0,immediate:!0}),(e,t)=>{const o=b;return u(),i(o,null,{default:r((()=>[c(V,{transition:"zoom-in",modelValue:N.show,"onUpdate:modelValue":t[3]||(t[3]=e=>N.show=e),"close-on-click-modal":N.closeOnClickModal,"lazy-render":N.lazyRender,"custom-class":"wui-message-box",onClickModal:t[4]||(t[4]=e=>U("modal")),"z-index":N.zIndex,duration:200},{default:r((()=>[c(o,{class:p(B.value)},{default:r((()=>[c(o,{class:p(g.value)},{default:r((()=>[N.title?(u(),i(o,{key:0,class:"wui-message-box__title"},{default:r((()=>[m(d(N.title),1)])),_:1})):f("",!0),c(o,{class:"wui-message-box__content"},{default:r((()=>["prompt"===N.type?(u(),w(_,{key:0},[c(M,{modelValue:N.inputValue,"onUpdate:modelValue":t[0]||(t[0]=e=>N.inputValue=e),type:N.inputType,size:N.inputSize,placeholder:N.inputPlaceholder,onInput:F},null,8,["modelValue","type","size","placeholder"]),N.showErr?(u(),i(o,{key:0,class:"wui-message-box__input-error"},{default:r((()=>[m(d(N.inputError||h(C)("inputNoValidate")),1)])),_:1})):f("",!0)],64)):f("",!0),y(e.$slots,"default",{},(()=>[m(d(N.msg),1)]),!0)])),_:3})])),_:3},8,["class"]),c(o,{class:p("wui-message-box__actions "+(N.showCancelButton?"wui-message-box__flex":"wui-message-box__block"))},{default:r((()=>[N.showCancelButton?(u(),i(I,x({key:0},H.value,{onClick:t[1]||(t[1]=e=>U("cancel"))}),{default:r((()=>[m(d(N.cancelButtonText||h(C)("cancel")),1)])),_:1},16)):f("",!0),c(I,x(G.value,{onClick:t[2]||(t[2]=e=>U("confirm"))}),{default:r((()=>[m(d(N.confirmButtonText||h(C)("confirm")),1)])),_:1},16)])),_:1},8,["class"])])),_:3},8,["class"])])),_:3},8,["modelValue","close-on-click-modal","lazy-render","z-index"])])),_:3})}}}),[["__scopeId","data-v-8ae63673"]]);export{N as _,R as u};
