(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(31)},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),m=a.n(n),r=a(13),c=a.n(r);a(22),a(23),a(24);var o=function(){return m.a.createElement("div",{className:"header"},m.a.createElement("img",{src:"./Troll Face.png",alt:""}),m.a.createElement("span",null,"Meme Generator"))},l=a(2),u=a(7),i=a(3),s=(a(9),a(6)),p=a.n(s);var x=function(e){return m.a.createElement(p.a,null,m.a.createElement("h2",{className:"meme--text"},e.text))};var f=function(){var e=Object(n.useState)({topText:"",bottomText:"",thirdText:"",fourthText:"",randomImage:"http://i.imgflip.com/1bij.jpg"}),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),o=Object(i.a)(c,2),s=o[0],p=o[1],f=function(e){var t=e.target,a=t.name,n=t.value;r(function(e){return Object(u.a)({},e,Object(l.a)({},a,n))})},h=Object(n.useState)([]),d=Object(i.a)(h,2),E=d[0],T=d[1];return Object(n.useEffect)(function(){fetch("https://api.imgflip.com/get_memes").then(function(e){return e.json()}).then(function(e){return T(e.data.memes)})},[]),m.a.createElement("div",{className:"meme"},m.a.createElement("form",{action:""},m.a.createElement("input",{name:"topText",type:"text",className:"meme__inputs",placeholder:"Top Text",onChange:f,value:a.topText}),m.a.createElement("input",{name:"bottomText",type:"text",className:"meme__inputs",placeholder:"Bottom Text",onChange:f,value:a.bottomText}),m.a.createElement("button",{onClick:function(e){e.preventDefault();var t=Math.floor(Math.random()*E.length),a=E[t].url;console.log(a),r(function(e){return Object(u.a)({},e,{topText:"",bottomText:"",thirdText:"",fourthText:"",randomImage:a})})},className:"meme__button"},"Get a new meme image  \ud83d\uddbc"),m.a.createElement("div",{className:"meme__wrap"},m.a.createElement("img",{className:"meme__image",src:a.randomImage,alt:""}),m.a.createElement("button",{onClick:function(e){e.preventDefault(),p(!0)},className:"text__button"},"Add more text"),s&&m.a.createElement(m.a.Fragment,null,m.a.createElement("input",{name:"thirdText",type:"text",className:"meme__inputs",placeholder:"Third Text",onChange:f,value:a.thirdText}),m.a.createElement("input",{name:"fourthText",type:"text",className:"meme__inputs",placeholder:"Fourth Text",onChange:f,value:a.fourthText})),m.a.createElement(x,{text:a.topText}),m.a.createElement(x,{text:a.bottomText}),m.a.createElement(x,{text:a.thirdText}),m.a.createElement(x,{text:a.fourthText}))))};var h=function(){return m.a.createElement("div",{className:"App"},m.a.createElement(o,null),m.a.createElement(f,null))};c.a.createRoot(document.getElementById("root")).render(m.a.createElement(m.a.StrictMode,null,m.a.createElement(h,null)))},9:function(e,t,a){}},[[14,1,2]]]);
//# sourceMappingURL=main.86b583f3.chunk.js.map