(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{198:function(e,t,a){},208:function(e,t,a){},219:function(e,t,a){e.exports=a(448)},224:function(e,t,a){},230:function(e,t,a){},382:function(e,t,a){},385:function(e,t,a){},448:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(82),c=a.n(l),i=(a(224),a(14)),s=a(15),o=a(19),m=a(16),u=a(18),d=a(451),p=a(453),h=a(449),E=a(233),g=a(450),f=a(5),b=(a(230),Object(f.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"LOGOUT_SUCCESS"})})})}}})(function(e){var t=e.profile;return r.a.createElement("div",null,r.a.createElement("ul",{id:"nav-desktop",className:"right hide-on-small-only"},r.a.createElement("li",null,r.a.createElement(g.a,{to:"/create"},r.a.createElement("i",{className:"material-icons"},"add"))),r.a.createElement("li",null,r.a.createElement(g.a,{to:"/"},"\uc804\uad11\ud310")),r.a.createElement("li",null,r.a.createElement(g.a,{to:"/history"},"\uc804\uc801")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"\ub85c\uadf8\uc544\uc6c3")),r.a.createElement("li",null,r.a.createElement(E.a,{to:"/profile",className:"btn btn-floating blue  lighten-2 btn-flat white-text"},t.initial))),r.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-up"},r.a.createElement("li",null,r.a.createElement(g.a,{to:"/create"},r.a.createElement("i",{className:"material-icons"},"add"))),r.a.createElement("li",null,r.a.createElement(g.a,{to:"/"},r.a.createElement("i",{className:"material-icons"},"format_list_numbered"))),r.a.createElement("li",null,r.a.createElement(g.a,{to:"/history"},r.a.createElement("i",{className:"material-icons"},"insert_chart_outlined"))),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},r.a.createElement("i",{className:"material-icons"},"logout"))),r.a.createElement("li",null,r.a.createElement(E.a,{to:"/profile",className:"btn btn-floating blue lighten-2 btn-flat white-text"},t.initial))))})),v=function(){return r.a.createElement("div",null,r.a.createElement("ul",{id:"nav-desktop",className:"right hide-on-small-only"},r.a.createElement("li",null,r.a.createElement(g.a,{to:"/"},"\uc804\uad11\ud310")),r.a.createElement("li",null,r.a.createElement(g.a,{to:"/signin"},"\ub85c\uadf8\uc778")),r.a.createElement("li",null,r.a.createElement(g.a,{to:"/signup"},"\ud68c\uc6d0\uac00\uc785"))),r.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-up"},r.a.createElement("li",null,r.a.createElement(g.a,{to:"/"},r.a.createElement("i",{className:"material-icons"},"dashboard"))),r.a.createElement("li",null,r.a.createElement(g.a,{to:"/signin"},"\ub85c\uadf8\uc778")),r.a.createElement("li",null,r.a.createElement(g.a,{to:"/signup"},"\ud68c\uc6d0\uac00\uc785"))))},N=Object(f.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(b,{profile:a}):r.a.createElement(v,null);return r.a.createElement("nav",{className:"nav wrapper blue darken-2 z-depth-0"},r.a.createElement("div",{className:"container"},r.a.createElement(E.a,{to:"/",className:"brand-logo left"},r.a.createElement("span",{className:"white-text"},"\ub7ad\ud0b9\ud551\ud401")),n))}),O=a(37),_=a.n(O),y=function(e){var t=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notifications"},t&&t.map(function(e){return"new_game"==e.type?r.a.createElement(E.a,{to:"/game/"+e.game_id,key:e.id},r.a.createElement("li",null,r.a.createElement("p",{className:"pink-text"},e.content),r.a.createElement("p",null,e.result),r.a.createElement("div",{className:"grey-text note-date"},_()(e.time.toDate()).fromNow()))):"new_user"==e.type?r.a.createElement(E.a,{to:"/history/"+e.user_id,key:e.id},r.a.createElement("li",null,r.a.createElement("p",{className:"pink-text"},e.content),r.a.createElement("p",null,e.result),r.a.createElement("div",{className:"grey-text note-date"},_()(e.time.toDate()).fromNow()))):void 0})))))},j=a(17),w=a(9),C=a(452),S=(a(382),function(e){var t=e.users;return r.a.createElement("table",{className:"highlight centered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\uc21c\uc704"),r.a.createElement("th",null,"\uc774\ub984"),r.a.createElement("th",null,"\uad6c\uc7a5"),r.a.createElement("th",null,"\ub808\uc774\ud305"))),r.a.createElement("tbody",null,t&&t.map(function(e,t){return r.a.createElement("tr",{key:e.id},r.a.createElement("th",null,t+1),r.a.createElement("td",null,r.a.createElement(E.a,{to:"/history/"+e.id},e.name)),r.a.createElement("td",null,e.club),r.a.createElement("td",null,e.rating))})))}),k=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.notifications,n=e.users;return t.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("h3",{className:"center-align"},"\uc804\uad11\ud310"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(S,{users:n})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(y,{notifications:a})))):r.a.createElement(C.a,{to:"/signin"})}}]),t}(n.Component),R=Object(w.d)(Object(f.b)(function(e){return{auth:e.firebase.auth,notifications:e.firestore.ordered.notifications,users:e.firestore.ordered.users}}),Object(j.firestoreConnect)([{collection:"notifications",limit:10,orderBy:["time","desc"]},{collection:"users",orderBy:["rating","desc"]}]))(k),I=Object(w.d)(Object(f.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.games;return{game:n?n[a]:null,auth:e.firebase.auth,id:a}}),Object(j.firestoreConnect)([{collection:"games"}]))(function(e){var t=e.game,a=e.auth,n=e.id;return console.log(t),a.uid?t?r.a.createElement("div",{className:"container section game-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"card-title"},r.a.createElement("div",{className:"row center-align"},r.a.createElement("h3",{className:"col s5 m5 l5"},t.p1_score),r.a.createElement("h3",{className:"col s2 m2 l2"},":"),r.a.createElement("h3",{className:"col s5 m5 l5"},t.p2_score)),r.a.createElement("div",{className:"row center-align"},r.a.createElement(E.a,{to:"/history/"+t.p1_id},r.a.createElement("h6",{className:"col s5 m5 center-align"},t.p1_name)),r.a.createElement("h6",{className:"col s2 m2 "}),r.a.createElement(E.a,{to:"/history/"+t.p2_id},r.a.createElement("h6",{className:"col s5 m5 center-align"},t.p2_name)))),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"\uac8c\uc784\ubc88\ud638: ",n),r.a.createElement("div",null,"\ud0c1\uad6c\uc7a5 \uc704\uce58: ",t.location),r.a.createElement("div",null,"\uc2ec\ud310: ",t.referee_name),r.a.createElement("div",null,_()(t.createdAt.toDate()).calendar(),"\uc5d0 \uc0dd\uc131\ub428"))))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading project...")):r.a.createElement(C.a,{to:"/signin"})}),x=a(29),A=(a(198),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(x.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;e.authErrorMessage;return e.auth.uid?r.a.createElement(C.a,{to:"/"}):r.a.createElement("div",{className:"signin container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("h5",{className:"grey-text text-darken-3 col s12"},"\ub85c\uadf8\uc778")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("label",{htmlFor:"email"},"\uc774\uba54\uc77c"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("label",{htmlFor:"password"},"\ud328\uc2a4\uc6cc\ub4dc"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("button",{className:"btn blue darken-2"},"\ub85c\uadf8\uc778"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"red-text right col s12"},t?r.a.createElement("p",null,t):null))))}}]),t}(n.Component)),F=Object(f.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){e({type:"LOGIN_ERROR",err:t})})}));var a}}})(A),G=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",name:"",level:"",club:","},a.handleChange=function(e){a.setState(Object(x.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(C.a,{to:"/"}):r.a.createElement("div",{className:"signup container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("h5",{className:"grey-text text-darken-3 col s12"},"\ud68c\uc6d0\uac00\uc785")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"name"},"\uc774\ub984"),r.a.createElement("input",{type:"text",id:"name",onChange:this.handleChange}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"\uc774\uba54\uc77c"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"\ud328\uc2a4\uc6cc\ub4dc"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"level"},"\ubd80\uc218"),r.a.createElement("input",{type:"number",id:"level",onChange:this.handleChange}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"club"},"\ud0c1\uad6c\uc7a5"),r.a.createElement("input",{type:"text",id:"club",onChange:this.handleChange}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn blue darken-2"},"\ud68c\uc6d0\uac00\uc785"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null))))}}]),t}(n.Component),U=Object(f.b)(function(e){return{auth:e.firebase.auth,authError:e.auth.authError}},function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,l=n.getFirestore,c=r(),i=l();c.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){return i.collection("users").doc(t.user.uid).set({name:e.name,level:e.level,club:e.club,initial:e.name[1],email:e.email,rating:6e3-1e3*e.level})}).then(function(){t({type:"SIGNUP_SUCCESS"})}).catch(function(e){t({type:"SIGNUP_ERROR",err:e})})}}(t))}}})(G),D=a(38),L=a(134),P=a.n(L),M=(a(385),[]),z=function(e,t){setTimeout(function(){t(T(e))},1e3),console.log("loadOption1 is called")},B=function(e,t){setTimeout(function(){t(T(e))},1e3),console.log("loadOption2 is called")},T=function(e){return M.filter(function(t){return t.label.includes(e)})},V=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={p1_name:"",p1_score:0,p1_id:"",p1_rating:0,p2_name:"",p2_score:0,p2_id:"",p2_rating:0,referee:"",date:"",location:"",selectedOption1:null,selectedOption2:null,inputValue:"",users:[]},a.handleChange=function(e){a.setState(Object(x.a)({},e.target.id,e.target.value)),console.log("submit",a.state)},a.handleChange1=function(e){console.log(e),a.setState({p1_name:e.label,p1_id:e.value,p1_rating:e.rating})},a.handleChange2=function(e){a.setState({p2_name:e.label,p2_id:e.value,p2_rating:e.rating})},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state),a.props.createGame(a.state),a.props.history.push("/")},a.handleInputChange1=function(e){return a.setState({inputValue:e}),e},a.handleInputChange2=function(e){return a.setState({inputValue:e}),e},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.users;if(null!=a){for(;M.length>0;)M.pop();a.forEach(function(e){M.push({value:e.id,label:"".concat(e.name,"(").concat(e.rating,")"),rating:e.rating})})}return t.uid?r.a.createElement("div",{className:"container create-game"},r.a.createElement("h3",{className:"center-align"},"\uacbd\uae30 \uae30\ub85d"),r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("div",{className:"row center-align valign-wrapper"},r.a.createElement("div",{className:"input-field col s5 m5 l5"},r.a.createElement("select",{id:"p1_score",className:"browser-default",onChange:this.handleChange},r.a.createElement("option",{value:"0",defaultValue:!0},"0"),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"))),r.a.createElement("h3",{className:"col s2 m2 l2"},":"),r.a.createElement("div",{className:"input-field col s5 m5 l5"},r.a.createElement("select",{id:"p2_score",className:"browser-default",onChange:this.handleChange},r.a.createElement("option",{value:"0",defaultValue:!0},"0"),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3")))),r.a.createElement("div",{className:"row center-align"},r.a.createElement("div",{className:"input-field col s5 m5 center-align"},r.a.createElement("label",{htmlFor:"p1_name"},"player1"),r.a.createElement(P.a,{loadOptions:z,defaultOptions:!0,cacheOptions:!0,onInputChange:this.handleInputChange1,onChange:this.handleChange1,isSearchable:!0})),r.a.createElement("h6",{className:"col s2 m2 "}),r.a.createElement("div",{className:"input-field col s5 m5 center-align"},r.a.createElement("label",{htmlFor:"p2_name"},"player2"),r.a.createElement(P.a,{loadOptions:B,cacheOptions:!0,defaultOptions:!0,onInputChange:this.handleInputChange2,onChange:this.handleChange2,isSearchable:!0}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field center-align col s12"},r.a.createElement("button",{className:"btn blue darken-2"},"\ud655\uc778"))))):r.a.createElement(C.a,{to:"/signin"})}}]),t}(n.Component),W=Object(w.d)(Object(f.b)(function(e){return{auth:e.firebase.auth,users:e.firestore.ordered.users}},function(e){return{createGame:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)();r.settings({timestampsInSnapshots:!0});var l=a().firebase.profile,c=a().firebase.auth.uid;r.collection("games").add(Object(D.a)({},e,{whowin:e.p1_score>e.p2_score,referee_id:c,referee_name:l.name,p1_id:e.p1_id,p2_id:e.p2_id,p1_rating:e.p1_rating,p2_rating:e.p2_rating,createdAt:new Date})).then(function(){t({type:"CREATE_GAME",game:e})}).catch(function(e){t({type:"CREATE_GAME_ERROR",err:e})})}}(t))}}}),Object(j.firestoreConnect)([{collection:"users",orderBy:["name","asc"]}]))(V),Y=(a(208),function(e){var t=e.game;return r.a.createElement("div",{className:"card  game-summary z-depth-1"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("div",{className:"card-title"},r.a.createElement("div",{className:"row center-align"},r.a.createElement("h3",{className:"col s5 m3 offset-m2 "},t.p1_score),r.a.createElement("h3",{className:"col s2 m0 "},":"),r.a.createElement("h3",{className:"col s5 m3"},t.p2_score)),r.a.createElement("div",{className:"row center-align"},r.a.createElement("h6",{className:"col s5 m3 offset-m2 center-align"},t.p1_name),r.a.createElement("h6",{className:"col s2 m0 "}),r.a.createElement("h6",{className:"col s5 m3 center-align"},t.p2_name))),r.a.createElement("p",{className:"center-align"},t.referee_name,"\uc5d0 \uc758\ud574 \uc0dd\uc131\ub428"),r.a.createElement("p",{className:"grey-text center-align"},_()(t.createdAt.toDate()).calendar())))}),J=function(e){var t=e.games;return r.a.createElement("div",{className:"game-list section"},t&&t.map(function(e){return r.a.createElement(E.a,{to:"/game/"+e.id,key:e.id},r.a.createElement(Y,{game:e}))}))},q=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.auth;if(!e.uid)return r.a.createElement(C.a,{to:"/signin"});var t=this.props,a=t.user_id,n=t.games;console.log(n),console.log(a),void 0==a&&(a=e.uid);var l=[];return void 0!=n&&(l=n.filter(function(e){return e.p1_id==a||e.p2_id==a})),console.log(l),l.length>0?r.a.createElement("div",{className:"history container"},r.a.createElement(J,{games:l})):r.a.createElement("div",{className:"history container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"red-text center col s12"},r.a.createElement("p",null,"\uacbd\uae30 \uc815\ubcf4\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."))))}}]),t}(n.Component),K=Object(w.d)(Object(f.b)(function(e,t){var a=t.match.params.id;return{games:e.firestore.ordered.games,auth:e.firebase.auth,user_id:a}}),Object(j.firestoreConnect)([{collection:"games",orderBy:["createdAt","desc"]}]))(q),$=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"profile container"},r.a.createElement("h2",null,"\ud504\ub85c\ud544 \ucc3d\uc785\ub2c8\ub2e4")):r.a.createElement(C.a,{to:"/signin"})}}]),t}(n.Component),H=Object(f.b)(function(e){return{auth:e.firebase.auth}})($),Q=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(N,null),r.a.createElement(p.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:R}),r.a.createElement(h.a,{path:"/game/:id",component:I}),r.a.createElement(h.a,{path:"/signin",component:F}),r.a.createElement(h.a,{path:"/signup",component:U}),r.a.createElement(h.a,{path:"/create",component:W}),r.a.createElement(h.a,{exact:!0,path:"/history",component:K}),r.a.createElement(h.a,{path:"/history/:id",component:K}),r.a.createElement(h.a,{path:"/profile",component:H}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X={authError:null},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return Object(D.a)({},e,{authError:"Login failed",authErrorMessage:t.err});case"LOGIN_SUCCESS":return console.log("login success"),Object(D.a)({},e,{authError:null,authErrorMessage:null});case"LOGOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(D.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(D.a)({},e,{authError:t.err.message});default:return e}},ee={games:[{id:1,p1_score:3,p2_score:2,p1_name:"\uae40\uc601\uc8fc",p2_name:"\ubd95\uc5b4\ube75"},{id:2,p1_score:3,p2_score:0,p1_name:"\uace0\uad6c\ub9c8",p2_name:"\uac10\uc790"},{id:3,p1_score:2,p2_score:3,p1_name:"\uac10\uc790",p2_name:"\uc624\uc774"},{id:4,p1_score:1,p2_score:3,p1_name:"\ubc30\ucd94",p2_name:"\ub2f9\uadfc"}]},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee;switch((arguments.length>1?arguments[1]:void 0).type){case"CREATE_GAME":case"CREATE_GAME_ERROR":default:return e}},ae=a(58),ne=Object(w.c)({auth:Z,game:te,firestore:ae.firestoreReducer,firebase:j.firebaseReducer}),re=a(217),le=a(85),ce=a.n(le);a(441),a(446);ce.a.initializeApp({apiKey:"AIzaSyAlP6zYhvjzPIGsj2FYeYvLMw5D3IoqBMo",authDomain:"react-rankpong.firebaseapp.com",databaseURL:"https://react-rankpong.firebaseio.com",projectId:"react-rankpong",storageBucket:"react-rankpong.appspot.com",messagingSenderId:"271586261523"}),ce.a.firestore().settings({timestampsInSnapshots:!0});var ie=ce.a,se=Object(w.e)(ne,Object(w.d)(Object(w.a)(re.a.withExtraArgument({getFirebase:j.getFirebase,getFirestore:ae.getFirestore})),Object(ae.reduxFirestore)(ie),Object(j.reactReduxFirebase)(ie,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));se.firebaseAuthIsReady.then(function(){c.a.render(r.a.createElement(f.a,{store:se},r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})})}},[[219,2,1]]]);
//# sourceMappingURL=main.6ef35238.chunk.js.map