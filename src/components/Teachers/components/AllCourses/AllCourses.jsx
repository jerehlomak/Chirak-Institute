import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { images } from '../../../../constants'
import { AiFillDollarCircle, AiTwotoneAccountBook } from 'react-icons/ai'
import { FaUsers } from 'react-icons/fa'
import { Table, ProgressBar } from 'react-bootstrap'
import AllCOURSE_DATA from './AllCoursesData'
import NewCourse from './NewCourse'

import { useDispatch, useSelector } from 'react-redux'
import { getPostAction } from '../../../../store/actions/CourseAction'
import axios from 'axios'

const AllCourses = () => {
  const [course, setCourse] = useState([])
  const [searchCourse, setSearchCourse] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchBatch, setSearchBatch] = useState("");

  const dispatch = useDispatch()

  const courseData = useSelector(state => state.allCourses.courses)
  console.log(courseData)


  useEffect(() => {
    
  const courses = dispatch(getPostAction())
  console.log(courses)
    
  }, [])

  const displayStudents = courseData.filter((student) => {
    if (searchCourse !== "") {
      return student.title.toLowerCase().includes(searchCourse.toLowerCase());
    // } else if (searchName !== "") {
    //   return student.title.toLowerCase().includes(searchName.toLowerCase());
    // } else if (searchBatch !== "") {
    //   return student.lessonplan.toString().includes(searchBatch);
    } else {
      return student;
    }
})

  const now = 60
  return (
    <div className='flex-auto p-4 -mt-6'>
        <div className='flex flex-col justify-center items-start py-4'>
            <h3 className="text3xl font-bold">
            Teacher's Dashboard
            </h3>
            <p className='text-xs py-1'><Link to='/all-courses'>Home</Link> &#62; <span className='text-red-600'>Manage Course &#62; All Courses</span></p>
        </div>
        <div className='flex flex-col bg-white rounded-md w-full p-6'>
            <h1 className='font-semibold text-xl'>All Courses</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-3 w-full items-start justify-start '>
              <div className='flex'>
                <input onChange={(e) => setSearchCourse(e.target.value)}
                  className='px-4 py-2 w-full rounded-sm bg-[#ecf0fa] text-xs text-[#8ba7eb] outline-none' type="text" placeholder='Search by Title' />
              </div>
              <div className='flex'>
                <input className='px-4 py-2 w-full rounded-sm bg-[#ecf0fa] text-xs text-[#8ba7eb] outline-none' type="text" placeholder='Search by Name' />
              </div>
              <div className='flex'>
                <input className='px-4 py-2 w-full rounded-sm bg-[#ecf0fa] text-xs text-[#8ba7eb] outline-none' type="text" placeholder='Search by Batch' />
              </div>
              <div className='flex items-center justify-content-center'>
                <button className='bg-[#000000] text-white px-6 py-2 text-sm uppercase rounded-md'>Search</button>
              </div>
            </div>
        </div>
        {/*  */}
        <div className='w-full py-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {displayStudents.map((item, index) => (
              <div key={index} className='flex flex-col text-gray-400 shadow-md rounded-b-md'>
                <img className='rounded-t-md' src={item.courseImg} alt="Course Image" />
                <div className='flex flex-col divide-y-1 divide-gray-400 bg-[#f8f8f8] rounded-b-md'>
                  <div className='p-4 space-y-4'>
                    <div>
                      <ProgressBar variant='success' now={now} label={`${now}%`} style={{height:10}} />
                    </div>
                    <h4 >{item.title}</h4>
                    <p className='text-xs text-gray-400'>
                      {item.description}
                    </p>
                  </div>
                  <div>
                    <Table striped responsive >
                      <tbody>
                        <tr align='center'>
                          <td><AiTwotoneAccountBook color='blue' size={24} /></td>
                          <td colSpan={2}>Duration</td>
                          <td>20 days</td>
                        </tr>
                        <tr align='center'>
                          <td><FaUsers color='yellow' size={24} /></td>
                          <td colSpan={2}>Students</td>
                          <td>12k</td>
                        </tr>
                        <tr align='center'>
                          <td><AiFillDollarCircle color='green' size={24} /></td>
                          <td colSpan={2}>Fees</td>
                          <td>$ {item.price}</td>
                        </tr>
                      </tbody>
                    </Table>
                    <div align='center' className='pb-2'>
                      <a href="#" className='w-full text-[#16a34a] transition'><Link to='/start-class/video'>START CLASS</Link></a>
                    </div> 
                  </div>
                </div>
              </div>
           
          ))} 
        </div>      
        <Routes>
          <Route exact path='/delete' element={<NewCourse />} />
        </Routes>
    </div>
  )
}

export default AllCourses