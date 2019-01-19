import React, {Component} from 'react'
import {createGame} from '../../store/actions/gameActions'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class CreateGame extends Component {

    state={
        p1_name:'',
        p1_score:0,
        p2_name:'',
        p2_score:0,
        referee:'',
        date:'',
        location:'',

    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        //console.log(this.state);
        this.props.createGame(this.state);
        this.props.history.push('/');
    }

    render(){
        // Route Gaurding
        const {auth} = this.props;
        if(!auth.uid) return <Redirect to='/signin'/>

        return(
            <div className="container create-game">
                <h3 className='center-align'>경기 기록</h3>
                <form onSubmit={this.handleSubmit} className="white">
                        <div className="row center-align valign-wrapper">
                             <div className="input-field col s5 m5 l5">
                                <select id="p1_score" className="browser-default" onChange={this.handleChange}>
                                    <option value="0" defaultValue>0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                             </div>
                            
                            <h3 className="col s2 m2 l2">:</h3>                 
                            <div className="input-field col s5 m5 l5">
                                <select  id="p2_score" className="browser-default" onChange={this.handleChange}>
                                    <option value="0" defaultValue>0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                             </div>
                        </div>
                        <div className="row center-align">
                            <div className="input-field col s5 m5 center-align">
                                <label htmlFor="p1_name">player1</label>
                                <input type="text" id="p1_name" onChange={this.handleChange}/>
                            </div>
                            <h6 className="col s2 m2 "></h6>
                            <div className="input-field col s5 m5 center-align">
                                <label htmlFor="p2_name">player2</label>
                             <input type="text" id="p2_name" onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="input-field center-align">
                            <button className="btn blue darken-4 z-depth-0">확인</button>
                        </div>
                </form>
 
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        createGame: (game)=> dispatch(createGame(game))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateGame);