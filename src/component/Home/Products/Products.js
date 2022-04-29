import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data)
            })
    }, [])
    return (
        <div>

            <div className='container'>
                <h2 className='text-info text-center'>{products.length} products Available</h2>

                <div className=' row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                {
                    products.map((product) => <Product
                        key={product._id}
                        product={product}></Product>)
                }
            </div>

            </div>
        </div>
    );
};

export default Products;