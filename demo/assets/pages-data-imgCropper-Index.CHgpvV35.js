import{d as e,r as a,J as l,x as t,c as u,e as i,f as s,w as o,g as c,n,z as r,s as v,h as m,t as p,u as d,k as h,j as g,ao as f,al as w,am as _,I as x,an as y,a as b,b as S,af as M}from"./index-72jEY8AL.js";import{c as T,k as $,l as k,m as I,t as C,b as N,o as H,e as V,a as j,_ as W}from"./page-wraper.DpqTXTZc.js";import{_ as q}from"./wui-button.jKeBZ4e9.js";import{u as X}from"./useTranslate.C1TcN3no.js";import{_ as Y}from"./wui-img.sKVSTgmO.js";import{_ as z}from"./demo-block.BGbMmBVB.js";const F=e({name:"wui-img-cropper",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...T,modelValue:$(!1),cancelButtonText:String,confirmButtonText:String,disabledRotate:$(!1),fileType:k("png"),quality:I(1),exportScale:I(2),imgSrc:k(""),imgWidth:C(""),imgHeight:C(""),maxScale:I(3)},emits:["imgloaded","imgloaderror","cancel","confirm","update:modelValue"],setup(e,{expose:b,emit:S}){let M=null,T=null,$=!0,k=null,I=null;const C=.85,j=e,W=S,{translate:Y}=X("img-cropper"),z=a(0),F=a(!1),P=a(0),R=a(0),A=a(0),B=a(0),O=a(20),E=a(0),G=a(0),J=a(""),L=a(""),U=a(2),D=a(1),K=a(l().windowWidth/2),Q=a(l().windowHeight/2*C),Z=a(null),ee=a(l()),ae=a(!0),le=a([{x:"",y:""},{x:"",y:""}]),te=a(""),ue=a(null),{proxy:ie}=x();t((()=>j.modelValue),(e=>{if(e){k=j.imgWidth,I=j.imgHeight,ee.value=l();const e=ee.value.windowWidth-2*O.value;A.value=e,B.value=e,G.value=(ee.value.windowHeight*C-e)/2,E.value=O.value,U.value=j.exportScale,L.value=e,J.value=e,function(){if(k&&"string"==typeof k&&-1!==k.indexOf("%")){const e=k.replace("%","");k=ee.value.windowWidth/100*Number(e),P.value=k}else k&&"number"==typeof k&&(P.value=k);if(I&&"string"==typeof I&&-1!==I.indexOf("%")){const e=j.imgHeight.replace("%","");I=ee.value.windowHeight/100*Number(e),P.value=I}else I&&"number"==typeof I&&(P.value=Number(k))}(),ue.value||(ue.value=_("wui-img-cropper-canvas",ie)),j.imgSrc&&ve()}else re()}),{deep:!0,immediate:!0}),t((()=>j.imgSrc),(e=>{e&&ve()}),{deep:!0,immediate:!0}),t((()=>z.value),(e=>{e%90&&(z.value=90*Math.round(e/90))}),{deep:!0,immediate:!0}),t((()=>F.value),(e=>{M&&clearTimeout(M),e&&(M=setTimeout((()=>{ce(!1),clearTimeout(M)}),300))}),{deep:!0,immediate:!0});const se=u((()=>H({position:"absolute",right:0,width:"56px","border-radius":"16px","font-size":"16px"}))),oe=u((()=>{const e={width:P.value?V(P.value):"auto",height:R.value?V(R.value):"auto",transform:`translate(${V(K.value-P.value/2)}, ${V(Q.value-R.value/2)}) scale(${D.value}) rotate(${z.value}deg)`,"transition-duration":(F.value?.4:0)+"s"};return H(e)}));function ce(e){F.value=e}function ne(e){e&&!j.disabledRotate&&(ce(!0),z.value=e,me())}function re(){const{windowHeight:e,windowWidth:a}=l();D.value=1,z.value=0,K.value=a/2,Q.value=e/2*C}function ve(){j.imgSrc&&w({src:j.imgSrc,success:e=>{Z.value=e,function(){let e=P.value,a=R.value;I||k?I&&!k?e=Z.value.width/Z.value.height*Number(I):(!I&&k||I&&k)&&(a=Z.value.height/Z.value.width*Number(k)):(e=Z.value.width,a=Z.value.height,P.value/R.value>A.value/B.value?(a=B.value,e=Z.value.width/Z.value.height*B.value):(e=A.value,a=Z.value.height/Z.value.width*A.value));P.value=e,R.value=a}(),re()},fail:()=>{}})}function me(e){const a=e||D.value;let l=K.value,t=Q.value,u=P.value,i=R.value;z.value/90%2&&(u=R.value,i=P.value),l=u*a/2+E.value>=l?l:u*D.value/2+E.value,l=E.value+A.value-u*a/2<=l?l:E.value+A.value-u*a/2,t=i*a/2+G.value>=t?t:i*a/2+G.value,t=G.value+B.value-i*a/2<=t?t:G.value+B.value-i*a/2,D.value=a,Q.value=t,K.value=l}function pe(e){if(ae.value=!1,1===e.touches.length)le.value[0]={x:e.touches[0].clientX-K.value,y:e.touches[0].clientY-Q.value};else{const a=Math.abs(e.touches[1].clientX-e.touches[0].clientX),l=Math.abs(e.touches[1].clientY-e.touches[0].clientY);te.value=Math.sqrt(Math.pow(a,2)+Math.pow(l,2))}}function de(e){if(!ae.value&&$)if("android"===ee.value.platform?(T&&clearTimeout(T),T=setTimeout((()=>{$=!0}),25)):!$&&($=!0),1===e.touches.length){const{x:a,y:l}=le.value[0],t=e.touches[0].clientX-Number(a),u=e.touches[0].clientY-Number(l);K.value=t,Q.value=u,me()}else{const a=Math.abs(e.touches[1].clientX-e.touches[0].clientX),l=Math.abs(e.touches[1].clientY-e.touches[0].clientY),t=Math.sqrt(Math.pow(a,2)+Math.pow(l,2)),u=D.value*(t/Number(te.value));D.value=Math.min(u,j.maxScale),function(){let e=P.value,a=R.value,l=D.value;z.value/90%2&&(e=R.value,a=P.value),e*l<A.value&&(l=A.value/e),a*l<B.value&&(l=B.value/a),me(l)}(),te.value=Math.sqrt(Math.pow(a,2)+Math.pow(l,2))}}function he(){ae.value=!0}function ge(e){W("imgloaded",e)}function fe(e){W("imgloaderror",e)}function we(){ne(z.value-90)}function _e(){W("cancel"),W("update:modelValue",!1)}function xe(){!function(){if(!j.imgSrc)return;const e=()=>{const e=P.value*D.value*j.exportScale,a=R.value*D.value*j.exportScale,l=K.value-E.value,t=Q.value-G.value;ue.value.translate(l*j.exportScale,t*j.exportScale),j.disabledRotate||ue.value.rotate(z.value*Math.PI/180),ue.value.drawImage(j.imgSrc,-e/2,-a/2,e,a),ue.value.restore(),ue.value.draw(!1,(()=>{!function(){const{fileType:e,quality:a,exportScale:l}=j;y({width:A.value*l,height:Math.round(B.value*l),destWidth:A.value*l,destHeight:Math.round(B.value*l),fileType:e,quality:a,canvasId:"wui-img-cropper-canvas",success:e=>{const a={tempFilePath:e.tempFilePath,width:A.value*l,height:B.value*l};W("confirm",a)},complete:()=>{W("update:modelValue",!1)}},ie)}()}))};L.value=B.value,J.value=A.value,e()}()}function ye(){}return b({revertIsAnimation:ce,setRoate:ne,resetImg:re}),(e,a)=>{const l=h,t=g,u=f;return e.modelValue?(i(),s(l,{key:0,class:n(`wui-img-cropper ${e.customClass}`),style:r(e.customStyle),onTouchmove:ye},{default:o((()=>[c(l,{class:"wui-img-cropper__wrapper"},{default:o((()=>[c(l,{class:"wui-img-cropper__cut"},{default:o((()=>[c(l,{class:n("wui-img-cropper__cut--top "+(ae.value?"":"is-hightlight")),style:r(`height: ${G.value}px;`)},null,8,["class","style"]),c(l,{class:"wui-img-cropper__cut--middle"},{default:o((()=>[c(l,{class:n("wui-img-cropper__cut--left "+(ae.value?"":"is-hightlight")),style:r(`width: ${E.value}px; height: ${A.value}px;`)},null,8,["class","style"]),c(l,{class:"wui-img-cropper__cut--body",style:r(`width: ${A.value}px; height: ${B.value}px;`)},{default:o((()=>[c(l,{class:"is-gridlines-x"}),c(l,{class:"is-gridlines-y"}),c(l,{class:"is-left-top"}),c(l,{class:"is-left-bottom"}),c(l,{class:"is-right-top"}),c(l,{class:"is-right-bottom"})])),_:1},8,["style"]),c(l,{class:n("wui-img-cropper__cut--right "+(ae.value?"":"is-hightlight"))},null,8,["class"])])),_:1}),c(l,{class:n("wui-img-cropper__cut--bottom "+(ae.value?"":"is-hightlight"))},null,8,["class"])])),_:1}),c(t,{prop:F.value,"change:prop":e.animation?e.animation.setAnimation:"",class:"wui-img-cropper__img",src:e.imgSrc,style:r(oe.value),"lazy-load":!1,onTouchstart:pe,onTouchmove:de,onTouchend:he,onError:fe,onLoad:ge},null,8,["prop","change:prop","src","style"])])),_:1}),c(u,{"canvas-id":"wui-img-cropper-canvas",id:"wui-img-cropper-canvas",class:"wui-img-cropper__canvas","disable-scroll":!0,style:r(`width: ${Number(J.value)*U.value}px; height: ${Number(L.value)*U.value}px;`)},null,8,["style"]),c(l,{class:"wui-img-cropper__footer"},{default:o((()=>[e.disabledRotate?v("",!0):(i(),s(N,{key:0,"custom-class":"wui-img-cropper__rotate",name:"rotate",onClick:we})),c(l,{class:"wui-img-cropper__footer--button"},{default:o((()=>[c(l,{class:"is-cancel",onClick:_e},{default:o((()=>[m(p(e.cancelButtonText||d(Y)("cancel")),1)])),_:1}),c(q,{size:"small","custom-style":se.value,onClick:xe},{default:o((()=>[m(p(e.confirmButtonText||d(Y)("confirm")),1)])),_:1},8,["custom-style"])])),_:1})])),_:1})])),_:1},8,["class","style"])):v("",!0)}}});const P={setAnimation:function(e,a,l){if(e)var t=l.setTimeout((function(){l.callMethod("revertIsAnimation",!1),l.clearTimeout(t)}),300)}},R=e=>{e.$wxs||(e.$wxs=[]),e.$wxs.push("animation"),e.mixins||(e.mixins=[]),e.mixins.push({beforeCreate(){this.animation=P}})};R(F);const A=j(F,[["__scopeId","data-v-e818ea2b"]]),B=j(e({__name:"Index",setup(e){const l=a(""),t=a(""),u=a(!1);function n(){M({count:1,success:e=>{const a=e.tempFilePaths[0];l.value=a,u.value=!0}})}function r(e){const{tempFilePath:a}=e;t.value=a}function p(e){console.log("加载失败",e)}function d(e){console.log("加载成功",e)}function g(e){console.log("取消",e)}return(e,a)=>{const f=b(S("wui-img-cropper"),A),w=b(S("wui-icon"),N),_=h,x=b(S("wui-img"),Y),y=b(S("demo-block"),z),M=b(S("page-wraper"),W);return i(),s(M,null,{default:o((()=>[c(y,{title:"基本用法",style:{"text-align":"center"}},{default:o((()=>[c(f,{modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=e=>u.value=e),"img-src":l.value,onConfirm:r,onCancel:g,onImgloaderror:p,onImgloaded:d},null,8,["modelValue","img-src"]),c(_,{class:"profile"},{default:o((()=>[t.value?v("",!0):(i(),s(_,{key:0,class:"img",onClick:n},{default:o((()=>[c(w,{name:"fill-camera","custom-class":"img-icon"})])),_:1})),t.value?(i(),s(x,{key:1,round:"",width:"200px",height:"200px",src:t.value,mode:"aspectFit","custom-class":"profile-img",onClick:n},null,8,["src"])):v("",!0),c(_,{style:{"font-size":"14px"}},{default:o((()=>[m("点击上传头像")])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-f5393719"]]);export{B as default};
