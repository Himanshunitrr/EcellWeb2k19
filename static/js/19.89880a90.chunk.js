(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{171:function(t,e,n){"use strict";n.r(e);var o=n(11),r=n(12),a=n(14),c=n(13),u=n(15),i=n(0),s=n.n(i),l=n(24),f=(n(64),n(58)),p=n(57),y=n(51),b=n(27),m=function(t){function e(){var t,n;Object(o.a)(this,e);for(var r=arguments.length,u=new Array(r),i=0;i<r;i++)u[i]=arguments[i];return(n=Object(a.a)(this,(t=Object(c.a)(e)).call.apply(t,[this].concat(u)))).axios=Object(y.b)(),n.state={spons_years:[],loading:!0},n}return Object(u.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.axios.get("/sponsors/spons_years/").then(function(e){var n=e.data.spons_year;console.log(n),t.setState({spons_years:n,loading:!1})})}},{key:"render",value:function(){console.log(this.state);var t=this.state.spons_years.map(function(t){return s.a.createElement("div",{key:t},s.a.createElement(l.b,{to:"/sponsors/".concat(t)},s.a.createElement("button",{className:"btn"},"Sponsors ",t)))});return s.a.createElement("div",{className:"sponsors"},s.a.createElement(f.a,null),s.a.createElement("div",{className:"header1"},"OUR SPONSORS"),s.a.createElement("div",{className:"container-fluid ctn11"},s.a.createElement("div",null,this.state.loading?s.a.createElement(b.a,null):t)),s.a.createElement(p.a,null))}}]),e}(i.Component);e.default=m},52:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return o})},53:function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n.d(e,"a",function(){return r})},54:function(t,e,n){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",function(){return o})},55:function(t,e,n){"use strict";function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return(r="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return o(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)})(t)}var a=n(25);function c(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(a.a)(t):e}n.d(e,"a",function(){return c})},56:function(t,e,n){"use strict";function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}n.d(e,"a",function(){return r})},64:function(t,e,n){}}]);
//# sourceMappingURL=19.89880a90.chunk.js.map