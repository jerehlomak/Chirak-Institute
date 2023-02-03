import React, { useState } from 'react'
import LESSONPLANDATA from './LessonPlanData'

const Paginator = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(5)

    const pages = []
    for(let i=1; 1<=Math.ceil(LESSONPLANDATA.length / itemsPerPage); i++) {
        pages.push(i)
    }
    //index of last item
    const indexOfLastItem = currentPage * itemsPerPage
    // index of first items
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    // get current items
    const currentItems = LESSONPLANDATA.slice(indexOfFirstItem, indexOfLastItem)

    // component to render pages
    const renderPageNumbers = pages.map((number, index) => {
        return(
        <li key={index} id={number}>
            {number}
        </li>
    )
  })
  return (
    <div>
        {renderPageNumbers}
    </div>
  )
}

export default Paginator