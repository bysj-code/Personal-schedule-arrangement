(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yonghu/add-or-update"],{"0f28":function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return r}));var a=function(){var e=this,n=e.$createElement;e._self._c},i=[]},"2cf2":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,r,a,i,u){try{var o=e[i](u),c=o.value}catch(s){return void t(s)}o.done?n(c):Promise.resolve(c).then(r,a)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var u=e.apply(n,t);function o(e){i(u,r,a,o,c,"next",e)}function c(e){i(u,r,a,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("35a9"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{ruleForm:{zhanghao:"",mima:"",xingming:"",xingbie:"",shouji:"",youxiang:"",zhaopian:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{zhanghao:!1,mima:!1,xingming:!1,xingbie:!1,shouji:!1,youxiang:!1,zhaopian:!1}}},components:{wPicker:o},computed:{},onLoad:function(n){var t=this;return u(r.default.mark((function a(){var i,u,o,c;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=e.getStorageSync("nowTable"),a.next=3,t.$api.session(i);case 3:if(u=a.sent,t.user=u.data,t.xingbieOptions="男,女".split(","),t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){a.next=14;break}return t.ruleForm.id=n.id,a.next=12,t.$api.info("yonghu",t.ruleForm.id);case 12:u=a.sent,t.ruleForm=u.data;case 14:if(!n.cross){a.next=49;break}o=e.getStorageSync("crossObj"),a.t0=r.default.keys(o);case 17:if((a.t1=a.t0()).done){a.next=49;break}if(c=a.t1.value,"zhanghao"!=c){a.next=23;break}return t.ruleForm.zhanghao=o[c],t.ro.zhanghao=!0,a.abrupt("continue",17);case 23:if("mima"!=c){a.next=27;break}return t.ruleForm.mima=o[c],t.ro.mima=!0,a.abrupt("continue",17);case 27:if("xingming"!=c){a.next=31;break}return t.ruleForm.xingming=o[c],t.ro.xingming=!0,a.abrupt("continue",17);case 31:if("xingbie"!=c){a.next=35;break}return t.ruleForm.xingbie=o[c],t.ro.xingbie=!0,a.abrupt("continue",17);case 35:if("shouji"!=c){a.next=39;break}return t.ruleForm.shouji=o[c],t.ro.shouji=!0,a.abrupt("continue",17);case 39:if("youxiang"!=c){a.next=43;break}return t.ruleForm.youxiang=o[c],t.ro.youxiang=!0,a.abrupt("continue",17);case 43:if("zhaopian"!=c){a.next=47;break}return t.ruleForm.zhaopian=o[c],t.ro.zhaopian=!0,a.abrupt("continue",17);case 47:a.next=17;break;case 49:t.styleChange();case 50:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},zhaopianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.zhaopian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return u(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.zhanghao){n.next=3;break}return e.$utils.msg("账号不能为空"),n.abrupt("return");case 3:if(e.ruleForm.mima){n.next=6;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 6:if(!e.ruleForm.shouji||e.$validate.isMobile(e.ruleForm.shouji)){n.next=9;break}return e.$utils.msg("手机应输入手机格式"),n.abrupt("return");case 9:if(!e.ruleForm.youxiang||e.$validate.isEmail(e.ruleForm.youxiang)){n.next=12;break}return e.$utils.msg("邮箱应输入邮件格式"),n.abrupt("return");case 12:if(!e.ruleForm.id){n.next=17;break}return n.next=15,e.$api.update("yonghu",e.ruleForm);case 15:n.next=19;break;case 17:return n.next=19,e.$api.add("yonghu",e.ruleForm);case 19:e.$utils.msgBack("提交成功");case 20:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,a=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(t,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])},"838c":function(e,n,t){"use strict";t.r(n);var r=t("2cf2"),a=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=a.a},ac30:function(e,n,t){"use strict";t.r(n);var r=t("0f28"),a=t("838c");for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);t("cdb9");var u,o=t("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"1e239251",null,!1,r["a"],u);n["default"]=c.exports},bdbf:function(e,n,t){},cdb9:function(e,n,t){"use strict";var r=t("bdbf"),a=t.n(r);a.a},d275:function(e,n,t){"use strict";(function(e){t("1c18");r(t("66fd"));var n=r(t("ac30"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])}},[["d275","common/runtime","common/vendor"]]]);