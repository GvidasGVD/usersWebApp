(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{197:function(e,t,s){"use strict";s.r(t);var r=s(46),n=s.n(r),a=s(5),c=(s(88),s(2)),i=s(1),u=s(73),l=s.n(u),o=s(0),d=function(e){return Object(o.jsxs)("li",{className:l.a.item,children:[Object(o.jsxs)("figure",{children:[Object(o.jsxs)("blockquote",{children:[Object(o.jsx)("p",{children:e.name}),Object(o.jsx)("p",{children:e.surname})]}),Object(o.jsxs)("figcaption",{children:["Tel.: ",e.phone]}),Object(o.jsxs)("figcaption",{children:["Email: ",e.email]})]}),Object(o.jsx)(a.b,{className:"btn users_details_btn",to:"/usersWebApp/users/".concat(e.id),children:"View Details"})]})},j=s(48),b=s.n(j),p=function(e){var t,s,r=Object(c.g)(),n=Object(c.h)(),a="asc"===new URLSearchParams(n.search).get("sort"),u=(t=e.users,s=a,t.sort((function(e,t){return s?e.name>t.name?1:-1:e.name<t.name?1:-1})));return Object(o.jsxs)(i.Fragment,{children:[Object(o.jsx)("div",{className:b.a.sorting,children:Object(o.jsxs)("button",{onClick:function(){r.push({pathname:n.pathname,search:"?sort=".concat(a?"desc":"asc")})},children:["Sort ",a?"Descending":"Ascending"]})}),Object(o.jsx)("ul",{className:b.a.list,children:u.map((function(e){return Object(o.jsx)(d,{id:e.id,name:e.name,surname:e.surname,phone:e.phone,email:e.email},e.id)}))})]})},h=s(28),m=s(10),x=s(11),O=s(3),f=s.n(O);function v(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}var _=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=Object(i.useReducer)(v,{status:t?"pending":null,data:null,error:null}),r=Object(x.a)(s,2),n=r[0],a=r[1],c=Object(i.useCallback)(function(){var t=Object(m.a)(f.a.mark((function t(s){var r,n,c=arguments;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=c.length>1&&void 0!==c[1]?c[1]:null,a({type:"SEND"}),t.prev=2,t.next=5,e(s,r);case 5:n=t.sent,a({type:"SUCCESS",responseData:n}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),a({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(h.a)({sendRequest:c},n)},g="https://users-db-2791b-default-rtdb.europe-west1.firebasedatabase.app/";function N(){return w.apply(this,arguments)}function w(){return(w=Object(m.a)(f.a.mark((function e(){var t,s,r,n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"/usersWebApp/users.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(s=e.sent,t.ok){e.next=8;break}throw new Error(s.message||"Could not fetch users.");case 8:for(n in r=[],s)a=Object(h.a)({id:n},s[n]),r.push(a);return e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return k.apply(this,arguments)}function k(){return(k=Object(m.a)(f.a.mark((function e(t){var s,r,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"/usersWebApp/users/").concat(t,".json"));case 2:return s=e.sent,e.next=5,s.json();case 5:if(r=e.sent,s.ok){e.next=8;break}throw new Error(r.message||"Could not fetch user.");case 8:return n=Object(h.a)({id:t},r),e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return R.apply(this,arguments)}function R(){return(R=Object(m.a)(f.a.mark((function e(t){var s,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"/usersWebApp/users.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return s=e.sent,e.next=5,s.json();case 5:if(r=e.sent,s.ok){e.next=8;break}throw new Error(r.message||"Could not create user.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e){return q.apply(this,arguments)}function q(){return(q=Object(m.a)(f.a.mark((function e(t){var s,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"/usersWebApp/users/").concat(t,".json"),{method:"DELETE"});case 2:return s=e.sent,e.next=5,s.json();case 5:if(r=e.sent,s.ok){e.next=8;break}throw new Error(r.message||"Could not delete user.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t){return W.apply(this,arguments)}function W(){return(W=Object(m.a)(f.a.mark((function e(t,s){var r,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"/usersWebApp/users/").concat(s,".json"),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return r=e.sent,e.next=5,r.json();case 5:if(n=e.sent,r.ok){e.next=8;break}throw new Error(n.message||"Could not update user.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=s(76),S=s.n(E),M=function(){return Object(o.jsxs)("div",{className:S.a.nousers,children:[Object(o.jsx)("p",{children:"No users found!"}),Object(o.jsx)(a.b,{className:"btn",to:"/usersWebApp/new-user",children:"Add New User"})]})},D=function(){var e=_(N,!0),t=e.sendRequest,s=e.status,r=e.data,n=e.error;return Object(i.useEffect)((function(){t()}),[t]),"pending"===s?Object(o.jsx)("div",{className:"centered",children:" Loading..."}):n?Object(o.jsx)("p",{className:"centered focused",children:n}):"completed"!==s||r&&0!==r.length?Object(o.jsx)(p,{users:r}):Object(o.jsx)(M,{})},F=s(12),P=s(50),B=s.n(P),T=F.a().shape({name:F.b().min(2,"Must be at least 2 digits").max(20,"Must be max 20 digits").required(),surname:F.b().min(2,"Must be at least 2 digits").max(20,"Must be max 20 digits").required(),birth_date:F.b().test("DOB","wrong DOB, at least 1 year",(function(e){return B()().diff(B()(e),"years")>=1})).required(),email:F.b().required().email("Wrong email formating"),password:F.b().min(4,"Must be at least 4 digits").max(10,"Must be max 10 digits").required(),phone:F.b().required().matches(/^[0-9]+$/,"Must be only digits").min(5,"Must be at least 5 digits").max(11,"Must be max 11 digits"),identity:F.b().required().matches(/^[0-9]+$/,"Must be only digits").min(2,"Must be at least 2 digits").max(5,"Must be max 5 digits"),passport_number:F.b().required().matches(/^[0-9]+$/,"Must be only digits").min(5,"Must be at least 5 digits").max(11,"Must be max 11 digits")}),L=s(81),I=s.n(L);var G=function(e){return Object(o.jsx)("div",{className:I.a.card,children:e.children})},V=s(20),H=s.n(V),J=function(e){var t=Object(i.useRef)(),s=Object(i.useRef)(),r=Object(i.useRef)(),n=Object(i.useRef)(),a=Object(i.useRef)(),c=Object(i.useRef)(),u=Object(i.useRef)(),l=Object(i.useRef)(),d=function(){var i=Object(m.a)(f.a.mark((function i(o){var d,j,b,p,h,m,x,O,v;return f.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return o.preventDefault(),d=t.current.value,j=s.current.value,b=r.current.value,p=n.current.value,h=a.current.value,m=c.current.value,x=u.current.value,O=l.current.value,v={name:d,surname:j,birth_date:b,email:p,password:h,phone:m,identity:x,passport_number:O},i.next=12,T.isValid(v);case 12:i.sent?e.onAddUser(v):alert("Could not create, wrong values inserted");case 14:case"end":return i.stop()}}),i)})));return function(e){return i.apply(this,arguments)}}();return Object(o.jsx)(G,{children:Object(o.jsxs)("form",{className:H.a.form,onSubmit:d,children:[Object(o.jsxs)("div",{className:H.a.control,children:[Object(o.jsxs)("div",{className:"w-50",children:[Object(o.jsx)("label",{htmlFor:"Name",children:"Name"}),Object(o.jsx)("input",{type:"text",required:!0,id:"Name",ref:t})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"Surname",children:"Surname"}),Object(o.jsx)("input",{type:"text",required:!0,id:"Surname",ref:s})]})]}),Object(o.jsxs)("div",{className:H.a.control,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"birthdate",children:"Birth Date"}),Object(o.jsx)("input",{type:"date",required:!0,id:"birthdate",ref:r})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email"}),Object(o.jsx)("input",{id:"email",type:"email",required:!0,ref:n})]})]}),Object(o.jsxs)("div",{className:H.a.control,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"password",children:"Password"}),Object(o.jsx)("input",{id:"password",type:"password",required:!0,ref:a})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"phone",children:"Phone"}),Object(o.jsx)("input",{id:"phone",type:"number",required:!0,ref:c})]})]}),Object(o.jsxs)("div",{className:H.a.control,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"identity",children:"Identity"}),Object(o.jsx)("input",{id:"identity",type:"number",required:!0,ref:u})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"passportnumber",children:"Passport Number"}),Object(o.jsx)("input",{id:"passportnumber",type:"number",required:!0,ref:l})]})]}),Object(o.jsx)("div",{className:H.a.actions,children:Object(o.jsx)("button",{children:"Add User"})})]})})},Y=function(){var e=_(A),t=e.sendRequest,s=e.status,r=Object(c.g)();Object(i.useEffect)((function(){"completed"===s&&r.push("/usersWebApp/users")}),[s,r]);return Object(o.jsx)(J,{onAddUser:function(e){t(e)}})},$=s(6),z=s.n($),Q=s(82),X=(s(196),function(e){var t=Object(c.g)(),s=Object(i.useState)(!1),r=Object(x.a)(s,2),n=r[0],u=r[1],l=_(U,!0),d=l.sendRequest,j=l.status,b=Object(i.useRef)(),p=Object(i.useRef)(),h=Object(i.useRef)(),O=Object(i.useRef)(),v=Object(i.useRef)(),g=Object(i.useRef)(),N=Object(i.useRef)(),w=Object(i.useRef)();Object(i.useEffect)((function(){"completed"===j&&t.push("/usersWebApp/users")}),[j,t]);var y=function(){u(!n)},k=function(){var t=Object(m.a)(f.a.mark((function t(s){var r,n,a,c,i,u,l,o,d;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.preventDefault(),r=b.current.value?b.current.value:e.name,n=p.current.value?p.current.value:e.surname,a=h.current.value?h.current.value:e.birth_date,c=O.current.value?O.current.value:e.email,i=v.current.value?v.current.value:e.password,u=g.current.value?g.current.value:e.phone,l=N.current.value?N.current.value:e.identity,o=w.current.value?w.current.value:e.passport_number,d={name:r,surname:n,birth_date:a,email:c,password:i,phone:u,identity:l,passport_number:o},y(),t.next=13,T.isValid(d);case 13:t.sent?e.sendUpdateRequest(d,e.id):alert("Could not update, wrong values inserted");case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),A=Object(o.jsx)("input",{type:"text",placeholder:e.name,ref:b}),R=Object(o.jsx)("input",{type:"text",placeholder:e.surname,ref:p}),q=Object(o.jsx)("input",{type:"date",ref:h}),C=Object(o.jsx)("input",{type:"email",placeholder:e.email,ref:O}),W=Object(o.jsx)("input",{type:"password",placeholder:"******",ref:v}),E=Object(o.jsx)("input",{type:"number",placeholder:e.phone,ref:g}),S=Object(o.jsx)("input",{type:"number",placeholder:e.identity,ref:N}),M=Object(o.jsx)("input",{type:"number",placeholder:e.passport_number,ref:w});return Object(o.jsxs)("div",{className:z.a.details,children:[Object(o.jsxs)("div",{className:z.a.flex,children:[Object(o.jsx)("p",{children:"Name: "}),Object(o.jsx)("p",{children:n?A:e.name})]}),Object(o.jsxs)("div",{className:z.a.flex,children:[Object(o.jsx)("p",{children:"Surname: "}),Object(o.jsx)("p",{children:n?R:e.surname})]}),Object(o.jsxs)("div",{className:z.a.flex,children:[Object(o.jsx)("p",{children:"Date of Birth: "}),Object(o.jsx)("p",{children:n?q:e.birth_date})]}),Object(o.jsxs)("div",{className:z.a.flex,children:[Object(o.jsx)("p",{children:"Email: "}),Object(o.jsx)("p",{children:n?C:e.email})]}),Object(o.jsxs)("div",{className:z.a.flex,children:[Object(o.jsx)("p",{children:"Password: "}),Object(o.jsx)("p",{children:n?W:"*****"})]}),Object(o.jsxs)("div",{className:z.a.flex,children:[Object(o.jsx)("p",{children:"Phone: "}),Object(o.jsx)("p",{children:n?E:e.phone})]}),Object(o.jsxs)("div",{className:z.a.flex,children:[Object(o.jsx)("p",{children:"Identity: "}),Object(o.jsx)("p",{children:n?S:e.identity})]}),Object(o.jsxs)("div",{className:z.a.flex,children:[Object(o.jsx)("p",{children:"Passport No: "}),Object(o.jsx)("p",{children:n?M:e.passport_number})]}),Object(o.jsxs)("div",{className:z.a.btnField,children:[Object(o.jsx)(a.b,{className:"btn ".concat(z.a.detailsBtn),to:"/usersWebApp/users",children:"Back"}),Object(o.jsx)("button",{className:"btn ".concat(z.a.detailsBtn),onClick:y,children:n?"Cancel editing":"Edit"}),n&&Object(o.jsx)("button",{className:"btn ".concat(z.a.detailsBtn),onClick:k,children:"Save"}),Object(o.jsx)("button",{className:"btn ".concat(z.a.detailsBtn),onClick:function(){Object(Q.confirmAlert)({title:"Delete this user?",message:"",buttons:[{label:"Yes",onClick:function(){return d(e.id)}},{label:"No",onClick:function(){return""}}]})},children:"Delete User"})]})]})}),Z=function(){var e=Object(c.i)(),t=_(C,!0),s=t.sendRequest,r=t.status,n=e.userId,a=_(y,!0),u=a.sendRequest,l=a.status,d=a.data,j=a.error;Object(i.useEffect)((function(){u(n)}),[u,r,n]);return"pending"===l?Object(o.jsx)("div",{className:"centered",children:" Loading..."}):j?Object(o.jsx)("p",{className:"centered focused",children:j}):d?Object(o.jsx)(i.Fragment,{children:Object(o.jsx)(X,{id:n,name:d.name,surname:d.surname,birth_date:d.birth_date,email:d.email,password:d.password,phone:d.phone,identity:d.identity,passport_number:d.passport_number,sendUpdateRequest:function(e,t){s(e,t)}})}):Object(o.jsx)("p",{children:"No User found"})},K=s(83),ee=s.n(K),te=s(21),se=s.n(te),re=function(){return Object(o.jsxs)("header",{className:se.a.header,children:[Object(o.jsxs)("div",{className:se.a.logo,children:["Users Web App",Object(o.jsx)("a",{className:se.a.linkToGit,href:"https://github.com/GvidasGVD/usersWebApp/tree/master/src",target:"_blank",rel:"noopener noreferrer",children:"See code in GitHub"})]}),Object(o.jsx)("nav",{className:se.a.nav,children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(a.c,{to:"/usersWebApp/users",activeClassName:se.a.active,children:"All Users"})}),Object(o.jsx)("li",{children:Object(o.jsx)(a.c,{to:"/usersWebApp/new-user",activeClassName:se.a.active,children:"Add New User"})})]})})]})},ne=function(e){return Object(o.jsxs)(i.Fragment,{children:[Object(o.jsx)(re,{}),Object(o.jsx)("main",{className:ee.a.main,children:e.children})]})},ae=function(){return Object(o.jsx)("div",{className:"centered",children:Object(o.jsx)("p",{children:"Page not found!"})})};var ce=function(){return Object(o.jsx)(ne,{children:Object(o.jsxs)(c.d,{children:[Object(o.jsx)(c.b,{path:"/usersWebApp",exact:!0,children:Object(o.jsx)(c.a,{to:"/usersWebApp/users"})}),Object(o.jsx)(c.b,{path:"/usersWebApp/users",exact:!0,children:Object(o.jsx)(D,{})}),Object(o.jsx)(c.b,{path:"/usersWebApp/users/:userId",children:Object(o.jsx)(Z,{})}),Object(o.jsx)(c.b,{path:"/usersWebApp/new-user",children:Object(o.jsx)(Y,{})}),Object(o.jsx)(c.b,{path:"/usersWebApp/usersWebApp",exact:!0,children:Object(o.jsx)(c.a,{to:"/usersWebApp/users"})}),Object(o.jsx)(c.b,{path:"*",children:Object(o.jsx)(ae,{})})]})})};n.a.render(Object(o.jsx)(a.a,{children:Object(o.jsx)(ce,{})}),document.getElementById("root"))},20:function(e,t,s){e.exports={form:"NewUserForm_form__PCaTH",control:"NewUserForm_control__35j2s",actions:"NewUserForm_actions__2LZx0"}},21:function(e,t,s){e.exports={header:"MainNavigation_header__9Wrod",logo:"MainNavigation_logo__23HYm",nav:"MainNavigation_nav__19LmH",active:"MainNavigation_active__tSAdF",linkToGit:"MainNavigation_linkToGit__3JHsx"}},48:function(e,t,s){e.exports={list:"UserList_list__1YjXN",sorting:"UserList_sorting__w9p22"}},6:function(e,t,s){e.exports={details:"UserDetails_details__1VsOj",flex:"UserDetails_flex__24Thi",btnField:"UserDetails_btnField__3n78W",detailsBtn:"UserDetails_detailsBtn__P5vyk",passwordInput:"UserDetails_passwordInput__1cGp8"}},73:function(e,t,s){e.exports={item:"UserItem_item__38Vzn"}},76:function(e,t,s){e.exports={nousers:"NoUserFound_nousers__2PhQ8"}},81:function(e,t,s){e.exports={card:"Card_card__3ONz9"}},83:function(e,t,s){e.exports={main:"Layout_main__9Ppdw"}},88:function(e,t,s){}},[[197,1,2]]]);
//# sourceMappingURL=main.3ddeb30e.chunk.js.map