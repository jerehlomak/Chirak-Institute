import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowUp,
  faArrowRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Qualification = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const uploadHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setIsFilePicked(true);
  };
  const removeFiles = () => {
    console.log("refreshed");
    // value={isFilePicked ? selectedFile.name : ""}
  };

  return (
    <div>
      <p className='font-medium text-sm md:text-base py-1 md:py-1 text-black text-center'>
        Welcome Sani Emeka
      </p>
      <div className='max-w-lg mx-auto pt-1'>
        <p className='text-red-500 font-medium text-center text-sm md:text-base pt-2 pb-3 md:pb-4'>
          Fill correctly to the best of your knowledge, for any mislead will
          lead to rejection of application.
        </p>
      </div>
      <h1 className='text-2xl text-center font-semibold pb-3 tracking-normal'>
        Qualification
      </h1>
      <form className='flex justify-center'>
        <div className='w-full md:w-3/4'>
          <div class='mb-4'>
            <label
              class='block text-[#96A4C5] text-sm font-medium mb-2'
              for='name'
            >
              Secondary School Name (SSCE)
            </label>
            <input
              class='input-field leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              placeholder='St Academy'
            />
            <div className='flex mt-2.5 h-[37px] items-center'>
              <div className='max-w-[134px] relative mr-3 h-full'>
                <input
                  type='file'
                  name=''
                  id=''
                  onChange={uploadHandler}
                  className='z-20 relative w-full opacity-0 h-full cursor-pointer'
                />
                <button
                  className='text-black bg-[#11C6FF] px-3 py-2.5 rounded flex items-center absolute top-0 left-0 z-10 w-full h-full cursor-pointer'
                  type='file'
                >
                  <span className='text-sm place-self-center'>Upload Result</span>
                  <FontAwesomeIcon
                    icon={faLongArrowUp}
                    style={{ fontSize: "12px", marginLeft: "5px" }}
                  />
                </button>
              </div>

              <button
                className='bg-black h-full text-white px-3 py-1.5 mr-3 rounded cursor-pointer'
                onClick={removeFiles}
              >
                <span className='text-sm'> Refresh</span>
                <FontAwesomeIcon
                  icon={faArrowRotateRight}
                  style={{ fontSize: "12px", marginLeft: "5px" }}
                />
              </button>
            </div>
          </div>
          <div class='mb-4'>
            <label
              class='block text-[#96A4C5] text-sm font-medium mb-2'
              for='username'
            >
              Tertiary Institution Name (1st Degree)
            </label>
            <input
              class='input-field leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              placeholder='St Academy'
            />
            <div className='flex mt-2.5 h-[37px] items-center'>
              <div className='max-w-[134px] relative mr-3 h-full'>
                <input
                  type='file'
                  name=''
                  id=''
                  onChange={uploadHandler}
                  className='z-20 relative w-full opacity-0 h-full cursor-pointer'
                />
                <button
                  className='text-black bg-[#11C6FF] px-3 py-1.5 rounded flex items-center absolute top-0 left-0 z-10 w-full h-full cursor-pointer'
                  type='file'
                >
                  <span className='text-sm'>Upload Result</span>
                  <FontAwesomeIcon
                    icon={faLongArrowUp}
                    style={{ fontSize: "12px", marginLeft: "5px" }}
                  />
                </button>
              </div>

              <button
                className='bg-black h-full text-white px-3 py-1.5 mr-3 rounded cursor-pointer'
                onClick={removeFiles}
              >
                <span className='text-sm'> Refresh</span>
                <FontAwesomeIcon
                  icon={faArrowRotateRight}
                  style={{ fontSize: "12px", marginLeft: "5px" }}
                />
              </button>
            </div>
          </div>
          <div class='mb-4'>
            <label
              class='block text-[#96A4C5] text-sm font-medium mb-2'
              for='username'
            >
              Tertiary Institution Name (Master)
            </label>
            <input
              class='input-field leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              placeholder=''
            />
            <div className='flex mt-2.5 h-[37px] items-center'>
              <div className='max-w-[134px] relative mr-3 h-full'>
                <input
                  type='file'
                  name=''
                  id=''
                  onChange={uploadHandler}
                  className='z-20 relative w-full opacity-0 h-full cursor-pointer'
                />
                <button
                  className='text-black bg-[#11C6FF] px-3 py-1.5 rounded flex items-center absolute top-0 left-0 z-10 w-full h-full cursor-pointer'
                  type='file'
                >
                  <span className='text-sm'>Upload Result</span>
                  <FontAwesomeIcon
                    icon={faLongArrowUp}
                    style={{ fontSize: "12px", marginLeft: "5px" }}
                  />
                </button>
              </div>

              <button
                className='bg-black h-full text-white px-3 py-1.5 mr-3 rounded cursor-pointer'
                onClick={removeFiles}
              >
                <span className='text-sm'> Refresh</span>
                <FontAwesomeIcon
                  icon={faArrowRotateRight}
                  style={{ fontSize: "12px", marginLeft: "5px" }}
                />
              </button>
            </div>
          </div>
          <div class='mb-4'>
            <label
              class='block text-[#96A4C5] text-sm font-medium mb-2'
              for='username'
            >
              OTHERS (Related Course Certification)
            </label>
            <input
              class='input-field leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              placeholder=''
            />
            <div className='flex mt-2.5 h-[37px] items-center'>
              <div className='max-w-[134px] relative mr-3 h-full'>
                <input
                  type='file'
                  name=''
                  id=''
                  onChange={uploadHandler}
                  className='z-20 relative w-full opacity-0 h-full cursor-pointer'
                />
                <button
                  className='text-black bg-[#11C6FF] px-3 py-2.5 md:py-1.5 rounded flex items-center absolute top-0 left-0 z-10 w-full h-full cursor-pointer'
                  type='file'
                >
                  <span className='text-sm'>Upload Result</span>
                  <FontAwesomeIcon
                    icon={faLongArrowUp}
                    style={{ fontSize: "12px", marginLeft: "5px" }}
                  />
                </button>
              </div>

              <button
                className='bg-black h-full text-white px-3 py-2.5 md:py-1.5 mr-3 rounded cursor-pointer'
                onClick={removeFiles}
              >
                <span className='text-sm'> Refresh</span>
                <FontAwesomeIcon
                  icon={faArrowRotateRight}
                  style={{ fontSize: "12px", marginLeft: "5px" }}
                />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Qualification;
