import React, { useState } from 'react'

// type FormStepperProps = {
//     onStepChange: Function
//     step: number
// }

const AssessmentQuestion = ({ onStepChange, step }) => {
    // form data state
    const [formData, setFormData] = useState([{
        question: '',
        correctAns: '',
        wrongAns: []
    }])
    // handle step Change
    console.log(formData)
    //handle input Change
    const handleChange = (e) => { 
        const tempChange = {...formData}
        tempChange[e.target.name] = e.target.value
        setFormData(tempChange)
    }
  return (
    <div className='flex flex-col items-center w-full space-y-4'>
        <p className='text-xs text-red-600 max-w-4/5 mx-auto'>Note: First Assessment are Strictly Objective  (15 Questions are expected)</p>
        <h1 className='text-lg font-bold'>First Assessment</h1>
        <p className='text-red-600 uppercase '>{`Question ${step <= 15? step : ''}`}</p>
        <div className='flex flex-col w-full'>
            <div className='flex flex-col items-start justify-start w-full'>
                <label className='block text-[#96A4C5] text-sm font-medium' htmlFor="">Question</label>
                <input name='question' onChange={handleChange} type="text" className='bg-[#edf0ff] py-3 px-2 w-full rounded-md outline-none mt-3' />
            </div>
            <div className='flex flex-col items-start justify-start w-full mt-4'>
                <label className='block text-[#96A4C5] text-sm font-medium' htmlFor="">Correct Answer</label>
                <input name='correctAns' onChange={handleChange} type="text" className='bg-[#edf0ff] py-3 px-2 w-full rounded-md outline-none mt-3' />
            </div>
            <div className='flex flex-col items-start justify-start w-full mt-4'>
                <label className='block text-[#96A4C5] text-sm font-medium' htmlFor="">Wrong Answer</label>
                <input name='WrongAns' onChange={handleChange} type="text" className='bg-[#edf0ff] py-3 px-2 w-full rounded-md outline-none mt-3' />
            </div>
            <div className='flex flex-col items-start justify-start w-full mt-4'>
                <label className='block text-[#96A4C5] text-sm font-medium' htmlFor="">Wrong Answer</label>
                <input name='wrongAns' onChange={handleChange} type="text" className='bg-[#edf0ff] py-3 px-2 w-full rounded-md outline-none mt-3' />
            </div>
        </div>
        {step === 15 && <p className='text-xs text-red-600 place-self-center'>
            Please use the back button to review your questions 
            and answers if satisfied, click on submit.
        </p>}
        {/* <div className='flex pt-8 space-x-6'>
            <button onClick={() => onStepChange(step - 1)} className='text-xs px-4 py-3 font-semibold rounded-md bg-[#cccccc] text-black'>
                BACK
            </button>
            <button onClick={() => onStepChange(step + 1)}  className='text-xs px-4 py-3 font-semibold rounded-md bg-black text-white hover:bg-[#cccccc]'>
                SAVE AND CONTINUE
            </button>   
        </div> */}
    </div>
  )
}

export default AssessmentQuestion