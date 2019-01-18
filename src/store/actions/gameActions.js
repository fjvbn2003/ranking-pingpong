// Normal Action Creator
/*export const createGame = (game) =>{
    return{
        type: 'ADD_GAME',
        game: game,
    }
}*/

export const createGame = (game) =>{
    return (dispatch, getState,{getFirebase, getFirestore})=>{
        //make async call to database
        dispatch({
            type:'CREATE_GAME',
            game,
        })
    }
}