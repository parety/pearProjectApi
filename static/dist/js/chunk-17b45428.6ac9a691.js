(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17b45428","chunk-6cd973f2"],{"27f0":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"userLayout"},[s("div",{staticClass:"container"},[s("div",{staticClass:"top"},[s("div",{staticClass:"header"},[s("a-badge",[s("a",{attrs:{href:"/"}},[s("img",{staticClass:"logo",attrs:{src:e("bae8"),alt:"logo"}}),s("span",{staticClass:"title"},[t._v("Pear Project")])])])],1),s("div",{staticClass:"desc"},[t._v(t._s(t.desc))])]),s("router-view"),t._t("default"),t._m(0)],2)])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer"},[e("div",{staticClass:"copyright"},[t._v("\n                Copyright © 2019 Pear Project\n            ")])])}],i={name:"UserLayout",props:{desc:{type:[String],default:function(){return"欢迎使用Pear Project项目管理系统"}}}},l=i,r=(e("f421"),e("c701")),o=Object(r["a"])(l,s,n,!1,null,null,null);a["default"]=o.exports},f1b1:function(t,a,e){},f421:function(t,a,e){"use strict";e("f1b1")},fef1:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"install",staticStyle:{height:"100%"}},[e("user-layout",{attrs:{desc:"正在安装Pear Project项目管理系统"}},[e("div",{staticClass:"main"},[e("a-alert",{attrs:{message:"请确认已正确修改服务端目录下的.env配置文件"}}),e("a-form",{staticClass:"user-layout-login",attrs:{layout:"horizontal",form:t.form},on:{submit:function(a){return a.preventDefault(),t.handleSubmit(a)}}},[e("a-form-item",{attrs:{label:"清除数据",labelCol:{span:6},wrapperCol:{span:18}}},[e("a-checkbox",{directives:[{name:"decorator",rawName:"v-decorator",value:["initData",{initialValue:!1,valuePropName:"checked"}],expression:"[\n                            'initData',\n                            {initialValue: false, valuePropName: 'checked'}\n                        ]"}]},[t._v("\n                        勾选后将清除预置数据\n                    ")])],1),e("a-form-item",{staticStyle:{"margin-top":"24px"},attrs:{labelCol:{span:6},wrapperCol:{span:18,offset:3}}},[e("a-button",{staticClass:"middle-btn",attrs:{size:"large",type:"primary",htmlType:"submit",loading:t.loading,disabled:t.loading,block:""}},[t.loading?e("span",[t._v("正在安装，请稍后...")]):e("span",[t._v("立即安装")])])],1)],1)],1)])],1)},n=[],i=e("82f8"),l=e("2f14"),r=e("27f0"),o={components:{UserLayout:r["default"]},data:function(){return{loading:!1,form:this.$form.createForm(this),installInfo:{mysqlHost:"",mysqlDatabase:"",mysqlUsername:"",mysqlPassword:"",mysqlPrefix:"",mysqlHostport:"",initData:!1}}},created:function(){this.checkInstall()},mounted:function(){var t=this;setTimeout((function(){t.form=t.$form.createForm(t)}),500)},methods:{handleSubmit:function(){var t=this;this.form.validateFields((function(a,e){a||(t.installInfo=e,t.install())}))},install:function(){var t=this;this.loading=!0,this.installInfo.initData=this.installInfo.initData?1:0,Object(i["c"])(this.installInfo).then((function(a){if(t.loading=!1,!Object(l["a"])(a))return!1;t.$router.push({name:"login"})})).catch((function(){t.loading=!1}))},checkInstall:function(){var t=this;Object(i["a"])().then((function(a){Object(l["a"])(a)&&t.$router.push({name:"login"})}))}}},c=o,u=e("c701"),f=Object(u["a"])(c,s,n,!1,null,null,null);a["default"]=f.exports}}]);