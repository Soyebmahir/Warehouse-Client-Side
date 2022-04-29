import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const  {name,  price, img, description,quantity,supplier}=product
    const navigate = useNavigate()

    const handleServiceDetails = (id) => {
        navigate(`/home/${id}`)

    }
    return (
        <div className='col gy-4 gx-2 shadow rounded p-3 mb-2 bg-body'>
        <div className="card shadow rounded mb-2 bg-body">
            <img src={img} style={{ "height": "300px" }} className=" w-100 card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="">Price : {price} BDT</p>
                <p className="">Quantity : {quantity} </p>
                <p className="">Supplier : {supplier} </p>
                <p className=""><small>{description}</small></p>
            </div>
            <div className="card-footer d-block text-center">
                <button onClick={() => handleServiceDetails()} className='btn btn-info '> Checkout</button>
            </div>
        </div>
    </div>
    );
};

export default Product;