(this.webpackJsonpsite=this.webpackJsonpsite||[]).push([[0],{46:function(e,a,t){e.exports=t(59)},51:function(e,a,t){},59:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(25),i=t.n(o),c=(t(51),t(10)),s=t(11),l=t(13),p=t(12),m=t(74),u=t(76),d=t(77),h=t(6),b=t(19),v=function(e){Object(l.a)(t,e);var a=Object(p.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(m.a,{className:this.props.classes.header},r.a.createElement(u.a,null,r.a.createElement(b.b,{to:"/",className:this.props.classes.headerName},r.a.createElement(d.a,{variant:"h6"},"Stellar Space Systems")),r.a.createElement("nav",{className:this.props.classes.navCont},this.props.data.links.map((function(a){var t=a.name,n=a.link,o=a.subs;return o.length<1?r.a.createElement(b.b,{to:n,className:e.props.classes.link},t):r.a.createElement("div",{className:e.props.classes.dropdown},r.a.createElement("button",{style:{backgroundColor:"black",border:"none"},className:e.props.classes.link},t),r.a.createElement("div",{className:e.props.classes.dropdownContent},o.map((function(a){var t=a.name,n=a.link;return r.a.createElement(b.b,{to:n,className:"".concat(e.props.classes.link," ").concat(e.props.classes.dropdownLink)},t)}))))})))))}}]),t}(r.a.Component),g=Object(h.a)({header:{backgroundColor:"black"},headerName:{color:"white",textDecoration:"none"},link:{padding:"0 10px",fontSize:"18px",color:"white",margin:"0px",textDecoration:"none",textTransform:"uppercase","&:hover":{color:"#dedede",textDecoration:"none"}},navCont:{position:"fixed",left:"50%",transform:"translateX(-50%)"},dropdown:{display:"inline-block",position:"relative","&:hover $dropdownContent":{display:"block"}},dropdownContent:{display:"none",position:"absolute",zIndex:"1",backgroundColor:"black",paddingTop:"21px",minWidth:"200px",left:"50%",marginLeft:"-100px"},dropdownLink:{display:"block",textAlign:"center",padding:"16px 10px"}})(v),f=t(82),E=t(42),k=function(e){Object(l.a)(t,e);var a=Object(p.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:this.props.classes.footer},r.a.createElement("div",{className:this.props.classes.copyright},r.a.createElement(d.a,{variant:"paragraph"},"\xa9 ",(new Date).getFullYear()," Stellar Space Systems")),r.a.createElement("div",{className:this.props.classes.social},this.props.data.socials.map((function(a){var t=a.link,n=a.icon;return r.a.createElement(f.a,{naked:!0,href:t,target:"_blank"},r.a.createElement(E.a,{icon:n,className:e.props.classes.icon}))}))))}}]),t}(r.a.Component),y=Object(h.a)({footer:{backgroundColor:"black",color:"white",width:"100%",height:"64px"},copyright:{float:"left",marginLeft:"100px",marginTop:"22px"},social:{float:"right",marginRight:"100px",marginTop:"20px"},icon:{fontSize:"24px",color:"white",paddingLeft:"10px","&:hover":{color:"#dedede"}}})(k),w=[{},{}],x=[],j=function(e){Object(l.a)(t,e);var a=Object(p.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement(d.a,{variant:"h4",align:"center"},"Vehicles"),w.map((function(a){a.name,a.link,a.description;return r.a.createElement("div",{className:e.props.classes.itemCont},"test")}))),r.a.createElement("div",null,r.a.createElement(d.a,{variant:"h4",align:"center"},"Components"),x.map((function(e){e.name,e.link,e.description;return r.a.createElement("div",null,"test")}))))}}]),t}(r.a.Component),O=Object(h.a)({})(j),C=t(78),N=t(79),S=t(80),T=function(e){Object(l.a)(t,e);var a=Object(p.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,{variant:"h4",align:"center"},"About"),r.a.createElement(d.a,{variant:"body1",align:"center",className:this.props.classes.mainBody},this.props.data.abouttext),r.a.createElement(d.a,{variant:"h4",align:"center"},"The Team"),r.a.createElement("div",{style:{overflowX:"hidden"}},r.a.createElement(C.a,{container:!0,justify:"center",spacing:"4",className:this.props.classes.teamCont},this.props.data.team.map((function(e){var a=e.name,t=e.position;e.img;return r.a.createElement(C.a,{item:!0},r.a.createElement(N.a,null,r.a.createElement(S.a,null,r.a.createElement(d.a,{variant:"h5",align:"center"},a),r.a.createElement(d.a,{variant:"body1",align:"center"},t))))})))))}}]),t}(r.a.Component),W=Object(h.a)({mainBody:{maxWidth:"40%",margin:"auto"},teamCont:{marginTop:"32px",marginBottom:"32px"}})(T),B=function(e){Object(l.a)(t,e);var a=Object(p.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,{variant:"h3",align:"center",style:{marginTop:"300px"}},"Page not Found"))}}]),t}(r.a.Component),D=function(e){Object(l.a)(t,e);var a=Object(p.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,{variant:"h4",align:"center"},"Sparrow"),r.a.createElement(d.a,null))}}]),t}(r.a.Component),L=Object(h.a)({})(D),F=t(4),z=t(43),J=t(81),A=t(31),I={header:{links:[{name:"About",link:"/about",subs:[]},{name:"Components",link:"/components",subs:[{name:"Sparrow",link:"/engines/sparrow"}]},{name:"Phoenix",link:"/phoenix",subs:[]}]},footer:{socials:[{link:"https://www.youtube.com/channel/UCcDWszakBaLDEjaqmg8X-vg",icon:A.c},{link:"https://discord.gg/WhFJJyY",icon:A.a},{link:"https://github.com/stellarspacesystems/",icon:A.b}]},about:{team:[{name:"Nathaniel Hargrave",position:"CEO & Founder",img:""}],abouttext:"Stellar Space Systems is dedicated to expanding in-space tranportation services. In the near future, many private space stations will grow in low-earth orbit and as in-space manufacturing grows, we will need a way to transport materials and products from station to station. We also provide components for those who want to build their own."}},X=Object(z.a)({typography:{fontFamily:"inherit"}});var H=function(){return r.a.createElement(b.a,null,r.a.createElement(J.a,{theme:X},r.a.createElement(g,{data:I.header}),r.a.createElement("div",{style:{marginTop:"64px",minHeight:"calc(100vh - 128px)"}},r.a.createElement(F.c,null,r.a.createElement(F.a,{path:"/",component:O,exact:!0}),r.a.createElement(F.a,{path:"/about",render:function(e){return r.a.createElement(W,Object.assign({},e,{data:I.about}))}}),r.a.createElement(F.a,{path:"/engines/sparrow",component:L}),r.a.createElement(F.a,{component:B}))),r.a.createElement(y,{data:I.footer})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.eee9a704.chunk.js.map