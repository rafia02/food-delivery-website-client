import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Cart = ({ crt }) => {
    const { picture, title, price } = crt
    console.log(crt)
    return (
        <div className='bg-white rounded shadow-md'>
            <div className='flex mb-3  items-center'>
                <img className='w-24 h-14 mr-5 rounded' src={picture} alt="" />
                <div className=''>
                    <p className=" ">{title}</p>
                    <div className='flex '>
                    <span className=' px-3 bg-rose-500 text-white font-semibold '> 1</span>

                        <div className='bg-white text-sm'>

                            <AiOutlinePlus></AiOutlinePlus>
                            <AiOutlineMinus></AiOutlineMinus>
                        </div>
                    </div>
                    <p className='italic font-semibold'>${price}</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;