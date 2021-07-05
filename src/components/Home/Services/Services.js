import React, { useEffect, useState } from 'react';
import Watch from '../../../images/product-8.jpg';
import watch2 from '../../../images/product-9.jpg';
import Show1 from '../../../images/product-10.jpg';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import { Link } from 'react-router-dom';

// const serviceData = [
//     {
//         name: 'Watch',
//         image: Watch
//     },
//     {
//         name: 'watch2',
//         image: watch2
//     },
//     {
//         name: 'Show1',
//         image: Show1
//     }
// ]


const Services = () => {
    const [productData, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <section>
            <div className="text-center mt-5">
                <h5 style={{ color: '#1cc7c1' }}>OUR PRODUCTS</h5>
                <h2 style={{ color: '#3a4256' }}>Demo Auction Products</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-75 mt-5 pt-5">
                    {
                        productData.map(product => <ServiceDetails product={product}></ServiceDetails>)
                    }
                </div>

            </div>
            <div className="d-flex justify-content-center">
                <Link to="/products" className="btn btn-brand">Explore more</Link>
            </div>

        </section>
    );
};

export default Services;