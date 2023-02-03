import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import DeleteLessonPlan from "./DeleteLessonPlan";

const NewCourse = () => {
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);

  const clicked = (e) => {
    e.preventDefault();
    setModalOn(true);
  };
  return (
    <div className='background'>
      <form className='w-full max-w-xs md:max-w-4xl mx-auto form-bg !rounded-md px-8 pt-6 pb-8 py-5'>
        <h1 className='font-semibold text-xl text-black pb-4'>
          Add New Course
        </h1>
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
                className='dash-input-field leading-tight focus:outline-none focus:shadow-outline bg-green-500'
                id='grid-state'
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
          <div className='w-full md:w-1/2 px-3 mb-4'>
            <label
              className='block text-[#96A4C5] text-sm font-medium mb-2'
              htmlFor='grid-course-subtitle'
            >
              Course Subtitle
            </label>
            <input
              className='dash-input-field leading-tight focus:outline-none focus:shadow-outline bg-green-500'
              id='grid-course-subtitle'
              type='text'
              placeholder=''
            />
          </div>
          <div className='w-full md:w-1/2 px-3 mb-4'>
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
          <div className='w-full md:w-1/2 px-3 mb-4'>
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
          <div className='w-full md:w-1/2 px-3 mb-4'>
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
          <div className='w-full md:w-1/2 px-3 mb-4'>
            <label
              className='block text-[#96A4C5] text-sm font-medium mb-2'
              htmlFor='grid-experience'
            >
              Upload a Course Cover Photo (png, jpg)
            </label>
            <input type='file' name='' id='' />
          </div>
          <div className='w-full md:w-1/2 px-3 mb-4'>
            <label
              className='block text-[#96A4C5] text-sm font-medium mb-2'
              htmlFor='grid-experience'
            >
              Upload a Certification (PDF only)
            </label>
            <input type='file' name='' id='' />
          </div>

          <div className='w-full flex space-x-4 px-3'>
            <button
              className='px-6 rounded py-2 bg-black text-white'
              onClick={(e) => clicked(e)}
            >
              Upload
            </button>
            <button className='px-6 rounded py-2 bg-[#cccccc]'>Reset</button>
          </div>
          {choice && (
            <div className='flex justify-center'>{console.log("Deleted")}</div>
          )}

          {modalOn && (
            <DeleteLessonPlan setModalOn={setModalOn} setChoice={setChoice} />
          )}
        </div>
      </form>
    </div>
  );
};

export default NewCourse;
