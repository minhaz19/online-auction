import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login/Login';
import AllBookings from './components/Admin/AllBookings/AllBookings';
import Admin from './components/Admin/Admin/Admin';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
     <Router>
       <Switch>
       <PrivateRoute path="/products">
            <Appointment></Appointment>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
         <Route exact path="/">
            <Home></Home>
         </Route>
       </Switch>
     </Router>
     </UserContext.Provider>
  );
}

export default App;
