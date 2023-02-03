import React, { useState } from "react";
import { SideBar, Header } from "../index";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import STUDENT_DATA from "./ManageStudentData";
import Avatar from "@mui/material/Avatar";
import { images } from "../../../../constants";

import ReactPaginate from "react-paginate";

const ManageStudent = () => {
  const [searchCourse, setSearchCourse] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchBatch, setSearchBatch] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const studentsPerPage = 10;
  const pagesVisited = pageNumber * studentsPerPage;

  const displayStudents = STUDENT_DATA.filter((student) => {
    if (searchCourse !== "") {
      return student.course.toLowerCase().includes(searchCourse.toLowerCase());
    } else if (searchName !== "") {
      return student.name.toLowerCase().includes(searchName.toLowerCase());
    } else if (searchBatch !== "") {
      return student.batch.toString().includes(searchBatch);
    } else {
      return student;
    }

    // return false;
  }).slice(pagesVisited, pagesVisited + studentsPerPage);

  const pageCount = Math.ceil(
    STUDENT_DATA.filter((student) => {
      if (searchCourse !== "") {
        return student.course
          .toLowerCase()
          .includes(searchCourse.toLowerCase());
      } else if (searchName !== "") {
        return student.name.toLowerCase().includes(searchName.toLowerCase());
      } else if (searchBatch !== "") {
        return student.batch.toString().includes(searchBatch);
      } else {
        return student;
      }
      //   return false;
    }).length / studentsPerPage
  );

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
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
                    <p className='text-xs py-1'><Link to='/'>Home</Link> &#62; <span className='text-red-600'> Manage Students</span></p>
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
                        placeholder='Search by Name'
                        onChange={(e) => {
                          setSearchName(e.target.value);
                          handlePageChange({ selected: 0 });
                        }}
                      />
                    </div>
                    <div className='flex'>
                      <input
                        className='px-4 py-2 w-full rounded-sm bg-[#ecf0fa] text-xs text-[#8ba7eb] outline-none'
                        type='text'
                        placeholder='Search by Batch'
                        onChange={(e) => {
                          setSearchBatch(e.target.value);
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
                      <thead className='bg-gray-300 pt-4'>
                        <tr className='font-bold text-sm'>
                          <th>
                            <input type='checkbox' />
                          </th>
                          <th>Roll No</th>
                          <th>Photo</th>
                          <th>Name</th>
                          <th>Batch</th>
                          <th>Year</th>
                          <th>Gender</th>
                          <th>Email</th>
                          <th>Course</th>
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
                            <td>{item.roll}</td>
                            <td>
                              <Avatar
                                src={item.image}
                                sx={{ width: 34, height: 34 }}
                              />
                            </td>
                            <td>{item.name}</td>
                            <td>{item.batch}</td>
                            <td>{item.year}</td>
                            <td>{item.gender}</td>
                            <td>{item.email}</td>
                            <td>{item.course}</td>
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
              </div>
            </div>
          </div>
  );
};

export default ManageStudent;
