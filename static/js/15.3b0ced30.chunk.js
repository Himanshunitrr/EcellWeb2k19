(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{129:function(e,t,a){},154:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},l=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),l.forEach(function(t){n(e,t,a[t])})}return e}a.r(t);var r=a(11),c=a(12),s=a(14),o=a(13),i=a(15),m=a(0),u=a.n(m),f=a(54),d=(a(129),a(61)),E=a(52),p=a(26),h=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).axios=Object(f.a)(),a.state={mentors:{},loading:!0},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){for(var e=this,t=function(t){e.axios.get("/mentors/list/".concat(t,"/")).then(function(a){console.log(a);var r=a.data.data;r.length>0&&e.setState({loading:!1,mentors:l({},e.state.mentors,n({},t,r))})})},a=2016;a<=2020;a++)t(a)}},{key:"render",value:function(){console.log(this.state.mentors);var e=[];for(var t in this.state.mentors){var a=this.state.mentors[t];a=a.map(function(e){return u.a.createElement("div",{className:"individual_mentors",key:e.id},u.a.createElement("div",null,u.a.createElement("img",{className:"mentors_pic shadow-lg p-3 mb-5 bg-white rounded",src:e.profile_pic_url,alt:e.name})),u.a.createElement("h3",{className:"mentors_name"},e.name),u.a.createElement("p",{className:"center2"},e.detail))});var n=u.a.createElement("div",{className:"flex-containerr",key:t},a);e.push(n)}return u.a.createElement("div",{className:"mentors"},u.a.createElement(d.a,null),u.a.createElement("div",{className:"header4"},"PREVIOUS MENTORS"),u.a.createElement("div",{className:"container-fluid ctn13"},this.state.loading?u.a.createElement("div",{style:{marginTop:"20%"}},u.a.createElement(p.a,null)):e),u.a.createElement(E.a,null))}}]),t}(m.Component);t.default=h},52:function(e,t,a){"use strict";var n=a(25),l=a(0),r=a.n(l),c=a(24),s=(a(53),a(60)),o=a.n(s);t.a=function(){return r.a.createElement("div",{className:"footer",style:{background:"#0A0908",textAlign:"center",marginTop:"50px",position:"relative",bottom:"0"}},r.a.createElement("div",{className:"container-fluid",style:{maxWidth:"1500px",padding:"50px"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-lg-4 col5"},r.a.createElement("h3",{style:{color:"white",fontWeight:"800",padding:"8px",background:"#0A0908"}},"Quick Links"),r.a.createElement("div",{className:"f-links"},r.a.createElement(c.b,{to:"/"},"Home")),r.a.createElement("div",{className:"f-links"},r.a.createElement(c.b,{to:"/events"},"Events")),r.a.createElement("div",{className:"f-links"},r.a.createElement(c.b,{to:"/speakers"},"Speakers")),r.a.createElement("div",{className:"f-links"},r.a.createElement(c.b,{to:"/sponsors"},"Sponsors")),r.a.createElement("div",{className:"f-links"},r.a.createElement(c.b,{to:"/team"},"Team"))),r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4 col6"},r.a.createElement("img",{alt:"E-Cell Logo",style:{height:"80px",width:"80px"},src:o.a}),r.a.createElement("p",{style:{color:"white",margin:"15px",fontSize:"17px",fontWeight:"600"}},"E-Cell, NIT Raipur is established to motivate and educate people about entrepreneurship and serve as a meeting ground for corporate and young budding entrepreneurs from distinguished institutions.")),r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4"},r.a.createElement("h3",{style:{color:"white",fontWeight:"800"}},"E-SUMMIT'19"),r.a.createElement("p",{style:{color:"white",fontWeight:"600"}},"Follow us online on-"),r.a.createElement("p",{style:{fontSize:"40px"}},r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fab fa-facebook-square"})),r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fab fa-instagram"})),r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fab fa-twitter-square"})),r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fab fa-linkedin"}))),r.a.createElement("div",null,r.a.createElement("a",{className:"site",href:"https://ecell.nitrr.ac.in/"},"E-Cell Official Site")),r.a.createElement("div",null,r.a.createElement("a",Object(n.a)({href:"#",style:{color:"white"}},"href","tel:8094966697"),"+91 80949 66697")),r.a.createElement("div",null,r.a.createElement("a",Object(n.a)({href:"#",style:{color:"white"}},"href","tel:8839579796"),"+91 88395 79796")),r.a.createElement("p",{style:{color:"white",marginTop:"5px"}},"\xa9 All Rights Reserved")))))}},53:function(e,t,a){}}]);
//# sourceMappingURL=15.3b0ced30.chunk.js.map