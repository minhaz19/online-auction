import React from 'react';
import Footer from '../../Shared/Footer/Footer'
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookData from '../BookData/BookData';

const Appointment = () => {
    return (
        <div>
            <AppointmentHeader></AppointmentHeader>
            <BookData></BookData>
            <Footer></Footer>
        </div>
    );
};
export default Appointment;