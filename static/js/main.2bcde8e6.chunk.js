(this.webpackJsonppaper_scissors_rock=this.webpackJsonppaper_scissors_rock||[]).push([[0],{11:function(e,s,t){"use strict";t.r(s);var a=t(2),c=t(1),r=t(4),n=t.n(r),i=(t(9),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,12)).then((function(s){var t=s.getCLS,a=s.getFID,c=s.getFCP,r=s.getLCP,n=s.getTTFB;t(e),a(e),c(e),r(e),n(e)}))}),o=t(0);function l(e){return Object(o.jsxs)("div",{id:"choice",ref:e.choiceClass,children:[Object(o.jsx)("img",{name:"paper",onClick:e.handleClick}),Object(o.jsx)("img",{name:"scissors",onClick:e.handleClick}),Object(o.jsx)("img",{name:"rock",onClick:e.handleClick})]})}function u(e){return Object(o.jsxs)("div",{id:"output",className:"hide",ref:e.outputClass,children:[Object(o.jsxs)("div",{id:"fight",children:[Object(o.jsx)("p",{children:"You"}),Object(o.jsx)("img",{src:"",name:"userImage",ref:e.userImage}),Object(o.jsx)("p",{children:"VS"}),Object(o.jsx)("img",{src:"",name:"computerImage",ref:e.computerImage}),Object(o.jsx)("p",{children:"CPU"})]}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{className:"result",children:e.result}),Object(o.jsx)("button",{onClick:e.playAgain,children:"Play Again"})]})}function m(){var e=Object(c.useState)("User Input"),s=Object(a.a)(e,2),t=s[0],r=s[1],n=Object(c.useState)("Computer Choice"),i=Object(a.a)(n,2),m=i[0],p=i[1],j=Object(c.useState)("Result"),h=Object(a.a)(j,2),b=h[0],g=h[1],d=Object(c.useState)(parseInt(localStorage.getItem("zumthezazaking_rps_wins"))||0),O=Object(a.a)(d,2),k=O[0],f=O[1],I=Object(c.useState)(parseInt(localStorage.getItem("zumthezazaking_rps_defeats"))||0),z=Object(a.a)(I,2),x=z[0],C=z[1],_=Object(c.useRef)(),N=Object(c.useRef)(),w=Object(c.useRef)(),S=Object(c.useRef)(),v=["rock","paper","scissors"];return Object(o.jsxs)("div",{id:"mainContainer",children:[Object(o.jsxs)("p",{children:["Wins: ",k]}),Object(o.jsxs)("p",{children:["Defeats: ",x]}),Object(o.jsxs)("div",{id:"container",children:[Object(o.jsx)(l,{handleClick:function(e){w.current.className="hide",S.current.className="",r(e.target.name);var s=v[Math.floor(Math.random()*v.length)];switch(p(s),e.target.name){case"rock":_.current.className="rock","paper"===s?(N.current.className="paper",g("You lose"),C(x+1),localStorage.setItem("zumthezazaking_rps_defeats",parseInt(x)+1)):"scissors"===s?(N.current.className="scissors",g("You win"),f(k+1),localStorage.setItem("zumthezazaking_rps_wins",parseInt(k)+1)):(N.current.className="rock",g("Draw"));break;case"paper":_.current.className="paper","scissors"===s?(N.current.className="scissors",g("You lose"),C(x+1),localStorage.setItem("zumthezazaking_rps_defeats",parseInt(x)+1)):"rock"===s?(N.current.className="rock",g("You win"),f(k+1),localStorage.setItem("zumthezazaking_rps_wins",parseInt(k)+1)):(N.current.className="paper",g("Draw"));break;case"scissors":_.current.className="scissors","rock"===s?(N.current.className="rock",g("You lose"),C(x+1),localStorage.setItem("zumthezazaking_rps_defeats",parseInt(x)+1)):"paper"===s?(N.current.className="paper",g("You win"),f(k+1),localStorage.setItem("zumthezazaking_rps_wins",parseInt(k)+1)):(N.current.className="scissors",g("Draw"));break;default:alert("There was a problem generating the output"),window.location.reload()}},choiceClass:w}),Object(o.jsx)(u,{userChoice:t,computerChoice:m,result:b,userImage:_,computerImage:N,outputClass:S,playAgain:function(){w.current.className="",S.current.className="hide"}})]})]})}var p=Object(o.jsx)(m,{});n.a.render(p,document.getElementById("root")),i()},9:function(e,s,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.2bcde8e6.chunk.js.map