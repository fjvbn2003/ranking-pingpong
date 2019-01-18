const initState = {
    games:[
        {id:1, p1_score:3, p2_score:2, p1_name:'김영주', p2_name:'붕어빵'},
        {id:2, p1_score:3, p2_score:0, p1_name:'고구마', p2_name:'감자'},
        {id:3, p1_score:2, p2_score:3, p1_name:'감자', p2_name:'오이'},
        {id:4, p1_score:1, p2_score:3, p1_name:'배추', p2_name:'당근'},

    ]

}

const gameReducer = (state = initState, action) =>{
    switch(action.type){
        case 'CREATE_GAME':
            console.log('created game', action.game);
            return state;

        case 'CREATE_GAME_ERROR':
            console.log('create game error', action.err)
            return state
        default:
            return state;    
    }
    
}

export default gameReducer;