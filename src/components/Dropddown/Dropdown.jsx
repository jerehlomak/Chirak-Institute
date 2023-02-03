import React, { useState } from 'react'
import { DropdownData } from './DropdownData'
import { MdArrowDropDownCircle } from 'react-icons/md'
import { DropData } from './DropData'
import SubDropDown from './SubDropDown'

const Dropdown = () => {
    const classes = 'absolute w-44 left-50 top-16 bg-[#615353] rounded-lg shadow-md px-2 py-3 z-10 opacity-90 divide-y divide-neutral-500 divide-solid group-hover:block'
    const [drop, setDrop] = useState(false)
  return (
    <>
        <div className={classes}>

            {DropData.map((item, index) => (
                <div key={index} className="flex items-center px-6 py-2 cursor-pointer hover:bg-gray-400 transition" onClick={() => setDrop(true)}>
                    <span className="ml-6 text-white text-xs mx-auto place-self-center" 
                    >{item.title}
                        
                    </span>
                    <MdArrowDropDownCircle  className='font-bold text-white' />
                    {drop && 
                    <SubDropDown item={item.submenu} />
                   
              }
                </div>
            ))}
        </div>
    </>
  )
}

export default Dropdown