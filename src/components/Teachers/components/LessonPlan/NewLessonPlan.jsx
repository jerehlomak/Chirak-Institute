import React, {useState} from 'react'
import { SideBar, Header } from '../'
import { Link } from 'react-router-dom'
import { AiFillPlusSquare } from 'react-icons/ai'
import { BsFillClockFill, BsCurrencyDollar,BsCalendarDate } from 'react-icons/bs'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { TextField } from '@mui/material'

const NewLessonPlan = () => {
    const [selectedDate, setSelectedDate] = useState(null)
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
                    <p className='text-xs py-1'><Link to='/'>Home</Link> &#62; <span className='text-red-600'>Manage Course &#62; New Lesson Plan</span></p>
                </div>
                <div className='flex flex-col bg-white rounded-md w-full p-6'>
                    <h1 className='font-semibold text-xl'>Upload Lesson Plan and Materials</h1>
                    <div className='grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                        <div className='mt-4 flex flex-col'>
                            <label className='text-[#96A4C5] text-sm font-medium mb-2' htmlFor="course-name">Course Name</label>
                            <select type="text" id='grid-state' name='course-name' 
                                className='px-3 py-2 rounded-md bg-[#ecf0fa] leading-tight focus:outline-none focus:shadow-outline'
                             >
                                <option>JavaScript Programming</option>
                                <option>React Frontend</option>
                                <option>Python Backend</option>
                            </select>
                        </div>
                        <div className='mt-4 flex flex-col'>
                            <label className='text-[#96A4C5] text-sm font-medium mb-2' htmlFor="course-name">Day</label>
                            <div className='flex justify-between'>
                                <label className="flex flex-col items-center">
                                    <span className="uppercase text-xs">Sun</span>
                                    <input type="checkbox" className='w-4 h-4 accent-black' />    
                                </label>
                                <label className="flex flex-col items-center">
                                    <span className="uppercase text-xs">Mon</span>
                                    <input type="checkbox" className='w-4 h-4 accent-black' />    
                                </label>
                                <label className="flex flex-col items-center">
                                    <span className="uppercase text-xs">tue</span>
                                    <input type="checkbox" className='w-4 h-4 accent-black' />    
                                </label>
                                <label className="flex flex-col items-center">
                                    <span className="uppercase text-xs">wed</span>
                                    <input type="checkbox" className='w-4 h-4 accent-black' />    
                                </label>
                                <label className="flex flex-col items-center">
                                    <span className="uppercase text-xs">thu</span>
                                    <input type="checkbox" className='w-4 h-4 accent-black' />    
                                </label>
                                <label className="flex flex-col items-center">
                                    <span className="uppercase text-xs">fri</span>
                                    <input type="checkbox" className='w-4 h-4 accent-black' />    
                                </label>
                                <label className="flex flex-col items-center">
                                    <span className="uppercase text-xs">sat</span>
                                    <input type="checkbox" className='w-4 h-4 accent-black' />    
                                </label>
                            </div>
                        </div>
                        <div className='mt-4 flex flex-col'>
                            <label className='text-[#96A4C5] text-sm font-medium mb-2' htmlFor="course-name">Lesson Plan</label>
                            <input type="text" id='course-name' name='course-name' 
                                className='px-3 py-2 rounded-md bg-[#ecf0fa] outline-none'
                            />
                        </div>
                    </div>
                    {/* Time Sections  */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-4 gap-6'>
                        <div className='flex flex-col'>
                            <label className='text-[#96A4C5] text-sm font-medium mb-2' htmlFor="morning">Morning Section Time</label>
                            <div className='relative w-full'>
                                <TextField InputProps={{disableUnderline: true,}} 
                                    variant='standard' type='time'
                                    className='w-full bg-[#edf0ff] p-2 border-none rounded-md leading-tight focus:outline-none focus:shadow-outline' />
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-[#96A4C5] text-sm font-medium mb-2' htmlFor="morning">Afternoon Section Time</label>
                            <div className='relative w-full'>
                                <TextField InputProps={{disableUnderline: true,}} 
                                    variant='standard' type='time'
                                    className='w-full bg-[#edf0ff] p-2 border-none rounded-md leading-tight focus:outline-none focus:shadow-outline' />
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-[#96A4C5] text-sm font-medium mb-2' htmlFor="morning">Evening Section Time</label>
                            <div className='relative w-full'>
                                <TextField InputProps={{disableUnderline: true,}} 
                                    variant='standard' type='time'
                                    className='w-full bg-[#edf0ff] p-2 border-none rounded-md leading-tight focus:outline-none focus:shadow-outline' />
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-[#96A4C5] text-sm font-medium mb-2' htmlFor="morning">Pick a Date</label>
                            <div className='relative w-full'>
                                <TextField InputProps={{disableUnderline: true,}} 
                                    variant='standard' type='date'
                                    className='w-full bg-[#edf0ff] p-2 border-none rounded-md leading-tight focus:outline-none focus:shadow-outline' />
                            </div>
                        </div>
                    </div>
                    {/* activities and objective section */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-start mt-6'>
                        <div className=' mb-4'>
                            <label
                            className='block text-[#96A4C5] text-sm font-medium mb-2' htmlFor='objective'>
                            Objective
                            </label>
                            <input
                            className='dash-input-field leading-tight focus:outline-none focus:shadow-outline bg-green-500' 
                            id='objective' type='text' placeholder='' />
                        </div>
                        <div className=' mb-4'>
                            <label
                            className='block text-[#96A4C5] text-sm font-medium mb-2 pl-0 px-3' htmlFor='activities'>
                            Activities
                            </label>
                            <input
                            className='dash-input-field leading-tight focus:outline-none focus:shadow-outline bg-green-500' 
                            id='activities' type='text' placeholder='' />
                        </div>
                    </div>
                    {/*  */}
                    <div className='w-full py-6'>
                        <label
                            className='block text-[#96A4C5] text-sm font-medium mb-2' htmlFor='textarea'>
                            Note
                        </label>
                        <textarea name="" id="textarea" cols='30' rows='10' className='bg-[#ecf0fa] focus:outline-none w-full rounded-sm'></textarea>
                    </div>
                    {/* upload file section */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        <div className='bg-[#ecf0fa] rounded-md p-4  items-center justify-center'>
                            <div className='flex w-full first-letter:justify-between space-x-4'>
                                <p className='text-sm text-[#96A4C5]'>Upload a Scheme of Work (PDF only)</p>
                                <AiFillPlusSquare size={24} className='place-self-start justify-self-start' />
                            </div>
                            <div className='flex items-center space-x-2 mt-2'>
                                <input type='file' placeholder='Choose File' />
                            </div>
                        </div>
                        <div className='bg-[#ecf0fa] rounded-md p-4 '>
                            <div className='flex w-full first-letter:justify-between space-x-4'>
                                <p className='text-sm text-[#96A4C5]'>Upload a Scheme of Work (PDF only)</p>
                                <AiFillPlusSquare size={24} className='place-self-start justify-self-end' />
                            </div>
                            <div className='flex items-center space-x-2 mt-2'>
                                <input type='file' placeholder='Choose File' />
                            </div>
                            <div className='flex flex-col mt-3 items-start justify-start space-y-3'>
                                <div className='flex space-x-4'>
                                    <input type="radio" id='pdf-free' className='mt-1 accent-red-600' />
                                    <label htmlFor="pdf-free">Paid</label> 
                                    <div className='bg-[#dbdbdb] rounded-sm w-1/2'>
                                        <BsCurrencyDollar className='absolute mt-1' />
                                        <input type="text" className='ml-6 w-1/2 rounded-sm bg-transparent outline-none' />
                                    </div>
                                </div>
                                <div className='flex space-x-4 items-start'>
                                    <input type="radio" id='video-free' className='mt-1 accent-red-600'/>
                                    <label htmlFor="video-free">Free</label>     
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#ecf0fa] rounded-md p-4 '>
                            <div className='flex w-full first-letter:justify-between space-x-4'>
                                <p className='text-sm text-[#96A4C5]'>Upload a Scheme of Work (PDF only)</p>
                                <AiFillPlusSquare size={24} className='place-self-start justify-self-end' />
                            </div>
                            <div className='flex items-center space-x-2 mt-2'>
                                <input type='file' placeholder='Choose File' />
                            </div>
                            <div className='flex flex-col mt-3 items-start justify-start space-y-3'>
                                <div className='flex space-x-4'>
                                    <input type="radio" id='pdf-free' className='mt-1 accent-red-600' />
                                    <label htmlFor="pdf-free">Paid</label> 
                                    
                                </div>
                                <div className='flex space-x-4 items-start'>
                                    <input type="radio" id='video-free' className='mt-1 accent-red-600'/>
                                    <label htmlFor="video-free">Free</label>     
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* buttons */}
                    <div className='flex mt-8 space-x-6'>
                        <button className='text-xs px-4 py-3 font-semibold rounded-md bg-black text-white hover:bg-[#cccccc]'>
                            SAVE
                        </button>
                        <a href='' className='text-xs px-4 py-3 font-semibold rounded-md bg-[#cccccc] text-black'>
                            RESET
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewLessonPlan