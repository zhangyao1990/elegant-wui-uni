import{b as l,c as e,_ as o}from"./page-wraper.BUz7wgOB.js";import{d as a,r as u,a as n,b as m,e as t,f as s,w as d,g as c,h as r,t as i,k as v}from"./index-COubmJ4C.js";import{_ as f}from"./wui-select-picker.D4MgWD3x.js";import{_ as V}from"./wui-cell-group.DJlg90_Y.js";import{_ as p}from"./demo-block.ByILMKb2.js";import{_ as b}from"./wui-button.DMa_qzEf.js";import"./wui-search.CgMJS2J7.js";import"./useTranslate.DoXId6mh.js";import"./wui-action-sheet.DMCGzinW.js";import"./wui-checkbox.D0k7ISWH.js";import"./wui-checkbox-group.CN73alEr.js";import"./useChildren.htS7Taxk.js";import"./wui-radio-group.cYB_wIs5.js";const g=a({__name:"Index",setup(a){const g=u([{value:"101",label:"男装"},{value:"102",label:"奢侈品"},{value:"103",label:"女装"},{value:"104",label:"鞋靴"},{value:"105",label:"内衣配饰"},{value:"106",label:"箱包"},{value:"107",label:"美妆护肤"},{value:"108",label:"个性清洁"},{value:"109",label:"钟表珠宝"},{value:"110",label:"手机"},{value:"111",label:"数码"},{value:"112",label:"电脑办公"}]),C=u([{value:"101",label:"男装",disabled:!0},{value:"102",label:"奢侈品"},{value:"103",label:"女装"}]),U=u(["101"]),w=u("101"),_=u(["102"]),h=u(["103"]),j=u([]),y=u([]);u([]);const k=u([]),x=u([]),$=u([]),z=u([]),E=u(["103"]),I=u(["102"]),T=u([]),q=u(["101"]),Y=u(["103"]),Z=u(["102"]),A=u("102"),B=u("101"),D=u("101"),F=u("奢侈品"),G=l(),H=(l,e)=>{let o="";return e.forEach((e=>{l.forEach(((a,u)=>{e.value===a&&(o+=`${a}: ${e.label} ${u+1<l.length?"--":""} `)}))})),o},J=(l,e)=>{l.length>0?(G.error("暂时无法选择商品"),e(!1)):e(!0)};function K({value:l}){G.show("选择了"+l)}function L({value:l}){console.log(l)}function M({value:l}){console.log(l)}function N({value:l}){console.log(l)}function O({value:l}){console.log(l)}function P({value:l}){console.log(l)}function Q({value:l}){console.log(l)}function R({value:l}){console.log(l)}function S({value:l}){console.log(l)}function W({value:l}){console.log(l)}function X({value:l}){console.log(l)}function ll({value:l}){console.log(l)}function el({value:l}){console.log(l)}function ol({value:l}){console.log(l)}function al({value:l}){console.log(l)}function ul({value:l}){console.log(l)}function nl({value:l}){console.log(l)}function ml({value:l,selectedItems:e}){console.log(l),F.value=e.map((l=>l.label)).join(", ")}return(l,a)=>{const u=n(m("wui-toast"),e),G=n(m("wui-select-picker"),f),tl=n(m("wui-cell-group"),V),sl=v,dl=n(m("demo-block"),p),cl=n(m("wui-button"),b),rl=n(m("page-wraper"),o);return t(),s(rl,null,{default:d((()=>[c(u),c(sl,{style:{margin:"20px 0"}},{default:d((()=>[c(tl,{border:""},{default:d((()=>[c(G,{label:"选择地址",modelValue:U.value,"onUpdate:modelValue":a[0]||(a[0]=l=>U.value=l),columns:g.value,onConfirm:L},null,8,["modelValue","columns"]),c(G,{label:"类型切换",type:"radio",modelValue:w.value,"onUpdate:modelValue":a[1]||(a[1]=l=>w.value=l),columns:g.value,onConfirm:M},null,8,["modelValue","columns"]),c(G,{label:"禁用",disabled:"",modelValue:_.value,"onUpdate:modelValue":a[2]||(a[2]=l=>_.value=l),columns:g.value,onConfirm:N},null,8,["modelValue","columns"]),c(G,{label:"只读",readonly:"",modelValue:h.value,"onUpdate:modelValue":a[3]||(a[3]=l=>h.value=l),columns:g.value,onConfirm:O},null,8,["modelValue","columns"]),c(G,{label:"禁用选项",modelValue:j.value,"onUpdate:modelValue":a[4]||(a[4]=l=>j.value=l),columns:C.value,onConfirm:P},null,8,["modelValue","columns"]),c(G,{label:"loading",loading:"",modelValue:y.value,"onUpdate:modelValue":a[5]||(a[5]=l=>y.value=l),columns:g.value,onConfirm:Q},null,8,["modelValue","columns"]),c(G,{label:"选择器change",modelValue:y.value,"onUpdate:modelValue":a[6]||(a[6]=l=>y.value=l),columns:g.value,onChange:K,onConfirm:R},null,8,["modelValue","columns"]),c(G,{label:"展示格式化",modelValue:k.value,"onUpdate:modelValue":a[7]||(a[7]=l=>k.value=l),columns:g.value,onConfirm:S,"display-format":H},null,8,["modelValue","columns"]),c(G,{label:"before-confirm",modelValue:x.value,"onUpdate:modelValue":a[8]||(a[8]=l=>x.value=l),columns:g.value,onConfirm:W,"before-confirm":J},null,8,["modelValue","columns"]),c(G,{label:"标题",modelValue:$.value,"onUpdate:modelValue":a[9]||(a[9]=l=>$.value=l),title:"多选",columns:g.value,onConfirm:X},null,8,["modelValue","columns"]),c(G,{label:"错误",error:"",modelValue:z.value,"onUpdate:modelValue":a[10]||(a[10]=l=>z.value=l),columns:g.value,onConfirm:ll},null,8,["modelValue","columns"]),c(G,{clearable:"",label:"必填",required:"",modelValue:E.value,"onUpdate:modelValue":a[11]||(a[11]=l=>E.value=l),columns:g.value,onConfirm:el},null,8,["modelValue","columns"]),c(G,{label:"可搜索",filterable:"",modelValue:I.value,"onUpdate:modelValue":a[12]||(a[12]=l=>I.value=l),columns:g.value,onConfirm:ol},null,8,["modelValue","columns"]),c(G,{label:"单选可搜索",filterable:"",modelValue:A.value,"onUpdate:modelValue":a[13]||(a[13]=l=>A.value=l),type:"radio",columns:g.value,onConfirm:ol},null,8,["modelValue","columns"]),c(G,{label:"自动完成",type:"radio","show-confirm":!1,modelValue:B.value,"onUpdate:modelValue":a[14]||(a[14]=l=>B.value=l),columns:g.value,onConfirm:M},null,8,["modelValue","columns"]),c(G,{label:"可清空",clearable:"",type:"radio","show-confirm":!1,modelValue:D.value,"onUpdate:modelValue":a[15]||(a[15]=l=>D.value=l),columns:g.value,onConfirm:M},null,8,["modelValue","columns"])])),_:1})])),_:1}),c(dl,{title:"label不传",transparent:""},{default:d((()=>[c(G,{modelValue:T.value,"onUpdate:modelValue":a[16]||(a[16]=l=>T.value=l),columns:g.value,onConfirm:al},null,8,["modelValue","columns"])])),_:1}),c(dl,{title:"大小",transparent:""},{default:d((()=>[c(G,{label:"大尺寸",modelValue:q.value,"onUpdate:modelValue":a[17]||(a[17]=l=>q.value=l),size:"large",columns:g.value,onConfirm:ul},null,8,["modelValue","columns"])])),_:1}),c(dl,{title:"值靠右展示",transparent:""},{default:d((()=>[c(G,{label:"值靠右展示","align-right":"",modelValue:Y.value,"onUpdate:modelValue":a[18]||(a[18]=l=>Y.value=l),columns:g.value,onConfirm:nl},null,8,["modelValue","columns"])])),_:1}),c(dl,{title:"自定义选择器",transparent:""},{default:d((()=>[c(sl,{style:{"margin-left":"15px"}},{default:d((()=>[c(sl,{style:{"margin-bottom":"10px"}},{default:d((()=>[r("当前选中项: "+i(F.value),1)])),_:1}),c(G,{modelValue:Z.value,"onUpdate:modelValue":a[19]||(a[19]=l=>Z.value=l),"use-default-slot":"",columns:g.value,onConfirm:ml,style:{display:"inline-block"}},{default:d((()=>[c(cl,null,{default:d((()=>[r("唤起多选")])),_:1})])),_:1},8,["modelValue","columns"])])),_:1})])),_:1})])),_:1})}}});export{g as default};
