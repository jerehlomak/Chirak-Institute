import React from 'react'
import { Preferred } from '../components'
import { Navbar } from '../components'
import { CourseIdea } from '../components'

const PreferredCourse = () => {
  return (
    <div className="background">
      <Navbar />
    <Preferred />
    <CourseIdea />
    </div>
  )
}

export default PreferredCourse