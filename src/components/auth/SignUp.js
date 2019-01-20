import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {signUp} from '../../store/actions/authActions'
import './SignIn.css'
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
        //console.log(this.state);
        this.props.signUp(this.state);
    }

    render(){
        const {auth, authError} = this.props;
        if(auth.uid) return <Redirect to='/'/>

        return(
            <div className="signup container">
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <h5 className="grey-text text-darken-3 col s12">회원가입</h5>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <label htmlFor="name">이름</label>
                            <input type="text" id="name" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <label htmlFor="email">이메일</label>
                            <input type="email" id="email" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <label htmlFor="password">패스워드</label>
                            <input type="password" id="password" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <label htmlFor="level">부수</label>
                            <input type="number" id="level" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <label htmlFor="club">탁구장</label>
                            <input type="text" id="club" onChange={this.handleChange}/>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="input-field">
                            <button className="btn red lighten-3">회원가입</button>
                        </div>    
                    </div>
                    <div className="row">
                        <div className="red-text center">
                                {authError ? <p>{authError}</p>: null }
                        </div>
                    </div>
                    
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        auth: state.firebase.auth,
        authError: state.auth.authError

    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp);