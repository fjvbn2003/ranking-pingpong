import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
const GameDetails = (props) =>{

    const {game} = props;
    if(game){
        return (
            <div className="container section game-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <div className="card-title">
                            <div className="row center-align">
                                <h3 className="col s5 m5 l5">{game.p1_score}</h3>
                                <h3 className="col s2 m2 l2">:</h3>                 
                                <h3 className="col s5 m5 l5">{game.p2_score}</h3>
                            </div>
                            <div className="row center-align">
                                <h6 className="col s5 m5 center-align">{game.p1_name}</h6>
                                <h6 className="col s2 m2 "></h6>
                                <h6 className="col s5 m5 center-align">{game.p2_name}</h6>   
                            </div>
                        </div>
                        <div className="card-action grey lighten-4 grey-text">
                            <div>게임번호: {game.id}</div>
                            <div className='grey-text left-align'>{game.createdAt.toString()}</div>
                            <div>탁구장 위치: {game.location}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else{

        return(
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
    }
    

}
//ownProps를 이용하면 props에 접근이 가능하다.
const mapStateToProps = (state, ownProps) =>{
    const id =  ownProps.match.params.id;
    const games = state.firestore.data.games;
    const game = games? games[id] : null;
    return{
        game: game
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'games'}
    ])
)(GameDetails);