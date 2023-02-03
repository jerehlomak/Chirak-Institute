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
        Referees
      </h1>
      <form className='flex justify-center'>
        <div className='w-full md:w-3/4'>
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
        </div>
      </form>
      <div className='flex items-center justify-center my-4'>
            <img src={Clone} alt='' className='mr-3 w-4 h-4' />
            <span className='font-semibold text-xs text-black'>
              + + Add two more Referees
            </span>
          </div>
    </div>
  );
};

export default Referees;
