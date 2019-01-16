import React, {Component} from 'react'
import Notifications from './Notifications'
import GameList from '../games/GameList'
class Dashboard extends  Component {
    render(){
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
export default Dashboard;