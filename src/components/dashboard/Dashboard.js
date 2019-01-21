import React, {Component} from 'react'
import Notifications from './Notifications'
// app.js에 store객체로 저장된 store리덕스에 접근하기 위해서 필요한 connect 함수
// Dashboard에서 데이터에 접근해서 gameList에 뿌려줘야 한다. 왜냐하면 list를 뿌려주는 것은 클래스 컴포넌트가 아니고 함수형이기 때문이다. 복잡한건 클래스 컴포넌트에서 모두 해야한다.
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import TotalRankings from '../rankings/TotalRanking';
// 데이터를 가져오려면 Async(비동기적 방식)으로 데이터베이스에 접근해야한다. 그렇게 하기 위해서는 컴포넌트의 생명주기를 적절히 이용하여 네트워크로 인한 데이터 로딩시간을 적절하게 줄일 필요가 있다.


class Dashboard extends  Component {
    render(){

        const { auth, notifications,users} = this.props;
        // route guarding
        //if(!auth.uid) return <Redirect to='/signin'/>

        return(
        <div className="dashboard container">
            <h3 className='center-align'>전광판</h3>
            <div className="row">
                <div className="col s12 m6">
                    <TotalRankings users={users}/>
                </div> 
                <div className="col s12 m5 offset-m1">
                    <Notifications notifications={notifications}/>
                </div>
            </div>
        </div>
        )}

}
// store 리덕스에 접근해서 이를 Dashboard에 props로 넘겨주기위해 connect의 인자로 필요한 함수.(이름도 미리 정해져 있음)
const mapStateToProps = (state) =>{
    //여기서 state는 redux의 state이다.
    //console.log(state); state객체에는 redux에 등록된 reducer들과 그 상태가 들어있음.

    return{
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications,
        users: state.firestore.ordered.users,
        
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        // 어떤 collection을 연결할지 설정        
        {collection: 'notifications', limit:5, orderBy:['time','desc']},
        {collection: 'users', orderBy:['rating','desc']},
    ])
)(Dashboard);