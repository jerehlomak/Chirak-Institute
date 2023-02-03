import React from "react";
import Caution from "../../../../assets/caution.png";

const DeleteLesson = ({ setModalOn, setChoice }) => {
  const handleOKClick = (e) => {
    e.preventDefault();
    setChoice(true);
    setModalOn(false);
  };
  const handleCancelClick = () => {
    setChoice(false);
    setModalOn(false);
  };
  return (
    <div className='bg-[#3F2020]/80 opacity-95 fixed inset-0 z-50   '>
      <div className='flex h-screen justify-center items-center '>
        <div className='flex-col justify-center  bg-white opacity-100 py-12 px-24 rounded-lg '>
          <div className='flex  text-lg  text-zinc-600 flex-col text-center justify-center mb-10'>
            <img src={Caution} alt='' className='mb-2 w-14 h-14 mx-auto' />
            <span>Are you sure ?</span>
          </div>
          <div className='flex'>
            <button
              onClick={handleOKClick}
              className=' text-sm md:text-base rounded px-2 md:px-4 py-2 text-white  bg-red-700 '
            >
              Yes, Delete It
            </button>
            <button
              onClick={handleCancelClick}
              className='text-sm md:text-base rounded px-2 md:px-4 py-2 ml-4 text-white bg-gray-500 '
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteLesson;
