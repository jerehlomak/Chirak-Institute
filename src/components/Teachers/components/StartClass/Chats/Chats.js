import React from "react";
import ChatData from "./ChatData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmile,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

const Chats = () => {
  return (
    <div className='flex w-full bg-[#E5E5E5] items-center mt-4 flex-col'>
      <div className='w-2/3'>...</div>
      <div className='bg-[#e1e3f7] p-4 rounded-lg'>
        {ChatData.map(({ id, name, chat, time, avatar }) => (
          <div className='flex justify-between mb-3 items-center max-h-md overflow-y-auto' key={id}>
            <img
              src={avatar}
              className='w-8 h-8 rounded-full shadow-sm bg-white'
            />
            <div className='flex flex-col text-left mx-2.5 w-48'>
              <span className='font-semibold text-xs'>{name}</span>
              <span className='text-xs'>
                {chat.length > 10 ? chat.substring(0, 24) + "..." : chat}
              </span>
            </div>
            <div className='text-xs text-[#664500]'>{time}</div>
          </div>
        ))}

        <div class='mt-10 xl:w-96 flex rounded-md shadow-sm'>
          <span class='inline-flex items-center px-2 rounded-l-md bg-white text-gray-500 text-sm'>
            <FontAwesomeIcon
              icon={faFaceSmile}
              style={{
                fontSize: "18px",
                marginRight: "5px",
                color: "gray",
              }}
            />
          </span>
          <input
            type='text'
            class='focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full sm:text-sm border-gray-300 text-xs text-gray-500'
            placeholder='Write a Message'
          />
          <button
            class='btn p-2.5 bg-black text-xs leading-tight rounded-r-md shadow-md focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center'
            type='button'
          >
            <FontAwesomeIcon
              icon={faLocationArrow}
              style={{
                fontSize: "18px",
                marginRight: "5px",
                color: "white",
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chats;
