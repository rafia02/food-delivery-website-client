import React from 'react';
import { BsCartFill } from "react-icons/bs";



const SingleProduct = ({ manue }) => {
    console.log(manue)
    const { catagoris, picture, title, descreption, price } = manue
    return (
        <div className="rounded bg-rose-50 hover:shadow-md">
            <figure><img className='w-full h-56 rounded' src={picture} alt="" /></figure>
            <div className="card-body ">
                <h1 className="text-2xl font-bold italic">Price: {price}$</h1>
                <h2 className="card-title">
                    {title}
                </h2>
                <p>{descreption.length>70 ? <p>{descreption.slice(0,70) + '...'}</p>: <p>{descreption}</p>}</p>
                <div className="card-actions">
                    {/* <Button text={"Details"}></Button> */}

                    <div>

                        <BsCartFill></BsCartFill>



                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingleProduct;