import{c as e,d as l,l as a,a as t,b as u}from"./page-wraper.DKh8GSae.js";import{d as n,r as o,a as d,b as s,o as i,c as m,w as f,e as r,g as _,h as p,F as c,f as v,i as V,t as g}from"./index-Dr4mJiuc.js";import{_ as b}from"./wui-button.D-2fgW8t.js";import{_ as h,a as k}from"./wui-tabs.B7gMy4eM.js";import{_ as y}from"./demo-block.DQEtA4yj.js";import"./wui-badge.B7RngZNw.js";import"./wui-sticky-box.CEC2N1Sm.js";import"./wui-resize.B_i3LZAR.js";import"./useChildren.sgdd5yxK.js";import"./useTouch.BCR70F8p.js";import"./useTranslate.lVjJraGZ.js";const w=u(n({__name:"Index",setup(u){const n=o(["这","是","一","个","例子"]),w=o("一"),C=o(0),U=o([{title:"普通数值",badgeProps:{modelValue:10,right:"-10px"}},{title:"最大值",badgeProps:{modelValue:100,max:99,right:"-10px"}},{title:"点状",badgeProps:{isDot:!0,right:"-8px",showZero:!0}}]),$=o(["WUI","Design","Uni"]),x=o("Design"),j=o(0),P=o(0),D=o(1),I=o(2),T=o(0),S=o(0),z=o(0),A=o(0),E=o(0),F=o(3),J=e();function K({index:e,name:l}){console.log("event",{index:e,name:l}),J.show(`点击了标签${l}`)}function L(e){console.log("change",e)}const R=o(!1),W=o();function Z(){R.value=!0}function q(){var e;null==(e=W.value)||e.updateLineStyle(!1)}return(e,u)=>{const o=d(s("wui-toast"),l),J=d(s("wui-button"),b),B=V,G=d(s("wui-tab"),h),H=d(s("wui-tabs"),k),M=d(s("demo-block"),y),N=d(s("wui-popup"),a),O=d(s("page-wraper"),t);return i(),m(O,null,{default:f((()=>[r(o),r(M,{title:"基本用法",transparent:""},{default:f((()=>[r(H,{modelValue:j.value,"onUpdate:modelValue":u[1]||(u[1]=e=>j.value=e),onChange:L},{default:f((()=>[(i(),_(c,null,p(4,(e=>r(G,{key:e,title:`标签${e}`},{default:f((()=>[r(B,{class:"content"},{default:f((()=>[v(" 内容"+g(j.value+1)+" ",1),r(B,null,{default:f((()=>[r(J,{onClick:u[0]||(u[0]=e=>j.value<3?j.value++:j.value=0)},{default:f((()=>[v("下一个")])),_:1})])),_:1})])),_:1})])),_:2},1032,["title"]))),64))])),_:1},8,["modelValue"])])),_:1}),r(M,{title:"name匹配",transparent:""},{default:f((()=>[r(H,{modelValue:w.value,"onUpdate:modelValue":u[2]||(u[2]=e=>w.value=e),onChange:L},{default:f((()=>[(i(!0),_(c,null,p(n.value,(e=>(i(),m(G,{key:e,title:`${e}`,name:e},{default:f((()=>[r(B,{class:"content"},{default:f((()=>[v("内容"+g(w.value),1)])),_:1})])),_:2},1032,["title","name"])))),128))])),_:1},8,["modelValue"])])),_:1}),r(M,{title:"使用徽标",transparent:""},{default:f((()=>[r(H,{modelValue:C.value,"onUpdate:modelValue":u[3]||(u[3]=e=>C.value=e),onChange:L},{default:f((()=>[(i(!0),_(c,null,p(U.value,((e,l)=>(i(),m(G,{key:l,title:`${e.title}`,"badge-props":e.badgeProps},{default:f((()=>[r(B,{class:"content"},{default:f((()=>[v(g(e.title)+"徽标",1)])),_:2},1024)])),_:2},1032,["title","badge-props"])))),128))])),_:1},8,["modelValue"])])),_:1}),r(M,{title:"自动调整底部条宽度",transparent:""},{default:f((()=>[r(H,{modelValue:x.value,"onUpdate:modelValue":u[4]||(u[4]=e=>x.value=e),onChange:L,"auto-line-width":""},{default:f((()=>[(i(!0),_(c,null,p($.value,(e=>(i(),m(G,{key:e,title:`${e}`,name:e},{default:f((()=>[r(B,{class:"content"},{default:f((()=>[v("内容"+g(x.value),1)])),_:1})])),_:2},1032,["title","name"])))),128))])),_:1},8,["modelValue"])])),_:1}),r(M,{title:"粘性布局",transparent:""},{default:f((()=>[r(H,{modelValue:P.value,"onUpdate:modelValue":u[5]||(u[5]=e=>P.value=e),sticky:"",onChange:L},{default:f((()=>[(i(),_(c,null,p(4,(e=>r(G,{key:e,title:`标签${e}`},{default:f((()=>[r(B,{class:"content"},{default:f((()=>[v("内容"+g(P.value+1),1)])),_:1})])),_:2},1032,["title"]))),64))])),_:1},8,["modelValue"])])),_:1}),r(M,{title:"禁用tab",transparent:""},{default:f((()=>[r(H,{modelValue:D.value,"onUpdate:modelValue":u[6]||(u[6]=e=>D.value=e),onChange:L},{default:f((()=>[(i(),_(c,null,p(4,(e=>r(G,{key:e,title:`标签${e}`,disabled:1===e},{default:f((()=>[r(B,{class:"content"},{default:f((()=>[v("内容"+g(D.value+1),1)])),_:1})])),_:2},1032,["title","disabled"]))),64))])),_:1},8,["modelValue"])])),_:1}),r(M,{title:"点击事件",transparent:""},{default:f((()=>[r(H,{modelValue:I.value,"onUpdate:modelValue":u[7]||(u[7]=e=>I.value=e),onClick:K,onChange:L},{default:f((()=>[(i(),_(c,null,p(4,(e=>r(G,{key:e,title:`标签${e}`},{default:f((()=>[r(B,{class:"content"},{default:f((()=>[v("内容"+g(I.value+1),1)])),_:1})])),_:2},1032,["title"]))),64))])),_:1},8,["modelValue"])])),_:1}),r(M,{title:"切换动画",transparent:""},{default:f((()=>[r(H,{modelValue:A.value,"onUpdate:modelValue":u[8]||(u[8]=e=>A.value=e),animated:"",onChange:L},{default:f((()=>[(i(),_(c,null,p(4,(e=>r(G,{key:e,title:`标签${e}`},{default:f((()=>[r(B,{class:"content"},{default:f((()=>[v("内容"+g(A.value+1),1)])),_:1})])),_:2},1032,["title"]))),64))])),_:1},8,["modelValue"])])),_:1}),r(M,{title:"手势滑动",transparent:""},{default:f((()=>[r(H,{modelValue:T.value,"onUpdate:modelValue":u[9]||(u[9]=e=>T.value=e),swipeable:"",animated:"",onChange:L},{default:f((()=>[(i(),_(c,null,p(4,(e=>r(G,{key:e,title:`标签${e}`},{default:f((()=>[r(B,{class:"content"},{default:f((()=>[v("内容"+g(T.value+1),1)])),_:1})])),_:2},1032,["title"]))),64))])),_:1},8,["modelValue"])])),_:1}),r(M,{title:"数量大于6时可滚动",transparent:""},{default:f((()=>[r(H,{modelValue:S.value,"onUpdate:modelValue":u[10]||(u[10]=e=>S.value=e),onChange:L},{default:f((()=>[(i(),_(c,null,p(7,(e=>r(G,{key:e,title:`标签${e}`},{default:f((()=>[r(B,{class:"content"},{default:f((()=>[v("内容"+g(S.value+1),1)])),_:1})])),_:2},1032,["title"]))),64))])),_:1},8,["modelValue"])])),_:1}),r(M,{title:"左对齐超出即可滚动",transparent:""},{default:f((()=>[r(H,{modelValue:E.value,"onUpdate:modelValue":u[11]||(u[11]=e=>E.value=e),slidable:"always",onChange:L},{default:f((()=>[(i(),_(c,null,p(5,(e=>r(G,{key:e,title:`超大标签${e}`},{default:f((()=>[r(B,{class:"content"},{default:f((()=>[v("内容"+g(E.value+1),1)])),_:1})])),_:2},1032,["title"]))),64))])),_:1},8,["modelValue"])])),_:1}),r(M,{title:"数量大于10时出现导航地图",transparent:""},{default:f((()=>[r(H,{modelValue:z.value,"onUpdate:modelValue":u[12]||(u[12]=e=>z.value=e),onChange:L,mapTitle:"全部"},{default:f((()=>[(i(),_(c,null,p(20,(e=>r(G,{key:e,title:`标签${e}`},{default:f((()=>[r(B,{class:"large"},{default:f((()=>[v("内容"+g(z.value+1),1)])),_:1})])),_:2},1032,["title"]))),64))])),_:1},8,["modelValue"])])),_:1}),r(M,{title:"在弹出框中使用",transparent:""},{default:f((()=>[r(B,{class:"section"},{default:f((()=>[r(J,{onClick:Z},{default:f((()=>[v("打开弹窗")])),_:1})])),_:1})])),_:1}),r(N,{modelValue:R.value,"onUpdate:modelValue":u[14]||(u[14]=e=>R.value=e),position:"bottom","safe-area-inset-bottom":"",onAfterEnter:q,closable:"","custom-style":"padding: 0 24rpx;"},{default:f((()=>[r(B,{class:"title"},{default:f((()=>[v("在弹出框中使用")])),_:1}),r(H,{modelValue:F.value,"onUpdate:modelValue":u[13]||(u[13]=e=>F.value=e),ref_key:"tabsRef",ref:W},{default:f((()=>[(i(!0),_(c,null,p(n.value,(e=>(i(),m(G,{key:e,title:`${e}`,name:e},{default:f((()=>[r(B,{class:"content"},{default:f((()=>[v("内容"+g(F.value),1)])),_:1})])),_:2},1032,["title","name"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])),_:1})}}}),[["__scopeId","data-v-6fd7d5a0"]]);export{w as default};
