(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{170:function(e,t,n){"use strict";n.r(t);var a=n(11),o=n(12),r=n(14),c=n(13),l=n(15),s=n(0),i=n.n(s),u=n(24),m=(n(67),n(61)),f=n(53),p=n(52),b=n(28),d=function(e){function t(){var e,n;Object(a.a)(this,t);for(var o=arguments.length,l=new Array(o),s=0;s<o;s++)l[s]=arguments[s];return(n=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).axios=Object(p.b)(),n.state={spons_years:[],loading:!0},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.axios.get("/sponsors/spons_years/").then(function(t){var n=t.data.spons_year;console.log(n),e.setState({spons_years:n,loading:!1})})}},{key:"render",value:function(){console.log(this.state);var e=this.state.spons_years.map(function(e){return i.a.createElement("div",{key:e},i.a.createElement(u.b,{to:"/sponsors/".concat(e)},i.a.createElement("button",{className:"btn"},"Sponsors ",e)))});return i.a.createElement("div",{className:"sponsors"},i.a.createElement(m.a,null),i.a.createElement("div",{className:"header1"},"OUR SPONSORS"),i.a.createElement("div",{className:"container-fluid ctn11"},i.a.createElement("div",null,this.state.loading?i.a.createElement(b.a,null):e)),i.a.createElement(f.a,null))}}]),t}(s.Component);t.default=d},53:function(e,t,n){"use strict";var a=n(26),o=n(0),r=n.n(o),c=n(24),l=(n(54),n(60)),s=n.n(l);t.a=function(){return r.a.createElement("div",{className:"footer",style:{background:"#0A0908",textAlign:"center",marginTop:"50px",position:"relative",bottom:"0"}},r.a.createElement("div",{className:"container-fluid",style:{maxWidth:"1500px",padding:"50px"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-lg-4 col5"},r.a.createElement("h3",{style:{color:"white",fontWeight:"800",padding:"8px",background:"#0A0908"}},"Quick Links"),r.a.createElement("div",{className:"f-links"},r.a.createElement(c.b,{to:"/"},"Home")),r.a.createElement("div",{className:"f-links"},r.a.createElement(c.b,{to:"/events"},"Events")),r.a.createElement("div",{className:"f-links"},r.a.createElement(c.b,{to:"/speakers"},"Speakers")),r.a.createElement("div",{className:"f-links"},r.a.createElement(c.b,{to:"/sponsors"},"Sponsors")),r.a.createElement("div",{className:"f-links"},r.a.createElement(c.b,{to:"/team"},"Team"))),r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4 col6"},r.a.createElement("img",{alt:"E-Cell Logo",style:{height:"80px",width:"80px"},src:s.a}),r.a.createElement("p",{style:{color:"white",margin:"15px",fontSize:"17px",fontWeight:"600"}},"E-Cell, NIT Raipur is established to motivate and educate people about entrepreneurship and serve as a meeting ground for corporate and young budding entrepreneurs from distinguished institutions.")),r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4"},r.a.createElement("h3",{style:{color:"white",fontWeight:"800"}},"E-SUMMIT'19"),r.a.createElement("p",{style:{color:"white",fontWeight:"600"}},"Follow us online on-"),r.a.createElement("p",{style:{fontSize:"40px"}},r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fab fa-facebook-square"})),r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fab fa-instagram"})),r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fab fa-twitter-square"})),r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fab fa-linkedin"}))),r.a.createElement("div",null,r.a.createElement("a",{className:"site",href:"https://ecell.nitrr.ac.in/"},"E-Cell Official Site")),r.a.createElement("div",null,r.a.createElement("a",Object(a.a)({href:"#",style:{color:"white"}},"href","tel:8094966697"),"+91 80949 66697")),r.a.createElement("div",null,r.a.createElement("a",Object(a.a)({href:"#",style:{color:"white"}},"href","tel:8839579796"),"+91 88395 79796")),r.a.createElement("p",{style:{color:"white",marginTop:"5px"}},"\xa9 All Rights Reserved")))))}},54:function(e,t,n){},55:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",function(){return a})},56:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function o(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.d(t,"a",function(){return o})},57:function(e,t,n){"use strict";function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",function(){return a})},58:function(e,t,n){"use strict";function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}n.d(t,"a",function(){return o})},59:function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return(o="function"===typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}var r=n(25);function c(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?Object(r.a)(e):t}n.d(t,"a",function(){return c})},67:function(e,t,n){}}]);
//# sourceMappingURL=17.56d58cc8.chunk.js.map