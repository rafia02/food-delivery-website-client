import React, { useContext } from 'react';
import { Contex } from '../../../Context/AuthProvider';
import Spinner from '../../Share/Spinner/Spinner';
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/Catagory';
import ItemsProduct from '../Catagory/ItemsProduct'

import Lottie from "lottie-react";
import delivery from '../../../images/delivery.json'

import Choose from '../Choose/Choose';
import Count from '../Count/Count';

import Button from '../../Share/Button/Button';
import DeliveryCart from '../DeliveryCart/DeliveryCart';
import CheckOutPage from '../../CheckOutPage/CheckOutPage';
import BestTeam from '../BestTeam/BestTeam';
import Subcribe from '../Subcribe/Subcribe';
import {Link} from 'react-router-dom'
import Reviews from '../Reviews/Reviews';
import Specialty from '../Specialty/Specialty';
import SliderManu from '../SliderManu/SliderManu';
import HowWorkIt from '../HowWorkIt/HowWorkIt';






const Home = () => {

    const { itemsManue } = useContext(Contex)


    return (
        <div className=''>


            <div className='flex flex-col md:flex-row'>

                <div className=' w-full md:w-3/4 '>
                    <Banner></Banner>
                    <Catagory></Catagory>
                </div>


                <div className='hidden md:block w-full md:w-1/4 mt-10 md:mt-0 '>

                    <div className='  '>
                        <div>
                            <Lottie animationData={delivery} loop={true} />;
                        </div>
                        <div className='pb-10 px-5'>
                        
                            <h1 className="text-2xl mb-5 font-bold text-center">20% Discount For Eatch Product</h1>
                           <Link to="/foods"><Button text={"Continue Shopping"}></Button></Link> 
                            
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
            <SliderManu></SliderManu>
            <Count></Count>
            <BestTeam></BestTeam>
            <Specialty></Specialty>
            <Reviews></Reviews>
            <HowWorkIt></HowWorkIt>
            <Subcribe></Subcribe>
        </div>
    );
};

export default Home;