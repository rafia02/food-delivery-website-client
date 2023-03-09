import React, { useContext, useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { Contex } from '../../../Context/AuthProvider';
import Spinner from '../../Share/Spinner/Spinner';
import Cart from './Cart';
import Button from '../../Share/Button/Button'

const DeliveryCart = () => {
    const { user, loading } = useContext(Contex)
    console.log(user)



    // useEffect(()=>{
    //     fetch(`http://localhost:5000/showcarts?email=${user?.email}`)
    //     .then(res=>res.json())
    //     .then(data =>{
    //         console.log(data)
    //     })
    // },[user?.email])






    const { data: carts = [], isLoading, refetch } = useQuery({
        queryKey: ["showcarts", user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/showcarts?email=${user?.email}`)
            const data = res.json()
            return data
        }
    })

    console.log(carts)

    if (loading) {
        return <Spinner></Spinner>
    }


    return (
        <div>

            {
                carts ? <div>
                    {
                        carts.map(crt => <Cart
                            key={crt._id}
                            crt={crt}
                        ></Cart>)
                    }
                </div> :
                    <div className='pb-10 px-5'>

                        <h1 className="text-xl mb-5 font-bold text-center">Your cart is curently unavailable</h1>
                        <Button text={"Continue Shopping"}></Button>

                    </div>

            }


        </div>
    );
};

export default DeliveryCart;