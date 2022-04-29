import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Suppliers from '../Suppliers/Suppliers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <Products></Products>
            <div className='mt-4'>
               
                <Suppliers></Suppliers>

            </div>
        </div>
    );
};

export default Home;