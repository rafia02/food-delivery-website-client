import React from 'react';
import { BsCartFill, BsFillHeartFill, BsStarFill, BsStarHalf } from "react-icons/bs";

const Food = ({food}) => {
    console.log(food)
    const { catagoris, picture, title, descreption, price } = food
    
    return (
        <div className="rounded  bg-rose-50 hover:shadow-md mb-7">
            <figure><img className='w-full h-64 rounded' src={picture} alt="" /></figure>
            <div className="card-body ">
                <div className='flex justify-between items-center'>
                    <div className='flex justify-center items-center '>
                        <BsCartFill className="text-xl mr-5 ml-0 duration-500 opacity-70 hover:opacity-100 hover:scale-125 skew-y-3  translate-x-4 "></BsCartFill>

                        <BsFillHeartFill className="text-xl  duration-500 opacity-70 hover:opacity-100 hover:scale-105 skew-y-3 translate-x-4  "></BsFillHeartFill>
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
            </div>
        </div>
    );
};

export default Food;