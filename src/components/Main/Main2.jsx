import React from 'react'
import { BiBookOpen } from 'react-icons/bi'
import { BsBellFill } from 'react-icons/bs'
import { images } from '../../constants'

const Main2 = () => {
  return (
    <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0">
          <div className='flex flex-col mb-32 space-y-6 md:w-1/2 mt-10'>
              <h1 className='max-w-md 4xl font-bold text-white text-center md:text-5xl md:text-left'>Learn on-demand <span className='text-[#F0D4D4]'>Skill </span>Today!</h1>
              <p className="max-w-sm text-center md:text-center">
              Still don’t know what to learn? <br /> Over 5000 new skills and courses to learn. Learning a new skill can be one of the most satisfying things you can do to grow.
              </p>
              <div className="flex justify-center md:justify-start ">
                <a href='#' className='flex text-center items-center p-3 px-7 pt-2 shadow-lg rounded-full bg-[#F0D4D4] baseline hover:bg-[#f1c3c3]'>
                  <BiBookOpen />
                  <span className='ml-2'>Start Course</span> 
                </a>
              </div>
            </div>
            <div className='md:w-1/2 flex flex-row'>
            <img className="d-block w-100" src={images.barber} alt='illustration'
            />
            <div className=' w-16 h-24 px-6 py-7 -ml-12 mt-7 bg-[#000] rounded-full items-center'>
                <BsBellFill color='white' className='mt-3 '/>
                <div className='absolute w-5 h-5 rounded-full bg-[#ff0000] ml-1 -mt-8' >
                  <strong className='relative px-1 py-1 text-white text-center'>8</strong>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Main2