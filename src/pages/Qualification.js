import React from 'react'
import { QualificationForm } from '../components'
import { Navbar } from '../components'

const Qualification = () => {
  return (
    <div className='background'>
        <Navbar />
        <div className='flex flex-col mt-16'>
            <QualificationForm />
        </div>
    </div>
  )
}

export default Qualification