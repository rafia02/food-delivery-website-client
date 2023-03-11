import React, { useContext, useReducer, useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Contex } from '../../../Context/AuthProvider';
import Spinner from '../../Share/Spinner/Spinner';
import Cart from './Cart';
import Button from '../../Share/Button/Button'
import { Link } from 'react-router-dom';

const DeliveryCart = () => {
    const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);
    const [carts, setCarts] = useState()
    const { user, loading, setNotifiaction } = useContext(Contex)
    let subTotal = 0
    let notify = 0





    useEffect(() => {
        fetch(`http://localhost:5000/showcarts?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                forceUpdate()
                setCarts(data)
            })
    }, [user?.email, reducerValue])





    if (loading) {
        return <Spinner></Spinner>
    }


    return (



        <div className="">
            <h1 className="text-3xl font-bold mt-2 text-center">Your Cart Product</h1>

            {
                carts ?
                    <div>
                        {
                            carts.map((crt) =>{ 
                                subTotal = Math.floor(subTotal) + Math.floor(crt.total )
                                notify = Math.floor(notify) + Math.floor(crt.quantity)
                                
                                setNotifiaction(notify)
                            
                                return(<Cart
                                key={crt._id}
                                crt={crt}
                            ></Cart>)})
                        }
                    </div>
                    :
                    <div className='pb-10 px-5'>

                        <h1 className="text-xl mb-5 font-bold text-center">Your cart is curently unavailable</h1>
                        <Button text={"Continue Shopping"}></Button>

                    </div>

            }





            <div className='flex justify-between md:w-3/4 mx-auto'>
            <Link to="/foods" className="w-2/5  md:w-2/6">
                <Button text="Continue Shopping"></Button>
            </Link>
            <Link to="/cart" className="w-2/5 md:w-2/6">
                <Button text="Update Cart"></Button>
            </Link>
            </div>



            <div className="my-20  text-center p-8 shadow-lg bg-rose-50 md:w-3/4 mx-auto">
                <h1 className="text-2xl opacity-80  font-bold">Order Summery</h1>
                <h1 className=" opacity-80 font-bold my-4">Subtotal : {subTotal}$</h1>
                <div className="w-3/6 mx-auto md:w-2/6">
                    <Button text="Process To Checkout"></Button>
                </div>

            </div>







        </div>



    );
};

export default DeliveryCart;