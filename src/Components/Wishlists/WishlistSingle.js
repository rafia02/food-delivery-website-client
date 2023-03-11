import React from 'react';
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from "react-icons/ai";
import toast, { Toaster } from 'react-hot-toast';



const WishlistSingle = ({ lists,refetch }) => {
    console.log(lists)
    const { picture, title, price, _id } = lists;




    const handleWishlistDelete=(id)=> {
        console.log(id)
        fetch(`http://localhost:5000/wishlistsProducts/${id}`,{
            method: "DELETE"
        })
        .then((res)=> res.json())
        .then((data)=> {
            console.log(data)
            toast.success("Succes Detete...!")
            refetch()
        })
        .catch((err)=> {
            console.log(err)
            toast.error("Filed Delete...!")
        })
    }




    return (
        <div>

            <div className=' w-3/4 mx-auto my-10 '>


                <div className=' grid grid-cols-1 md:grid-cols-3 '>

                     <div className='w-full md:w-3/6 flex justify-center border   '>
                       <img className='w-full h-28' src={picture} alt="" />
                     </div>


                    <div className='  w-6/6 flex flex-col mt-4 md:mt-0 justify-center' >
                        <h1 className='text-xl md:text-xl font-bold opacity-70 mb-2'>{title}</h1>
                        <h2 className='font-semibold text-lg font-sans'>Prize $ {price} </h2>
                    </div>



                    <div className=' w-6/6 flex justify-center items-center mt-4 md:mt-0' >
                     <AiFillDelete 
                     onClick={()=> handleWishlistDelete(_id)}
                     className='text-2xl hover:text-rose-500'></AiFillDelete>
                    </div>


                </div>




            </div>

        </div>
    );
};

export default WishlistSingle;