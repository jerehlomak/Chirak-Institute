import React from 'react'
import { Header, SideBar, AllCourses } from './components'

const AllCoursesPage = () => {
  return (
    <div className='background flex flex-row'>
        <SideBar />
        <div className='flex flex-col w-full'>
          <Header />
          <AllCourses />
        </div>

        
    </div>
  )
}

export default AllCoursesPage