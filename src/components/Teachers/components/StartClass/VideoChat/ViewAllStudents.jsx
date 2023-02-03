import React from 'react'
import VIDEO_DATA from '../VideoData'
import { FaLessThan } from 'react-icons/fa'

const ViewAllStudents = ({ handleShowQuestions }) => {
  return (
    <div className='bg-[#C2C6EE] opacity-90 fixed px-3 inset-0 z-50 overflow-y-scroll max-w-7xl ml-0 md:mt-16 md:ml-24 rounded-lg'>
      <div onClick={handleShowQuestions} className="p-2 bg-slate-400 cursor-pointer rounded-md w-10 mt-8">
        <FaLessThan /> 
      </div>
      <div className='grid grid-cols-3 md:grid-cols-8 lg:grid-cols-14 sm:grid-cols-5 gap-2'>
        {VIDEO_DATA.map((item, index) => (   
          <div className='w-20 h-32 mt-6' key={index}>   
            <img src={item.imageUrl} className='w-20 h-20 rounded-full' alt="" />
            <p className='text-xs font-medium mt-3'> {item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ViewAllStudents
