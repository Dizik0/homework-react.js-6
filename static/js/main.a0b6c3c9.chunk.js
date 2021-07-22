(this["webpackJsonphomework-react.js-2.1"]=this["webpackJsonphomework-react.js-2.1"]||[]).push([[0],{13:function(t,e,n){t.exports={list:"ContactList_list__3ZtMh",listItem:"ContactList_listItem__1rW4k",button:"ContactList_button__iVMcK",name:"ContactList_name__1LzHs",number:"ContactList_number__3lMry"}},15:function(t,e,n){t.exports={box:"App_box__2H_X_",loader:"App_loader__3y00l",title:"App_title__397R3"}},19:function(t,e,n){t.exports={transparent:"AddContact_transparent__2DAcw",formInner:"AddContact_formInner__2AxyD",buttom:"AddContact_buttom__zGJun"}},32:function(t,e,n){t.exports={lable:"Filter_lable__2mUF2"}},39:function(t,e,n){},40:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(16),o=n.n(c),u=(n(39),n(40),n(67)),i=n(6),s=n(4),b=n(9),l=n(10),f=n(12),j=n(11),d=n(19),p=n.n(d),O=n(7),m=n.n(O),h=n(20),v=n(14),C=n.n(v),x=n(2),_=Object(x.b)("fetchContactRequest"),y=Object(x.b)("fetchContactSuccess"),g=Object(x.b)("fetchContactError"),A=Object(x.b)("addContactRequest"),k=Object(x.b)("addContactSuccess"),w=Object(x.b)("addContactError"),N=Object(x.b)("deleteContactRequest"),L=Object(x.b)("deleteContactSuccess"),T=Object(x.b)("deleteContactError"),S=(Object(x.b)("filterContactRequest"),Object(x.b)("filterContactSuccess"),Object(x.b)("filterContactError"),Object(x.b)("filterContact"));C.a.defaults.baseURL="http://localhost:3000";var F=n(17),I=function(t){return t.contact},z=function(t){return t.contact.filter},E=Object(F.a)([function(t){return t.contact.items},z],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e)}))})),q=n(1),M=function(t){Object(f.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(b.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.alerError=function(){return t.props.contacts.items.find((function(e){return e.name===t.state.name}))},t.submitformContact=function(e){e.preventDefault(),t.alerError()?alert("".concat(t.state.name," is alreaady in contacts")):(t.props.stateTransfer(t.state),t.setState({name:"",number:""}))},t.addContact=function(e){var n=e.currentTarget,r=n.value,a=n.name;t.setState(Object(s.a)({},a,r))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.number,n=t.name;return Object(q.jsx)("form",{onSubmit:this.submitformContact,htmlFor:this.props.uuidv4(),className:p.a.transparent,children:Object(q.jsxs)("div",{className:p.a.formInner,children:[Object(q.jsxs)("label",{children:["Name",Object(q.jsx)("input",{onChange:this.addContact,type:"text",value:n,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(q.jsxs)("label",{children:["Number",Object(q.jsx)("input",{onChange:this.addContact,type:"tel",value:e,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(q.jsx)("button",{className:p.a.buttom,type:"submit",children:"Add contact"})]})})}}]),n}(r.Component);M.defaultProps={contacts:[]};var R,D,J=Object(i.b)((function(t){return{contacts:I(t)}}),(function(t){return{stateTransfer:function(e){return t(function(t){var e=t.name,n=t.number;return function(){var t=Object(h.a)(m.a.mark((function t(r){var a,c,o;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={name:e,number:n,id:Object(u.a)()},r(A()),t.prev=2,t.next=5,C.a.post("/contact",a);case 5:c=t.sent,o=c.data,r(k(o)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),r(w(t.t0));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()}(e))}}}))(M),P=n(32),Z=n.n(P),B=function(t){Object(f.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(b.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={filter:""},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.filterContact,n=t.filter;return Object(q.jsx)("input",{className:Z.a.lable,type:"text",onChange:e,value:n})}}]),n}(r.Component),H=Object(i.b)((function(t){return{filter:z(t)}}),(function(t){return{filterContact:function(e){return t(S(e.target.value))}}}))(B),U=n(13),G=n.n(U),K=function(t){Object(f.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(b.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).componentDidMount=function(){t.props.fetchContact()},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.filterTodos,n=t.deleteTodo,r=t.uuidv4;return Object(q.jsx)(q.Fragment,{children:Object(q.jsx)("ul",{className:G.a.list,children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(q.jsxs)("li",{className:G.a.listItem,children:[Object(q.jsx)("p",{className:G.a.name,children:e}),Object(q.jsx)("span",{className:G.a.number,children:a}),Object(q.jsx)("button",{className:G.a.button,type:"button",onClick:function(){return n(c)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},r())}))})})}}]),n}(r.Component),V=Object(i.b)((function(t){return{filterTodos:E(t)}}),(function(t){return{deleteTodo:function(e){return t(function(t){return function(){var e=Object(h.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(N()),e.prev=1,e.next=4,C.a.delete("/contact/".concat(t));case 4:n(L(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(T(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}(e))},fetchContact:function(){return t(function(){var t=Object(h.a)(m.a.mark((function t(e){var n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(_()),t.prev=1,t.next=4,C.a.get("/contact");case 4:n=t.sent,r=n.data,e(y(r)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(g(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}())}}}))(K),W=n(15),X=n.n(W),$=Object(i.b)((function(t){return{logger:t.contact.loading}}))((function(t){var e=t.logger;return Object(q.jsxs)("div",{className:X.a.box,children:[e&&Object(q.jsx)("div",{className:X.a.loader,children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),Object(q.jsx)("h1",{className:X.a.title,children:"Phonebook"}),Object(q.jsx)(J,{uuidv4:u.a}),Object(q.jsx)("h2",{className:X.a.title,children:"Contacts"}),Object(q.jsx)(H,{uuidv4:u.a}),Object(q.jsx)(V,{uuidv4:u.a})]})})),Q=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),r(t),a(t),c(t),o(t)}))},Y=n(18),tt=n(3),et=Object(x.c)([],(R={},Object(s.a)(R,y,(function(t,e){return e.payload})),Object(s.a)(R,k,(function(t,e){var n=e.payload;return[].concat(Object(Y.a)(t),[n])})),Object(s.a)(R,L,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),R)),nt=Object(x.c)(!1,(D={},Object(s.a)(D,A,(function(){return!0})),Object(s.a)(D,k,(function(){return!1})),Object(s.a)(D,w,(function(){return!1})),Object(s.a)(D,N,(function(){return!0})),Object(s.a)(D,L,(function(){return!1})),Object(s.a)(D,T,(function(){return!1})),Object(s.a)(D,_,(function(){return!0})),Object(s.a)(D,y,(function(){return!1})),Object(s.a)(D,g,(function(){return!1})),D)),rt=Object(x.c)("",Object(s.a)({},S,(function(t,e){return e.payload}))),at=Object(tt.b)({items:et,filter:rt,loading:nt}),ct=n(8),ot=n(33),ut=n.n(ot),it=[].concat(Object(Y.a)(Object(x.d)({serializableCheck:{ignoredActions:[ct.a,ct.f,ct.b,ct.c,ct.d,ct.e]}})),[ut.a]),st=Object(x.a)({reducer:{contact:at},middleware:it,devTools:!1});o.a.render(Object(q.jsx)(a.a.StrictMode,{children:Object(q.jsx)(i.a,{store:st,children:Object(q.jsx)($,{})})}),document.getElementById("root")),Q()}},[[66,1,2]]]);
//# sourceMappingURL=main.a0b6c3c9.chunk.js.map