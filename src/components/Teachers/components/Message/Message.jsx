import React from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import { Link } from "react-router-dom";
import MessageData from "./MessageData";
import ResponseData from "./ResponseData";
import { FaLocationArrow, FaSmile } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";

const Message = () => {
  return (
    <div className='background flex flex-row'>
      <SideBar />
      <div className='flex flex-col w-full'>
        <Header />
        <div className='flex-auto p-4 -mt-6'>
          <div className='flex flex-col justify-center items-start py-4'>
            <h3 className='text3xl font-bold'>Teacher's Dashboard</h3>
            <p className='text-xs py-1'>
              <Link to='/all-courses'>Home</Link> &#62;{" "}
              <span className='text-red-600'>Assessment</span>
            </p>
          </div>
          <div className='flex'>
            <div className='w-full md:w-3/4 mr-5'>
              <div className='bg-white rounded-lg p-7'>
                {MessageData.map((item, index) => (
                  <div className='flex mb-3 items-center'>
                    <div className='w-10 h-10 mr-2'>
                      <img src={item.img} alt='' />
                    </div>

                    <div className='bg-[#E7F6F8] rounded-r-lg rounded-tl-lg p-2'>
                      <div className='text-sm flex justify-between'>
                        <h5 className='font-bold'>{item.name}</h5>
                        <h5 className='text-[#664500] font-semibold ml-5'>
                          {item.date}
                        </h5>
                      </div>
                      <div className='text-sm'>{item.text}</div>
                    </div>
                  </div>
                ))}
                {ResponseData.map((item, index) => (
                  <div className='flex mb-3 items-center justify-end'>
                    <div className='bg-[#EFF0F0] rounded-r-lg rounded-tl-lg p-2'>
                      <div className='text-sm flex justify-between'>
                        <h5 className='font-bold'>{item.name}</h5>
                        <h5 className='text-[#664500] font-semibold ml-5'>
                          {item.date}
                        </h5>
                      </div>
                      <div className='text-sm'>{item.text}</div>
                    </div>
                    <div className='w-10 h-10 ml-2'>
                      <img src={item.img} alt='' />
                    </div>
                  </div>
                ))}
              </div>
              <div className='bg-black justify-between flex text-white rounded-b-xl'>
                <div className='flex items-center py-3 px-5'>
                  <FaSmile />
                  <input
                    type='text'
                    className='ml-3 bg-transparent placeholder-[#ffffff]'
                    placeholder='Message'
                  />
                </div>
                <div className='bg-[#373E4E] py-3 px-5 rounded-br-xl'>
                  <FaLocationArrow />
                </div>
              </div>
            </div>
            <div className='w-1/4 text-sm hidden md:block'>
              <div className='bg-white rounded-lg p-7 text-center font-bold'>
                SWITCH CLASS
              </div>
              <div className='bg-white rounded-lg p-7 text-center font-bold mt-3 flex justify-center items-center'>
                <HiUsers className='text-[25px]' />
                <div className='font-bold ml-3'>
                  <h5> Total Students</h5>
                  <h5>128K</h5>
                </div>
              </div>
              <div className='bg-white rounded-lg p-7 text-center font-bold mt-3 flex justify-center items-center'>
                <HiUsers className='text-[25px]' />
                <div className='font-bold ml-3'>
                  <h5> Students Online </h5>
                  <h5>128K</h5>
                </div>
              </div>
              <div className='bg-white rounded-lg p-7 text-center font-bold mt-3 flex justify-center items-center'>
                <HiUsers className='text-[25px]' />
                <div className='font-bold ml-3'>
                  <h5> Start Class</h5>
                  <h5>128K</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
