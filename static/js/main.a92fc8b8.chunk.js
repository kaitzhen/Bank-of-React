(this["webpackJsonpbank-of-react"]=this["webpackJsonpbank-of-react"]||[]).push([[0],{40:function(t,e,a){},69:function(t,e,a){"use strict";a.r(e);var r=a(1),n=a.n(r),c=a(32),s=a.n(c),i=(a(40),a(33)),o=a(18),l=a(4),d=a(5),b=a(6),u=a(7),j=a(21),p=a.n(j),h=a(8),O=a(2),m=a(0),x=function(t){Object(b.a)(a,t);var e=Object(u.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("p",{children:["Total Balance: $",this.props.accountBalance.toFixed(2)]})}}]),a}(r.Component),f=x,v=function(t){Object(b.a)(a,t);var e=Object(u.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:"https://picsum.photos/200/200",alt:"bank"}),Object(m.jsx)("h1",{children:"Bank of React"}),Object(m.jsx)(h.b,{to:"/userProfile",children:"User Profile"}),Object(m.jsx)("br",{}),Object(m.jsx)(h.b,{to:"/login",children:"Login"}),Object(m.jsx)("br",{}),Object(m.jsx)(h.b,{to:"/credits",children:"Credits"}),Object(m.jsx)("br",{}),Object(m.jsx)(h.b,{to:"/debits",children:"Debits"}),Object(m.jsx)(f,{accountBalance:this.props.accountBalance}),Object(m.jsxs)("p",{children:["Credit: $",this.props.totalCredit]}),Object(m.jsxs)("p",{children:["Debit: $",this.props.totalDebit]})]})}}]),a}(r.Component),g=v,C=function(t){Object(b.a)(a,t);var e=Object(u.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"User Profile"}),Object(m.jsxs)("div",{children:["Username: ",this.props.userName]}),Object(m.jsxs)("div",{children:["Member Since: ",this.props.memberSince]}),Object(m.jsx)(h.b,{to:"/Bank-of-React",children:"Return to Home"})]})}}]),a}(r.Component),y=C,D=function(t){Object(b.a)(a,t);var e=Object(u.a)(a);function a(){var t;return Object(l.a)(this,a),(t=e.call(this)).handleChange=function(e){var a=Object(o.a)({},t.state.user),r=e.target.name,n=e.target.value;a[r]=n,t.setState({user:a})},t.handleSubmit=function(e){e.preventDefault(),t.props.mockLogIn(t.state.user),t.setState({redirect:!0})},t.state={user:{userName:"",password:""},redirect:!1},t}return Object(d.a)(a,[{key:"render",value:function(){return this.state.redirect?Object(m.jsx)(O.a,{to:"/userProfile"}):Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Login"}),Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"userName",children:"User Name"}),Object(m.jsx)("input",{type:"text",name:"userName",onChange:this.handleChange,value:this.state.user.userName})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"password",children:"Password"}),Object(m.jsx)("input",{type:"password",name:"password"})]}),Object(m.jsx)("button",{children:"Log In"})]})]})}}]),a}(r.Component),k={table:{backgroundColor:"#f0ffff",border:"1px solid black",borderCollapse:"collapse",marginLeft:"auto",marginRight:"auto",marginBottom:"10px"},data:{backgroundColor:"#f0ffff",border:"1px solid black",borderCollapse:"collapse",padding:"4px"}},B=function(t){Object(b.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).debitsView=function(){return t.props.debits.map((function(t){var e=t.date.slice(0,10);return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{style:k.data,children:t.amount}),Object(m.jsx)("td",{style:k.data,children:t.description}),Object(m.jsx)("td",{style:k.data,children:e})]},t.id)}))},t.handleSubmit=function(e){e.preventDefault();var a=new Date,r="".concat(a.getFullYear(),"-").concat(a.getMonth()+1,"-").concat(a.getDate());t.props.addDebit(e.target.description.value,e.target.amount.value,r)},t}return Object(d.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Debits"}),Object(m.jsxs)("table",{className:"center",style:k.table,children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{style:k.data,children:"Amount"}),Object(m.jsx)("th",{style:k.data,children:"Description"}),Object(m.jsx)("th",{style:k.data,children:"Date"})]}),this.debitsView()]}),Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsx)("input",{type:"text",name:"description",placeholder:"description"}),Object(m.jsx)("input",{type:"number",name:"amount",placeholder:"amount"}),Object(m.jsx)("button",{type:"submit",children:"Add Debit"})]}),Object(m.jsx)(f,{accountBalance:this.props.accountBalance}),Object(m.jsxs)("p",{children:["Total Credit: $",this.props.totalCredit]}),Object(m.jsxs)("p",{children:["Total Debit: $",this.props.totalDebit]}),Object(m.jsx)(h.b,{to:"/Bank-of-React",children:"Return to Home"})]})}}]),a}(r.Component),S=B,N={table:{backgroundColor:"#faf4ed",border:"1px solid black",borderCollapse:"collapse",marginLeft:"auto",marginRight:"auto",marginBottom:"10px"},data:{backgroundColor:"#faf4ed",border:"1px solid black",borderCollapse:"collapse",padding:"4px"}},w=function(t){Object(b.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).creditsView=function(){return t.props.credits.map((function(t){var e=t.date.slice(0,10);return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{style:N.data,children:t.amount}),Object(m.jsx)("td",{style:N.data,children:t.description}),Object(m.jsx)("td",{style:N.data,children:e})]},t.id)}))},t.handleSubmit=function(e){e.preventDefault();var a=new Date,r="".concat(a.getFullYear(),"-").concat(a.getMonth()+1,"-").concat(a.getDate());t.props.addCredit(e.target.description.value,e.target.amount.value,r)},t}return Object(d.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Credits"}),Object(m.jsxs)("table",{className:"center",style:N.table,children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{style:N.data,children:"Amount"}),Object(m.jsx)("th",{style:N.data,children:"Description"}),Object(m.jsx)("th",{style:N.data,children:"Date"})]}),this.creditsView()]}),Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsx)("input",{type:"text",name:"description"}),Object(m.jsx)("input",{type:"number",name:"amount"}),Object(m.jsx)("button",{type:"submit",children:"Add Credit"})]}),Object(m.jsx)(f,{accountBalance:this.props.accountBalance}),Object(m.jsxs)("p",{children:["Total Credit: ",this.props.totalCredit]}),Object(m.jsxs)("p",{children:["Total Debit: ",this.props.totalDebit]}),Object(m.jsx)(h.b,{to:"/Bank-of-React",children:"Return to Home"})]})}}]),a}(r.Component),L=w,R=a(23),U=a.n(R),F=function(t){Object(b.a)(a,t);var e=Object(u.a)(a);function a(){var t;return Object(l.a)(this,a),(t=e.call(this)).mockLogIn=function(e){var a=Object(o.a)({},t.state.currentUser);a.userName=e.userName,t.setState({currentUser:a})},t.addDebit=function(e,a,r){var n={id:e,amount:a,description:e,date:r};console.log(n),t.state.debits.push(n),t.calculateDebits()},t.calculateDebits=function(){var e=Number("0");t.state.debits.forEach((function(t){e+=Number(t.amount)})),t.setState({totalDebit:e});var a=Number(t.state.totalCredit)-e;console.log(a),t.setState({accountBalance:a})},t.addCredit=function(e,a,r){var n={id:e,amount:a,description:e,date:r};console.log(n),t.state.credits.push(n),t.calculateCredits()},t.calculateCredits=function(){var e=Number("0");t.state.credits.forEach((function(t){e+=Number(t.amount)})),t.setState({totalCredit:e});var a=e-Number(t.state.totalDebit);console.log(a),t.setState({accountBalance:a})},t.state={accountBalance:0,currentUser:{userName:"Joe Smith",memberSince:"07/23/96"},credits:[],debits:[],totalCredit:0,totalDebit:0},t}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var t=Object(i.a)(p.a.mark((function t(){var e,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://moj-api.herokuapp.com/credits",t.prev=1,t.next=4,U.a.get("https://moj-api.herokuapp.com/credits");case 4:e=t.sent,this.setState({credits:e.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),t.t0.response&&(console.log(t.t0.response.data),console.log(t.t0.response.status));case 11:return"https://moj-api.herokuapp.com/debits",t.prev=12,t.next=15,U.a.get("https://moj-api.herokuapp.com/debits");case 15:a=t.sent,this.setState({debits:a.data}),t.next=22;break;case 19:t.prev=19,t.t1=t.catch(12),t.t1.response&&(console.log(t.t1.response.data),console.log(t.t1.response.status));case 22:this.calculateCredits(),this.calculateDebits();case 24:case"end":return t.stop()}}),t,this,[[1,8],[12,19]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(m.jsx)(h.a,{children:Object(m.jsxs)("div",{children:[Object(m.jsx)(O.b,{exact:!0,path:"/Bank-of-React",render:function(){return Object(m.jsx)(g,{accountBalance:t.state.accountBalance,totalCredit:t.state.totalCredit,totalDebit:t.state.totalDebit})}}),Object(m.jsx)(O.b,{exact:!0,path:"/userProfile",render:function(){return Object(m.jsx)(y,{userName:t.state.currentUser.userName,memberSince:t.state.currentUser.memberSince})}}),Object(m.jsx)(O.b,{exact:!0,path:"/login",render:function(){return Object(m.jsx)(D,{user:t.state.currentUser,mockLogIn:t.mockLogIn})}}),Object(m.jsx)(O.b,{exact:!0,path:"/debits",render:function(){return Object(m.jsx)(S,{debits:t.state.debits,addDebit:t.addDebit,totalDebit:t.state.totalDebit,totalCredit:t.state.totalCredit,accountBalance:t.state.accountBalance})}}),Object(m.jsx)(O.b,{exact:!0,path:"/credits",render:function(){return Object(m.jsx)(L,{credits:t.state.credits,addCredit:t.addCredit,totalCredit:t.state.totalCredit,totalDebit:t.state.totalDebit,accountBalance:t.state.accountBalance})}})]})})}}]),a}(r.Component),P=F,I=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,70)).then((function(e){var a=e.getCLS,r=e.getFID,n=e.getFCP,c=e.getLCP,s=e.getTTFB;a(t),r(t),n(t),c(t),s(t)}))};s.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(P,{})}),document.getElementById("root")),I()}},[[69,1,2]]]);
//# sourceMappingURL=main.a92fc8b8.chunk.js.map