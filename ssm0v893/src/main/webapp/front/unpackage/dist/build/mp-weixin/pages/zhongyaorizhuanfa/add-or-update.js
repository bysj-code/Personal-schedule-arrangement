(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/zhongyaorizhuanfa/add-or-update"],{"0fea":function(e,n,r){"use strict";(function(e){r("1c18");t(r("66fd"));var n=t(r("43ab"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,r("543d")["createPage"])},"2d7e":function(e,n,r){"use strict";var t=r("c74b"),i=r.n(t);i.a},"43ab":function(e,n,r){"use strict";r.r(n);var t=r("dec2"),i=r("bce7");for(var a in i)"default"!==a&&function(e){r.d(n,e,(function(){return i[e]}))}(a);r("2d7e");var u,o=r("f0c5"),c=Object(o["a"])(i["default"],t["b"],t["c"],!1,null,"1d030e0d",null,!1,t["a"],u);n["default"]=c.exports},"554d":function(e,n,r){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=i(r("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,n,r,t,i,a,u){try{var o=e[a](u),c=o.value}catch(s){return void r(s)}o.done?n(c):Promise.resolve(c).then(t,i)}function u(e){return function(){var n=this,r=arguments;return new Promise((function(t,i){var u=e.apply(n,r);function o(e){a(u,t,i,o,c,"next",e)}function c(e){a(u,t,i,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("35a9"))}.bind(null,r)).catch(r.oe)},c={data:function(){return{ruleForm:{xuhao:"",mingcheng:"",leixing:"",neirong:"",riqi:"",daoshutian:"",tupian:"",beizhu:"",zhanghao:"",xingming:"",userid:""},leixingOptions:[],leixingIndex:0,user:{},ro:{xuhao:!1,mingcheng:!1,leixing:!1,neirong:!1,riqi:!1,daoshutian:!1,tupian:!1,beizhu:!1,zhanghao:!1,xingming:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(n){var r=this;return u(t.default.mark((function i(){var a,u,o,c;return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=e.getStorageSync("nowTable"),i.next=3,r.$api.session(a);case 3:if(u=i.sent,r.user=u.data,r.ruleForm.zhanghao=r.user.zhanghao,r.ruleForm.xingming=r.user.xingming,r.leixingOptions="生日,纪念日".split(","),r.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(r.ruleForm.refid=n.refid,r.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){i.next=16;break}return r.ruleForm.id=n.id,i.next=14,r.$api.info("zhongyaorizhuanfa",r.ruleForm.id);case 14:u=i.sent,r.ruleForm=u.data;case 16:if(!n.cross){i.next=67;break}o=e.getStorageSync("crossObj"),i.t0=t.default.keys(o);case 19:if((i.t1=i.t0()).done){i.next=67;break}if(c=i.t1.value,"xuhao"!=c){i.next=25;break}return r.ruleForm.xuhao=o[c],r.ro.xuhao=!0,i.abrupt("continue",19);case 25:if("mingcheng"!=c){i.next=29;break}return r.ruleForm.mingcheng=o[c],r.ro.mingcheng=!0,i.abrupt("continue",19);case 29:if("leixing"!=c){i.next=33;break}return r.ruleForm.leixing=o[c],r.ro.leixing=!0,i.abrupt("continue",19);case 33:if("neirong"!=c){i.next=37;break}return r.ruleForm.neirong=o[c],r.ro.neirong=!0,i.abrupt("continue",19);case 37:if("riqi"!=c){i.next=41;break}return r.ruleForm.riqi=o[c],r.ro.riqi=!0,i.abrupt("continue",19);case 41:if("daoshutian"!=c){i.next=45;break}return r.ruleForm.daoshutian=o[c],r.ro.daoshutian=!0,i.abrupt("continue",19);case 45:if("tupian"!=c){i.next=49;break}return r.ruleForm.tupian=o[c],r.ro.tupian=!0,i.abrupt("continue",19);case 49:if("beizhu"!=c){i.next=53;break}return r.ruleForm.beizhu=o[c],r.ro.beizhu=!0,i.abrupt("continue",19);case 53:if("zhanghao"!=c){i.next=57;break}return r.ruleForm.zhanghao=o[c],r.ro.zhanghao=!0,i.abrupt("continue",19);case 57:if("xingming"!=c){i.next=61;break}return r.ruleForm.xingming=o[c],r.ro.xingming=!0,i.abrupt("continue",19);case 61:if("userid"!=c){i.next=65;break}return r.ruleForm.userid=o[c],r.ro.userid=!0,i.abrupt("continue",19);case 65:i.next=19;break;case 67:r.styleChange();case 68:case"end":return i.stop()}}),i)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},riqiChange:function(e){this.ruleForm.riqi=e.target.value,this.$forceUpdate()},leixingChange:function(e){this.leixingIndex=e.target.value,this.ruleForm.leixing=this.leixingOptions[this.leixingIndex]},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return u(t.default.mark((function n(){return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.xuhao){n.next=3;break}return e.$utils.msg("序号不能为空"),n.abrupt("return");case 3:if(!e.ruleForm.daoshutian||e.$validate.isIntNumer(e.ruleForm.daoshutian)){n.next=6;break}return e.$utils.msg("倒数天应输入整数"),n.abrupt("return");case 6:if(!e.ruleForm.id){n.next=11;break}return n.next=9,e.$api.update("zhongyaorizhuanfa",e.ruleForm);case 9:n.next=13;break;case 11:return n.next=13,e.$api.add("zhongyaorizhuanfa",e.ruleForm);case 13:e.$utils.msgBack("提交成功");case 14:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,r=n.getFullYear(),t=n.getMonth()+1,i=n.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),t=t>9?t:"0"+t,i=i>9?i:"0"+i,"".concat(r,"-").concat(t,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,r("543d")["default"])},bce7:function(e,n,r){"use strict";r.r(n);var t=r("554d"),i=r.n(t);for(var a in t)"default"!==a&&function(e){r.d(n,e,(function(){return t[e]}))}(a);n["default"]=i.a},c74b:function(e,n,r){},dec2:function(e,n,r){"use strict";var t;r.d(n,"b",(function(){return i})),r.d(n,"c",(function(){return a})),r.d(n,"a",(function(){return t}));var i=function(){var e=this,n=e.$createElement;e._self._c},a=[]}},[["0fea","common/runtime","common/vendor"]]]);