import React from 'react';
import { BsCartFill } from "react-icons/bs";



const SingleProduct = ({ manue }) => {
    console.log(manue)
    const { catagoris, picture, title, descreption } = manue
    return (
        <div className="card bg-base-100 shadow-md">
            <figure><img className='w-full h-48' src={picture} alt="" /></figure>
            <div className="card-body ">
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