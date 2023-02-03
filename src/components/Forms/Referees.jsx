import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowUp,
  faArrowRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Clone from "../../assets/clone.png";

const Referees = () => {
  const [selectedFile, setSelectedFile] = useState({});
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
    <div className='w-full max-w-xs md:max-w-4xl mx-auto form-bg px-8 pt-6 pb-8 py-5'>
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
        <div className='w-full md:w-2/4'>
          <div class='mb-4'>
            <label
              class='block text-[#96A4C5] text-sm font-medium mb-2'
              for='name'
            >
              Full Name
            </label>
            <input
              class='input-field leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              placeholder=''
              type='text'
            />
          </div>
          <div class='mb-4'>
            <label
              class='block text-[#96A4C5] text-sm font-medium mb-2'
              for='username'
            >
              Relationship
            </label>
            <input
              class='input-field leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              placeholder=''
              type='text'
            />
          </div>
          <div class='mb-4'>
            <label
              class='block text-[#96A4C5] text-sm font-medium mb-2'
              for='username'
            >
              Telephone
            </label>
            <input
              class='input-field leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='tel'
              placeholder=''
            />
          </div>
          <div class='mb-4'>
            <label
              class='block text-[#96A4C5] text-sm font-medium mb-2'
              for='email'
            >
              Email
            </label>
            <input
              class='input-field leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='email'
              placeholder=''
            />
          </div>
          <div class='mb-4'>
            <label
              class='block text-[#96A4C5] text-sm font-medium mb-2'
              for='address'
            >
              Address
            </label>
            <input
              class='input-field leading-tight focus:outline-none focus:shadow-outline'
              id='address'
              type='text'
              placeholder=''
            />
          </div>
          <div class='mb-4'>
            <label
              class='block text-[#96A4C5] text-sm font-medium mb-2'
              for='country'
            >
              Country
            </label>
            <input
              class='input-field leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              placeholder=''
            />
          </div>
          <div className='flex items-center justify-center my-4'>
            <img src={Clone} alt='' className='mr-3 w-4 h-4' />
            <span className='font-semibold text-sm md:text-base text-black'>
              + + Add two more Referees
            </span>
          </div>
          <div class='flex items-center flex-col-reverse md:flex-row justify-between'>
            <div className='w-full md:w-40 mt-2 md:mt-0'>
              <Link to='/getaccredit3'>
                <button className='btn-white w-full h-12'>Back</button>
              </Link>
            </div>
            <div className='w-full md:w-40'>
              <Link to='/preferred-course'>
                <button className='btn-red w-full h-12'>
                  Save and Proceed
                </button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Referees;
