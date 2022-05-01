import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddNewItem = () => {
    const [user]=useAuthState(auth)

    const handleAddItem=(event)=>{
        event.preventDefault()
        const name =event.target.productName.value
        const price =event.target.price.value
        const quantity =event.target.quantity.value
        const img =event.target.img.value
        const email =event.target.email.value
        const description =event.target.description.value
        const supplier =event.target.supplierName.value
        
        const product ={name,price,email,quantity,img,description,supplier}
        console.log(product);

        fetch('https://hidden-reef-02087.herokuapp.com/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            alert('product added successfully');
            event.target.reset();
        })
    }
    return (
        <div className='container mx-auto  w-50  min-vh-100 '>
            <h1>Add a new Item to your Collection</h1>
            <form onSubmit={handleAddItem} className='mt-4 '>
                    <input className='w-75 mb-2 d-block mx-auto' style={{ height: "40px" }} type='text' name="productName" placeholder='Product Name'></input>
                    <br/>
                    <input className='w-75 d-block mx-auto' style={{ height: "40px" }} type='number' name="price" placeholder='Price'></input>
                    <br/>
                    <input className='w-75  d-block mx-auto' style={{ height: "40px" }} type='number' name="quantity" placeholder='Quantity'></input>
                    <br/>
                    <input className='w-75  d-block mx-auto' style={{ height: "40px" }} type='text' name="img" placeholder='Img Link'></input>
                    <br/>
                    <input className='w-75  d-block mx-auto' style={{ height: "40px" }} type='text' value={user.email} name="email" placeholder='Email'></input>
                    <br/>
                    <textarea className='w-75  d-block mx-auto'  type='text' name="description" placeholder='Description'></textarea>
                    <br/>
                    <input className='w-75  d-block mx-auto' style={{ height: "40px" }} type='text' name="supplierName" placeholder='Supplier Name'></input>
                    <br/>
                    <input className='btn btn-success d-block mx-auto' type="submit" value="Add Item"></input>
                </form>
        </div>
    );
};

export default AddNewItem;