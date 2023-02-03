import React, { useState } from 'react'
import OtpInput from 'react-otp-input'

const CreateOrResetPin = () => {
  const [otp, setOtp] = useState('')

  const handleChange = (otp) => {
   
  }
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <h2 className='text-2xl'>Verify your identity</h2>
      <p className='text-sm text-[#7A869A]'>
        Enter the code sent  to (+84) 999 999 999
      </p>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        separator={' '}
        inputStyle={{
          width: '3rem',
          height: '3rem',
          fontSize: '1.2rem',
          fontWeight: '600',
          borderBottomColor: '#04387F',
          borderBottomWidth: 2,
          background: '#F4F5F7',
          margin: '0.5rem',
          outline: 'none',
          borderRadius: '5px'
        }}
      />
      <p className='text-sm text-[#7A869A]'>I didn’t receive code. <span className='text-[#04387F]'>Resend Code</span></p>
    </div>
  )
}

export default CreateOrResetPin