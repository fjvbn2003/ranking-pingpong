import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {connect} from 'react-redux'

const Navbar = (props) =>{
    const {auth} = props;
    //console.log(auth);
    const links = auth.uid ? <SignedInLinks/> :<SignedOutLinks/>;
    return(
        <nav className="nav wrapper blue darken-4">
            <div className="container">
                <Link to='/' className="brand-logo left">랭퐁</Link>
                {links}
            </div>
        </nav>
    )
}
const mapStateToProps = (state) =>{
    // console.log(state);
    return{
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(Navbar); 