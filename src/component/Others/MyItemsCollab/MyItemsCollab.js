import React from 'react';

const MyItemsCollab = ({myproduct,handleUserDelete}) => {
    const { name, _id, price, img, description, quantity, supplier } = myproduct
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
                <div className="card-footer d-flex justify-content-between">
                    

                    <button onClick={() => handleUserDelete(_id)} className='btn btn-info '> Delete Item</button>

                </div>
            </div>
            
        </div>
    );
};

export default MyItemsCollab;