import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const [productInfo,setProductInfo] =useState()
    const {id}=useParams();
    console.log(id);
    useEffect(()=>{
        const url =`http://localhost:5000/product/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setProductInfo(data)
        })

    },[]) 
    
    return (
        <div className='row'>
            <div className='col gy-4 gx-2 shadow rounded p-3 mb-2 bg-body'>
        <div className="card shadow rounded mb-2 bg-body">
            <img src={productInfo.img} style={{ "height": "300px" }} className=" w-100 card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{productInfo.name}</h5>
                <p className="">Price : {productInfo.price} BDT</p>
                <p className="">Quantity : {productInfo.quantity} </p>
                <p className="">Supplier : {productInfo.supplier} </p>
                <p className=""><small>{productInfo.description}</small></p>
            </div>
            {/* <div className="card-footer d-block text-center">
                <button onClick={() => handleStockUpdate(_id)} className='btn btn-info '> Stock Update</button>
            </div> */}
        </div>
    </div>
            
        </div>
    );
};

export default Inventory;