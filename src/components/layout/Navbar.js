import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () =>{
    return(
        <nav className="nav wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo left">랭킹 핑퐁</Link>
                <ul id="nav-desktop" class="right hide-on-small-only">
                    <li><a href="#">Sass</a></li>
                    <li><a href="#">Components</a></li>
                    <li><a href="#">JavaScript</a></li>
                </ul>
                <ul id="nav-mobile" class="right hide-on-med-and-up">
                    <li><a href="#"><i class="material-icons">dashboard</i></a></li>
                    <li><a href="#"><i class="material-icons">input</i></a></li>
                    <li><a href="#"><i class="material-icons">logout</i></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;