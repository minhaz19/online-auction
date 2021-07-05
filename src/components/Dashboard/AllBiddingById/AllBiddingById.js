import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const AllBiddingById = ({ books }) => {
    const {name, Description} = books.products;
    return (
        <div className="row">
            <div className="col-md-4">
                <div class="card" style={{ width: "18rem" }}>
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{Description}</p>
                        <p class="btn btn-brand">status</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBiddingById;