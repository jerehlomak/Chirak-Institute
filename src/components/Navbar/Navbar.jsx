import React, { useState } from "react";
import { images } from "../../constants/";
import { BiBookOpen } from "react-icons/bi";
import { AiOutlineSearch, AiOutlineMenuUnfold } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdFace } from "react-icons/md";
import { MdArrowDropDownCircle } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import TinyFlag from "tiny-flag";
import { GiUsaFlag } from "react-icons/gi";
import { BsBellFill } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { BsHouseDoorFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { RiUserVoiceFill } from "react-icons/ri";
import { BsGenderMale } from "react-icons/bs";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { BiMenu } from "react-icons/bi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GrLock } from "react-icons/gr";

import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../store/actions/user.action";

import Dropdown from "../Dropddown/Dropdown";
import AntDropDown from "../Dropddown/AntDropDown";

import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const variants = {
    open: { opacity: 1, x: 0 },
    close: { opacity: 0, x: "-100%" },
  };

  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  return (
    <>
      {/* Navbar */}
      <nav className='relative container mx-auto p-6'>
        {/* flex container */}
        <div className='flex items-center justify-between'>
          <div className='pt-2 -ml-10 w-20 h-15 sm:ml-1 md:mr-4'>
            <Link to='/'>
              <img src={images.logo} alt='logo' />
            </Link>
          </div>
          {/* Menu Items */}
          <div className='hidden md:flex space-x-6 '>
            <a
              href='#'
              className='flex items-center px-6 py-2 bg-[#e5e5e5] rounded-full shadow-md hover:text-neutral-900 '
            >
              <BiBookOpen />
              <span className='ml-1'>Skills</span>
            </a>
            <a
              href='#'
              className='flex items-center px-6 py-2 bg-[#e5e5e5] rounded-full shadow-md hover:text-neutral-900'
            >
              <BiBookOpen />
              <span className='ml-1'>Courses</span>
            </a>
            <a href='#' className='flex items-center '>
              <AiOutlineSearch />
              <span className='ml-1'>Search</span>
              {/* <input type='text' placeholder='Search' className='border-none bg-transparent' /> */}
            </a>
            <a
              href='#'
              className='flex items-center hover:text-neutral-900'
              onMouseEnter={() => setDropDown(!dropDown)}
              onMouseLeave={() => setDropDown(false)}
            >
              <AiOutlineMenuUnfold />
              <span className='ml-1 '>Categories</span>
              {dropDown && <Dropdown />}
            </a>

            <Link to='/getaccredit'>
              <a href='#' className='flex items-center mt-2.5'>
                <FaUser />
                <span className='ml-1'>Become a Tutor</span>
              </a>
            </Link>

            <Link to='/preferred-language'>
              <a href='#' className='flex items-center mt-3'>
                <GiHamburgerMenu />
                <MdArrowDropDownCircle />
              </a>
            </Link>
            <a
              href='#'
              className='flex items-center px-6 py-2 bg-[#e5e5e5] rounded-full shadow-md hover:text-neutral-900 group'
              onMouseEnter={() => setIsActive(!isActive)}
              onMouseLeave={() => setIsActive(false)}
            >
              <span className='pr-2'>
                <GiUsaFlag />
              </span>
              <MdFace />

              {!token ? (
                <div className='absolute w-44 right-0 top-16 bg-[#615353] rounded-lg shadow-md px-2 py-3 z-10 opacity-90 divide-y divide-neutral-500 divide-solid hidden group-hover:block'>
                  <div className=''>
                    <div className='flex flex-col items-center mb-1'>
                      <MdFace
                        size={30}
                        className='border border-neutral-800 px-2 py-2 rounded-full w-10 h-10'
                      />
                      <p className='text-white text-xs mb-1'>
                        Create an account for free
                      </p>
                    </div>
                    <Link to='/register'>
                      <a
                        href=''
                        className='flex items-center px-6 py-2 cursor-pointer hover:bg-gray-400 transition'
                      >
                        <GrLock className='font-bold ' />
                        <span className='ml-6 text-white text-xs mx-auto place-self-center'>
                          Sign Up
                        </span>
                      </a>
                    </Link>
                    <Link to='/login'>
                      <a
                        href=''
                        className='flex items-center px-6 py-2 hover:bg-gray-400 transition'
                      >
                        <GrLock />
                        <span className='ml-6 text-white text-xs mx-auto place-self-center'>
                          Login
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className='absolute w-44 right-0 top-16 bg-[#615353] rounded-lg shadow-md px-2 py-3 z-10 opacity-90 divide-y divide-neutral-500 divide-solid hidden group-hover:block'>
                  <div className=''>
                    <div className='flex flex-col items-center mb-1'>
                      <MdFace
                        size={30}
                        className='border border-neutral-800 px-2 py-2 rounded-full w-10 h-10'
                      />
                      <p className='text-white font-bold text-xs mb-1'>
                        usermail@gmail.com
                      </p>
                    </div>

                    <Link to='/dashboard'>
                      <a
                        href=''
                        className='flex items-center px-6 py-2 cursor-pointer hover:bg-gray-400 transition'
                      >
                        <ImProfile className='font-bold ' />
                        <span className='ml-6 text-white text-xs mx-auto place-self-center'>
                          Dashboard
                        </span>
                      </a>
                    </Link>

                    <a
                      href=''
                      className='flex items-center px-6 py-2 hover:bg-gray-100 transition'
                    >
                      <BsHouseDoorFill />
                      <span className='ml-6 text-white text-xs mx-auto place-self-center'>
                        Classroom
                      </span>
                    </a>
                    <a
                      href=''
                      className='flex items-center px-6 py-2 hover:bg-gray-100 transition'
                    >
                      <RiUserVoiceFill />
                      <span className='ml-6 text-white text-xs mx-auto place-self-center'>
                        Get Accredited
                      </span>
                    </a>
                    <a
                      href=''
                      className='flex items-center px-6 py-2 hover:bg-gray-100 transition'
                    >
                      <IoMdNotifications />
                      <span className='ml-6 text-white text-xs mx-auto place-self-center'>
                        Notifications
                      </span>
                    </a>
                    <a
                      href=''
                      className='flex items-center px-6 py-2 hover:bg-gray-100 transition'
                    >
                      <GiUsaFlag />
                      <span className='ml-6 text-white text-xs mx-auto place-self-center'>
                        ENG
                      </span>
                    </a>
                    <a
                      href=''
                      className='flex items-center px-6 py-2 hover:bg-gray-100 transition'
                    >
                      <BsGenderMale />
                      <span
                        onClick={() => dispatch(signOut())}
                        className='ml-6 text-white text-xs mx-auto place-self-center'
                      >
                        Sign out
                      </span>
                    </a>
                  </div>
                </div>
              )}
            </a>
          </div>

          <div className='app__navbar-menu'>
            <BiMenu
              onClick={() => setToggle(true)}
              className='cursor-pointer'
            />
            {toggle && (
              <motion.div
                animate={toggle ? "open" : "close"}
                variants={variants}
                // whileInView={{ x: [300, 0] }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <HiX
                  className='cursor-pointer'
                  onClick={() => setToggle(false)}
                />
                <ul>
                  {[
                    "Skills",
                    "Courses",
                    "Search course",
                    "Categories",
                    "Dashboard",
                  ].map((item) => (
                    <li key={item} className='text-gray-700'>
                      <Link to={`/${item}`}>
                        <a href={`#`} onClick={() => setToggle(false)}>
                          {item}
                        </a>
                      </Link>
                    </li>
                  ))}
                  <li className='text-gray-700'>
                    <Link to='/getaccredit'>Become a tutor</Link>
                  </li>
                  {/* <li>
                    <a className='flex' href="">
                    <span className=''><GiUsaFlag /></span>
                      <MdFace />
                    </a>
                  </li> */}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
