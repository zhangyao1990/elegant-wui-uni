import{f as e,i as l,l as a,m as t,z as o,I as s,g as u,J as n,t as d,B as i,h as r,o as m,r as c,a6 as p,w as f,b as v,c as _,d as g,a as b}from"./page-wraper.DRSg2Trj.js";import{d as w,r as y,q as V,v as h,m as x,o as k,c as C,w as $,e as S,x as U,n as I,y as j,i as E,f as A,t as N,L as M,j as F,S as T,g as B,aa as G,u as H,F as Q,a as q,b as z,h as D}from"./index-ZLmWPcj7.js";import{_ as J}from"./wui-button.CFbUOCHb.js";import{_ as L}from"./demo-block.YLy05Wjt.js";import{u as O}from"./useChildren.Cu3CY4jX.js";import{u as P}from"./useTranslate.D675u6qD.js";const K=Symbol("wui-collapse"),R={...e,customMoreSlotClass:l(""),modelValue:{type:[String,Array,Boolean]},accordion:a(!1),viewmore:a(!1),useMoreSlot:a(!1),lineNum:t(2)},W=v(w({name:"wui-collapse-item",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...e,title:l(""),disabled:a(!1),name:o(String),beforeExpend:Function},setup(e,{expose:l}){const a=y(`collapseId${s()}`),t=e,{parent:o,index:v}=u(K),_=y(""),g=y(!1),b=y(!1),{proxy:w}=M(),T=V((()=>0===v.value)),B=V((()=>{const e={};return g.value&&(e.transition="height 0.3s ease-in-out"),b.value?_.value&&(e.height=r(_.value)):e.height="0px",m(e)})),G=V((()=>o?o.props.modelValue:[]));function H(){return n(`#${a.value}`,!1,w).then((e=>{const{height:l}=e;_.value=d(l)?Number(l):"";const a=t.name;i((()=>{d(G.value)&&("string"==typeof G.value&&G.value===a||c(G.value)&&G.value.indexOf(a)>=0)?b.value=!0:b.value=!1,g.value||(g.value=!0)}))}))}function Q(){b.value&&(_.value="")}function q(){if(t.disabled)return;let e=t.name;if(!b.value)if(t.beforeExpend){const l=t.beforeExpend(e);if(!l)return;p(l)?l.then((()=>{o&&o.toggle(e,!b.value)})):o&&o.toggle(e,!b.value)}else o&&o.toggle(e,!b.value);else o&&o.toggle(e,!b.value)}return h((()=>G.value),(()=>{g.value&&H()}),{deep:!0,immediate:!0}),x((()=>{H()})),l({getExpanded:function(){return b.value}}),(e,l)=>{const t=F,o=E;return k(),C(o,{class:I(`wui-collapse-item ${e.disabled?"is-disabled":""} is-border ${e.customClass}`),style:j(e.customStyle)},{default:$((()=>[S(o,{class:I("wui-collapse-item__header  "+(T.value?"wui-collapse-item__header-first":"")),onClick:q},{default:$((()=>[U(e.$slots,"title",{expanded:b.value,disabled:e.disabled,isFirst:T.value},(()=>[S(t,{class:"wui-collapse-item__title"},{default:$((()=>[A(N(e.title),1)])),_:1}),S(f,{name:"arrow-down","custom-class":"wui-collapse-item__arrow "+(b.value?"is-retract":"")},null,8,["custom-class"])]),!0)])),_:3},8,["class"]),S(o,{class:"wui-collapse-item__wrapper",style:j(B.value),onTransitionend:Q},{default:$((()=>[S(o,{class:"wui-collapse-item__body",id:a.value},{default:$((()=>[U(e.$slots,"default",{},void 0,!0)])),_:3},8,["id"])])),_:3},8,["style"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-3bf670eb"]]),X=v(w({name:"wui-collapse",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:R,emits:["change","update:modelValue"],setup(e,{expose:l,emit:a}){const t=e,o=a,{translate:s}=P("collapse"),u=y(0),{linkChildren:n,children:i}=O(K);function r(e){o("update:modelValue",e),o("change",{value:e})}n({props:t,toggle:function(e,l){const{accordion:a,modelValue:o}=t;r(a?e===o?"":e:l?o.concat(e):o.filter((l=>l!==e)))}}),h((()=>t.modelValue),(e=>{const{viewmore:l,accordion:a}=t;a&&"string"!=typeof e?console.error("accordion value must be string"):a||l||c(e)||console.error("value must be Array")}),{deep:!0,immediate:!0}),h((()=>t.lineNum),(e=>{e<=0&&console.error("lineNum must greater than 0")}),{deep:!0,immediate:!0}),T((()=>{const{lineNum:e,viewmore:l,modelValue:a}=t;u.value=l&&!a?e:0}));function m(){o("update:modelValue",!t.modelValue),o("change",{value:!t.modelValue})}return l({toggleAll:(e={})=>{if(t.accordion)return;"boolean"==typeof e&&(e={expanded:e});const{expanded:l,skipDisabled:a}=e,o=[];i.forEach(((e,t)=>{e.disabled&&a?e.$.exposed.getExpanded()&&o.push(e.name||t):(d(l)?l:!e.$.exposed.getExpanded())&&o.push(e.name||t)})),r(o)}}),(e,l)=>{const a=E;return k(),C(a,{class:I(`wui-collapse ${e.viewmore?"is-viewmore":""} ${e.customClass}`),style:j(e.customStyle)},{default:$((()=>[e.viewmore?(k(),C(a,{key:1},{default:$((()=>[S(a,{class:I(`wui-collapse__content ${e.modelValue?"":"is-retract"} `),style:j(`-webkit-line-clamp: ${u.value}; -webkit-box-orient: vertical`)},{default:$((()=>[U(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"]),S(a,{class:"wui-collapse__more",onClick:m},{default:$((()=>[e.useMoreSlot?(k(),C(a,{key:0,class:I(e.customMoreSlotClass)},{default:$((()=>[U(e.$slots,"more",{},void 0,!0)])),_:3},8,["class"])):(k(),B(Q,{key:1},[G("span",{class:"wui-collapse__more-txt"},N(e.modelValue?H(s)("retract"):H(s)("expand")),1),S(a,{class:I("wui-collapse__arrow "+(e.modelValue?"is-retract":""))},{default:$((()=>[S(f,{name:"arrow-down"})])),_:1},8,["class"])],64))])),_:3})])),_:3})):U(e.$slots,"default",{key:0},void 0,!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-79f1154e"]]),Y="如订单处于暂停状态，进入“我的订单”页面，找到要取消的订单，点击“取消订单”按钮；选择订单取消原因后，点击“下一步”提交申请即可。",Z=v(w({__name:"Index",setup(e){const l=_(),a=y([{title:"标签1",name:"item1",body:"如订单处于暂停状态，进入“我的订单”页面，找到要取消的订单，点击“取消订单”按钮；选择订单取消原因后，点击“下一步”提交申请即可。"},{title:"标签2",name:"item2",body:"一般情况下，买家只能向商户申请退款，商户确认可以退款后，可以通过接口或者商户平台向微信支付发起退款申请。"},{title:"标签3",name:"item3",body:"将收到的有质量问题的商品照片或者订单截图上传到微信公众账号（微信关注联华华商公众号），我们的工作人员会尽快帮您处理。"},{title:"标签4",name:"item4",body:"七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。"},{title:"标签5",name:"item5",body:"Q1:优惠券使用详情？详情页面【我的】-【我的优惠】-【优惠券规则说明】。"}]),t=y(),o=y(["item1"]),s=y("item1"),u=y(["item1"]),n=y(!1),d=y(!1),i=y(!1),r=y(["item1"]),m=y(!0),c=y(["0"]),p=y([["item1"],["item2"],["item3"],["item4"],["item5"]]);function f({value:e}){console.log(e)}function v({value:e}){console.log(e)}function w({value:e}){console.log(e)}function V({value:e}){console.log(e)}function h({value:e}){console.log(e)}function x({value:e}){console.log(e)}function U(e){const t=a.value.findIndex((l=>l.name===e));return t>-1&&(a.value[t].body="Q1:七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。"),new Promise(((e,a)=>{l.loading("加载中"),setTimeout((()=>{l.close(),e(!0)}),500)}))}return(e,l)=>{const _=q(z("wui-toast"),g),y=q(z("wui-button"),J),I=q(z("demo-block"),L),j=q(z("wui-collapse-item"),W),M=q(z("wui-collapse"),X),T=F,G=E,H=q(z("page-wraper"),b);return k(),C(H,null,{default:$((()=>[S(_),S(I,{title:"toggleAll",transparent:""},{default:$((()=>[S(y,{onClick:l[0]||(l[0]=e=>{var l;return null==(l=t.value)?void 0:l.toggleAll()})},{default:$((()=>[A("toggleAll")])),_:1})])),_:1}),S(I,{title:"基础用法",transparent:""},{default:$((()=>[S(M,{ref_key:"collapse",ref:t,modelValue:o.value,"onUpdate:modelValue":l[1]||(l[1]=e=>o.value=e),onChange:f},{default:$((()=>[(k(!0),B(Q,null,D(a.value,((e,l)=>(k(),C(j,{"before-expend":2===l?U:void 0,key:l,title:e.title,name:e.name},{default:$((()=>[A(N(e.body),1)])),_:2},1032,["before-expend","title","name"])))),128))])),_:1},8,["modelValue"])])),_:1}),S(I,{title:"自定义title",transparent:""},{default:$((()=>[S(M,{modelValue:r.value,"onUpdate:modelValue":l[2]||(l[2]=e=>r.value=e)},{default:$((()=>[S(j,{name:"item1"},{title:$((({expanded:e})=>[S(T,{style:{color:"red"}},{default:$((()=>[A("通过 slot 自定义标题")])),_:1}),S(T,null,{default:$((()=>[A(N(e?"我展开了":"我已收起"),1)])),_:2},1024)])),default:$((()=>[A(" "+N(Y))])),_:1}),S(j,{name:"item2",disabled:""},{title:$((({expanded:e,disabled:l})=>[l?(k(),C(T,{key:0},{default:$((()=>[A("被禁用")])),_:1})):(k(),C(T,{key:1,style:{color:"red"}},{default:$((()=>[A("通过 slot 自定义 title")])),_:1})),S(T,null,{default:$((()=>[A(N(e?"我展开了":"我已收起"),1)])),_:2},1024)])),default:$((()=>[A(" "+N(Y))])),_:1})])),_:1},8,["modelValue"])])),_:1}),S(I,{title:"手风琴",transparent:""},{default:$((()=>[S(M,{modelValue:s.value,"onUpdate:modelValue":l[3]||(l[3]=e=>s.value=e),accordion:m.value,onChange:v},{default:$((()=>[S(j,{title:"标签1",name:"item1"},{default:$((()=>[A("这是一条简单的示例文字。")])),_:1}),S(j,{title:"标签2",name:"item2"},{default:$((()=>[A(" 这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。 ")])),_:1}),S(j,{title:"标签3",name:"item3"},{default:$((()=>[A("这是一条简单的示例文字。")])),_:1})])),_:1},8,["modelValue","accordion"])])),_:1}),S(I,{title:"禁用",transparent:""},{default:$((()=>[S(M,{modelValue:u.value,"onUpdate:modelValue":l[4]||(l[4]=e=>u.value=e),onChange:w},{default:$((()=>[S(j,{title:"标签1",name:"item1"},{default:$((()=>[A(" 这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。 ")])),_:1}),S(j,{title:"标签2",name:"item2",disabled:""},{default:$((()=>[A("这是一条简单的示例文字。")])),_:1}),S(j,{title:"标签3",name:"item3"},{default:$((()=>[A("这是一条简单的示例文字。")])),_:1})])),_:1},8,["modelValue"])])),_:1}),S(I,{title:"嵌套",transparent:""},{default:$((()=>[S(M,{modelValue:c.value,"onUpdate:modelValue":l[5]||(l[5]=e=>c.value=e),onChange:f},{default:$((()=>[(k(),B(Q,null,D(5,(e=>S(j,{key:e,title:`标签${e}`,name:`${e}`},{default:$((()=>[S(M,{modelValue:p.value[e-1],"onUpdate:modelValue":l=>p.value[e-1]=l},{default:$((()=>[(k(!0),B(Q,null,D(a.value,((e,l)=>(k(),C(j,{key:l,title:e.title,name:e.name},{default:$((()=>[A(N(e.body),1)])),_:2},1032,["title","name"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1032,["title","name"]))),64))])),_:1},8,["modelValue"])])),_:1}),S(I,{title:"查看更多",transparent:""},{default:$((()=>[S(M,{viewmore:"",modelValue:n.value,"onUpdate:modelValue":l[6]||(l[6]=e=>n.value=e),onChange:V},{default:$((()=>[A(" 这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。 ")])),_:1},8,["modelValue"])])),_:1}),S(I,{title:"查看更多-行数显示设置",transparent:""},{default:$((()=>[S(M,{viewmore:"",modelValue:d.value,"onUpdate:modelValue":l[7]||(l[7]=e=>d.value=e),onChange:h,"line-num":3},{default:$((()=>[A(" 行数显示设置：这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。 ")])),_:1},8,["modelValue"])])),_:1}),S(I,{title:"查看更多-具名插槽",transparent:""},{default:$((()=>[S(M,{viewmore:"",modelValue:i.value,"onUpdate:modelValue":l[8]||(l[8]=e=>i.value=e),onChange:x,"use-more-slot":"","custom-more-slot-class":"more-slot"},{more:$((()=>[S(G,null,{default:$((()=>[A("显示全部")])),_:1})])),default:$((()=>[A(" 具名插槽：这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。 ")])),_:1},8,["modelValue"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-30d3a08a"]]);export{Z as default};
