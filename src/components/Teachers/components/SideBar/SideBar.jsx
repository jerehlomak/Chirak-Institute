import React, { useState } from "react";
import { images } from "../../../../constants";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { MdOutlineSpaceDashboard, MdOutlineAssessment } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import { FiSettings } from "react-icons/fi";
import { BiEuro, BiMessageAltDetail } from "react-icons/bi";
import { TiMessages } from "react-icons/ti";
import { HiOutlineLogout } from "react-icons/hi";
import { FaTimes, FaGreaterThan } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../../../../store/actions/user.action";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [dropDown, setDropDown] = useState(false);
  const [dropNav, setDropNav] = useState(false);
  const dispatch = useDispatch();
  return (
    <aside
      className={`hidden lg:flex flex-col relative ${
        open ? "w-64" : "w-20"
      } duration-300 bg-black h-screen justify-between max-h-screen overflow-y-auto`}
    >
      <div className='flex items-center justify-between p-4'>
        {open ? (
          <div className='flex justify-between'>
            <Link to='/'>
              <img className='w-2/4' src={images.whitelogo} alt='logo' />
            </Link>
            <div>
              <AiOutlineMenuUnfold
                onClick={() => setOpen(!open)}
                className='cursor-pointer'
                color='white'
                size={24}
              />
            </div>
          </div>
        ) : (
          <FaTimes
            onClick={() => setOpen(!open)}
            className='cursor-pointer'
            color='white'
            size={24}
          />
        )}
      </div>
      <div className='flex flex-col items-start p-4 space-y-4'>
        {/* sidebar elements */}
        {/* dashboard link */}
        <Link to='/dashboard'>
          <div className='flex space-x-4 items-center justify-center'>
            <span className='h-8 w-10 px-2 py-1 items-center rounded-md bg-[#8d8d8d]'>
              <MdOutlineSpaceDashboard className='text-red-500' size={24} />
            </span>
            <p
              className={`${
                !open && "hidden"
              } duration-300 text-white text-sm hover:text-neutral-200 hover:cursor-pointer`}
            >
              Dashboard
            </p>
          </div>
        </Link>
        {/* manage student link */}
        <Link to='/manage-student'>
          <div className='flex space-x-4 items-center justify-center'>
            <span className='h-8 w-10 px-2 py-1 items-center rounded-md bg-gray-200'>
              <ImUsers
                className='text-gray-500 active:text-red-600'
                size={24}
              />
            </span>
            <p
              className={`${
                !open && "hidden"
              } duration-300 text-white text-sm hover:text-neutral-200 hover:cursor-pointer`}
            >
              Manage Student
            </p>
          </div>
        </Link>
        {/* Manage Courses Link */}
        <button
          className='relative flex space-x-4 items-center justify-center'
          onClick={() => setDropDown(!dropDown)}
        >
          <span className='h-8 w-10 px-2 py-1 items-center rounded-md bg-gray-200'>
            <BiMessageAltDetail className='text-gray-500' size={24} />
          </span>
          <p
            className={`${
              !open && "hidden"
            } duration-300 text-white text-sm hover:text-neutral-200 hover:cursor-pointer`}
          >
            Manage Course
          </p>
        </button>
        {/* {dropDown && (
              <div className='flex flex-col pl-4 items-center justify-center mt-3 space-y-3'>
                <Link to='/all-courses'>
                  <div className='flex space-x-1 items-center justify-center'>
                    <span className='h-8 w-10 px-2 py-1 items-center rounded-md'>
                      <FaGreaterThan size={12} color='lightgray'/>
                      </span>
                    <p className={`${!open && 'hidden'} duration-300 text-white text-xs hover:text-neutral-200 hover:cursor-pointer`}>All Courses</p>
                  </div>
                </Link>
                <Link to='/new-course'>
                  <div className='flex space-x-4 items-center justify-center'>
                    <span className='h-8 w-10 px-2 py-1 items-center rounded-md'>
                      <FaGreaterThan size={12} color='lightgray'/>
                    </span>
                    <p className={`${!open && 'hidden'} duration-300 text-white text-xs hover:text-neutral-200 hover:cursor-pointer`}>Add New Course</p>
                  </div>
                </Link>
              </div>
          )} */}
        {dropDown && (
          <ul id='dropdown-example' class={`pl-4 py-2 space-y-2`}>
            <li>
              <Link to='/all-courses'>
                <div className='flex space-x-1 items-center justify-center'>
                  <span className='h-8 w-10 px-2 py-1 items-center rounded-md'>
                    <FaGreaterThan size={12} color='lightgray' />
                  </span>
                  <p
                    className={`${
                      !open && "hidden"
                    } duration-300 text-white text-xs hover:text-neutral-200 hover:cursor-pointer`}
                  >
                    All Courses
                  </p>
                </div>
              </Link>
            </li>
            <Link to='/new-course'>
              <div className='flex space-x-4 items-center justify-center'>
                <span className='h-8 w-10 px-2 py-1 items-center rounded-md'>
                  <FaGreaterThan size={12} color='lightgray' />
                </span>
                <p
                  className={`${
                    !open && "hidden"
                  } duration-300 text-white text-xs hover:text-neutral-200 hover:cursor-pointer`}
                >
                  Add New Course
                </p>
              </div>
            </Link>
          </ul>
        )}
        {/* lesson plan link */}
        <div
          className='relative flex space-x-4 items-center justify-center top-0'
          onClick={() => setDropNav(!dropNav)}
        >
          <span className='h-8 w-10 px-2 py-1 items-center rounded-md bg-gray-200'>
            <BiMessageAltDetail className='text-gray-500' size={24} />
          </span>
          <p
            className={`${
              !open && "hidden"
            } duration-300 text-white text-sm hover:text-neutral-200 hover:cursor-pointer`}
          >
            Lesson Plan
          </p>
        </div>
        {dropNav && (
          <div className='flex flex-col pl-4 items-center justify-center mt-3 space-y-3'>
            <Link to='/lesson-plan'>
              <div
                className='flex items-center py-2 rounded-md justify-center'
                onClick={() => setDropNav(true)}
              >
                <span className='items-center'>
                  <FaGreaterThan size={12} color='lightgray' />
                </span>
                <p
                  className={`${
                    !open && "hidden"
                  } duration-300 text-white text-xs hover:text-neutral-200 hover:cursor-pointer`}
                  onClick={() => setDropNav(true)}
                >
                  All Lesson Plan
                </p>
              </div>
            </Link>
            <Link to='/new-lesson-plan'>
              <div
                className='flex items-center py-2 rounded-md whitespace-nowrap justify-center'
                onClick={() => setDropNav(true)}
              >
                <span className='items-center'>
                  <FaGreaterThan size={12} color='lightgray' />
                </span>
                <p
                  className={`${
                    !open && "hidden"
                  } duration-300 text-white text-xs hover:text-neutral-200 hover:cursor-pointer`}
                >
                  New Lesson Plan
                </p>
              </div>
            </Link>
          </div>
        )}

        <Link to='/assessment'>
          <div className='flex space-x-4 items-center justify-center'>
            <span className='h-8 w-10 px-2 py-1 items-center rounded-md bg-gray-200'>
              <MdOutlineAssessment className='text-gray-500' size={24} />
            </span>
            <p
              className={`${
                !open && "hidden"
              } duration-300 text-white text-sm hover:text-neutral-200 hover:cursor-pointer`}
            >
              Assessment
            </p>
          </div>
        </Link>

        <Link to='/withdrawal'>
          <div className='flex space-x-4 items-center justify-center'>
            <span className='h-8 w-10 px-2 py-1 items-center rounded-md bg-gray-200'>
              <BiEuro className='text-gray-500' size={24} />
            </span>
            <p
              className={`${
                !open && "hidden"
              } duration-300 text-white text-sm hover:text-neutral-200 hover:cursor-pointer`}
            >
              Withdrawal
            </p>
          </div>
        </Link>

        <Link to='/message'>
          <div className='flex space-x-4 items-center justify-center'>
            <span className='h-8 w-10 px-2 py-1 items-center rounded-md bg-gray-200'>
              <TiMessages className='text-gray-500' size={24} />
            </span>
            <p
              className={`${
                !open && "hidden"
              } duration-300 text-white text-sm hover:text-neutral-200 hover:cursor-pointer`}
            >
              Message
            </p>
          </div>
        </Link>

        <Link to='/account'>
          <div className='flex space-x-4 items-center justify-center'>
            <span className='h-8 w-10 px-2 py-1 items-center rounded-md bg-gray-200'>
              <FiSettings className='text-gray-500' size={24} />
            </span>
            <p
              className={`${
                !open && "hidden"
              } duration-300 text-white text-sm hover:text-neutral-200 hover:cursor-pointer`}
            >
              Account
            </p>
          </div>
        </Link>
      </div>

      {/*  */}
      <div className='flex flex-col items-start p-4'>
        <div
          className='flex space-x-4 items-center justify-center cursor-pointer'
          onClick={() => dispatch(signOut())}
        >
          <span className='h-8 w-10 px-2 py-1 items-center rounded-md bg-gray-200'>
            <HiOutlineLogout className='text-gray-500' size={24} />
          </span>
          <p
            className={`${
              !open && "hidden"
            } duration-300 text-white text-sm hover:text-neutral-200 hover:cursor-pointer`}
          >
            Logout
          </p>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
