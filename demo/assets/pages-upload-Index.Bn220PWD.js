import{d as e,r as l,a as i,b as t,o as a,c as s,w as o,e as n,f as u,t as f,ag as c,i as r}from"./index-ZLmWPcj7.js";import{u as d,_ as m}from"./wui-message-box.B4iP7V4u.js";import{c as p,d as v,a as g,b as h}from"./page-wraper.DRSg2Trj.js";import{_}from"./wui-upload.Bl3J0zz9.js";import{_ as b}from"./demo-block.YLy05Wjt.js";import{_ as w}from"./wui-button.CFbUOCHb.js";import"./wui-input.DI2LB9Bu.js";import"./useTranslate.D675u6qD.js";const L="https://mockapi.eolink.com/zhTuw2P8c29bc981a741931bdd86eb04dc1e8fd64865cb5/upload",C=h(e({__name:"Index",setup(e){const h=l([{url:"https://registry.npmmirror.com/elegant-wui-uni-assets/*/files/panda.jpg"}]),C=l([]);l([{url:"https://img12.360buyimg.com//n0/jfs/t1/29118/6/4823/55969/5c35c16bE7c262192/c9fdecec4b419355.jpg"}]);const j=l([]),k=l([]),x=l([]),y=l([]),P=l([]),F=l([]),T=l([]),U=l([]);l([]),l([]);const E=l([]),I=l([]),M=l([]),S=l([{url:"https://registry.npmmirror.com/elegant-wui-uni-assets/*/files/panda.jpg",name:"panda"}]),z=l(),D=d(),G=p(),N=({file:e,resolve:l})=>{D.confirm({msg:"是否选择",title:"提示"}).then((()=>{l(!0)})).catch((()=>{G.show("取消选择操作")}))},X=({resolve:e,file:l})=>{D.confirm({msg:"是否预览图片",title:"提示"}).then((()=>{e(!0)})).catch((()=>{G.show("取消预览操作")}))},$=({files:e,resolve:l})=>{D.confirm({msg:"是否上传",title:"提示"}).then((()=>{console.log(e,"files"),l(!0)})).catch((()=>{G.show("取消上传操作")}))},q=({file:e,fileList:l,resolve:i})=>{D.confirm({msg:"是否删除",title:"提示"}).then((()=>{G.success("删除成功"),i(!0)})).catch((()=>{G.show("取消删除操作")}))};function A(e){console.log("成功",e)}function B(e){console.log("失败",e)}function H(e){console.log("加载中",e)}function J({fileList:e}){C.value=e}function K({fileList:e}){j.value=e}function O({fileList:e}){k.value=e}function Q({fileList:e}){x.value=e}function R({fileList:e}){y.value=e}function V({fileList:e}){P.value=e}function W({fileList:e}){F.value=e}function Y({fileList:e}){T.value=e}function Z({fileList:e}){U.value=e}function ee({fileList:e}){E.value=e}function le({fileList:e}){I.value=e}const ie=(e,l,i)=>{c({url:L,header:i.header,name:i.name,fileName:i.name,fileType:i.fileType,formData:l,filePath:e.url,success(t){t.statusCode===i.statusCode?i.onSuccess(t,e,l):i.onError({...t,errMsg:t.errMsg||""},e,l)},fail(t){i.onError(t,e,l)}}).onProgressUpdate((l=>{i.onProgress(l,e)}))};return(e,l)=>{const c=i(t("wui-message-box"),m),d=i(t("wui-toast"),v),p=i(t("wui-upload"),_),D=i(t("demo-block"),b),G=i(t("wui-button"),w),te=r,ae=i(t("page-wraper"),g);return a(),s(ae,null,{default:o((()=>[n(c),n(d),n(D,{title:"基本用法"},{default:o((()=>[n(p,{accept:"image","file-list":h.value,"onUpdate:fileList":l[0]||(l[0]=e=>h.value=e),"image-mode":"aspectFill",action:L},null,8,["file-list"])])),_:1}),n(D,{title:"最大上传数限制"},{default:o((()=>[n(p,{"file-list":j.value,limit:3,action:L,onChange:K},null,8,["file-list"])])),_:1}),n(D,{title:"拦截预览图片操作"},{default:o((()=>[n(p,{"file-list":k.value,action:L,onChange:O,"before-preview":X},null,8,["file-list"])])),_:1}),n(D,{title:"上传前置处理"},{default:o((()=>[n(p,{"file-list":x.value,action:L,onChange:Q,"before-upload":$},null,8,["file-list"])])),_:1}),n(D,{title:"移除图片前置处理"},{default:o((()=>[n(p,{"file-list":y.value,action:L,onChange:R,"before-remove":q},null,8,["file-list"])])),_:1}),n(D,{title:"上传状态钩子"},{default:o((()=>[n(p,{"file-list":P.value,action:L,onChange:V,onSuccess:A,onFail:B,onProgress:H},null,8,["file-list"])])),_:1}),n(D,{title:"禁用"},{default:o((()=>[n(p,{"file-list":F.value,disabled:"",action:L,onChange:W},null,8,["file-list"])])),_:1}),n(D,{title:"自定义唤起上传样式并限制上传5张"},{default:o((()=>[n(p,{"file-list":T.value,action:L,onChange:Y,limit:5},{default:o((()=>[n(G,null,{default:o((()=>[u("自定义唤起样式")])),_:1})])),_:1},8,["file-list"])])),_:1}),n(D,{title:"选择文件前置处理"},{default:o((()=>[n(p,{"file-list":U.value,action:L,onChange:Z,"before-choose":N},null,8,["file-list"])])),_:1}),n(D,{title:"上传视频"},{default:o((()=>[n(p,{accept:"video",multiple:"","file-list":C.value,action:L,onChange:J},null,8,["file-list"])])),_:1}),n(D,{title:"上传视频图片和文件"},{default:o((()=>[n(p,{accept:"all",multiple:"","file-list":E.value,action:L,onChange:ee},null,8,["file-list"])])),_:1}),n(D,{title:"手动触发上传"},{default:o((()=>[n(p,{ref_key:"upload14",ref:z,"auto-upload":!1,"file-list":I.value,action:L,onChange:le},null,8,["file-list"]),n(G,{onClick:l[1]||(l[1]=e=>{var l;return null==(l=z.value)?void 0:l.submit()})},{default:o((()=>[u("开始上传")])),_:1})])),_:1}),n(D,{title:"自定义上传方法"},{default:o((()=>[n(p,{"file-list":M.value,"onUpdate:fileList":l[2]||(l[2]=e=>M.value=e),"upload-method":ie},null,8,["file-list"])])),_:1}),n(D,{title:"自定义预览样式"},{default:o((()=>[n(p,{"file-list":S.value,"onUpdate:fileList":l[3]||(l[3]=e=>S.value=e),accept:"image","image-mode":"aspectFill",action:L},{"preview-cover":o((({file:e,index:l})=>[n(te,{class:"preview-cover"},{default:o((()=>[u(f(e.name||`文件${l}`),1)])),_:2},1024)])),_:1},8,["file-list"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-4c476d9e"]]);export{C as default};
