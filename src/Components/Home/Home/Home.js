import React, { useContext } from 'react';
import { Contex } from '../../../Context/AuthProvider';
import Spinner from '../../Share/Spinner/Spinner';
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/Catagory';
import ItemsProduct from '../Catagory/ItemsProduct'
<<<<<<< HEAD
import Lottie from "lottie-react";
import delivery from '../../../images/delivery.json'
=======
import Choose from '../Choose/Choose';


>>>>>>> 3208b87bb9316f66b393f39f01a67700ca6bf1d9





const Home = () => {

    const { itemsManue } = useContext(Contex)


    return (
        <div>


            <div className='flex flex-col md:flex-row'>

                <div className=' w-full md:w-3/4 '>
                    <Banner></Banner>
                    <Catagory></Catagory>
                </div>


                <div className=' w-full md:w-1/4 mt-10 md:mt-0 '>

                    <div>
                        <Lottie animationData={delivery} loop={true} />;
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