import React from 'react';
import OneFood from './OneFood';
import img1 from '../../../images/icecream.png'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Catagory = () => {
  const manueItem = [
    {
      id: 1,
      img: img1,
      title: 'Burgar'
    },
    {
      id: 2,
      img: img1,
      title: 'Burgar'
    },
    {
      id: 3,
      img: img1,
      title: 'Burgar'
    },
    {
      id: 4,
      img: img1,
      title: 'Burgar'
    },
    {
      id: 5,
      img: img1,
      title: 'Burgar'
    },
    {
      id: 6,
      img: img1,
      title: 'Burgar'
    },
    {
      id: 7,
      img: img1,
      title: 'Burgar'
    },
    {
      id: 8,
      img: img1,
      title: 'Burgar'
    },
    {
      id: 9,
      img: img1,
      title: 'Burgar'
    },
    {
      id: 10,
      img: img1,
      title: 'Burgar'
    },
  ]


  return (
    <div className='my-20'>



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

          manueItem.map(item => <SwiperSlide className=' p-1 bg-orange-50 rounded drop-shadow-xl'>

            <div className='text-center'>
              <div>
                <img className='p-' src={item.img} alt="" />
              </div>
              <h1 className='text-2xl font-bold  mb-8 text-orange-600 '>{item.title}</h1>
            </div>

          </SwiperSlide>)

        }






      </Swiper>

















    </div>
  );
};

export default Catagory;