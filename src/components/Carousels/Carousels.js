import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { images } from '../../constants'
import { BsBellFill } from 'react-icons/bs'
import { BiBookOpen } from 'react-icons/bi'

const Carousels = () => {

  return (

    <> 
      <Carousel autoPlay={true}
        interval={7000}
        controls={false}
        indicators={false}>
        <Carousel.Item>
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 md:-mt-16 pt-14 md:pt-0 mx-auto space-y-0">
          <div className='flex flex-col mb-32 space-y-6 md:w-1/2 sm:mt-44 mt-10'>
              <h1 className='max-w-md text-4xl font-bold text-center text-gray-600 md:text-white md:text-5xl md:text-left'>Learn on-demand <span className='text-[#F0D4D4]'>Skill </span>Today!</h1>
              <p className="max-w-sm text-center md:text-center">
              Still don’t know what to learn? <br /> Over 5000 new skills and courses to learn. Learning a new skill can be one of the most satisfying things you can do to grow.
              </p>
              <div className="flex justify-center  ">
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
          {/* </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto space-y-0 pt-16 md:pt-0">
          <div className='flex flex-col mb-32 space-y-6 md:w-1/2 sm:mt-44 mt-10'>
              <h1 className='max-w-md text-4xl font-bold text-center text-gray-600 sm:mt-5 md:mt-0  md:text-white md:text-5xl md:text-left'>Your Tools in <span className='text-[#F0D4D4]'>Learning </span>Today!</h1>
              <p className="max-w-sm text-center md:text-center">
              Still don’t know what to learn? <br /> Over 5000 new skills and courses to learn. Learning a new skill can be one of the most satisfying things you can do to grow.
              </p>
              <div className="flex justify-center sm:mt-5 md:mt-0 ">
                <a href='#' className='flex text-center items-center p-3 px-7 pt-2 shadow-lg rounded-full bg-[#F0D4D4] baseline hover:bg-[#f1c3c3]'>
                  <BiBookOpen />
                  <span className='ml-2'>Start Course</span> 
                </a>
              </div>
            </div>
            <div className='md:w-1/2 flex flex-row'>
            <img className="d-block w-100" src={images.hello} alt='illustration'
            />
            <div className=' w-16 h-24 px-6 py-7 -ml-12 mt-7 bg-[#000] rounded-full items-center'>
                <BsBellFill color='white' className='mt-3 '/>
                <div className='absolute w-5 h-5 rounded-full bg-[#ff0000] ml-1 -mt-8' >
                  <strong className='relative px-1 py-1 text-white text-center'>8</strong>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Carousels