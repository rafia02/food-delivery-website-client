import React, { useEffect, useRef, useState } from 'react';
import '../../../App.css'

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef();

  const featuredProducts = [

    "http://on3-step.com/tf/dbento/dbento/images-slider/3.jpg",
    "http://on3-step.com/tf/dbento/dbento/images-slider/1.jpg",
    "http://on3-step.com/tf/dbento/dbento/images-slider/2.jpg",
    "http://on3-step.com/tf/dbento/dbento/images-slider/3.jpg",
    "https://images.deliveryhero.io/image/fd-bd/LH/jbwv-hero.jpg?width=1000&height=250&quality=45",
    "https://www.modernfoods.co.in/wp-content/uploads/2017/12/plum-cake-banner.png",
    "https://www.winni.in/celebrate-relations/wp-content/uploads/2019/03/plum-cake.jpg"

  ];
  
  let count = 0;
  let slideInterval;
  
    const removeAnimation = () => {
      slideRef.current.classList.remove("sliderAnimation");
    };
   
    useEffect(() => {
      slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

      startSlider();
      return () => {
        pauseSlider();
      };
    }, []);



    const pauseSlider = () => {
      clearInterval(slideInterval);
    };
  
    const startSlider = () => {
      slideInterval =  setInterval(() => {
        handleOnNextClick();
      }, 4000);
    };

  
    const handleOnNextClick = () => {
      count = (count + 1) % featuredProducts.length;
      setCurrentIndex(count);
      slideRef.current.classList.add("sliderAnimation");
 
    };
    const handleOnPrevClick = () => {
      const productsLength = featuredProducts.length;
      count = (currentIndex + productsLength - 1) % productsLength;
      setCurrentIndex(count);
      slideRef.current.classList.add("sliderAnimation");

    };
  



  return (
    <div ref={slideRef} className="w-full select-none relative">
    <div className="w-full h-60  ">
      <img className='h-full w-full' src={featuredProducts[currentIndex]} alt="" />
    </div>

    <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
      <button
        className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
        onClick={handleOnPrevClick}
      >
   
      </button>
      <button
        className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
        onClick={handleOnNextClick}
      >

      </button>
    </div>
  </div>
  );
};

export default Banner;