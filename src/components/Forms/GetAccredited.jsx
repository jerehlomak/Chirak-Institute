import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const GetAccredited2 = () => {
  return (
    <>
      <div className='background'>
        <Navbar />
        <div className='flex justify-center mt-10 form-bg max-w-[21rem] md:max-w-2xl mx-auto py-5'>
          <div className='text-center w-full px-4 md:px-0 md:w-2/4'>
            <p className='font-medium text-sm md:text-base py-1 md:py-1 text-black'>
              Welcome Sani Emeka
            </p>
            <h1 className='text-green text-3xl md:text-4xl py-3 font-bold focus:ring '>
              Get Accredited
            </h1>

            <p className='text-red-700 font-medium text-sm md:text-base pt-2 pb-3 md:pb-4'>
              Note: in other to apply as a lecturer/Instructor with the
              Institution you will pay a non refundable application/Verification
              fee of $50.
            </p>
            <div class='flex justify-center py-2'>
              <div>
                <h5 className='text-black text-sm md:text-base font-medium pb-2'>
                  Please Select a preferred course
                </h5>

                <div class='form-check pb-2 !text-left flex items-center'>
                  <input
                    class='form-check-input appearance-none rounded-full h-3 w-3 md:w-4 md:h-4 border border-gray-300 bg-white checked:!bg-red-600 checked:!border-red-400 checked:!shadow-red focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                    type='radio'
                    name='professionalCourse'
                    id='professionalCourse1'
                    checked
                  />
                  <label
                    class='form-check-label inline-block text-black font-medium text-sm md:text-base'
                    for='preferredCourse1'
                  >
                    Professional Course
                  </label>
                </div>
                <div class='form-check !text-left flex items-center'>
                  <input
                    class='form-check-input appearance-none rounded-full h-3 w-3 md:w-4 md:h-4 border border-gray-300 bg-red checked:!bg-red-600 checked:!border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer font-medium text-base'
                    type='radio'
                    name='professionalCourse'
                    id='professionalCourse2'
                  />
                  <label
                    class='form-check-label inline-block text-black font-medium text-sm md:text-base'
                    for='professional2'
                  >
                    Skill Course
                  </label>
                </div>
              </div>
            </div>
            <Link to='/getaccredit'>
              <button
                className='rounded-full h-10 px-5 mt-3 md:mt-5 text-white font-medium'
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
    </>
  );
};

export default GetAccredited2;
