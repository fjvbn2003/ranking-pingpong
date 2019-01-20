import React, {Component} from 'react'
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authActions'
import {Redirect} from 'react-router-dom'
import './SignIn.css'
class SignIn extends Component {

    state={
        email:'',
        password:'',

    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.signIn(this.state)
    }

    render(){
        const {authError,authErrorMessage,auth} = this.props;
        if(auth.uid) return <Redirect to='/'/>
        //console.log(authErrorMessage);

        return(
            <div className="signin container">
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <h5 className="grey-text text-darken-3 col s12">로그인</h5>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor="email">이메일</label>
                            <input type="email" id="email" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor="password">패스워드</label>
                            <input type="password" id="password" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <button className="btn red lighten-3">로그인</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="red-text right col s12">
                            {authError ? <p>{authError}</p>:null}
                        </div>
                    </div>
                        

                </form>
            </div>
        )
    }
}
// auth state에 접근하기 위한 코드
const mapStateToProps = (state) =>{
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth

    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signIn: (creds)=>dispatch(signIn(creds)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);