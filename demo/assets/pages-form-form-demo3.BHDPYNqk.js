import{_ as e}from"./wui-message-box.CmkevqNE.js";import{d as l,E as a,r as o,a as t,b as r,e as i,f as s,w as u,g as d,h as m,s as p,k as c,A as n}from"./index-72jEY8AL.js";import{f,g as w,h,i as b,_ as v,M as V,a as g}from"./page-wraper.DpqTXTZc.js";import{_ as j}from"./wui-input.C1veFYji.js";import{_}from"./wui-select-picker.Dvg6-a9R.js";import{_ as x}from"./wui-picker.Ceb_gNGp.js";import{_ as P}from"./wui-cell-group.OGgFKfrn.js";import{_ as k}from"./wui-datetime-picker.dwwwEdj_.js";import{_ as y}from"./wui-calendar.CqMjice3.js";import{u as q,_ as U}from"./useColPickerData.beFfdD8F.js";import{_ as C}from"./wui-textarea.eVYYLCGo.js";import{_ as I}from"./wui-input-number.Bvoo2_Qh.js";import{_ as L}from"./wui-upload.DUfxYZkg.js";import{_ as N}from"./wui-checkbox.DNjCiPml.js";import{_ as z}from"./wui-button.jKeBZ4e9.js";import{_ as D}from"./wui-form.9_GfZPio.js";import"./useTranslate.C1TcN3no.js";import"./wui-search.BoCnnkPK.js";import"./wui-action-sheet.C0Zo1ZDh.js";import"./wui-checkbox-group.B5NnT8Kz.js";import"./useChildren.BgpN10K6.js";import"./wui-radio-group.DA3AFxFW.js";import"./wui-picker-view.CJiDFyPM.js";import"./wui-datetime-picker-view.BWYSrOB8.js";import"./dayjs.Dtisb1-X.js";import"./wui-tabs.Dlg999MX.js";import"./wui-badge.CcQp3D5t.js";import"./wui-sticky-box.BN1OnZiP.js";import"./wui-resize.CbCLYsdv.js";import"./useTouch.zfwUbf7V.js";import"./wui-tag.CbLHip8B.js";import"./wui-calendar-view.CkU3Af04.js";const T=g(l({__name:"demo3",setup(l){const{colPickerData:g,findChildrenByCode:T}=q(),A=a({couponName:"",platform:[],promotion:"",threshold:"",price:"",date:null,time:"",address:[],count:1,content:"",switchVal:!0,cardId:"",phone:"",read:!1,fileList:[],discount:1}),B={couponName:[{required:!0,pattern:/\d{6}/,message:"优惠券名称6个字以上",validator:e=>e?Promise.resolve():Promise.reject("请输入优惠券名称")}],content:[{required:!0,message:"请输入活动细则信息",validator:e=>e&&e.length>2?Promise.resolve():Promise.reject("请输入活动细则信息")}],threshold:[{required:!0,message:"请输入满减金额",validator:e=>e&&A.price?Promise.resolve():Promise.reject()}],platform:[{required:!0,message:"请选择推广平台",validator:e=>e&&V(e)&&e.length?Promise.resolve():Promise.reject("请选择推广平台")}],promotion:[{required:!0,message:"请选择推广平台",validator:e=>e?Promise.resolve():Promise.reject("请选择推广平台")}],time:[{required:!0,message:"请选择时间",validator:e=>e?Promise.resolve():Promise.reject("请选择时间")}],date:[{required:!0,message:"请选择日期",validator:e=>e?Promise.resolve():Promise.reject()}],address:[{required:!0,message:"请选择地址",validator:e=>V(e)&&e.length?Promise.resolve():Promise.reject("请选择地址")}],count:[{required:!0,message:"发货数量需要大于1",validator:e=>Number(e)>1?Promise.resolve():Promise.reject("发货数量需要大于1")}],cardId:[{required:!0,message:"请输入汪汪队",validator:e=>e?Promise.resolve():Promise.reject("请输入汪汪队")}],phone:[{required:!0,message:"请输入汪汪队",validator:e=>e?Promise.resolve():Promise.reject()}],fileList:[{required:!0,message:"请选择活动图片",validator:e=>V(e)&&e.length?Promise.resolve():Promise.reject()}],discount:[{required:!0,message:"请输入优惠金额",validator:e=>e?Promise.resolve():Promise.reject()}]},E=o([{value:"1",label:"京东"},{value:"2",label:"开普勒"},{value:"3",label:"手Q"},{value:"4",label:"微信"},{value:"5",label:"1号店"},{value:"6",label:"十元街"},{value:"7",label:"京东极速版"}]),M=o([{value:"1",label:"满减"},{value:"2",label:"无门槛"}]),F=o([g.map((e=>({value:e.value,label:e.text})))]),G=({selectedItem:e,resolve:l,finish:a})=>{const o=T(g,e.value);o&&o.length?l(o.map((e=>({value:e.value,label:e.text})))):a()},H=f(),J=o();function K({fileList:e}){A.fileList=e}function Q(){J.value.validate().then((({valid:e,errors:l})=>{e&&H.success("提交成功"),console.log(e),console.log(l)})).catch((e=>{console.log(e,"error")}))}function W(){H.info("优惠券提示信息")}return(l,a)=>{const o=t(r("wui-message-box"),e),f=t(r("wui-toast"),w),V=t(r("wui-input"),j),g=t(r("wui-select-picker"),_),q=t(r("wui-picker"),x),T=c,H=t(r("wui-cell"),h),X=t(r("wui-cell-group"),P),Y=t(r("wui-datetime-picker"),k),Z=t(r("wui-calendar"),y),$=t(r("wui-col-picker"),U),O=t(r("wui-textarea"),C),R=t(r("wui-input-number"),I),S=t(r("wui-switch"),b),ee=t(r("wui-upload"),L),le=n,ae=t(r("wui-checkbox"),N),oe=t(r("wui-button"),z),te=t(r("wui-form"),D),re=t(r("page-wraper"),v);return i(),s(T,null,{default:u((()=>[d(re,null,{default:u((()=>[d(o),d(f),d(te,{ref_key:"form",ref:J,model:A,rules:B},{default:u((()=>[d(X,{"custom-class":"group",title:"基础信息",border:""},{default:u((()=>[d(V,{label:"优惠券名称","label-width":"100px",maxlength:20,"show-word-limit":"",prop:"couponName",required:"","suffix-icon":"warn-bold",clearable:"",modelValue:A.couponName,"onUpdate:modelValue":a[0]||(a[0]=e=>A.couponName=e),placeholder:"请输入优惠券名称",onClicksuffixicon:W},null,8,["modelValue"]),d(g,{label:"推广平台","label-width":"100px",prop:"platform",modelValue:A.platform,"onUpdate:modelValue":a[1]||(a[1]=e=>A.platform=e),columns:E.value,placeholder:"请选择推广平台"},null,8,["modelValue","columns"]),d(q,{label:"优惠方式",placeholder:"请选择优惠方式","label-width":"100px",prop:"promotion",modelValue:A.promotion,"onUpdate:modelValue":a[2]||(a[2]=e=>A.promotion=e),columns:M.value},null,8,["modelValue","columns"]),d(H,{prop:"threshold",title:"券面额",required:"","title-width":"100px","custom-value-class":"cell-left"},{default:u((()=>[d(T,{style:{"text-align":"left"}},{default:u((()=>[d(T,{class:"inline-txt",style:{"margin-left":"0"}},{default:u((()=>[m("满")])),_:1}),d(V,{"no-border":"","custom-style":"display: inline-block; width: 70px; vertical-align: middle",placeholder:"请输入金额",modelValue:A.threshold,"onUpdate:modelValue":a[3]||(a[3]=e=>A.threshold=e)},null,8,["modelValue"]),d(T,{class:"inline-txt"},{default:u((()=>[m("减")])),_:1}),d(V,{"no-border":"","custom-style":"display: inline-block; width: 70px; vertical-align: middle",placeholder:"请输入金额",modelValue:A.price,"onUpdate:modelValue":a[4]||(a[4]=e=>A.price=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(X,{"custom-class":"group",title:"时间和地址",border:""},{default:u((()=>[d(Y,{label:"时间","label-width":"100px",placeholder:"请选择时间",prop:"time",modelValue:A.time,"onUpdate:modelValue":a[5]||(a[5]=e=>A.time=e)},null,8,["modelValue"]),d(Z,{label:"日期","label-width":"100px",placeholder:"请选择日期",prop:"date",modelValue:A.date,"onUpdate:modelValue":a[6]||(a[6]=e=>A.date=e)},null,8,["modelValue"]),d($,{label:"地址",placeholder:"请选择地址","label-width":"100px",prop:"address",modelValue:A.address,"onUpdate:modelValue":a[7]||(a[7]=e=>A.address=e),columns:F.value,"column-change":G},null,8,["modelValue","columns"])])),_:1}),d(X,{"custom-class":"group",title:"其他信息",border:""},{default:u((()=>[d(O,{label:"活动细则","label-width":"100px",type:"textarea",modelValue:A.content,"onUpdate:modelValue":a[8]||(a[8]=e=>A.content=e),maxlength:300,"show-word-limit":"",placeholder:"请输入活动细则信息",clearable:"",prop:"content"},null,8,["modelValue"]),d(H,{title:"发货数量","title-width":"100px",prop:"count"},{default:u((()=>[d(T,{style:{"text-align":"left"}},{default:u((()=>[d(R,{modelValue:A.count,"onUpdate:modelValue":a[9]||(a[9]=e=>A.count=e)},null,8,["modelValue"])])),_:1})])),_:1}),d(H,{title:"开启折扣","title-width":"100px",prop:"switchVal",center:""},{default:u((()=>[d(T,{style:{"text-align":"left"}},{default:u((()=>[d(S,{modelValue:A.switchVal,"onUpdate:modelValue":a[10]||(a[10]=e=>A.switchVal=e)},null,8,["modelValue"])])),_:1})])),_:1}),A.switchVal?(i(),s(V,{key:0,label:"折扣","label-width":"100px",prop:"discount",placeholder:"请输入优惠金额",clearable:"",modelValue:A.discount,"onUpdate:modelValue":a[11]||(a[11]=e=>A.discount=e)},null,8,["modelValue"])):p("",!0),d(V,{label:"汪汪队","label-width":"100px",prop:"cardId","suffix-icon":"camera",placeholder:"请输入汪汪队",clearable:"",modelValue:A.cardId,"onUpdate:modelValue":a[12]||(a[12]=e=>A.cardId=e)},null,8,["modelValue"]),d(V,{label:"汪汪队","label-width":"100px",prop:"phone",placeholder:"请输入汪汪队",clearable:"",modelValue:A.phone,"onUpdate:modelValue":a[13]||(a[13]=e=>A.phone=e)},null,8,["modelValue"]),d(H,{title:"活动图片","title-width":"100px",prop:"fileList"},{default:u((()=>[d(ee,{"file-list":A.fileList,action:"https://mockapi.eolink.com/zhTuw2P8c29bc981a741931bdd86eb04dc1e8fd64865cb5/upload",onChange:K},null,8,["file-list"])])),_:1})])),_:1}),d(T,{class:"tip"},{default:u((()=>[d(ae,{modelValue:A.read,"onUpdate:modelValue":a[14]||(a[14]=e=>A.read=e),prop:"read","custom-label-class":"label-class"},{default:u((()=>[m(" 已阅读并同意 "),d(le,{style:{color:"#4d80f0"}},{default:u((()=>[m("《巴拉巴拉吧啦协议》")])),_:1})])),_:1},8,["modelValue"])])),_:1}),d(T,{class:"footer"},{default:u((()=>[d(oe,{type:"primary",size:"large",onClick:Q,block:""},{default:u((()=>[m("提交")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-44b9494e"]]);export{T as default};
