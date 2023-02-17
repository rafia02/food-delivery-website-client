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
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >



        {

          manueItem.map(item => <SwiperSlide className=' p-10 md:p-1 bg-orange-50 rounded drop-shadow-xl'>

            <div className='text-center'>
              <div>
                <img className='p-' src={item.img} alt="" />
              </div>
              <h1 className='text-4xl md:text-2xl font-bold my-2 text-orange-600 '>{item.title}</h1>
            </div>

          </SwiperSlide>)

        }






      </Swiper>















    </div>
  );
};

export default Catagory;