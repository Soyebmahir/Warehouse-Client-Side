import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import MyItemsCollab from '../MyItemsCollab/MyItemsCollab';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [myProducts, setMyProduct] = useState([]);
    useEffect(() => {

        const myAddedProducts = async () => {
            const email = user?.email
            const url = `https://hidden-reef-02087.herokuapp.com/ordered?email=${email}`
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setMyProduct(data)
        }
        myAddedProducts();

        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setMyProduct(data))


    }, [user])
    const handleUserDelete = id => {
        const allow = window.confirm('You dare to delete !');
        if (allow) {
            console.log('deleting user with id, ', id);
            const url = `https://hidden-reef-02087.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                        const remaining = myProducts.filter(user => user._id !== id);
                        setMyProduct(remaining);
                    }
                })
        }
    }
    return (
        <div>

            <div className='container'>
                <h1>Products those are Added by me :</h1>
                <h1>products {myProducts.length}</h1>

                <div className=' row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                    {
                        myProducts.map((myproduct) => <MyItemsCollab
                            key={myproduct._id}
                            handleUserDelete={handleUserDelete}
                            myproduct={myproduct}></MyItemsCollab>)
                    }
                </div>

            </div>
        </div>
    );
};

export default MyItems;