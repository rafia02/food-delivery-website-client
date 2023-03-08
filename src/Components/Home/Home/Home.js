import React, { useContext } from 'react';
import { Contex } from '../../../Context/AuthProvider';
import Spinner from '../../Share/Spinner/Spinner';
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/Catagory';
import ItemsProduct from '../Catagory/ItemsProduct'
import Choose from '../Choose/Choose';
import Count from '../Count/Count';







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
                    <img src="https://media.istockphoto.com/id/524166326/zh/%E7%85%A7%E7%89%87/yellow-credit-card.jpg?s=1024x1024&w=is&k=20&c=wN5jWLJD-apCXLL02c-0-xlgKSg56SD_rzbVzAKOBlg=" alt="" />

                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia et voluptas accusantium, officiis aperiam hic nihil? Aliquam minus iste similique, odio dignissimos inventore, consequatur quaerat praesentium repudiandae molestiae maiores eveniet.</h1>
                </div>

            </div>







            <div>
                {
                    itemsManue ? <ItemsProduct></ItemsProduct> : <Spinner></Spinner>

                }
            </div>
             <Count></Count>
            <Choose></Choose>
        </div>
    );
};

export default Home;