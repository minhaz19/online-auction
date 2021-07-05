import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTimes } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../../App';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const BiddingForm = ({ modalIsOpen, closeModal, product }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { imageURL, name, Description, price, time } = product;
    const { register, handleSubmit, errors } = useForm();
    // const {currentBid, setCurrentBid} = useState([])

    // const bidchange = e => {
    //     console.log(e.target.value);
    // }
    // let bidC = document.getElementById("bidC");
    // console.log(bidC);
    const onSubmit = (data) => {
        console.log(data.currentBid);
        const bidDetails = {
            ...loggedInUser, 
            products: product, 
            biddingTime: new Date(), 
            currentBid: data.currentBid }

        console.log(bidDetails)

        fetch('http://localhost:5000/bids', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(bidDetails)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                // closeModal();
                // alert('Appointment created successfully.');
            }
        })

    }

    useEffect(() => {
        fetch('http://localhost:5000/bids')
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err=> console.log(err))
    }, [])

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                
                <FontAwesomeIcon icon={faTimes} style={{cursor:"pointer"}} onClick={closeModal}/>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div class="card mb-3" >
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={imageURL} style={{width: "70%", height:"100%"}} class=" img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">{name}</h5>
                                    <p class="card-text">{Description}</p>
                                    <p class="card-text">Price: {price}</p>
                                    <input type="number"  className="bid form-control" name="currentBid" placeholder="New Bid"/>
                                    <p class="card-text text-muted">End time: {time}</p>
                                    <input type="submit" className="btn btn-brand"/>

                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default BiddingForm;