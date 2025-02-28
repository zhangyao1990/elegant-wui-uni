import{_ as e}from"./wui-button.BxzuRTK_.js";import{d as l,r as a,H as t,c as o,z as s,v as u,a as n,g as d,w as i,h as r,i as m,s as c,A as p,D as f,k as v,t as _,B as y,Z as b,n as g,F as w,M as V,u as h,e as x,f as k,p as C}from"./index-C9W9llSX.js";import{_ as $}from"./demo-block.CQ-UumbW.js";import{c as S,m as A,k as U,l as E,v as I,E as j,d as B,e as M,o as N,a2 as D,M as F,p as H,n as T,y as G,Y as P,b as Q,a as z,X as O,f as X,_ as Y}from"./page-wraper.BAAFjrch.js";import{u as Z}from"./useChildren.B38JgdGT.js";import{u as q}from"./useTranslate.Dk0WeNHw.js";const J=Symbol("wui-collapse"),K={...S,customMoreSlotClass:E(""),modelValue:{type:[String,Array,Boolean]},accordion:U(!1),viewmore:U(!1),useMoreSlot:U(!1),lineNum:A(2)},L=z(l({name:"wui-collapse-item",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...S,customBodyClass:E(""),customBodyStyle:E(""),title:E(""),disabled:U(!1),name:I(String),beforeExpend:Function},setup(e,{expose:l}){const b=a(`collapseId${j()}`),g=e,{parent:w,index:V}=B(J),h=a(""),x=a(!1),k=a(!1),{proxy:C}=t(),$=o((()=>0===V.value)),S=o((()=>{const e={};return x.value&&(e.transition="height 0.3s ease-in-out"),k.value?h.value&&(e.height=M(h.value)):e.height="0px",N(e)})),A=o((()=>{const e=w&&(null==w?void 0:w.props.modelValue)||[],{name:l}=g;return D(e)&&e===l||F(e)&&e.indexOf(l)>=0}));async function U(e=!0){try{e&&await new Promise(((e,l)=>{const{name:a}=g;if(!k.value&&g.beforeExpend){const t=g.beforeExpend(a);t||l(),P(t)?t.then((()=>e())).catch(l):e()}else e()})),H(`#${b.value}`,!1,C).then((async e=>{const{height:l}=e;h.value=T(l)?Number(l):"",await G(),k.value=!!A.value,x.value||(x.value=!0)}))}catch(l){}}function E(){k.value&&(h.value="")}async function I(){if(!g.disabled)try{await U();const{name:e}=g;w&&w.toggle(e,!k.value)}catch(e){}}return s((()=>A.value),(e=>{U(e)})),u((()=>{U(A.value)})),l({getExpanded:function(){return k.value},updateExpand:U}),(e,l)=>{const a=f,t=m;return d(),n(t,{class:c(`wui-collapse-item ${e.disabled?"is-disabled":""} is-border ${e.customClass}`),style:y(e.customStyle)},{default:i((()=>[r(t,{class:c(`wui-collapse-item__header ${k.value?"is-expanded":""} ${$.value?"wui-collapse-item__header-first":""} ${e.$slots.title?"is-custom":""}`),onClick:I},{default:i((()=>[p(e.$slots,"title",{expanded:k.value,disabled:e.disabled,isFirst:$.value},(()=>[r(a,{class:"wui-collapse-item__title"},{default:i((()=>[v(_(e.title),1)])),_:1}),r(Q,{name:"arrow-down","custom-class":"wui-collapse-item__arrow "+(k.value?"is-retract":"")},null,8,["custom-class"])]),!0)])),_:3},8,["class"]),r(t,{class:"wui-collapse-item__wrapper",style:y(S.value),onTransitionend:E},{default:i((()=>[r(t,{class:c(["wui-collapse-item__body",e.customBodyClass]),style:y(e.customBodyStyle),id:b.value},{default:i((()=>[p(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style","id"])])),_:3},8,["style"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-8d59e41d"]]),R=z(l({name:"wui-collapse",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:K,emits:["change","update:modelValue"],setup(e,{expose:l,emit:t}){const o=e,u=t,{translate:f}=q("collapse"),v=a(0),{linkChildren:x,children:k}=Z(J);function C(e){u("update:modelValue",e),u("change",{value:e})}x({props:o,toggle:function(e,l){const{accordion:a,modelValue:t}=o;C(a?e===t?"":e:l?t.concat(e):t.filter((l=>l!==e)))}}),s((()=>o.modelValue),(e=>{const{viewmore:l,accordion:a}=o;a&&"string"!=typeof e?console.error("accordion value must be string"):a||l||F(e)||console.error("value must be Array")}),{deep:!0}),s((()=>o.lineNum),(e=>{e<=0&&console.error("lineNum must greater than 0")}),{deep:!0,immediate:!0}),b((()=>{const{lineNum:e,viewmore:l,modelValue:a}=o;v.value=l&&!a?e:0}));function $(){u("update:modelValue",!o.modelValue),u("change",{value:!o.modelValue})}return l({toggleAll:(e={})=>{if(o.accordion)return;O(e)&&(e={expanded:e});const{expanded:l,skipDisabled:a}=e,t=[];k.forEach(((e,o)=>{e.disabled&&a?e.$.exposed.getExpanded()&&t.push(e.name||o):(T(l)?l:!e.$.exposed.getExpanded())&&t.push(e.name||o)})),C(t)}}),(e,l)=>{const a=m;return d(),n(a,{class:c(`wui-collapse ${e.viewmore?"is-viewmore":""} ${e.customClass}`),style:y(e.customStyle)},{default:i((()=>[e.viewmore?(d(),n(a,{key:1},{default:i((()=>[r(a,{class:c(`wui-collapse__content ${e.modelValue?"":"is-retract"} `),style:y(`-webkit-line-clamp: ${v.value}; -webkit-box-orient: vertical`)},{default:i((()=>[p(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"]),r(a,{class:"wui-collapse__more",onClick:$},{default:i((()=>[e.useMoreSlot?(d(),n(a,{key:0,class:c(e.customMoreSlotClass)},{default:i((()=>[p(e.$slots,"more",{},void 0,!0)])),_:3},8,["class"])):(d(),g(w,{key:1},[V("span",{class:"wui-collapse__more-txt"},_(e.modelValue?h(f)("retract"):h(f)("expand")),1),r(a,{class:c("wui-collapse__arrow "+(e.modelValue?"is-retract":""))},{default:i((()=>[r(Q,{name:"arrow-down"})])),_:1},8,["class"])],64))])),_:3})])),_:3})):p(e.$slots,"default",{key:0},void 0,!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-7e0bbc6b"]]),W="如订单处于暂停状态，进入“我的订单”页面，找到要取消的订单，点击“取消订单”按钮；选择订单取消原因后，点击“下一步”提交申请即可。",ee=z(l({__name:"Index",setup(l){const t=X(),o=a([{title:"标签1",name:"item1",body:"如订单处于暂停状态，进入“我的订单”页面，找到要取消的订单，点击“取消订单”按钮；选择订单取消原因后，点击“下一步”提交申请即可。"},{title:"标签2",name:"item2",body:"一般情况下，买家只能向商户申请退款，商户确认可以退款后，可以通过接口或者商户平台向微信支付发起退款申请。",disabled:!0},{title:"标签3",name:"item3",body:"将收到的有质量问题的商品照片或者订单截图上传到微信公众账号（微信关注联华华商公众号），我们的工作人员会尽快帮您处理。"},{title:"标签4",name:"item4",body:"七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。"},{title:"标签5",name:"item5",body:"Q1:优惠券使用详情？详情页面【我的】-【我的优惠】-【优惠券规则说明】。"}]),s=a(),u=a(["item1"]),c=a("item1"),p=a(["item1"]),y=a(!1),b=a(!1),V=a(!1),h=a(["item1"]),S=a(!0),A=a(["0"]),U=a([["item1"],["item2"],["item3"],["item4"],["item5"]]);function E({value:e}){console.log(e)}function I({value:e}){console.log(e)}function j({value:e}){console.log(e)}function B({value:e}){console.log(e)}function M({value:e}){console.log(e)}function N({value:e}){console.log(e)}function D(e){const l=o.value.findIndex((l=>l.name===e));return l>-1&&(o.value[l].body="Q1:七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。"),new Promise(((e,l)=>{t.loading("加载中"),setTimeout((()=>{t.close(),e(!0)}),500)}))}return(l,a)=>{const t=x(k("wui-button"),e),F=x(k("demo-block"),$),H=x(k("wui-collapse-item"),L),T=x(k("wui-collapse"),R),G=f,P=m,Q=x(k("page-wraper"),Y);return d(),n(P,{class:"collapse"},{default:i((()=>[r(Q,null,{default:i((()=>[r(F,{title:"toggleAll"},{default:i((()=>[r(t,{"custom-class":"custom-button",type:"info",onClick:a[0]||(a[0]=e=>{var l;return null==(l=s.value)?void 0:l.toggleAll()})},{default:i((()=>[v("全部切换")])),_:1}),r(t,{"custom-class":"custom-button",type:"success",onClick:a[1]||(a[1]=e=>{var l;return null==(l=s.value)?void 0:l.toggleAll(!0)})},{default:i((()=>[v("全部展开")])),_:1}),r(t,{"custom-class":"custom-button",type:"primary",onClick:a[2]||(a[2]=e=>{var l;return null==(l=s.value)?void 0:l.toggleAll(!1)})},{default:i((()=>[v("全部收起")])),_:1}),r(t,{"custom-class":"custom-button",type:"warning",onClick:a[3]||(a[3]=e=>{var l;return null==(l=s.value)?void 0:l.toggleAll({skipDisabled:!0})})},{default:i((()=>[v("全部切换跳过禁用")])),_:1}),r(t,{"custom-class":"custom-button",type:"error",onClick:a[4]||(a[4]=e=>{var l;return null==(l=s.value)?void 0:l.toggleAll({expanded:!0,skipDisabled:!0})})},{default:i((()=>[v(" 全部选中跳过禁用 ")])),_:1})])),_:1}),r(F,{title:"基础用法",transparent:""},{default:i((()=>[r(T,{ref_key:"collapse",ref:s,modelValue:u.value,"onUpdate:modelValue":a[5]||(a[5]=e=>u.value=e),onChange:E},{default:i((()=>[(d(!0),g(w,null,C(o.value,((e,l)=>(d(),n(H,{disabled:e.disabled,"before-expend":2===l?D:void 0,key:l,title:e.title,name:e.name},{default:i((()=>[v(_(e.body),1)])),_:2},1032,["disabled","before-expend","title","name"])))),128))])),_:1},8,["modelValue"])])),_:1}),r(F,{title:"自定义title",transparent:""},{default:i((()=>[r(T,{modelValue:h.value,"onUpdate:modelValue":a[6]||(a[6]=e=>h.value=e)},{default:i((()=>[r(H,{name:"item1"},{title:i((({expanded:e})=>[r(P,{class:"header"},{default:i((()=>[r(G,{style:{color:"red"}},{default:i((()=>[v("通过 slot 自定义标题")])),_:1}),r(G,null,{default:i((()=>[v(_(e?"我展开了":"我已收起"),1)])),_:2},1024)])),_:2},1024)])),default:i((()=>[v(" "+_(W))])),_:1}),r(H,{name:"item2",disabled:""},{title:i((({expanded:e,disabled:l})=>[r(P,{class:"header"},{default:i((()=>[l?(d(),n(G,{key:0},{default:i((()=>[v("被禁用")])),_:1})):(d(),n(G,{key:1,style:{color:"red"}},{default:i((()=>[v("通过 slot 自定义 title")])),_:1})),r(G,null,{default:i((()=>[v(_(e?"我展开了":"我已收起"),1)])),_:2},1024)])),_:2},1024)])),default:i((()=>[v(" "+_(W))])),_:1})])),_:1},8,["modelValue"])])),_:1}),r(F,{title:"手风琴",transparent:""},{default:i((()=>[r(T,{modelValue:c.value,"onUpdate:modelValue":a[7]||(a[7]=e=>c.value=e),accordion:S.value,onChange:I},{default:i((()=>[r(H,{title:"标签1",name:"item1"},{default:i((()=>[v("这是一条简单的示例文字。")])),_:1}),r(H,{title:"标签2",name:"item2"},{default:i((()=>[v(" 这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。 ")])),_:1}),r(H,{title:"标签3",name:"item3"},{default:i((()=>[v("这是一条简单的示例文字。")])),_:1})])),_:1},8,["modelValue","accordion"])])),_:1}),r(F,{title:"禁用",transparent:""},{default:i((()=>[r(T,{modelValue:p.value,"onUpdate:modelValue":a[8]||(a[8]=e=>p.value=e),onChange:j},{default:i((()=>[r(H,{title:"标签1",name:"item1"},{default:i((()=>[v(" 这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。 ")])),_:1}),r(H,{title:"标签2",name:"item2",disabled:""},{default:i((()=>[v("这是一条简单的示例文字。")])),_:1}),r(H,{title:"标签3",name:"item3"},{default:i((()=>[v("这是一条简单的示例文字。")])),_:1})])),_:1},8,["modelValue"])])),_:1}),r(F,{title:"嵌套",transparent:""},{default:i((()=>[r(T,{modelValue:A.value,"onUpdate:modelValue":a[9]||(a[9]=e=>A.value=e),onChange:E},{default:i((()=>[(d(),g(w,null,C(5,(e=>r(H,{"custom-body-style":"padding:0 0 0 14px",key:e,title:`标签${e}`,name:`${e}`},{default:i((()=>[r(T,{modelValue:U.value[e-1],"onUpdate:modelValue":l=>U.value[e-1]=l},{default:i((()=>[(d(!0),g(w,null,C(o.value,((e,l)=>(d(),n(H,{"custom-class":0===l?"no-border":"",key:l,title:e.title,name:e.name},{default:i((()=>[v(_(e.body),1)])),_:2},1032,["custom-class","title","name"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1032,["title","name"]))),64))])),_:1},8,["modelValue"])])),_:1}),r(F,{title:"查看更多",transparent:""},{default:i((()=>[r(T,{viewmore:"",modelValue:y.value,"onUpdate:modelValue":a[10]||(a[10]=e=>y.value=e),onChange:B},{default:i((()=>[v(" 这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。 ")])),_:1},8,["modelValue"])])),_:1}),r(F,{title:"查看更多-行数显示设置",transparent:""},{default:i((()=>[r(T,{viewmore:"",modelValue:b.value,"onUpdate:modelValue":a[11]||(a[11]=e=>b.value=e),onChange:M,"line-num":3},{default:i((()=>[v(" 行数显示设置：这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。 ")])),_:1},8,["modelValue"])])),_:1}),r(F,{title:"查看更多-具名插槽",transparent:""},{default:i((()=>[r(T,{viewmore:"",modelValue:V.value,"onUpdate:modelValue":a[12]||(a[12]=e=>V.value=e),onChange:N,"use-more-slot":"","custom-more-slot-class":"more-slot"},{more:i((()=>[r(P,null,{default:i((()=>[v("显示全部")])),_:1})])),default:i((()=>[v(" 具名插槽：这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。 ")])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-d6c2039d"]]);export{ee as default};
