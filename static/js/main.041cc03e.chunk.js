(this["webpackJsonpbig-market"]=this["webpackJsonpbig-market"]||[]).push([[0],{17:function(n,e,t){},23:function(n,e,t){"use strict";t.r(e);var i,r,c,s,l,o,d,h,j,a,b,x,O,m,g,f,u,p,w,v,z,y,k,C,M,H,V,B,S,F=t(3),T=t.n(F),L=t(9),A=t.n(L),X=(t(17),t(1)),E=t(0),I={colors:{primary:"#a8da67",secondary:"#41d394",main:"#1d1e20",dark:"#242828",light:"#f3f3f3"},gradients:{main:"linear-gradient(to right,#a8da67 0,#41d394 100%)"}},J=function(n){var e=n.children;return Object(E.jsx)(X.a,{theme:I,children:e})},N=t(2),G=t(4),K=function(n){var e=n.size;return Object(E.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:e,viewBox:"0 0 24 24",width:e,fill:"#000",children:[Object(E.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(E.jsx)("path",{d:"M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"})]})},P=X.b.button(i||(i=Object(N.a)(["\n  border: none;\n  background: none;\n  cursor: pointer;\n"]))),Q=X.b.div(r||(r=Object(N.a)(["\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  z-index: 100;\n  top: 0;\n  width: 80%;\n  height: 100vh;\n  background-color: white;\n  transition: transform 0.3s ease-in-out;\n  @media (min-width: 600px) {\n    width: 300px;\n  }\n"]))),R=Object(X.b)(Q)(c||(c=Object(N.a)(["\n  left: -80%;\n  transform: ",";\n  @media (min-width: 600px) {\n    left: -300px;\n  }\n"])),(function(n){return n.isOpen?"translateX(100%)":"translateX(0)"})),W=Object(X.b)(Q)(s||(s=Object(N.a)(["\n  right: 0;\n  transform: ",";\n"])),(function(n){return n.isOpen?"translateX(0)":"translateX(100%)"})),q=X.b.div(l||(l=Object(N.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(0,0,0, .4);\n  transition: visibility 0s, opacity 0.3s ease-in-out;\n  visibility: ",";\n  opacity: ",";\n"])),(function(n){return n.isOpen?"visible":"hidden"}),(function(n){return n.isOpen?1:0})),D=function(n){var e=n.position,t=n.isOpen,i=n.onToggleChange,r=n.children;return Object(E.jsxs)(E.Fragment,{children:["left"===e?Object(E.jsx)(R,{isOpen:t,children:r}):Object(E.jsx)(W,{isOpen:t,children:r}),Object(E.jsx)(q,{isOpen:t,onClick:i})]})},U=function(n){var e=n.size;return Object(E.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:e,viewBox:"0 0 24 24",width:e,fill:"#FFFFFF",children:[Object(E.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(E.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"})]})},Y=X.b.div(o||(o=Object(N.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: .75rem 1rem;\n  background-color: ",";\n  h2 {\n    color: white;\n    font-family: inherit;\n    font-size: 1rem;\n    font-weight: 800;\n  }\n"])),(function(n){return n.theme.colors.main})),Z=X.b.ul(d||(d=Object(N.a)(["\n  margin: 0;\n  padding: .25rem 0;\n  list-style-type: none;\n"]))),$=X.b.li(h||(h=Object(N.a)(["\n  a {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    color: inherit;\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 1rem;\n    padding: .75rem 1rem;\n    cursor: pointer;\n  }\n  svg {\n    margin-right: .5rem;\n  }\n"]))),_=X.b.div(j||(j=Object(N.a)(["\n  width: calc(100% - 2rem);\n  height: 1px;\n  margin: .75rem 1rem;\n  background-color: #ddd;\n"]))),nn=function(n){var e=n.children,t=n.onToggleChange;return Object(E.jsxs)(Y,{children:[Object(E.jsx)("h2",{children:e}),Object(E.jsx)(P,{onClick:t,children:Object(E.jsx)(U,{size:"1.5rem"})})]})},en=function(n){var e=n.children;return Object(E.jsx)(Z,{children:e})},tn=function(n){var e=n.children;return Object(E.jsx)($,{children:Object(E.jsx)("a",{children:e})})},rn=X.b.button(a||(a=Object(N.a)(["\n  background: ",";\n  height: 2rem;\n  border: none;\n  border-radius: 1rem;\n  padding: .5rem .75rem;\n  color: white;\n  font-size: .75rem;\n  font-weight: 700;\n  line-height: .75rem;\n  cursor: pointer;\n"])),(function(n){return n.theme.gradients.main})),cn=function(n){var e=n.size;return Object(E.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:e,viewBox:"0 0 24 24",width:e,fill:"#000",children:[Object(E.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(E.jsx)("path",{d:"M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})]})},sn=X.b.div(b||(b=Object(N.a)(["\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid black;\n  border-radius: 1.25rem;\n  height: 2.5rem;\n  margin-left: .5rem;\n  padding: 0 3px;\n  &:focus-within {\n    border: 2px solid ",";\n    padding: 0 2px;\n  }\n  @media (min-width: 600px) {\n    margin-right: .5rem;\n  }\n"])),(function(n){return n.theme.colors.main})),ln=X.b.input(x||(x=Object(N.a)(["\n  flex-grow: 1;\n  margin-left: .5rem;\n  width: 0;\n  height: 2rem;\n  font-size: 1rem;\n  line-height: 2rem;\n  font-family: inherit;\n  border: none;\n  outline: none;\n"]))),on=Object(X.b)(P)(O||(O=Object(N.a)(["\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n"]))),dn=function(){return Object(E.jsxs)(sn,{children:[Object(E.jsx)(rn,{children:"All Categories"}),Object(E.jsx)(ln,{type:"text",placeholder:"Search Products"}),Object(E.jsx)(on,{children:Object(E.jsx)(cn,{size:"1.5rem"})})]})},hn=X.b.div(m||(m=Object(N.a)(["\n  display: flex;\n  align-items: center;\n"]))),jn=function(){var n=Object(F.useState)(!1),e=Object(G.a)(n,2),t=e[0],i=e[1],r=function(){i(!t)};return Object(E.jsxs)(hn,{children:[Object(E.jsx)(P,{onClick:r,children:Object(E.jsx)(K,{size:"2.2rem"})}),Object(E.jsx)(D,{position:"left",isOpen:t,onToggleChange:r,children:Object(E.jsx)(nn,{onToggleChange:r,children:"Categories"})}),Object(E.jsx)(dn,{})]})},an=function(n){var e=n.size;return Object(E.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:e,viewBox:"0 0 24 24",width:e,fill:"#fff",children:[Object(E.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(E.jsx)("path",{d:"M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"})]})},bn=X.b.div(g||(g=Object(N.a)(["\n  display: flex;\n  cursor: pointer;\n"]))),xn=X.b.div(f||(f=Object(N.a)(["\n  background: ",";\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: .5rem;\n"])),(function(n){return n.theme.gradients.main})),On=X.b.h1(u||(u=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  padding-left: .25rem;\n  color: ",";\n  font-style: italic;\n  font-weight: 800;\n"])),(function(n){return n.theme.colors.main})),mn=X.b.span(p||(p=Object(N.a)(["\n  font-size: 2rem;\n  line-height: 1.75rem;\n"]))),gn=X.b.span(w||(w=Object(N.a)(["\n  font-size: .75rem;\n  line-height: .75rem;\n"]))),fn=function(){return Object(E.jsxs)(bn,{children:[Object(E.jsx)(xn,{children:Object(E.jsx)(an,{size:"2.5rem"})}),Object(E.jsxs)(On,{children:[Object(E.jsx)(mn,{children:"BIG"}),Object(E.jsx)(gn,{children:"MARKET"})]})]})},un=function(n){var e=n.size;return Object(E.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:e,viewBox:"0 0 24 24",width:e,fill:"#000",children:[Object(E.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(E.jsx)("path",{d:"M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"})]})},pn=function(n){var e=n.size;return Object(E.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:e,viewBox:"0 0 24 24",width:e,fill:"#000",children:[Object(E.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(E.jsx)("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"})]})},wn=X.b.div(v||(v=Object(N.a)(["\n  @media (min-width: 600px) {\n    display: none;\n  }\n"]))),vn=function(){var n=Object(F.useState)(!1),e=Object(G.a)(n,2),t=e[0],i=e[1],r=function(){i(!t)};return Object(E.jsxs)(wn,{children:[Object(E.jsx)(P,{onClick:r,children:Object(E.jsx)(K,{size:"2.2rem"})}),Object(E.jsxs)(D,{position:"right",isOpen:t,onToggleChange:r,children:[Object(E.jsx)(nn,{onToggleChange:r,children:"Quick Links"}),Object(E.jsxs)(en,{children:[Object(E.jsx)(tn,{children:"Home"}),Object(E.jsx)(tn,{children:"Special offers"}),Object(E.jsx)(tn,{children:"Newsletter"}),Object(E.jsx)(tn,{children:"About us"}),Object(E.jsx)(tn,{children:"Contact"}),Object(E.jsx)(_,{}),Object(E.jsxs)(tn,{children:[Object(E.jsx)(un,{size:"1.75rem"}),"Account"]}),Object(E.jsxs)(tn,{children:[Object(E.jsx)(pn,{size:"1.75rem"}),"Wishlist"]})]})]})]})},zn=X.b.div(z||(z=Object(N.a)(["\n  display: none;\n  @media (min-width: 600px) {\n    margin-right: .75rem;\n    display: block;\n  }\n"]))),yn=function(){return Object(E.jsx)(zn,{children:Object(E.jsx)(P,{children:Object(E.jsx)(un,{size:"2rem"})})})},kn=X.b.div(y||(y=Object(N.a)(["\n  display: none;\n  @media (min-width: 600px) {\n    margin-right: .75rem;\n    display: block;\n  }\n"]))),Cn=function(){return Object(E.jsx)(kn,{children:Object(E.jsx)(P,{children:Object(E.jsx)(pn,{size:"2rem"})})})},Mn=function(n){var e=n.size;return Object(E.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:e,viewBox:"0 0 24 24",width:e,fill:"#000",children:Object(E.jsxs)("g",{children:[Object(E.jsx)("rect",{fill:"none",height:"24",width:"24"}),Object(E.jsx)("path",{d:"M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z"})]})})},Hn=X.b.div(k||(k=Object(N.a)(["\n  position: relative;\n"]))),Vn=X.b.div(C||(C=Object(N.a)(["\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  border-radius: 50%;\n  background: ",";\n  padding: .25rem;\n  min-width: 1.25rem;\n  text-align: center;\n  line-height: .75rem;\n  font-size: .6rem;\n  font-weight: 700;\n"])),(function(n){return n.theme.gradients.main})),Bn=function(){return Object(E.jsx)(P,{children:Object(E.jsxs)(Hn,{children:[Object(E.jsx)(Mn,{size:"2rem"}),Object(E.jsx)(Vn,{children:"0"})]})})},Sn=X.b.div(M||(M=Object(N.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: .5rem;\n  border-bottom: 1px solid #ddd;\n  flex-direction: row-reverse;\n  flex-wrap: wrap;\n  @media (min-width: 600px) {\n    height: 75px;\n  }\n"]))),Fn=X.b.div(H||(H=Object(N.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-grow: 1;\n  @media (min-width: 816px) {\n    width: 350px;\n    flex-grow: 0;\n  }\n"]))),Tn=X.b.div(V||(V=Object(N.a)(["\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  @media (min-width: 600px) {\n    flex-grow: 0;\n    width: 100px;\n  }\n  @media (min-width: 816px) {\n    flex-grow: 1;\n    justify-content: center;\n  }\n"]))),Ln=X.b.div(B||(B=Object(N.a)(["\n  width: 100%;\n  margin-top: .5rem;\n  @media (min-width: 600px) {\n    margin-top: 0;\n    width: 350px;\n  }\n"]))),An=function(){return Object(E.jsxs)(Sn,{children:[Object(E.jsxs)(Fn,{children:[Object(E.jsx)(yn,{}),Object(E.jsx)(Cn,{}),Object(E.jsx)(Bn,{}),Object(E.jsx)(vn,{})]}),Object(E.jsx)(Tn,{children:Object(E.jsx)(fn,{})}),Object(E.jsx)(Ln,{children:Object(E.jsx)(jn,{})})]})},Xn=X.b.nav(S||(S=Object(N.a)(["\n  display: none;\n  @media (min-width: 600px) {\n    display: flex;\n    justify-content: center;\n  }\n  ul {\n    display: flex;\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n  }\n  li {\n    padding: .25rem;\n  }\n  a {\n    display: block;\n    text-decoration: none;\n    color: inherit;\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 1rem;\n    padding: .75rem;\n    border-radius: 2.5rem;\n    background-color: ",";\n    &:hover {\n      color: white;\n      background-color: ",";\n    }\n  }\n"])),(function(n){return n.theme.colors.light}),(function(n){return n.theme.colors.main})),En=function(){return Object(E.jsx)(Xn,{children:Object(E.jsxs)("ul",{children:[Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"#",children:"Home"})}),Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"#",children:"Special offers"})}),Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"#",children:"Newsletter"})}),Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"#",children:"About us"})}),Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"#",children:"Contact"})})]})})};var In=function(){return Object(E.jsxs)(J,{children:[Object(E.jsx)(An,{}),Object(E.jsx)(En,{})]})};A.a.render(Object(E.jsx)(T.a.StrictMode,{children:Object(E.jsx)(In,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.041cc03e.chunk.js.map