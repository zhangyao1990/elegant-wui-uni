import{m as t,a0 as e,a1 as o,a2 as a,a3 as s,a4 as r,o as l,c as i,w as n,x as u,i as p}from"./index-ZLmWPcj7.js";import{b as c}from"./page-wraper.DRSg2Trj.js";const d=c({name:"PageMeta",setup(o,{emit:a}){t((()=>{e((t=>{a("resize",t)}))}))},props:{backgroundTextStyle:{type:String,default:"dark",validator:t=>-1!==["dark","light"].indexOf(t)},backgroundColor:{type:String,default:"#ffffff"},backgroundColorTop:{type:String,default:"#ffffff"},backgroundColorBottom:{type:String,default:"#ffffff"},scrollTop:{type:String,default:""},scrollDuration:{type:Number,default:300},pageStyle:{type:String,default:""},enablePullDownRefresh:{type:[Boolean,String],default:!1},rootFontSize:{type:String,default:""}},created(){const t=o()[0];this.$pageVm=t.$vm||t,this.$watch("backgroundTextStyle",(()=>{this.setBackgroundTextStyle()})),this.$watch((()=>[this.rootFontSize,this.pageStyle]),(()=>{this.setPageMeta()})),this.$watch((()=>[this.backgroundColor,this.backgroundColorTop,this.backgroundColorBottom]),(()=>{this.setBackgroundColor()})),this.$watch((()=>[this.scrollTop,this.scrollDuration]),(()=>{this.pageScrollTo()}))},beforeMount(){this.setBackgroundColor(),(this.rootFontSize||this.pageStyle)&&this.setPageMeta(),this.backgroundTextStyle&&this.setBackgroundTextStyle()},mounted(){this.scrollTop&&this.pageScrollTo()},methods:{setPullDownRefresh(t,e){t.setStyle({pullToRefresh:{support:e,style:"Android"===plus.os.name?"circle":"default"}})},setPageMeta(){a({pageStyle:this.pageStyle,rootFontSize:this.rootFontSize})},setBackgroundTextStyle(){},setBackgroundColor(){},pageScrollTo(){let t=String(this.scrollTop);-1!==t.indexOf("rpx")&&(t=s(t.replace("rpx",""))),t=parseFloat(t),isNaN(t)||r({scrollTop:t,duration:this.scrollDuration,success:()=>{}})}}},[["render",function(t,e,o,a,s,r){const c=p;return l(),i(c,{style:{display:"none"}},{default:n((()=>[u(t.$slots,"default")])),_:3})}]]);export{d as _};
