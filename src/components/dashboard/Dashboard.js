import React, {Component} from 'react'
import Notifications from './Notifications'
import GameList from '../games/GameList'
// app.js에 store객체로 저장된 store리덕스에 접근하기 위해서 필요한 connect 함수
// Dashboard에서 데이터에 접근해서 gameList에 뿌려줘야 한다. 왜냐하면 list를 뿌려주는 것은 클래스 컴포넌트가 아니고 함수형이기 때문이다. 복잡한건 클래스 컴포넌트에서 모두 해야한다.
import {connect} from 'react-redux'

class Dashboard extends  Component {
    render(){
        console.log(this.props);
        return(
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <GameList/>
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications/>
                </div>
            </div>
        </div>
        )}

}
// store 리덕스에 접근해서 이를 Dashboard에 props로 넘겨주기위해 connect의 인자로 필요한 함수.(이름도 미리 정해져 있음)
const mapStateToProps = (state) =>{
    return{
        // state는 root-reducer game은 game-reducer
        games: state.game.games
    }
}

export default connect(mapStateToProps)(Dashboard);