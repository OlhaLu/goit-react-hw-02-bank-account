(this["webpackJsonpgoit-react-hw-02-bank-account"]=this["webpackJsonpgoit-react-hw-02-bank-account"]||[]).push([[0],{15:function(e,t,a){e.exports={dashboard:"Dashboard_dashboard__17ZLI"}},20:function(e,t,a){e.exports=a(32)},3:function(e,t,a){e.exports={controls:"Controls_controls__3IkFg",input:"Controls_input__27qFk",button:"Controls_button__Mh22O"}},32:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(2),o=a.n(c),s=a(7),l=a(12),i=a(13),u=a(18),m=a(14),d=a(19),b=a(3),h=a.n(b),p=function(e){var t=e.onDeposit,a=e.onWithdraw;return r.a.createElement("section",{className:h.a.controls},r.a.createElement("input",{className:h.a.input,type:"number",name:"amount"}),r.a.createElement("button",{className:h.a.button,type:"button",onClick:t},"Deposit"),r.a.createElement("button",{className:h.a.button,type:"button",onClick:a},"Withdraw"))},_=a(4),E=a.n(_),f=function(e){var t=e.balance,a=e.income,n=e.expenses;return r.a.createElement("section",{className:E.a.sections},r.a.createElement("span",{className:E.a.income},"\u2b06",a),r.a.createElement("span",{className:E.a.expenses},"\u2b07",n),r.a.createElement("span",{className:E.a.balance},"Balance: ",t))},y=a(5),v=a.n(y),w=function(e){var t=e.transactions;return r.a.createElement("table",{className:v.a.table},r.a.createElement("thead",{className:v.a.head},r.a.createElement("tr",{className:v.a.title},r.a.createElement("th",null,"Transaction"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Date"))),r.a.createElement("tbody",{className:v.a.transactions_body},t.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.type),r.a.createElement("td",null,Number(e.amount),"$"),r.a.createElement("td",null,e.date))}))))},N=a(8),g=(a(25),a(15)),x=a.n(g),C=a(9),k=a.n(C),O=function(){var e=Math.floor(8*Math.random()+2011),t=Math.floor(12*Math.random()+1),a=Math.floor(30*Math.random()+1);return new Date(e,t,a).toLocaleString("en-US")},j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={transactions:[],balance:0},a.handleChangeDeposit=function(e){var t=Number(e.target.parentElement.firstElementChild.value);""===t||t>0?a.setState((function(e){var a=e.transactions,n=e.balance,r={type:"deposit",id:k()(),amount:t,date:O()};return{transactions:[].concat(Object(s.a)(a),[r]),balance:n+t}})):N.b.warn("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!")},a.handleChangeWithdrawl=function(e){var t=Number(e.target.parentElement.firstElementChild.value);if(t<=a.state.balance){var n={type:"withdrawal",id:k()(),amount:t,date:O()};a.setState((function(e){var a=e.transactions,r=e.balance;return{transactions:[].concat(Object(s.a)(a),[n]),balance:r-t}}))}else N.b.error("\u041d\u0430 \u0441\u0447\u0435\u0442\u0443 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!")},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.transactions,a=e.balance,n=Object(s.a)(t).reduce((function(e,t){return"deposit"===t.type?e+t.amount:e}),0),c=Object(s.a)(t).reduce((function(e,t){return"withdrawal"===t.type?e+t.amount:e}),0);return r.a.createElement("div",{className:x.a.dashboard},r.a.createElement(p,{onDeposit:this.handleChangeDeposit,onWithdraw:this.handleChangeWithdrawl}),r.a.createElement(f,{balance:a,income:n,expenses:c}),r.a.createElement(w,{transactions:t}),r.a.createElement(N.a,null))}}]),t}(n.Component);var D=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null))};o.a.render(r.a.createElement(D,null),document.getElementById("root"))},4:function(e,t,a){e.exports={sections:"Balance_sections__2MF7P",income:"Balance_income__3hYhd",expenses:"Balance_expenses__3J_AE",balance:"Balance_balance__33TK4"}},5:function(e,t,a){e.exports={table:"TransactionsHistory_table__3Y5d_",head:"TransactionsHistory_head__2W-fd",title:"TransactionsHistory_title__tgHWx",transactions_body:"TransactionsHistory_transactions_body__22rx7"}}},[[20,1,2]]]);
//# sourceMappingURL=main.65fadf57.chunk.js.map