import React from "react";
import COURSE_DATA from "../CourseData";
import Sliders from "../Carousel/Slider";

const Professional = () => {
  return (
    <div className='md:mt-36 px-10 py-10'>
      <div className='container mx-auto justify-center items-center'>
        <h1 className='text-lg text-center font-bold py-3 xs:mb-2 md:py-6'>
          PROFESSIONAL COURSES
        </h1>
        <Sliders COURSE_DATA={COURSE_DATA} />
      </div>
    </div>
  );
};

export default Professional;
