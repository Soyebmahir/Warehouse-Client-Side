import React, { useEffect, useState } from 'react';
import Supplier from '../Supplier/Supplier';

const Suppliers = () => {
    const [infos,setInfo]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/suppliers')
        .then(res=>res.json())
        .then(data=>setInfo(data))
    },[])
    return (
        <div>

            <div className='container'>
            <h1>Suppliers Details</h1>

                <div className=' row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                {
                    infos.map((info) => <Supplier
                        key={info._id}
                        info={info}></Supplier>)
                }
            </div>

            </div>
        </div>
    );
};

export default Suppliers;