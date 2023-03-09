import React from 'react';
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from "react-icons/ai";

const Cart = ({ crt }) => {
    const { picture, title, price, _id, quantity } = crt



    const handlePlus=(id)=>{
        console.log(id)
        const newQuantity = quantity + 1
        console.log(newQuantity)
    }






    return (
        <div className='rounded p-5 w-full md:w-3/4 mx-auto border m-5'>
            <div className='flex mb-3  items-center justify-evenly'>
                <img className='w-40 h-32  rounded' src={picture} alt="" />
                <div className=''>
                    <p className=" text-xl md:text-2xl font-bold opacity-70 ">{title}</p>
                    <p className='font-semibold my-2'>${price}</p>
                    <div className=' flex  items-center'>
                        <div onClick={()=>handlePlus(_id)} className='border p-1 hover:bg-rose-500 hover:text-white duration-1000'>
                            <AiOutlinePlus className='  font-extrabold '></AiOutlinePlus>
                        </div>
                        <span className=' px-3  border font-bold '>{quantity}</span>

                        <div className='border p-1 hover:bg-rose-500 hover:text-white duration-1000'>
                            <AiOutlineMinus className=' font-extrabold'></AiOutlineMinus>
                        </div>
                    </div>
                    <p className='font-semibold my-2'>Total Price: {price}$</p>
                </div>

                <div className='hover:bg-rose-500 hover:text-white p-1 rounded-md duration-1000'>
                    <AiFillDelete className='text-2xl'></AiFillDelete>
                </div>
            </div>
        </div>
    );
};

export default Cart;