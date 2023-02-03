import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { MdDeleteSweep } from 'react-icons/md'
import ReactPaginate from "react-paginate";

import { TransactionDetailsData } from './TransactionDetailsData'
import DeleteLesson from '../LessonPlan/DeleteLesson';

const TransactionDetails = () => {
    const [searchDate, setSearchDate] = useState('')
    const [searchBank, setSearchBank] = useState('')
    const [searchTime, setSearchTime] = useState('')
    const [pageNumber, setPageNumber] = useState(0);

    const [items, setItems] = useState(TransactionDetailsData)
    const [modalOn, setModalOn] = useState(false)
    const [choice, setChoice] = useState(false);

    const clicked = (e) => {
        e.preventDefault();
        setModalOn(true);
    }

  const handleOKClick = (index) => {
    setItems((items) => items.filter((_, i) => i !== index))
  }

    const handlePageChange = ({ selected }) => {
        setPageNumber(selected);
      };

    const transactionPerPage = 5
    const pagesVisited = pageNumber * transactionPerPage;

    const displayTransactions = TransactionDetailsData.filter((transaction) => {
        if (searchDate !== "") {
          return transaction.date.toString().includes(searchDate);
        } else if (searchBank !== "") {
          return transaction.bank.toLowerCase().includes(searchBank.toLowerCase());
        } else if (searchTime !== "") {
            return transaction.time.toString().includes(searchTime);
        } else {
            return transaction;
        }
    }).slice(pagesVisited, pagesVisited + transactionPerPage)
    

    const pageCount = Math.ceil(
    TransactionDetailsData.filter((transaction) => {
        if (searchDate !== "") {
        return transaction.date.toString().includes(searchDate);
        } else if (searchBank !== "") {
        return transaction.bank.toLowerCase().includes(searchBank.toLowerCase());
        } else if (searchTime !== "") {
        return transaction.time.toString().includes(searchTime);
        } else {
        return transaction;
        }
        //   return false;
    }).length / transactionPerPage
    );
    
  return (
    <div className='flex flex-col'>
        <h1 className='text-2xl font-bold'>All Transactions</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-3 w-full items-start justify-start '>
            <div className='flex'>
                <input
                className='px-4 py-2 w-full rounded-sm bg-[#ecf0fa] text-xs text-[#8ba7eb] outline-none'
                type='text'
                placeholder='Search by Date'
                onChange={(e) => {
                    setSearchDate(e.target.value);
                }}
                />
            </div>
            <div className='flex'>
                <input
                className='px-4 py-2 w-full rounded-sm bg-[#ecf0fa] text-xs text-[#8ba7eb] outline-none'
                type='text'
                placeholder='Search by Name'
                onChange={(e) => {
                    setSearchBank(e.target.value);
                }}
                />
            </div>
            <div className='flex'>
                <input
                className='px-4 py-2 w-full rounded-sm bg-[#ecf0fa] text-xs text-[#8ba7eb] outline-none'
                type='text'
                placeholder='Search by Batch'
                onChange={(e) => {
                    setSearchTime(e.target.value);
                }}
                />
            </div>
            <div className='flex items-center justify-content-center'>
                <button className='bg-[#000000] text-white px-6 py-2 text-xs uppercase rounded-md font-semibold'>
                Search
                </button>
            </div>
        </div>
        <div className='mt-10 whitespace-nowrap'>
            <Table responsive striped>
                <thead className='bg-gray-300 pt-4'>
                    <tr className='font-bold text-sm'>
                        <th>
                            <input type='checkbox' />
                        </th>
                        <th>Description</th>
                        <th>Bank</th>
                        <th>Time</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {displayTransactions.map((item, idx) => (
                        <tr key={idx} className='text-xs font-normal align-middle'>
                            <td>
                                <input type='checkbox' />
                            </td>
                            <td>${item.amount} has been transferred to <br />{item.accNumber}</td>
                            <td>{item.bank}</td>
                            <td>{item.time}</td>
                            <td>{item.date}</td>
                            <td>
                                <span onClick={clicked} className='cursor-pointer'><MdDeleteSweep size={21} color='red' /></span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <footer className='py-3'>
                <ReactPaginate
                    pageCount={pageCount}
                    onPageChange={handlePageChange}
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakClassName={
                        "products__arrow flex justify-center items-center"
                    }
                    containerClassName={"products__foot"}
                    pageClassName={
                        "products__arrow flex justify-center items-center"
                    }
                    previousClassName={
                        "products__arrow flex justify-center items-center"
                    }
                    nextClassName={
                        "products__arrow flex justify-center items-center"
                    }
                    activeClassName={"bg-black text-white"}
                />
            </footer>
            {modalOn && <DeleteLesson setModalOn={setModalOn} setChoice={setChoice} handleOKClick={handleOKClick} />}
        </div>
    </div>
  )
}

export default TransactionDetails