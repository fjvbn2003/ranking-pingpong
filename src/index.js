import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import rootReducer from './store/reducers/rootReducer'
// store 객체를 App.js에 전달해주기 위해서 react-redux의 Provider 라는 glue 객체
import {Provider} from 'react-redux'
//create rootReducer
const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
