(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{198:function(e,a,t){},199:function(e,a,t){},219:function(e,a,t){e.exports=t(448)},224:function(e,a,t){},230:function(e,a,t){},382:function(e,a,t){},386:function(e,a,t){},448:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(82),c=t.n(l),i=(t(224),t(15)),s=t(16),o=t(19),m=t(17),u=t(18),d=t(451),h=t(453),E=t(449),p=t(233),f=t(450),g=t(6),b=(t(230),Object(g.b)(null,function(e){return{signOut:function(){return e(function(e,a,t){(0,t.getFirebase)().auth().signOut().then(function(){e({type:"LOGOUT_SUCCESS"})})})}}})(function(e){var a=e.profile;return r.a.createElement("div",null,r.a.createElement("ul",{id:"nav-desktop",className:"right hide-on-small-only"},r.a.createElement("li",null,r.a.createElement(f.a,{to:"/create"},r.a.createElement("i",{className:"material-icons"},"add"))),r.a.createElement("li",null,r.a.createElement(f.a,{to:"/"},"\uc804\uad11\ud310")),r.a.createElement("li",null,r.a.createElement(f.a,{to:"/history"},"\uc804\uc801")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"\ub85c\uadf8\uc544\uc6c3")),r.a.createElement("li",null,r.a.createElement(p.a,{to:"/profile",className:"btn btn-floating blue  lighten-2 btn-flat white-text"},a.initial))),r.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-up"},r.a.createElement("li",null,r.a.createElement(f.a,{to:"/create"},r.a.createElement("i",{className:"material-icons"},"add"))),r.a.createElement("li",null,r.a.createElement(f.a,{to:"/"},r.a.createElement("i",{className:"material-icons"},"format_list_numbered"))),r.a.createElement("li",null,r.a.createElement(f.a,{to:"/history"},r.a.createElement("i",{className:"material-icons"},"insert_chart_outlined"))),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},r.a.createElement("i",{className:"material-icons"},"logout"))),r.a.createElement("li",null,r.a.createElement(p.a,{to:"/profile",className:"btn btn-floating blue lighten-2 btn-flat white-text"},a.initial))))})),v=function(){return r.a.createElement("div",null,r.a.createElement("ul",{id:"nav-desktop",className:"right hide-on-small-only"},r.a.createElement("li",null,r.a.createElement(f.a,{to:"/"},"\uc804\uad11\ud310")),r.a.createElement("li",null,r.a.createElement(f.a,{to:"/signin"},"\ub85c\uadf8\uc778")),r.a.createElement("li",null,r.a.createElement(f.a,{to:"/signup"},"\ud68c\uc6d0\uac00\uc785"))),r.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-up"},r.a.createElement("li",null,r.a.createElement(f.a,{to:"/"},r.a.createElement("i",{className:"material-icons"},"dashboard"))),r.a.createElement("li",null,r.a.createElement(f.a,{to:"/signin"},"\ub85c\uadf8\uc778")),r.a.createElement("li",null,r.a.createElement(f.a,{to:"/signup"},"\ud68c\uc6d0\uac00\uc785"))))},N=Object(g.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){var a=e.auth,t=e.profile,n=a.uid?r.a.createElement(b,{profile:t}):r.a.createElement(v,null);return r.a.createElement("nav",{className:"nav wrapper blue darken-2 z-depth-0"},r.a.createElement("div",{className:"container"},r.a.createElement(p.a,{to:"/",className:"brand-logo left"},r.a.createElement("span",{className:"white-text"},"\ub7ad\ud0b9\ud551\ud401")),n))}),O=t(43),_=t.n(O),j=function(e){var a=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notifications"},a&&a.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("p",{className:"pink-text"},e.content),r.a.createElement("p",null,e.result),r.a.createElement("div",{className:"grey-text note-date"},_()(e.time.toDate()).fromNow()))})))))},w=t(14),y=t(9),C=(t(382),function(e){var a=e.users;return r.a.createElement("table",{className:"highlight centered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\uc21c\uc704"),r.a.createElement("th",null,"\uc774\ub984"),r.a.createElement("th",null,"\uad6c\uc7a5"),r.a.createElement("th",null,"\ub808\uc774\ud305"))),r.a.createElement("tbody",null,a&&a.map(function(e,a){return r.a.createElement("tr",{key:e.id},r.a.createElement("th",null,a+1),r.a.createElement("td",null,r.a.createElement(p.a,{to:"/history/"+e.id},e.name)),r.a.createElement("td",null,e.club),r.a.createElement("td",null,e.rating))})))}),S=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=(e.auth,e.notifications),t=e.users;return r.a.createElement("div",{className:"dashboard container"},r.a.createElement("h3",{className:"center-align"},"\uc804\uad11\ud310"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(C,{users:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(j,{notifications:a}))))}}]),a}(n.Component),k=Object(y.d)(Object(g.b)(function(e){return{auth:e.firebase.auth,notifications:e.firestore.ordered.notifications,users:e.firestore.ordered.users}}),Object(w.firestoreConnect)([{collection:"notifications",limit:5,orderBy:["time","desc"]},{collection:"users",orderBy:["rating","desc"]}]))(S),R=t(452),I=Object(y.d)(Object(g.b)(function(e,a){var t=a.match.params.id,n=e.firestore.data.games;return{game:n?n[t]:null,auth:e.firebase.auth,id:t}}),Object(w.firestoreConnect)([{collection:"games"}]))(function(e){var a=e.game,t=e.auth,n=e.id;return console.log(a),t.uid?a?r.a.createElement("div",{className:"container section game-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"card-title"},r.a.createElement("div",{className:"row center-align"},r.a.createElement("h3",{className:"col s5 m5 l5"},a.p1_score),r.a.createElement("h3",{className:"col s2 m2 l2"},":"),r.a.createElement("h3",{className:"col s5 m5 l5"},a.p2_score)),r.a.createElement("div",{className:"row center-align"},r.a.createElement("h6",{className:"col s5 m5 center-align"},a.p1_name),r.a.createElement("h6",{className:"col s2 m2 "}),r.a.createElement("h6",{className:"col s5 m5 center-align"},a.p2_name))),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"\uac8c\uc784\ubc88\ud638: ",n),r.a.createElement("div",{className:"grey-text left-align"},a.createdAt.toString()),r.a.createElement("div",null,"\ud0c1\uad6c\uc7a5 \uc704\uce58: ",a.location),r.a.createElement("div",null,"\uc2ec\ud310: ",a.referee_name),r.a.createElement("div",null,_()(a.createdAt.toDate()).calendar(),"\uc5d0 \uc0dd\uc131\ub428"))))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading project...")):r.a.createElement(R.a,{to:"/signin"})}),A=t(29),F=(t(198),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={email:"",password:""},t.handleChange=function(e){t.setState(Object(A.a)({},e.target.id,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.signIn(t.state)},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.authError;e.authErrorMessage;return e.auth.uid?r.a.createElement(R.a,{to:"/"}):r.a.createElement("div",{className:"signin container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("h5",{className:"grey-text text-darken-3 col s12"},"\ub85c\uadf8\uc778")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("label",{htmlFor:"email"},"\uc774\uba54\uc77c"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("label",{htmlFor:"password"},"\ud328\uc2a4\uc6cc\ub4dc"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("button",{className:"btn blue darken-2"},"\ub85c\uadf8\uc778"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"red-text right col s12"},a?r.a.createElement("p",null,a):null))))}}]),a}(n.Component)),x=Object(g.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(a){return e((t=a,function(e,a,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(t.email,t.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(a){e({type:"LOGIN_ERROR",err:a})})}));var t}}})(F),G=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={email:"",password:"",name:"",level:"",club:","},t.handleChange=function(e){t.setState(Object(A.a)({},e.target.id,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.signUp(t.state)},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.auth,t=e.authError;return a.uid?r.a.createElement(R.a,{to:"/"}):r.a.createElement("div",{className:"signup container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("h5",{className:"grey-text text-darken-3 col s12"},"\ud68c\uc6d0\uac00\uc785")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"name"},"\uc774\ub984"),r.a.createElement("input",{type:"text",id:"name",onChange:this.handleChange}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"\uc774\uba54\uc77c"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"\ud328\uc2a4\uc6cc\ub4dc"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"level"},"\ubd80\uc218"),r.a.createElement("input",{type:"number",id:"level",onChange:this.handleChange}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"club"},"\ud0c1\uad6c\uc7a5"),r.a.createElement("input",{type:"text",id:"club",onChange:this.handleChange}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn blue darken-2"},"\ud68c\uc6d0\uac00\uc785"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null))))}}]),a}(n.Component),U=Object(g.b)(function(e){return{auth:e.firebase.auth,authError:e.auth.authError}},function(e){return{signUp:function(a){return e(function(e){return function(a,t,n){var r=n.getFirebase,l=n.getFirestore,c=r(),i=l();c.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(a){return i.collection("users").doc(a.user.uid).set({name:e.name,level:e.level,club:e.club,initial:e.name[1]})}).then(function(){a({type:"SIGNUP_SUCCESS"})}).catch(function(e){a({type:"SIGNUP_ERROR",err:e})})}}(a))}}})(G),L=t(37),P=(t(199),function(e){var a=e.game;return r.a.createElement("div",{className:"card  game-summary z-depth-1"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("div",{className:"card-title"},r.a.createElement("div",{className:"row center-align"},r.a.createElement("h3",{className:"col s5 m3 offset-m2 "},a.p1_score),r.a.createElement("h3",{className:"col s2 m0 "},":"),r.a.createElement("h3",{className:"col s5 m3"},a.p2_score)),r.a.createElement("div",{className:"row center-align"},r.a.createElement("h6",{className:"col s5 m3 offset-m2 center-align"},a.p1_name),r.a.createElement("h6",{className:"col s2 m0 "}),r.a.createElement("h6",{className:"col s5 m3 center-align"},a.p2_name))),r.a.createElement("p",{className:"center-align"},a.referee_name,"\uc5d0 \uc758\ud574 \uc0dd\uc131\ub428"),r.a.createElement("p",{className:"grey-text center-align"},_()(a.createdAt.toDate()).calendar())))}),D=t(134),M=t.n(D),z=(t(386),[]),B=function(e,a){setTimeout(function(){a(V(e))},1e3),console.log("loadOption1 is called")},T=function(e,a){setTimeout(function(){a(V(e))},1e3),console.log("loadOption2 is called")},V=function(e){return z.filter(function(a){return a.label.includes(e)})},W=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={p1_name:"",p1_score:0,p1_id:"",p2_name:"",p2_score:0,p2_id:"",referee:"",date:"",location:"",selectedOption1:null,selectedOption2:null,inputValue:"",users:[]},t.handleChange=function(e){t.setState(Object(A.a)({},e.target.id,e.target.value)),console.log("submit",t.state)},t.handleChange1=function(e){console.log(e),t.setState({p1_name:e.label,p1_id:e.value})},t.handleChange2=function(e){t.setState({p2_name:e.label,p2_id:e.value})},t.handleSubmit=function(e){e.preventDefault(),console.log(t.state),t.props.createGame(t.state),t.props.history.push("/")},t.handleInputChange1=function(e){return t.setState({inputValue:e}),e},t.handleInputChange2=function(e){return t.setState({inputValue:e}),e},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.auth,t=e.users;if(null!=t){for(;z.length>0;)z.pop();t.forEach(function(e){z.push({value:e.id,label:"".concat(e.name,"(").concat(e.rating,")")})})}return a.uid?r.a.createElement("div",{className:"container create-game"},r.a.createElement("h3",{className:"center-align"},"\uacbd\uae30 \uae30\ub85d"),r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("div",{className:"row center-align valign-wrapper"},r.a.createElement("div",{className:"input-field col s5 m5 l5"},r.a.createElement("select",{id:"p1_score",className:"browser-default",onChange:this.handleChange},r.a.createElement("option",{value:"0",defaultValue:!0},"0"),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"))),r.a.createElement("h3",{className:"col s2 m2 l2"},":"),r.a.createElement("div",{className:"input-field col s5 m5 l5"},r.a.createElement("select",{id:"p2_score",className:"browser-default",onChange:this.handleChange},r.a.createElement("option",{value:"0",defaultValue:!0},"0"),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3")))),r.a.createElement("div",{className:"row center-align"},r.a.createElement("div",{className:"input-field col s5 m5 center-align"},r.a.createElement("label",{htmlFor:"p1_name"},"player1"),r.a.createElement(M.a,{loadOptions:B,defaultOptions:!0,cacheOptions:!0,onInputChange:this.handleInputChange1,onChange:this.handleChange1,isSearchable:!0})),r.a.createElement("h6",{className:"col s2 m2 "}),r.a.createElement("div",{className:"input-field col s5 m5 center-align"},r.a.createElement("label",{htmlFor:"p2_name"},"player2"),r.a.createElement(M.a,{loadOptions:T,cacheOptions:!0,defaultOptions:!0,onInputChange:this.handleInputChange2,onChange:this.handleChange2,isSearchable:!0}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field center-align col s12"},r.a.createElement("button",{className:"btn red lighten-3"},"\ud655\uc778"))))):r.a.createElement(R.a,{to:"/signin"})}}]),a}(n.Component),Y=Object(y.d)(Object(g.b)(function(e){return{auth:e.firebase.auth,users:e.firestore.ordered.users}},function(e){return{createGame:function(a){return e(function(e){return function(a,t,n){n.getFirebase;var r=(0,n.getFirestore)(),l=t().firebase.profile,c=t().firebase.auth.uid;r.collection("games").add(Object(L.a)({},e,{whowin:!1,referee_id:c,referee_name:l.name,p1_id:e.p1_id,p2_id:e.p2_id,createdAt:new Date})).then(function(){a({type:"CREATE_GAME",game:e})}).catch(function(e){a({type:"CREATE_GAME_ERROR",err:e})})}}(a))}}}),Object(w.firestoreConnect)([{collection:"users",orderBy:["name","asc"]}]))(W),J=function(e){var a=e.games;return r.a.createElement("div",{className:"game-list section"},a&&a.map(function(e){return r.a.createElement(p.a,{to:"/game/"+e.id,key:e.id},r.a.createElement(P,{game:e}))}))},q=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.auth;if(!e.uid)return r.a.createElement(R.a,{to:"/signin"});var a=this.props,t=a.user_id,n=a.games;if(console.log(n),console.log(t),void 0==t&&(t=e.uid),void 0!=n)var l=n.filter(function(e){return e.p1_id==t||e.p2_id==t});return r.a.createElement("div",{className:"history container"},r.a.createElement(J,{games:l}))}}]),a}(n.Component),K=Object(y.d)(Object(g.b)(function(e,a){var t=a.match.params.id;return{games:e.firestore.ordered.games,auth:e.firebase.auth,user_id:t}}),Object(w.firestoreConnect)([{collection:"games",orderBy:["createdAt","desc"]}]))(q),$=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(N,null),r.a.createElement(h.a,null,r.a.createElement(E.a,{exact:!0,path:"/",component:k}),r.a.createElement(E.a,{path:"/game/:id",component:I}),r.a.createElement(E.a,{path:"/signin",component:x}),r.a.createElement(E.a,{path:"/signup",component:U}),r.a.createElement(E.a,{path:"/create",component:Y}),r.a.createElement(E.a,{path:"/history/:id",component:K}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H={authError:null},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOGIN_ERROR":return Object(L.a)({},e,{authError:"Login failed",authErrorMessage:a.err});case"LOGIN_SUCCESS":return console.log("login success"),Object(L.a)({},e,{authError:null,authErrorMessage:null});case"LOGOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(L.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(L.a)({},e,{authError:a.err.message});default:return e}},X={games:[{id:1,p1_score:3,p2_score:2,p1_name:"\uae40\uc601\uc8fc",p2_name:"\ubd95\uc5b4\ube75"},{id:2,p1_score:3,p2_score:0,p1_name:"\uace0\uad6c\ub9c8",p2_name:"\uac10\uc790"},{id:3,p1_score:2,p2_score:3,p1_name:"\uac10\uc790",p2_name:"\uc624\uc774"},{id:4,p1_score:1,p2_score:3,p1_name:"\ubc30\ucd94",p2_name:"\ub2f9\uadfc"}]},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X;switch((arguments.length>1?arguments[1]:void 0).type){case"CREATE_GAME":case"CREATE_GAME_ERROR":default:return e}},ee=t(58),ae=Object(y.c)({auth:Q,game:Z,firestore:ee.firestoreReducer,firebase:w.firebaseReducer}),te=t(217),ne=t(85),re=t.n(ne);t(441),t(446);re.a.initializeApp({apiKey:"AIzaSyAlP6zYhvjzPIGsj2FYeYvLMw5D3IoqBMo",authDomain:"react-rankpong.firebaseapp.com",databaseURL:"https://react-rankpong.firebaseio.com",projectId:"react-rankpong",storageBucket:"react-rankpong.appspot.com",messagingSenderId:"271586261523"}),re.a.firestore().settings({timestampsInSnapshots:!0});var le=re.a,ce=Object(y.e)(ae,Object(y.d)(Object(y.a)(te.a.withExtraArgument({getFirebase:w.getFirebase,getFirestore:ee.getFirestore})),Object(ee.reduxFirestore)(le),Object(w.reactReduxFirebase)(le,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));ce.firebaseAuthIsReady.then(function(){c.a.render(r.a.createElement(g.a,{store:ce},r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})})}},[[219,2,1]]]);
//# sourceMappingURL=main.48ed7977.chunk.js.map