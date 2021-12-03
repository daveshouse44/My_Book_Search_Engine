(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{105:function(e,a,t){},115:function(e,a,t){"use strict";t.r(a);var n,r,o,l,c,i=t(0),s=t.n(i),u=t(36),m=t.n(u),d=(t(104),t(105),t(51)),b=t(11),p=t(94),g=t(19),v=t.n(g),k=t(30),E=t(15),h=t(125),f=t(126),w=t(133),O=t(90),j=t(127),y=t(128),S=t(139),I=t(87),x=t(88),C=t(78),B=t.n(C),F=new(function(){function e(){Object(I.a)(this,e)}return Object(x.a)(e,[{key:"getProfile",value:function(){return B()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return B()(e).exp<Date.now()/1e3}catch(a){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),T=function(e){var a=localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):null;if(!a)return!1;var t=null===a||void 0===a?void 0:a.filter((function(a){return a!==e}));return localStorage.setItem("saved_books",JSON.stringify(t)),!0},N=t(42),L=t(134),_=Object(L.a)(n||(n=Object(N.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n        email\n      }\n    }\n  }\n"]))),$=Object(L.a)(r||(r=Object(N.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        username\n        _id\n        email\n      }\n    }\n  }\n"]))),D=Object(L.a)(o||(o=Object(N.a)(["\n  mutation saveBook($bookData: BookInput!) {\n    saveBook(bookData: $bookData) {\n      username\n      _id\n      email\n      bookCount\n      savedBooks {\n        authors\n        description\n        bookId\n        image\n        link\n        title\n      }\n    }\n  }\n"]))),q=Object(L.a)(l||(l=Object(N.a)(["\n  mutation removeBook($bookId: String!) {\n    removeBook(bookId: $bookId) {\n      _id\n      username\n      email\n      bookCount\n      savedBooks {\n        authors\n        description\n        bookId\n        image\n        link\n        title\n      }\n    }\n  }\n"]))),P=t(120),Y=function(){var e=Object(i.useState)([]),a=Object(E.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(""),o=Object(E.a)(r,2),l=o[0],c=o[1],u=Object(i.useState)(localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):[]),m=Object(E.a)(u,2),d=m[0],b=m[1];Object(i.useEffect)((function(){return function(){var e;(e=d).length?localStorage.setItem("saved_books",JSON.stringify(e)):localStorage.removeItem("saved_books")}}));var g=Object(P.a)(D),I=Object(E.a)(g,2),x=I[0],C=I[1].error,B=function(){var e=Object(k.a)(v.a.mark((function e(a){var t,r,o,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),l){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(l));case 6:if((t=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,t.json();case 11:r=e.sent,o=r.items,i=o.map((function(e){var a;return{authors:e.volumeInfo.authors||["No author to display"],description:e.volumeInfo.description,bookId:e.id,image:(null===(a=e.volumeInfo.imageLinks)||void 0===a?void 0:a.thumbnail)||"",title:e.volumeInfo.title}})),n(i),c(""),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(a){return e.apply(this,arguments)}}(),T=function(){var e=Object(k.a)(v.a.mark((function e(a){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.find((function(e){return e.bookId===a})),F.loggedIn()?F.getToken():null){e.next=4;break}return e.abrupt("return",!1);case 4:return e.prev=4,e.next=7,x({variables:{bookData:{bookData:n}}});case 7:if(r=e.sent,r.data){e.next=11;break}throw new Error("something went wrong!");case 11:b([].concat(Object(p.a)(d),[n.bookId])),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(h.a,{fluid:!0,className:"text-light bg-dark"},s.a.createElement(f.a,null,s.a.createElement("h1",null,"Search for Books!"),s.a.createElement(w.a,{onSubmit:B},s.a.createElement(w.a.Row,null,s.a.createElement(O.a,{xs:12,md:8},s.a.createElement(w.a.Control,{name:"searchInput",value:l,onChange:function(e){return c(e.target.value)},type:"text",size:"lg",placeholder:"Search for a book"})),s.a.createElement(O.a,{xs:12,md:4},s.a.createElement(j.a,{type:"submit",variant:"success",size:"lg"},"Submit Search")))))),s.a.createElement(f.a,null,s.a.createElement("h2",null,t.length?"Viewing ".concat(t.length," results:"):"Search for a book to begin"),s.a.createElement(y.a,null,t.map((function(e){return s.a.createElement(S.a,{key:e.bookId,border:"dark"},e.image?s.a.createElement(S.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,s.a.createElement(S.a.Body,null,s.a.createElement(S.a.Title,null,e.title),s.a.createElement("p",{className:"small"},"Authors: ",e.authors),s.a.createElement(S.a.Text,null,e.description),F.loggedIn()&&s.a.createElement(j.a,{disabled:null===d||void 0===d?void 0:d.some((function(a){return a===e.bookId})),className:"btn-block btn-info",onClick:function(){return T(e.bookId)}},(null===d||void 0===d?void 0:d.some((function(a){return a===e.bookId})))?"This book has already been saved!":"Save this Book!"),C&&s.a.createElement("div",{className:"my-3 p-3 bg-danger text-white"},C.message)))})))))},G=Object(L.a)(c||(c=Object(N.a)(["\n  {\n    me {\n      _id\n      username\n      email\n      password\n      savedBooks {\n        authors\n        description\n        bookId\n        image\n        link\n        title\n      }\n    }\n  }\n"]))),U=t(129),V=function(){var e=Object(U.a)(G),a=e.loading,t=e.data,n=(null===t||void 0===t?void 0:t.me)||[],r=Object(P.a)(q),o=function(){var e=Object(k.a)(v.a.mark((function e(a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(F.loggedIn()?F.getToken():null){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,r({variables:{bookId:a}});case 6:if(e.sent){e.next=9;break}throw new Error("something went wrong!");case 9:T(a),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(a){return e.apply(this,arguments)}}();return a?s.a.createElement("h2",null,"LOADING..."):s.a.createElement(s.a.Fragment,null,s.a.createElement(h.a,{fluid:!0,className:"text-light bg-dark"},s.a.createElement(f.a,null,s.a.createElement("h1",null,"Viewing saved books!"))),s.a.createElement(f.a,null,s.a.createElement("h2",null,n.savedBooks.length?"Viewing ".concat(n.savedBooks.length," saved ").concat(1===n.savedBooks.length?"book":"books",":"):"You have no saved books!"),s.a.createElement(y.a,null,n.savedBooks.map((function(e){return s.a.createElement(S.a,{key:e.bookId,border:"dark"},e.image?s.a.createElement(S.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,s.a.createElement(S.a.Body,null,s.a.createElement(S.a.Title,null,e.title),s.a.createElement("p",{className:"small"},"Authors: ",e.authors),s.a.createElement(S.a.Text,null,e.description),s.a.createElement(j.a,{className:"btn-block btn-danger",onClick:function(){return o(e.bookId)}},"Delete this Book!")))})))))},J=t(137),K=t(136),A=t(132),z=t(138),M=t(48),H=t(44),R=t(130),W=function(){var e=Object(i.useState)({username:"",email:"",password:""}),a=Object(E.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(!1),o=Object(E.a)(r,1)[0],l=Object(i.useState)(!1),c=Object(E.a)(l,2),u=c[0],m=c[1],d=Object(P.a)($),b=Object(E.a)(d,2),p=b[0],g=b[1].error,h=function(e){var a=e.target,r=a.name,o=a.value;n(Object(H.a)(Object(H.a)({},t),{},Object(M.a)({},r,o)))},f=function(){var e=Object(k.a)(v.a.mark((function e(a){var r,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,p({variables:t});case 6:r=e.sent,o=r.data,F.login(o.addUser.token),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0),m(!0);case 15:n({username:"",email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(w.a,{noValidate:!0,validated:o,onSubmit:f},s.a.createElement(R.a,{dismissible:!0,onClose:function(){return m(!1)},show:u,variant:"danger"},"Something went wrong with your signup!"),s.a.createElement(w.a.Group,null,s.a.createElement(w.a.Label,{htmlFor:"username"},"Username"),s.a.createElement(w.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:h,value:t.username,required:!0}),s.a.createElement(w.a.Control.Feedback,{type:"invalid"},"Username is required!")),s.a.createElement(w.a.Group,null,s.a.createElement(w.a.Label,{htmlFor:"email"},"Email"),s.a.createElement(w.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:h,value:t.email,required:!0}),s.a.createElement(w.a.Control.Feedback,{type:"invalid"},"Email is required!")),s.a.createElement(w.a.Group,null,s.a.createElement(w.a.Label,{htmlFor:"password"},"Password"),s.a.createElement(w.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:h,value:t.password,required:!0}),s.a.createElement(w.a.Control.Feedback,{type:"invalid"},"Password is required!")),s.a.createElement(j.a,{disabled:!(t.username&&t.email&&t.password),type:"submit",variant:"success"},"Submit")),g&&s.a.createElement("div",{className:"my-3 p-3 bg-danger text-white"},g.message))},Q=function(){var e=Object(i.useState)({email:"",password:""}),a=Object(E.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(!1),o=Object(E.a)(r,1)[0],l=Object(i.useState)(!1),c=Object(E.a)(l,2),u=c[0],m=c[1],d=Object(P.a)(_),b=Object(E.a)(d,2),p=b[0],g=b[1],h=g.error,f=g.data,O=function(e){var a=e.target,r=a.name,o=a.value;n(Object(H.a)(Object(H.a)({},t),{},Object(M.a)({},r,o)))},y=function(){var e=Object(k.a)(v.a.mark((function e(a){var r,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,p({variables:Object(H.a)({},t)});case 6:r=e.sent,o=r.data,F.login(o.login.token),window.location.reload(),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),console.error(e.t0),m(!0);case 16:n({username:"",email:"",password:""});case 17:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,f?s.a.createElement("p",null,"Success! You may now head "):s.a.createElement(w.a,{noValidate:!0,validated:o,onSubmit:y},s.a.createElement(R.a,{dismissible:!0,onClose:function(){return m(!1)},show:u,variant:"danger"},"Something went wrong with your login credentials!"),s.a.createElement(w.a.Group,null,s.a.createElement(w.a.Label,{htmlFor:"email"},"Email"),s.a.createElement(w.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:O,value:t.email,required:!0}),s.a.createElement(w.a.Control.Feedback,{type:"invalid"},"Email is required!")),s.a.createElement(w.a.Group,null,s.a.createElement(w.a.Label,{htmlFor:"password"},"Password"),s.a.createElement(w.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:O,value:t.password,required:!0}),s.a.createElement(w.a.Control.Feedback,{type:"invalid"},"Password is required!")),s.a.createElement(j.a,{disabled:!(t.email&&t.password),type:"submit",variant:"success"},"Submit")),h&&s.a.createElement("div",{className:"my-3 p-3 bg-danger text-white"},h.message))},X=function(){var e=Object(i.useState)(!1),a=Object(E.a)(e,2),t=a[0],n=a[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement(J.a,{bg:"dark",variant:"dark",expand:"lg"},s.a.createElement(f.a,{fluid:!0},s.a.createElement(J.a.Brand,{as:d.b,to:"/"},"Google Books Search"),s.a.createElement(J.a.Toggle,{"aria-controls":"navbar"}),s.a.createElement(J.a.Collapse,{id:"navbar"},s.a.createElement(K.a,{className:"ml-auto"},s.a.createElement(K.a.Link,{as:d.b,to:"/"},"Search For Books"),F.loggedIn()?s.a.createElement(s.a.Fragment,null,s.a.createElement(K.a.Link,{as:d.b,to:"/saved"},"See Your Books"),s.a.createElement(K.a.Link,{onClick:F.logout},"Logout")):s.a.createElement(K.a.Link,{onClick:function(){return n(!0)}},"Login/Sign Up"))))),s.a.createElement(A.a,{size:"lg",show:t,onHide:function(){return n(!1)},"aria-labelledby":"signup-modal"},s.a.createElement(z.a.Container,{defaultActiveKey:"login"},s.a.createElement(A.a.Header,{closeButton:!0},s.a.createElement(A.a.Title,{id:"signup-modal"},s.a.createElement(K.a,{variant:"pills"},s.a.createElement(K.a.Item,null,s.a.createElement(K.a.Link,{eventKey:"login"},"Login")),s.a.createElement(K.a.Item,null,s.a.createElement(K.a.Link,{eventKey:"signup"},"Sign Up"))))),s.a.createElement(A.a.Body,null,s.a.createElement(z.a.Content,null,s.a.createElement(z.a.Pane,{eventKey:"login"},s.a.createElement(Q,{handleModalClose:function(){return n(!1)}})),s.a.createElement(z.a.Pane,{eventKey:"signup"},s.a.createElement(W,{handleModalClose:function(){return n(!1)}})))))))},Z=t(116),ee=t(135),ae=t(131),te=new Z.a({uri:"/graphql",cache:new ee.a});var ne=function(){return s.a.createElement(ae.a,{client:te},s.a.createElement(d.a,null,s.a.createElement(s.a.Fragment,null,s.a.createElement(X,null),s.a.createElement(b.c,null,s.a.createElement(b.a,{exact:!0,path:"/",component:Y}),s.a.createElement(b.a,{exact:!0,path:"/saved",component:V}),s.a.createElement(b.a,{render:function(){return s.a.createElement("h1",{className:"display-2"},"Wrong page!")}})))))};m.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(ne,null)),document.getElementById("root"))},99:function(e,a,t){e.exports=t(115)}},[[99,1,2]]]);
//# sourceMappingURL=main.16a6a61a.chunk.js.map