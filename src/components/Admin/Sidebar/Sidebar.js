import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faCartPlus, faList, faCommentDots, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-white">
                        <h5><span>Home</span></h5>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/allBookings" className="text-white">
                        <FontAwesomeIcon icon={faList} /> <span>All Bidding List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/manageProducts" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Manage Products</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/makeAdmin" className="text-white">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;