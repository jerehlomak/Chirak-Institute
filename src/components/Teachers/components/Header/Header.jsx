import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { images } from "../../../../constants";
import { BsBellFill } from "react-icons/bs";
import { GiUsaFlag } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AiOutlineMenuUnfold, AiOutlineMenu } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";
import SkeletonTable from "../../../Skeleton/SkeletonTable";

const Header = () => {
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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const [toggle, setToggle] = useState(false);
  const variants = {
    open: { opacity: 1, x: 0 },
    close: { opacity: 0, x: "-120%" },
  };
  const nav = [
    {
      navitem: "Dashboard",
      navlink: "/dashboard",
    },
    {
      navitem: "Manage Student",
      navlink: "/manage-student",
    },
    {
      navitem: "Manage Course",
      navlink: "/all-courses",
    },
    {
      navitem: "My Lesson Plan",
      navlink: "/lesson-plan",
    },
    {
      navitem: "New Lesson Plan",
      navlink: "/new-lesson-plan",
    },
    {
      navitem: "Assessment",
      navlink: "",
    },
    {
      navitem: "Withdrawal",
      navlink: "",
    },
    {
      navitem: "Message",
      navlink: "",
    },
    {
      navitem: "Account",
      navlink: "",
    },
    {
      navitem: "Login",
      navlink: "/login",
    },
  ];

  return (
    <>
      <div className='flex-auto p-4'>
        <div className='flex flex-col'>
          {!user ? (
            <div className='bg-white p-6 rounded-lg'>
              <SkeletonTable />
            </div>
          ) : (
            <>
              <div className='flex flex-row bg-white shadow-md p-6 rounded-lg items-center'>
                <div className='flex flex-row justify-between items-center w-3/5 md:w-1/2'>
                  <div className='relative flex justify-center items-center'>
                    <AiOutlineMenu
                      className={`flex cursor-pointer lg:hidden`}
                      size={24}
                      onClick={() => setToggle(true)}
                    />
                    {toggle && (
                      <motion.div
                        className='fixed top-0 bottom-0 left-0 z-10 p-4 w-4/5 h-screen 
                    items-start flex flex-col justify-start lg:hidden bg-white shadow-lg '
                        // whileInView={{ x: [50, 0] }}
                        animate={toggle ? "open" : "close"}
                        variants={variants}
                        transition={{ duration: 0.9, ease: "easeInOut" }}
                      >
                        {/* <div className='flex justify-between'> */}
                        <div className='relative h-12 w-14 py-4 ml-3'>
                          <Link to='/'>
                            <img src={images.logo} alt='logo' />
                          </Link>
                        </div>
                        <div className='place-self-end -mt-8'>
                          <FaTimes
                            className='cursor-pointer'
                            color='black'
                            size={24}
                            onClick={() => setToggle(false)}
                          />
                        </div>
                        {/* </div> */}

                        <motion.div className='absolute mt-14'>
                          <ul className=''>
                            {nav.map((item, index) => (
                              <li
                                className='px-4 py-2 uppercase'
                                key={index}
                                onClick={() => setToggle(false)}
                              >
                                <Link to={item.navlink}>
                                  <a className='px-4' href='#'>
                                    {item.navitem}
                                  </a>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </motion.div>
                    )}
                  </div>
                  <div className='flex justify-center items-center px-2 md:px-0'>
                    <AiOutlineSearch size={24} className='mr-2' />
                    <a href='#'>
                      <input
                        className='border-none active:outline-0 focus:outline-0'
                        type='text'
                        placeholder='Seach Something...'
                      />
                    </a>
                  </div>
                </div>
                <div className='flex flex-row justify-end  items-center w-2/5 md:w-1/2 space-x-16'>
                  <div className='hidden md:flex space-x-16'>
                    <div>
                      <GiUsaFlag size={24} color='red' />
                    </div>
                    <div>
                      <BsBellFill size={24} />
                    </div>
                  </div>
                  <div className='hidden md:flex flex-col text-end'>
                    <p className='text-gray-900 text-sm font-bold'>
                      {user?.firstName.charAt(0).toUpperCase() +
                        user?.firstName.slice(1) +
                        " " +
                        user?.lastName.charAt(0).toUpperCase() +
                        user?.lastName.slice(1)}
                    </p>
                    <p className='text-gray-900 text-xs font-medium'>
                      {user?.email}
                    </p>
                  </div>
                  <div className='h-12 w-12 rounded-full border-2 justify-end'>
                    <img
                      className='w-full h-full place-self-end'
                      src={images.barber}
                      alt='avatar'
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
