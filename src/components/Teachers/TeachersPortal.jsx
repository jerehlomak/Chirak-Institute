import React from 'react'
import { Header, SideBar, Main, } from './components'
import Side from './components/SideBar/Side'

const TeachersPortal = () => {
  return (
    <div className='background flex flex-row'>
        <Side />
        <div className='flex flex-col w-full'>
          <Header />
          <Main />
        </div>    
    </div>
  )
}

export default TeachersPortal