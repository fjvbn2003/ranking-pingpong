(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(e,t,a){},199:function(e,t,a){},219:function(e,t,a){e.exports=a(448)},224:function(e,t,a){},230:function(e,t,a){},383:function(e,t,a){},386:function(e,t,a){},448:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(82),c=a.n(r),i=(a(224),a(15)),s=a(16),o=a(19),m=a(17),u=a(18),d=a(451),E=a(453),h=a(449),p=a(233),f=a(450),g=a(6),b=(a(230),Object(g.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"LOGOUT_SUCCESS"})})})}}})(function(e){var t=e.profile;return l.a.createElement("div",null,l.a.createElement("ul",{id:"nav-desktop",className:"right hide-on-small-only"},l.a.createElement("li",null,l.a.createElement(f.a,{to:"/create"},l.a.createElement("i",{className:"material-icons"},"add"))),l.a.createElement("li",null,l.a.createElement(f.a,{to:"/"},"\uc804\uad11\ud310")),l.a.createElement("li",null,l.a.createElement(f.a,{to:"/history"},"\uc804\uc801")),l.a.createElement("li",null,l.a.createElement("a",{onClick:e.signOut},"\ub85c\uadf8\uc544\uc6c3")),l.a.createElement("li",null,l.a.createElement(p.a,{to:"/profile",className:"btn btn-floating blue  lighten-2 btn-flat white-text"},t.initial))),l.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-up"},l.a.createElement("li",null,l.a.createElement(f.a,{to:"/create"},l.a.createElement("i",{className:"material-icons"},"add"))),l.a.createElement("li",null,l.a.createElement(f.a,{to:"/"},l.a.createElement("i",{className:"material-icons"},"dashboard"))),l.a.createElement("li",null,l.a.createElement(f.a,{to:"/history"},l.a.createElement("i",{className:"material-icons"},"assignment"))),l.a.createElement("li",null,l.a.createElement("a",{onClick:e.signOut},l.a.createElement("i",{className:"material-icons"},"logout"))),l.a.createElement("li",null,l.a.createElement(p.a,{to:"/profile",className:"btn btn-floating blue lighten-2 btn-flat white-text"},t.initial))))})),v=function(){return l.a.createElement("div",null,l.a.createElement("ul",{id:"nav-desktop",className:"right hide-on-small-only"},l.a.createElement("li",null,l.a.createElement(f.a,{to:"/"},"\uc804\uad11\ud310")),l.a.createElement("li",null,l.a.createElement(f.a,{to:"/signin"},"\ub85c\uadf8\uc778")),l.a.createElement("li",null,l.a.createElement(f.a,{to:"/signup"},"\ud68c\uc6d0\uac00\uc785"))),l.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-up"},l.a.createElement("li",null,l.a.createElement(f.a,{to:"/"},l.a.createElement("i",{className:"material-icons"},"dashboard"))),l.a.createElement("li",null,l.a.createElement(f.a,{to:"/signin"},"\ub85c\uadf8\uc778")),l.a.createElement("li",null,l.a.createElement(f.a,{to:"/signup"},"\ud68c\uc6d0\uac00\uc785"))))},N=Object(g.b)(function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){var t=e.auth,a=e.profile,n=t.uid?l.a.createElement(b,{profile:a}):l.a.createElement(v,null);return l.a.createElement("nav",{className:"nav wrapper blue darken-2 z-depth-0"},l.a.createElement("div",{className:"container"},l.a.createElement(p.a,{to:"/",className:"brand-logo left"},l.a.createElement("span",{className:"white-text"},"\ub7ad\ud0b9\ud551\ud401")),n))}),O=a(43),j=a.n(O),w=function(e){var t=e.notifications;return l.a.createElement("div",{className:"section"},l.a.createElement("div",{className:"card z-depth-0"},l.a.createElement("div",{className:"card-content"},l.a.createElement("span",{className:"card-title"},"Notifications"),l.a.createElement("ul",{className:"notifications"},t&&t.map(function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("p",{className:"pink-text"},e.content),l.a.createElement("p",null,e.result),l.a.createElement("div",{className:"grey-text note-date"},j()(e.time.toDate()).fromNow()))})))))},y=(a(136),function(e){var t=e.game;return l.a.createElement("div",{className:"card  game-summary z-depth-1"},l.a.createElement("div",{className:"card-content grey-text text-darken-3"},l.a.createElement("div",{className:"card-title"},l.a.createElement("div",{className:"row center-align"},l.a.createElement("h3",{className:"col s5 m3 offset-m2 "},t.p1_score),l.a.createElement("h3",{className:"col s2 m0 "},":"),l.a.createElement("h3",{className:"col s5 m3"},t.p2_score)),l.a.createElement("div",{className:"row center-align"},l.a.createElement("h6",{className:"col s5 m3 offset-m2 center-align"},t.p1_name),l.a.createElement("h6",{className:"col s2 m0 "}),l.a.createElement("h6",{className:"col s5 m3 center-align"},t.p2_name))),l.a.createElement("p",{className:"center-align"},t.referee_name,"\uc5d0 \uc758\ud574 \uc0dd\uc131\ub428"),l.a.createElement("p",{className:"grey-text center-align"},j()(t.createdAt.toDate()).calendar())))}),_=function(e){var t=e.games;return l.a.createElement("div",{className:"game-list section"},t&&t.map(function(e){return l.a.createElement(p.a,{to:"/game/"+e.id,key:e.id},l.a.createElement(y,{game:e}))}))},C=a(14),S=a(9),k=(a(383),function(){return l.a.createElement("table",{className:"highlight centered"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\uc21c\uc704"),l.a.createElement("th",null,"\uc774\ub984"),l.a.createElement("th",null,"\uad6c\uc7a5"),l.a.createElement("th",null,"\ub808\uc774\ud305"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"1"),l.a.createElement("td",null,"\uae40\uc601\uc8fc"),l.a.createElement("td",null,"\ud55c\uad6d\ud56d\uacf5\ub300"),l.a.createElement("td",null,"2500")),l.a.createElement("tr",null,l.a.createElement("th",null,"2"),l.a.createElement("td",null,"\uae40\uc601\uc8fc"),l.a.createElement("td",null,"\ud55c\uad6d\ud56d\uacf5\ub300"),l.a.createElement("td",null,"2500")),l.a.createElement("tr",null,l.a.createElement("th",null,"3"),l.a.createElement("td",null,"\uae40\uc601\uc8fc"),l.a.createElement("td",null,"\ud55c\uad6d\ud56d\uacf5\ub300"),l.a.createElement("td",null,"2500")),l.a.createElement("tr",null,l.a.createElement("th",null,"4"),l.a.createElement("td",null,"\uae40\uc601\uc8fc"),l.a.createElement("td",null,"\ud55c\uad6d\ud56d\uacf5\ub300"),l.a.createElement("td",null,"2500"))))}),R=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.auth,e.notifications);return l.a.createElement("div",{className:"dashboard container"},l.a.createElement("h3",{className:"center-align"},"\uc804\uad11\ud310"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m6"},l.a.createElement(k,null)),l.a.createElement("div",{className:"col s12 m5 offset-m1"},l.a.createElement(w,{notifications:t}))))}}]),t}(n.Component),I=Object(S.d)(Object(g.b)(function(e){return{auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}}),Object(C.firestoreConnect)([{collection:"notifications",limit:5,orderBy:["time","desc"]}]))(R),A=a(452),F=Object(S.d)(Object(g.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.games;return{game:n?n[a]:null,auth:e.firebase.auth,id:a}}),Object(C.firestoreConnect)([{collection:"games"}]))(function(e){var t=e.game,a=e.auth,n=e.id;return console.log(t),a.uid?t?l.a.createElement("div",{className:"container section game-details"},l.a.createElement("div",{className:"card z-depth-0"},l.a.createElement("div",{className:"card-content"},l.a.createElement("div",{className:"card-title"},l.a.createElement("div",{className:"row center-align"},l.a.createElement("h3",{className:"col s5 m5 l5"},t.p1_score),l.a.createElement("h3",{className:"col s2 m2 l2"},":"),l.a.createElement("h3",{className:"col s5 m5 l5"},t.p2_score)),l.a.createElement("div",{className:"row center-align"},l.a.createElement("h6",{className:"col s5 m5 center-align"},t.p1_name),l.a.createElement("h6",{className:"col s2 m2 "}),l.a.createElement("h6",{className:"col s5 m5 center-align"},t.p2_name))),l.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},l.a.createElement("div",null,"\uac8c\uc784\ubc88\ud638: ",n),l.a.createElement("div",{className:"grey-text left-align"},t.createdAt.toString()),l.a.createElement("div",null,"\ud0c1\uad6c\uc7a5 \uc704\uce58: ",t.location),l.a.createElement("div",null,"\uc2ec\ud310: ",t.referee_name),l.a.createElement("div",null,j()(t.createdAt.toDate()).calendar(),"\uc5d0 \uc0dd\uc131\ub428"))))):l.a.createElement("div",{className:"container center"},l.a.createElement("p",null,"Loading project...")):l.a.createElement(A.a,{to:"/signin"})}),x=a(29),G=(a(199),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(x.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;e.authErrorMessage;return e.auth.uid?l.a.createElement(A.a,{to:"/"}):l.a.createElement("div",{className:"signin container"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("h5",{className:"grey-text text-darken-3 col s12"},"\ub85c\uadf8\uc778")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("label",{htmlFor:"email"},"\uc774\uba54\uc77c"),l.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("label",{htmlFor:"password"},"\ud328\uc2a4\uc6cc\ub4dc"),l.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("button",{className:"btn blue darken-2"},"\ub85c\uadf8\uc778"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"red-text right col s12"},t?l.a.createElement("p",null,t):null))))}}]),t}(n.Component)),U=Object(g.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){e({type:"LOGIN_ERROR",err:t})})}));var a}}})(G),P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={email:"",password:"",name:"",level:"",club:","},a.handleChange=function(e){a.setState(Object(x.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?l.a.createElement(A.a,{to:"/"}):l.a.createElement("div",{className:"signup container"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("h5",{className:"grey-text text-darken-3 col s12"},"\ud68c\uc6d0\uac00\uc785")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"name"},"\uc774\ub984"),l.a.createElement("input",{type:"text",id:"name",onChange:this.handleChange}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"email"},"\uc774\uba54\uc77c"),l.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"password"},"\ud328\uc2a4\uc6cc\ub4dc"),l.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"level"},"\ubd80\uc218"),l.a.createElement("input",{type:"number",id:"level",onChange:this.handleChange}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"club"},"\ud0c1\uad6c\uc7a5"),l.a.createElement("input",{type:"text",id:"club",onChange:this.handleChange}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field"},l.a.createElement("button",{className:"btn blue darken-2"},"\ud68c\uc6d0\uac00\uc785"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"red-text center"},a?l.a.createElement("p",null,a):null))))}}]),t}(n.Component),L=Object(g.b)(function(e){return{auth:e.firebase.auth,authError:e.auth.authError}},function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var l=n.getFirebase,r=n.getFirestore,c=l(),i=r();c.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){return i.collection("users").doc(t.user.uid).set({name:e.name,level:e.level,club:e.club,initial:e.name[1]})}).then(function(){t({type:"SIGNUP_SUCCESS"})}).catch(function(e){t({type:"SIGNUP_ERROR",err:e})})}}(t))}}})(P),D=a(37),M=a(134),z=a.n(M),T=(a(386),!0),B=[],V=function(e,t){setTimeout(function(){t(Y(e))},1e3),console.log("loadOption1 is called")},W=function(e,t){setTimeout(function(){t(Y(e))},1e3),console.log("loadOption2 is called")},Y=function(e){return B.filter(function(t){return t.label.includes(e)})},J=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={p1_name:"",p1_score:0,p1_id:"",p2_name:"",p2_score:0,p2_id:"",referee:"",date:"",location:"",selectedOption1:null,selectedOption2:null,inputValue:""},a.handleChange=function(e){a.setState(Object(x.a)({},e.target.id,e.target.value)),console.log("submit",a.state)},a.handleChange1=function(e){console.log(e),a.setState({p1_name:e.label,p1_id:e.value})},a.handleChange2=function(e){a.setState({p2_name:e.label,p2_id:e.value})},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state),a.props.createGame(a.state),a.props.history.push("/")},a.handleInputChange1=function(e){return a.setState({inputValue:e}),e},a.handleInputChange2=function(e){return a.setState({inputValue:e}),e},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){console.log(e);var t=e.users;null!=t&&T&&(t.forEach(function(e){B.push({value:e.id,label:e.name})}),T=!1)}},{key:"render",value:function(){var e=this.props.auth,t=this.state;t.selectedOption1,t.selectedOption2;return e.uid?l.a.createElement("div",{className:"container create-game"},l.a.createElement("h3",{className:"center-align"},"\uacbd\uae30 \uae30\ub85d"),l.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},l.a.createElement("div",{className:"row center-align valign-wrapper"},l.a.createElement("div",{className:"input-field col s5 m5 l5"},l.a.createElement("select",{id:"p1_score",className:"browser-default",onChange:this.handleChange},l.a.createElement("option",{value:"0",defaultValue:!0},"0"),l.a.createElement("option",{value:"1"},"1"),l.a.createElement("option",{value:"2"},"2"),l.a.createElement("option",{value:"3"},"3"))),l.a.createElement("h3",{className:"col s2 m2 l2"},":"),l.a.createElement("div",{className:"input-field col s5 m5 l5"},l.a.createElement("select",{id:"p2_score",className:"browser-default",onChange:this.handleChange},l.a.createElement("option",{value:"0",defaultValue:!0},"0"),l.a.createElement("option",{value:"1"},"1"),l.a.createElement("option",{value:"2"},"2"),l.a.createElement("option",{value:"3"},"3")))),l.a.createElement("div",{className:"row center-align"},l.a.createElement("div",{className:"input-field col s5 m5 center-align"},l.a.createElement("label",{htmlFor:"p1_name"},"player1"),l.a.createElement(z.a,{loadOptions:V,defaultOptions:!0,cacheOptions:!0,onInputChange:this.handleInputChange1,onChange:this.handleChange1,isSearchable:!0})),l.a.createElement("h6",{className:"col s2 m2 "}),l.a.createElement("div",{className:"input-field col s5 m5 center-align"},l.a.createElement("label",{htmlFor:"p2_name"},"player2"),l.a.createElement(z.a,{loadOptions:W,cacheOptions:!0,defaultOptions:!0,onInputChange:this.handleInputChange2,onChange:this.handleChange2,isSearchable:!0}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field center-align col s12"},l.a.createElement("button",{className:"btn red lighten-3"},"\ud655\uc778"))))):l.a.createElement(A.a,{to:"/signin"})}}]),t}(n.Component),q=Object(S.d)(Object(g.b)(function(e){return{auth:e.firebase.auth,users:e.firestore.ordered.users}},function(e){return{createGame:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var l=(0,n.getFirestore)(),r=a().firebase.profile,c=a().firebase.auth.uid;l.collection("games").add(Object(D.a)({},e,{whowin:!1,referee_id:c,referee_name:r.name,p1_id:e.p1_id,p2_id:e.p2_id,createdAt:new Date})).then(function(){t({type:"CREATE_GAME",game:e})}).catch(function(e){t({type:"CREATE_GAME_ERROR",err:e})})}}(t))}}}),Object(C.firestoreConnect)([{collection:"users",orderBy:["name","desc"]}]))(J),K=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.games;return e.auth.uid?l.a.createElement("div",{className:"history container"},l.a.createElement(_,{games:t})):l.a.createElement(A.a,{to:"/signin"})}}]),t}(n.Component),$=Object(S.d)(Object(g.b)(function(e){return{games:e.firestore.ordered.games,auth:e.firebase.auth}}),Object(C.firestoreConnect)([{collection:"games",orderBy:["createdAt","desc"]}]))(K),H=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(N,null),l.a.createElement(E.a,null,l.a.createElement(h.a,{exact:!0,path:"/",component:I}),l.a.createElement(h.a,{path:"/game/:id",component:F}),l.a.createElement(h.a,{path:"/signin",component:U}),l.a.createElement(h.a,{path:"/signup",component:L}),l.a.createElement(h.a,{path:"/create",component:q}),l.a.createElement(h.a,{path:"/history",component:$}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q={authError:null},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return Object(D.a)({},e,{authError:"Login failed",authErrorMessage:t.err});case"LOGIN_SUCCESS":return console.log("login success"),Object(D.a)({},e,{authError:null,authErrorMessage:null});case"LOGOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(D.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(D.a)({},e,{authError:t.err.message});default:return e}},Z={games:[{id:1,p1_score:3,p2_score:2,p1_name:"\uae40\uc601\uc8fc",p2_name:"\ubd95\uc5b4\ube75"},{id:2,p1_score:3,p2_score:0,p1_name:"\uace0\uad6c\ub9c8",p2_name:"\uac10\uc790"},{id:3,p1_score:2,p2_score:3,p1_name:"\uac10\uc790",p2_name:"\uc624\uc774"},{id:4,p1_score:1,p2_score:3,p1_name:"\ubc30\ucd94",p2_name:"\ub2f9\uadfc"}]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z;switch((arguments.length>1?arguments[1]:void 0).type){case"CREATE_GAME":case"CREATE_GAME_ERROR":default:return e}},te=a(58),ae=Object(S.c)({auth:X,game:ee,firestore:te.firestoreReducer,firebase:C.firebaseReducer}),ne=a(217),le=a(85),re=a.n(le);a(441),a(446);re.a.initializeApp({apiKey:"AIzaSyAlP6zYhvjzPIGsj2FYeYvLMw5D3IoqBMo",authDomain:"react-rankpong.firebaseapp.com",databaseURL:"https://react-rankpong.firebaseio.com",projectId:"react-rankpong",storageBucket:"react-rankpong.appspot.com",messagingSenderId:"271586261523"}),re.a.firestore().settings({timestampsInSnapshots:!0});var ce=re.a,ie=Object(S.e)(ae,Object(S.d)(Object(S.a)(ne.a.withExtraArgument({getFirebase:C.getFirebase,getFirestore:te.getFirestore})),Object(te.reduxFirestore)(ce),Object(C.reactReduxFirebase)(ce,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));ie.firebaseAuthIsReady.then(function(){c.a.render(l.a.createElement(g.a,{store:ie},l.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})})}},[[219,2,1]]]);
//# sourceMappingURL=main.13409626.chunk.js.map