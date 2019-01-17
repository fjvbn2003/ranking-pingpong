import authReducer from './authReducer'
import gameReducer from './gameReducer'

import {combineReducers} from 'redux'
// 두개의 리듀서를 하나의 루트 리듀서로 만든다.
const rootReducer = combineReducers({
    auth: authReducer,
    game: gameReducer,
});

export default rootReducer;