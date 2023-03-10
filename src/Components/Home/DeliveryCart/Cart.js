import React, { useReducer } from 'react';
import toast from 'react-hot-toast';
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from "react-icons/ai";
import { useQuery } from '@tanstack/react-query';

const Cart = ({ crt }) => {
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const { picture, title, price, _id, quantity , total} = crt

    // const { data: carts = [], isLoading,  refetch } = useQuery({
    //     queryKey: [],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/cart')
    //         const data = res.json()
    //         return data
    //         refetch()
    //     }
    // })

    const handlePlus=(id)=>{
        console.log(id)
        const updateQnt = quantity + 1
        console.log(updateQnt)
        console.log(updateQnt)
        const updatePrice = Math.floor(total) + Math.floor(price)

        fetch(`http://localhost:5000/quantityUpdate/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({"quantity": updateQnt, "total": updatePrice})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                
                forceUpdate();
            }
            
        })
        .catch(e => console.error(e))
    }



    const handleMainus=(id)=>{
        console.log(id)

        const updateQnt = quantity - 1
        const updatePrice = Math.floor(total) - Math.floor(price) 

        fetch(`http://localhost:5000/quantityUpdate/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({"quantity": updateQnt, "total": updatePrice})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                
                forceUpdate();
            }
            
        })
        .catch(e => console.error(e))
    }
    











    const handleDelete =(id)=>{
        console.log(id)

        fetch(`http://localhost:5000/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                forceUpdate();
            }
            
            
        })
        .catch(e => console.error(e))
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


                        <div  onClick={()=>handleMainus(_id)} className='border p-1 hover:bg-rose-500 hover:text-white duration-1000'>
                            <AiOutlineMinus className=' font-extrabold'></AiOutlineMinus>
                        </div>
                    </div>
                    <p className='font-semibold my-2'>Total Price: {total}$</p>
                </div>

                <div onClick={()=>handleDelete(_id)} className='hover:bg-rose-500 hover:text-white p-1 rounded-md duration-1000'>
                    <AiFillDelete className='text-2xl'></AiFillDelete>
                </div>
            </div>
        </div>
    );
};

export default Cart;