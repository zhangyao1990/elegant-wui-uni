import{_ as e}from"./wui-search.B9tsxw_G.js";import{d as a,r as n,c as t,s,e as o,f as l,w as i,z as d,p as c,A as r,k as u,h as p,t as x,N as v,Z as f,y as h,g as _,l as m,m as T,u as w,F as b,X as g,ac as y,ab as I,a as $,b as k,v as S}from"./index-B1zkhFT1.js";import{f as C,S as j,n as H,g as B,I as M,J as V,r as A,a as F,t as N,c as Y,b as q,_ as z}from"./page-wraper.D5sIAHqb.js";import{u as D}from"./useChildren.COqmfdId.js";import"./useTranslate.BDowZoYF.js";const E={...C,index:j([String,Number])},G={sticky:H(!1)},J=Symbol("wui-index-bar"),P=F(a({__name:"wui-index-anchor",props:E,setup(e,{expose:a}){const f=e,{parent:h}=B(J),_=n(`indexBar${M()}`),{proxy:m}=v(),T=n(0),w=t((()=>h&&h.props.sticky&&h.anchorState.activeIndex===f.index));return s((()=>{V(`#${_.value}`,!1,m).then((e=>{A(h)&&(T.value=Math.floor(e.top))}))})),a({top:T}),(e,a)=>{const n=u;return o(),l(n,{class:c(`wui-index-anchor ${w.value?"is-sticky":""} ${e.customClass}`),style:r(e.customStyle),id:_.value},{default:i((()=>[d(e.$slots,"default",{},(()=>[p(x(e.index),1)]),!0)])),_:3},8,["class","style","id"])}}}),[["__scopeId","data-v-027ddfdc"]]),U=F(a({__name:"wui-index-bar",props:G,setup(e){const a=e,t=n(`indexBar${M()}`),{proxy:r}=v(),$=f({activeIndex:null}),{linkChildren:k,children:S}=D(J);k({props:a,anchorState:$}),h((()=>S),(e=>{e.length?A($.activeIndex)&&e.find((e=>e.index===$.activeIndex))||($.activeIndex=e[0].index):$.activeIndex=null}),{deep:!0,immediate:!0});const C=f({scrollTop:0,prevScrollTop:0,touching:!1});let j=0,H={offsetTop:0,indexHeight:24};function B(e){if(C.touching)return;const{detail:a}=e,n=Math.floor(a.scrollTop),t=S.find(((e,a)=>!A(S[a+1])||e.$.exposed.top.value-j<=n&&S[a+1].$.exposed.top.value-j>n));A(t)&&$.activeIndex!==t.index&&($.activeIndex=t.index),C.prevScrollTop=n}function F(e){const a=e-H.offsetTop;let n=Math.floor(a/H.indexHeight);return n<0?n=0:n>S.length-1&&(n=S.length-1),S[n]}function Y(){C.touching=!0}function q(e){const a=e.touches[0].pageY;$.activeIndex!==F(a).index&&($.activeIndex=F(a).index,E(F(a).$.exposed.top.value-j))}async function z(e){const a=e.changedTouches[0].pageY;$.activeIndex=F(a).index,E(F(a).$.exposed.top.value-j),await N(),C.touching=!1}function E(e){C.scrollTop===e?(C.scrollTop=C.prevScrollTop,I((()=>{C.scrollTop=e}))):C.scrollTop=e}return s((()=>{setTimeout((()=>{Promise.all([V(`#${t.value}`,!1,r),V(".wui-index-bar__sidebar",!1,r),V(".wui-index-bar__index",!1,r)]).then((([e,a,n])=>{j=e.top,H.offsetTop=a.top,H.indexHeight=n.height}))}),100)})),(e,a)=>{const n=y,s=u;return o(),l(s,{class:"wui-index-bar",id:t.value},{default:i((()=>[_(n,{scrollTop:C.scrollTop,"scroll-y":!0,class:"wui-index-bar__content",onScroll:B},{default:i((()=>[d(e.$slots,"default",{},void 0,!0)])),_:3},8,["scrollTop"]),_(s,{class:"wui-index-bar__sidebar",onTouchstart:g(Y,["stop","prevent"]),onTouchmove:g(q,["stop","prevent"]),onTouchend:g(z,["stop","prevent"]),onTouchcancel:g(z,["stop","prevent"])},{default:i((()=>[(o(!0),m(b,null,T(w(S),(e=>(o(),l(s,{class:c(["wui-index-bar__index",{"is-active":e.index===$.activeIndex}]),key:e.index},{default:i((()=>[p(x(e.index),1)])),_:2},1032,["class"])))),128))])),_:1})])),_:3},8,["id"])}}}),[["__scopeId","data-v-2b77ef80"]]),X=F(a({__name:"Index",setup(a){const{show:t}=Y();s((()=>{p()}));const d=n(""),c=n([]),r=[{index:"A",data:["阿坝","阿拉善","阿里","安康","安庆","鞍山","安顺","安阳","澳门"]},{index:"B",data:["北京","白银","保定","宝鸡","保山","包头","巴中","北海","蚌埠","本溪","毕节","滨州","百色","亳州"]},{index:"C",data:["重庆","成都","长沙","长春","沧州","常德","昌都","长治","常州","巢湖","潮州","承德","郴州","赤峰","池州","崇左","楚雄","滁州","朝阳"]},{index:"D",data:["大连","东莞","大理","丹东","大庆","大同","大兴安岭","德宏","德阳","德州","定西","迪庆","东营"]},{index:"E",data:["鄂尔多斯","恩施","鄂州"]},{index:"F",data:["福州","防城港","佛山","抚顺","抚州","阜新","阜阳"]},{index:"G",data:["广州","桂林","贵阳","甘南","赣州","甘孜","广安","广元","贵港","果洛"]},{index:"H",data:["杭州","哈尔滨","合肥","海口","呼和浩特","海北","海东","海南","海西","邯郸","汉中","鹤壁","河池","鹤岗","黑河","衡水","衡阳","河源","贺州","红河","淮安","淮北","怀化","淮南","黄冈","黄南","黄山","黄石","惠州","葫芦岛","呼伦贝尔","湖州","菏泽"]}];function p(){c.value=[],I((()=>{d.value?c.value=r.filter((e=>e.data.some((e=>e.includes(d.value))))):c.value=r}))}function x(){d.value="",p()}return(a,n)=>{const s=$(k("wui-search"),e),r=$(k("wui-index-anchor"),P),v=$(k("wui-cell"),q),f=u,h=$(k("wui-index-bar"),U),w=$(k("page-wraper"),z);return o(),l(w,null,{default:i((()=>[_(s,{"hide-cancel":"",placeholder:"我要去哪里？",modelValue:d.value,"onUpdate:modelValue":n[0]||(n[0]=e=>d.value=e),onSearch:p,onClear:x},null,8,["modelValue"]),_(f,{class:"wraper"},{default:i((()=>[c.value.length?(o(),l(h,{key:0,sticky:""},{default:i((()=>[(o(!0),m(b,null,T(c.value,(e=>(o(),l(f,{key:e.index},{default:i((()=>[_(r,{index:e.index},null,8,["index"]),(o(!0),m(b,null,T(e.data,(a=>(o(),l(v,{border:"",clickable:"",key:a,title:a,onClick:n=>function(e,a){t(`当前点击项：${e}，城市：${a}`)}(e.index,a)},null,8,["title","onClick"])))),128))])),_:2},1024)))),128))])),_:1})):S("",!0)])),_:1})])),_:1})}}}),[["__scopeId","data-v-0b90506d"]]);export{X as default};
