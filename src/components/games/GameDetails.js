import React from 'react'

const GameDetails = (props) =>{
    //console.log(props);
    const id = props.match.params.id;
    return (
        <div className="container section game-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <div className="card-title">
                        <div className="row center-align">
                            <h3 className="col s5 m5 l5">3</h3>
                            <h3 className="col s2 m2 l2">:</h3>                 
                            <h3 className="col s5 m5 l5">2</h3>
                        </div>
                        <div className="row center-align">
                            <h6 className="col s5 m5 center-align">김영주</h6>
                            <h6 className="col s2 m2 "></h6>
                            <h6 className="col s5 m5 center-align">김순태</h6>   
                        </div>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>게임번호: {id}</div>
                        <div className='grey-text left-align'>2019년 1월 17일, 7:56 AM</div>
                        <div>탁구장 위치: 경기도 고양시 항공대학로</div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default GameDetails;