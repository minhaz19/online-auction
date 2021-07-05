import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faList, faCommentDots, faPlus } from '@fortawesome/free-solid-svg-icons';

const UserCustomerSideBar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-white">
                        <h5><span>Home</span></h5>
                    </Link>
                </li>
                <li>
                    <Link to= "/dashBoard/book" className="text-white">
                        <FontAwesomeIcon icon={faCartPlus}/> <span>Book</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashBoard/biddingList" className="text-white">
                        <FontAwesomeIcon icon={faList}/><span>Bidding List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashBoard/addProduct" className="text-white">
                        <FontAwesomeIcon icon={faPlus} /><span>addProduct</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashBoard/Review" className="text-white">
                        <FontAwesomeIcon icon={faCommentDots} /><span>Review</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default UserCustomerSideBar;