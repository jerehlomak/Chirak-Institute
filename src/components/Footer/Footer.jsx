import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black'>
        <div className='container mx-auto px-4 py-20'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                <div className='text-white'>
                    <h1 className='text-uppercase'>Chirak</h1>
                    <div className='mt-10 space-y-2 flex flex-col'>
                        <a href="#" className='text-sm hover:text-[#fff]'>About the Community</a>
                        <a href="#" className='text-sm hover:text-[#fff]'>Recently Added Courses</a>
                        <a href="#" className='text-sm hover:text-[#fff]'>Terms and Condition</a>
                        <a href="#" className='text-sm hover:text-[#fff]'>Partnership</a>
                    </div>
                </div>
                <div className='text-white'>
                    <h1 className='text-uppercase'>Categories</h1>
                    <div className='mt-10 space-y-2 flex flex-col'>
                        <a href="#" className='text-sm hover:text-[#fff]'>Skill Course</a>
                        <a href="#" className='text-sm hover:text-[#fff]'>Professional Course</a>
                    </div>
                </div>
                <div className='text-white'>
                    <h1 className='text-uppercase'>Socials</h1>
                    <div className='mt-10 space-y-2 flex flex-col'>
                        <a href="#" className='text-sm hover:text-[#fff]'>About the Community</a>
                        <a href="#" className='text-sm hover:text-[#fff]'>Recently Added Courses</a>
                        <a href="#" className='text-sm hover:text-[#fff]'>Terms and Condition</a>
                        <a href="#" className='text-sm hover:text-[#fff]'>Partnership</a>
                    </div>
                </div>
                <div className='text-white'>
                    <h1 className='text-uppercase'>Mobile App</h1>
                    <div className='mt-10 space-y-2 flex flex-col'>
                        <a href="#" className='text-sm hover:text-[#fff]'>About the Community</a>
                        <a href="#" className='text-sm hover:text-[#fff]'>Recently Added Courses</a>
                        <a href="#" className='text-sm hover:text-[#fff]'>Terms and Condition</a>
                        <a href="#" className='text-sm hover:text-[#fff]'>Partnership</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer