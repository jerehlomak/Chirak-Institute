import React, { useState } from "react";
import { MdFileUpload } from "react-icons/md";
import {
  BsFillQuestionSquareFill,
  BsFillChatFill,
  BsMicFill,
  BsFillCameraVideoOffFill,
} from "react-icons/bs";
import { SiFiles } from "react-icons/si";
import { FaLessThan } from "react-icons/fa";
import { images } from "../../../../constants";
import { FcEndCall } from "react-icons/fc";
import { MdOutlineCallEnd } from "react-icons/md";
import Avatar from "@mui/material/Avatar";
import { Chat, Questions, ViewAllStudents } from "../";
import { FaTimes } from "react-icons/fa";
import ChatData from "./Chats/ChatData";
import { Link } from "react-router-dom";

const VideoCall = () => {
  const [chat, setChat] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [showAllStudents, setShowAllStudents] = useState(false);
  const [hidden, setHidden] = useState(false)
  const shorten = (text) => {
    return text.slice(0, 20) + (text.length > 10 ? "..." : "");
  };

  const handleShowQuestions = () => {
    setShowQuestions(false)
    setShowAllStudents(false)
  }

  return (
    <div className="relative bg-[#e5e5e5] h-screen flex-auto w-full">
      <div className="flex flex-row h-screen items-start">
        {hidden && (
            <div className="absolute z-10 opacity-90 flex flex-col h-screen w-24 items-center justify-center shadow-sm bg-[#cccccc] md:hidden">
            <div className="absolute top-36 pl-2 space-y-20">
              <div className="flex flex-col items-center cursor-pointer ">
                <MdFileUpload size={24} />
                <p className="text-xs place-self-center">
                  Upload <br /> Files
                </p>
              </div>
              <div onClick={() => setHidden(false)}>
                <div 
                  onClick={() => setShowQuestions(!showQuestions)}
                  className="flex flex-col items-center cursor-pointer"
                >
                  <span className="absolute bg-white p-1 rounded-full shadow-lg ml-5 -mt-5">
                    <p className="text-red-600 text-xs">67</p>
                  </span>
                  <BsFillQuestionSquareFill size={24}  />
                  <p className="text-xs">Questions</p>
                  
                </div>
              </div>
              <div className="flex flex-col items-center cursor-pointer">
                <SiFiles size={24} />
                <p className="text-xs">View all Files</p>
              </div>
            </div>
          </div>
        )}
        <div className="hidden md:flex flex-col h-screen w-24 items-center justify-center shadow-sm bg-[#cccccc]">
            <div className="absolute top-36 pl-2 space-y-20">
              <div className="flex flex-col items-center cursor-pointer ">
                <MdFileUpload size={24} />
                <p className="text-xs place-self-center">
                  Upload <br /> Files
                </p>
              </div>
              <div
                onClick={() => setShowQuestions(!showQuestions)}
                className="flex flex-col items-center cursor-pointer"
              >
                <span className="absolute bg-white p-1 rounded-full shadow-lg ml-5 -mt-5">
                  <p className="text-red-600 text-xs">67</p>
                </span>
                <BsFillQuestionSquareFill size={24} />
                <p className="text-xs">Questions</p>
                
              </div>
              
              <div className="flex flex-col items-center cursor-pointer">
                <SiFiles size={24} />
                <p className="text-xs">View all Files</p>
              </div>
            </div>
          </div>
        <div
          className={`flex flex-col px-4 py-3 ${
            chat ? "hidden sm:flex sm:w-2/4 md:w-3/4" : "w-full"
          }`}
        >
          <div className="flex space-x-4 items-center">
            <span className="p-2 bg-slate-400 cursor-pointer rounded-md">
              <Link to="/all-courses">
                <FaLessThan />
              </Link>{" "}
            </span>
            <h1 className="font-bold text-xl">
              {"Introduction to web development with Chakra UI"}
            </h1>
            <div onClick={() => setHidden(!hidden)} className="px-4 py-2 cursor-pointer bg-black text-white rounded-md md:hidden">others</div>
          </div>
          <div className="flex w-full justify-between mt-3">
            <div className="flex space-x-2 md:space-x-4 items-center text-xs md:text-sm">
              <p>Student Present</p>
              <span className="bg-[#11C6FF] px-2 py-1 rounded-md text-white">
                546
              </span>
            </div>
            <div className="flex  space-x-2 md:space-x-4 items-center text-xs md:text-sm">
              <p>Student Absent</p>
              <span className="bg-[#e9a3a3] px-2 py-1 rounded-md text-white">
                546
              </span>
            </div>
            <div
              onClick={() => setChat(!chat)}
              className={`cursor-pointer relative transition duration-200 ${
                chat ? "hidden" : "flex"
              }`}
            >
              <BsFillChatFill size={40} />
              <span className="absolute -right-2 -top-2 text-xs text-red-600 bg-white rounded-full p-1">
                20
              </span>
            </div>
          </div>
          {/* image */}
          <div
            onMouseEnter={() => setShowIcons(true)}
            onMouseLeave={() => setShowIcons(false)}
            className="relative flex w-sreen h-[26rem] md:h-[32rem] lg:h-[34rem] justify-center items-end rounded-lg mt-2"
          >
            <img
              src={images.video1}
              alt="videocall"
              className="w-full h-full object-cover"
            />
            {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9YffrCViTVk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            {showIcons && (
              <div className="absolute flex mb-3 space-x-4 items-center">
                <span className="bg-[#f8fafc] p-2 rounded-full cursor-pointer">
                  <BsMicFill size={24} color="red" />
                </span>
                <span className="p-3 rounded-full bg-red-600 cursor-pointer text-white">
                  <MdOutlineCallEnd size={24} />
                </span>
                <span className="bg-[#f8fafc] p-2 rounded-full cursor-pointer">
                  <BsFillCameraVideoOffFill size={24} color="red" />
                </span>
              </div>
            )}
            <div className="absolute left-2 mb-2 text-white text-sm font-medium">
              <p>Tutor</p>
              <p>Mr James Uwhuru</p>
            </div>
            <div className="absolute flex top-6 right-5 px-4 py-2 items-center rounded-full bg-[#614343] space-x-2">
              <div className="w-2 h-2 rounded-full bg-red-600" />
              <p className="text-white text-sm">3:59</p>
            </div>
          </div>
          <div className="w-full mt-4">
            <div className='grid grid-cols-3 md:grid-cols-8 lg:grid-cols-12 sm:grid-cols-5 gap-4 items-center'>
              {ChatData.map((item, index) => (
                <div
                  key={index}
                  className="shadow-2xl bg-[#e1e6eb] rounded-full p-2 w-20 h-20"
                >
                  <Avatar
                    alt="students"
                    src={item.avatar}
                    sx={{ width: 64, height: 64 }}
                  />
                </div>
              ))}
             
            </div>
            <button onClick={() => setShowAllStudents(!showAllStudents)} className="bg-[#f8fafc] rounded-md border-none py-2 px-4 mt-4 text-sm font-semibold">View all</button>
          </div>
        </div>
        {chat && (
          <div
            className={`relative flex w-1/4 ${
              chat
                ? "flex w-4/4 ml-36 sm:w-2/4 sm:ml-0 md:w-1/4 md:ml-0 z-10"
                : ""
            }`}
          >
            <Chat />
            <FaTimes
              size={24}
              className="absolute top-12 left-0 cursor-pointer"
              onClick={() => setChat(false)}
            />
          </div>
        )}
      </div>
      {showQuestions && <Questions handleShowQuestions={handleShowQuestions} />}
      {showAllStudents && <ViewAllStudents handleShowQuestions={handleShowQuestions} />}
    </div>
  );
};

export default VideoCall;
