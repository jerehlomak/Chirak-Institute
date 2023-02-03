import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Apple from "../assets/Apple.png";
import googleplay from "../assets/googleplay.png";

const Footer = () => {
  return (
    <div className='bg-black py-20'>
      <div className='md:flex justify-between max-w-5xl mx-auto flex-wrap pl-4 pb-12 md:pl-0'>
        <div className='text-white text-sm pt-4'>
          <h3 className='font-bold pb-4'>CHIRAK</h3>

          <ul>
            <li>About the community</li>
            <li>Recently Added Courses</li>
            <li>Terms and Conditions</li>
            <li>Partnership</li>
          </ul>
        </div>
        <div className='text-white text-sm pt-4'>
          <h3 className='font-bold pb-4'>CATEGORIES</h3>
          <ul>
            <li>Skill Course</li>
            <li>Professional Course</li>
          </ul>
        </div>
        <div className='text-white text-sm pt-4'>
          <h3 className='font-bold pb-4'>SOCIALS</h3>
          <ul className='flex'>
            <li className='w-6 h-6 bg-white rounded-full flex justify-center items-center'>
              <FaTwitter className='text-black' />
            </li>
            <li className='w-6 h-6 bg-white rounded-full flex justify-center items-center ml-3'>
              <FaFacebook className='text-black' />
            </li>
            <li className='w-6 h-6 bg-white rounded-full flex justify-center items-center ml-3'>
              <FaLinkedin className='text-black' />
            </li>
          </ul>
          <ul className='flex mt-3'>
            <li className='w-6 h-6 bg-white rounded-full flex justify-center items-center'>
              <FaGoogle className='text-black' />
            </li>
            <li className='w-6 h-6 bg-white rounded-full flex justify-center items-center ml-3'>
              <FaYoutube className='text-black' />
            </li>
          </ul>
        </div>
        <div className='text-white text-sm pt-4'>
          <h3 className='font-bold pb-4'>MOBILE APP</h3>
          <ul>
            <li>
              <img src={Apple} alt='' className='w-[150px]' />
            </li>
            <img src={googleplay} alt='' className='mt-3 w-[150px]' />
          </ul>
        </div>
      </div>
      <div className='max-w-5xl mx-auto md:flex justify-center pl-4 mb-4 md:mb-0'>
        <button className='border rounder-md p-3 text-white'>
          TEACH ON CHIRAK
        </button>
      </div>
      <div className='max-w-5xl mx-auto text-center'>
        <p className='text-sm mt-3 text-white'>
          Earn extra money on Chirak when you create knowledgeable videos to
          teach students arround the globe
        </p>
        <p className='text-sm text-white mt-3'>
          &copy; 2022 Chirak Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
