import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class SignUp extends Component {

    state={
        email:'',
        password:'',
        name:'',
        level:'',
        club:','

    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        const {auth} = this.props;
        if(auth.uid) return <Redirect to='/'/>

        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">회원가입</h5>
                    <h3></h3>
                    <div className="input-field">
                        <label htmlFor="name">이름</label>
                        <input type="text" id="name" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">이메일</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">패스워드</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="level">부수</label>
                        <input type="number" id="level" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="club">탁구장</label>
                        <input type="text" id="club" onChange={this.handleChange}/>
                    </div>


                    <div className="input-field">
                        <button className="btn blue darken-4 z-depth-0">회원가입</button>
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
export default connect(mapStateToProps)(SignUp);