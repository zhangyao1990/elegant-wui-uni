import{w as l}from"./wui-picker-view.Wqi5lvdt.js";import{d as e,r as a,a as u,b as o,o as t,c as v,w as m,e as n}from"./index-CxD5Cs3x.js";import{_ as d}from"./demo-block.C2UZKcqn.js";import{a as s}from"./page-wraper.Dkub_oR0.js";const b=e({__name:"Index",setup(e){const b={0:[{label:"北京",value:"110000"},{label:"广东省",value:"440000"}],11e4:[{label:"北京",value:"110100"}],44e4:[{label:"广州市",value:"440100"},{label:"韶关市",value:"440200"},{label:"深圳市",value:"440300"},{label:"珠海市",value:"440400"},{label:"汕头市",value:"440500"}],110100:[{label:"东城区",value:"110101"},{label:"西城区",value:"110102"},{label:"朝阳区",value:"110105"},{label:"丰台区",value:"110106"},{label:"石景山区",value:"110107"}],440100:[{label:"荔湾区",value:"440103"},{label:"越秀区",value:"440104"},{label:"海珠区",value:"440105"}],440200:[{label:"武江区",value:"440203"}],440300:[{label:"罗湖区",value:"440303"},{label:"福田区",value:"440304"}],440400:[{label:"香洲区",value:"440402"},{label:"斗门区",value:"440403"},{label:"金湾区",value:"440404"}],440500:[{label:"龙湖区",value:"440507"},{label:"金平区",value:"440511"}]},i=a("选项1"),c=a(["选项1","选项2","选项3","选项4","选项5","选项6","选项7"]),r=a("选项1"),p=a("选项1"),V=a([{label:"选项1"},{label:"选项2"},{label:"选项3",disabled:!0},{label:"选项4"},{label:"选项5"},{label:"选项6"},{label:"选项7"}]),f=a("选项1"),_=a(["选项1","选项2","选项3","选项4","选项5","选项6","选项7"]),w=a(["中南大学","软件工程"]),g=a([["中山大学","中南大学","华南理工大学"],["计算机科学与技术","软件工程","通信工程","法学","经济学"]]),U=a(["110000","110100","110102"]),$=a([b[0],b[b[0][0].value],b[b[b[0][0].value][0].value]]),j=(l,e,a,u)=>{const o=e[a];0===a?(l.setColumnData(1,b[o.value]),l.setColumnData(2,b[b[o.value][0].value])):1===a&&l.setColumnData(2,b[o.value]),u()};return(e,a)=>{const b=u(o("wui-picker-view"),l),k=u(o("demo-block"),d),h=u(o("page-wraper"),s);return t(),v(h,null,{default:m((()=>[n(k,{title:`基本用法，数值: ${i.value}`},{default:m((()=>[n(b,{modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=l=>i.value=l),columns:c.value},null,8,["modelValue","columns"])])),_:1},8,["title"]),n(k,{title:`禁用选项，数值: ${r.value}`},{default:m((()=>[n(b,{modelValue:r.value,"onUpdate:modelValue":a[1]||(a[1]=l=>r.value=l),columns:V.value},null,8,["modelValue","columns"])])),_:1},8,["title"]),n(k,{title:`立即触发 change，数值: ${p.value}`},{default:m((()=>[n(b,{modelValue:p.value,"onUpdate:modelValue":a[2]||(a[2]=l=>p.value=l),"immediate-change":!0,columns:V.value},null,8,["modelValue","columns"])])),_:1},8,["title"]),n(k,{title:`加载中，数值: ${f.value}`},{default:m((()=>[n(b,{modelValue:f.value,"onUpdate:modelValue":a[3]||(a[3]=l=>f.value=l),columns:_.value,loading:""},null,8,["modelValue","columns"])])),_:1},8,["title"]),n(k,{title:`多列，数值: [${w.value}]`},{default:m((()=>[n(b,{modelValue:w.value,"onUpdate:modelValue":a[4]||(a[4]=l=>w.value=l),columns:g.value},null,8,["modelValue","columns"])])),_:1},8,["title"]),n(k,{title:`多级联动，数值: [${U.value}]`},{default:m((()=>[n(b,{modelValue:U.value,"onUpdate:modelValue":a[5]||(a[5]=l=>U.value=l),columns:$.value,"column-change":j},null,8,["modelValue","columns"])])),_:1},8,["title"])])),_:1})}}});export{b as default};