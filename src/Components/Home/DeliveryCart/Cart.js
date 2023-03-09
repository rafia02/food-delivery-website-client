import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Cart = ({ crt }) => {
    const { picture, title, price } = crt
    console.log(crt)
    return (
        <div>
            <div className='flex mb-3'>
                <img className='w-24 h-14 mr-5 rounded' src={picture} alt="" />
                <div className=''>
                    <h4 className=" font-bold">{title}</h4>
                    <div className='flex '>
                    <span className=' px-3 bg-rose-500 text-white font-bold '> 1</span>

                        <div className='bg-white text-sm'>

                            <AiOutlinePlus></AiOutlinePlus>
                            <AiOutlineMinus></AiOutlineMinus>
                        </div>
                    </div>
                    <p>$ {price}</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;