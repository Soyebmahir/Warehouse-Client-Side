import React from 'react';
import Banner from '../Banner/Banner';
import Motivation from '../Motivation/Motivation';
import Products from '../Products/Products';
import Suppliers from '../Suppliers/Suppliers';

const Home = () => {
    return (
        <div>
            <Motivation></Motivation>
            <Banner></Banner>
            <Products></Products>
            <div className='mt-4'>
               
                <Suppliers></Suppliers>

            </div>

        </div>
    );
};

export default Home;