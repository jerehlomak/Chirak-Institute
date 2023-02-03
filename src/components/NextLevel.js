import React from "react";
import { FaCompass } from "react-icons/fa";
import levelshape from "../assets/levelshape.svg";
import bgrings from "../assets/bg-rings.png";
import bgwithrings from "../assets/bg-with-rings.png";
import bgwithrings2 from "../assets/bg-with-rings2.png";

const NextLevel = () => {
  return (
    <div
      className='md:my-36 px-10 py-32 bg-[#F8D6D6] bg-no-repeat bg-cover object-contain bg-center'
      style={{ backgroundImage: `url(${bgwithrings2})` }}
    >
      {/* <img src={levelshape} className='h-12 w-12' /> */}
      <div className='container mx-auto justify-center items-center'>
        <h1 className='text-xl text-center font-bold py-3 xs:mb-2 md:py-6'>
          TAKE YOUR CAREER TO THE NEXT LEVEL
        </h1>
      </div>
      <div className='flex justify-center mt-12 px-3'>
        <a
          href='#'
          className='flex text-center items-center px-8 py-3 shadow-lg rounded-full  bg-gradient-to-r from-red-700 to-neutral-900 baseline'
        >
          <FaCompass className='w-6 h-6 text-white' />
          <span className='ml-2 font-bold text-white'>Explore all courses</span>
        </a>
      </div>
    </div>
  );
};

export default NextLevel;
