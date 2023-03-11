import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsCartFill, BsFillHeartFill, BsStarFill, BsStarHalf } from "react-icons/bs";
import { Contex } from '../../../Context/AuthProvider';



const SingleProduct = ({ manue }) => {
    const {user} = useContext(Contex)
   


    const { catagoris, picture, title, descreption, price, _id } = manue



    
    const handleWishLists = () =>{

        const wishListsProduct ={
            email: user.email,
            catagoris,
            picture,
            title,
            productId: _id,
            descreption,
            price,
            fevourite: false,
            quantity: 1 

        }
       fetch('http://localhost:5000/wishlistsProducts', {
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(wishListsProduct)
       })
       .then((res)=> res.json())
       .then((data) => {
        console.log(data)
        toast.success("Success your wishlists products ")
       })
       .catch((err)=> {
        console.log(err)
        toast.error("Sorry, Filed Requst Wishlists...!")
       })

        
    }





    const handleAddToCart =(id)=>{


        const cartProduct ={
            email: user.email,
            catagoris,
            picture,
            title,
            productId: id,
            descreption,
            price,
            fevourite: false,
            quantity: 1 


        }


        fetch(`http://localhost:5000/allcart`,{
            method: 'POST',
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(cartProduct)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })

    }






    return (
        <div className="rounded  bg-rose-50 hover:shadow-md">
            <figure><img className='w-full h-56 rounded' src={picture} alt="" /></figure>
            <div className="card-body ">
                <div className='flex justify-between items-center'>
                    <div className='flex justify-center items-center '>
                       

                        <BsFillHeartFill className="text-2xl  duration-500 opacity-70 hover:opacity-100 hover:scale-105 skew-y-3 translate-x-4  "
                        onClick={handleWishLists}
                       
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

                <button onClick={()=>handleAddToCart(_id)} className='flex justify-center p-1 rounded items-center mt-2 bg-rose-400 text-white font-bold '>
                <BsCartFill className='mr-2'></BsCartFill>
                     Add to cart
                </button>

            </div>
        </div>
    );
};

export default SingleProduct;