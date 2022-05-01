import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ProductAgain from '../ProductAgain/ProductAgain';

const ManageInventory = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://hidden-reef-02087.herokuapp.com/product')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                
                setProducts(data)
            })
    }, [])
    const handleUserDelete = id =>{
        const allow = window.confirm('You dare to delete !');
        if(allow){
            console.log('deleting user with id, ', id);
            const url = `https://hidden-reef-02087.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    console.log('deleted');
                    const remaining = products.filter(user => user._id !== id);
                    setProducts(remaining);
                }
            })
        }
    }
    return (
        <div>

            <div className='container'>
                <h2 className='text-info text-center'>{products.length} products Available</h2>

                <div className=' row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                {
                    products.map((product) => <ProductAgain
                        key={product._id}
                        handleUserDelete={handleUserDelete}
                        // products={products}
                        product={product}></ProductAgain>)
                }
            </div>
            <div className="card-footer d-block text-center">
                <button className='btn btn-info color-light mx-auto'><Link to='/addItem' className='text-light text-center d-block text-decoration-none'>Add New Item</Link></button>
            </div>

            </div>
        </div>
    );
};

export default ManageInventory;