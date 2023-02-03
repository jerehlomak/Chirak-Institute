import React from 'react'
import { images } from '../../../../constants'

const WithdrawMain = () => {
  return (
    <div className='flex flex-col gap-4'>
        <p className='text-black/80 font-semibold'>Withdraw to</p>
        <div className='flex flex-wrap md:flex-row items-center justify-center gap-4'>
            <img className='w-[10.5rem] h-[5rem]' src={images.Bank} alt="bank" />
            <img className='w-[10.5rem] h-[5rem]' src={images.Paypal} alt="paypal" />
            <img className='w-[10.5rem] h-[5rem]' src={images.Crypto} alt="crypto" />
        </div>
        <div className='flex flex-col gap-3'>
            <label className='text-[#213970]/50 font-bold'>Amount to Withdraw</label>
            <input className='bg-[#C2C6EE]/40 p-2 outline-none rounded-md' type="number" />
        </div>
        <div className='flex flex-col gap-3'>
            <label className='text-[#213970]/50 font-bold'>Pin</label>
            <input className='bg-[#C2C6EE]/40 p-2 outline-none rounded-md' type="password" inputMode='numeric' />
        </div>
        <div className='flex flex-col gap-3'>
            <label className='text-[#213970]/50 font-bold'>Password</label>
            <input className='bg-[#C2C6EE]/40 p-2 outline-none rounded-md' type="password" inputMode='numeric' />
        </div>
        <div className='flex flex-col items-center gap-3'>
            <p className='text-[#FF0000] w-full md:w-[70%] font-semibold text-center text-xs'>
                Please Note: Bank Deposit will be effective only on working days.
                For weekends, please use PayPal or Crypto Currency for quick and 
                immediate withdrawal.
                Thank you for working with Us.
            </p>
            <button className='px-4 py-2 text-sm uppercase text-center bg-[#161616] text-white'>Withdraw</button>
        </div>
    </div>
  )
}

export default WithdrawMain