import React, { useContext } from 'react';
import { Contex } from '../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../Share/Spinner/Spinner'
import Button from '../../Share/Button/Button';
import InfoForm from '../../Share/InfoForm/InfoForm';
import OrderdCart from '../../Share/OrderdCart/OrderdCart';
import TotalPrice from '../../Share/TotalPrice/TotalPrice';

const CartCheckOut = () => {
    const { user, loading } = useContext(Contex)
    let store = 0
    let shipping = 0
    let grandTotal = 0

    const { data: showcarts = [], isLoading, refetch } = useQuery({
        queryKey: ["showcarts", user?.email],
        queryFn: async () => {
            const res = await fetch(`https://food-delivery-website-server-ruby.vercel.app/showcarts?email=${user?.email}`);
            const data = res.json()
            return data;
        }
    })



    console.log(showcarts)


    if (loading && isLoading) {
        return <Spinner></Spinner>
    }





    return (
        <div className=' py-5'>

            <div className='flex justify-evenly md:flex-row flex-col-reverse gap-5'>
                {/* Frist div  */}
                
                <div>
                    <InfoForm></InfoForm>
                </div>


                {/* Secound div   */}


                <div>
                    <h1 className="text-xl font-bold text-center opacity-70 mb-3">Orderd Product</h1>

                    <div>
                        {showcarts.length > 0 &&
                            showcarts.map((lists) => {

                                store = Math.floor(store) + Math.floor(lists.price)
                                shipping = Math.floor(Math.floor(store) * 10 / 100
                                )
                                grandTotal = Math.floor(store) + Math.floor(shipping)
                                // console.log(lists)
                                // store += parseInt(lists.price)
                                return (
                                    <OrderdCart lists={lists}></OrderdCart>

                                )

                            })

                        }

                    </div>

                    <div>

                        <TotalPrice
                            grandTotal={grandTotal}
                            shipping={shipping}
                            store={store}

                        ></TotalPrice>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartCheckOut;