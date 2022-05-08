import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Inventory = () => {
    const [productInfo, setProductInfo] = useState({})
    // const [newQuantity, setNewQuantity] = useState(0)
    // console.log(productInfo);
    const { id } = useParams();
    // console.log(id);
    useEffect(() => {
        const url = `https://hidden-reef-02087.herokuapp.com/product/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProductInfo(data)
            })

    }, [id])

    
    const handleProductQuantity = () => {
        let { quantity, name, price, description, supplier, img } = productInfo;
        // console.log(quantity);
        if (quantity > 0) {
            quantity = quantity - 1;
            const updateProductinfo = { quantity, name, price, description, supplier, img };

            const url = `https://hidden-reef-02087.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateProductinfo)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('success', data);
                    // setProductInfo(data)

                    // window.location.reload(false);
                    fetch(url)
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data);
                            setProductInfo(data)
                        })
                })

            // alert('Delivered successfully!!!');
        } 
        else {
            alert('Stock Out')
        }
    }

    const handleAddQuantity = (event) => {
        event.preventDefault()
        let { quantity, name, price, description, supplier, img } = productInfo;

        const newAddedQuantity = event.target.number.value
        // console.log(newAddedQuantity);
        if (!newAddedQuantity) {
            alert('Please Inter Valid Numebr')
        } else {
            quantity = parseInt(quantity) + parseInt(newAddedQuantity);
            // quantity=parseInt(updatedquantity)
            console.log(quantity);

            const updateProductinfo = { quantity, name, price, description, supplier, img };
            const url = `https://hidden-reef-02087.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateProductinfo)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('success', data);
                    // alert('Added successfully!!!');
                    fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        setProductInfo(data)
                        event.target.reset()
                    })
                    // window.location.reload(false);
                })
        }



    }

    return (

        <div className=' gy-4 gx-2 shadow rounded p-3 mb-2 bg-body' >
            <div className=" shadow rounded mb-2 bg-body d-flex w-75  mx-auto">
                <div className='' style={{ "width": "18rem" }}>
                    <img src={productInfo?.img} style={{ "height": "200px" }} className=" w-100 card-img-top" alt="..." />
                </div>

                <div className="card-body w-25">
                    <h5 className="card-title">{productInfo?.name}</h5>
                    <p className="m-none">Price : {productInfo?.price} BDT</p>
                    <p className="m-none">Quantity : {productInfo?.quantity} </p>
                    <p className="m-none">Supplier : {productInfo?.supplier} </p>
                    <p className="m-none"><small>{productInfo?.description}</small></p>
                </div>

            </div>
            <div className="card-footer d-block text-center">
                <button className='btn btn-info ' onClick={handleProductQuantity}> Deliver</button>
                <form onSubmit={handleAddQuantity} className='mt-4'>
                    <input className='' style={{ height: "40px" }} type='number' name="number" placeholder='re-stock'></input>
                    <input className='btn btn-success' type="submit" value="Add Quantity"></input>
                </form>

            </div>
            <div className="card-footer d-block text-center">
                <button className='btn btn-info color-light mx-auto'><Link to='/manage' className='text-light text-center d-block text-decoration-none'>Manage Inventories</Link></button>
            </div>
            

        </div>


    );
};

export default Inventory;