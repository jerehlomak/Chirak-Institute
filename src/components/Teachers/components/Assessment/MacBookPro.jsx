import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import MacBook_Data from "./MacBookProData";
import { Link } from 'react-router-dom'

const MacBookPro = () => {
  const [getData, setGetData] = useState(() =>
    MacBook_Data.map((item) => ({ ...item, clicked: false }))
  );
  const handleClick = (id) => () => {
    setGetData(
      getData.map((item) =>
        item.id !== id
          ? { ...item, clicked: false }
          : { ...item, clicked: !item.clicked }
      )
    );
  };
  const [expanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(true);
  }

  function close() {
    setExpanded(false);
  }

  return (
    <div className='flex-auto p-4 -mt-6'>
        <div className='flex flex-col justify-center items-start py-4'>
            <h3 className="text-xl font-bold">
            Teacher's Dashboard
            </h3>
            <p className='text-xs py-1'><Link to='/all-courses'>Home</Link> &#62; <span className='text-red-600'>Assessment</span></p>
        </div>
      <div className='w-full mx-auto form-bg !rounded-md px-8 pt-6 pb-8 py-5 overflow-y-scroll'>
        <div className='w-full flex flex-wrap pb-4'>
          <div className='w-full md:w-1/3'>
            <h5 className='font-semibold pb-1'>Learn React in One Week</h5>
            <p className='text-sm pb-1'>Batch 22B</p>
            <p className='text-sm'>2022</p>
          </div>
          <div className='mt-2 md:mt-0 text-red-500 w-full md:w-1/3'>
            Please complete and submit
          </div>
          <div className='mt-2 md:mt-0 w-full md:w-1/3 flex flex-col md:items-end text-sm font-semibold'>
            <div>11:59PM</div> <div>10/12/2022</div>
          </div>
        </div>
        <div
          className='flex flex-wrap -mx-3 mb-6'
          tabIndex={0}
          onFocus={expand}
          onBlur={close}
        >
          {getData.map(({ id, question, a, b, c, clicked }) => (
            <div className='w-full md:w-1/2 px-3 mb-4'>
              <div className='relative'>
                <div
                  className='relative w-full cursor-default bg-[#DBE1FF] py-4 pl-6 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'
                  onClick={handleClick(id)}
                >
                  <span className='block font-semibold text-left text-base'>
                    <div>QUESTION {id}</div> <div>{question}</div>
                  </span>
                  <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-6'>
                    <svg
                      class='-mr-1 ml-2 h-5 w-5'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </span>
                </div>
                {expanded && clicked ? (
                  <div>
                    <div className='absolute bg-[#c5cbe6] w-full overflow-auto rounded-b-sm pt-1 pb-2.5 text-base shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10'>
                      <div className='relative cursor-default select-none py-2 pl-6 pr-4'>
                        <div className='block font-medium'>a. {a}</div>
                        <div className='block font-medium'>b. {b}</div>
                        <div className='block font-medium'>c. {c}</div>
                      </div>
                      <div className='flex flex-col px-6'>
                        <button className='bg-[#159800] rounded px-2 py-1 text-white text-xs w-11 mb-2'>
                          Edit
                        </button>
                        <button className='bg-black rounded px-2 py-1 text-white text-xs w-12'>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
          <div className='w-full flex justify-end px-3'>
            <button className='text-xs rounded font-semibold bg-[#159800] text-white px-3 py-3'>
              <FontAwesomeIcon
                icon={faPen}
                style={{
                  fontSize: "12px",
                  marginRight: "5px",
                }}
              />
              EDIT ASSESSMENT
            </button>
            <button className='text-xs rounded font-semibold bg-black text-white ml-2 px-3 py-3'>
              <FontAwesomeIcon
                icon={faTrashCan}
                style={{
                  fontSize: "12px",
                  marginRight: "5px",
                }}
              />
              DELETE ASSESSMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacBookPro;
