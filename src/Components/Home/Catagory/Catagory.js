import { useEffect } from 'react';
import { Link, useFetcher } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Spinner from '../../Share/Spinner/Spinner';
import ItemsProduct from './ItemsProduct'
import { useContext } from 'react';
import { Contex } from '../../../Context/AuthProvider';
import Lottie from "lottie-react";
import loading from '../../../images/animation_lkk3yb4f.json'

const Catagory = () => {
  const { itemsManue, setItemsManue } = useContext(Contex)



  const { data: catagoris = [], isLoading } = useQuery({
    queryKey: ["catagoris"],
    queryFn: async () => {
      const res = await fetch("https://food-delivery-website-server-ruby.vercel.app/allCatagoris");
      const data = await res.json()
      return data
    }
  })




  if (isLoading) {
    return  <Lottie animationData={loading}></Lottie>
  }







  const handleManueItem = (id) => {



    fetch(`https://food-delivery-website-server-ruby.vercel.app/itemsProducts/${id}`)
      .then(res => res.json())
      .then(data => setItemsManue(data))
  }





  return (
    <div className='my-10'>
      <h1 className="text-2xl opacity-90 font-serif font-bold text-center mb-5 ">CHOOSE YOUR MENU CATAGORIES</h1>


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

          catagoris?.map(item => <Link> <SwiperSlide key={item._id} onClick={() => handleManueItem(item.title)} className=' text-rose-600 hover:bg-rose-100 hover:text-rose-700   p-1   duration-500 rounded drop-shadow-xl '>

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


