import React from "react";
import { FaBeer, FaStar, AiOutlineStar, FaStarHalfAlt } from "react-icons/fa";

const Reviews = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ml-3 my-32">




      {/* frist itmes */}
      <div className="border border-l-red-300 border-t-red-300 border-b-red-300 p-12 ">
        <img
          className="mx-auto w-full "
          src="https://jimmie.qodeinteractive.com/wp-content/uploads/2022/12/h4-review-01.jpg"
          alt=""
        />

        <div className="text-center">
          <h5 className="text-2xl my-6 font-semibold">Layla Stone</h5>
          <p className=" text-red-400 text-2xl flex justify-center mb-4">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalfAlt/>
          </p>
          <p>Fresh fish that dances on your taste buds</p>
        </div>
      </div>



      {/* Secound itmes */}

      <div className="border border-red-300 p-12 ">
        <img
          className="mx-auto w-full "
          src="https://jimmie.qodeinteractive.com/wp-content/uploads/2022/12/h4-review-02.jpg"
          alt=""
        />

        <div className="text-center">
          <h5 className="text-2xl my-6 font-semibold">Erik Winkowski</h5>
          <p className=" text-red-400 text-2xl flex justify-center mb-4">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalfAlt/>
          </p>
          <p>An explosion of authentic flavors in every dish</p>
        </div>
      </div>



   {/* 3 items */}
      <div className=" border border-t-red-300 border-b-red-300  p-12 ">
        <img
          className="mx-auto w-full "
          src="https://jimmie.qodeinteractive.com/wp-content/uploads/2022/12/h4-review-03.jpg"
          alt=""
        />

        <div className="text-center">
          <h5 className="text-2xl my-6 font-semibold">Monica Rogers</h5>
          <p className=" text-red-400 text-2xl flex justify-center mb-4">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </p>
          <p>A slice of heaven with every bite</p>
        </div>
      </div>





      {/* 4 items */}
      <div className="border border-red-300 p-12 ">
        <img
          className="mx-auto w-full "
          src="https://jimmie.qodeinteractive.com/wp-content/uploads/2022/12/h4-review-04.jpg"
          alt=""
        />

        <div className="text-center">
          <h5 className="text-2xl my-6 font-semibold">Tom Jones</h5>
          <p className=" text-red-400 text-2xl flex justify-center mb-4">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </p>
          <p>Pure burger bliss in every juicy bite</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
