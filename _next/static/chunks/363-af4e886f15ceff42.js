(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[363],{3096:function(t,e,n){var r="Expected a function",i=0/0,a=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,f="object"==typeof self&&self&&self.Object===Object&&self,d=u||f||Function("return this")(),p=Object.prototype.toString,h=Math.max,g=Math.min,m=function(){return d.Date.now()};function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if("symbol"==typeof(e=t)||(n=e)&&"object"==typeof n&&"[object Symbol]"==p.call(e))return i;if(v(t)){var e,n,r="function"==typeof t.valueOf?t.valueOf():t;t=v(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var u=s.test(t);return u||l.test(t)?c(t.slice(2),u?2:8):o.test(t)?i:+t}t.exports=function(t,e,n){var i=!0,a=!0;if("function"!=typeof t)throw TypeError(r);return v(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),function(t,e,n){var i,a,o,s,l,c,u=0,f=!1,d=!1,p=!0;if("function"!=typeof t)throw TypeError(r);function w(e){var n=i,r=a;return i=a=void 0,u=e,s=t.apply(r,n)}function b(t){var n=t-c,r=t-u;return void 0===c||n>=e||n<0||d&&r>=o}function _(){var t,n,r,i=m();if(b(i))return T(i);l=setTimeout(_,(t=i-c,n=i-u,r=e-t,d?g(r,o-n):r))}function T(t){return(l=void 0,p&&i)?w(t):(i=a=void 0,s)}function S(){var t,n=m(),r=b(n);if(i=arguments,a=this,c=n,r){if(void 0===l)return u=t=c,l=setTimeout(_,e),f?w(t):s;if(d)return l=setTimeout(_,e),w(c)}return void 0===l&&(l=setTimeout(_,e)),s}return e=y(e)||0,v(n)&&(f=!!n.leading,o=(d="maxWait"in n)?h(y(n.maxWait)||0,e):o,p="trailing"in n?!!n.trailing:p),S.cancel=function(){void 0!==l&&clearTimeout(l),u=0,i=c=a=l=void 0},S.flush=function(){return void 0===l?s:T(m())},S}(t,e,{leading:i,maxWait:e,trailing:a})}},9008:function(t,e,n){t.exports=n(3121)},2703:function(t,e,n){"use strict";var r=n(414);function i(){}function a(){}a.resetWarningCache=i,t.exports=function(){function t(t,e,n,i,a,o){if(o!==r){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:i};return n.PropTypes=n,n}},5697:function(t,e,n){t.exports=n(2703)()},414:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},8357:function(t,e,n){"use strict";n.d(e,{w_:function(){return l}});var r=n(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(i),o=function(){return(o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},s=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&0>e.indexOf(r)&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)0>e.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function l(t){return function(e){return r.createElement(c,o({attr:o({},t.attr)},e),function t(e){return e&&e.map(function(e,n){return r.createElement(e.tag,o({key:n},e.attr),t(e.child))})}(t.child))}}function c(t){var e=function(e){var n,i=t.attr,a=t.size,l=t.title,c=s(t,["attr","size","title"]),u=a||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,i,c,{className:n,style:o(o({color:t.color||e.color},e.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),t.children)};return void 0!==a?r.createElement(a.Consumer,null,function(t){return e(t)}):e(i)}},8477:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=o(n(7294)),a=o(n(1093));function o(t){return t&&t.__esModule?t:{default:t}}var s=function(t){function e(){return!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&("object"==typeof e||"function"==typeof e)?e:t}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"render",value:function(){return i.default.createElement("input",this.props,this.props.children)}}]),e}(i.default.Component);e.default=(0,a.default)(s)},5343:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=l(n(7294)),o=l(n(8e3)),s=l(n(5697));function l(t){return t&&t.__esModule?t:{default:t}}var c=function(t){function e(){return!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&("object"==typeof e||"function"==typeof e)?e:t}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),i(e,[{key:"render",value:function(){var t=this,e=r({},this.props);return e.parentBindings&&delete e.parentBindings,a.default.createElement("div",r({},e,{ref:function(e){t.props.parentBindings.domNode=e}}),this.props.children)}}]),e}(a.default.Component);c.propTypes={name:s.default.string,id:s.default.string},e.default=(0,o.default)(c)},8939:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(n(7294)),i=a(n(1093));function a(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&("object"==typeof e||"function"==typeof e)?e:t}var s=function(t){function e(){!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,e);for(var t,n,i,a=arguments.length,s=Array(a),l=0;l<a;l++)s[l]=arguments[l];return n=i=o(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(s))),i.render=function(){return r.default.createElement("a",i.props,i.props.children)},o(i,n)}return!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(r.default.Component);e.default=(0,i.default)(s)},6261:function(t,e,n){"use strict";e.rU=void 0;var r=p(n(8939)),i=p(n(8477)),a=p(n(5343)),o=p(n(2628)),s=p(n(4592)),l=p(n(7606)),c=p(n(3200)),u=p(n(1093)),f=p(n(8e3)),d=p(n(8482));function p(t){return t&&t.__esModule?t:{default:t}}e.rU=r.default,i.default,a.default,o.default,s.default,l.default,c.default,u.default,f.default,d.default,r.default,i.default,a.default,o.default,s.default,l.default,c.default,u.default,f.default,d.default},8482:function(t,e,n){"use strict";var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function a(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&("object"==typeof e||"function"==typeof e)?e:t}function s(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var l=n(7294);n(3935),n(4259);var c=n(7606),u=n(2628),f=n(5697),d=n(9678),p={to:f.string.isRequired,containerId:f.string,container:f.object,activeClass:f.string,spy:f.bool,smooth:f.oneOfType([f.bool,f.string]),offset:f.number,delay:f.number,isDynamic:f.bool,onClick:f.func,duration:f.oneOfType([f.number,f.func]),absolute:f.bool,onSetActive:f.func,onSetInactive:f.func,ignoreCancelEvents:f.bool,hashSpy:f.bool,spyThrottle:f.number};t.exports={Scroll:function(t,e){console.warn("Helpers.Scroll is deprecated since v1.7.0");var n=e||u,f=function(e){function u(t){a(this,u);var e=o(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,t));return h.call(e),e.state={active:!1},e}return s(u,e),i(u,[{key:"getScrollSpyContainer",value:function(){var t=this.props.containerId,e=this.props.container;return t?document.getElementById(t):e&&e.nodeType?e:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var t=this.getScrollSpyContainer();c.isMounted(t)||c.mount(t,this.props.spyThrottle),this.props.hashSpy&&(d.isMounted()||d.mount(n),d.mapContainer(this.props.to,t)),this.props.spy&&c.addStateHandler(this.stateHandler),c.addSpyHandler(this.spyHandler,t),this.setState({container:t})}}},{key:"componentWillUnmount",value:function(){c.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var e="";e=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=r({},this.props);for(var i in p)n.hasOwnProperty(i)&&delete n[i];return n.className=e,n.onClick=this.handleClick,l.createElement(t,n)}}]),u}(l.Component),h=function(){var t=this;this.scrollTo=function(e,i){n.scrollTo(e,r({},t.state,i))},this.handleClick=function(e){t.props.onClick&&t.props.onClick(e),e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),t.scrollTo(t.props.to,t.props)},this.stateHandler=function(){n.getActiveLink()!==t.props.to&&(null!==t.state&&t.state.active&&t.props.onSetInactive&&t.props.onSetInactive(),t.setState({active:!1}))},this.spyHandler=function(e){var r=t.getScrollSpyContainer();if(!d.isMounted()||d.isInitialized()){var i=t.props.to,a=null,o=0,s=0,l=0;if(r.getBoundingClientRect&&(l=r.getBoundingClientRect().top),!a||t.props.isDynamic){if(!(a=n.get(i)))return;var u=a.getBoundingClientRect();s=(o=u.top-l+e)+u.height}var f=e-t.props.offset,p=f>=Math.floor(o)&&f<Math.floor(s),h=f<Math.floor(o)||f>=Math.floor(s),g=n.getActiveLink();return h?(i===g&&n.setActiveLink(void 0),t.props.hashSpy&&d.getHash()===i&&d.changeHash(),t.props.spy&&t.state.active&&(t.setState({active:!1}),t.props.onSetInactive&&t.props.onSetInactive()),c.updateStates()):p&&g!==i?(n.setActiveLink(i),t.props.hashSpy&&d.changeHash(i),t.props.spy&&(t.setState({active:!0}),t.props.onSetActive&&t.props.onSetActive(i)),c.updateStates()):void 0}}};return f.propTypes=p,f.defaultProps={offset:0},f},Element:function(t){console.warn("Helpers.Element is deprecated since v1.7.0");var e=function(e){function n(t){a(this,n);var e=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e.childBindings={domNode:null},e}return s(n,e),i(n,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(t){this.props.name!==t.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;u.unregister(this.props.name)}},{key:"registerElems",value:function(t){u.register(t,this.childBindings.domNode)}},{key:"render",value:function(){return l.createElement(t,r({},this.props,{parentBindings:this.childBindings}))}}]),n}(l.Component);return e.propTypes={name:f.string,id:f.string},e}}},3200:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};s(n(4259));var i=s(n(9765)),a=s(n(140)),o=s(n(4592));function s(t){return t&&t.__esModule?t:{default:t}}var l=function(t){return i.default[t.smooth]||i.default.defaultEasing},c=function(){if("undefined"!=typeof window)return window.requestAnimationFrame||window.webkitRequestAnimationFrame}()||function(t,e,n){window.setTimeout(t,n||1e3/60,new Date().getTime())},u=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},f=function(t){var e=t.data.containerElement;if(e&&e!==document&&e!==document.body)return e.scrollLeft;var n=void 0!==window.pageXOffset,r="CSS1Compat"===(document.compatMode||"");return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft},d=function(t){var e=t.data.containerElement;if(e&&e!==document&&e!==document.body)return e.scrollTop;var n=void 0!==window.pageXOffset,r="CSS1Compat"===(document.compatMode||"");return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop},p=function(t){var e=t.data.containerElement;if(e&&e!==document&&e!==document.body)return e.scrollWidth-e.offsetWidth;var n=document.body,r=document.documentElement;return Math.max(n.scrollWidth,n.offsetWidth,r.clientWidth,r.scrollWidth,r.offsetWidth)},h=function(t){var e=t.data.containerElement;if(e&&e!==document&&e!==document.body)return e.scrollHeight-e.offsetHeight;var n=document.body,r=document.documentElement;return Math.max(n.scrollHeight,n.offsetHeight,r.clientHeight,r.scrollHeight,r.offsetHeight)},g=function t(e,n,r){var i=n.data;if(!n.ignoreCancelEvents&&i.cancel){o.default.registered.end&&o.default.registered.end(i.to,i.target,i.currentPositionY);return}if(i.delta=Math.round(i.targetPosition-i.startPosition),null===i.start&&(i.start=r),i.progress=r-i.start,i.percent=i.progress>=i.duration?1:e(i.progress/i.duration),i.currentPosition=i.startPosition+Math.ceil(i.delta*i.percent),i.containerElement&&i.containerElement!==document&&i.containerElement!==document.body?n.horizontal?i.containerElement.scrollLeft=i.currentPosition:i.containerElement.scrollTop=i.currentPosition:n.horizontal?window.scrollTo(i.currentPosition,0):window.scrollTo(0,i.currentPosition),i.percent<1){var a=t.bind(null,e,n);c.call(window,a);return}o.default.registered.end&&o.default.registered.end(i.to,i.target,i.currentPosition)},m=function(t){t.data.containerElement=t?t.containerId?document.getElementById(t.containerId):t.container&&t.container.nodeType?t.container:document:null},v=function(t,e,n,r){if(e.data=e.data||u(),window.clearTimeout(e.data.delayTimeout),a.default.subscribe(function(){e.data.cancel=!0}),m(e),e.data.start=null,e.data.cancel=!1,e.data.startPosition=e.horizontal?f(e):d(e),e.data.targetPosition=e.absolute?t:t+e.data.startPosition,e.data.startPosition===e.data.targetPosition){o.default.registered.end&&o.default.registered.end(e.data.to,e.data.target,e.data.currentPosition);return}e.data.delta=Math.round(e.data.targetPosition-e.data.startPosition),e.data.duration=("function"==typeof(i=e.duration)?i:function(){return i})(e.data.delta),e.data.duration=isNaN(parseFloat(e.data.duration))?1e3:parseFloat(e.data.duration),e.data.to=n,e.data.target=r;var i,s=l(e),p=g.bind(null,s,e);if(e&&e.delay>0){e.data.delayTimeout=window.setTimeout(function(){o.default.registered.begin&&o.default.registered.begin(e.data.to,e.data.target),c.call(window,p)},e.delay);return}o.default.registered.begin&&o.default.registered.begin(e.data.to,e.data.target),c.call(window,p)},y=function(t){return(t=r({},t)).data=t.data||u(),t.absolute=!0,t};e.default={animateTopScroll:v,getAnimationType:l,scrollToTop:function(t){v(0,y(t))},scrollToBottom:function(t){m(t=y(t)),v(t.horizontal?p(t):h(t),t)},scrollTo:function(t,e){v(t,y(e))},scrollMore:function(t,e){m(e=y(e)),v(t+(e.horizontal?f(e):d(e)),e)}}},140:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(5236),i=["mousedown","mousewheel","touchmove","keydown"];e.default={subscribe:function(t){return"undefined"!=typeof document&&i.forEach(function(e){return(0,r.addPassiveEventListener)(document,e,t)})}}},5236:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.addPassiveEventListener=function(t,e,n){var r=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(n){}return t}();t.addEventListener(e,n,!!r&&{passive:!0})},e.removePassiveEventListener=function(t,e,n){t.removeEventListener(e,n)}},8e3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=l(n(7294));l(n(3935));var o=l(n(2628)),s=l(n(5697));function l(t){return t&&t.__esModule?t:{default:t}}e.default=function(t){var e=function(e){function n(t){!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,n);var e=function(t,e){if(!t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&("object"==typeof e||"function"==typeof e)?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e.childBindings={domNode:null},e}return!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,e),i(n,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(t){this.props.name!==t.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;o.default.unregister(this.props.name)}},{key:"registerElems",value:function(t){o.default.register(t,this.childBindings.domNode)}},{key:"render",value:function(){return a.default.createElement(t,r({},this.props,{parentBindings:this.childBindings}))}}]),n}(a.default.Component);return e.propTypes={name:s.default.string,id:s.default.string},e}},4592:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={registered:{},scrollEvent:{register:function(t,e){n.registered[t]=e},remove:function(t){n.registered[t]=null}}};e.default=n},9678:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(5236);var r,i=(r=n(4259))&&r.__esModule?r:{default:r};e.default={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(t){this.scroller=t,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(t,e){this.containers[t]=e},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var t=this,e=this.getHash();e?window.setTimeout(function(){t.scrollTo(e,!0),t.initialized=!0},10):this.initialized=!0},scrollTo:function(t,e){var n=this.scroller;if(n.get(t)&&(e||t!==n.getActiveLink())){var r=this.containers[t]||document;n.scrollTo(t,{container:r})}},getHash:function(){return i.default.getHash()},changeHash:function(t,e){this.isInitialized()&&i.default.getHash()!==t&&i.default.updateHash(t,e)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}}},1093:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=u(n(7294)),o=u(n(7606)),s=u(n(2628)),l=u(n(5697)),c=u(n(9678));function u(t){return t&&t.__esModule?t:{default:t}}var f={to:l.default.string.isRequired,containerId:l.default.string,container:l.default.object,activeClass:l.default.string,activeStyle:l.default.object,spy:l.default.bool,horizontal:l.default.bool,smooth:l.default.oneOfType([l.default.bool,l.default.string]),offset:l.default.number,delay:l.default.number,isDynamic:l.default.bool,onClick:l.default.func,duration:l.default.oneOfType([l.default.number,l.default.func]),absolute:l.default.bool,onSetActive:l.default.func,onSetInactive:l.default.func,ignoreCancelEvents:l.default.bool,hashSpy:l.default.bool,saveHashHistory:l.default.bool,spyThrottle:l.default.number};e.default=function(t,e){var n=e||s.default,l=function(e){function s(t){!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,s);var e=function(t,e){if(!t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&("object"==typeof e||"function"==typeof e)?e:t}(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,t));return u.call(e),e.state={active:!1},e}return!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(s,e),i(s,[{key:"getScrollSpyContainer",value:function(){var t=this.props.containerId,e=this.props.container;return t&&!e?document.getElementById(t):e&&e.nodeType?e:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var t=this.getScrollSpyContainer();o.default.isMounted(t)||o.default.mount(t,this.props.spyThrottle),this.props.hashSpy&&(c.default.isMounted()||c.default.mount(n),c.default.mapContainer(this.props.to,t)),o.default.addSpyHandler(this.spyHandler,t),this.setState({container:t})}}},{key:"componentWillUnmount",value:function(){o.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var e="";e=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n={};n=this.state&&this.state.active?r({},this.props.style,this.props.activeStyle):r({},this.props.style);var i=r({},this.props);for(var o in f)i.hasOwnProperty(o)&&delete i[o];return i.className=e,i.style=n,i.onClick=this.handleClick,a.default.createElement(t,i)}}]),s}(a.default.PureComponent),u=function(){var t=this;this.scrollTo=function(e,i){n.scrollTo(e,r({},t.state,i))},this.handleClick=function(e){t.props.onClick&&t.props.onClick(e),e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),t.scrollTo(t.props.to,t.props)},this.spyHandler=function(e,r){var i=t.getScrollSpyContainer();if(!c.default.isMounted()||c.default.isInitialized()){var a=t.props.horizontal,o=t.props.to,s=null,l=void 0,u=void 0;if(a){var f=0,d=0,p=0;if(i.getBoundingClientRect&&(p=i.getBoundingClientRect().left),!s||t.props.isDynamic){if(!(s=n.get(o)))return;var h=s.getBoundingClientRect();d=(f=h.left-p+e)+h.width}var g=e-t.props.offset;l=g>=Math.floor(f)&&g<Math.floor(d),u=g<Math.floor(f)||g>=Math.floor(d)}else{var m=0,v=0,y=0;if(i.getBoundingClientRect&&(y=i.getBoundingClientRect().top),!s||t.props.isDynamic){if(!(s=n.get(o)))return;var w=s.getBoundingClientRect();v=(m=w.top-y+r)+w.height}var b=r-t.props.offset;l=b>=Math.floor(m)&&b<Math.floor(v),u=b<Math.floor(m)||b>=Math.floor(v)}var _=n.getActiveLink();if(u){if(o===_&&n.setActiveLink(void 0),t.props.hashSpy&&c.default.getHash()===o){var T=t.props.saveHashHistory;c.default.changeHash("",void 0!==T&&T)}t.props.spy&&t.state.active&&(t.setState({active:!1}),t.props.onSetInactive&&t.props.onSetInactive(o,s))}if(l&&(_!==o||!1===t.state.active)){n.setActiveLink(o);var S=t.props.saveHashHistory;t.props.hashSpy&&c.default.changeHash(o,void 0!==S&&S),t.props.spy&&(t.setState({active:!0}),t.props.onSetActive&&t.props.onSetActive(o,s))}}}};return l.propTypes=f,l.defaultProps={offset:0},l}},7606:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,i=(r=n(3096))&&r.__esModule?r:{default:r},a=n(5236),o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:66;return(0,i.default)(t,e)},s={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(t,e){if(t){var n=o(function(e){s.scrollHandler(t)},e);s.scrollSpyContainers.push(t),(0,a.addPassiveEventListener)(t,"scroll",n)}},isMounted:function(t){return -1!==s.scrollSpyContainers.indexOf(t)},currentPositionX:function(t){if(t!==document)return t.scrollLeft;var e=void 0!==window.pageYOffset,n="CSS1Compat"===(document.compatMode||"");return e?window.pageXOffset:n?document.documentElement.scrollLeft:document.body.scrollLeft},currentPositionY:function(t){if(t!==document)return t.scrollTop;var e=void 0!==window.pageXOffset,n="CSS1Compat"===(document.compatMode||"");return e?window.pageYOffset:n?document.documentElement.scrollTop:document.body.scrollTop},scrollHandler:function(t){(s.scrollSpyContainers[s.scrollSpyContainers.indexOf(t)].spyCallbacks||[]).forEach(function(e){return e(s.currentPositionX(t),s.currentPositionY(t))})},addStateHandler:function(t){s.spySetState.push(t)},addSpyHandler:function(t,e){var n=s.scrollSpyContainers[s.scrollSpyContainers.indexOf(e)];n.spyCallbacks||(n.spyCallbacks=[]),n.spyCallbacks.push(t),t(s.currentPositionX(e),s.currentPositionY(e))},updateStates:function(){s.spySetState.forEach(function(t){return t()})},unmount:function(t,e){s.scrollSpyContainers.forEach(function(t){return t.spyCallbacks&&t.spyCallbacks.length&&t.spyCallbacks.indexOf(e)>-1&&t.spyCallbacks.splice(t.spyCallbacks.indexOf(e),1)}),s.spySetState&&s.spySetState.length&&s.spySetState.indexOf(t)>-1&&s.spySetState.splice(s.spySetState.indexOf(t),1),document.removeEventListener("scroll",s.scrollHandler)},update:function(){return s.scrollSpyContainers.forEach(function(t){return s.scrollHandler(t)})}};e.default=s},2628:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=s(n(4259)),a=s(n(3200)),o=s(n(4592));function s(t){return t&&t.__esModule?t:{default:t}}var l={},c=void 0;e.default={unmount:function(){l={}},register:function(t,e){l[t]=e},unregister:function(t){delete l[t]},get:function(t){return l[t]||document.getElementById(t)||document.getElementsByName(t)[0]||document.getElementsByClassName(t)[0]},setActiveLink:function(t){return c=t},getActiveLink:function(){return c},scrollTo:function(t,e){var n=this.get(t);if(!n){console.warn("target Element not found");return}var s=(e=r({},e,{absolute:!1})).containerId,l=e.container,c=void 0;c=s?document.getElementById(s):l&&l.nodeType?l:document,e.absolute=!0;var u=e.horizontal,f=i.default.scrollOffset(c,n,u)+(e.offset||0);if(!e.smooth){o.default.registered.begin&&o.default.registered.begin(t,n),c===document?e.horizontal?window.scrollTo(f,0):window.scrollTo(0,f):c.scrollTop=f,o.default.registered.end&&o.default.registered.end(t,n);return}a.default.animateTopScroll(f,e,t,n)}}},9765:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={defaultEasing:function(t){return t<.5?Math.pow(2*t,2)/2:1-Math.pow((1-t)*2,2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}}},4259:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e){for(var n=t.offsetTop,r=t.offsetParent;r&&!e(r);)n+=r.offsetTop,r=r.offsetParent;return{offsetTop:n,offsetParent:r}};e.default={updateHash:function(t,e){var n=0===t.indexOf("#")?t.substring(1):t,r=n?"#"+n:"",i=window&&window.location,a=r?i.pathname+i.search+r:i.pathname+i.search;e?history.pushState(history.state,"",a):history.replaceState(history.state,"",a)},getHash:function(){return window.location.hash.replace(/^#/,"")},filterElementInContainer:function(t){return function(e){return t.contains?t!=e&&t.contains(e):!!(16&t.compareDocumentPosition(e))}},scrollOffset:function(t,e,r){if(r)return t===document?e.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):"static"!==getComputedStyle(t).position?e.offsetLeft:e.offsetLeft-t.offsetLeft;if(t===document)return e.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if("static"!==getComputedStyle(t).position){if(e.offsetParent!==t){var i=n(e,function(e){return e===t||e===document}),a=i.offsetTop;if(i.offsetParent!==t)throw Error("Seems containerElement is not an ancestor of the Element");return a}return e.offsetTop}if(e.offsetParent===t.offsetParent)return e.offsetTop-t.offsetTop;var o=function(t){return t===document};return n(e,o).offsetTop-n(t,o).offsetTop}}},7578:function(t,e,n){"use strict";var r=n(2238),i=n(8463),a=n(4444),o=n(6531);let s="@firebase/installations",l="0.6.0",c=`w:${l}`,u="FIS_v2",f=new a.LL("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function d(t){return t instanceof a.ZR&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function h(t){return{token:t.token,requestStatus:2,expiresIn:Number(t.expiresIn.replace("s","000")),creationTime:Date.now()}}async function g(t,e){let n=await e.json(),r=n.error;return f.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function m({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}async function v(t){let e=await t();return e.status>=500&&e.status<600?t():e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y({appConfig:t,heartbeatServiceProvider:e},{fid:n}){let r=p(t),i=m(t),a=e.getImmediate({optional:!0});if(a){let o=await a.getHeartbeatsHeader();o&&i.append("x-firebase-client",o)}let s={fid:n,authVersion:u,appId:t.appId,sdkVersion:c},l={method:"POST",headers:i,body:JSON.stringify(s)},f=await v(()=>fetch(r,l));if(f.ok){let d=await f.json(),y={fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:h(d.authToken)};return y}throw await g("Create Installation",f)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let b=/^[cdef][\w-]{21}$/;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let T=new Map;function S(t,e){let n=_(t);E(n,e),function(t,e){let n=(!C&&"BroadcastChannel"in self&&((C=new BroadcastChannel("[Firebase] FID Change")).onmessage=t=>{E(t.data.key,t.data.fid)}),C);n&&n.postMessage({key:t,fid:e}),0===T.size&&C&&(C.close(),C=null)}(n,e)}function E(t,e){let n=T.get(t);if(n)for(let r of n)r(e)}let C=null,I="firebase-installations-store",O=null;function P(){return O||(O=(0,o.X3)("firebase-installations-database",1,{upgrade:(t,e)=>{0===e&&t.createObjectStore(I)}})),O}async function M(t,e){let n=_(t),r=await P(),i=r.transaction(I,"readwrite"),a=i.objectStore(I),o=await a.get(n);return await a.put(e,n),await i.done,o&&o.fid===e.fid||S(t,e.fid),e}async function k(t){let e=_(t),n=await P(),r=n.transaction(I,"readwrite");await r.objectStore(I).delete(e),await r.done}async function j(t,e){let n=_(t),r=await P(),i=r.transaction(I,"readwrite"),a=i.objectStore(I),o=await a.get(n),s=e(o);return void 0===s?await a.delete(n):await a.put(s,n),await i.done,s&&(!o||o.fid!==s.fid)&&S(t,s.fid),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A(t){let e;let n=await j(t.appConfig,n=>{let r=function(t){let e=t||{fid:function(){try{let t=new Uint8Array(17),e=self.crypto||self.msCrypto;e.getRandomValues(t),t[0]=112+t[0]%16;let n=function(t){let e=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(t){let e=btoa(String.fromCharCode(...t));return e.replace(/\+/g,"-").replace(/\//g,"_")}(t);return e.substr(0,22)}(t);return b.test(n)?n:""}catch(r){return""}}(),registrationStatus:0};return D(e)}(n),i=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){let n=Promise.reject(f.create("app-offline"));return{installationEntry:e,registrationPromise:n}}let r={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=F(t,r);return{installationEntry:r,registrationPromise:i}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:N(t)}:{installationEntry:e}}(t,r);return e=i.registrationPromise,i.installationEntry});return""===n.fid?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}async function F(t,e){try{let n=await y(t,e);return M(t.appConfig,n)}catch(r){throw d(r)&&409===r.customData.serverCode?await k(t.appConfig):await M(t.appConfig,{fid:e.fid,registrationStatus:0}),r}}async function N(t){let e=await L(t.appConfig);for(;1===e.registrationStatus;)await w(100),e=await L(t.appConfig);if(0===e.registrationStatus){let{installationEntry:n,registrationPromise:r}=await A(t);return r||n}return e}function L(t){return j(t,t=>{if(!t)throw f.create("installation-not-found");return D(t)})}function D(t){return 1===t.registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:t.fid,registrationStatus:0}:t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R({appConfig:t,heartbeatServiceProvider:e},n){let r=function(t,{fid:e}){return`${p(t)}/${e}/authTokens:generate`}(t,n),i=function(t,{refreshToken:e}){let n=m(t);return n.append("Authorization",`${u} ${e}`),n}(t,n),a=e.getImmediate({optional:!0});if(a){let o=await a.getHeartbeatsHeader();o&&i.append("x-firebase-client",o)}let s={installation:{sdkVersion:c,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(s)},f=await v(()=>fetch(r,l));if(f.ok){let d=await f.json(),y=h(d);return y}throw await g("Generate Auth Token",f)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(t,e=!1){let n;let r=await j(t.appConfig,r=>{var i;if(!z(r))throw f.create("not-registered");let a=r.authToken;if(!e&&2===(i=a).requestStatus&&!function(t){let e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+36e5}(i))return r;if(1===a.requestStatus)return n=x(t,e),r;{if(!navigator.onLine)throw f.create("app-offline");let o=function(t){let e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(r);return n=H(t,o),o}}),i=n?await n:r.authToken;return i}async function x(t,e){let n=await B(t.appConfig);for(;1===n.authToken.requestStatus;)await w(100),n=await B(t.appConfig);let r=n.authToken;return 0===r.requestStatus?$(t,e):r}function B(t){return j(t,t=>{if(!z(t))throw f.create("not-registered");let e=t.authToken;return 1===e.requestStatus&&e.requestTime+1e4<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function H(t,e){try{let n=await R(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await M(t.appConfig,r),n}catch(a){if(d(a)&&(401===a.customData.serverCode||404===a.customData.serverCode))await k(t.appConfig);else{let i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await M(t.appConfig,i)}throw a}}function z(t){return void 0!==t&&2===t.registrationStatus}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(t){let{installationEntry:e,registrationPromise:n}=await A(t);return n?n.catch(console.error):$(t).catch(console.error),e.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(t,e=!1){await W(t);let n=await $(t,e);return n.token}async function W(t){let{registrationPromise:e}=await A(t);e&&await e}function K(t){return f.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let V="installations",Y=t=>{let e=t.getProvider("app").getImmediate(),n=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(t){if(!t||!t.options)throw K("App Configuration");if(!t.name)throw K("App Name");for(let e of["projectId","apiKey","appId"])if(!t.options[e])throw K(e);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e),i=(0,r._getProvider)(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},X=t=>{let e=t.getProvider("app").getImmediate(),n=(0,r._getProvider)(e,V).getImmediate();return{getId:()=>U(n),getToken:t=>q(n,t)}};(0,r._registerComponent)(new i.wA(V,Y,"PUBLIC")),(0,r._registerComponent)(new i.wA("installations-internal",X,"PRIVATE")),(0,r.registerVersion)(s,l),(0,r.registerVersion)(s,l,"esm2017")},9261:function(t,e,n){"use strict";let r,i,a,o;n.d(e,{IH:function(){return A}});var s=n(2238),l=n(3333),c=n(4444),u=n(8463);n(7578);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let f="analytics",d="https://www.googletagmanager.com/gtag/js",p=new l.Yd("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(t){return Promise.all(t.map(t=>t.catch(t=>t)))}async function g(t,e,n,r,i,a){let o=r[i];try{if(o)await e[o];else{let s=await h(n),l=s.find(t=>t.measurementId===i);l&&await e[l.appId]}}catch(c){p.error(c)}t("config",i,a)}async function m(t,e,n,r,i){try{let a=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);let s=await h(n);for(let l of o){let c=s.find(t=>t.measurementId===l),u=c&&e[c.appId];if(u)a.push(u);else{a=[];break}}}0===a.length&&(a=Object.values(e)),await Promise.all(a),t("event",r,i||{})}catch(f){p.error(f)}}let v=new c.LL("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'}),y=new class{constructor(t={},e=1e3){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}};async function w(t){var e;let{appId:n,apiKey:r}=t,i={method:"GET",headers:new Headers({Accept:"application/json","x-goog-api-key":r})},a="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(a,i);if(200!==o.status&&304!==o.status){let s="";try{let l=await o.json();(null===(e=l.error)||void 0===e?void 0:e.message)&&(s=l.error.message)}catch(c){}throw v.create("config-fetch-failed",{httpStatus:o.status,responseMessage:s})}return o.json()}async function b(t,e=y,n){let{appId:r,apiKey:i,measurementId:a}=t.options;if(!r)throw v.create("no-app-id");if(!i){if(a)return{measurementId:a,appId:r};throw v.create("no-api-key")}let o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new T;return setTimeout(async()=>{s.abort()},void 0!==n?n:6e4),_({appId:r,apiKey:i,measurementId:a},o,s,e)}async function _(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=y){var a;let{appId:o,measurementId:s}=t;try{await new Promise((t,n)=>{let i=Math.max(e-Date.now(),0),a=setTimeout(t,i);r.addEventListener(()=>{clearTimeout(a),n(v.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}catch(l){if(s)return p.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${null==l?void 0:l.message}]`),{appId:o,measurementId:s};throw l}try{let u=await w(t);return i.deleteThrottleMetadata(o),u}catch(h){if(!function(t){if(!(t instanceof c.ZR)||!t.customData)return!1;let e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(h)){if(i.deleteThrottleMetadata(o),s)return p.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${null==h?void 0:h.message}]`),{appId:o,measurementId:s};throw h}let f=503===Number(null===(a=null==h?void 0:h.customData)||void 0===a?void 0:a.httpStatus)?(0,c.$s)(n,i.intervalMillis,30):(0,c.$s)(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(o,d),p.debug(`Calling attemptFetch again in ${f} millis`),_(t,d,r,i)}}class T{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function S(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}{let a=await e,o=Object.assign(Object.assign({},r),{send_to:a});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E(){if(!(0,c.hl)())return p.warn(v.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await (0,c.eu)()}catch(t){return p.warn(v.create("indexeddb-unavailable",{errorInfo:null==t?void 0:t.toString()}).message),!1}return!0}async function C(t,e,n,a,o,s,l){var c;let u=b(t);u.then(e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&p.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(t=>p.error(t)),e.push(u);let f=E().then(t=>t?a.getId():void 0),[h,g]=await Promise.all([u,f]);!function(t){let e=window.document.getElementsByTagName("script");for(let n of Object.values(e))if(n.src&&n.src.includes(d)&&n.src.includes(t))return n;return null}(s)&&function(t,e){let n=document.createElement("script");n.src=`${d}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}(s,h.measurementId),i&&(o("consent","default",i),i=void 0),o("js",new Date);let m=null!==(c=null==l?void 0:l.config)&&void 0!==c?c:{};return m.origin="firebase",m.update=!0,null!=g&&(m.firebase_id=g),o("config",h.measurementId,m),r&&(o("set",r),r=void 0),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t){this.app=t}_delete(){return delete O[this.app.options.appId],Promise.resolve()}}let O={},P=[],M={},k="dataLayer",j=!1;function A(t=(0,s.getApp)()){t=(0,c.m9)(t);let e=(0,s._getProvider)(t,f);return e.isInitialized()?e.getImmediate():function(t,e={}){let n=(0,s._getProvider)(t,f);if(n.isInitialized()){let r=n.getImmediate();if((0,c.vZ)(e,n.getOptions()))return r;throw v.create("already-initialized")}let i=n.initialize({options:e});return i}(t)}let F="@firebase/analytics",N="0.9.0";(0,s._registerComponent)(new u.wA(f,(t,{options:e})=>{let n=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return function(t,e,n){!function(){let t=[];if((0,c.ru)()&&t.push("This is a browser extension environment."),(0,c.zI)()||t.push("Cookies are not available."),t.length>0){let e=t.map((t,e)=>`(${e+1}) ${t}`).join(" "),n=v.create("invalid-analytics-context",{errorInfo:e});p.warn(n.message)}}();let r=t.options.appId;if(!r)throw v.create("no-app-id");if(!t.options.apiKey){if(t.options.measurementId)p.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw v.create("no-api-key")}if(null!=O[r])throw v.create("already-exists",{id:r});if(!j){var i,s;let l,u;l=[],Array.isArray(window[k])?l=window[k]:window[k]=l;let{wrappedGtag:f,gtagCore:d}=(i="gtag",u=function(...t){window[k].push(arguments)},window[i]&&"function"==typeof window[i]&&(u=window[i]),window[i]=(s=u,async function(t,e,n){try{"event"===t?await m(s,O,P,e,n):"config"===t?await g(s,O,P,M,e,n):"consent"===t?s("consent","update",n):s("set",e)}catch(r){p.error(r)}}),{gtagCore:u,wrappedGtag:window[i]});o=f,a=d,j=!0}O[r]=C(t,P,M,e,a,k,n);let h=new I(t);return h}(n,r,e)},"PUBLIC")),(0,s._registerComponent)(new u.wA("analytics-internal",function(t){try{let e=t.getProvider(f).getImmediate();return{logEvent:(t,n,r)=>(function(t,e,n,r){S(o,O[(t=(0,c.m9)(t)).app.options.appId],e,n,r).catch(t=>p.error(t))})(e,t,n,r)}}catch(n){throw v.create("interop-component-reg-failed",{reason:n})}},"PRIVATE")),(0,s.registerVersion)(F,N),(0,s.registerVersion)(F,N,"esm2017")},1427:function(t,e,n){"use strict";let r,i,a,o,s,l;n.d(e,{r:function(){return J}});var c,u,f=n(4444),d=n(3333),p=n(2238),h=n(8463);n(7578);let g="@firebase/performance",m="0.6.0",v="FB-PERF-TRACE-MEASURE",y="_wt_",w="_fcp",b="_fid",_="@firebase/performance/config",T="@firebase/performance/configexpire",S="Performance",E=new f.LL("performance",S,{"trace started":"Trace {$traceName} was started before.","trace stopped":"Trace {$traceName} is not running.","nonpositive trace startTime":"Trace {$traceName} startTime should be positive.","nonpositive trace duration":"Trace {$traceName} duration should be positive.","no window":"Window is not available.","no app id":"App id is not available.","no project id":"Project id is not available.","no api key":"Api key is not available.","invalid cc log":"Attempted to queue invalid cc event","FB not default":"Performance can only start when Firebase app instance is the default one.","RC response not ok":"RC response is not ok","invalid attribute name":"Attribute name {$attributeName} is invalid.","invalid attribute value":"Attribute value {$attributeValue} is invalid.","invalid custom metric name":"Custom metric name {$customMetricName} is invalid","invalid String merger input":"Input for String merger is invalid, contact support team to resolve.","already initialized":"initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."}),C=new d.Yd(S);C.logLevel=d.in.INFO;class I{constructor(t){if(this.window=t,!t)throw E.create("no window");this.performance=t.performance,this.PerformanceObserver=t.PerformanceObserver,this.windowLocation=t.location,this.navigator=t.navigator,this.document=t.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=t.localStorage),t.perfMetrics&&t.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=t.perfMetrics.onFirstInputDelay)}getUrl(){return this.windowLocation.href.split("?")[0]}mark(t){this.performance&&this.performance.mark&&this.performance.mark(t)}measure(t,e,n){this.performance&&this.performance.measure&&this.performance.measure(t,e,n)}getEntriesByType(t){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(t):[]}getEntriesByName(t){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(t):[]}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return fetch&&Promise&&(0,f.zI)()?!!(0,f.hl)()||(C.info("IndexedDB is not supported by current browswer"),!1):(C.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1)}setupObserver(t,e){if(!this.PerformanceObserver)return;let n=new this.PerformanceObserver(t=>{for(let n of t.getEntries())e(n)});n.observe({entryTypes:[t]})}static getInstance(){return void 0===r&&(r=new I(i)),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t,e){let n=t.length-e.length;if(n<0||n>1)throw E.create("invalid String merger input");let r=[];for(let i=0;i<t.length;i++)r.push(t.charAt(i)),e.length>i&&r.push(e.charAt(i));return r.join("")}class P{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=O("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=O("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}getFlTransportFullUrl(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}static getInstance(){return void 0===o&&(o=new P),o}}(c=u||(u={}))[c.UNKNOWN=0]="UNKNOWN",c[c.VISIBLE=1]="VISIBLE",c[c.HIDDEN=2]="HIDDEN";let M=["firebase_","google_","ga_"],k=RegExp("^[a-zA-Z]\\w*$");function j(){let t=I.getInstance().document,e=t.visibilityState;switch(e){case"visible":return u.VISIBLE;case"hidden":return u.HIDDEN;default:return u.UNKNOWN}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t){var e;let n=null===(e=t.options)||void 0===e?void 0:e.appId;if(!n)throw E.create("no app id");return n}let F={loggingEnabled:!0};function N(t){if(!t)return t;let e=P.getInstance(),n=t.entries||{};return void 0!==n.fpr_enabled?e.loggingEnabled="true"===String(n.fpr_enabled):e.loggingEnabled=F.loggingEnabled,n.fpr_log_source?e.logSource=Number(n.fpr_log_source):F.logSource&&(e.logSource=F.logSource),n.fpr_log_endpoint_url?e.logEndPointUrl=n.fpr_log_endpoint_url:F.logEndPointUrl&&(e.logEndPointUrl=F.logEndPointUrl),n.fpr_log_transport_key?e.transportKey=n.fpr_log_transport_key:F.transportKey&&(e.transportKey=F.transportKey),void 0!==n.fpr_vc_network_request_sampling_rate?e.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate):void 0!==F.networkRequestsSamplingRate&&(e.networkRequestsSamplingRate=F.networkRequestsSamplingRate),void 0!==n.fpr_vc_trace_sampling_rate?e.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate):void 0!==F.tracesSamplingRate&&(e.tracesSamplingRate=F.tracesSamplingRate),e.logTraceAfterSampling=L(e.tracesSamplingRate),e.logNetworkAfterSampling=L(e.networkRequestsSamplingRate),t}function L(t){return Math.random()<=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let D=1;function R(t){return D=2,s=s||(function(){let t=I.getInstance().document;return new Promise(e=>{if(t&&"complete"!==t.readyState){let n=()=>{"complete"===t.readyState&&(t.removeEventListener("readystatechange",n),e())};t.addEventListener("readystatechange",n)}else e()})})().then(()=>(function(t){let e=t.getId();return e.then(t=>{a=t}),e})(t.installations)).then(e=>(function(t,e){let n=function(){let t=I.getInstance().localStorage;if(!t)return;let e=t.getItem(T);if(!e||!(Number(e)>Date.now()))return;let n=t.getItem(_);if(n)try{let r=JSON.parse(n);return r}catch(i){return}}();return n?(N(n),Promise.resolve()):(function(t){let e=t.getToken();return e.then(t=>{}),e})(t.installations).then(n=>{let r=function(t){var e;let n=null===(e=t.options)||void 0===e?void 0:e.projectId;if(!n)throw E.create("no project id");return n}(t.app),i=function(t){var e;let n=null===(e=t.options)||void 0===e?void 0:e.apiKey;if(!n)throw E.create("no api key");return n}(t.app),a=`https://firebaseremoteconfig.googleapis.com/v1/projects/${r}/namespaces/fireperf:fetch?key=${i}`,o=new Request(a,{method:"POST",headers:{Authorization:`FIREBASE_INSTALLATIONS_AUTH ${n}`},body:JSON.stringify({app_instance_id:e,app_instance_id_token:n,app_id:A(t.app),app_version:m,sdk_version:"0.0.1"})});return fetch(o).then(t=>{if(t.ok)return t.json();throw E.create("RC response not ok")})}).catch(()=>{C.info("Could not fetch config, will use default configs")}).then(N).then(t=>(function(t){let e=I.getInstance().localStorage;t&&e&&(e.setItem(_,JSON.stringify(t)),e.setItem(T,String(Date.now()+36e5*P.getInstance().configTimeToLive)))})(t),()=>{})})(t,e)).then(()=>void(D=3),()=>void(D=3))}let $=3,x=[],B=!1;function H(t,e){!l&&(l=(...t)=>{let e=function(t,e){return 0===e?function(t){let e={url:t.url,http_method:t.httpMethod||0,http_response_code:200,response_payload_bytes:t.responsePayloadBytes,client_start_time_us:t.startTimeUs,time_to_response_initiated_us:t.timeToResponseInitiatedUs,time_to_response_completed_us:t.timeToResponseCompletedUs},n={application_info:q(t.performanceController.app),network_request_metric:e};return JSON.stringify(n)}(t):function(t){let e={name:t.name,is_auto:t.isAuto,client_start_time_us:t.startTimeUs,duration_us:t.durationUs};0!==Object.keys(t.counters).length&&(e.counters=t.counters);let n=t.getAttributes();0!==Object.keys(n).length&&(e.custom_attributes=n);let r={application_info:q(t.performanceController.app),trace_metric:e};return JSON.stringify(r)}(t)}(...t);!function(t){if(!t.eventTime||!t.message)throw E.create("invalid cc log");x=[...x,t]}({message:e,eventTime:Date.now()})}),l(t,e)}function z(t){let e=P.getInstance();(e.instrumentationEnabled||!t.isAuto)&&(e.dataCollectionEnabled||t.isAuto)&&I.getInstance().requiredApisAvailable()&&(!t.isAuto||j()===u.VISIBLE)&&(3===D?U(t):R(t.performanceController).then(()=>U(t),()=>U(t)))}function U(t){if(!a)return;let e=P.getInstance();e.loggingEnabled&&e.logTraceAfterSampling&&setTimeout(()=>H(t,1),0)}function q(t){return{google_app_id:A(t),app_instance_id:a,web_app_info:{sdk_version:m,page_url:I.getInstance().getUrl(),service_worker_status:function(){let t=I.getInstance().navigator;return null!=t&&t.serviceWorker?t.serviceWorker.controller?2:3:1}(),visibility_state:j(),effective_connection_type:function(){let t=I.getInstance().navigator,e=t.connection,n=e&&e.effectiveType;switch(n){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}()},application_process_state:0}}let W=["_fp",w,b];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t,e,n=!1,r){this.performanceController=t,this.name=e,this.isAuto=n,this.state=1,this.customAttributes={},this.counters={},this.api=I.getInstance(),this.randomId=Math.floor(1e6*Math.random()),!this.isAuto&&(this.traceStartMark=`FB-PERF-TRACE-START-${this.randomId}-${this.name}`,this.traceStopMark=`FB-PERF-TRACE-STOP-${this.randomId}-${this.name}`,this.traceMeasure=r||`${v}-${this.randomId}-${this.name}`,r&&this.calculateTraceMetrics())}start(){if(1!==this.state)throw E.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(2!==this.state)throw E.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),z(this)}record(t,e,n){if(t<=0)throw E.create("nonpositive trace startTime",{traceName:this.name});if(e<=0)throw E.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(1e3*e),this.startTimeUs=Math.floor(1e3*t),n&&n.attributes&&(this.customAttributes=Object.assign({},n.attributes)),n&&n.metrics)for(let r of Object.keys(n.metrics))isNaN(Number(n.metrics[r]))||(this.counters[r]=Math.floor(Number(n.metrics[r])));z(this)}incrementMetric(t,e=1){void 0===this.counters[t]?this.putMetric(t,e):this.putMetric(t,this.counters[t]+e)}putMetric(t,e){var n;if(n=this.name,0!==t.length&&!(t.length>100)&&(n&&n.startsWith(y)&&W.indexOf(t)>-1||!t.startsWith("_")))this.counters[t]=function(t){let e=Math.floor(t);return e<t&&C.info(`Metric value should be an Integer, setting the value as : ${e}.`),e}(null!=e?e:0);else throw E.create("invalid custom metric name",{customMetricName:t})}getMetric(t){return this.counters[t]||0}putAttribute(t,e){let n=function(t){if(0===t.length||t.length>40)return!1;let e=M.some(e=>t.startsWith(e));return!e&&!!t.match(k)}(t),r=0!==e.length&&e.length<=100;if(n&&r){this.customAttributes[t]=e;return}if(!n)throw E.create("invalid attribute name",{attributeName:t});if(!r)throw E.create("invalid attribute value",{attributeValue:e})}getAttribute(t){return this.customAttributes[t]}removeAttribute(t){void 0!==this.customAttributes[t]&&delete this.customAttributes[t]}getAttributes(){return Object.assign({},this.customAttributes)}setStartTime(t){this.startTimeUs=t}setDuration(t){this.durationUs=t}calculateTraceMetrics(){let t=this.api.getEntriesByName(this.traceMeasure),e=t&&t[0];e&&(this.durationUs=Math.floor(1e3*e.duration),this.startTimeUs=Math.floor((e.startTime+this.api.getTimeOrigin())*1e3))}static createOobTrace(t,e,n,r){let i=I.getInstance().getUrl();if(!i)return;let a=new K(t,y+i,!0),o=Math.floor(1e3*I.getInstance().getTimeOrigin());if(a.setStartTime(o),e&&e[0]&&(a.setDuration(Math.floor(1e3*e[0].duration)),a.putMetric("domInteractive",Math.floor(1e3*e[0].domInteractive)),a.putMetric("domContentLoadedEventEnd",Math.floor(1e3*e[0].domContentLoadedEventEnd)),a.putMetric("loadEventEnd",Math.floor(1e3*e[0].loadEventEnd))),n){let s=n.find(t=>"first-paint"===t.name);s&&s.startTime&&a.putMetric("_fp",Math.floor(1e3*s.startTime));let l=n.find(t=>"first-contentful-paint"===t.name);l&&l.startTime&&a.putMetric(w,Math.floor(1e3*l.startTime)),r&&a.putMetric(b,Math.floor(1e3*r))}z(a)}static createUserTimingTrace(t,e){let n=new K(t,e,!1,e);z(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t,e){if(!e||void 0===e.responseStart)return;let n=I.getInstance().getTimeOrigin(),r=Math.floor((e.startTime+n)*1e3),i=e.responseStart?Math.floor((e.responseStart-e.startTime)*1e3):void 0,a=Math.floor((e.responseEnd-e.startTime)*1e3),o=e.name&&e.name.split("?")[0],s={performanceController:t,url:o,responsePayloadBytes:e.transferSize,startTimeUs:r,timeToResponseInitiatedUs:i,timeToResponseCompletedUs:a};!function(t){let e=P.getInstance();if(!e.instrumentationEnabled)return;let n=t.url,r=e.logEndPointUrl.split("?")[0],i=e.flTransportEndpointUrl.split("?")[0];n!==r&&n!==i&&e.loggingEnabled&&e.logNetworkAfterSampling&&setTimeout(()=>H(t,0),0)}(s)}function Y(t){a&&(setTimeout(()=>(function(t){let e=I.getInstance(),n=e.getEntriesByType("navigation"),r=e.getEntriesByType("paint");if(e.onFirstInputDelay){let i=setTimeout(()=>{K.createOobTrace(t,n,r),i=void 0},5e3);e.onFirstInputDelay(e=>{i&&(clearTimeout(i),K.createOobTrace(t,n,r,e))})}else K.createOobTrace(t,n,r)})(t),0),setTimeout(()=>(function(t){let e=I.getInstance(),n=e.getEntriesByType("resource");for(let r of n)V(t,r);e.setupObserver("resource",e=>V(t,e))})(t),0),setTimeout(()=>(function(t){let e=I.getInstance(),n=e.getEntriesByType("measure");for(let r of n)X(t,r);e.setupObserver("measure",e=>X(t,e))})(t),0))}function X(t,e){let n=e.name;n.substring(0,v.length)!==v&&K.createUserTimingTrace(t,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t,e){this.app=t,this.installations=e,this.initialized=!1}_init(t){this.initialized||((null==t?void 0:t.dataCollectionEnabled)!==void 0&&(this.dataCollectionEnabled=t.dataCollectionEnabled),(null==t?void 0:t.instrumentationEnabled)!==void 0&&(this.instrumentationEnabled=t.instrumentationEnabled),I.getInstance().requiredApisAvailable()?(0,f.eu)().then(t=>{t&&(B||(function t(e){setTimeout(()=>{if(0!==$){if(!x.length)return t(1e4);!function(){let e=x.splice(0,1e3),n=e.map(t=>({source_extension_json_proto3:t.message,event_time_ms:String(t.eventTime)})),r={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:P.getInstance().logSource,log_event:n};(function(t){let e=P.getInstance().getFlTransportFullUrl();return fetch(e,{method:"POST",body:JSON.stringify(t)})})(r).then(t=>(t.ok||C.info("Call to Firebase backend failed."),t.json())).then(n=>{let r=Number(n.nextRequestWaitMillis),i=1e4;isNaN(r)||(i=Math.max(r,i));let a=n.logResponseDetails;Array.isArray(a)&&a.length>0&&"RETRY_REQUEST_LATER"===a[0].responseAction&&(x=[...e,...x],C.info("Retry transport request later.")),$=3,t(i)}).catch(()=>{x=[...e,...x],$--,C.info(`Tries left: ${$}.`),t(1e4)})}()}},e)}(5500),B=!0),R(this).then(()=>Y(this),()=>Y(this)),this.initialized=!0)}).catch(t=>{C.info(`Environment doesn't support IndexedDB: ${t}`)}):C.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}set instrumentationEnabled(t){P.getInstance().instrumentationEnabled=t}get instrumentationEnabled(){return P.getInstance().instrumentationEnabled}set dataCollectionEnabled(t){P.getInstance().dataCollectionEnabled=t}get dataCollectionEnabled(){return P.getInstance().dataCollectionEnabled}}function J(t=(0,p.getApp)()){t=(0,f.m9)(t);let e=(0,p._getProvider)(t,"performance"),n=e.getImmediate();return n}let G=(t,{options:e})=>{let n=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();if("[DEFAULT]"!==n.name)throw E.create("FB not default");if("undefined"==typeof window)throw E.create("no window");i=window;let a=new Q(n,r);return a._init(e),a};(0,p._registerComponent)(new h.wA("performance",G,"PUBLIC")),(0,p.registerVersion)(g,m),(0,p.registerVersion)(g,m,"esm2017")},7135:function(t,e,n){"use strict";n.d(e,{xS:function(){return P},Pf:function(){return v},sN:function(){return h},KF:function(){return y}});var r=n(2238),i=n(4444),a=n(8463),o=n(3333);n(7578);let s="@firebase/remote-config",l="0.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let u="remote-config",f=new i.LL("remoteconfig","Remote Config",{"registration-window":"Undefined window object. This SDK only supports usage in a browser environment.","registration-project-id":"Undefined project identifier. Check Firebase app initialization.","registration-api-key":"Undefined API key. Check Firebase app initialization.","registration-app-id":"Undefined app identifier. Check Firebase app initialization.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.","fetch-client-network":"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-timeout":'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',"fetch-throttle":'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',"fetch-client-parse":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","indexed-db-unavailable":"Indexed DB is not supported by current browser"}),d=["1","true","t","yes","y","on"];class p{constructor(t,e=""){this._source=t,this._value=e}asString(){return this._value}asBoolean(){return"static"!==this._source&&d.indexOf(this._value.toLowerCase())>=0}asNumber(){if("static"===this._source)return 0;let t=Number(this._value);return isNaN(t)&&(t=0),t}getSource(){return this._source}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(t=(0,r.getApp)()){t=(0,i.m9)(t);let e=(0,r._getProvider)(t,u);return e.getImmediate()}async function g(t){let e=(0,i.m9)(t),[n,r]=await Promise.all([e._storage.getLastSuccessfulFetchResponse(),e._storage.getActiveConfigEtag()]);return!!n&&!!n.config&&!!n.eTag&&n.eTag!==r&&(await Promise.all([e._storageCache.setActiveConfig(n.config),e._storage.setActiveConfigEtag(n.eTag)]),!0)}async function m(t){let e=(0,i.m9)(t),n=new c;setTimeout(async()=>{n.abort()},e.settings.fetchTimeoutMillis);try{await e._client.fetch({cacheMaxAgeMillis:e.settings.minimumFetchIntervalMillis,signal:n}),await e._storageCache.setLastFetchStatus("success")}catch(a){let r=a instanceof i.ZR&&-1!==a.code.indexOf("fetch-throttle")?"throttle":"failure";throw await e._storageCache.setLastFetchStatus(r),a}}function v(t,e){return w((0,i.m9)(t),e).asBoolean()}function y(t,e){return w((0,i.m9)(t),e).asString()}function w(t,e){let n=(0,i.m9)(t);n._isInitializationComplete||n._logger.debug(`A value was requested for key "${e}" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.`);let r=n._storageCache.getActiveConfig();return r&&void 0!==r[e]?new p("remote",r[e]):n.defaultConfig&&void 0!==n.defaultConfig[e]?new p("default",String(n.defaultConfig[e])):(n._logger.debug(`Returning static value for key "${e}". Define a default or remote value if this is unintentional.`),new p("static"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(t,e,n,r){this.client=t,this.storage=e,this.storageCache=n,this.logger=r}isCachedDataFresh(t,e){if(!e)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;let n=Date.now()-e,r=n<=t;return this.logger.debug(`Config fetch cache check. Cache age millis: ${n}. Cache max age millis (minimumFetchIntervalMillis setting): ${t}. Is cache hit: ${r}.`),r}async fetch(t){let[e,n]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(n&&this.isCachedDataFresh(t.cacheMaxAgeMillis,e))return n;t.eTag=n&&n.eTag;let r=await this.client.fetch(t),i=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return 200===r.status&&i.push(this.storage.setLastSuccessfulFetchResponse(r)),await Promise.all(i),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(t,e,n,r,i,a){this.firebaseInstallations=t,this.sdkVersion=e,this.namespace=n,this.projectId=r,this.apiKey=i,this.appId=a}async fetch(t){let e,n,r;let[i,a]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),o=window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com",s=`${o}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,l={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":t.eTag||"*"},c={sdk_version:this.sdkVersion,app_instance_id:i,app_instance_id_token:a,app_id:this.appId,language_code:/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(t=navigator){return t.languages&&t.languages[0]||t.language}()},u={method:"POST",headers:l,body:JSON.stringify(c)},d=fetch(s,u),p=new Promise((e,n)=>{t.signal.addEventListener(()=>{let t=Error("The operation was aborted.");t.name="AbortError",n(t)})});try{await Promise.race([d,p]),e=await d}catch(g){let h="fetch-client-network";throw(null==g?void 0:g.name)==="AbortError"&&(h="fetch-timeout"),f.create(h,{originalErrorMessage:null==g?void 0:g.message})}let m=e.status,v=e.headers.get("ETag")||void 0;if(200===e.status){let y;try{y=await e.json()}catch(w){throw f.create("fetch-client-parse",{originalErrorMessage:null==w?void 0:w.message})}n=y.entries,r=y.state}if("INSTANCE_STATE_UNSPECIFIED"===r?m=500:"NO_CHANGE"===r?m=304:("NO_TEMPLATE"===r||"EMPTY_CONFIG"===r)&&(n={}),304!==m&&200!==m)throw f.create("fetch-status",{httpStatus:m});return{status:m,eTag:v,config:n}}}class T{constructor(t,e){this.client=t,this.storage=e}async fetch(t){let e=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(t,e)}async attemptFetch(t,{throttleEndTimeMillis:e,backoffCount:n}){var r;await (r=t.signal,new Promise((t,n)=>{let i=Math.max(e-Date.now(),0),a=setTimeout(t,i);r.addEventListener(()=>{clearTimeout(a),n(f.create("fetch-throttle",{throttleEndTimeMillis:e}))})}));try{let a=await this.client.fetch(t);return await this.storage.deleteThrottleMetadata(),a}catch(s){if(!function(t){if(!(t instanceof i.ZR)||!t.customData)return!1;let e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(s))throw s;let o={throttleEndTimeMillis:Date.now()+(0,i.$s)(n),backoffCount:n+1};return await this.storage.setThrottleMetadata(o),this.attemptFetch(t,o)}}}class S{constructor(t,e,n,r,i){this.app=t,this._client=e,this._storageCache=n,this._storage=r,this._logger=i,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:6e4,minimumFetchIntervalMillis:432e5},this.defaultConfig={}}get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(t,e){let n=t.target.error||void 0;return f.create(e,{originalErrorMessage:n&&(null==n?void 0:n.message)})}let C="app_namespace_store";class I{constructor(t,e,n,r=new Promise((t,e)=>{try{let n=indexedDB.open("firebase_remote_config",1);n.onerror=t=>{e(E(t,"storage-open"))},n.onsuccess=e=>{t(e.target.result)},n.onupgradeneeded=t=>{let e=t.target.result;0===t.oldVersion&&e.createObjectStore(C,{keyPath:"compositeKey"})}}catch(r){e(f.create("storage-open",{originalErrorMessage:null==r?void 0:r.message}))}})){this.appId=t,this.appName=e,this.namespace=n,this.openDbPromise=r}getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(t){return this.set("last_fetch_status",t)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(t){return this.set("last_successful_fetch_timestamp_millis",t)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(t){return this.set("last_successful_fetch_response",t)}getActiveConfig(){return this.get("active_config")}setActiveConfig(t){return this.set("active_config",t)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(t){return this.set("active_config_etag",t)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(t){return this.set("throttle_metadata",t)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}async get(t){let e=await this.openDbPromise;return new Promise((n,r)=>{let i=e.transaction([C],"readonly"),a=i.objectStore(C),o=this.createCompositeKey(t);try{let s=a.get(o);s.onerror=t=>{r(E(t,"storage-get"))},s.onsuccess=t=>{let e=t.target.result;e?n(e.value):n(void 0)}}catch(l){r(f.create("storage-get",{originalErrorMessage:null==l?void 0:l.message}))}})}async set(t,e){let n=await this.openDbPromise;return new Promise((r,i)=>{let a=n.transaction([C],"readwrite"),o=a.objectStore(C),s=this.createCompositeKey(t);try{let l=o.put({compositeKey:s,value:e});l.onerror=t=>{i(E(t,"storage-set"))},l.onsuccess=()=>{r()}}catch(c){i(f.create("storage-set",{originalErrorMessage:null==c?void 0:c.message}))}})}async delete(t){let e=await this.openDbPromise;return new Promise((n,r)=>{let i=e.transaction([C],"readwrite"),a=i.objectStore(C),o=this.createCompositeKey(t);try{let s=a.delete(o);s.onerror=t=>{r(E(t,"storage-delete"))},s.onsuccess=()=>{n()}}catch(l){r(f.create("storage-delete",{originalErrorMessage:null==l?void 0:l.message}))}})}createCompositeKey(t){return[this.appId,this.appName,this.namespace,t].join()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.storage=t}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}async loadFromStorage(){let t=this.storage.getLastFetchStatus(),e=this.storage.getLastSuccessfulFetchTimestampMillis(),n=this.storage.getActiveConfig(),r=await t;r&&(this.lastFetchStatus=r);let i=await e;i&&(this.lastSuccessfulFetchTimestampMillis=i);let a=await n;a&&(this.activeConfig=a)}setLastFetchStatus(t){return this.lastFetchStatus=t,this.storage.setLastFetchStatus(t)}setLastSuccessfulFetchTimestampMillis(t){return this.lastSuccessfulFetchTimestampMillis=t,this.storage.setLastSuccessfulFetchTimestampMillis(t)}setActiveConfig(t){return this.activeConfig=t,this.storage.setActiveConfig(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P(t){return await m(t=(0,i.m9)(t)),g(t)}(0,r._registerComponent)(new a.wA(u,function(t,{instanceIdentifier:e}){let n=t.getProvider("app").getImmediate(),a=t.getProvider("installations-internal").getImmediate();if("undefined"==typeof window)throw f.create("registration-window");if(!(0,i.hl)())throw f.create("indexed-db-unavailable");let{projectId:l,apiKey:c,appId:u}=n.options;if(!l)throw f.create("registration-project-id");if(!c)throw f.create("registration-api-key");if(!u)throw f.create("registration-app-id");e=e||"firebase";let d=new I(u,n.name,e),p=new O(d),h=new o.Yd(s);h.logLevel=o.in.ERROR;let g=new _(a,r.SDK_VERSION,e,l,c,u),m=new T(g,d),v=new b(m,d,p,h),y=new S(n,v,p,d,h);return function(t){let e=(0,i.m9)(t);e._initializePromise||(e._initializePromise=e._storageCache.loadFromStorage().then(()=>{e._isInitializationComplete=!0})),e._initializePromise}(y),y},"PUBLIC").setMultipleInstances(!0)),(0,r.registerVersion)(s,l),(0,r.registerVersion)(s,l,"esm2017")}}]);