import React, { useState } from "react";
import { images } from "../../../../constants";
import {
  FaUserFriends,
  FaTimes,
  FaGraduationCap,
  FaBook,
} from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import RightSide from "../RightSide/RightSide";
import { RiArrowDropDownLine } from "react-icons/ri";
import Chart from "./Chart";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import { userProfile } from "../../../../store/actions/user.action";
import SkeletonTable from "../../../Skeleton/SkeletonTable";

const Main = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  const fetchProfile = async () => {
    const varToken = localStorage.getItem("token");
    await axios
      .get("https://api-chirak.herokuapp.com/api/v1/user/profile", {
        headers: {
          "x-access-token": varToken,
        },
      })
      .then((response) => {
        setUser(response.data.data);
        console.log(response.data);
        dispatch(userProfile(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchProfile();
  }, []);
  const [toggle, setToggle] = useState(false);
  return (
    <div className='flex-auto p-4 -mt-10'>
      {!user ? (
        <div className='bg-white p-4'>
          <SkeletonTable />
        </div>
      ) : (
        <div className='flex flex-col justify-center items-start py-4'>
          <h3 className='text3xl font-bold'>Teacher's Dashboard</h3>
          <p className='text-xs py-1'>
            <Link to='/'>Home</Link> &#62;{" "}
            <span className='text-red-600'>Dashboard</span>
          </p>
        </div>
      )}

      <div className='flex flex-col lg:flex-row w-full space-x-4'>
        {!user ? (
          <div className='flex justify-between w-full my-3 gap-x-3 px-6 bg-white p-8'>
            {[1, 2, 3, 4].map((n) => (
              <div className='w-1/4' key={n}>
                <SkeletonTable />
              </div>
            ))}
          </div>
        ) : (
          <div className='flex flex-col mr-9'>
            <div className='flex flex-col md:flex-row my-auto bg-white w-full rounded-lg shadow-md p-4 space-x-4'>
              <div className='flex flex-col mx-auto items-center md:items-start w-1/2'>
                <h2 className='text-3xl'>
                  Welcome back,{" "}
                  <span className='font-bold'>
                    {user?.firstName.charAt(0).toUpperCase() +
                      user?.firstName.slice(1) +
                      "!"}
                  </span>
                </h2>
                <p className='mt-4'>
                  Your students completed
                  <span className='text-[#159800]'>99%</span> of their task.
                  <br />
                  Progress is <span className='text-[#159800]'>excellent!</span>
                </p>
                <h4 className='font-semibold mt-4'>Available Withdrawal</h4>
                <p>$1,657,879</p>
              </div>
              <div className='flex flex-row mx-auto justify-center items-center md:items-start w-1/2'>
                <div className='flex flex-col justify-between items-start w-1/4'>
                  <img src={images.small} alt='' />
                </div>
                <div className='flex flex-col justify-center items-center w-3/4'>
                  <img className='h-40' src={images.teacher} alt='teacher' />
                </div>
              </div>
            </div>
            {/* first grid  */}
            <div className='flex-auto flex-col'>
              <div className='flex flex-row h-3/4 my-auto w-full pr-4 py-4 space-x-4'>
                <div className='grid grid-cols-1 mx-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                  <div className='flex-auto p-4 items-center rounded-xl bg-[#fff]'>
                    <div className='flex items-center justify-evenly space-x-4'>
                      <div className='h-8 w-8 rounded-full bg-black flex justify-center items-center'>
                        <FaUserFriends className='' size={24} color='#B1B1DA' />
                      </div>
                      <p className='text-black text-sm'>Students</p>
                    </div>
                    <p className='text-black font-extrabold pt-3'>65k</p>
                  </div>
                  <div className='flex-auto bg-[#fff] p-4 rounded-xl items-center'>
                    <div className='flex items-center justify-between space-x-4'>
                      <div className='h-8 w-8 rounded-full bg-black flex justify-center items-center'>
                        <FaUserFriends className='' size={24} color='#B1B1DA' />
                      </div>
                      <p className='text-black text-sm'>Query</p>
                    </div>
                    <p className='text-black font-extrabold pt-3'>4</p>
                  </div>
                  <div className='flex-auto bg-[#fff] p-4 rounded-xl items-center'>
                    <div className='flex items-center justify-between space-x-4'>
                      <div className='h-8 w-8 rounded-full bg-black flex justify-center items-center'>
                        <FaGraduationCap
                          className=''
                          size={24}
                          color='#B1B1DA'
                        />
                      </div>
                      <p className='text-black text-sm'>Certificate</p>
                    </div>
                    <p className='text-black font-extrabold pt-3'>2k</p>
                  </div>
                  <div className='flex-auto bg-[#fff] p-4 rounded-xl items-center'>
                    <div className='flex items-center justify-between space-x-4'>
                      <div className='h-8 w-8 rounded-full bg-black flex justify-center items-center'>
                        <FaBook className='' size={24} color='#B1B1DA' />
                      </div>
                      <p className='text-black text-sm'>Open Course</p>
                    </div>
                    <p className='text-black font-extrabold pt-3'>5</p>
                  </div>
                  <div className='flex-auto bg-[#fff] p-4 rounded-xl items-center'>
                    <div className='flex items-center justify-between space-x-4'>
                      <div className='h-8 w-8 rounded-full bg-black flex justify-center items-center'>
                        <FaUserFriends className='' size={24} color='#B1B1DA' />
                      </div>
                      <p className='text-black text-sm'>Uploaded Materials</p>
                    </div>
                    <p className='text-black font-extrabold pt-3'>54</p>
                  </div>

                  {/* grid item 1 */}
                  <div className='flex-auto bg-[#fff] p-4 rounded-xl items-center'>
                    <div className='flex items-center justify-between space-x-4'>
                      <div className='h-8 w-8 rounded-full bg-black flex justify-center items-center'>
                        <TiTick className='' size={24} color='#B1B1DA' />
                      </div>
                      <p className='text-black text-sm'>Approved Application</p>
                    </div>
                    <p className='text-black font-extrabold pt-3'>5</p>
                  </div>
                  {/* grid item 2 */}
                  <div className='flex-auto bg-[#fff] p-4 rounded-xl items-center'>
                    <div className='flex items-center justify-between space-x-4'>
                      <div className='h-8 w-8 rounded-full bg-black flex justify-center items-center'>
                        <FaTimes className='' size={24} color='#B1B1DA' />
                      </div>
                      <p className='text-black text-sm'>Rejected Application</p>
                    </div>
                    <p className='text-black font-extrabold pt-3'>5</p>
                  </div>
                  {/* grid item 3 */}
                  <div className='flex-auto bg-[#fff] p-4 rounded-xl items-center'>
                    <div className='flex items-center justify-between space-x-4'>
                      <div className='h-8 w-8 rounded-full bg-black flex justify-center items-center'>
                        <FaUserFriends className='' size={24} color='#B1B1DA' />
                      </div>
                      <p className='text-black text-sm mx-w-sm'>
                        Uploaded Assessments
                      </p>
                    </div>
                    <p className='text-black font-extrabold pt-3'>56</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Line Chart */}
            <div className='flex flex-col bg-white rounded-md p-4 mt-10 h-68'>
              <div className='flex items-center justify-center w-full px-4 py-2'>
                <h2 className='text-xl font-semibold w-1/2'>Attendance</h2>
                <div className='w-1/2 items-center mx-auto'>
                  <p className='flex px-4 bg-[#dfe1f5] rounded-md w-2/3 md:w-1/3 cursor-pointer'>
                    <span className='text-[#a9addf]'>Today </span>
                    <RiArrowDropDownLine className='text-[#a9addf]' size={24} />
                  </p>
                </div>
              </div>
              <div className='w-full pl-2'>
                <Chart />
              </div>
            </div>
          </div>
        )}

        {!user ? (
          <div className='flex justify-between w-full my-3 gap-x-3 px-6 bg-white p-8'>
            {[1, 2, 3, 4].map((n) => (
              <div className='w-1/4' key={n}>
                <SkeletonTable />
              </div>
            ))}
          </div>
        ) : (
          <div className='flex-auto w-full mx-auto mt-10 md:mt-0 md:w-2/4 lg:1/4 '>
            <RightSide />
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
