import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
const Navbar = () =>{
    return(
        <nav className="nav wrapper blue darken-4">
            <div className="container">
                <Link to='/' className="brand-logo left">랭킹 핑퐁</Link>
                <SignedInLinks/>
            </div>
        </nav>
    )
}

export default Navbar;