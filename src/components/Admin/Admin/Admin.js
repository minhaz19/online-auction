import React from 'react';
import { Route, Router, Switch } from 'react-router';
import AllBookings from '../AllBookings/AllBookings';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';
import Sidebar from '../Sidebar/Sidebar';

const Admin = () => {
    return (
       <div>
           <Sidebar></Sidebar>
           <Switch>
               <Route exact path="/admin/allBookings">
                    <AllBookings></AllBookings>
               </Route>
               <Route path="/admin/manageProducts">
                   <ManageProducts></ManageProducts>
               </Route>
               <Route path="/admin/makeAdmin">
                   <MakeAdmin></MakeAdmin>
               </Route>
           </Switch>
       </div>
    );
};

export default Admin;