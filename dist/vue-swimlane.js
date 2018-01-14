!function(){"use strict";var t="undefined"==typeof global?self:global;if("function"!=typeof t.require){var e={},i={},n={},r={}.hasOwnProperty,o=/^\.\.?(\/|$)/,s=function(t,e){for(var i,n=[],r=(o.test(e)?t+"/"+e:e).split("/"),s=0,a=r.length;s<a;s++)i=r[s],".."===i?n.pop():"."!==i&&""!==i&&n.push(i);return n.join("/")},a=function(t){return t.split("/").slice(0,-1).join("/")},u=function(e){return function(i){var n=s(a(e),i);return t.require(n,e)}},l=function(t,e){var n=g&&g.createHot(t),r={id:t,exports:{},hot:n};return i[t]=r,e(r.exports,u(t),r),r.exports},h=function(t){return n[t]?h(n[t]):t},d=function(t,e){return h(s(a(t),e))},f=function(t,n){null==n&&(n="/");var o=h(t);if(r.call(i,o))return i[o].exports;if(r.call(e,o))return l(o,e[o]);throw new Error("Cannot find module '"+t+"' from '"+n+"'")};f.alias=function(t,e){n[e]=t};var m=/\.[^.\/]+$/,c=/\/index(\.[^\/]+)?$/,p=function(t){if(m.test(t)){var e=t.replace(m,"");r.call(n,e)&&n[e].replace(m,"")!==e+"/index"||(n[e]=t)}if(c.test(t)){var i=t.replace(c,"");r.call(n,i)||(n[i]=t)}};f.register=f.define=function(t,n){if(t&&"object"==typeof t)for(var o in t)r.call(t,o)&&f.register(o,t[o]);else e[t]=n,delete i[t],p(t)},f.list=function(){var t=[];for(var i in e)r.call(e,i)&&t.push(i);return t};var g=t._hmr&&new t._hmr(d,f,e,i);f._cache=i,f.hmr=g&&g.wrap,f.brunch=!0,t.require=f}}(),function(){"undefined"==typeof window?this:window;require.register("index.js",function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(t,"__esModule",{value:!0});var r=e("./vue-swimlane"),o=n(r),s={install:function(t){t.component(o["default"].name,o["default"])}};t["default"]=s,"undefined"!=typeof window&&window.Vue&&window.Vue.use(s)}),require.register("vue-swimlane.vue",function(t,e,i){!function(){"use strict";function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e["default"]=t,e}Object.defineProperty(t,"__esModule",{value:!0});var n=e("lodash.debounce"),r=i(n);t["default"]={name:"vue-swimlane",props:{words:{type:Array,required:!0},rows:{type:Number,"default":1},scale:{type:Number,"default":1},transitionDuration:{type:Number,"default":500},transitionDelay:{type:Number,"default":250},transition:{type:String,"default":"ease-out"},circular:{type:Boolean,"default":!1},pauseOnHover:{type:Boolean,"default":!1}},data:function(){return{fontSize:16,listTop:0,moveUp:!0,resetOnNext:!1,padding:16,isPaused:!1,updatetimeoutId:null}},computed:{transitionDelayNormalized:function(){return Math.abs(this.transitionDelay||250)},transitionDurationNormalized:function(){return Math.abs(this.transitionDuration||250)},itemScaleNormalized:function(){return Math.abs(this.scale||1)},itemRowsNormalized:function(){return this.rows>this.words.length?this.words.length:Math.abs(this.rows||1)},itemHeight:function(){return this.fontSize*this.itemScaleNormalized+this.padding},itemStyle:function(){return"font-size: "+(this.itemHeight-this.padding/2)+"px!important; line-height: "+this.itemHeight+"px!important;"},listHeight:function(){return this.itemHeight*this.words.length},listStyle:function(){return"-webkit-transition: transform "+this.transitionDurationNormalized+"ms "+this.transition+"!important;\n          -moz-transition: transform  "+this.transitionDurationNormalized+"ms "+this.transition+"!important;\n          transition: transform  "+this.transitionDurationNormalized+"ms "+this.transition+"!important;\n          transform: translateY("+this.listTop+"px)!important;"},listParentStyle:function(){return"height: "+this.itemHeight*this.itemRowsNormalized+"px!important;"}},methods:{capitalize:function(t){return t.replace(/\b\w/g,function(t){return t.toUpperCase()})},updateState:function(){return this.resetOnNext?(this.listTop=0,void(this.resetOnNext=!1)):(0===this.listTop&&(this.moveUp=!0),this.moveUp?this.listTop-=this.itemHeight:this.listTop+=this.itemHeight,void(this.listTop-this.itemHeight*this.itemRowsNormalized<=-this.listHeight&&(this.circular?this.moveUp=!1:this.resetOnNext=!0)))},animate:function(){var t=this;!this.isPaused&&this.words.length>this.itemRowsNormalized&&(this.updatetimeoutId=setTimeout(function(){t.updateState(),t.animate()},this.transitionDelayNormalized+this.transitionDurationNormalized))},toggleAnimation:function(){this.isPaused=!this.isPaused,this.animate()},throttleToggleAnimation:function(){clearTimeout(this.updatetimeoutId),r(this.toggleAnimation,this.transitionDelayNormalized,{leading:!0})()}},mounted:function(){this.animate()}}}(),i.exports.__esModule&&(i.exports=i.exports["default"]);var n="function"==typeof i.exports?i.exports.options:i.exports;n.render=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vue-swimlane",style:t.listParentStyle,on:{mouseenter:t.throttleToggleAnimation,mouseleave:t.throttleToggleAnimation}},[i("ul",{style:t.listStyle},t._l(t.words,function(e){return i("li",{key:e,style:t.itemStyle,domProps:{innerHTML:t._s(e)}})}))])},n.staticRenderFns=[]}),require.register("___globals___",function(t,e,i){})}(),require("___globals___");