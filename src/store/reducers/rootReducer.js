import authReducer from './authReducer'
import gameReducer from './gameReducer'
import {combineReducers} from 'redux'
// firestore와 redux를 동기화해주는 pre-made Reducer
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

// 여러개의 리듀서를 하나의 루트 리듀서로 만든다.
//firestore 리듀서는 store에 데이터가 바뀌면 자동으로 redux를 업데이트 한다.

const rootReducer = combineReducers({
    auth: authReducer,
    game: gameReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;