import{f as e,g as l,w as a,_ as t,a as u}from"./page-wraper.C2FurGxh.js";import{d as n,r as o,a as d,b as s,e as i,f as m,w as f,g as r,n as _,p,F as v,h as c,k as V,t as g}from"./index-5xMnJkKH.js";import{_ as b}from"./wui-button.DcM22E8x.js";import{_ as h,a as k}from"./wui-tabs.D_Cxf_Mj.js";import{_ as w}from"./demo-block.B3LgEloV.js";import"./wui-badge.mF_sSYuA.js";import"./wui-sticky-box.Bdg6bEDG.js";import"./wui-resize.DD1ZhSjb.js";import"./useChildren.DuwNINZh.js";import"./useTouch.kzWXrY9K.js";import"./useTranslate.BUJYX8Af.js";const y=u(n({__name:"Index",setup(u){const n=o(["这","是","一","个","例子"]),y=o("一"),C=o(0),U=o([{title:"普通数值",badgeProps:{modelValue:10,right:"-10px"}},{title:"最大值",badgeProps:{modelValue:100,max:99,right:"-10px"}},{title:"点状",badgeProps:{isDot:!0,right:"-8px",showZero:!0}}]),$=o(["WUI","Design","Uni"]),j=o("Design"),x=o(0),P=o(0),D=o(1),I=o(2),T=o(0),W=o(0),Z=o(0),z=o(0),A=o(0),E=o(3),F=e();function L({index:e,name:l}){console.log("event",{index:e,name:l}),F.show(`点击了标签${l}`)}function R(e){console.log("change",e)}const S=o(!1),X=o();function Y(){S.value=!0}function q(){var e;null==(e=X.value)||e.updateLineStyle(!1)}return(e,u)=>{const o=d(s("wui-toast"),l),F=d(s("wui-button"),b),B=V,G=d(s("wui-tab"),h),H=d(s("wui-tabs"),k),J=d(s("demo-block"),w),K=d(s("wui-popup"),a),M=d(s("page-wraper"),t);return i(),m(M,null,{default:f((()=>[r(o),r(J,{title:"基本用法",transparent:""},{default:f((()=>[r(H,{modelValue:x.value,"onUpdate:modelValue":u[1]||(u[1]=e=>x.value=e),onChange:R},{default:f((()=>[(i(),_(v,null,p(4,(e=>r(G,{key:e,title:`标签${e}`},{default:f((()=>[r(B,{class:"content"},{default:f((()=>[c(" 内容"+g(x.value+1)+" ",1),r(B,null,{default:f((()=>[r(F,{onClick:u[0]||(u[0]=e=>x.value<3?x.value++:x.value=0)},{default:f((()=>[c("下一个")])),_:1})])),_:1})])),_:1})])),_:2},1032,["title"]))),64))])),_:1},8,["modelValue"])])),_:1}),r(J,{title:"name匹配",transparent:""},{default:f((()=>[r(H,{modelValue:y.value,"onUpdate:modelValue":u[2]||(u[2]=e=>y.value=e),onChange:R},{default:f((()=>[(i(!0),_(v,null,p(n.value,(e=>(i(),m(G,{key:e,title:`${e}`,name:e},{default:f((()=>[r(B,{class:"content"},{default:f((()=>[c("内容"+g(y.value),1)])),_:1})])),_:2},1032,["title","name"])))),128))])),_:1},8,["modelValue"])])),_:1}),r(J,{title:"使用徽标",transparent:""},{default:f((()=>[r(H,{modelValue:C.value,"onUpdate:modelValue":u[3]||(u[3]=e=>C.value=e),onChange:R},{default:f((()=>[(i(!0),_(v,null,p(U.value,((e,l)=>(i(),m(G,{key:l,title:`${e.title}`,"badge-props":e.badgeProps},{default:f((()=>[r(B,{class:"content"},{default:f((()=>[c(g(e.title)+"徽标",1)])),_:2},1024)])),_:2},1032,["title","badge-props"])))),128))])),_:1},8,["modelValue"])])),_:1}),r(J,{title:"自动调整底部条宽度",transparent:""},{default:f((()=>[r(H,{modelValue:j.value,"onUpdate:modelValue":u[4]||(u[4]=e=>j.value=e),onChange:R,"auto-line-width":""},{default:f((()=>[(i(!0),_(v,null,p($.value,(e=>(i(),m(G,{key:e,title:`${e}`,name:e},{default:f((()=>[r(B,{class:"content"},{default:f((()=>[c("内容"+g(j.value),1)])),_:1})])),_:2},1032,["title","name"])))),128))])),_:1},8,["modelValue"])])),_:1}),r(J,{title:"粘性布局",transparent:""},{default:f((()=>[r(H,{modelValue:P.value,"onUpdate:modelValue":u[5]||(u[5]=e=>P.value=e),sticky:"",onChange:R},{default:f((()=>[(i(),_(v,null,p(4,(e=>r(G,{key:e,title:`标签${e}`},{default:f((()=>[r(B,{class:"content"},{default:f((()=>[c("内容"+g(P.value+1),1)])),_:1})])),_:2},1032,["title"]))),64))])),_:1},8,["modelValue"])])),_:1}),r(J,{title:"禁用tab",transparent:""},{default:f((()=>[r(H,{modelValue:D.value,"onUpdate:modelValue":u[6]||(u[6]=e=>D.value=e),onChange:R},{default:f((()=>[(i(),_(v,null,p(4,(e=>r(G,{key:e,title:`标签${e}`,disabled:1===e},{default:f((()=>[r(B,{class:"content"},{default:f((()=>[c("内容"+g(D.value+1),1)])),_:1})])),_:2},1032,["title","disabled"]))),64))])),_:1},8,["modelValue"])])),_:1}),r(J,{title:"点击事件",transparent:""},{default:f((()=>[r(H,{modelValue:I.value,"onUpdate:modelValue":u[7]||(u[7]=e=>I.value=e),onClick:L,onChange:R},{default:f((()=>[(i(),_(v,null,p(4,(e=>r(G,{key:e,title:`标签${e}`},{default:f((()=>[r(B,{class:"content"},{default:f((()=>[c("内容"+g(I.value+1),1)])),_:1})])),_:2},1032,["title"]))),64))])),_:1},8,["modelValue"])])),_:1}),r(J,{title:"切换动画",transparent:""},{default:f((()=>[r(H,{modelValue:z.value,"onUpdate:modelValue":u[8]||(u[8]=e=>z.value=e),animated:"",onChange:R},{default:f((()=>[(i(),_(v,null,p(4,(e=>r(G,{key:e,title:`标签${e}`},{default:f((()=>[r(B,{class:"content"},{default:f((()=>[c("内容"+g(z.value+1),1)])),_:1})])),_:2},1032,["title"]))),64))])),_:1},8,["modelValue"])])),_:1}),r(J,{title:"手势滑动",transparent:""},{default:f((()=>[r(H,{modelValue:T.value,"onUpdate:modelValue":u[9]||(u[9]=e=>T.value=e),swipeable:"",animated:"",onChange:R},{default:f((()=>[(i(),_(v,null,p(4,(e=>r(G,{key:e,title:`标签${e}`},{default:f((()=>[r(B,{class:"content"},{default:f((()=>[c("内容"+g(T.value+1),1)])),_:1})])),_:2},1032,["title"]))),64))])),_:1},8,["modelValue"])])),_:1}),r(J,{title:"数量大于6时可滚动",transparent:""},{default:f((()=>[r(H,{modelValue:W.value,"onUpdate:modelValue":u[10]||(u[10]=e=>W.value=e),onChange:R},{default:f((()=>[(i(),_(v,null,p(7,(e=>r(G,{key:e,title:`标签${e}`},{default:f((()=>[r(B,{class:"content"},{default:f((()=>[c("内容"+g(W.value+1),1)])),_:1})])),_:2},1032,["title"]))),64))])),_:1},8,["modelValue"])])),_:1}),r(J,{title:"左对齐超出即可滚动",transparent:""},{default:f((()=>[r(H,{modelValue:A.value,"onUpdate:modelValue":u[11]||(u[11]=e=>A.value=e),slidable:"always",onChange:R},{default:f((()=>[(i(),_(v,null,p(5,(e=>r(G,{key:e,title:`超大标签${e}`},{default:f((()=>[r(B,{class:"content"},{default:f((()=>[c("内容"+g(A.value+1),1)])),_:1})])),_:2},1032,["title"]))),64))])),_:1},8,["modelValue"])])),_:1}),r(J,{title:"数量大于10时出现导航地图",transparent:""},{default:f((()=>[r(H,{modelValue:Z.value,"onUpdate:modelValue":u[12]||(u[12]=e=>Z.value=e),onChange:R,mapTitle:"全部"},{default:f((()=>[(i(),_(v,null,p(20,(e=>r(G,{key:e,title:`标签${e}`},{default:f((()=>[r(B,{class:"large"},{default:f((()=>[c("内容"+g(Z.value+1),1)])),_:1})])),_:2},1032,["title"]))),64))])),_:1},8,["modelValue"])])),_:1}),r(J,{title:"在弹出框中使用",transparent:""},{default:f((()=>[r(B,{class:"section"},{default:f((()=>[r(F,{onClick:Y},{default:f((()=>[c("打开弹窗")])),_:1})])),_:1})])),_:1}),r(K,{modelValue:S.value,"onUpdate:modelValue":u[14]||(u[14]=e=>S.value=e),position:"bottom","safe-area-inset-bottom":"",onAfterEnter:q,closable:"","custom-style":"padding: 0 24rpx;"},{default:f((()=>[r(B,{class:"title"},{default:f((()=>[c("在弹出框中使用")])),_:1}),r(H,{modelValue:E.value,"onUpdate:modelValue":u[13]||(u[13]=e=>E.value=e),ref_key:"tabsRef",ref:X},{default:f((()=>[(i(!0),_(v,null,p(n.value,(e=>(i(),m(G,{key:e,title:`${e}`,name:e},{default:f((()=>[r(B,{class:"content"},{default:f((()=>[c("内容"+g(E.value),1)])),_:1})])),_:2},1032,["title","name"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])),_:1})}}}),[["__scopeId","data-v-941a6fd0"]]);export{y as default};
