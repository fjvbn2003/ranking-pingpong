
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
        const settings = { timestampsInSnapshots: true};
        firestore.settings(settings);
        const profile = getState().firebase.profile;
        const referee_id = getState().firebase.auth.uid;
        //async task
        firestore.collection('games').add({
            ...game,
            whowin: game.p1_score> game.p2_score? true: false,
            referee_id: referee_id,
            referee_name: profile.name,
            p1_id : game.p1_id,
            p2_id : game.p2_id,
            p1_rating: game.p1_rating,
            p2_rating: game.p2_rating,
            createdAt: new Date(), 
        }).then(() =>{
            dispatch({ type:'CREATE_GAME',game,});
        }).catch((err)=>{
            dispatch({type:'CREATE_GAME_ERROR', err})
        });
        
    }
}