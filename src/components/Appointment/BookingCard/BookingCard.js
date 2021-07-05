import React, { useState } from 'react';
import BiddingForm from '../BiddingForm/BiddingForm';
import "./BookingCard.css"


const BookingCard = ({ product }) => {
  const { imageURL, name, Description, price, time } = product;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="col-md-4 mb-5">
        <div className="card-body text-center container" >
          <img src={imageURL} alt="Avatar" class="image" />
          <div className="overlay">
            <div className="text">
              <h3 className="card-title">{name}</h3>
              <p>{Description}</p>
              <button onClick={openModal} className="btn btn-brand text-uppercase">Bid</button>
              <BiddingForm modalIsOpen={modalIsOpen} product={product} closeModal={closeModal}></BiddingForm>
            </div>
          </div>
        </div>
    </div>

  );
};

export default BookingCard;