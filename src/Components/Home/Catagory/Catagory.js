import { useEffect } from 'react';
import { Link, useFetcher } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useQuery } from 'react-query';
import { useState } from 'react';
import Spinner from '../../Share/Spinner/Spinner';
import ItemsProduct from './ItemsProduct'
import { useContext } from 'react';
import { Contex } from '../../../Context/AuthProvider';


const Catagory = () => {
  const {itemsManue,setItemsManue} = useContext(Contex)



  const { data: catagoris = [], isLoading } = useQuery({
    queryKey: ["catagoris"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allCatagoris");
      const data = await res.json()
      return data
    }
  })

  


  if(isLoading){
    <Spinner></Spinner>
  }







  const handleManueItem =(id)=>{

   

    fetch(`http://localhost:5000/itemsProducts/${id}`)
    .then(res => res.json())
    .then(data => setItemsManue(data))


  

  }





  return (
    <div className='my-10'>



      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >






        {

          catagoris?.map(item => <Link> <SwiperSlide  key={item._id}  onClick={()=>handleManueItem(item.title)}  className=' text-rose-600 hover:bg-rose-200 hover:text-rose-700   p-1 bg-rose-100   duration-500 rounded drop-shadow-xl '>

            <div className='text-center' >
                
              <div className="avatar">
                <div className="w-28 rounded-full">
                  <img src={item.img} alt="" />
                </div>
                
              </div>



              <h1 className='text-xl font-bold font-serif mb-4 mt-2 '>{item.title}</h1>
              {/* <button className='mb-4 mt-2 btn bg-yellow-500 btn-xs'>More Items</button> */}
            </div>

          </SwiperSlide> 
          </Link>)

        }

      </Swiper>






    </div>
  );
};

export default Catagory;


