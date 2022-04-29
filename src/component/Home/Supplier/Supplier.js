import React from 'react';

const Supplier = ({info}) => {
    return (
        <div className='col gy-4 gx-2 shadow rounded p-3 mb-2 bg-body'>
        <div className="card shadow rounded mb-2 bg-body">
            
            <div className="card-body">
                <h5 className="card-title">{info.name}</h5>
                <p className="">Address : {info.address} </p>
                <p className="">COntact No. : {info.phone} </p>
            </div>
            {/* <div className="card-footer d-block text-center">
                <button onClick={() => handleStockUpdate(_id)} className='btn btn-info '> Stock Update</button>
            </div> */}
        </div>
    </div>
    );
};

export default Supplier;