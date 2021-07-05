import React from 'react';
import { Route, Switch } from 'react-router';
import AllBiddingById from '../AllBiddingById/AllBiddingById';
import BiddingList from '../BiddingList/BiddingList';
import Book from '../Book/Book';
import AddProduct from '../AddProduct/AddProduct'
import UserCustomerSideBar from '../UserCustomerSidebar/UserCustomerSideBar';
import Review from '../Review/Review';

const Dashboard = () => {
    return (
        <div>
            <UserCustomerSideBar></UserCustomerSideBar>
            <Switch>
                <Route path="/dashBoard/book">
                    <Book></Book>
                </Route>
                <Route path="/dashBoard/biddingList">
                    <BiddingList></BiddingList>
                    {/* <AllBiddingById></AllBiddingById> */}
                </Route>
                <Route path="/dashBoard/addProduct">
                    <AddProduct></AddProduct>
                </Route>
                <Route path="/dashBoard/review">
                    <Review></Review>
                </Route>
            </Switch>
        </div>
    );
};

export default Dashboard;