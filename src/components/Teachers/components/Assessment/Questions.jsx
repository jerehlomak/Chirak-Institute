import React from 'react'
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsFillClockFill, BsCalendarDate } from 'react-icons/bs'
import { TextField } from '@mui/material'

const Questions = ({ step, setStep }) => {
  return (
    <div className='flex flex-col items-center w-full space-y-4'>
        <p className='text-xs text-red-600 max-w-4/5'>Note: First Assessment are Strictly Objective  (15 Questions are expected)</p>
        <h1 className='text-lg font-bold'>First Assessment</h1>
        <div className='flex flex-col w-full'>
            <div className='flex flex-col items-start justify-start w-full text-'>
                <label className='block text-[#96A4C5] text-sm font-medium' htmlFor="">Course Name</label>
                <div className='relative w-full mt-2'>
                    <select
                        className='dash-input-field leading-tight focus:outline-none focus:shadow-outline bg-green-500'
                        id=''
                    >
                        <option value="">Digital Marketing</option>
                        <option value="">Social Marketing</option>
                        <option value="">Media Marketing</option>
                    </select>
                    <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#5f6066]'>
                        <FontAwesomeIcon
                        icon={faCaretDown}
                        style={{
                            fontSize: "14px",
                            marginRight: "5px",
                        }}
                        />
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-start justify-start w-full mt-4'>
                <label className='block text-[#96A4C5] text-sm font-medium' htmlFor="">Batch</label>
                <div className='relative w-full mt-2'>
                    <select
                        className='dash-input-field leading-tight focus:outline-none focus:shadow-outline bg-green-500'
                        id=''
                    >
                        <option value="">20BB</option>
                        <option value="">67hA</option>
                        <option value="">20BC</option>
                    </select>
                    <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#5f6066]'>
                        <FontAwesomeIcon
                        icon={faCaretDown}
                        style={{
                            fontSize: "14px",
                            marginRight: "5px",
                        }}
                        />
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-start justify-start w-full mt-4'>
                <label className='block text-[#96A4C5] text-sm font-medium' htmlFor="">Year</label>
                <div className='relative w-full mt-2'>
                    <select
                        className='dash-input-field leading-tight focus:outline-none focus:shadow-outline bg-green-500'
                        id=''
                    >
                        <option value="">2022</option>
                        <option value="">2034</option>
                        <option value="">2022</option>
                    </select>
                    <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#5f6066]'>
                        <FontAwesomeIcon
                        icon={faCaretDown}
                        style={{
                            fontSize: "14px",
                            marginRight: "5px",
                        }}
                        />
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-start justify-start w-full mt-4'>
            <label className='block text-[#96A4C5] text-sm font-medium' htmlFor="">Time (Deadline)</label>
                <div className='relative w-full mt-2'>
                <TextField InputProps={{disableUnderline: true,}} 
                    variant='standard' type='time' 
                    className='w-full bg-[#edf0ff] p-2 border-none rounded-md leading-tight focus:outline-none focus:shadow-outline' />
                </div>
            </div>
            <div className='flex flex-col items-start justify-start w-full mt-4'>
            <label className='block text-[#96A4C5] text-sm font-medium' htmlFor="">Date (Deadline)</label>
                <div className='relative w-full mt-2'>
                <TextField InputProps={{disableUnderline: true,}} 
                    variant='standard' type='date'
                    className='w-full bg-[#edf0ff] p-2 border-none rounded-md leading-tight focus:outline-none focus:shadow-outline' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Questions