(this.webpackJsonpsite=this.webpackJsonpsite||[]).push([[0],{44:function(e,t,a){e.exports=a(57)},49:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(25),i=a.n(o),c=(a(49),a(6)),s=a(7),l=a(9),p=a(8),m=a(77),u=a(73),d=a(74),h=a(15),b=a(19),v=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(m.a,{className:this.props.classes.header},r.a.createElement(u.a,null,r.a.createElement(b.b,{to:"/",className:this.props.classes.headerName},r.a.createElement(d.a,{variant:"h6"},"Stellar Space Systems")),r.a.createElement("nav",{className:this.props.classes.navCont},this.props.data.links.map((function(t){var a=t.name,n=t.link,o=t.subs;return o.length<1?r.a.createElement(b.b,{to:n,className:e.props.classes.link},a):r.a.createElement("div",{className:e.props.classes.dropdown},r.a.createElement("button",{style:{backgroundColor:"black",border:"none"},className:e.props.classes.link},a),r.a.createElement("div",{className:e.props.classes.dropdownContent},o.map((function(t){var a=t.name,n=t.link;return r.a.createElement(b.b,{to:n,className:"".concat(e.props.classes.link," ").concat(e.props.classes.dropdownLink)},a)}))))})))))}}]),a}(r.a.Component),f=Object(h.a)({header:{backgroundColor:"black"},headerName:{color:"white",textDecoration:"none"},link:{padding:"0 10px",fontSize:"18px",color:"white",margin:"0px",textDecoration:"none",textTransform:"uppercase","&:hover":{color:"#dedede",textDecoration:"none"}},navCont:{position:"fixed",left:"50%",transform:"translateX(-50%)"},dropdown:{display:"inline-block",position:"relative","&:hover $dropdownContent":{display:"block"}},dropdownContent:{display:"none",position:"absolute",zIndex:"1",backgroundColor:"black",paddingTop:"21px",minWidth:"200px",left:"50%",marginLeft:"-100px"},dropdownLink:{display:"block",textAlign:"center",padding:"16px 10px"}})(v),g=a(76),E=a(42),k=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:this.props.classes.footer},r.a.createElement("div",{className:this.props.classes.copyright},r.a.createElement(d.a,{variant:"paragraph"},"\xa9 ",(new Date).getFullYear()," Stellar Space Systems")),r.a.createElement("div",{className:this.props.classes.social},this.props.data.socials.map((function(t){var a=t.link,n=t.icon;return r.a.createElement(g.a,{naked:!0,href:a,target:"_blank"},r.a.createElement(E.a,{icon:n,className:e.props.classes.icon}))}))))}}]),a}(r.a.Component),y=Object(h.a)({footer:{backgroundColor:"black",color:"white",width:"100%",height:"64px"},copyright:{float:"left",marginLeft:"100px",marginTop:"22px"},social:{float:"right",marginRight:"100px",marginTop:"20px"},icon:{fontSize:"24px",color:"white",paddingLeft:"10px","&:hover":{color:"#dedede"}}})(k),w=[{},{}],x=[],j=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement(d.a,{variant:"h4",align:"center"},"Vehicles"),w.map((function(t){t.name,t.link,t.description;return r.a.createElement("div",{className:e.props.classes.itemCont},"test")}))),r.a.createElement("div",null,r.a.createElement(d.a,{variant:"h4",align:"center"},"Components"),x.map((function(e){e.name,e.link,e.description;return r.a.createElement("div",null,"test")}))))}}]),a}(r.a.Component),O=Object(h.a)({})(j),C=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(d.a,{variant:"h4",align:"center"},"About"),r.a.createElement(d.a,{variant:"body1",align:"center",className:this.props.classes.mainBody},this.props.data.abouttext),r.a.createElement(d.a,{variant:"h4",align:"center"},"The Team"),r.a.createElement("div",null,r.a.createElement("ul",{className:this.props.classes.teamCont},this.props.data.team.map((function(t){var a=t.name,n=t.position;return r.a.createElement("li",{className:e.props.classes.teamItem},r.a.createElement(d.a,{variant:"h5",align:"center"},a,", ",r.a.createElement("span",{style:{fontSize:"16px"}},n)))})))))}}]),a}(r.a.Component),N=Object(h.a)({mainBody:{maxWidth:"40%",margin:"auto"},teamCont:{listStyle:"none",padding:"0px"},teamItem:{borderBottom:"black solid 2px",width:"60%",margin:"auto","&:first-child":{borderTop:"black solid 2px"}}})(C),S=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,{variant:"h3",align:"center",style:{marginTop:"300px"}},"Page not Found"))}}]),a}(r.a.Component),T=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,{variant:"h4",align:"center"},"Sparrow"),r.a.createElement(d.a,null))}}]),a}(r.a.Component),W=Object(h.a)({})(T),B=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return"test"}}]),a}(r.a.Component),D=a(4),L=a(43),z=a(75),F=a(31),I={header:{links:[{name:"About",link:"/about",subs:[]},{name:"Components",link:"/components",subs:[{name:"Sparrow",link:"/engines/sparrow"}]},{name:"Phoenix",link:"/phoenix",subs:[]}]},footer:{socials:[{link:"https://www.youtube.com/channel/UCcDWszakBaLDEjaqmg8X-vg",icon:F.c},{link:"https://discord.gg/WhFJJyY",icon:F.a},{link:"https://github.com/stellarspacesystems/",icon:F.b}]},about:{team:[{name:"Nathaniel Hargrave",position:"CEO & Founder",img:""}],abouttext:"Stellar Space Systems is dedicated to expanding in-space tranportation services. In the near future, many private space stations will grow in low-earth orbit and as in-space manufacturing grows, we will need a way to transport materials and products from station to station. We also provide components for those who want to build their own."}},J=Object(L.a)({typography:{fontFamily:"inherit"}});var A=function(){return r.a.createElement(b.a,null,r.a.createElement(z.a,{theme:J},r.a.createElement(f,{data:I.header}),r.a.createElement("div",{style:{marginTop:"64px",minHeight:"calc(100vh - 128px)"}},r.a.createElement(D.c,null,r.a.createElement(D.a,{path:"/",component:O,exact:!0}),r.a.createElement(D.a,{path:"/about",render:function(e){return r.a.createElement(N,Object.assign({},e,{data:I.about}))}}),r.a.createElement(D.a,{path:"/engines/sparrow",component:W}),r.a.createElement(D.a,{path:"/phoenix",component:B}),r.a.createElement(D.a,{component:S}))),r.a.createElement(y,{data:I.footer})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.d6fbccc7.chunk.js.map