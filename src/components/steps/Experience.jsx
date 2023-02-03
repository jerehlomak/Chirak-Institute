import React from "react";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Clone from "../../assets/clone.png";
import { faLongArrowUp, faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const Experience = () => {

  const handleSubmission = () => {
    console.log("submitted");
  }

  return (
    <div className="w-full">
      <p className='font-medium text-sm md:text-base py-1 md:py-1 text-black text-center'>
        Welcome Sani Emeka
      </p>
      <div className='w-full mx-auto pt-1'>
        <p className='text-red-500 font-medium text-center text-sm md:text-base pt-2 pb-3 md:pb-4'>
          Fill correctly to the best of your knowledge, for any mislead will
          lead to rejection of application.
        </p>
      </div>
      <h1 className='text-2xl text-center font-semibold pb-4 tracking-normal'>
      Working Experience
      </h1>
      <form className='flex justify-center'>
        <div className='w-full md:w-3/4'>
          <div class='mb-4'>
            <label
              class='block text-[#96A4C5] text-sm font-medium mb-2'
              for='name'
            >
              Name of Organization/Institution
            </label>
            <input
              class='input-field leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              placeholder='St Academy'
            />

            <div className='flex mt-2.5'>
              <div className='flex text-black bg-[#11C6FF] px-3 py-1.5 mr-3 rounded items-center'>
                <label htmlFor="upload" className='flex justify-between text-xs w-full'>
                Upload Employment Letter  
                <input id='upload' type="file" className='hidden w-full mt-5' placeholder='Upload Result' />
                <FontAwesomeIcon
                          icon={faLongArrowUp}
                          style={{ fontSize: "12px", marginLeft: "5px", marginTop: "2px" }}
                        />
                </label>
              </div>
             
              <button className='bg-black text-white px-3 py-1.5 mr-3 rounded'>
                <span className='text-sm'> Refresh</span>
                <FontAwesomeIcon
                  icon={faArrowRotateRight}
                  style={{ fontSize: "12px", marginLeft: "5px" }}
                />
              </button>
            </div>
          </div>
          <div className='flex items-center justify-center my-5'>
            <img src={Clone} alt='' className='mr-3 w-4 h-4' />
            <span className='font-semibold text-xs text-black'>
              Add Alternative Course
            </span>
          </div>
         </div>
      </form>
    </div>
  );
};

export default Experience;
