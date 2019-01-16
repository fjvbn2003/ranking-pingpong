import React from 'react'

const GameSummary = ()=>{
    return(
        <div className="card z-depth-0 game-summary">
                <div className="card-content grey-text text-darken-3">
                    <div className="card-title">
                        <div className="row center-align">
                            <h3 className="col s5 m3 offset-m2 ">3</h3>
                            <h3 className="col s2 m0 ">:</h3>                 
                            <h3 className="col s5 m3">2</h3>
                        </div>
                        <div className="row center-align">
                            <h6 className="col s5 m3 offset-m2 center-align">김영주</h6>
                            <h6 className="col s2 m0 "></h6>
                            <h6 className="col s5 m3 center-align">김순태</h6>   
                        </div>
                    </div>        
                    <p className='grey-text center-align'>2019년 1월 17일, 7:56 AM</p>
                </div>
        </div>
    )
    
}
export  default GameSummary;