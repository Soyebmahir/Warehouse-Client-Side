import React from 'react';
import { Link } from 'react-router-dom';
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
            <div className="card-footer d-block text-center">


                <button className='btn btn-info color-light mx-auto'><Link to='/manage' className='text-light text-center d-block text-decoration-none'>Manage Inventories</Link></button>
            </div>
            <div className='mt-4'>

                <Suppliers></Suppliers>

            </div>

        </div>
    );
};

export default Home;