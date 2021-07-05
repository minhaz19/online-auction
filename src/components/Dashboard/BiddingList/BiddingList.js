import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AllBiddingById from '../AllBiddingById/AllBiddingById';


const BiddingList = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/dashboard/biddingsByID')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const biddingList = orders.filter(order => order.email === loggedInUser.email)
    return (
        <div className="row">
            <div className="col-md-2">

            </div>
            <div className="col-md-10 p-4 pr-5 row" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
              {
                  biddingList.map(books => <AllBiddingById books={books}></AllBiddingById>)
              }
            </div>
        </div>
    );
};

export default BiddingList;