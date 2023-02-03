import React, { useEffect, useState } from "react";
import { SideBar, Header } from "../index";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import LESSONPLANDATA from "./LessonPlanData";
import { AiFillEye, AiFillEdit } from "react-icons/ai";
import { MdDeleteSweep } from "react-icons/md";
import ReactPaginate from "react-paginate";
import DeleteLesson from './DeleteLesson'
import LessonPlanDetails from './LessonPlanDetails'

const LessonPlan = () => {
  const [items, setItems] = useState(LESSONPLANDATA);
  const [searchCourse, setSearchCourse] = useState("");
  const [searchDay, setSearchDay] = useState("");
  const [searchLesson, setSearchLesson] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);

  const clicked = (e) => {
    e.preventDefault();
    setModalOn(true);
  }

  const studentsPerPage = 10;
  const pagesVisited = pageNumber * studentsPerPage;

  const displayStudents = items.filter((student) => {
      if (searchCourse !== "") {
        return student.name.toLowerCase().includes(searchCourse.toLowerCase());
      } else if (searchDay !== "") {
        return student.day.toLowerCase().includes(searchDay.toLowerCase());
      } else if (searchLesson !== "") {
        return student.lessonplan.toString().includes(searchLesson);
      } else {
        return student;
      }

      // return false;
    })
    .slice(pagesVisited, pagesVisited + studentsPerPage);

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
  );

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  const shorten = (text) => {
    return text.slice(0, 10) + (text.length > 10 ? "..." : "");
  };

  return (
    <div className='background flex flex-row'>
      <SideBar />
      <div className='flex flex-col w-full'>
        <Header />
        <div className='flex-auto p-4 -mt-6'>
          <div className='flex flex-col justify-center items-start py-4'>
            <h3 className='text3xl font-bold'>Teacher's Dashboard</h3>
            <p className='text-xs py-1'>
              <Link to='/'>Home</Link> &#62;{" "}
              <span className='text-red-600'>
                Lesson Plan &#62; All Lesson Plan
              </span>
            </p>
          </div>
          <div className='flex flex-col bg-white rounded-md w-full p-6'>
            <h1 className='font-semibold text-xl'>Lesson Plan</h1>

              <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-3 w-full items-start justify-start '>
                <div className='flex'>
                  <input
                    className='px-4 py-2 w-full rounded-sm bg-[#ecf0fa] text-xs text-[#8ba7eb] outline-none'
                    type='text'
                    placeholder='Search by Course'
                    onChange={(e) => {
                      setSearchCourse(e.target.value);
                      handlePageChange({ selected: 0 });
                    }}
                  />
                </div>
                <div className='flex'>
                  <input
                    className='px-4 py-2 w-full rounded-sm bg-[#ecf0fa] text-xs text-[#8ba7eb] outline-none'
                    type='text'
                    placeholder='Search by Day'
                    onChange={(e) => {
                      setSearchDay(e.target.value);
                      handlePageChange({ selected: 0 });
                    }}
                  />
                </div>
                <div className='flex'>
                  <input
                    className='px-4 py-2 w-full rounded-sm bg-[#ecf0fa] text-xs text-[#8ba7eb] outline-none'
                    type='text'
                    placeholder='Search by Lesson Plan'
                    onChange={(e) => {
                      setSearchLesson(e.target.value);
                      handlePageChange({ selected: 0 });
                    }}
                  />
                </div>
                <div className='flex items-center justify-content-center'>
                  <button className='bg-[#000000] text-white px-6 py-2 text-sm uppercase rounded-md'>
                    Search
                  </button>
                </div>
              </div>
            <div className='mt-10 whitespace-nowrap'>
              <Table responsive striped>
                <thead className='bg-gray-300 pt-2'>
                  <tr className='font-bold text-sm'>
                    <th>
                      <input type='checkbox' />
                    </th>
                    <th>Course Name</th>
                    <th>Day</th>
                    <th>Lesson Plan</th>
                    <th>Objective</th>
                    <th>Activities</th>
                    <th>Notes</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {displayStudents.map((item, index) => (
                    <tr
                      className='text-sm font-normal align-middle'
                      key={index}
                    >
                      <td>
                        <input type='checkbox' />
                      </td>
                      <td>{item.name}</td>
                      <td>{shorten(item.day)}</td>
                      <td><Link to='/lesson-plan-details'>{shorten(item.lessonplan)}</Link></td>
                      <td>{shorten(item.objective)}</td>
                      <td>{shorten(item.activities)}</td>
                      <td>{shorten(item.notes)}</td>
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
            
              <footer className='py-3'>
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
              {choice && (
                <div className='flex justify-center'>{console.log("Deleted")}</div>
              )}

              {modalOn && (
                <DeleteLesson setModalOn={setModalOn} setChoice={setChoice} />
              )}
         </div>
        </div>
        
      </div>
    
  )
}

export default LessonPlan
