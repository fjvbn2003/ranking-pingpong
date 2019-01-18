import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './store/reducers/rootReducer'
// store 객체를 App.js에 전달해주기 위해서 react-redux의 Provider 라는 glue 객체
import {Provider} from 'react-redux'
//redux thunk는 dispatch를 하였을 때 비동기 방식으로 데이터를 가져온 뒤에 리듀서를 호출하기 위해 필요한 미들웨어 라이브러리이다.
import thunk from 'redux-thunk'

//create rootReducer
const store = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
