import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'

const SignedInLinks = (props) =>{
    return(
        <div>
            <ul id="nav-desktop" class="right hide-on-small-only">
                <li><NavLink to='/'>전광판</NavLink></li>
                <li><NavLink to='/'>랭킹</NavLink></li>
                <li><NavLink to='/'>전적</NavLink></li>
                <li><a onClick={props.signOut}>로그아웃</a></li>
                <li><Link to='/profile' className='btn btn-floating blue btn-flat white-text'>YJ</Link></li>

                
            </ul>
            <ul id="nav-mobile" class="right hide-on-med-and-up">
                <li><NavLink to='/'><i class="material-icons">dashboard</i></NavLink></li>
                <li><NavLink to='/'><i class="material-icons">view_list</i></NavLink></li>
                <li><NavLink to='/'><i class="material-icons">assignment</i></NavLink></li>
                <li><a onClick={props.signOut}><i class="material-icons">logout</i></a></li>
                <li><Link to='/profile' className='btn btn-floating blue btn-flat white-text'>YJ</Link></li>


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