import React from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useQuery } from 'react-query';

const Catagory = () => {



  const { data: catagoris = [], isLoading } = useQuery({
    queryKey: ["catagoris"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allCatagoris");
      const data = await res.json()
      return data
    }
  })

  





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

          catagoris?.map(item => <Link> <SwiperSlide className=' text-orange-600 hover:bg-orange-100 hover:text-orange-600 duration-500   p-1 bg-orange-50 rounded drop-shadow-xl '>

            <div className='text-center' >

                <Link to={`/${item.title}`}>liiiii</Link>
              <div className="avatar">
                <div className="w-28 rounded-full">
                  <img src={item.img} alt="" />
                </div>
              </div>



              <h1 className='text-xl font-bold font-serif mb-4  '>{item.title}</h1>
            </div>

          </SwiperSlide> </Link>)

        }

      </Swiper>






    </div>
  );
};

export default Catagory;


