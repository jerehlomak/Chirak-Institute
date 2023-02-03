import React from 'react'
import VIDEO_DATA from './VideoData'
import { BsFillCameraVideoOffFill } from "react-icons/bs";
import { BsFillXCircleFill } from "react-icons/bs"

const ChatQuestions = () => {
  return (
    <div className='bg-[#C2C6EE] opacity-90 fixed px-3 inset-0 z-50 max-w-7xl ml-20 rounded-lg mt-10'>
    <div className='grid grid-cols-2 gap-2 md:grid-cols-5 lg:grid-cols-8 sm:grid-cols-3'>
     {VIDEO_DATA.map((item, index) => (   
    <div className='w-36 h-52 mt-6'> 
    <div className='w-36 h-36 rounded-full relative'>
    <img src={item.imageUrl} className='w-36 h-36 rounded-full' alt="" />
    <BsFillXCircleFill color='red' className='absolute h-5 w-5 inset-y-0 right-7' />  
    <BsFillCameraVideoOffFill color='red' className='absolute h-5 w-5 inset-x-16 top-16'/>

    </div>
    <p className='text-xl font-medium mt-3'> {item.name}</p>
    </div>
    ))}
    </div>
    </div>
  )
}

export default ChatQuestions