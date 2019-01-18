import React from 'react'
import './GameList.css';

const GameSummary = ({game})=>{
    return(
        <div className="card z-depth-0 game-summary">
                <div className="card-content grey-text text-darken-3">
                    <div className="card-title">
                        <div className="row center-align">
                            <h3 className="col s5 m3 offset-m2 ">{game.p1_score}</h3>
                            <h3 className="col s2 m0 ">:</h3>                 
                            <h3 className="col s5 m3">{game.p2_score}</h3>
                        </div>
                        <div className="row center-align">
                            <h6 className="col s5 m3 offset-m2 center-align">{game.p1_name}</h6>
                            <h6 className="col s2 m0 "></h6>
                            <h6 className="col s5 m3 center-align">{game.p2_name}</h6>   
                        </div>
                    </div>        
                    <p className='grey-text center-align'>{game.createdAt.toString()}</p>
                </div>
        </div>
    )
    
}
export  default GameSummary;