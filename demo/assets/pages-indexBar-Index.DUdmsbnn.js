import{_ as e}from"./wui-search.CqcG-cNn.js";import{d as a,r as n,q as t,m as o,o as s,c as l,w as i,x as d,n as c,y as r,i as u,f as p,t as x,L as v,X as f,v as h,e as _,g as m,h as T,u as g,F as w,V as b,a6 as I,a9 as y,a as $,b as k,p as S}from"./index-ZLmWPcj7.js";import{f as C,z as j,l as B,g as H,I as V,J as M,t as F,b as Y,B as q,c as z,_ as A,a as D}from"./page-wraper.DRSg2Trj.js";import{u as E}from"./useChildren.Cu3CY4jX.js";import"./useTranslate.D675u6qD.js";const G={...C,index:j([String,Number])},J={sticky:B(!1)},L=Symbol("wui-index-bar"),N=Y(a({__name:"wui-index-anchor",props:G,setup(e,{expose:a}){const f=e,{parent:h}=H(L),_=n(`indexBar${V()}`),{proxy:m}=v(),T=n(0),g=t((()=>h&&h.props.sticky&&h.anchorState.activeIndex===f.index));return o((()=>{M(`#${_.value}`,!1,m).then((e=>{F(h)&&(T.value=Math.floor(e.top))}))})),a({top:T}),(e,a)=>{const n=u;return s(),l(n,{class:c(`wui-index-anchor ${g.value?"is-sticky":""} ${e.customClass}`),style:r(e.customStyle),id:_.value},{default:i((()=>[d(e.$slots,"default",{},(()=>[p(x(e.index),1)]),!0)])),_:3},8,["class","style","id"])}}}),[["__scopeId","data-v-027ddfdc"]]),P=Y(a({__name:"wui-index-bar",props:J,setup(e){const a=e,t=n(`indexBar${V()}`),{proxy:r}=v(),$=f({activeIndex:null}),{linkChildren:k,children:S}=E(L);k({props:a,anchorState:$}),h((()=>S),(e=>{e.length?F($.activeIndex)&&e.find((e=>e.index===$.activeIndex))||($.activeIndex=e[0].index):$.activeIndex=null}),{deep:!0,immediate:!0});const C=f({scrollTop:0,prevScrollTop:0,touching:!1});let j=0,B={offsetTop:0,indexHeight:24};function H(e){if(C.touching)return;const{detail:a}=e,n=Math.floor(a.scrollTop),t=S.find(((e,a)=>!F(S[a+1])||e.$.exposed.top.value-j<=n&&S[a+1].$.exposed.top.value-j>n));F(t)&&$.activeIndex!==t.index&&($.activeIndex=t.index),C.prevScrollTop=n}function Y(e){const a=e-B.offsetTop;let n=Math.floor(a/B.indexHeight);return n<0?n=0:n>S.length-1&&(n=S.length-1),S[n]}function z(){C.touching=!0}function A(e){const a=e.touches[0].pageY;$.activeIndex!==Y(a).index&&($.activeIndex=Y(a).index,G(Y(a).$.exposed.top.value-j))}function D(e){const a=e.changedTouches[0].pageY;$.activeIndex=Y(a).index,G(Y(a).$.exposed.top.value-j),q((()=>{C.touching=!1}))}function G(e){C.scrollTop===e?(C.scrollTop=C.prevScrollTop,y((()=>{C.scrollTop=e}))):C.scrollTop=e}return o((()=>{setTimeout((()=>{Promise.all([M(`#${t.value}`,!1,r),M(".wui-index-bar__sidebar",!1,r),M(".wui-index-bar__index",!1,r)]).then((([e,a,n])=>{j=e.top,B.offsetTop=a.top,B.indexHeight=n.height}))}),100)})),(e,a)=>{const n=I,o=u;return s(),l(o,{class:"wui-index-bar",id:t.value},{default:i((()=>[_(n,{scrollTop:C.scrollTop,"scroll-y":!0,class:"wui-index-bar__content",onScroll:H},{default:i((()=>[d(e.$slots,"default",{},void 0,!0)])),_:3},8,["scrollTop"]),_(o,{class:"wui-index-bar__sidebar",onTouchstart:b(z,["stop","prevent"]),onTouchmove:b(A,["stop","prevent"]),onTouchend:b(D,["stop","prevent"]),onTouchcancel:b(D,["stop","prevent"])},{default:i((()=>[(s(!0),m(w,null,T(g(S),(e=>(s(),l(o,{class:c(["wui-index-bar__index",{"is-active":e.index===$.activeIndex}]),key:e.index},{default:i((()=>[p(x(e.index),1)])),_:2},1032,["class"])))),128))])),_:1})])),_:3},8,["id"])}}}),[["__scopeId","data-v-62454782"]]),U=Y(a({__name:"Index",setup(a){const{show:t}=z();o((()=>{p()}));const d=n(""),c=n([]),r=[{index:"A",data:["阿坝","阿拉善","阿里","安康","安庆","鞍山","安顺","安阳","澳门"]},{index:"B",data:["北京","白银","保定","宝鸡","保山","包头","巴中","北海","蚌埠","本溪","毕节","滨州","百色","亳州"]},{index:"C",data:["重庆","成都","长沙","长春","沧州","常德","昌都","长治","常州","巢湖","潮州","承德","郴州","赤峰","池州","崇左","楚雄","滁州","朝阳"]},{index:"D",data:["大连","东莞","大理","丹东","大庆","大同","大兴安岭","德宏","德阳","德州","定西","迪庆","东营"]},{index:"E",data:["鄂尔多斯","恩施","鄂州"]},{index:"F",data:["福州","防城港","佛山","抚顺","抚州","阜新","阜阳"]},{index:"G",data:["广州","桂林","贵阳","甘南","赣州","甘孜","广安","广元","贵港","果洛"]},{index:"H",data:["杭州","哈尔滨","合肥","海口","呼和浩特","海北","海东","海南","海西","邯郸","汉中","鹤壁","河池","鹤岗","黑河","衡水","衡阳","河源","贺州","红河","淮安","淮北","怀化","淮南","黄冈","黄南","黄山","黄石","惠州","葫芦岛","呼伦贝尔","湖州","菏泽"]}];function p(){c.value=[],y((()=>{d.value?c.value=r.filter((e=>e.data.some((e=>e.includes(d.value))))):c.value=r}))}function x(){d.value="",p()}return(a,n)=>{const o=$(k("wui-search"),e),r=$(k("wui-index-anchor"),N),v=$(k("wui-cell"),A),f=u,h=$(k("wui-index-bar"),P),g=$(k("page-wraper"),D);return s(),l(g,null,{default:i((()=>[_(o,{"hide-cancel":"",placeholder:"我要去哪里？",modelValue:d.value,"onUpdate:modelValue":n[0]||(n[0]=e=>d.value=e),onSearch:p,onClear:x},null,8,["modelValue"]),_(f,{class:"wraper"},{default:i((()=>[c.value.length?(s(),l(h,{key:0,sticky:""},{default:i((()=>[(s(!0),m(w,null,T(c.value,(e=>(s(),l(f,{key:e.index},{default:i((()=>[_(r,{index:e.index},null,8,["index"]),(s(!0),m(w,null,T(e.data,(a=>(s(),l(v,{border:"",clickable:"",key:a,title:a,onClick:n=>function(e,a){t(`当前点击项：${e}，城市：${a}`)}(e.index,a)},null,8,["title","onClick"])))),128))])),_:2},1024)))),128))])),_:1})):S("",!0)])),_:1})])),_:1})}}}),[["__scopeId","data-v-0b90506d"]]);export{U as default};
