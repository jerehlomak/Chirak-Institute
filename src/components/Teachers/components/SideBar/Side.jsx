import React, { useState } from 'react'
import { images } from '../../../../constants'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { MdOutlineSpaceDashboard, MdOutlineAssessment } from 'react-icons/md'
import { ImUsers } from 'react-icons/im'
import { FiSettings } from 'react-icons/fi'
import { BiEuro, BiMessageAltDetail } from 'react-icons/bi'
import { TiMessages } from 'react-icons/ti'
import { HiOutlineLogout } from 'react-icons/hi'
import { FaTimes, FaGreaterThan } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Side = () => {
    const [open, setOpen] = useState(true)
    const [dropDown, setDropDown] = useState(false)
    const [dropDown1, setDropDown1] = useState(false)
  return (
    <div>
        
        <aside className={`hidden lg:flex flex-col relative ${open ? 'w-64':'w-20'} side duration-300  h-screen justify-between`} aria-label="Sidebar">
        <div class="overflow-y-auto bg-black rounded justify-between">
            <div className="flex items-center justify-between p-4">
                {open ? 
                    <div className='flex justify-between'>
                        <Link to='/'>
                            <img className='w-2/4' src={images.whitelogo} alt="logo" />
                        </Link>
                    <div>
                        <AiOutlineMenuUnfold onClick={() => setOpen(!open)} className='cursor-pointer' color='white' size={24} />
                    </div>
                    
                    </div> 
                    :
                    <FaTimes onClick={() => setOpen(!open)} className='cursor-pointer' color='white' size={24} />    
                }
            
            </div>
            <ul class="flex flex-col items-start md:p-4">
                <li>
                    <Link to='/dashboard' className="flex justify-between space-x-8 items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <span className='h-8 w-10 md:px-2 py-1 items-center rounded-md bg-[#8d8d8d]'>
                            <MdOutlineSpaceDashboard className='text-red-500' size={24}/>
                        </span>
                        <p className={`${!open && 'hidden'} duration-300 text-white text-sm hover:text-neutral-200 hover:cursor-pointer text-end`}>Dashboard</p>
                    </Link>
                </li>
                <li>
                    <Link to='/manage-student' className="flex justify-between space-x-8  md:px-4 items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <span className='h-8 w-10 px-2 py-1 items-center rounded-md bg-[#8d8d8d]'>
                            <ImUsers className='text-gray-500 active:text-red-600' size={24}/>
                        </span>
                        <p className={`${!open && 'hidden'} duration-300 text-white text-sm hover:text-neutral-200 hover:cursor-pointer`}>Manage Student</p>
                    </Link>
                </li>
                <li>
                    <button onClick={() => setDropDown(!dropDown)} type="button" class="flex items-center justify-between space-x-8 p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                        <span className='h-8 w-10 px-2 py-1 items-center rounded-md bg-gray-200'>
                            <BiMessageAltDetail className='text-gray-500' size={24}/>
                        </span>
                        <p className={`${!open && 'hidden'} duration-300 text-white text-sm hover:text-neutral-200 hover:cursor-pointer`}>Manage Course</p>
                        
                    </button>
                    {dropDown && (
                        <ul id="dropdown-example" class="py-2 space-y-2">
                            <li>
                                <Link to='/all-courses'>
                                    <div className='flex items-center justify-between'>
                                        <svg sidebar-toggle-item="" className=" w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        <p className={`${!open && 'hidden'} duration-300 text-white text-xs hover:text-neutral-200 hover:cursor-pointer`}>All Courses</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to='/new-course'>
                                    <div className='flex items-center justify-center'>
                                        <span className='h-8 w-10 px-2 py-1 items-center rounded-md'>
                                            <FaGreaterThan size={12} color='lightgray'/>
                                        </span>
                                        <p className={`${!open && 'hidden'} duration-300 text-white text-xs hover:text-neutral-200 hover:cursor-pointer`}>Add New Course</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    )}
                    
                </li>
                <li>
                    <button onClick={() => setDropDown1(!dropDown1)} type="button" className="flex items-center justify-between space-x-8 p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                        <span className='h-8 w-10 px-2 py-1 items-center rounded-md bg-gray-200'>
                            <BiMessageAltDetail className='text-gray-500' size={24}/>
                        </span>
                        <p className={`${!open && 'hidden'} duration-300 text-white text-sm hover:text-neutral-200 hover:cursor-pointer`}>Lesson Plan</p>
                        
                    </button>
                    {dropDown1 && (
                        <ul id="dropdown-example" class="py-2 space-y-2">
                            <li> 
                                <Link to='/all-courses'>
                                    <div className='flex items-center justify-center space-x-4'>
                                        <svg sidebar-toggle-item="" className="bg-gray-300 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        <p className={`${!open && 'hidden'} duration-300 text-white text-xs hover:text-neutral-200 hover:cursor-pointer`}>All Lesson Plan</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to='/new-course'>
                                    <div className='flex items-center justify-center space-x-4'>
                                        <span className='h-8 w-10 px-2 py-1 items-center rounded-md'>
                                            <FaGreaterThan size={12} color='lightgray'/>
                                        </span>
                                        <p className={`${!open && 'hidden'} duration-300 text-white text-xs hover:text-neutral-200 hover:cursor-pointer`}>New Lesson Plan</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    )}
                    
                </li>
                <li>
                    <Link to='/assessment' className="flex justify-between space-x-8  md:px-4 items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <span className='h-8 w-10 px-2 py-1 items-center rounded-md bg-[#8d8d8d]'>
                            <ImUsers className='text-gray-500 active:text-red-600' size={24}/>
                        </span>
                        <p className={`${!open && 'hidden'} duration-300 text-white text-sm hover:text-neutral-200 hover:cursor-pointer`}>Assessment</p>
                    </Link>
                </li>
                <li>
                    <Link to='/withdrawal' className="flex justify-between space-x-8  md:px-4 items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <span className='h-8 w-10 px-2 py-1 items-center rounded-md bg-[#8d8d8d]'>
                            <ImUsers className='text-gray-500 active:text-red-600' size={24}/>
                        </span>
                        <p className={`${!open && 'hidden'} duration-300 text-white text-sm hover:text-neutral-200 hover:cursor-pointer`}>Withdrawal</p>
                    </Link>
                </li>
                <li>
                    <Link to='/' className="flex justify-between space-x-8  md:px-4 items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <span className='h-8 w-10 px-2 py-1 items-center rounded-md bg-[#8d8d8d]'>
                            <TiMessages className='text-gray-500 active:text-red-600' size={24}/>
                        </span>
                        <p className={`${!open && 'hidden'} duration-300 text-white text-sm hover:text-neutral-200 hover:cursor-pointer`}>Messages</p>
                    </Link>
                </li>
                <li>
                    <Link to='/' className="flex justify-between space-x-8  md:px-4 items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <span className='h-8 w-10 px-2 py-1 items-center rounded-md bg-[#8d8d8d]'>
                            <FiSettings className='text-gray-500 active:text-red-600' size={24}/>
                        </span>
                        <p className={`${!open && 'hidden'} duration-300 text-white text-sm hover:text-neutral-200 hover:cursor-pointer`}>Account</p>
                    </Link>
                </li>

            </ul>
            <div className='flex flex-col items-start p-4'>
                <div className='flex space-x-8 items-center justify-center'>
                    <span className='h-8 w-10 px-2 py-1 items-center rounded-md bg-gray-200'>
                        <HiOutlineLogout className='text-gray-500' size={24}/>
                    </span>
                    <p className={`${!open && 'hidden'} duration-300 text-white text-sm hover:text-neutral-200 hover:cursor-pointer`}>Logout</p>
                </div>
            </div>
        </div>
        </aside>

    </div>
  )
}

export default Side