import{d as a,r as t,x as s,e,f as i,w as l,g as u,l as o,m as f,F as p,L as m,k as r,y as h,I as d,as as n,a as c,b as w}from"./index-72jEY8AL.js";import{c as g,v,E as _,Q as b,p as E,a as y}from"./page-wraper.DpqTXTZc.js";import{_ as G}from"./wui-img.sKVSTgmO.js";const J=y(a({name:"wui-waterfall",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...g,data:v(Array),mode:{type:String,values:["normal","calc"],default:"normal"}},setup(a,{expose:n}){const c=a,{proxy:w}=d(),g=`wui-${_()}`,v=t([]),y=t([]);let G=0,J=0;const P=async()=>{try{const a=await E(`#${g}-left`,!1,w),t=await E(`#${g}-right`,!1,w);G=a.height||G,J=t.height||J}catch(a){}};let x=[];const $=async a=>{if(a&&a.length)if("calc"===c.mode)await P(),G<=J?v.value.push(a.shift()):y.value.push(a.shift()),m((()=>{setTimeout((()=>{$(a)}),200)}));else if("normal"===c.mode){let t=!0;await P(),v.value.length>y.value.length&&(t=!1);let s=!1;G<J&&(s=!0),a.forEach(((a,e)=>{e%2==0&&t||s?v.value.push(a):y.value.push(a),t||(t=!0),s&&e>=2&&(s=!1)}))}};return s((()=>c.data),(a=>{if(!a)return;if(x.length===a.length)return;const t=b(a.slice(x.length));t.length||(v.value=[],y.value=[],G=0,J=0),m((()=>{x=a,$(t)}))}),{immediate:!0}),n({reset:()=>{c.data&&(v.value=[],y.value=[],G=0,J=0,m((()=>{x=c.data,$(c.data)})))}}),(a,t)=>{const s=r;return e(),i(s,{class:"wui-water-fall"},{default:l((()=>[u(s,{id:`${g}-left`,class:"left wui-water-fall__container"},{default:l((()=>[(e(!0),o(p,null,f(v.value,((t,u)=>(e(),i(s,{key:u,class:"wui-water-fall__item"},{default:l((()=>[h(a.$slots,"left",{item:t,index:u},void 0,!0)])),_:2},1024)))),128))])),_:3},8,["id"]),u(s,{id:`${g}-right`,class:"right wui-water-fall__container"},{default:l((()=>[(e(!0),o(p,null,f(y.value,((t,u)=>(e(),i(s,{key:u,class:"wui-water-fall__item"},{default:l((()=>[h(a.$slots,"right",{item:t,index:u},void 0,!0)])),_:2},1024)))),128))])),_:3},8,["id"])])),_:3})}}}),[["__scopeId","data-v-fe9ad2e3"]]),P=()=>{const a=["https://gips3.baidu.com/it/u=1821127123,1149655687&fm=3028&app=3028&f=JPEG&fmt=auto?w=720&h=1280","https://gips0.baidu.com/it/u=1490237218,4115737545&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=720","https://gips1.baidu.com/it/u=1647344915,1746921568&fm=3028&app=3028&f=JPEG&fmt=auto?w=720&h=1280","https://gips3.baidu.com/it/u=453716532,1843928978&fm=3028&app=3028&f=JPEG&fmt=auto?w=960&h=1280","https://gips1.baidu.com/it/u=2205169440,1005663887&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024","https://gips1.baidu.com/it/u=1239311027,2819893885&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024","https://gips2.baidu.com/it/u=4231193786,3187314859&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024","https://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960","https://gips2.baidu.com/it/u=3944689179,983354166&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024","https://gips3.baidu.com/it/u=1874299413,3253595329&fm=3028&app=3028&f=JPEG&fmt=auto?w=1920&h=2560"],s=t([]),e=()=>{const t=s.value.length,e=a.length,i=[];for(let s=0;s<20;s++)i.push({id:t+s+1,url:a[Math.floor(Math.random()*e)]});s.value=s.value.concat(i)};return e(),n((()=>{setTimeout((()=>{e()}),200)})),{imageData:s}},x=y(a({__name:"water-fall-item",props:{url:String},setup:a=>(t,s)=>{const o=c(w("wui-img"),G),f=r;return e(),i(f,{class:"water-fall-item"},{default:l((()=>[u(o,{width:"100%",height:"100%",lazyLoad:"",src:a.url,mode:"widthFix"},null,8,["src"])])),_:1})}}),[["__scopeId","data-v-39aae1bc"]]);export{x as W,J as _,P as u};
