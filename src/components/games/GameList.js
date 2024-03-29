import React from 'react'
import GameSummary from './GameSummary'
import {Link} from 'react-router-dom'
import './GameList.css';
// Dashboard에서 전달된 games 데이터를 받아온다.
const GameList = ({games}) =>{
  
        return(
            <div className="game-list section">
    
                {/* 배열을 순회하면서 맵핑시킨다. */}
                {games && games.map(game=>{
                    return (
                        <Link to={'/game/'+game.id} key={game.id}>
                            <GameSummary game={game} />
                        </Link>
                    )
                })}
            </div>
        )
    

}

export default GameList;