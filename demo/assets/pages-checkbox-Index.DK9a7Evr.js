import{_ as e}from"./wui-checkbox.CyEoylHo.js";import{d as l,r as a,a as u,b as d,o as t,c as o,w as m,e as f,f as n,V as _,i as s}from"./index-CxD5Cs3x.js";import{_ as V}from"./demo-block.C2UZKcqn.js";import{w as i}from"./wui-checkbox-group.biupUcui.js";import{_ as r,a as c,b as p}from"./page-wraper.Dkub_oR0.js";import{_ as v}from"./wui-cell-group.B9H7V7LX.js";import"./useChildren.BA1ntaqK.js";const g=p(l({__name:"Index",setup(l){const p=a(),g=a(),b=a();function k(){p.value&&p.value.toggle()}function h(){g.value&&g.value.toggle()}function U(){b.value&&b.value.toggle()}function x(){}const w=a(!0),j=a(!0),C=a(!0),y=a(!0);a(!0),a(!0),a([1,2,3]);const q=a([1,3]),z=a([1]),B=a("沃特"),I=a([1]),S=a([]),T=a([1]),$=a([1]),A=a([1]),D=a([]),E=a([]);function F(e){console.log(e)}return(l,a)=>{const G=u(d("wui-checkbox"),e),H=u(d("demo-block"),V),J=u(d("wui-checkbox-group"),i),K=s,L=u(d("wui-cell"),r),M=u(d("wui-cell-group"),v),N=u(d("page-wraper"),c);return t(),o(N,null,{default:m((()=>[f(H,{title:"基本用法"},{default:m((()=>[f(G,{modelValue:w.value,"onUpdate:modelValue":a[0]||(a[0]=e=>w.value=e)},{default:m((()=>[n("沃特")])),_:1},8,["modelValue"])])),_:1}),f(H,{title:"修改形状: square"},{default:m((()=>[f(G,{modelValue:j.value,"onUpdate:modelValue":a[1]||(a[1]=e=>j.value=e),shape:"square"},{default:m((()=>[n("沃特")])),_:1},8,["modelValue"])])),_:1}),f(H,{title:"修改形状: button"},{default:m((()=>[f(G,{modelValue:C.value,"onUpdate:modelValue":a[2]||(a[2]=e=>C.value=e),shape:"button"},{default:m((()=>[n("沃特")])),_:1},8,["modelValue"])])),_:1}),f(H,{title:"修改选中颜色"},{default:m((()=>[f(G,{modelValue:y.value,"onUpdate:modelValue":a[3]||(a[3]=e=>y.value=e),"checked-color":"rgb(52, 209, 157)"},{default:m((()=>[n("沃特")])),_:1},8,["modelValue"])])),_:1}),f(H,{title:"禁用状态"},{default:m((()=>[f(K,{style:{"margin-bottom":"10px"}},{default:m((()=>[f(J,{modelValue:q.value,"onUpdate:modelValue":a[4]||(a[4]=e=>q.value=e),disabled:""},{default:m((()=>[f(G,{modelValue:1},{default:m((()=>[n("沃特")])),_:1}),f(G,{modelValue:2,disabled:!1},{default:m((()=>[n("商家后台")])),_:1}),f(G,{modelValue:3,shape:"square"},{default:m((()=>[n("沃特")])),_:1}),f(G,{modelValue:4,shape:"square"},{default:m((()=>[n("商家后台")])),_:1})])),_:1},8,["modelValue"])])),_:1}),f(J,{modelValue:z.value,"onUpdate:modelValue":a[5]||(a[5]=e=>z.value=e),disabled:""},{default:m((()=>[f(G,{modelValue:1,shape:"button"},{default:m((()=>[n("沃特")])),_:1}),f(G,{modelValue:2,shape:"button"},{default:m((()=>[n("商家后台")])),_:1})])),_:1},8,["modelValue"])])),_:1}),f(H,{title:`修改 true-value 和 false-value ${B.value}`},{default:m((()=>[f(G,{modelValue:B.value,"onUpdate:modelValue":a[6]||(a[6]=e=>B.value=e),"true-value":"沃特","false-value":"商家后台",onChange:F},{default:m((()=>[n("复选框")])),_:1},8,["modelValue"])])),_:1},8,["title"]),f(H,{title:"同行展示"},{default:m((()=>[f(J,{modelValue:I.value,"onUpdate:modelValue":a[7]||(a[7]=e=>I.value=e),inline:""},{default:m((()=>[f(G,{modelValue:1},{default:m((()=>[n("沃特")])),_:1}),f(G,{modelValue:2},{default:m((()=>[n("商家后台")])),_:1})])),_:1},8,["modelValue"])])),_:1}),f(H,{title:"复选框组"},{default:m((()=>[f(J,{modelValue:S.value,"onUpdate:modelValue":a[8]||(a[8]=e=>S.value=e)},{default:m((()=>[f(G,{modelValue:1},{default:m((()=>[n("沃特")])),_:1}),f(G,{modelValue:2},{default:m((()=>[n("商家后台")])),_:1})])),_:1},8,["modelValue"])])),_:1}),f(H,{title:"表单模式---复选框组",transparent:""},{default:m((()=>[f(J,{modelValue:T.value,"onUpdate:modelValue":a[9]||(a[9]=e=>T.value=e),cell:""},{default:m((()=>[f(G,{modelValue:1},{default:m((()=>[n("沃特")])),_:1}),f(G,{modelValue:2},{default:m((()=>[n("商家后台")])),_:1})])),_:1},8,["modelValue"])])),_:1}),f(H,{title:"表单模式---复选框按钮组",transparent:""},{default:m((()=>[f(J,{modelValue:$.value,"onUpdate:modelValue":a[10]||(a[10]=e=>$.value=e),cell:"",shape:"button"},{default:m((()=>[f(G,{modelValue:1,disabled:""},{default:m((()=>[n("选项一")])),_:1}),f(G,{modelValue:2},{default:m((()=>[n("选项二")])),_:1}),f(G,{modelValue:3},{default:m((()=>[n("选项三")])),_:1}),f(G,{modelValue:4},{default:m((()=>[n("选项四")])),_:1}),f(G,{modelValue:5},{default:m((()=>[n("选项五")])),_:1}),f(G,{modelValue:6},{default:m((()=>[n("选项六")])),_:1}),f(G,{modelValue:7},{default:m((()=>[n("选项七")])),_:1})])),_:1},8,["modelValue"])])),_:1}),f(H,{title:"设置最小选中数量和最大选中数量",transparent:""},{default:m((()=>[f(J,{modelValue:A.value,"onUpdate:modelValue":a[11]||(a[11]=e=>A.value=e),min:1,max:3,cell:""},{default:m((()=>[f(G,{modelValue:1},{default:m((()=>[n("京东")])),_:1}),f(G,{modelValue:2},{default:m((()=>[n("沃特")])),_:1}),f(G,{modelValue:3},{default:m((()=>[n("商家后台")])),_:1}),f(G,{modelValue:4},{default:m((()=>[n("营销中心")])),_:1})])),_:1},8,["modelValue"])])),_:1}),f(H,{title:"大尺寸"},{default:m((()=>[f(J,{modelValue:D.value,"onUpdate:modelValue":a[12]||(a[12]=e=>D.value=e),inline:"",size:"large"},{default:m((()=>[f(G,{modelValue:"jingmai"},{default:m((()=>[n("沃特")])),_:1}),f(G,{modelValue:"shop"},{default:m((()=>[n("商家后台")])),_:1})])),_:1},8,["modelValue"]),f(J,{modelValue:E.value,"onUpdate:modelValue":a[13]||(a[13]=e=>E.value=e),size:"large",class:"group"},{default:m((()=>[f(G,{modelValue:"jingmai"},{default:m((()=>[n("沃特")])),_:1}),f(G,{modelValue:"shop"},{default:m((()=>[n("商家后台")])),_:1})])),_:1},8,["modelValue"])])),_:1}),f(H,{title:"结合Cell使用",transparent:""},{default:m((()=>[f(M,{border:""},{default:m((()=>[f(J,{modelValue:E.value,"onUpdate:modelValue":a[14]||(a[14]=e=>E.value=e),size:"large"},{default:m((()=>[f(L,{title:"点赞",center:"",clickable:"",onClick:k},{default:m((()=>[f(K,{onClick:_(x,["stop"])},{default:m((()=>[f(G,{"model-value":"1",ref_key:"checkBox1",ref:p,"custom-style":"margin:0;"},null,512)])),_:1})])),_:1}),f(L,{title:"投币",center:"",clickable:"",onClick:h},{default:m((()=>[f(K,{onClick:_(x,["stop"])},{default:m((()=>[f(G,{"model-value":"2",ref_key:"checkBox2",ref:g,"custom-style":"margin:0;"},null,512)])),_:1})])),_:1}),f(L,{title:"一键三连",center:"",clickable:"",onClick:U},{default:m((()=>[f(K,{onClick:_(x,["stop"])},{default:m((()=>[f(G,{"model-value":"3",ref_key:"checkBox3",ref:b,"custom-style":"margin:0;"},null,512)])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-a3ad92cc"]]);export{g as default};