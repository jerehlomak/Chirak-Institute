import React from "react";
import Carousel from "../Carousel/Carousel";
import Sliders from "../Carousel/Slider";
import COURSE_DATA from "../CourseData";

const ExploreSkills = () => {
  return (
    <div className='px-10 py-10'>
      <div className='container mx-auto justify-center items-center'>
        <h1 className='text-lg text-center font-bold py-3 xs:mb-2 md:py-6'>
          EXPLORE NEW SKILLS
        </h1>
        <div className='w-full'>
          <Sliders COURSE_DATA={COURSE_DATA} />
        </div>
      </div>
    </div>
  );
};

export default ExploreSkills;
