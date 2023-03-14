import React, { useContext, useReducer, useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsCartFill, BsFillHeartFill, BsStarFill, BsStarHalf } from "react-icons/bs";
import { Contex } from '../../../Context/AuthProvider';
import ProviteRoute from '../../ProviteRoute/ProviteRoute';
import { useNavigate, Navigate } from 'react-router-dom'



const SingleProduct = ({ manue }) => {
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const { user, handleAddToCart, handleWishLists } = useContext(Contex)
    const navigate = useNavigate()

    const { catagoris, picture, title, descreption, price, _id } = manue




    const handleWishLists2 = (catagoris, picture, title, descreption, price, _id) => {
        if (user.uid) {
            handleWishLists(catagoris, picture, title, descreption, price, _id)
        }

        else {
            navigate('/login')
        }

    }

    const handleAddToCart2 = (catagoris, picture, title, descreption, price, _id) => {
        if (user.uid) {
            handleAddToCart(catagoris, picture, title, descreption, price, _id)
        }

        else {
            navigate('/login')
        }

    }





    return (
        <div className="rounded  bg-rose-50 hover:shadow-md">
            <figure><img className='w-full h-56 rounded' src={picture} alt="" /></figure>
            <div className="card-body ">
                <div className='flex justify-between items-center'>
                    <div className='flex justify-center items-center '>


                        <BsFillHeartFill title='Add Your Wishlist' className="text-2xl  duration-500  text-rose-400 hover:scale-105 hover:text-black hover:opacity-80 skew-y-3 translate-x-4  "
                            onClick={() => handleWishLists2(catagoris, picture, title, descreption, price, _id)}

                        ></BsFillHeartFill>
                    </div>

                    <div>
                        <h1 className="text-lg font-bold italic  text-rose-700">Price: {price}$</h1>
                    </div>


                </div>
                <h2 className="card-title font-bold">
                    {title}
                </h2>
                <p>{descreption.length > 70 ? <p>{descreption.slice(0, 70) + '...'}</p> : <p>{descreption}</p>}</p>

                <div className='flex justify-center mt-3 text-yellow-500 opacity-80'>
                    <BsStarFill></BsStarFill>
                    <BsStarFill></BsStarFill>
                    <BsStarFill></BsStarFill>
                    <BsStarFill></BsStarFill>
                    <BsStarHalf></BsStarHalf>
                </div>


                {/* <ProviteRoute>

                <button onClick={()=>handleAddToCart(catagoris, picture, title, descreption, price, _id, _id)} className='flex justify-center p-1 rounded items-center mt-2 bg-rose-400 text-white font-bold '>
                <BsCartFill className='mr-2'></BsCartFill>
                     Add to cart
                </button> 
                </ProviteRoute> */}

                <button onClick={() => handleAddToCart2(catagoris, picture, title, descreption, price, _id, _id)} className='flex justify-center p-1 rounded items-center mt-2 bg-rose-400 text-white font-bold '>
                    <BsCartFill className='mr-2'></BsCartFill>
                    Add to cart
                </button>

            </div>
        </div>
    );
};

export default SingleProduct;