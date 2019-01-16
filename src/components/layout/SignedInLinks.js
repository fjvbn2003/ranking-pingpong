import React from 'react'
import {Link} from 'react-router-dom'
const SignedInLinks = () =>{
    return(
        <div>
            <Link to='/' className="brand-logo left">랭킹 핑퐁</Link>
            <ul id="nav-desktop" class="right hide-on-small-only">
                <li><a href="#">전광판</a></li>
                <li><a href="#">경기 기록</a></li>
                <li><a href="#">로그아웃</a></li>
            </ul>
            <ul id="nav-mobile" class="right hide-on-med-and-up">
                <li><a href="#"><i class="material-icons">dashboard</i></a></li>
                <li><a href="#"><i class="material-icons">history</i></a></li>
                <li><a href="#"><i class="material-icons">logout</i></a></li>
            </ul>
        </div>
    )
}

export default SignedInLinks;