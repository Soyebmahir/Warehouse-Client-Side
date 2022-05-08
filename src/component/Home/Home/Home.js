import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Others/Loading/Loading';
import Banner from '../Banner/Banner';
import Motivation from '../Motivation/Motivation';
import Products from '../Products/Products';
import Suppliers from '../Suppliers/Suppliers';

const Home = () => {
    const [dataAvailabe, setDataAvailabe]=useState(false)
    const [products, setProducts] = useState([])
   
    
    // console.log(products);
    
    useEffect(() => {
       
        fetch('https://hidden-reef-02087.herokuapp.com/product')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const limitedProduct =data.slice(0,6)
                setProducts(limitedProduct)
                setDataAvailabe(true)
            })
    }, [])

    if(!dataAvailabe){
        return <Loading></Loading>
    }
    return (
        <div>
            <Motivation></Motivation>
            <Banner></Banner>
            <Products setDataAvailabe={setDataAvailabe}></Products>
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