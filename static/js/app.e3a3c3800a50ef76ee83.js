webpackJsonp([0],{0:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),r=a("8+8L"),s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"translateForm"}},[a("form",{staticClass:"well form-inline",attrs:{id:"mainform"},on:{submit:t.formSubmit}},[t.isTransform?a("input",{directives:[{name:"model",rawName:"v-model",value:t.textToTranslate,expression:"textToTranslate"}],staticClass:"form-control",attrs:{id:"input",type:"text",placeholder:"请输入需要翻译的词语"},domProps:{value:t.textToTranslate},on:{input:function(e){e.target.composing||(t.textToTranslate=e.target.value)}}}):a("div",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.textToTranslatelong,expression:"textToTranslatelong"}],staticClass:"form-control",attrs:{id:"textinput",type:"text",placeholder:"请输入需要翻译的内容",rows:"5"},domProps:{value:t.textToTranslatelong},on:{input:function(e){e.target.composing||(t.textToTranslatelong=e.target.value)}}})]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.language,expression:"language"}],staticClass:"form-control",attrs:{id:"language"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.language=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"en"}},[t._v("English")]),t._v(" "),a("option",{attrs:{value:"zh"}},[t._v("Chinese")]),t._v(" "),a("option",{attrs:{value:"ru"}},[t._v("Russian")]),t._v(" "),a("option",{attrs:{value:"ko"}},[t._v("Korean")]),t._v(" "),a("option",{attrs:{value:"ja"}},[t._v("Janpenese")]),t._v(" "),a("option",{attrs:{value:"de"}},[t._v("German")]),t._v(" "),a("option",{attrs:{value:"fr"}},[t._v("French")])]),t._v(" "),a("input",{staticClass:"btn btn-primary btn-sm",attrs:{id:"submit",type:"submit",value:"翻译"}})])])},staticRenderFns:[]};var o={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"translateOutput"}},[this._v("\n    "+this._s(this.translatedText)+"\n")])},staticRenderFns:[]};var i={name:"App",data:function(){return{translatedText:"",transformBtn:"译词",isTransform:!0}},components:{TranslateForm:a("VU/8")({name:"translateForm",props:["isTransform"],data:function(){return{textToTranslate:"",textToTranslatelong:"",language:"en"}},methods:{formSubmit:function(t){t.preventDefault(),this.isTransform?(this.$emit("formSubmit",this.textToTranslate,this.language),this.textToTranslatelong=""):(this.$emit("formSubmit",this.textToTranslatelong,this.language),this.textToTranslate="")}}},s,!1,function(t){a("pTQy")},null,null).exports,TranslateOutput:a("VU/8")({name:"translateOutput",props:["translatedText"]},o,!1,function(t){a("YtUl")},null,null).exports},methods:{translateText:function(t,e){var a=this;if(t)this.$http.get("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180424T092532Z.ed97b7a1aeff0103.c7506aa3257fbc266e55a10ce82185d38fe4843a&lang="+e+"&text="+t).then(function(t){a.translatedText=t.body.text[0]});else{var n=Math.floor(3*Math.random()+0);this.translatedText=["_(:> 」∠)_ 小主还没有输入内容哦，尝试输入hello~","小M也可以翻译整句话哟，请切换到译句尝试 ( σ'ω')σ","用小M查词，那是相当的快！快来输入吧 (≥◇≤)"][n]}},transform:function(t){t.preventDefault(),this.translatedText="";"译句"==this.transformBtn?(this.transformBtn="译词",this.isTransform=!0):"译词"==this.transformBtn?(this.transformBtn="译句",this.isTransform=!1):this.transformBtn="不好意思，蒙圈了@_@"}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("h1",[t._v("在线译")]),t._v(" "),a("h5",{staticClass:"text-muted"},[a("a",{on:{click:t.transform}},[a("i",{staticClass:"fa fa-refresh"}),t._v(" "+t._s(t.transformBtn))]),t._v("\n        让语言回归于简单")]),t._v(" "),a("translateForm",{attrs:{isTransform:t.isTransform},on:{formSubmit:t.translateText}}),t._v(" "),a("div",{attrs:{id:"container"}},[a("div",{staticClass:"well",attrs:{id:"res"}},[a("translateOutput",{domProps:{textContent:t._s(t.translatedText)}})],1)]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"footer"}},[e("span",[this._v("Developed by Ming /")]),this._v(" "),e("span",[this._v("email:18533608762@163.com")])])}]};var u=a("VU/8")(i,l,!1,function(t){a("WgOo")},null,null).exports;n.a.use(r.a),n.a.config.productionTip=!1,new n.a({el:"#app",components:{App:u},template:"<App/>"}),console.log("出现问题请及时联系我，邮箱18533608762@163.com")},WgOo:function(t,e){},YtUl:function(t,e){},pTQy:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e3a3c3800a50ef76ee83.js.map