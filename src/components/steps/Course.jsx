import React from 'react'
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Clone from "../../assets/clone.png";
import { Link } from 'react-router-dom';


const Course = () => {
  return (
    <div>
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
        Preferred Course
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
            </div>
            <div class='mb-4'>
              <label
                class='block text-[#96A4C5] text-sm font-medium mb-2'
                for='name'
              >
              Years of Experience
              </label>
              <input
                class='input-field leading-tight focus:outline-none focus:shadow-outline'
                id='username'
                placeholder='St Academy'
              />
            </div>
            <div class='mb-4'>
              <label
                class='block text-[#96A4C5] text-sm font-medium mb-2'
                for='name'
              >
                Preferred Continent
              </label>
              <select class='input-field bg-[#ffffff] leading-tight focus:outline-none focus:shadow-outline selectpicker'>
      <option>Select</option>
    </select>
            </div>
            <div class='mb-4'>
              <label
                class='block text-[#96A4C5] text-sm font-medium mb-2'
                for='name'
              >
                Preferred Language
              </label>
              <select class='input-field bg-[#ffffff] leading-tight focus:outline-none focus:shadow-outline'>
      <option>Select</option>
    </select>
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
  )
}

export default Course