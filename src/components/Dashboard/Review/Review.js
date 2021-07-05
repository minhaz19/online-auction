import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit= (data) =>{
        const reviewData = {
            name: data.name,
            address: data.address,
            Description: data.Description,
            imageURL: imageURL
        }

        fetch("http://localhost:5000/dashBoard/Review",{
            method:"POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
         .then(res =>res.json())
         .then(data => console.log(data))
    }
    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '4127935498eb400a017ab8692f3d0665');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(res => setImageURL(res.data.data.display_url))
    }
    return (
        <div className="row">
            <div className="col-md-2">

            </div>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h3 className="text-secondary">Add a review</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <p>Email:</p>
                    <input className="form-control" name="name" value={loggedInUser.name} ref={register} />
                    <br />
                    <p>Address:</p>
                    <input className="form-control" name="address" placeholder="address" ref={register} />
                    <br />
                    <p>Review description:</p>
                    <input className="form-control" name="Description" placeholder="Review description" ref={register} />
                    <br />
                    <br />
                    <p>Upload your Image:</p>
                    <input type="file" name="imageFile" onChange={handleImageUpload} />
                    <br />
                    <br />
                    <input className="btn btn-brand text-white" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Review;