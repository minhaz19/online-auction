import React, { useState } from 'react';

const MakeAdmin = () => {
    const [info, setInfo] = useState({})

    const handleBlur = (e) => {
        const email = e.target.value;
        console.log(email);
        setInfo(email);
    }

    const handleSubmit = () => {
        fetch('http://localhost:5000/admin/makeAdmin', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({ info })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert("Result placed Successfully");
            })
    }
    return (
        <section className="row">
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add an Admin</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Admin Email</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="email" placeholder="Enter email" required />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default MakeAdmin;