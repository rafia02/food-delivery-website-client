import React from 'react';
import Button from '../../Share/Button/Button';

const SingleProduct = ({ manue }) => {
    console.log(manue)
    const { catagoris, picture, title, descreption } = manue
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='w-full h-48' src={picture} alt="Shoes" /></figure>
            <div className="card-body ">
                <h2 className="card-title">
                    {title}
                </h2>
                <p>{descreption}</p>
                <div className="card-actions">
                    <Button text={"Details"}></Button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;