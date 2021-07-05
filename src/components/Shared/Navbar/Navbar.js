import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const userName = loggedInUser.name;

    const [isAdmin, setIsAdmin] = useState(false);
     useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <nav className="navbar navbar-expand-lg navbar-light">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                    <Link className="nav-link me-5 text-white" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link me-5 text-white" to="/dashboard/biddingList">Dashboard</Link>
                </li>
                <li className="nav-item">
                
                    <Link className="nav-link me-5 text-white" to="/admin/allBookings"
                    style={{display: isAdmin ? 'block' : 'none'}}>Admin</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link me-5 text-white" to="#">Blogs</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link me-5 text-white" to="#">Contact Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link me-5 text-white" to="/login">{userName? 'Logout' : 'Login'}</Link>
                </li>
            </ul>
        </div>
    </nav>
    );
};

export default Navbar;