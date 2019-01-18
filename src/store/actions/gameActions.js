import GameSummary from "../../components/games/GameSummary";

// Normal Action Creator
/*export const createGame = (game) =>{
    return{
        type: 'ADD_GAME',
        game: game,
    }
}*/
//using thunk
export const createGame = (game) =>{
    return (dispatch, getState,{getFirebase, getFirestore})=>{
        //make async call to database
        const firestore = getFirestore();
        //async task
        firestore.collection('games').add({
            ...game,
            whowin: false,
            referee_id: 'fjvbn2003',
            p1_id : game.p1_name,
            p2_id : game.p2_name,
            createdAt: new Date(), 
        }).then(() =>{
            dispatch({ type:'CREATE_GAME',game,});
        }).catch((err)=>{
            dispatch({type:'CREATE_GAME_ERROR', err})
        });
        
    }
}