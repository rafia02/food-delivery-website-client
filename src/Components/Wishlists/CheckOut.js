import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Contex } from '../../Context/AuthProvider';
import Button from '../Share/Button/Button';
import Spinner from '../Share/Spinner/Spinner';


const CheckOut = () => {
    const { user, loading } = useContext(Contex)


    const { data: wishlists = [], isLoading, refetch } = useQuery({
        queryKey: ["wishlists", user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/wishlistsProducts?email=${user?.email}`);
            const data = res.json()
            return data;
        }
    })

    console.log(wishlists)
    if (isLoading) {
        return <Spinner></Spinner>
    }


   let store= 0

   console.log('total taka:', store )


    return (
        <div className=''>



            <div className='grid grid-cols-2'>
                {/* Frist div  */}
                <div className=' border border-green-400 pl-20 py-14'>


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


                <div className=' border border-red-500 '>
                    <h1>secound</h1>



                    {
                        wishlists.map((lists) => {
                            store = Math.floor(store) + Math.floor(lists.price)
                            console.log(lists)
                        })
                    }




                      <div className='grid grid-cols-1 md:grid-cols-2'>
                           <div>
                                  <div className='border w-full flex flex-col lg:flex-row'>
                                    <div className='w-2/6 border '>
                                        <h1>image</h1>
                                    </div>
                                    <div className='w-full ml-2'>
                                        <h1>tile</h1>
                                        <h1>id</h1>
                                    </div>
                                  </div>
                           </div>



                           <div className='border flex justify-center'>
                              <h1>Prize</h1>
                           </div>
                      </div>


                </div>






            </div>



        </div>
    );
};

export default CheckOut;