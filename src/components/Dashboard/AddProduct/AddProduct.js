import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const [imageURL, setImageURL] = useState(null);
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price: data.price,
            Description: data.Description,
            time: data.BiddingTime,
            imageURL: imageURL
        }
        console.log(eventData)
        const url = 'http://localhost:5000/dashBoard/addProduct';
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '4127935498eb400a017ab8692f3d0665');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(res => setImageURL(res.data.data.display_url))
    }

    return (
        <section className="row">
            <div className= "col-md-2">

            </div>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add a Product</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p>Product Title:</p>
                    <input className="form-control" name="name" placeholder="Product name" ref={register} />
                    <br />
                    <p>Price:</p>
                    <input className="form-control" name="price" placeholder="Product price" ref={register} />
                    <br />
                    <p>Description:</p>
                    <input className="form-control" name="Description" placeholder="Product description" ref={register} />
                    <br />
                    <p>Bidding Time:</p>
                    <input className="form-control" name="BiddingTime" placeholder="Bidding Time" ref={register} />
                    <br />
                    <p>Upload Product Image:</p>
                    <input type="file" name="imageFile" onChange={handleImageUpload} />
                    <br/>                   
                    <input className="btn btn-brand text-white mt-3" type="submit" />
                </form>
            </div>
        </section>
    );
};

export default AddProduct;