webpackJsonp([0],[,,,function(t,e,i){"use strict";var o=i(1),n=i(22);o.a.use(n.a)},function(t,e){},function(t,e){},function(t,e){},function(t,e,i){i(12);var o=i(0)(i(9),i(18),null,null);t.exports=o.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(4),n=(i.n(o),i(3),i(1)),s=i(7),r=i.n(s),a=i(5),l=(i.n(a),i(6));i.n(l);n.a.config.productionTip=!1,new n.a({el:"#app",render:function(t){return t(r.a)}})},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(14),n=i.n(o);e.default={name:"app",components:{home:n.a}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"home",data:function(){return{content:["Awesome","swimlane","plugin","for","awesome",'<a href="https://vuejs.org">VueJS</a>'],options:{text:"This plugin displays a list of words as a Swimlane",circular:!0,pauseOnHover:!1,rows:3,scale:1,transitionDuration:1e3,transitionDelay:100,transition:"ease-in-out"}}},computed:{textArray:function(){return this.options.text.split(" ").map(function(t){return t.trim()})}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e,i){i(11);var o=i(0)(i(10),i(16),null,null);t.exports=o.exports},function(t,e,i){i(13);var o=i(0)(i(20),i(17),"data-v-790d32de",null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("vue-swimlane",{staticClass:"demo-swimlane",attrs:{words:t.content,scale:2}}),t._v(" "),i("br"),t._v(" "),i("h3",[t._v("How to use")]),t._v(" "),i("h4",[t._v("Install")]),t._v(" "),i("code",[t._v("npm install vue-swimlane --save")]),t._v(" "),i("h4",[t._v("Use")]),t._v(" "),i("code",[t._v('\n    <vue-swimlane :words="wordsArray" :circular="circular" :rows="rows" :scale="scale" :transitionDuration="duration" :transitionDelay="delay" :transition="transition" :pauseOnHover="true"></vue-swimlane>\n  ')]),t._v(" "),i("h3",[t._v("Playground")]),t._v(" "),i("p",[t._v("Change options below to see the effect. ")]),t._v(" "),i("p",[i("vue-swimlane",{staticClass:"playground-swimlane",attrs:{words:t.textArray,circular:t.options.circular,rows:t.options.rows,scale:t.options.scale,transitionDuration:t.options.transitionDuration,transitionDelay:t.options.transitionDelay,transition:t.options.transition,pauseOnHover:t.options.pauseOnHover}})],1),t._v(" "),i("h3",[t._v("Options")]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("form",{staticClass:"form-horizontal"},[i("fieldset",[i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-lg-2 control-label"},[t._v("Text")]),t._v(" "),i("div",{staticClass:"col-lg-10"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.options.text,expression:"options.text"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.options.text},on:{input:function(e){e.target.composing||(t.options.text=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"form-group"},[i("div",{staticClass:"col-lg-offset-2 col-lg-10"},[i("div",{staticClass:"checkbox"},[i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.options.circular,expression:"options.circular"}],attrs:{type:"checkbox",value:"true"},domProps:{checked:Array.isArray(t.options.circular)?t._i(t.options.circular,"true")>-1:t.options.circular},on:{__c:function(e){var i=t.options.circular,o=e.target,n=!!o.checked;if(Array.isArray(i)){var s=t._i(i,"true");o.checked?s<0&&(t.options.circular=i.concat(["true"])):s>-1&&(t.options.circular=i.slice(0,s).concat(i.slice(s+1)))}else t.options.circular=n}}}),t._v(" Circular?\n                ")])])])]),t._v(" "),i("div",{staticClass:"form-group"},[i("div",{staticClass:"col-lg-offset-2 col-lg-10"},[i("div",{staticClass:"checkbox"},[i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.options.pauseOnHover,expression:"options.pauseOnHover"}],attrs:{type:"checkbox",value:"true"},domProps:{checked:Array.isArray(t.options.pauseOnHover)?t._i(t.options.pauseOnHover,"true")>-1:t.options.pauseOnHover},on:{__c:function(e){var i=t.options.pauseOnHover,o=e.target,n=!!o.checked;if(Array.isArray(i)){var s=t._i(i,"true");o.checked?s<0&&(t.options.pauseOnHover=i.concat(["true"])):s>-1&&(t.options.pauseOnHover=i.slice(0,s).concat(i.slice(s+1)))}else t.options.pauseOnHover=n}}}),t._v(" Pause On Hover?\n                ")])])])]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-lg-2 control-label"},[t._v("Rows")]),t._v(" "),i("div",{staticClass:"col-lg-10"},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.options.rows,expression:"options.rows",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.options.rows},on:{input:function(e){e.target.composing||(t.options.rows=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})])]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-lg-2 control-label"},[t._v("Scale")]),t._v(" "),i("div",{staticClass:"col-lg-10"},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.options.scale,expression:"options.scale",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.options.scale},on:{input:function(e){e.target.composing||(t.options.scale=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})])]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-lg-2 control-label"},[t._v("Transition Duration")]),t._v(" "),i("div",{staticClass:"col-lg-10"},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.options.transitionDuration,expression:"options.transitionDuration",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.options.transitionDuration},on:{input:function(e){e.target.composing||(t.options.transitionDuration=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})])]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-lg-2 control-label"},[t._v("Transition Delay")]),t._v(" "),i("div",{staticClass:"col-lg-10"},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.options.transitionDelay,expression:"options.transitionDelay",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.options.transitionDelay},on:{input:function(e){e.target.composing||(t.options.transitionDelay=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})])]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-lg-2 control-label"},[t._v("Transition")]),t._v(" "),i("div",{staticClass:"col-lg-10"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.options.transition,expression:"options.transition"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.options.transition},on:{input:function(e){e.target.composing||(t.options.transition=e.target.value)}}})])])])])]),t._v(" "),t._m(0)]),t._v(" "),i("h3",[t._v("Styles?")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),i("br")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-md-6"},[i("ul",{staticClass:"list-group"},[i("li",{staticClass:"list-group-item"},[i("strong",[t._v("words")]),t._v(" - string[] -\n          "),i("i",[t._v("required")]),t._v(": Array of tags or words to be used on display."),i("br"),t._v(" "),i("strong",[t._v("Supports HTML content!")])]),t._v(" "),i("li",{staticClass:"list-group-item"},[i("strong",[t._v("circular")]),t._v(" - bool (Default: false): If true, list starts from the top after completion.")]),t._v(" "),i("li",{staticClass:"list-group-item"},[i("strong",[t._v("pauseOnHover")]),t._v(" - bool (Default: false): If true, animation will pause on mouse hover.")]),t._v(" "),i("li",{staticClass:"list-group-item"},[i("strong",[t._v("rows")]),t._v(" - int (Default: 1): Number of rows always visible at a time.")]),t._v(" "),i("li",{staticClass:"list-group-item"},[i("strong",[t._v("scale")]),t._v(" - float (Default: 1): Font size scaling relative to 16px.")]),t._v(" "),i("li",{staticClass:"list-group-item"},[i("strong",[t._v("transitionDuration")]),t._v(" - float in ms (Default: 500): Animation duration for rows.")]),t._v(" "),i("li",{staticClass:"list-group-item"},[i("strong",[t._v("transitionDelay")]),t._v(" - float in ms (Default: 250): Delays between each animation duration.")]),t._v(" "),i("li",{staticClass:"list-group-item"},[i("strong",[t._v("transition")]),t._v(" - string (Default: ease-out): css transition name.")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("Almost all the styling can be applied using your own class or using default class name\n    "),i("code",[t._v("vue-swimlane")]),t._v(" except anything that effects the height of the text or the field.\n    "),i("br"),t._v(" "),i("strong",[t._v("To change height or font-size")]),t._v(" please use the integrated option\n    "),i("code",[t._v("scale")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h3",[t._v("Found any bug or feature request?\n    "),i("a",{attrs:{href:"https://github.com/mubaidr/vue-swimlane/issues"}},[t._v("Report Here!")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vue-swimlane",style:t.listParentStyle,on:{mouseenter:t.throttleToggleAnimation,mouseleave:t.throttleToggleAnimation}},[i("ul",{style:t.listStyle},t._l(t.words,function(e){return i("li",{key:e,style:t.itemStyle,domProps:{innerHTML:t._s(e)}})}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",attrs:{id:"app"}},[t._m(0),t._v(" "),i("home")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"jumbotron"},[i("h1",[t._v("Vuejs Text Swimlane Plugin")]),t._v(" "),i("p",[t._v("Display a list of words as a text Swimlane.")]),t._v(" "),i("p",[i("iframe",{attrs:{src:"https://ghbtns.com/github-btn.html?user=mubaidr&type=follow&count=true",frameborder:"0",scrolling:"0",width:"170px",height:"20px"}}),t._v(" "),i("iframe",{attrs:{src:"https://ghbtns.com/github-btn.html?user=mubaidr&repo=vue-swimlane&type=star&count=true",frameborder:"0",scrolling:"0",width:"170px",height:"20px"}})])])}]}},,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(21);i.n(o);e.default={name:"vue-swimlane",props:{words:{type:Array,required:!0},rows:{type:Number,default:1},scale:{type:Number,default:1},transitionDuration:{type:Number,default:500},transitionDelay:{type:Number,default:250},transition:{type:String,default:"ease-out"},circular:{type:Boolean,default:!1},pauseOnHover:{type:Boolean,default:!1}},data:function(){return{fontSize:16,listTop:0,moveUp:!0,resetOnNext:!1,padding:16,isPaused:!1,updatetimeoutId:null}},computed:{transitionDelayNormalized:function(){return Math.abs(this.transitionDelay||250)},transitionDurationNormalized:function(){return Math.abs(this.transitionDuration||250)},itemScaleNormalized:function(){return Math.abs(this.scale||1)},itemRowsNormalized:function(){return this.rows>this.words.length?this.words.length:Math.abs(this.rows||1)},itemHeight:function(){return this.fontSize*this.itemScaleNormalized+this.padding},itemStyle:function(){return"font-size: "+(this.itemHeight-this.padding/2)+"px!important; line-height: "+this.itemHeight+"px!important;"},listHeight:function(){return this.itemHeight*this.words.length},listStyle:function(){return"-webkit-transition: transform "+this.transitionDurationNormalized+"ms "+this.transition+"!important;\n      -moz-transition: transform  "+this.transitionDurationNormalized+"ms "+this.transition+"!important;\n      transition: transform  "+this.transitionDurationNormalized+"ms "+this.transition+"!important;\n      transform: translateY("+this.listTop+"px)!important;"},listParentStyle:function(){return"height: "+this.itemHeight*this.itemRowsNormalized+"px!important;"}},methods:{capitalize:function(t){return t.replace(/\b\w/g,function(t){return t.toUpperCase()})},updateState:function(){if(this.resetOnNext)return this.listTop=0,void(this.resetOnNext=!1);0===this.listTop&&(this.moveUp=!0),this.moveUp?this.listTop-=this.itemHeight:this.listTop+=this.itemHeight,this.listTop-this.itemHeight*this.itemRowsNormalized<=-this.listHeight&&(this.circular?this.moveUp=!1:this.resetOnNext=!0)},animate:function(){var t=this;!this.isPaused&&this.words.length>this.itemRowsNormalized&&(this.updatetimeoutId=setTimeout(function(){t.updateState(),t.animate()},this.transitionDelayNormalized+this.transitionDurationNormalized))},toggleAnimation:function(){this.isPaused=!this.isPaused,this.animate()},throttleToggleAnimation:function(){clearTimeout(this.updatetimeoutId),o(this.toggleAnimation,this.transitionDelayNormalized,{leading:!0})()}},mounted:function(){this.animate()}}},function(t,e,i){(function(e){function i(t,e,i){function n(e){var i=d,o=h;return d=h=void 0,D=e,_=t.apply(o,i)}function s(t){return D=t,b=setTimeout(c,e),N?n(t):_}function l(t){var i=t-C,o=t-D,n=e-i;return O?w(n,g-o):n}function u(t){var i=t-C,o=t-D;return void 0===C||i>=e||i<0||O&&o>=g}function c(){var t=x();if(u(t))return p(t);b=setTimeout(c,l(t))}function p(t){return b=void 0,H&&d?n(t):(d=h=void 0,_)}function m(){void 0!==b&&clearTimeout(b),D=0,d=C=h=b=void 0}function v(){return void 0===b?_:p(x())}function f(){var t=x(),i=u(t);if(d=arguments,h=this,C=t,i){if(void 0===b)return s(C);if(O)return b=setTimeout(c,e),n(C)}return void 0===b&&(b=setTimeout(c,e)),_}var d,h,g,_,b,C,D=0,N=!1,O=!1,H=!0;if("function"!=typeof t)throw new TypeError(a);return e=r(e)||0,o(i)&&(N=!!i.leading,O="maxWait"in i,g=O?y(r(i.maxWait)||0,e):g,H="trailing"in i?!!i.trailing:H),f.cancel=m,f.flush=v,f}function o(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function n(t){return!!t&&"object"==typeof t}function s(t){return"symbol"==typeof t||n(t)&&b.call(t)==u}function r(t){if("number"==typeof t)return t;if(s(t))return l;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(c,"");var i=m.test(t);return i||v.test(t)?f(t.slice(2),i?2:8):p.test(t)?l:+t}var a="Expected a function",l=NaN,u="[object Symbol]",c=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,v=/^0o[0-7]+$/i,f=parseInt,d="object"==typeof e&&e&&e.Object===Object&&e,h="object"==typeof self&&self&&self.Object===Object&&self,g=d||h||Function("return this")(),_=Object.prototype,b=_.toString,y=Math.max,w=Math.min,x=function(){return g.Date.now()};t.exports=i}).call(e,i(2))},function(t,e,i){"use strict";var o=i(15),n=i.n(o);const s={install:function(t){t.component(n.a.name,n.a)}};e.a=s,"undefined"!=typeof window&&window.Vue&&window.Vue.use(s)}],[8]);
//# sourceMappingURL=app.838f08b2803d729c198b.js.map