import React, { useContext } from 'react';
import { Contex } from '../../../Context/AuthProvider';
import Spinner from '../../Share/Spinner/Spinner';
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/Catagory';
import ItemsProduct from '../Catagory/ItemsProduct'







const Home = () => {

    const { itemsManue } = useContext(Contex)


    return (
        <div>


            <div className='flex flex-col md:flex-row'>

                <div className='border w-full md:w-3/4 border-red-400'>
                    <Banner></Banner>
                    <Catagory></Catagory>
                </div>


                <div className='border  w-full md:w-1/4 mt-10 md:mt-0 border-violet-500'>
                    <h1>Product images</h1>
                    <h1>Product images</h1>
                    <h1>Product images</h1>
                    <h1>Product images</h1>
                    <h1>Manu bar</h1>
                </div>

            </div>







            <div>
                {
                    itemsManue ? <ItemsProduct></ItemsProduct> : <Spinner></Spinner>

                }
            </div>
        </div>
    );
};

export default Home;