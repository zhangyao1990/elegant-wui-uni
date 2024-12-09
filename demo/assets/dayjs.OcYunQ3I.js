var t=Object.defineProperty,e=(e,s,r)=>(((e,s,r)=>{s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r})(e,"symbol"!=typeof s?s+"":s,r),r);import{a4 as s}from"./page-wraper.DRSg2Trj.js";class r{constructor(t){e(this,"utc"),e(this,"date"),e(this,"timeZone"),e(this,"timeZoneString"),e(this,"mYear"),e(this,"mMonth"),e(this,"mDay"),e(this,"mWeek"),e(this,"mHour"),e(this,"mMinute"),e(this,"mSecond"),this.utc=!1;const s=this.parseConfig(t);this.date=new Date(s),this.timeZone=this.date.getTimezoneOffset()/60,this.timeZoneString=this.padNumber(String(-1*this.timeZone).replace(/^(.)?(\d)/,"$10$200"),5,"+"),this.mYear=this.date.getFullYear(),this.mMonth=this.date.getMonth(),this.mDay=this.date.getDate(),this.mWeek=this.date.getDay(),this.mHour=this.date.getHours(),this.mMinute=this.date.getMinutes(),this.mSecond=this.date.getSeconds()}parseConfig(t){return t?s(t)?t:/^(\d){8}$/.test(t)?(this.utc=!0,`${t.substr(0,4)}-${t.substr(4,2)}-${t.substr(6,2)}`):t:new Date}padNumber(t,e,s){return!t||t.length>=e?t:`${Array(e+1-t.length).join(s)}${t}`}year(){return this.mYear}month(){return this.mMonth}unix(){const t=this.utc?60*this.timeZone*60*1e3:0;return Math.floor((this.date.getTime()+t)/1e3)}toString(){return this.date.toUTCString()}startOf(t){switch(t){case"year":return new r(new Date(this.year(),0,1));case"month":return new r(new Date(this.year(),this.month(),1));default:return this}}add(t,e){let s;switch(e){case"m":case"minutes":s=60;break;case"h":case"hours":s=3600;break;case"d":case"days":s=86400;break;case"w":case"weeks":s=604800;break;default:s=1}const i=this.unix()+t*s;return new r(1e3*i)}subtract(t,e){return this.add(-1*t,e)}format(t="YYYY-MM-DDTHH:mm:ssZ"){const e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return t.replace(/Y{2,4}|M{1,2}|D{1,2}|d{1,4}|H{1,2}|m{1,2}|s{1,2}|Z{1,2}/g,(t=>{switch(t){case"YY":return String(this.mYear).slice(-2);case"YYYY":return String(this.mYear);case"M":return String(this.mMonth+1);case"MM":return this.padNumber(String(this.mMonth+1),2,"0");case"D":return String(this.mDay);case"DD":return this.padNumber(String(this.mDay),2,"0");case"d":return String(this.mWeek);case"dddd":return e[this.mWeek];case"H":return String(this.mHour);case"HH":return this.padNumber(String(this.mHour),2,"0");case"m":return String(this.mMinute);case"mm":return this.padNumber(String(this.mMinute),2,"0");case"s":return String(this.mSecond);case"ss":return this.padNumber(String(this.mSecond),2,"0");case"Z":return`${this.timeZoneString.slice(0,-2)}:00`;case"ZZ":return this.timeZoneString;default:return t}}))}}function i(t){return new r(t)}export{i as d};
