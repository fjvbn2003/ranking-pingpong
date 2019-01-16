import React from 'react'
import {NavLink, Link} from 'react-router-dom'
const SignedOutLinks = () =>{
    return(
        <div>
            <ul id="nav-desktop" class="right hide-on-small-only">
                <li><NavLink to='/'>전광판</NavLink></li>
                <li><NavLink to='/'>랭킹</NavLink></li>
                <li><NavLink to='/'>로그인</NavLink></li>
                <li><NavLink to='/'>회원가입</NavLink></li>

            </ul>
            <ul id="nav-mobile" class="right hide-on-med-and-up">
                <li><NavLink to='/'><i class="material-icons">dashboard</i></NavLink></li>
                <li><NavLink to='/'><i class="material-icons">view_list</i></NavLink></li>
                <li><NavLink to='/'><i class="material-icons">input</i></NavLink></li>
                <li><NavLink to='/'>회원가입</NavLink></li>

            </ul>
        </div>
    )
}

export default SignedOutLinks;