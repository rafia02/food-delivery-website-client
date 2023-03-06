import React from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useQuery } from 'react-query';
import { useEffect } from 'react';

const Catagory = () => {



  const { data: catagoris = [], isLoading } = useQuery({
    queryKey: ["catagoris"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allCatagoris");
      const data = await res.json()
      return data
    }
  })

  



  const {data: manuItems =[]}= useQuery({
    queryKey:['itemsProducts'],
    queryFn: async()=>{
      const res = await fetch(`http://localhost:5000/itemsProducts`)
      const data = await res.json()
      return data
    }
  })




  const handleManueItem =(id)=>{

    console.log(id)
    use
    }

  

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

          catagoris?.map(item => <Link key={item._id}> <SwiperSlide  onClick={()=>handleManueItem(item.title)}  className=' text-yellow-600 hover:bg-yellow-100 hover:text-yellow-600 duration-500   p-1 bg-yellow-50 rounded drop-shadow-xl '>

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


