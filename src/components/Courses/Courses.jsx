import React from "react";
import { FaCompass } from "react-icons/fa";
import CourseData from "./CoursesData";

const HCourses = () => {
  return (
    <>
      <div className='container flex bg-[#fff] rounded-[1rem] mt-16 sm:mt-24 md:mt-44 items-center px-6 mx-auto shadow-lg space-y-12 md:space-y-0 md:flex-row'>
        <div>
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 pt-4 p-6'>
              {/* heading */}
              {CourseData?.map((item, index) => (
                <div
                  key={index}
                  className='flex items-start space-x-2 rounded-lg px-2 sm:p-6 sm:px-3'
                >
                  <div className='px-3 py-2 font-bold text-dark rounded-full md:py-1 bg-[#e5e5e5]'>
                    {item.id}
                  </div>
                  <div className='flex flex-col'>
                    <h3 className='font-bold text-[#3913B8] pb-2'>
                      {item.name}
                    </h3>
                    <p className='items-start text-[#192150] text-sm'>
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-12 px-3'>
        <a
          href='#'
          className='flex text-center items-center px-8 py-3 shadow-lg rounded-full  bg-gradient-to-r from-red-700 to-neutral-900 baseline'
        >
          <FaCompass className='w-6 h-6 text-white' />
          <span className='ml-2 font-bold text-white'>Browse all courses</span>
        </a>
      </div>
    </>
  );
};

export default HCourses;
