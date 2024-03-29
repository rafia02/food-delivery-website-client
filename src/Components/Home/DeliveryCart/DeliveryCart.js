import React, { useContext, useReducer, useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Contex } from '../../../Context/AuthProvider';
import Spinner from '../../Share/Spinner/Spinner';
import Cart from './Cart';
import Button from '../../Share/Button/Button'
import { Link } from 'react-router-dom';
import FetchCart from '../../Share/FetchCart/FetchCart';

const DeliveryCart = () => {
    const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);
    const { user, loading, setNotifiaction } = useContext(Contex)
    const carts = FetchCart()
    let subTotal = 0
    let notify = 0





    // if (carts) {
    //     return <Spinner></Spinner>
    // }





    return (



        <div className="">


            {
                carts.length > 0 ?
                    <div>
                        <h1 className="text-3xl font-bold mt-2 text-center">Your Cart Product</h1>
                        <div>
                            {
                                carts.map((crt) => {
                                    subTotal = Math.floor(subTotal) + Math.floor(crt.total)
                                    notify = Math.floor(notify) + Math.floor(crt.quantity)

                                    setNotifiaction(notify)

                                    return (<Cart
                                        key={crt._id}
                                        crt={crt}
                                    ></Cart>)
                                })
                            }
                        </div>
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
                            <Link to="/cartCheckOut">
                                <div className="w-3/6 mx-auto md:w-2/6">
                                    <Button text="Process To Checkout"></Button>
                                </div>

                            </Link>

                        </div>

                    </div>


                    :


                    <div className='pb-10 px-5 shadow-md p-10 my-5 w-3/4 md:w-1/2 mx-auto'>

                        <h1 className="text-xl mb-5 font-bold text-center  ">Your cart is curently unavailable.</h1>
                        <div className='w-2/3  mx-auto'>
                            <Link className='w-full' to="/foods"><Button text={"Continue Shopping"}></Button></Link>
                        </div>

                    </div>

            }
















        </div>



    );

};

export default DeliveryCart;