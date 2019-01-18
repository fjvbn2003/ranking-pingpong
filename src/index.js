import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './store/reducers/rootReducer'
// store 객체를 App.js에 전달해주기 위해서 react-redux의 Provider 라는 glue 객체
import {Provider} from 'react-redux'
//redux thunk는 dispatch를 하였을 때 비동기 방식으로 데이터를 가져온 뒤에 리듀서를 호출하기 위해 필요한 미들웨어 라이브러리이다.
import thunk from 'redux-thunk'
// redux-firestore는 firestore와 redux, react-redux-firebase는 firebase전체와 redux를 위한 라이브러리
import {reduxFirestore, getFirestore} from 'redux-firestore'
import {reactReduxFirebase,getFirebase} from 'react-redux-firebase'
import fbConfig from './config/fbConfig'


//create rootReducer, thunk에 extra 데이터로 getFirestore와 getFirebase를 전달
const store = createStore(rootReducer,
    //여러개의 enhancer를 묶기위한 compose 함수
    compose(
        //return enhancer
        applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
        // config file을 넣어주어서 actionCreator가 firebase와 저장소에 접근할 수 있도록 한다.
        reduxFirestore(fbConfig),
        // firebase가 인증을 완료했을 때 attach를 하여 렌더링을 하기 위해서 . attachAuthIsReady : ture 옵션을 넘겨준다. 
        reactReduxFirebase(fbConfig,{attachAuthIsReady:true})
        )
    );

// Don't render to the DOM until firebase is ready
store.firebaseAuthIsReady.then(()=>{
    ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('root'));

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();
    
}); 
