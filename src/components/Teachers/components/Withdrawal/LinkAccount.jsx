import React from 'react'

const LinkAccount = () => {
  return (
    <div className='flex flex-col gap-4'>
      <p className='text-xs text-center place-self-center w-full md:w-[70%]'>
        Please valued customer, note that your bank details are safe with us.
        Ensure that the account details are correct is upto date and belongs to you.
      </p>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-3'>
            <label className='text-[#213970]/50 font-bold'>Account Number</label>
            <input className='bg-[#C2C6EE]/40 p-2 outline-none rounded-md' type="text" />
        </div>
        <div className='flex flex-col gap-3'>
            <label className='text-[#213970]/50 font-bold'>Account Name</label>
            <input className='bg-[#C2C6EE]/40 p-2 outline-none rounded-md' type="text" />
        </div>
        <div className='flex flex-col gap-3'>
            <label className='text-[#213970]/50 font-bold'>Password</label>
            <input className='bg-[#C2C6EE]/40 p-2 outline-none rounded-md' type="password" inputMode='numeric' />
        </div>
        <div className='flex gap-4 justify-center'>
          <button className='xs:px-2 px-4 py-2 xs:text-xs text-sm uppercase text-center font-semibold bg-[#161616] text-white'>Add Account</button>
          <button className='xs:px-2 px-4 py-2 xs:text-xs text-sm uppercase text-center font-semibold bg-[#161616] text-white'>Use Once</button>
        </div>
      </div>
    </div>
  )
}

export default LinkAccount