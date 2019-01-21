import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'
import './SignedInLinks.css'

const SignedInLinks = (props) =>{
    const {profile} = props;
    return(
        <div>
            <ul id="nav-desktop" className="right hide-on-small-only">
                <li><NavLink to='/create'><i className="material-icons">add</i></NavLink></li>
                <li><NavLink to='/'>전광판</NavLink></li>
                <li><NavLink to='/history'>전적</NavLink></li>
                <li><a onClick={props.signOut}>로그아웃</a></li>
                <li><Link to='/profile' className='btn btn-floating red  lighten-3 btn-flat white-text'>{profile.initial}</Link></li>

                
            </ul>
            <ul id="nav-mobile" className="right hide-on-med-and-up">
                <li><NavLink to='/create'><i className="material-icons">add</i></NavLink></li>
                <li><NavLink to='/'><i className="material-icons">dashboard</i></NavLink></li>
                <li><NavLink to='/history'><i className="material-icons">assignment</i></NavLink></li>
                <li><a onClick={props.signOut}><i className="material-icons">logout</i></a></li>
                <li><Link to='/profile' className='btn btn-floating red lighten-3 btn-flat white-text'>{profile.initial}</Link></li>


            </ul>
        </div>
    )
}
const mapDispatchToProps = (dispatch) =>{
    return{
        signOut: () => dispatch(signOut())
    }
}

export default connect(null,mapDispatchToProps)(SignedInLinks);