(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={label:"filter_label__1WhiM",input:"filter_input__3yqDl"}},16:function(t,e,n){t.exports={list:"contactList_list__zoHMf"}},22:function(t,e,n){},23:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(8),o=n.n(r),i=(n(22),n(23),n(13)),s=n(32),l=n(5),u=n.n(l),d=n(2),b=function(t){return{type:"contactList/filteredCont",payload:t}},m=n(1),f=Object(d.b)((function(t){return{contactList:t.contacts}}),(function(t){return{onAdd:function(e){return t(function(t){return{type:"contact/add",payload:t}}(e))}}}))((function(t){var e=t.contactList,n=t.onAdd,a=Object(s.a)(),r=Object(s.a)(),o=Object(c.useState)(""),l=Object(i.a)(o,2),d=l[0],b=l[1],f=Object(c.useState)(""),j=Object(i.a)(f,2),p=j[0],h=j[1];return Object(m.jsxs)("form",{className:u.a.form,onSubmit:function(t){t.preventDefault();var c={id:Object(s.a)(),name:d,number:p};if(e.find((function(t){return t.name.toLowerCase()===c.name.toLowerCase()})))return alert("".concat(c.name," is already on contacts")),b(""),void h("");n(c),b(""),h("")},children:[Object(m.jsx)("label",{className:u.a.label,htmlFor:a,children:"Name"}),Object(m.jsx)("input",{className:u.a.input,type:"text",name:"name",value:d,id:a,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"",required:!0,onChange:function(t){b(t.target.value)}}),Object(m.jsx)("label",{className:u.a.label,htmlFor:r,children:"Number"}),Object(m.jsx)("input",{className:u.a.input,type:"tel",name:"number",value:p,id:r,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"",required:!0,onChange:function(t){h(t.target.value)}}),Object(m.jsx)("button",{className:u.a.submitBtn,type:"submit",children:"Add contact"})]})})),j=n(4),p=n.n(j),h=n(3),O=n.n(h),x=function(t){var e=t.contactList,n=t.onDel,c=t.filter,a=t.filteredCont;return""===c?e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(m.jsxs)("li",{className:p.a.contactItem,children:[Object(m.jsxs)("span",{id:"name",className:p.a.name,children:[c,":"]}),Object(m.jsx)("span",{className:p.a.number,children:a}),Object(m.jsx)("button",{className:p.a.btn,onClick:function(){return n(e)},children:"\u274c"})]},e)})):a.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(m.jsxs)("li",{className:p.a.contactItem,children:[Object(m.jsxs)("span",{id:"name",className:p.a.name,children:[c,":"]}),Object(m.jsx)("span",{className:p.a.number,children:a}),Object(m.jsx)("button",{className:p.a.btn,onClick:function(){return n(e)},children:"\u274c"})]},e)}))};x.propType={contacts:O.a.obj,clickOnBtn:O.a.func};var _=Object(d.b)((function(t){return{contactList:t.contacts,filter:t.filter,filteredCont:t.filteredCont}}),(function(t){return{onDel:function(e){return t({type:"contact/delete",payload:{id:e}})},onFilteredCont:function(e){return t(b(e))}}}))(x),v=n(16),y=n.n(v),C=function(){return Object(m.jsx)("ul",{className:y.a.list,children:Object(m.jsx)(_,{})})};C.prototype={contacts:O.a.obj,clickOnBtn:O.a.func};var N=C,g=n(12),L=n.n(g),I=function(t){var e=t.onFilter,n=t.onFilteredCont,a=t.filter,r=t.contactList;return Object(c.useEffect)((function(){a.length>0&&n(r.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())})))}),[a,r,n]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("label",{className:L.a.label,children:"Find contacts by name"}),Object(m.jsx)("input",{className:L.a.input,onChange:function(t){return e(t.currentTarget.value)}})]})};I.propType={onChange:O.a.func,value:O.a.string};var k=Object(d.b)((function(t){return{filter:t.filter,contactList:t.contacts}}),(function(t){return{onFilter:function(e){return t(function(t){return{type:"contactList/filter",payload:t}}(e))},onFilteredCont:function(e){return t(b(e))}}}))(I),F=Object(d.b)((function(t){return{contactList:t.contacts}}))((function(t){var e=t.contactList;return Object(m.jsxs)("div",{className:"phonebook",children:[Object(m.jsx)("h2",{className:"title",children:"Phonebook"}),Object(m.jsx)(f,{}),Object(m.jsx)("h2",{className:"title",children:"Contacts"}),Object(m.jsx)(k,{}),e.length>0?Object(m.jsx)(N,{}):Object(m.jsx)("p",{className:"notification",children:"Please add your contacts."})]})})),w=n(6),A=n(14),S=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],B=Object(w.combineReducers)({contacts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"contact/add":return[].concat(Object(A.a)(t),[e.payload]);case"contact/delete":return t.filter((function(t){return t.id!==e.payload.id}));default:return t}},filter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;return"contactList/filter"===e.type?e.payload:t},filteredCont:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return"contactList/filteredCont"===e.type?Object(A.a)(e.payload):t}}),z=n(17),D=Object(w.createStore)(B,Object(z.composeWithDevTools)());o.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(d.a,{store:D,children:Object(m.jsx)(F,{})})}),document.getElementById("root"))},4:function(t,e,n){t.exports={contactItem:"contactItem_contactItem__1K3E-",name:"contactItem_name__tEXSP",number:"contactItem_number__19RhP",btn:"contactItem_btn__1odCe"}},5:function(t,e,n){t.exports={label:"form_label__1FrRI",input:"form_input__1I0dx",form:"form_form__2fzAu",submitBtn:"form_submitBtn__3UmYP"}}},[[30,1,2]]]);
//# sourceMappingURL=main.0eaf62c7.chunk.js.map