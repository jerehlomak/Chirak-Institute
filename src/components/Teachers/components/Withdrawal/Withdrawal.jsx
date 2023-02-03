import { useState } from 'react'
import { SideBar, Header } from '../index'
import { Routes, Route, Link } from 'react-router-dom'
import { MdAccountBalanceWallet } from 'react-icons/md'

import { WithdrawMain, LinkAccount, DeleteAnAccount, TransactionDetails, CreateOrResetPin } from './'

const Withdrawal = () => {
    const [isActive, setIsActive] = useState('withdraw')
    const active = 'bg-[#DBE1FF] text-[#213970] flex flex-col items-center justify-center rounded-md px-4 py-6 cursor-pointer'
    const nonActive = 'bg-black text-white flex flex-col items-center justify-center rounded-md px-2 md:px-4 py-3 md:py-6 cursor-pointer transition duration-300'

  return (
    <div className='background flex flex-row'>
        <SideBar />
        <div className='flex flex-col w-full'>
            <Header />
            <div className='flex-auto p-4 -mt-6'>
                <div className='flex flex-col justify-center items-start py-4'>
                    <h3 className="text3xl font-bold">
                    Teacher's Dashboard
                    </h3>
                    <p className='text-xs py-1'><Link to='/all-courses'>Home</Link> &#62; <span onClick={() => setIsActive('withdraw')} className='text-red-600 cursor-pointer'>Withrawal</span></p>
                </div>
                <div className='flex flex-col-reverse md:flex-row flex-auto gap-4 '>
                    <div className='flex flex-1 flex-col'>
                        <div className='flex  md:flex-row items-center justify-between md:justify-around bg-black rounded-md'>
                            <span className='flex flex-col bg-black px-2 py-2 md:px-6 md:py-4 gap-2 text-center'>
                                <p className='text-sm text-white'>Total Current Balance</p>
                                <h2 className='text-sm sm:text-lg md:text-xl text-white font-bold'>$264823.00</h2>
                            </span>
                            <span className='flex flex-col bg-[#159800]/50 px-2 py-2 md:px-8 md:py-4 gap-2 text-center'>
                                <p className='text-sm text-white'>Available Balance</p>
                                <h2 className='text-sm sm:text-lg md:text-xl text-white font-bold'>$264823.00</h2>
                            </span>
                            <span className='flex flex-col bg-black px-2 py-2 md:px-6 md:py-4 gap-2 text-center'>
                                <p className='text-sm text-white'>Total Withdrawal</p>
                                <h2 className='text-sm sm:text-lg md:text-xl text-white font-bold'>$264823.00</h2>
                            </span>
                        </div>
                        <div className='flex flex-col bg-white p-4 rounded-b-md'>
                            {isActive === 'withdraw' && <WithdrawMain />}
                            {isActive === 'linkAccount' && <LinkAccount />}
                            {isActive === 'deleteAccount' && <DeleteAnAccount />}
                            {isActive === 'transaction' && <TransactionDetails />}
                            {isActive === 'createPin' && <CreateOrResetPin />}
                        </div>
                    </div>
                    <div className='flex flex-col'>
                    <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4'>
                        <div 
                            onClick={() => setIsActive('linkAccount')}
                        className={isActive === 'linkAccount' ? active : nonActive }
                        >
                            <MdAccountBalanceWallet size={28} />
                            <p className='font-bold text-lg text-center'>Link an Account</p>
                        </div>
                        <div 
                            onClick={() => setIsActive('deleteAccount')}
                            className={isActive === 'deleteAccount' ? active : nonActive }>
                            <MdAccountBalanceWallet size={28} />
                            <p className='font-bold text-lg text-center'>Delete an Account</p>
                        </div>
                        <div 
                            onClick={() => setIsActive('transaction')}
                            className={isActive === 'transaction' ? active : nonActive }>
                            <MdAccountBalanceWallet size={28} />
                            <p className='font-bold text-lg text-center'>Transaction Details</p>
                        </div>
                        <div 
                            onClick={() => setIsActive('createPin')}
                            className={isActive === 'createPin' ? active : nonActive }>
                            <MdAccountBalanceWallet size={28} />
                            <p className='font-bold text-lg text-center'>Create or Reset Pin</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Withdrawal