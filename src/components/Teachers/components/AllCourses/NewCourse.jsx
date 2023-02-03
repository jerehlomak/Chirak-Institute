import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { SideBar, Header } from '../'
import { Link } from 'react-router-dom'
import { BsCurrencyDollar } from 'react-icons/bs'
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";


import { addCourseAction } from "../../../../store/actions/CourseAction";

const NewCourse = () => {
  const dispatch = useDispatch()
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);
//   const [fee, setFee] = useState('free')

  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    fee: 'free',
    price: '',
    certification: null,
    language: 'English',
    courseImg: ''
  })
  const [selectedFile, setSelectedFile] = useState('')
//   const [courseImg, setCourseImg] = useState('')


  const { title, description, fee, courseImg, price, certification, language } = courseData
  

 const handleFileInputChange = (e) => {
    const file = e.target.files[0]

    transformFile(file)
 }

 const handleCertificationInput = (e) => {
    const file = e.target.files[0]
    transformFile1(file)
 }

 const transformFile1 = (file) => {
    const reader = new FileReader()

    if (file) {
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setCourseData({ ...courseData, certification: reader.result })
        }
    }
    else {
        setCourseData({ ...courseData, courseImg: '' })
    }
 }


 const transformFile = (file) => {
    const reader = new FileReader()

    if (file) {
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setCourseData({ ...courseData, courseImg: reader.result })
        }
    }
    else {
        setCourseData({ ...courseData, courseImg: '' })
    }
 }


  
 console.log(courseData)

  const handleSubmit = (e) => {
    e.preventDefault()
    // const formData = new FormData()
    // formData.append('file', courseImg)
    // formData.append('upload_preset', '')

    // axios.post('https://res.cloudinary.com/yiino-technologies/image/upload',
    // formData).then((response) => {
    //     console.log(response)
    // })

    const courseDatas = {
        title, description, courseImg, fee, price, certification, language
    }
    const course = dispatch(addCourseAction(courseDatas))
    console.log(course)
  }



  const clicked = (e) => {
    e.preventDefault();
    setModalOn(true);
  };
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
                <p className='text-xs py-1'><Link to='/all-courses'>Home</Link> &#62; <span className='text-red-600'>Manage Course &#62; Add New Course</span></p>
            </div>
            <div className='flex flex-col bg-white rounded-md w-full p-6'>
            <h1 className='font-semibold text-xl'>Add New Course</h1>
                <form className='w-full !rounded-md pt-6 pb-8 py-5' onSubmit={handleSubmit}>
                    <div className='flex flex-wrap -mx-3 mb-6'>
                    <div className='w-full md:w-1/2 px-3 mb-4'>
                        <label
                        className='block text-[#96A4C5] text-sm font-medium mb-2'
                        htmlFor='grid-course-name'
                        >
                        Course Name
                        </label>
                        <input
                        className='dash-input-field leading-tight focus:outline-none focus:shadow-outline bg-green-500'
                        id='grid-course-name'
                        type='text'
                        placeholder=''
                        name='title'
                        value={title}
                        onChange={(e) => setCourseData({...courseData, title: e.target.value })}
                        />
                    </div>
                    <div className='w-full md:w-1/2 px-3 mb-4 md:mb-0'>
                        <label
                        className='block text-[#96A4C5] text-sm font-medium mb-2'
                        htmlFor='grid-fee'
                        >
                        Course Fee
                        </label>
                        <div className='relative'>
                        <select 
                            name="fee" 
                            value={fee}
                            onChange={(e) => setCourseData({...courseData, fee: e.target.value })}
                            className='dash-input-field leading-tight focus:outline-none focus:shadow-outline bg-green-500'
                            id='grid-state'
                        >
                            <option value='free'>Free</option>
                            <option value='paid'>Paid</option>
                        </select>
                        {fee == 'paid' ? 
                            <div className="relative flex  mt-2 w-full items-start justify-start">
                                <div className="flex w-2/5">
                                    <label htmlFor="paid-option">Price</label>
                                    <span className="flex rounded-sm py-1 ml-3 bg-[#dfdfdf]"><BsCurrencyDollar className="pt-1" />
                                        <input 
                                            className="ml-2 w-3/5 outline-none bg-transparent" 
                                            type="text" 
                                            id="paid-option" 
                                            name='price'
                                            value={price}
                                            onChange={(e) => setCourseData({...courseData, price: e.target.value })}
                                            />
                                    </span>
                                </div>
                                <p className="w-3/5 ml-2 text-xs text-red-500">
                                    Note: Chirak automatically adds $20 to any course 
                                    morethan $50 and $20 to courses lessthan $50. 
                                </p>
                            </div> : '' }
                        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#5f6066]'>
                            <FontAwesomeIcon
                            icon={faCaretDown}
                            style={{
                                fontSize: "14px",
                                marginRight: "5px",
                            }}
                            />
                        </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 px-3 mb-4'>
                        <label
                        className='block text-[#96A4C5] text-sm font-medium mb-2'
                        htmlFor='grid-course-subtitle'
                        >
                        Course Description
                        </label>
                        <input
                            className='dash-input-field leading-tight focus:outline-none focus:shadow-outline bg-green-500'
                            id='grid-course-subtitle'
                            type='text'
                            placeholder=''
                            name="description" 
                            value={description}
                            onChange={(e) => setCourseData({...courseData, description: e.target.value })}
                        />
                    </div>
                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                        <label
                        className='block text-[#96A4C5] text-sm font-medium mb-2'
                        htmlFor='grid-language'
                        >
                        Preferred Language
                        </label>
                        <div className='relative'>
                        <select
                            className='dash-input-field leading-tight focus:outline-none focus:shadow-outline bg-green-500'
                            id='grid-language'
                            name="language" 
                            value={language}
                            onChange={(e) => setCourseData({...courseData, language: e.target.value })}
                        >
                            <option>English</option>
                            <option>Hausa</option>
                            <option>French</option>
                        </select>
                        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#5f6066]'>
                            <FontAwesomeIcon
                            icon={faCaretDown}
                            style={{
                                fontSize: "14px",
                                marginRight: "5px",
                            }}
                            />
                        </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                        <label
                        className='block text-[#96A4C5] text-sm font-medium mb-2'
                        htmlFor='grid-type'
                        >
                        Course Type
                        </label>
                        <div className='relative mb-4'>
                        <select
                            className='dash-input-field leading-tight focus:outline-none focus:shadow-outline bg-green-500'
                            id='grid-type'
                        >
                            <option>New Mexico</option>
                            <option>Missouri</option>
                            <option>Texas</option>
                        </select>
                        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#5f6066]'>
                            <FontAwesomeIcon
                            icon={faCaretDown}
                            style={{
                                fontSize: "14px",
                                marginRight: "5px",
                            }}
                            />
                        </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                        <label
                        className='block text-[#96A4C5] text-sm font-medium mb-2'
                        htmlFor='grid-experience'
                        >
                        Years of Experience
                        </label>
                        <div className='relative mb-4'>
                        <select
                            className='dash-input-field leading-tight focus:outline-none focus:shadow-outline bg-green-500'
                            id='grid-experience'
                        >
                            <option>New Mexico</option>
                            <option>Missouri</option>
                            <option>Texas</option>
                        </select>
                        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#5f6066]'>
                            <FontAwesomeIcon
                            icon={faCaretDown}
                            style={{
                                fontSize: "14px",
                                marginRight: "5px",
                            }}
                            />
                        </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                        <label
                        className='block text-[#96A4C5] text-sm font-medium mb-2'
                        htmlFor='grid-experience'
                        >
                        Upload a Course Cover Photo (png, jpg)
                        </label>
                        <input 
                            type='file' 
                            name='courseImg'
                            // value={courseImg}
                            onChange={handleFileInputChange}
                            
                        />
                    </div>
                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                        <label
                        className='block text-[#96A4C5] text-sm font-medium mb-2'
                        htmlFor='grid-experience'
                        >
                        Upload a Certification (PDF only)
                        </label>
                        <input 
                            type='file' 
                            name='certification'
                            // value={certification}
                            onChange={handleCertificationInput}
                        />
                    </div>

                    <div className='w-full flex space-x-4 px-3 mt-6'>
                        <button
                            className='px-6 rounded py-2 bg-black text-white'
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    {/* {choice && (
                        <div className='flex justify-center'>{console.log("Deleted")}</div>
                    )}

                    {modalOn && (
                        <DeleteLessonPlan setModalOn={setModalOn} setChoice={setChoice} />
                    )} */}
                    </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
  );
};

export default NewCourse;
