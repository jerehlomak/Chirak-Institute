import React, { useState } from "react";
import Calender from "react-calendar";
import Todo from "./TodoData";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { useEffect } from "react";

const RightSide = () => {
  const locale = "en";
  const [date, setDate] = useState(new Date());
  console.log(date);
  const onChange = () => {
    setDate(date);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const day = date.toLocaleDateString(locale, { weekday: "long" });
  const time = date.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });
  //   const month = new Date(date.setMonth(date.getMonth() + 1));
  return (
    // calender
    <div className='flex flex-col mx-auto w-full justify-content-center'>
      <div className='flex flex-col w-full p-4 bg-[#d8dbf7] rounded-xl items-center'>
        <h4 className='font-semibold'>{time}</h4>
        <p className='text-sm mb-1'>
          {day}, {date.toLocaleString(locale, { month: "long" })}{" "}
          {new Date().getFullYear()}
        </p>
        <div className='p-4 bg-white rounded-xl shadow-lg text-sm'>
          <Calender
            onChange={onChange}
            value={date}
            prev2Label={null}
            next2Label={null}
            selectRange={true}
          />
        </div>
      </div>
      {/* todo list */}
      <div className='flex flex-col justify-center mt-4 items-center bg-white rounded-md '>
        <div className='flex flex-row p-4 justify-content-between items-center space-x-8 md:space-x-0 md:w-3/4 '>
          <h1 className='text-2xl font-semibold'>Todo List</h1>
          <a className='underline-none text-xs text-blue-500' href='#'>
            {" "}
            See all
          </a>
        </div>
        <div className='pb-10 md:w-3/4'>
          {Todo?.map((item, index) => (
            <div
              key={index}
              className='flex w-full items-center justify-between px-2 mx-auto pb-2'
            >
              <div className='w-2/4 items-center justify-center'>
                <div className='w-8 h-8 rounded-full bg-[#EE1E24] text-center'>
                  <p className='text-white pt-2 text-center font-bold text-sm'>
                    {item.number}
                  </p>
                </div>
              </div>
              <div className='flex flex-col w-3/4 items-start'>
                <p className='text-sm font-bold w-full'>{item.title}</p>
                <p className='text-xs'>{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSide;
