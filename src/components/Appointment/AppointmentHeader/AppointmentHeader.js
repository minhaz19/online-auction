import React from 'react';
import exclusive from '../../../images/exclusive.png';
import Navbar from '../../Shared/Navbar/Navbar';
const AppointmentHeader = () => {
    return (
       <div style={{ height: "500px"}} className="bg-info">
           <Navbar></Navbar>
            <main  className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: "rgba(58,66,86,255)" }}>Want to Bid? <br/>
                   Then shoot your shot...</h1>
            </div>
            <div className="col-md-6">
                <img style={{height:"400px"}} src={exclusive} alt="" className="img-fluid" />
            </div>
        </main>
       </div>
    );
};

export default AppointmentHeader;