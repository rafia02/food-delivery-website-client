import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Contex } from '../../Context/AuthProvider';
import Button from '../Share/Button/Button';
import Spinner from '../Share/Spinner/Spinner';


const CheckOut = () => {
    const { user, loading } = useContext(Contex)
     let store = 0
     let shipping = 0
     let grandTotal = 0

    const { data: wishlists = [], isLoading, refetch } = useQuery({
        queryKey: ["wishlists", user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/wishlistsProducts?email=${user?.email}`);
            const data = res.json()
            return data;
        }
    })



    console.log(wishlists)

  
    if (loading) {
        return <Spinner></Spinner>
    }


    

    console.log('total taka:', store)


    return (
        <div className=''>

            { wishlists &&
                wishlists.map((crt)=> {
                    store = Math.floor(store) + Math.floor(crt.price)
                    shipping = Math.floor(Math.floor(store) * 10/100)
                    grandTotal = Math.floor(store) + Math.floor(shipping)
                })
            }

            <div className='grid grid-cols-2'>
                {/* Frist div  */}
                <div className=' pr-10  pl-20 py-14'>


                    <form>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text text-lg font-sans">Contact information</span></label>
                            <input type="text" placeholder="Email or mobile phone number" className="input input-bordered w-full" />
                        </div>





                        <div className="form-control w-full mt-10 ">
                            <label className="label"><span className="label-text text-lg font-sans">Shipping address</span></label>
                            <input type="text" placeholder="Country" className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full flex flex-col md:flex-row mt-3 ">
                            <input type="text" placeholder="Frist name" className="input input-bordered w-1/2 mr-2" />
                            <input type="text" placeholder="Last name" className="input input-bordered w-1/2" />
                        </div>

                        <div className="form-control w-full mt-3 ">
                            <input type="text" placeholder="Address" className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full mt-3 ">
                            <input type="text" placeholder="Apartment, suite, etc(optional)" className="input input-bordered w-full" />
                        </div>


                        <div className="form-control w-full flex flex-col md:flex-row mt-3 ">
                            <input type="text" placeholder="City" className="input input-bordered w-1/2 mr-2" />
                            <input type="text" placeholder="Postal Code" className="input input-bordered w-1/2" />
                        </div>

                        <input type="Submit" value="Countinue to Shopping" className='font-bold rounded text-center py-3 mt-10 text-white px-2 bg-gradient-to-r from-rose-500 to-orange-500 ' />
                    </form>
                </div>









                {/* Secound div   */}


                <div className='bg-rose-50 '>




                    {/* { wishlists.length > 0 &&
                        wishlists.map((lists) =>{
                            console.log(lists)
                            store += parseInt(lists.price)

                        } )
                    
                    } */}



{/* <div className='grid grid-cols-1 md:grid-cols-2 mb-3 pl-10 my-16'
                            key={lists._id}
                        >
                            <div>
                                <div className='w-full flex flex-col lg:flex-row'>
                                    <div className='w-2/6    '>
                                        <img className='w-full h-16' src={lists.picture} alt="" />
                                    </div>
                                    <div className='w-full ml-2'>
                                        <h1>{lists.title}</h1>
                                        <h1>{lists._id}</h1>
                                    </div>
                                </div>
                            </div>



                            <div className='flex justify-center'>
                                <h1> $ {lists.price}, 00 </h1>
                            </div>
                        </div> */}








                    <div className='grid grid-cols-2 pl-16 mt-8 border-t-2'>
                        <h1>Subtotal : </h1>
                        <h2> ${store}.00</h2>
                    </div>

                    <div className='grid grid-cols-2 pl-16 mt-8 border-b-2 pb-6'>
                        <h1>Shipping :</h1>
                        <h2>{shipping}</h2>
                    </div>

                    <div className='grid grid-cols-2 pl-16 mt-8 pb-6'>
                        <h1>Grand Total :</h1>
                        <h2> USD ${grandTotal} </h2>
                    </div>


                </div>






            </div>



        </div>
    );
};

export default CheckOut;