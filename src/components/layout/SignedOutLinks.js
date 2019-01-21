import React from 'react'
import {NavLink} from 'react-router-dom'
const SignedOutLinks = () =>{
    return(
        <div>
            <ul id="nav-desktop" className="right hide-on-small-only">
                <li><NavLink to='/'>전광판</NavLink></li>
                <li><NavLink to='/signin'>로그인</NavLink></li>
                <li><NavLink to='/signup'>회원가입</NavLink></li>

            </ul>
            <ul id="nav-mobile" className="right hide-on-med-and-up">
                <li><NavLink to='/'><i className="material-icons">dashboard</i></NavLink></li>
                <li><NavLink to='/signin'>로그인</NavLink></li>
                <li><NavLink to='/signup'>회원가입</NavLink></li>

            </ul>
        </div>
    )
}

export default SignedOutLinks;