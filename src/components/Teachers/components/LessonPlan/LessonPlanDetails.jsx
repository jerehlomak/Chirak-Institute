import React from 'react'
import { SideBar, Header } from "../index";
import { Link } from 'react-router-dom'
import { images } from '../../../../constants'

const LessonPlanDetails = () => {
  return (
    <div className='background flex flex-row'>
        <SideBar />
        <div className='flex flex-col w-full'>
          <Header />
          <div className='flex-auto p-4 -mt-6'>
            <div className='flex flex-col justify-center items-start py-4'>
                <h3 className="text3xl font-bold">
                Teacher's Dashboard
                </h3>
                <p className='text-xs py-1'><Link to='/'>Home</Link> &#62; <span className='text-red-600'><Link to='/lesson-plan'>Lesson Plan &#62;</Link> Lesson Plan Details</span></p>
            </div>
            <div className='flex flex-col bg-white rounded-md w-full p-6'>
              <div className='flex w-full'>
                <h2 className='w-1/3 font-bold text-md'>Course Name</h2>
                <p className='w-2/3 text-sm'>Digital Marketing</p>
              </div>
              <div className='flex w-full mt-4'>
                <h2 className='w-1/3 font-bold text-md'>Day</h2>
                <p className='w-2/3 text-sm'>Tuesday</p>
              </div>
              <div className='flex w-full mt-4'>
                <h2 className='w-1/3 font-bold text-md'>Lesson Plan</h2>
                <p className='w-2/3 text-sm'>
                Lesson plan goes here, lesson plan goes here, lesson plan goes here
                </p>
              </div>
              <div className='flex w-full mt-4'>
                <h2 className='w-1/3 font-bold text-md'>Morning Section</h2>
                <p className='w-2/3 text-sm'>9:55 AM</p>
              </div>
              <div className='flex w-full mt-4'>
                <h2 className='w-1/3 font-bold text-md'>Afternoon Section</h2>
                <p className='w-2/3 text-sm'>2:55 PM</p>
              </div>
              <div className='flex w-full mt-4'>
                <h2 className='w-1/3 font-bold text-md'>Evening Section</h2>
                <p className='w-2/3 text-sm'>6:55 PM</p>
              </div>
              <div className='flex w-full mt-4'>
                <h2 className='w-1/3 font-bold text-md'>Objective</h2>
                <p className='w-2/3 text-sm'>
                  Objective goes here, objective goes here, lesson plan goes here
                </p>
              </div>
              <div className='flex w-full mt-4'>
                <h2 className='w-1/3 font-bold text-md'>Activities</h2>
                <p className='w-2/3 text-sm'>
                  Activities goes here, activities goes here, activities goes here
                </p>
              </div>
              <div className='flex w-full mt-4'>
                <h2 className='w-1/3 font-bold text-md'>Notes</h2>
                <p className='w-2/3 text-sm'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odio 
                  sint repellendus voluptates eos id quod quibusdam 
                  aspernatur velit. Sit ipsum ipsa reprehenderit, 
                  temporibus, esse, deleniti dolorum maiores deserunt 
                  debitis molestiae pariatur odit facere delectus quos 
                  architecto cum quia similique.
                </p>
              </div>
              <div className='flex w-full mt-4'>
                <h2 className='w-1/3 font-bold text-md'>School of Work</h2>
                <div className='flex space-x-4 text-[#cccccc]'>
                  <img src={images.pdflogo} alt="" />
                  <p>Scheme 01.pdf</p>
                  <img src={images.pdflogo} alt="" />
                  <p>Scheme 02.pdf</p>
                </div>
              </div>
              <div className='flex w-full mt-4'>
                <h2 className='w-1/3 font-bold text-md'>Text Course Material</h2>
                <div className='flex space-x-4 text-[#cccccc]'>
                  <img src={images.pdflogo} alt="" />
                  <p>Scheme 01.pdf</p>
                  <img src={images.pdflogo} alt="" />
                  <p>Scheme 02.pdf</p>
                </div>
              </div>
              <div className='flex w-full mt-4'>
                <h2 className='w-1/3 font-bold text-md'>Video Course Material</h2>
                <p className='w-2/3 text-sm'>Tuesday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default LessonPlanDetails