(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{12:function(e,t,n){e.exports={form:"NewUserForm_form__PCaTH",control:"NewUserForm_control__35j2s",actions:"NewUserForm_actions__2LZx0"}},14:function(e,t,n){e.exports={header:"MainNavigation_header__9Wrod",logo:"MainNavigation_logo__23HYm",nav:"MainNavigation_nav__19LmH",active:"MainNavigation_active__tSAdF"}},21:function(e,t,n){e.exports={list:"UserList_list__1YjXN",sorting:"UserList_sorting__w9p22"}},22:function(e,t,n){e.exports={item:"UserItem_item__38Vzn"}},25:function(e,t,n){e.exports={nousers:"NoUserFound_nousers__2PhQ8"}},26:function(e,t,n){e.exports={card:"Card_card__3ONz9"}},28:function(e,t,n){e.exports={main:"Layout_main__9Ppdw"}},33:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(19),s=n.n(r),c=n(4),a=(n(33),n(2)),i=n(1),u=n(22),l=n.n(u),o=n(0),d=function(e){return Object(o.jsxs)("li",{className:l.a.item,children:[Object(o.jsxs)("figure",{children:[Object(o.jsxs)("blockquote",{children:[Object(o.jsx)("p",{children:e.name}),Object(o.jsx)("p",{children:e.surname})]}),Object(o.jsxs)("figcaption",{children:["Tel.: ",e.phone]}),Object(o.jsxs)("figcaption",{children:["Email: ",e.email]})]}),Object(o.jsx)(c.b,{className:"btn users_details_btn",to:"/users/".concat(e.id),children:"View Details"})]})},j=n(21),b=n.n(j),p=function(e){var t,n,r=Object(a.g)(),s=Object(a.h)(),c="asc"===new URLSearchParams(s.search).get("sort"),u=(t=e.users,n=c,t.sort((function(e,t){return n?e.name>t.name?1:-1:e.name<t.name?1:-1})));return Object(o.jsxs)(i.Fragment,{children:[Object(o.jsx)("div",{className:b.a.sorting,children:Object(o.jsxs)("button",{onClick:function(){r.push({pathname:s.pathname,search:"?sort=".concat(c?"desc":"asc")})},children:["Sort ",c?"Descending":"Ascending"]})}),Object(o.jsx)("ul",{className:b.a.list,children:u.map((function(e){return Object(o.jsx)(d,{id:e.id,name:e.name,surname:e.surname,phone:e.phone,email:e.email},e.id)}))})]})},h=n(15),x=n(10),O=n(16),m=n(6),f=n.n(m);function v(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}var _=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(i.useReducer)(v,{status:t?"pending":null,data:null,error:null}),r=Object(O.a)(n,2),s=r[0],c=r[1],a=Object(i.useCallback)(function(){var t=Object(x.a)(f.a.mark((function t(n){var r,s,a=arguments;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:null,c({type:"SEND"}),t.prev=2,t.next=5,e(n,r);case 5:s=t.sent,c({type:"SUCCESS",responseData:s}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),c({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(h.a)({sendRequest:a},s)},N="https://users-db-2791b-default-rtdb.europe-west1.firebasedatabase.app/";function w(){return y.apply(this,arguments)}function y(){return(y=Object(x.a)(f.a.mark((function e(){var t,n,r,s,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(N,"/users.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch users.");case 8:for(s in r=[],n)c=Object(h.a)({id:s},n[s]),r.push(c);return e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return R.apply(this,arguments)}function R(){return(R=Object(x.a)(f.a.mark((function e(t){var n,r,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(N,"/users/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not fetch user.");case 8:return s=Object(h.a)({id:t},r),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return U.apply(this,arguments)}function U(){return(U=Object(x.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(N,"/users.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not create user.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){return E.apply(this,arguments)}function E(){return(E=Object(x.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(N,"/users/").concat(t,".json"),{method:"DELETE"});case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not delete user.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t){return F.apply(this,arguments)}function F(){return(F=Object(x.a)(f.a.mark((function e(t,n){var r,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(N,"/users/").concat(n,".json"),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return r=e.sent,e.next=5,r.json();case 5:if(s=e.sent,r.ok){e.next=8;break}throw new Error(s.message||"Could not update user.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=n(25),q=n.n(D),P=function(){return Object(o.jsxs)("div",{className:q.a.nousers,children:[Object(o.jsx)("p",{children:"No users found!"}),Object(o.jsx)(c.b,{className:"btn",to:"/new-user",children:"Add New User"})]})},A=function(){var e=_(w,!0),t=e.sendRequest,n=e.status,r=e.data,s=e.error;return Object(i.useEffect)((function(){t()}),[t]),"pending"===n?Object(o.jsx)("div",{className:"centered",children:" Loading..."}):s?Object(o.jsx)("p",{className:"centered focused",children:s}):"completed"!==n||r&&0!==r.length?Object(o.jsx)(p,{users:r}):Object(o.jsx)(P,{})},B=n(26),L=n.n(B);var I=function(e){return Object(o.jsx)("div",{className:L.a.card,children:e.children})},T=n(12),M=n.n(T);var J=function(e){var t=Object(i.useRef)(),n=Object(i.useRef)(),r=Object(i.useRef)(),s=Object(i.useRef)(),c=Object(i.useRef)(),a=Object(i.useRef)(),u=Object(i.useRef)(),l=Object(i.useRef)();return Object(o.jsx)(I,{children:Object(o.jsxs)("form",{className:M.a.form,onSubmit:function(i){i.preventDefault();var o={name:t.current.value,surname:n.current.value,birth_date:r.current.value,email:s.current.value,password:c.current.value,phone:a.current.value,identity:u.current.value,passport_number:l.current.value};e.onAddUser(o)},children:[Object(o.jsxs)("div",{className:M.a.control,children:[Object(o.jsxs)("div",{className:"w-50",children:[Object(o.jsx)("label",{htmlFor:"Name",children:"Name"}),Object(o.jsx)("input",{type:"text",required:!0,id:"Name",ref:t})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"Surname",children:"Surname"}),Object(o.jsx)("input",{type:"text",required:!0,id:"Surname",ref:n})]})]}),Object(o.jsxs)("div",{className:M.a.control,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"birthdate",children:"Birth Date"}),Object(o.jsx)("input",{type:"date",required:!0,id:"birthdate",ref:r})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email"}),Object(o.jsx)("input",{id:"email",type:"email",required:!0,ref:s})]})]}),Object(o.jsxs)("div",{className:M.a.control,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"password",children:"Password"}),Object(o.jsx)("input",{id:"password",type:"password",required:!0,ref:c})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"phone",children:"Phone"}),Object(o.jsx)("input",{id:"phone",type:"number",required:!0,ref:a})]})]}),Object(o.jsxs)("div",{className:M.a.control,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"identity",children:"Identity"}),Object(o.jsx)("input",{id:"identity",type:"number",required:!0,ref:u})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"passportnumber",children:"Passport Number"}),Object(o.jsx)("input",{id:"passportnumber",type:"number",required:!0,ref:l})]})]}),Object(o.jsx)("div",{className:M.a.actions,children:Object(o.jsx)("button",{children:"Add User"})})]})})},H=function(){var e=_(k),t=e.sendRequest,n=e.status,r=Object(a.g)();Object(i.useEffect)((function(){"completed"===n&&r.push("/users")}),[n,r]);return Object(o.jsx)(J,{onAddUser:function(e){t(e)}})},V=n(5),W=n.n(V),Y=n(27),z=(n(44),function(e){var t=Object(a.g)(),n=Object(i.useState)(!1),r=Object(O.a)(n,2),s=r[0],u=r[1],l=_(C,!0),d=l.sendRequest,j=l.status,b=Object(i.useRef)(),p=Object(i.useRef)(),h=Object(i.useRef)(),x=Object(i.useRef)(),m=Object(i.useRef)(),f=Object(i.useRef)(),v=Object(i.useRef)(),N=Object(i.useRef)();Object(i.useEffect)((function(){"completed"===j&&t.push("/users")}),[j,t]);var w=function(){u(!s)};var y=Object(o.jsx)("input",{type:"text",placeholder:e.name,ref:b}),g=Object(o.jsx)("input",{type:"text",placeholder:e.surname,ref:p}),R=Object(o.jsx)("input",{type:"date",ref:h}),k=Object(o.jsx)("input",{type:"email",placeholder:e.email,ref:x}),U=Object(o.jsx)("input",{type:"password",placeholder:"******",ref:m}),E=Object(o.jsx)("input",{type:"number",placeholder:e.phone,ref:f}),S=Object(o.jsx)("input",{type:"number",placeholder:e.identity,ref:v}),F=Object(o.jsx)("input",{type:"number",placeholder:e.passport_number,ref:N});return Object(o.jsxs)("div",{className:W.a.details,children:[Object(o.jsxs)("div",{className:W.a.flex,children:[Object(o.jsx)("p",{children:"Name: "}),Object(o.jsx)("p",{children:s?y:e.name})]}),Object(o.jsxs)("div",{className:W.a.flex,children:[Object(o.jsx)("p",{children:"Surname: "}),Object(o.jsx)("p",{children:s?g:e.surname})]}),Object(o.jsxs)("div",{className:W.a.flex,children:[Object(o.jsx)("p",{children:"Date of Birth: "}),Object(o.jsx)("p",{children:s?R:e.birth_date})]}),Object(o.jsxs)("div",{className:W.a.flex,children:[Object(o.jsx)("p",{children:"Email: "}),Object(o.jsx)("p",{children:s?k:e.email})]}),Object(o.jsxs)("div",{className:W.a.flex,children:[Object(o.jsx)("p",{children:"Password: "}),Object(o.jsx)("p",{children:s?U:"*****"})]}),Object(o.jsxs)("div",{className:W.a.flex,children:[Object(o.jsx)("p",{children:"Phone: "}),Object(o.jsx)("p",{children:s?E:e.phone})]}),Object(o.jsxs)("div",{className:W.a.flex,children:[Object(o.jsx)("p",{children:"Identity: "}),Object(o.jsx)("p",{children:s?S:e.identity})]}),Object(o.jsxs)("div",{className:W.a.flex,children:[Object(o.jsx)("p",{children:"Passport No: "}),Object(o.jsx)("p",{children:s?F:e.passport_number})]}),Object(o.jsxs)("div",{className:W.a.btnField,children:[Object(o.jsx)(c.b,{className:"btn ".concat(W.a.detailsBtn),to:"/users",children:"Back"}),Object(o.jsx)("button",{className:"btn ".concat(W.a.detailsBtn),onClick:w,children:s?"Cancel editing":"Edit"}),s&&Object(o.jsx)("button",{className:"btn ".concat(W.a.detailsBtn),onClick:function(t){t.preventDefault();var n={name:b.current.value?b.current.value:e.name,surname:p.current.value?p.current.value:e.surname,birth_date:h.current.value?h.current.value:e.birth_date,email:x.current.value?x.current.value:e.email,password:m.current.value?m.current.value:e.password,phone:f.current.value?f.current.value:e.phone,identity:v.current.value?v.current.value:e.identity,passport_number:N.current.value?N.current.value:e.passport_number};w(),e.sendUpdateRequest(n,e.id)},children:"Save"}),Object(o.jsx)("button",{className:"btn ".concat(W.a.detailsBtn),onClick:function(){Object(Y.confirmAlert)({title:"Delete this user?",message:"",buttons:[{label:"Yes",onClick:function(){return d(e.id)}},{label:"No",onClick:function(){return""}}]})},children:"Delete User"})]})]})}),G=function(){var e=Object(a.i)(),t=_(S,!0),n=t.sendRequest,r=t.status,s=e.userId,c=_(g,!0),u=c.sendRequest,l=c.status,d=c.data,j=c.error;Object(i.useEffect)((function(){u(s)}),[u,r,s]);return"pending"===l?Object(o.jsx)("div",{className:"centered",children:" Loading..."}):j?Object(o.jsx)("p",{className:"centered focused",children:j}):d?Object(o.jsx)(i.Fragment,{children:Object(o.jsx)(z,{id:s,name:d.name,surname:d.surname,birth_date:d.birth_date,email:d.email,password:d.password,phone:d.phone,identity:d.identity,passport_number:d.passport_number,sendUpdateRequest:function(e,t){n(e,t)}})}):Object(o.jsx)("p",{children:"No User found"})},Q=n(28),X=n.n(Q),Z=n(14),K=n.n(Z),$=function(){return Object(o.jsxs)("header",{className:K.a.header,children:[Object(o.jsx)("div",{className:K.a.logo,children:"Users Web App"}),Object(o.jsx)("nav",{className:K.a.nav,children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(c.c,{to:"/users",activeClassName:K.a.active,children:"All Users"})}),Object(o.jsx)("li",{children:Object(o.jsx)(c.c,{to:"/new-user",activeClassName:K.a.active,children:"Add New User"})})]})})]})},ee=function(e){return Object(o.jsxs)(i.Fragment,{children:[Object(o.jsx)($,{}),Object(o.jsx)("main",{className:X.a.main,children:e.children})]})},te=function(){return Object(o.jsx)("div",{className:"centered",children:Object(o.jsx)("p",{children:"Page not found!"})})};var ne=function(){return Object(o.jsx)(ee,{children:Object(o.jsxs)(a.d,{children:[Object(o.jsx)(a.b,{path:"/",exact:!0,children:Object(o.jsx)(a.a,{to:"/users"})}),Object(o.jsx)(a.b,{path:"/users",exact:!0,children:Object(o.jsx)(A,{})}),Object(o.jsx)(a.b,{path:"/users/:userId",children:Object(o.jsx)(G,{})}),Object(o.jsx)(a.b,{path:"/new-user",children:Object(o.jsx)(H,{})}),Object(o.jsx)(a.b,{path:"*",children:Object(o.jsx)(te,{})})]})})};s.a.render(Object(o.jsx)(c.a,{children:Object(o.jsx)(ne,{})}),document.getElementById("root"))},5:function(e,t,n){e.exports={details:"UserDetails_details__1VsOj",flex:"UserDetails_flex__24Thi",btnField:"UserDetails_btnField__3n78W",detailsBtn:"UserDetails_detailsBtn__P5vyk",passwordInput:"UserDetails_passwordInput__1cGp8"}}},[[45,1,2]]]);
//# sourceMappingURL=main.9eddc81f.chunk.js.map