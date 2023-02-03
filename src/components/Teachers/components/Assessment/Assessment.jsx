import React, { useState } from 'react'
import { SideBar, Header, AssessmentQuestion } from '../'
import { AiFillEye, AiFillEdit } from "react-icons/ai";
import { MdDeleteSweep } from "react-icons/md";
import { Link } from 'react-router-dom'
import { Table } from "react-bootstrap";
import DeleteLesson from '../LessonPlan/DeleteLesson'
import ReactPaginate from "react-paginate";
import ASSESSMENTDATA from './AssessmentData'
import Questions from './Questions'

const Assessment = () => {
    const [items, setItems] = useState(ASSESSMENTDATA);
    const [searchCourse, setSearchCourse] = useState("");
    const [searchDay, setSearchDay] = useState("");
    const [searchLesson, setSearchLesson] = useState("");
    const [pageNumber, setPageNumber] = useState(0);
  
    const [modalOn, setModalOn] = useState(false);
    const [choice, setChoice] = useState(false);

    // question form step
    const [step, setStep] = useState(0)

    const clicked = (e) => {
        e.preventDefault();
        setModalOn(true);
    }

    const studentsPerPage = 10
    const pagesVisited = pageNumber * studentsPerPage

    const displayAssessments = items.filter((student) => {
        if (searchCourse !== "") {
            return student.name.toLowerCase().includes(searchCourse.toLowerCase());
          } else if (searchDay !== "") {
            return student.day.toLowerCase().includes(searchDay.toLowerCase());
          } else if (searchLesson !== "") {
            return student.lessonplan.toString().includes(searchLesson);
          } else {
            return student
        }
    }).slice(pagesVisited, pagesVisited + studentsPerPage)

    
    const pageCount = Math.ceil(
        items.filter((student) => {
            if (searchCourse !== "") {
              return student.course
                .toLowerCase()
                .includes(searchCourse.toLowerCase());
            } else if (searchDay !== "") {
              return student.day.toLowerCase().includes(searchDay.toLowerCase());
            } else if (searchLesson !== "") {
              return student.lessonplan.toString().includes(searchLesson);
            } else {
              return student;
            }
            //   return false;
          }).length / studentsPerPage
    )
    console.log(pageCount)

    const handlePageChange = ({ selected }) => {
        setPageNumber(selected)
    }

    const shorten = (text) => {
        return text.slice(0, 10) + (text.length > 10 ? "..." : "")
    }
    const handleStep = (step) => {
        setStep(step)
    }
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
                    <p className='text-xs py-1'><Link to='/all-courses'>Home</Link> &#62; <span className='text-red-600'>Assessment</span></p>
                </div>
                <div className='flex flex-col md:flex md:flex-row gap-4'>
                    <div className='flex flex-col items-center bg-white shadow-md rounded-md w-full md:w-1/3 p-6'>
                        <div className='w-full'>
                            {step === 0 && <Questions onStepChange={handleStep} step={step} />
                            
                            }
                            {step >= 1 && <AssessmentQuestion onStepChange={handleStep} step={step} /> }
                        </div>
                        <div className='flex pt-6 space-x-6'>
                            <button onClick={() => setStep(step - 1)} 
                            disabled={step <= 0} className='text-xs px-4 py-3 font-semibold rounded-md bg-[#cccccc] text-black'>
                                {step === 0 ? 'RESET' : 'BACK'}
                            </button>
                            {step >= 0 && step < 15 && 
                                <button onClick={() => handleStep(step + 1)} className='text-xs px-4 py-3 font-semibold rounded-md bg-black text-white hover:bg-[#cccccc]'>
                                    {step === 0 ? 'START' : 'SAVE AND CONTINUE'}
                                </button>   
                            }
                            {step === 15 && 
                                <button onClick={() => handleStep(step + 1)} className='text-xs px-4 py-3 font-semibold rounded-md bg-black text-white hover:bg-[#cccccc]'>
                                    SUBMIT
                                </button>   
                            }
                        </div>
                    </div>
                    <div className='flex flex-col bg-white shadow-md rounded-md w-full md:w-2/3 p-6'>
                        <h1 className='font-semibold text-xl'>All Assessments</h1>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-2 mt-3 w-full items-start justify-start '>
                            <div className='flex'>
                                <input 
                                className='px-4 py-2 w-full rounded-sm bg-[#ecf0fa] text-xs text-[#8ba7eb] outline-none' type="text" placeholder='Search by Question' />
                            </div>
                            <div className='flex'>
                                <input className='px-4 py-2 w-full rounded-sm bg-[#ecf0fa] text-xs text-[#8ba7eb] outline-none' type="text" placeholder='Search by Answer' />
                            </div>
                            <div className='flex'>
                                <input className='px-4 py-2 w-full rounded-sm bg-[#ecf0fa] text-xs text-[#8ba7eb] outline-none' type="text" placeholder='Search by Date' />
                            </div>
                            <div className='flex items-center justify-content-center'>
                                <button className='bg-[#000000] text-white px-6 py-2 text-sm uppercase rounded-md'>Search</button>
                            </div>
                        </div>
                        <div className='mt-6 whitespace-nowrap'>
                            <Table responsive striped>
                                <thead className='bg-gray-300 pt-2'>
                                    <tr className='font-bold text-sm'>
                                        <th>
                                        <input type='checkbox' />
                                        </th>
                                        <th>Course Name</th>
                                        <th>No of Stud.</th>
                                        <th>Status</th>
                                        <th>Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {displayAssessments.map((item,index) => (
                                        <tr key={index}>
                                            <td>
                                                <input type='checkbox' />
                                            </td>
                                            <td><Link to='/mac-screen'>{item.name}</Link></td>
                                            <td>{item.num}</td>
                                            <td>{item.status}</td>
                                            <td>{item.date}</td>
                                            <td className='flex space-x-3'>
                                                <span>
                                                    <AiFillEye />
                                                </span>
                                                <span>
                                                    <AiFillEdit />
                                                </span>
                                                <span>
                                                    <MdDeleteSweep color='red' onClick={clicked} className='cursor-pointer'/>
                                                </span>
                                            </td>
                                        </tr>
                                    ))}    
                                </tbody>
                            </Table>
                            <footer className='py-3 items-end'>
                                <ReactPaginate
                                pageCount={pageCount}
                                onPageChange={handlePageChange}
                                previousLabel={"<"}
                                nextLabel={">"}
                                breakClassName={
                                    "products__arrow flex justify-center items-center"
                                }
                                containerClassName={"products__foot"}
                                pageClassName={
                                    "products__arrow flex justify-center items-center"
                                }
                                previousClassName={
                                    "products__arrow flex justify-center items-center"
                                }
                                nextClassName={
                                    "products__arrow flex justify-center items-center"
                                }
                                activeClassName={"bg-black text-white"}
                                />
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
            {choice && (
                <div className='flex justify-center'>{console.log("Deleted")}</div>
              )}

              {modalOn && (
                <DeleteLesson setModalOn={setModalOn} setChoice={setChoice} />
              )}
        </div>
    </div>
  )
}

export default Assessment