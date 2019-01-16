import React from 'react'
import GameSummary from './GameSummary'
import './GameList.css';

const GameList = () =>{
    return(
        <div className="game-list section">
            
            <GameSummary/>
            <GameSummary/>
            <GameSummary/>
        </div>
    )

}

export default GameList;