(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={wrapper:"PhoneBook_wrapper__3ebn4",title:"PhoneBook_title__Jx7g9",TitleContacts:"PhoneBook_TitleContacts__2CqvS",form:"PhoneBook_form__2VtG9",buttonAdd:"PhoneBook_buttonAdd__29Q_P",inputField:"PhoneBook_inputField__1Exqt",wrapperFilter:"PhoneBook_wrapperFilter__5HAKY",labelMarkup:"PhoneBook_labelMarkup__3hNeg",phoneList:"PhoneBook_phoneList__17-15",contactList:"PhoneBook_contactList__1mRXd"}},28:function(e,t,n){e.exports={listItem:"PhonebookListItem_listItem__1Dcff",dataPerson:"PhonebookListItem_dataPerson__2atkm",buttonRemove:"PhonebookListItem_buttonRemove__3cOUs"}},29:function(e,t,n){e.exports={WrapperUserMenu:"UserMenu_WrapperUserMenu__9gdTD",BlockName:"UserMenu_BlockName__1TJjE",ButtonLogOut:"UserMenu_ButtonLogOut__23BlY"}},37:function(e,t,n){e.exports={TitleHello:"HomePage_TitleHello__Vi8NH",Description:"HomePage_Description__A5aVu"}},38:function(e,t,n){e.exports={Alert:"AlertWindow_Alert__3LMNE",AlertMessage:"AlertWindow_AlertMessage__2c8xp"}},53:function(e,t,n){e.exports={enter:"AlertTransition_enter__2gRXU",enterActive:"AlertTransition_enterActive__3WhJc",exit:"AlertTransition_exit__q-U-p",exitActive:"AlertTransition_exitActive__2xs59"}},55:function(e,t,n){e.exports={enter:"PhonebookListSlide_enter__1vwlB",enterActive:"PhonebookListSlide_enterActive__3H--1",exit:"PhonebookListSlide_exit__3wCDX",exitActive:"PhonebookListSlide_exitActive__3eWaq"}},56:function(e,t,n){e.exports={enter:"PhoneFilter_enter__2Z3Pz",enterActive:"PhoneFilter_enterActive__3cR6R",exit:"PhoneFilter_exit__1DB02",exitActive:"PhoneFilter_exitActive__3tn3R"}},57:function(e,t,n){e.exports={enter:"TitleSlideTransition_enter__25OyL",appear:"TitleSlideTransition_appear__322EX",enterActive:"TitleSlideTransition_enterActive__3fKRI",appearActive:"TitleSlideTransition_appearActive__3_luR",appearDone:"TitleSlideTransition_appearDone__1kL__",exit:"TitleSlideTransition_exit__2lo-o",exitActive:"TitleSlideTransition_exitActive__1-Kls"}},58:function(e,t,n){e.exports=n.p+"static/media/png-avatar.54e9ec53.png"},59:function(e,t,n){e.exports=n.p+"static/media/logout.3b704aed.png"},60:function(e,t,n){e.exports={Navigation:"App_Navigation__2vUK1"}},68:function(e,t,n){e.exports=n(98)},98:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),o=n.n(c),s=n(21),l=n(22),i=n(24),u=n(23),m=n(8),p={home:"/",login:"/login",register:"/registration",contacts:"/contacts",logout:"/logout"},d=n(25),b=n(4),h={registersRequest:Object(b.b)("contacts/registerRequest"),registersSuccess:Object(b.b)("contacts/registerSuccess"),registersError:Object(b.b)("contacts/registerError"),loginRequest:Object(b.b)("contacts/loginRequest"),loginSuccess:Object(b.b)("contacts/loginSuccess"),loginError:Object(b.b)("contacts/loginError"),logoutRequest:Object(b.b)("contacts/outRequest"),logoutSuccess:Object(b.b)("contacts/outSuccess"),logoutError:Object(b.b)("contacts/outError"),getCurrentUserRequest:Object(b.b)("contacts/getCurrentUserRequest"),getCurrentUserSuccess:Object(b.b)("contacts/getCurrentUserSuccess"),getCurrentUserError:Object(b.b)("contacts/getCurrentUserError"),addContactsRequest:Object(b.b)("contacts/addRequest"),addContactsSuccess:Object(b.b)("contacts/addSuccess"),addContactsError:Object(b.b)("contacts/addError"),fetchContactsRequest:Object(b.b)("contacts/fetchRequest"),fetchContactsSuccess:Object(b.b)("contacts/fetchSuccess"),fetchContactsError:Object(b.b)("contacts/fetchError"),removeContactsRequest:Object(b.b)("contacts/removeRequest"),removeContactsSuccess:Object(b.b)("contacts/removeSuccess"),removeContactsError:Object(b.b)("contacts/removeError"),changeFilter:Object(b.b)("contacts/filter")},g=n(17),f=n.n(g);f.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var E=function(e){f.a.defaults.headers.common.Authorization="Bearer ".concat(e)},_={registration:function(e){return function(t){t(h.registersRequest()),f.a.post("/users/signup",e).then((function(e){E(e.data.token),t(h.registersSuccess(Object(d.a)({},e.data)))})).catch((function(e){return t(h.registersError(e.message))}))}},loginUser:function(e){return function(t){t(h.loginRequest()),f.a.post("/users/login",e).then((function(e){E(e.data.token),t(h.loginSuccess(Object(d.a)({},e.data)))})).catch((function(e){return t(h.loginError(e.message))}))}},getUser:function(){return function(e,t){var n=t().auth.token;n&&(E(n),e(h.getCurrentUserRequest()),f.a.get("/users/current").then((function(t){var n=t.data;e(h.getCurrentUserSuccess(n))})).catch((function(t){return e(h.getCurrentUserError(t.message))})))}},logOutUser:function(){return function(e){e(h.logoutRequest()),f.a.post("/users/logout").then((function(){f.a.defaults.headers.common.Authorization="",e(h.logoutSuccess())})).catch((function(t){return e(h.logoutError(t.message))}))}},addContacts:function(e,t){return function(n){n(h.addContactsRequest()),f.a.post("/contacts",{name:e,number:t}).then((function(e){return n(h.addContactsSuccess(e.data))})).catch((function(e){return n(h.addContactsError())}))}},fetchContacts:function(){return function(e){e(h.fetchContactsRequest()),f.a.get("/contacts").then((function(t){return e(h.fetchContactsSuccess(t.data))})).catch((function(t){return e(h.fetchContactsError())}))}},removeContact:function(e){return function(t){t(h.removeContactsRequest()),f.a.delete("/contacts/".concat(e)).then((function(){return t(h.removeContactsSuccess(e))})).catch((function(e){return t(h.removeContactsError())}))}}},v=n(16),O=function(e){return e.contacts.item},C=function(e){return e.contacts.filter},j={isAuthenticated:function(e){return e.auth.token},getActions:O,getUserName:function(e){return e.auth.user.name},getFilter:C,getStatusLogIn:function(e){return e.auth.loginUser},visibleContacts:Object(v.a)([O,C],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}))},S=n(7),k=Object(S.b)((function(e){return{isAuthenticated:j.isAuthenticated(e)}}),null)((function(e){var t=e.component,n=e.isAuthenticated,a=e.restricted,c=e.routeProps;return r.a.createElement(m.b,Object.assign({},c,{render:function(e){return n&&a?r.a.createElement(m.a,{to:"/contacts"}):r.a.createElement(t,e)}}))})),A=n(63),y=Object(S.b)((function(e){return{isAuthenticated:j.isAuthenticated(e)}}))((function(e){var t=e.component,n=e.isAuthenticated,a=Object(A.a)(e,["component","isAuthenticated"]);return r.a.createElement(m.b,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(m.a,{to:"/login"})}}))})),N=n(6),x=n(99),w=n(100),R=n(52),L=n(101),P=n(102),U=(n(49),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",password:""},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(N.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a={name:n.name,email:n.email,password:n.password};e.props.onRegister?(e.props.onRegister(a),e.setState(Object(d.a)({},e.state))):alert("\u043f\u0430\u0440\u043e\u043b\u044c \u0438\u043b\u0438 email \u043d\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b!")},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.email,a=e.password;return r.a.createElement(x.a,null,r.a.createElement("br",null),r.a.createElement(w.a,{className:"justify-content-md-center"},r.a.createElement(R.a,{xs:!0,lg:"5"},r.a.createElement("h2",null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),r.a.createElement(L.a,{type:"form"},r.a.createElement(L.a.Group,{controlId:"firstName"},r.a.createElement(L.a.Label,null,"\u0438\u043c\u044f"),r.a.createElement(L.a.Control,{type:"name",name:"name",value:t,placeholder:"\u0418\u043c\u044f",onChange:this.handleChange})),r.a.createElement(L.a.Group,{controlId:"email"},r.a.createElement(L.a.Label,null,"Email"),r.a.createElement(L.a.Control,{suggested:"email",autoComplete:"email",type:"email",name:"email",value:n,placeholder:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 email",onChange:this.handleChange})),r.a.createElement(L.a.Group,{controlId:"password"},r.a.createElement(L.a.Label,null,"\u041f\u0430\u0440\u043e\u043b\u044c"),r.a.createElement(L.a.Control,{suggested:"password",autoComplete:"new-password",type:"password",name:"password",value:a,placeholder:"\u043f\u0430\u0440\u043e\u043b\u044c",onChange:this.handleChange})),r.a.createElement(P.a,{variant:"primary",type:"button",onClick:this.handleSubmit},"\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0410\u0426\u0418\u042f")))))}}]),n}(a.Component)),T=Object(S.b)(null,{onRegister:_.registration,registersError:h.registersError})(U),q=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(N.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a={email:n.email,password:n.password};e.props.onLogin(a),e.setState(Object(d.a)({},e.state))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(x.a,null,r.a.createElement("br",null),r.a.createElement(w.a,{className:"justify-content-md-center"},r.a.createElement(R.a,{xs:!0,lg:"5"},r.a.createElement("h2",null,"\u0412\u0432\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0432\u0430\u0448 \u0430\u043a\u0430\u0443\u043d\u0442"),r.a.createElement(L.a,null,r.a.createElement(L.a.Group,{controlId:"formBasicEmail"},r.a.createElement(L.a.Label,null,"Email"),r.a.createElement(L.a.Control,{type:"email",placeholder:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 email",suggested:"email",name:"email",value:this.state.email,autoComplete:"email",onChange:this.handleChange})),r.a.createElement(L.a.Group,{controlId:"formBasicPassword"},r.a.createElement(L.a.Label,null,"\u043f\u0430\u0440\u043e\u043b\u044c"),r.a.createElement(L.a.Control,{type:"password",placeholder:"\u043f\u0430\u0440\u043e\u043b\u044c",suggested:"password",name:"password",value:this.state.password,autoComplete:"password",onChange:this.handleChange})),r.a.createElement(P.a,{variant:"primary",type:"button",onClick:this.handleSubmit},"\u0412\u0432\u043e\u0439\u0442\u0438 \u0432 \u0430\u043a\u0430\u0443\u043d\u0442")))))}}]),n}(a.Component),F=Object(S.b)(null,{onLogin:_.loginUser})(q),B=n(37),D=n.n(B),I=function(){return r.a.createElement("div",null,r.a.createElement("h2",{className:D.a.TitleHello},"\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435!"),r.a.createElement("p",{className:D.a.Description},"\u0417\u0434\u0435\u0441\u044c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0432\u043e\u044e \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443\u044e \u043a\u043d\u0438\u0433\u0443, \u0432\u0435\u0441\u0442\u0438 \u0437\u0430\u043f\u0438\u0441\u044c \u0441\u0432\u043e\u0438\u0445 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0445 \u043d\u043e\u043c\u0435\u0440\u043e\u0432. \u0422\u0430\u043a\u0436\u0435 \u0432\u044b \u0441 \u043b\u0435\u0433\u043a\u043e\u0441\u0442\u044c\u044e \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0439\u0442\u0438 \u043b\u044e\u0431\u043e\u0439 \u043d\u043e\u043c\u0435\u0440 \u0435\u0441\u043b\u0438 \u0438\u0445 \u0441\u0442\u0430\u043d\u0435\u0442 \u043e\u0447\u0435\u043d\u044c \u043c\u043d\u043e\u0433\u043e. \u041f\u0440\u043e\u0441\u0442\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0438\u043c\u044f \u0432 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435"))},M=n(18),G=Object(S.b)((function(e){return{logIn:j.getStatusLogIn(e)}}),null)((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.b,{to:"/",exact:!0},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),r.a.createElement("br",null),r.a.createElement(M.b,{to:"/login",exact:!0},"LogIn"),r.a.createElement("br",null),r.a.createElement(M.b,{to:"/registration",exact:!0},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),r.a.createElement("br",null),r.a.createElement(M.b,{to:"/contacts",exact:!0},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"))})),H=n(11),W=n.n(H),J=n(53),z=n.n(J),K=n(38),X=n.n(K),V=function(){return r.a.createElement("div",{className:X.a.Alert},r.a.createElement("span",{className:X.a.AlertMessage},"\u041d\u043e\u043c\u0435\u0440 \u0441 \u0442\u0430\u043a\u0438\u043c \u0438\u043c\u0435\u043d\u0435\u043c \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!"))},Y=n(103),Q=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:"",alertName:null},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(N.a)({},a,r))},e.handleSubmit=function(t){var n=e.props,a=n.addContacts,r=n.contacts;if(t.preventDefault(),r.find((function(t){return t.name.toLowerCase()===e.state.name.toLowerCase()})))return e.setState({alertName:!0}),setTimeout((function(){e.setState({alertName:null})}),3e3);""===e.state.name||""===e.state.number?alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0438 \u043d\u043e\u043c\u0435\u0440!"):(a(e.state.name,e.state.number),e.setState({name:"",number:""}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchContacts()}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("form",{className:W.a.form,onSubmit:this.handleSubmit},r.a.createElement("label",null,"\u0418\u043c\u044f",r.a.createElement("input",{className:W.a.inputField,type:"text",value:t,onChange:this.handleChange,name:"name"})),r.a.createElement("label",null,"\u041d\u043e\u043c\u0435\u0440",r.a.createElement("input",{className:W.a.inputField,type:"text",value:n,onChange:this.handleChange,name:"number"})),r.a.createElement("button",{className:W.a.buttonAdd,type:"submit"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442")),r.a.createElement("div",null)),r.a.createElement(Y.a,{in:this.state.alertName,timeout:250,classNames:z.a,unmountOnExit:!0},r.a.createElement(V,null)))}}]),n}(a.Component),Z={addContacts:_.addContacts,onFetchContacts:_.fetchContacts},$=Object(S.b)((function(e){return{contacts:j.visibleContacts(e)}}),Z)(Q),ee={onChangeFilter:h.changeFilter},te=Object(S.b)((function(e){return{value:e.contacts.filter}}),ee)((function(e){var t=e.value,n=e.onChangeFilter;return r.a.createElement("div",{className:W.a.wrapperFilter},r.a.createElement("label",{className:W.a.labelMarkup},"\u041d\u0430\u0439\u0442\u0438 \u043d\u043e\u043c\u0435\u0440",r.a.createElement("input",{className:W.a.inputField,type:"text",value:t,onChange:function(e){return n(e.target.value)}})))})),ne=n(28),ae=n.n(ne),re=function(e){var t=e.id,n=e.name,a=e.number,c=e.onRemovePersonData;return r.a.createElement("div",null,r.a.createElement("li",{key:t,className:ae.a.listItem},r.a.createElement("span",{className:ae.a.dataPerson},n,":"),r.a.createElement("span",{className:ae.a.dataPerson},a),r.a.createElement("button",{className:ae.a.buttonRemove,onClick:c},"\u2715")))},ce=n(55),oe=n.n(ce),se=n(56),le=n.n(se),ie=n(57),ue=n.n(ie),me=n(104);var pe,de,be,he,ge={onRemovePersonData:_.removeContact},fe=Object(S.b)((function(e){return{contacts:j.visibleContacts(e)}}),ge)((function(e){var t=e.contacts,n=e.onRemovePersonData;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:W.a.Wrapper},r.a.createElement(Y.a,{in:!0,appear:!0,timeout:1e3,classNames:ue.a,unmountOnExit:!0},r.a.createElement("h1",{className:W.a.title},"Phonebook"))),r.a.createElement("div",{className:W.a.phoneList},r.a.createElement("h2",{className:W.a.TitleContacts},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"),r.a.createElement($,null),t.length>0?r.a.createElement(Y.a,{in:t.length>1,timeout:250,classNames:le.a,unmountOnExit:!0},r.a.createElement(te,null)):r.a.createElement("h2",{className:W.a.TitleContacts},"\u041d\u0435\u0442 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432"),r.a.createElement(me.a,{component:"ul",className:W.a.contactList},t.map((function(e){return r.a.createElement(Y.a,{key:e.id,timeout:300,classNames:oe.a},r.a.createElement(re,{key:e.id,name:e.name,number:e.number,onRemovePersonData:function(){return n(e.id)}}))})))))})),Ee=n(58),_e=n.n(Ee),ve=n(59),Oe=n.n(ve),Ce=n(29),je=n.n(Ce),Se={logOut:_.logOutUser},ke=Object(S.b)((function(e){return{name:j.getUserName(e),avatar:_e.a}}),Se)((function(e){var t=e.avatar,n=e.logOut,a=e.name;return r.a.createElement("div",{className:je.a.WrapperUserMenu},r.a.createElement("img",{className:je.a.Avatar,src:t,width:"40",height:"40",alt:"user-avatar"}),r.a.createElement("span",{className:je.a.BlockName},"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c, ",a),r.a.createElement("button",{className:je.a.ButtonLogOut,type:"button",onClick:n},r.a.createElement("img",{src:Oe.a,alt:"logout button ",width:"20"})))})),Ae=n(60),ye=n.n(Ae),Ne=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetUser()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:ye.a.Navigation},r.a.createElement(G,null),this.props.isAuthenticated&&r.a.createElement(ke,null)),r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"...Loading")},r.a.createElement(m.d,null,r.a.createElement(k,{path:p.home,restricted:!1,exact:!0,component:I}),r.a.createElement(k,{path:p.login,restricted:!0,redirectTo:p.LoginForm,component:F}),r.a.createElement(k,{path:p.register,restricted:!0,redirectTo:p.register,component:T}),r.a.createElement(y,{path:p.contacts,restricted:!0,redirectTo:p.login,component:fe}))))}}]),n}(a.Component),xe={onGetUser:_.getUser},we=Object(S.b)((function(e){return{contacts:j.visibleContacts(e),isAuthenticated:j.isAuthenticated(e)}}),xe)(Ne),Re=n(61),Le=n(31),Pe=n(9),Ue=Object(b.c)([],(pe={},Object(N.a)(pe,h.fetchContactsSuccess,(function(e,t){return t.payload})),Object(N.a)(pe,h.addContactsSuccess,(function(e,t){return[].concat(Object(Le.a)(e),[t.payload])})),Object(N.a)(pe,h.removeContactsSuccess,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),pe)),Te=Object(Pe.c)({item:Ue,filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case h.changeFilter.type:return a;default:return e}}}),qe=n(62),Fe=n.n(qe),Be=n(19),De={name:null,email:null},Ie=Object(b.c)(De,(de={},Object(N.a)(de,h.registersSuccess,(function(e,t){return t.payload.user})),Object(N.a)(de,h.loginSuccess,(function(e,t){return t.payload.user})),Object(N.a)(de,h.getCurrentUserSuccess,(function(e,t){return t.payload})),Object(N.a)(de,h.logoutSuccess,(function(){return De})),de)),Me=Object(b.c)(null,(be={},Object(N.a)(be,h.registersSuccess,(function(e,t){return t.payload.token})),Object(N.a)(be,h.loginSuccess,(function(e,t){return t.payload.token})),Object(N.a)(be,h.logoutSuccess,(function(){return null})),be)),Ge=Object(b.c)(null,(he={},Object(N.a)(he,h.registerError,(function(e,t){return t.payload})),Object(N.a)(he,h.loginError,(function(e,t){return t.payload})),Object(N.a)(he,h.logoutError,(function(e,t){return t.payload})),Object(N.a)(he,h.getCurrentUserError,(function(e,t){return t.payload})),he)),He=Object(Pe.c)({user:Ie,token:Me,error:Ge}),We={key:"auth",storage:Fe.a,whitelist:["token","user"]},Je=Object(b.a)({reducer:{contacts:Te,auth:Object(Be.g)(We,He)},middleware:Object(Le.a)(Object(b.d)({serializableCheck:{ignoredActions:[Be.a,Be.f,Be.b,Be.c,Be.d,Be.e]}}))}),ze=Object(Be.h)(Je);o.a.render(r.a.createElement(M.a,null,r.a.createElement(S.a,{store:Je},r.a.createElement(Re.a,{loading:null,persistor:ze},r.a.createElement(we,null)))),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.2fd66138.chunk.js.map