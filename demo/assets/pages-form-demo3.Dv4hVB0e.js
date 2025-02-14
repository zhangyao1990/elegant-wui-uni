import{_ as e}from"./wui-message-box.B3EE45JG.js";import{d as l,_ as a,r as o,a as t,b as r,e as i,f as s,w as u,g as d,h as m,s as p,k as c,A as n}from"./index-CppQkjPQ.js";import{b as f,c as w,d as h,e as b,_ as v,s as V,a as g}from"./page-wraper.BtTn2L9S.js";import{_ as j}from"./wui-input.B8QcNBcY.js";import{_}from"./wui-select-picker.CwGP1ijN.js";import{_ as x}from"./wui-picker.EnP5YY6Q.js";import{_ as P}from"./wui-cell-group.DZq-tyDJ.js";import{_ as k}from"./wui-datetime-picker.BNd0ZtfJ.js";import{_ as y}from"./wui-calendar.B9cY8Mt3.js";import{u as q,_ as U}from"./useColPickerData.DEf0Fq76.js";import{_ as I}from"./wui-textarea.BwARhzx-.js";import{_ as C}from"./wui-input-number.DIYaiL26.js";import{_ as L}from"./wui-upload.FKtcXcTM.js";import{_ as N}from"./wui-checkbox.1CFB3-mn.js";import{_ as z}from"./wui-button.D5TM7_AH.js";import{_ as T}from"./wui-form.Yevl3Ohq.js";import"./useTranslate.Cnv2QAD4.js";import"./wui-search.urrpwceH.js";import"./wui-action-sheet.DlEqcid1.js";import"./wui-checkbox-group.CLWl89Xo.js";import"./useChildren.BQ208M7a.js";import"./wui-radio-group.KeFm-NEa.js";import"./wui-picker-view.BakrdmW0.js";import"./wui-datetime-picker-view.CXyMoVqd.js";import"./dayjs.qqWgzWc8.js";import"./wui-tabs.CbS5C41K.js";import"./wui-badge.B1pn-hyG.js";import"./wui-sticky-box.D72fvdv2.js";import"./wui-resize.D9LN1VhQ.js";import"./useTouch.BJ6BRFf9.js";import"./wui-tag.BUEKGvkj.js";import"./wui-calendar-view.MAA-ad9K.js";const A=g(l({__name:"demo3",setup(l){const{colPickerData:g,findChildrenByCode:A}=q(),D=a({couponName:"",platform:[],promotion:"",threshold:"",price:"",date:null,time:"",address:[],count:1,content:"",switchVal:!0,cardId:"",phone:"",read:!1,fileList:[],discount:1}),Q={couponName:[{required:!0,pattern:/\d{6}/,message:"优惠券名称6个字以上",validator:e=>e?Promise.resolve():Promise.reject("请输入优惠券名称")}],content:[{required:!0,message:"请输入活动细则信息",validator:e=>e&&e.length>2?Promise.resolve():Promise.reject("请输入活动细则信息")}],threshold:[{required:!0,message:"请输入满减金额",validator:e=>e&&D.price?Promise.resolve():Promise.reject()}],platform:[{required:!0,message:"请选择推广平台",validator:e=>e&&V(e)&&e.length?Promise.resolve():Promise.reject("请选择推广平台")}],promotion:[{required:!0,message:"请选择推广平台",validator:e=>e?Promise.resolve():Promise.reject("请选择推广平台")}],time:[{required:!0,message:"请选择时间",validator:e=>e?Promise.resolve():Promise.reject("请选择时间")}],date:[{required:!0,message:"请选择日期",validator:e=>e?Promise.resolve():Promise.reject()}],address:[{required:!0,message:"请选择地址",validator:e=>V(e)&&e.length?Promise.resolve():Promise.reject("请选择地址")}],count:[{required:!0,message:"发货数量需要大于1",validator:e=>Number(e)>1?Promise.resolve():Promise.reject("发货数量需要大于1")}],cardId:[{required:!0,message:"请输入汪汪队",validator:e=>e?Promise.resolve():Promise.reject("请输入汪汪队")}],phone:[{required:!0,message:"请输入汪汪队",validator:e=>e?Promise.resolve():Promise.reject()}],fileList:[{required:!0,message:"请选择活动图片",validator:e=>V(e)&&e.length?Promise.resolve():Promise.reject()}],discount:[{required:!0,message:"请输入优惠金额",validator:e=>e?Promise.resolve():Promise.reject()}]},B=o([{value:"1",label:"京东"},{value:"2",label:"开普勒"},{value:"3",label:"手Q"},{value:"4",label:"微信"},{value:"5",label:"1号店"},{value:"6",label:"十元街"},{value:"7",label:"京东极速版"}]),G=o([{value:"1",label:"满减"},{value:"2",label:"无门槛"}]),H=o([g.map((e=>({value:e.value,label:e.text})))]),J=({selectedItem:e,resolve:l,finish:a})=>{const o=A(g,e.value);o&&o.length?l(o.map((e=>({value:e.value,label:e.text})))):a()},K=f(),R=o();function S({fileList:e}){D.fileList=e}function W(){R.value.validate().then((({valid:e,errors:l})=>{e&&K.success("提交成功"),console.log(e),console.log(l)})).catch((e=>{console.log(e,"error")}))}function X(){K.info("优惠券提示信息")}return(l,a)=>{const o=t(r("wui-message-box"),e),f=t(r("wui-toast"),w),V=t(r("wui-input"),j),g=t(r("wui-select-picker"),_),q=t(r("wui-picker"),x),A=c,K=t(r("wui-cell"),h),Z=t(r("wui-cell-group"),P),$=t(r("wui-datetime-picker"),k),E=t(r("wui-calendar"),y),F=t(r("wui-col-picker"),U),M=t(r("wui-textarea"),I),O=t(r("wui-input-number"),C),Y=t(r("wui-switch"),b),ee=t(r("wui-upload"),L),le=n,ae=t(r("wui-checkbox"),N),oe=t(r("wui-button"),z),te=t(r("wui-form"),T),re=t(r("page-wraper"),v);return i(),s(A,null,{default:u((()=>[d(re,null,{default:u((()=>[d(o),d(f),d(te,{ref_key:"form",ref:R,model:D,rules:Q},{default:u((()=>[d(Z,{"custom-class":"group",title:"基础信息",border:""},{default:u((()=>[d(V,{label:"优惠券名称","label-width":"100px",maxlength:20,"show-word-limit":"",prop:"couponName",required:"","suffix-icon":"warn-bold",clearable:"",modelValue:D.couponName,"onUpdate:modelValue":a[0]||(a[0]=e=>D.couponName=e),placeholder:"请输入优惠券名称",onClicksuffixicon:X},null,8,["modelValue"]),d(g,{label:"推广平台","label-width":"100px",prop:"platform",modelValue:D.platform,"onUpdate:modelValue":a[1]||(a[1]=e=>D.platform=e),columns:B.value,placeholder:"请选择推广平台"},null,8,["modelValue","columns"]),d(q,{label:"优惠方式",placeholder:"请选择优惠方式","label-width":"100px",prop:"promotion",modelValue:D.promotion,"onUpdate:modelValue":a[2]||(a[2]=e=>D.promotion=e),columns:G.value},null,8,["modelValue","columns"]),d(K,{prop:"threshold",title:"券面额",required:"","title-width":"100px","custom-value-class":"cell-left"},{default:u((()=>[d(A,{style:{"text-align":"left"}},{default:u((()=>[d(A,{class:"inline-txt",style:{"margin-left":"0"}},{default:u((()=>[m("满")])),_:1}),d(V,{"no-border":"","custom-style":"display: inline-block; width: 70px; vertical-align: middle",placeholder:"请输入金额",modelValue:D.threshold,"onUpdate:modelValue":a[3]||(a[3]=e=>D.threshold=e)},null,8,["modelValue"]),d(A,{class:"inline-txt"},{default:u((()=>[m("减")])),_:1}),d(V,{"no-border":"","custom-style":"display: inline-block; width: 70px; vertical-align: middle",placeholder:"请输入金额",modelValue:D.price,"onUpdate:modelValue":a[4]||(a[4]=e=>D.price=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(Z,{"custom-class":"group",title:"时间和地址",border:""},{default:u((()=>[d($,{label:"时间","label-width":"100px",placeholder:"请选择时间",prop:"time",modelValue:D.time,"onUpdate:modelValue":a[5]||(a[5]=e=>D.time=e)},null,8,["modelValue"]),d(E,{label:"日期","label-width":"100px",placeholder:"请选择日期",prop:"date",modelValue:D.date,"onUpdate:modelValue":a[6]||(a[6]=e=>D.date=e)},null,8,["modelValue"]),d(F,{label:"地址",placeholder:"请选择地址","label-width":"100px",prop:"address",modelValue:D.address,"onUpdate:modelValue":a[7]||(a[7]=e=>D.address=e),columns:H.value,"column-change":J},null,8,["modelValue","columns"])])),_:1}),d(Z,{"custom-class":"group",title:"其他信息",border:""},{default:u((()=>[d(M,{label:"活动细则","label-width":"100px",type:"textarea",modelValue:D.content,"onUpdate:modelValue":a[8]||(a[8]=e=>D.content=e),maxlength:300,"show-word-limit":"",placeholder:"请输入活动细则信息",clearable:"",prop:"content"},null,8,["modelValue"]),d(K,{title:"发货数量","title-width":"100px",prop:"count"},{default:u((()=>[d(A,{style:{"text-align":"left"}},{default:u((()=>[d(O,{modelValue:D.count,"onUpdate:modelValue":a[9]||(a[9]=e=>D.count=e)},null,8,["modelValue"])])),_:1})])),_:1}),d(K,{title:"开启折扣","title-width":"100px",prop:"switchVal",center:""},{default:u((()=>[d(A,{style:{"text-align":"left"}},{default:u((()=>[d(Y,{modelValue:D.switchVal,"onUpdate:modelValue":a[10]||(a[10]=e=>D.switchVal=e)},null,8,["modelValue"])])),_:1})])),_:1}),D.switchVal?(i(),s(V,{key:0,label:"折扣","label-width":"100px",prop:"discount",placeholder:"请输入优惠金额",clearable:"",modelValue:D.discount,"onUpdate:modelValue":a[11]||(a[11]=e=>D.discount=e)},null,8,["modelValue"])):p("",!0),d(V,{label:"汪汪队","label-width":"100px",prop:"cardId","suffix-icon":"camera",placeholder:"请输入汪汪队",clearable:"",modelValue:D.cardId,"onUpdate:modelValue":a[12]||(a[12]=e=>D.cardId=e)},null,8,["modelValue"]),d(V,{label:"汪汪队","label-width":"100px",prop:"phone",placeholder:"请输入汪汪队",clearable:"",modelValue:D.phone,"onUpdate:modelValue":a[13]||(a[13]=e=>D.phone=e)},null,8,["modelValue"]),d(K,{title:"活动图片","title-width":"100px",prop:"fileList"},{default:u((()=>[d(ee,{"file-list":D.fileList,action:"https://mockapi.eolink.com/zhTuw2P8c29bc981a741931bdd86eb04dc1e8fd64865cb5/upload",onChange:S},null,8,["file-list"])])),_:1})])),_:1}),d(A,{class:"tip"},{default:u((()=>[d(ae,{modelValue:D.read,"onUpdate:modelValue":a[14]||(a[14]=e=>D.read=e),prop:"read","custom-label-class":"label-class"},{default:u((()=>[m(" 已阅读并同意 "),d(le,{style:{color:"#4d80f0"}},{default:u((()=>[m("《巴拉巴拉吧啦协议》")])),_:1})])),_:1},8,["modelValue"])])),_:1}),d(A,{class:"footer"},{default:u((()=>[d(oe,{type:"primary",size:"large",onClick:W,block:""},{default:u((()=>[m("提交")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-a1f433e1"]]);export{A as default};
