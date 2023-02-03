import React from 'react'

const CourseIdea = () => {
        return (
                <div className='mx-auto max-w-xl py-16'>
                        <div className='mb-4'>
                                <p className='text-center font-semibold text-xl'>Welcome Sani Emeka</p>
                                <h1 className='text-green text-5xl text-center font-medium pt-4 tracking-normal'> Get Accredited </h1>
                        </div>

                        <div>
                                <p className='text-center text-red mx-14 text-xl'>Note: in other to apply as a lecturer/Instructor with the Institution
                                        you will pay a non refundable application/Verification fee of $50.</p>
                        </div>

                        <div className='w-60 mx-auto'>
                                <p className='text-base font-semibold my-4'>Please Select a preferred course </p>
                                <form>
                                        <div className='mb-2'>
                                        <input type="radio" id="Professional" value="Professional" />
                                        <label className='mx-2' for="Professional">Professional Course</label>
                                        </div>
                               <div>
                               <input type="radio" id="Skill" value="Skill" />
                                <label className='mx-2' for="Skill">Skill Course</label>
                               </div>
 
                                </form>
                        </div>
                        <div className='w-64 h-16 mt-12 mx-auto'>
                                <button className='btn-red w-full h-16'>Proceed Application</button>
                        </div>
                </div>
        )
}
export default CourseIdea