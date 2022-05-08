import React from 'react';
import img1 from '../../../images/notfound.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notFound'>
            <img src={img1} alt='notfound'></img>
        </div>
    );
};

export default NotFound;