(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{160:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(12),o=a(14),l=a(13),c=a(15),s=a(0),i=a.n(s),m=(a(67),a(52)),u=a(61),f=a(53),p=a(71),d=a(28),E=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).axios=Object(m.b)(),a.state={sponsors:[],loading:!0,year:null},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.year;this.axios.get("/sponsors/list/".concat(t,"/")).then(function(a){console.log(a);var n=a.data.data;e.setState({loading:!1,sponsors:n,year:t})})}},{key:"render",value:function(){var e=this.state.sponsors.map(function(e){return i.a.createElement("div",{className:"col mx-3",key:e.id},i.a.createElement("div",{className:"cont"},i.a.createElement("div",{className:"front shadow-lg p-3 mb-5 bg-white rounded"},i.a.createElement("img",{alt:e.name,className:"spons-Image",src:e.pic_url})),i.a.createElement("div",{className:"back shadow-lg p-3 mb-5 bg-white rounded"},i.a.createElement("div",{className:"inner"},i.a.createElement("h6",{style:{fontWeight:"800"}},e.name),i.a.createElement("p",{className:"ph-no"},e.contact),i.a.createElement("p",null,e.details),i.a.createElement("p",null,i.a.createElement("a",{className:"web",href:e.website},"Website"))))))});return i.a.createElement("div",{className:"sponsors"},i.a.createElement(u.a,null),i.a.createElement("div",{className:"header1"},"SPONSORS ",this.state.year),i.a.createElement("div",{className:"container-fluid",style:{maxWidth:"1200px",paddingTop:"300px"}},i.a.createElement(p.a,null)),i.a.createElement("div",{className:"container-fluid ctn9",style:{maxWidth:"1500px",paddingTop:"0px"}},this.state.loading?i.a.createElement(d.a,{style:{margin:"50px auto"}}):e),i.a.createElement("div",{className:"container-fluid",style:{maxWidth:"1200px",paddingTop:"50px"}},i.a.createElement(p.a,null)),i.a.createElement(f.a,null))}}]),t}(s.Component);t.default=E},53:function(e,t,a){"use strict";var n=a(26),r=a(0),o=a.n(r),l=a(24),c=(a(54),a(60)),s=a.n(c);t.a=function(){return o.a.createElement("div",{className:"footer",style:{background:"#0A0908",textAlign:"center",marginTop:"50px",position:"relative",bottom:"0"}},o.a.createElement("div",{className:"container-fluid",style:{maxWidth:"1500px",padding:"50px"}},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xs-12 col-sm-12 col-lg-4 col5"},o.a.createElement("h3",{style:{color:"white",fontWeight:"800",padding:"8px",background:"#0A0908"}},"Quick Links"),o.a.createElement("div",{className:"f-links"},o.a.createElement(l.b,{to:"/"},"Home")),o.a.createElement("div",{className:"f-links"},o.a.createElement(l.b,{to:"/events"},"Events")),o.a.createElement("div",{className:"f-links"},o.a.createElement(l.b,{to:"/speakers"},"Speakers")),o.a.createElement("div",{className:"f-links"},o.a.createElement(l.b,{to:"/sponsors"},"Sponsors")),o.a.createElement("div",{className:"f-links"},o.a.createElement(l.b,{to:"/team"},"Team"))),o.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4 col6"},o.a.createElement("img",{alt:"E-Cell Logo",style:{height:"80px",width:"80px"},src:s.a}),o.a.createElement("p",{style:{color:"white",margin:"15px",fontSize:"17px",fontWeight:"600"}},"E-Cell, NIT Raipur is established to motivate and educate people about entrepreneurship and serve as a meeting ground for corporate and young budding entrepreneurs from distinguished institutions.")),o.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4"},o.a.createElement("h3",{style:{color:"white",fontWeight:"800"}},"E-SUMMIT'19"),o.a.createElement("p",{style:{color:"white",fontWeight:"600"}},"Follow us online on-"),o.a.createElement("p",{style:{fontSize:"40px"}},o.a.createElement("a",{href:"#"},o.a.createElement("i",{className:"fab fa-facebook-square"})),o.a.createElement("a",{href:"#"},o.a.createElement("i",{className:"fab fa-instagram"})),o.a.createElement("a",{href:"#"},o.a.createElement("i",{className:"fab fa-twitter-square"})),o.a.createElement("a",{href:"#"},o.a.createElement("i",{className:"fab fa-linkedin"}))),o.a.createElement("div",null,o.a.createElement("a",{className:"site",href:"https://ecell.nitrr.ac.in/"},"E-Cell Official Site")),o.a.createElement("div",null,o.a.createElement("a",Object(n.a)({href:"#",style:{color:"white"}},"href","tel:8094966697"),"+91 80949 66697")),o.a.createElement("div",null,o.a.createElement("a",Object(n.a)({href:"#",style:{color:"white"}},"href","tel:8839579796"),"+91 88395 79796")),o.a.createElement("p",{style:{color:"white",marginTop:"5px"}},"\xa9 All Rights Reserved")))))}},54:function(e,t,a){},55:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",function(){return n})},56:function(e,t,a){"use strict";function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}a.d(t,"a",function(){return r})},57:function(e,t,a){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}a.d(t,"a",function(){return n})},58:function(e,t,a){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}a.d(t,"a",function(){return r})},59:function(e,t,a){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return(r="function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)})(e)}var o=a(25);function l(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(o.a)(e):t}a.d(t,"a",function(){return l})},67:function(e,t,a){},71:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(24);t.a=function(){return r.a.createElement("div",{className:"ctn10"},r.a.createElement("div",null,r.a.createElement(o.b,{className:"links",to:"/sponsors/yearwise"},"Yearwise Sponsors")),r.a.createElement("div",null,r.a.createElement(o.b,{className:"links link-text",to:"/sponsors/sponsors_heads"},"Head Co-ordinators of Sponsorship")))}}}]);
//# sourceMappingURL=9.333d043f.chunk.js.map