import React from 'react';

const ServiceDetails = ({product}) => {
    const {name, price, Description, imageURL} = product;
   
    return (
        <div class="col-md-4 text-center">
            <div class="card h-100">
                <img className="img" style={{height: '250px'}} src={imageURL} alt=""/>
                <div class="card-body">
                    <h5 className="mt-3 mb-3">{name}</h5>
                    <h5 className="mb-3">$60</h5>
                    {/* <p className="text-secondary">{}</p> */}
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;