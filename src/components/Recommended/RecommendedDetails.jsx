import React from "react";
import StarRating from "../StarRating";
import { FaCompass } from "react-icons/fa";

const RecommendedDetails = ({ title, image, price, rating, name, number }) => {
  return (
    <>
      {/* <div className="flex flex-col mt-8 md:flex-row md:space-x-6">*/}
      <div className='relative flex flex-col items-center space-y-6 rounded-lg '>
        <img className='h-60  rounded-tr-xl rounded-b-xl' src={image} alt='' />
        <div className='absolute flex flex-col pt-32'>
          <p className='text-white font-bold'>{name}</p>
          <StarRating rating={rating} />
          {/* {[...Array(rating)]
            .map((_, index) => (
              <div key={index} className="flex flex-row">
                <FaStar size={20} color='#ffc107' className="flex flex-row" />
                <p className="">⭐</p>
              </div>
            ))} */}

          <p className='text-white mt-0'>{number} Students</p>
        </div>
        <div>
          <h6 className='font-bold text-base leading-none'>{title} </h6>
          <div className='flex items-center mt-3 justify-center'>
            <p className='text-[#ff0000] pt-2'>
              <strong>$ {price}</strong>
            </p>
            <button className='ml-3 flex justify-center items-center w-[10rem] h-10  py-3 shadow-lg rounded-full text-white bg-gradient-to-r from-red-700 to-neutral-900 baseline'>
              <FaCompass className='w-4 h-4 text-white mr-2' />
              Enroll Course
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default RecommendedDetails;
