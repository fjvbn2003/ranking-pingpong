const initState = {
    authError: null
}

const authReducer = (state = initState, action) =>{

    switch(action.type){
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login failed',
                authErrorMessage: action.err
            }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return{
                ...state,
                authError: null,
                authErrorMessage: null
            }
        case 'LOGOUT_SUCCESS':{
            console.log('signout success');
            return state;
        }
        default:
            return state;        
    }

    
}

export default authReducer;