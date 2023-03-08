import React, { useContext } from 'react';
import { Contex } from '../../../Context/AuthProvider';
import Spinner from '../../Share/Spinner/Spinner';
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/Catagory';
import ItemsProduct from '../Catagory/ItemsProduct'

import Lottie from "lottie-react";
import delivery from '../../../images/delivery.json'

import Choose from '../Choose/Choose';
import Button from '../../Share/Button/Button';
import DeliveryCart from '../DeliveryCart/DeliveryCart';








const Home = () => {

    const { itemsManue } = useContext(Contex)


    return (
        <div>


            <div className='flex flex-col md:flex-row'>

                <div className=' w-full md:w-3/4 '>
                    <Banner></Banner>
                    <Catagory></Catagory>
                </div>


                <div className=' w-full md:w-1/4 mt-10 md:mt-0 bg-rose-100'>

                    <div className='fixed bg-rose-100 '>
                        <div>
                            <Lottie animationData={delivery} loop={true} />;
                        </div>
                        <div className='pb-10 px-5'>
                            <h1 className="text-xl mb-5 font-bold text-center">Your cart is curently unavailable</h1>
                            <Button text={"Continue Shopping"}></Button>
                            <DeliveryCart></DeliveryCart>
                        </div>
                    </div>

                </div>

            </div>







            <div>
                {
                    itemsManue ? <ItemsProduct></ItemsProduct> : <Spinner></Spinner>

                }
            </div>

            <Choose></Choose>
        </div>
    );
};

export default Home;