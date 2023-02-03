import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const GetAccredited2 = () => {
  return (
    <>
      <div className='background'>
        <Navbar />
        <div className='flex justify-center mt-10 max-w-[21rem] md:max-w-2xl mx-auto py-5'>
          <div className='text-center w-full px-4 md:px-0 md:w-3/4'>
            <p className='font-medium text-sm md:text-base py-1 md:py-1 text-black'>
              Welcome Sani Emeka
            </p>
            <h1 className='text-green text-3xl md:text-4xl py-3 font-bold focus:ring '>
              Get Accredited
            </h1>

            <p className='text-black font-semibold text-sm md:text-base pt-2 pb-3 md:pb-4'>
                Please ensure you provide accurate details, for any mislead, will lead to 
                rejection of application.
            </p>
            <p className='text-red-700 font-medium text-sm md:text-base pt-4 pb-3 md:pb-4'> 
                Note: in other to apply as a lecturer/Instructor with the Institution
                you will pay a non refundable application/Verification fee of $50.
            </p>
            <div class='flex justify-center py-2'>
              
            <Link to='/getaccredit2'>
              <button
                className='rounded-md h-10 px-5 mt-3 md:mt-5 text-white font-medium'
                style={{
                  background: `linear-gradient(91.96deg, #B81313 0%, #000000 100%)`,
                }}
              >
                Proceed Application
              </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetAccredited2;