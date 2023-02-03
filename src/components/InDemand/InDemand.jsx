import React from "react";
import { images } from "../../constants";
import "./InDemand.scss";
import Featured from "../Featured/Featured";

const InDemand = () => {
  return (
    <section id='in-demand' className='md:mt-0'>
      <div className='in-demand__app container flex flex-col items-center px-4 mx-auto mt-10 py-28 space-y-12 md:space-y-0 md:flex-row'>
        <div className='flex flex-col space-x-12 mt-10 sm:-mt-20 md:mt-14 md:-ml-16 md:w-1/2'>
          <h3 className='max-w-md text-3xl font-bold text-center mt-5'>
            In-Demand Skills
          </h3>
          <p className='font-bold text-center w-2/3 mt-2 place-self-center'>
            Learn with people across the Globe to get your dream job!
          </p>
          <div className='relative flex items-center p3 mt-10 sm:space-x-4 sm:place-items-center md:space-x-4'>
            <div className='flex flex-col w-28 h-28 rounded-full pale-red shadow-xl px-4 py-3'>
              <img
                src={images.recom1}
                className='w-10 h-10 rounded-full mx-auto -my-8'
                alt=''
              />
              <p className='text-center text-white my-auto font-semibold text-xs'>
                Learn acrylic nail fixing
              </p>
            </div>
            <div className='flex flex-col  w-28 h-28 rounded-full pale-gray shadow-xl px-4 py-3'>
              <img
                src={images.recom2}
                className='w-10 h-10 rounded-full mx-auto -my-8'
                alt=''
              />
              <p className='text-center text-white m-auto font-semibold text-xs'>
                Digital marketing in 5 days
              </p>
            </div>
            <div className='flex flex-col  w-28 h-28 rounded-full pale-blue shadow-xl px-4 py-3'>
              <img
                src={images.recom3}
                className='w-10 h-10 rounded-full mx-auto -my-8'
                alt=''
              />
              <p className='text-center text-white my-auto font-semibold text-xs leading-none'>
                Learn how to learn
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[url('https://res.cloudinary.com/djp9oacoi/image/upload/v1663081731/featuredbg_cf6ajk.png')] bg-no-repeat bg-center bg-contain flex-col space-x-12 md:ml-28 sm:w-full md:w-1/2 hidden md:flex">
          {/* <img className='place-self-center md:place-self-end w-4/5 h-full' src={images.blue} alt="" > */}
          <Featured />
        </div>
      </div>
    </section>
  );
};

export default InDemand;
