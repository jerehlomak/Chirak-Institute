import React from 'react'
import images from '../../constants/images'

const Payment = () => {
  return (
    <div className='container flex flex-col mx-auto p-5 px-2 py-4 justify-center items-center sm:items-center -mt-14 '>
      <h3 className='text-center text-gray-900 text-xl font-bold mb-4'>Payment</h3>
      {/* <div className='flex flex-row flex-wrap p-4 -mb-20 md:justify-start md:items-start mt-2'> */}
      <div className='grid grid-cols-1 lg:grid-cols-2 place-content-center mx-auto gap-6'>
        <div className='h-32 w-48'>
          <img className='w-full h-full' src={images.Bank} alt="Bank payment" />
        </div>
        <div className='h-32 w-48'>
          <img className='w-full h-full' src={images.Paypal} alt="Paypal payment" />
        </div>
        <div className='h-32 w-48'>
          <img className='w-full h-full' src={images.Crypto} alt="Crypto payment" />
        </div>
      </div>
    </div>
  )
}

export default Payment