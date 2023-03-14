import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';


const Subcribe = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const handleSubcribe = (data)=> {
        
         console.log('subcribe', data.email)
         const dataObj= {
            email: data.email
         }

         fetch("https://food-delivery-website-server-ruby.vercel.app/subcribeEmail", {
            method: "POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(dataObj)
         })
         .then((res)=> res.json())
         .then((data)=> {
            console.log(data)
            toast.success("Welcome to Subcribe...!!")
         })
         .catch((err)=> {
            toast.error("Sorry filed subcribe...!!")
         })
    }

    return (
        <div className="bg-rose-100">

            <div className='w-1/2  mx-auto p-10 mt-20'>
                <h1 className='text-center text-3xl my-2 font-serif'>Stay Informed About Special Offers</h1>

                <p className='text-center text-xl mt-1 mb-4 ' >For Exclusive Deals, Coupons, News and More!</p>

                <div>
                    <form onSubmit={handleSubmit(handleSubcribe)}>
                        <input type="text" {...register('email')} placeholder="Email" className="input input-bordered w-3/4" />
                        <input type="submit" value="subcribe" className='w-1/4 bg-rose-400 text-white font-bold py-2 rounded-tr-lg rounded-br-lg text-xl' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Subcribe;