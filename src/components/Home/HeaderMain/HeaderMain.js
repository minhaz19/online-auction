import React from 'react';
import './HeaderMain.css';
import hammer from '../../../images/manAuction.png';
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    return (
        <main style={{height: "500px"}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 className="text-brand text-white">Auction for business and charity</h1>
                <p className="text-white">Online auctions are great for fundraising and bidding for charity. If you are looking for the most reputable online auction websites around the globe, you’ve come to the right place.</p>
                <h4 className="text-light">Want to bid?</h4>
                <Link to="/products" className="btn btn-brand text-white">Click Here</Link>
            </div>
            <div className="col-md-6">
                <img src={hammer} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;