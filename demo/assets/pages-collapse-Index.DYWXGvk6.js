import{_ as e}from"./wui-button.D-2fgW8t.js";import{d as l,r as a,q as t,v as o,m as s,o as u,c as n,w as d,e as i,x as r,n as m,y as c,i as p,f,t as v,M as _,j as y,T as b,g,ae as w,u as V,F as h,a as x,b as k,h as C}from"./index-Dr4mJiuc.js";import{_ as $}from"./demo-block.DQEtA4yj.js";import{f as S,i as U,n as A,m as I,S as E,I as j,g as B,J as M,r as N,t as T,T as D,h as F,o as G,Y as H,s as P,w as Q,b as q,a0 as J,c as O,a as Y}from"./page-wraper.DKh8GSae.js";import{u as z}from"./useChildren.sgdd5yxK.js";import{u as K}from"./useTranslate.lVjJraGZ.js";const L=Symbol("wui-collapse"),R={...S,customMoreSlotClass:U(""),modelValue:{type:[String,Array,Boolean]},accordion:A(!1),viewmore:A(!1),useMoreSlot:A(!1),lineNum:I(2)},W=q(l({name:"wui-collapse-item",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...S,customBodyClass:U(""),customBodyStyle:U(""),title:U(""),disabled:A(!1),name:E(String),beforeExpend:Function},setup(e,{expose:l}){const b=a(`collapseId${j()}`),g=e,{parent:w,index:V}=B(L),h=a(""),x=a(!1),k=a(!1),{proxy:C}=_(),$=t((()=>0===V.value)),S=t((()=>{const e={};return x.value&&(e.transition="height 0.3s ease-in-out"),k.value?h.value&&(e.height=F(h.value)):e.height="0px",G(e)})),U=t((()=>{const e=w&&(null==w?void 0:w.props.modelValue)||[],{name:l}=g;return H(e)&&e===l||P(e)&&e.indexOf(l)>=0}));async function A(e=!0){try{e&&await new Promise(((e,l)=>{const{name:a}=g;if(!k.value&&g.beforeExpend){const t=g.beforeExpend(a);t||l(),D(t)?t.then((()=>e())).catch(l):e()}else e()})),M(`#${b.value}`,!1,C).then((async e=>{const{height:l}=e;h.value=N(l)?Number(l):"",await T(),k.value=!!U.value,x.value||(x.value=!0)}))}catch(l){}}function I(){k.value&&(h.value="")}async function E(){if(!g.disabled)try{await A();const{name:e}=g;w&&w.toggle(e,!k.value)}catch(e){}}return o((()=>U.value),(e=>{A(e)})),s((()=>{A(U.value)})),l({getExpanded:function(){return k.value},updateExpand:A}),(e,l)=>{const a=y,t=p;return u(),n(t,{class:m(`wui-collapse-item ${e.disabled?"is-disabled":""} is-border ${e.customClass}`),style:c(e.customStyle)},{default:d((()=>[i(t,{class:m(`wui-collapse-item__header ${k.value?"is-expanded":""} ${$.value?"wui-collapse-item__header-first":""} ${e.$slots.title?"is-custom":""}`),onClick:E},{default:d((()=>[r(e.$slots,"title",{expanded:k.value,disabled:e.disabled,isFirst:$.value},(()=>[i(a,{class:"wui-collapse-item__title"},{default:d((()=>[f(v(e.title),1)])),_:1}),i(Q,{name:"arrow-down","custom-class":"wui-collapse-item__arrow "+(k.value?"is-retract":"")},null,8,["custom-class"])]),!0)])),_:3},8,["class"]),i(t,{class:"wui-collapse-item__wrapper",style:c(S.value),onTransitionend:I},{default:d((()=>[i(t,{class:m(["wui-collapse-item__body",e.customBodyClass]),style:c(e.customBodyStyle),id:b.value},{default:d((()=>[r(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style","id"])])),_:3},8,["style"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-8d59e41d"]]),X=q(l({name:"wui-collapse",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:R,emits:["change","update:modelValue"],setup(e,{expose:l,emit:t}){const s=e,f=t,{translate:_}=K("collapse"),y=a(0),{linkChildren:x,children:k}=z(L);function C(e){f("update:modelValue",e),f("change",{value:e})}x({props:s,toggle:function(e,l){const{accordion:a,modelValue:t}=s;C(a?e===t?"":e:l?t.concat(e):t.filter((l=>l!==e)))}}),o((()=>s.modelValue),(e=>{const{viewmore:l,accordion:a}=s;a&&"string"!=typeof e?console.error("accordion value must be string"):a||l||P(e)||console.error("value must be Array")}),{deep:!0}),o((()=>s.lineNum),(e=>{e<=0&&console.error("lineNum must greater than 0")}),{deep:!0,immediate:!0}),b((()=>{const{lineNum:e,viewmore:l,modelValue:a}=s;y.value=l&&!a?e:0}));function $(){f("update:modelValue",!s.modelValue),f("change",{value:!s.modelValue})}return l({toggleAll:(e={})=>{if(s.accordion)return;J(e)&&(e={expanded:e});const{expanded:l,skipDisabled:a}=e,t=[];k.forEach(((e,o)=>{e.disabled&&a?e.$.exposed.getExpanded()&&t.push(e.name||o):(N(l)?l:!e.$.exposed.getExpanded())&&t.push(e.name||o)})),C(t)}}),(e,l)=>{const a=p;return u(),n(a,{class:m(`wui-collapse ${e.viewmore?"is-viewmore":""} ${e.customClass}`),style:c(e.customStyle)},{default:d((()=>[e.viewmore?(u(),n(a,{key:1},{default:d((()=>[i(a,{class:m(`wui-collapse__content ${e.modelValue?"":"is-retract"} `),style:c(`-webkit-line-clamp: ${y.value}; -webkit-box-orient: vertical`)},{default:d((()=>[r(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"]),i(a,{class:"wui-collapse__more",onClick:$},{default:d((()=>[e.useMoreSlot?(u(),n(a,{key:0,class:m(e.customMoreSlotClass)},{default:d((()=>[r(e.$slots,"more",{},void 0,!0)])),_:3},8,["class"])):(u(),g(h,{key:1},[w("span",{class:"wui-collapse__more-txt"},v(e.modelValue?V(_)("retract"):V(_)("expand")),1),i(a,{class:m("wui-collapse__arrow "+(e.modelValue?"is-retract":""))},{default:d((()=>[i(Q,{name:"arrow-down"})])),_:1},8,["class"])],64))])),_:3})])),_:3})):r(e.$slots,"default",{key:0},void 0,!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-7e0bbc6b"]]),Z="如订单处于暂停状态，进入“我的订单”页面，找到要取消的订单，点击“取消订单”按钮；选择订单取消原因后，点击“下一步”提交申请即可。",ee=q(l({__name:"Index",setup(l){const t=O(),o=a([{title:"标签1",name:"item1",body:"如订单处于暂停状态，进入“我的订单”页面，找到要取消的订单，点击“取消订单”按钮；选择订单取消原因后，点击“下一步”提交申请即可。"},{title:"标签2",name:"item2",body:"一般情况下，买家只能向商户申请退款，商户确认可以退款后，可以通过接口或者商户平台向微信支付发起退款申请。",disabled:!0},{title:"标签3",name:"item3",body:"将收到的有质量问题的商品照片或者订单截图上传到微信公众账号（微信关注联华华商公众号），我们的工作人员会尽快帮您处理。"},{title:"标签4",name:"item4",body:"七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。"},{title:"标签5",name:"item5",body:"Q1:优惠券使用详情？详情页面【我的】-【我的优惠】-【优惠券规则说明】。"}]),s=a(),r=a(["item1"]),m=a("item1"),c=a(["item1"]),_=a(!1),b=a(!1),w=a(!1),V=a(["item1"]),S=a(!0),U=a(["0"]),A=a([["item1"],["item2"],["item3"],["item4"],["item5"]]);function I({value:e}){console.log(e)}function E({value:e}){console.log(e)}function j({value:e}){console.log(e)}function B({value:e}){console.log(e)}function M({value:e}){console.log(e)}function N({value:e}){console.log(e)}function T(e){const l=o.value.findIndex((l=>l.name===e));return l>-1&&(o.value[l].body="Q1:七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。"),new Promise(((e,l)=>{t.loading("加载中"),setTimeout((()=>{t.close(),e(!0)}),500)}))}return(l,a)=>{const t=x(k("wui-button"),e),D=x(k("demo-block"),$),F=x(k("wui-collapse-item"),W),G=x(k("wui-collapse"),X),H=y,P=p,Q=x(k("page-wraper"),Y);return u(),n(P,{class:"collapse"},{default:d((()=>[i(Q,null,{default:d((()=>[i(D,{title:"toggleAll"},{default:d((()=>[i(t,{"custom-class":"custom-button",type:"info",onClick:a[0]||(a[0]=e=>{var l;return null==(l=s.value)?void 0:l.toggleAll()})},{default:d((()=>[f("全部切换")])),_:1}),i(t,{"custom-class":"custom-button",type:"success",onClick:a[1]||(a[1]=e=>{var l;return null==(l=s.value)?void 0:l.toggleAll(!0)})},{default:d((()=>[f("全部展开")])),_:1}),i(t,{"custom-class":"custom-button",type:"primary",onClick:a[2]||(a[2]=e=>{var l;return null==(l=s.value)?void 0:l.toggleAll(!1)})},{default:d((()=>[f("全部收起")])),_:1}),i(t,{"custom-class":"custom-button",type:"warning",onClick:a[3]||(a[3]=e=>{var l;return null==(l=s.value)?void 0:l.toggleAll({skipDisabled:!0})})},{default:d((()=>[f("全部切换跳过禁用")])),_:1}),i(t,{"custom-class":"custom-button",type:"error",onClick:a[4]||(a[4]=e=>{var l;return null==(l=s.value)?void 0:l.toggleAll({expanded:!0,skipDisabled:!0})})},{default:d((()=>[f(" 全部选中跳过禁用 ")])),_:1})])),_:1}),i(D,{title:"基础用法",transparent:""},{default:d((()=>[i(G,{ref_key:"collapse",ref:s,modelValue:r.value,"onUpdate:modelValue":a[5]||(a[5]=e=>r.value=e),onChange:I},{default:d((()=>[(u(!0),g(h,null,C(o.value,((e,l)=>(u(),n(F,{disabled:e.disabled,"before-expend":2===l?T:void 0,key:l,title:e.title,name:e.name},{default:d((()=>[f(v(e.body),1)])),_:2},1032,["disabled","before-expend","title","name"])))),128))])),_:1},8,["modelValue"])])),_:1}),i(D,{title:"自定义title",transparent:""},{default:d((()=>[i(G,{modelValue:V.value,"onUpdate:modelValue":a[6]||(a[6]=e=>V.value=e)},{default:d((()=>[i(F,{name:"item1"},{title:d((({expanded:e})=>[i(P,{class:"header"},{default:d((()=>[i(H,{style:{color:"red"}},{default:d((()=>[f("通过 slot 自定义标题")])),_:1}),i(H,null,{default:d((()=>[f(v(e?"我展开了":"我已收起"),1)])),_:2},1024)])),_:2},1024)])),default:d((()=>[f(" "+v(Z))])),_:1}),i(F,{name:"item2",disabled:""},{title:d((({expanded:e,disabled:l})=>[i(P,{class:"header"},{default:d((()=>[l?(u(),n(H,{key:0},{default:d((()=>[f("被禁用")])),_:1})):(u(),n(H,{key:1,style:{color:"red"}},{default:d((()=>[f("通过 slot 自定义 title")])),_:1})),i(H,null,{default:d((()=>[f(v(e?"我展开了":"我已收起"),1)])),_:2},1024)])),_:2},1024)])),default:d((()=>[f(" "+v(Z))])),_:1})])),_:1},8,["modelValue"])])),_:1}),i(D,{title:"手风琴",transparent:""},{default:d((()=>[i(G,{modelValue:m.value,"onUpdate:modelValue":a[7]||(a[7]=e=>m.value=e),accordion:S.value,onChange:E},{default:d((()=>[i(F,{title:"标签1",name:"item1"},{default:d((()=>[f("这是一条简单的示例文字。")])),_:1}),i(F,{title:"标签2",name:"item2"},{default:d((()=>[f(" 这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。 ")])),_:1}),i(F,{title:"标签3",name:"item3"},{default:d((()=>[f("这是一条简单的示例文字。")])),_:1})])),_:1},8,["modelValue","accordion"])])),_:1}),i(D,{title:"禁用",transparent:""},{default:d((()=>[i(G,{modelValue:c.value,"onUpdate:modelValue":a[8]||(a[8]=e=>c.value=e),onChange:j},{default:d((()=>[i(F,{title:"标签1",name:"item1"},{default:d((()=>[f(" 这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。 ")])),_:1}),i(F,{title:"标签2",name:"item2",disabled:""},{default:d((()=>[f("这是一条简单的示例文字。")])),_:1}),i(F,{title:"标签3",name:"item3"},{default:d((()=>[f("这是一条简单的示例文字。")])),_:1})])),_:1},8,["modelValue"])])),_:1}),i(D,{title:"嵌套",transparent:""},{default:d((()=>[i(G,{modelValue:U.value,"onUpdate:modelValue":a[9]||(a[9]=e=>U.value=e),onChange:I},{default:d((()=>[(u(),g(h,null,C(5,(e=>i(F,{"custom-body-style":"padding:0 0 0 14px",key:e,title:`标签${e}`,name:`${e}`},{default:d((()=>[i(G,{modelValue:A.value[e-1],"onUpdate:modelValue":l=>A.value[e-1]=l},{default:d((()=>[(u(!0),g(h,null,C(o.value,((e,l)=>(u(),n(F,{"custom-class":0===l?"no-border":"",key:l,title:e.title,name:e.name},{default:d((()=>[f(v(e.body),1)])),_:2},1032,["custom-class","title","name"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1032,["title","name"]))),64))])),_:1},8,["modelValue"])])),_:1}),i(D,{title:"查看更多",transparent:""},{default:d((()=>[i(G,{viewmore:"",modelValue:_.value,"onUpdate:modelValue":a[10]||(a[10]=e=>_.value=e),onChange:B},{default:d((()=>[f(" 这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。 ")])),_:1},8,["modelValue"])])),_:1}),i(D,{title:"查看更多-行数显示设置",transparent:""},{default:d((()=>[i(G,{viewmore:"",modelValue:b.value,"onUpdate:modelValue":a[11]||(a[11]=e=>b.value=e),onChange:M,"line-num":3},{default:d((()=>[f(" 行数显示设置：这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。 ")])),_:1},8,["modelValue"])])),_:1}),i(D,{title:"查看更多-具名插槽",transparent:""},{default:d((()=>[i(G,{viewmore:"",modelValue:w.value,"onUpdate:modelValue":a[12]||(a[12]=e=>w.value=e),onChange:N,"use-more-slot":"","custom-more-slot-class":"more-slot"},{more:d((()=>[i(P,null,{default:d((()=>[f("显示全部")])),_:1})])),default:d((()=>[f(" 具名插槽：这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。 ")])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-e48baec2"]]);export{ee as default};
