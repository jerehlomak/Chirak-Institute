import { useState } from 'react'
import { MdDeleteSweep } from 'react-icons/md'
import { Table } from 'react-bootstrap'

import { DeleteAccountData } from './DeleteAccountData'
import DeleteLesson from '../LessonPlan/DeleteLesson'

const DeleteAnAccount = () => {
  const [items, setItems] = useState(DeleteAccountData)
  const [modalOn, setModalOn] = useState(false)
  const [choice, setChoice] = useState(false);

  const clicked = (e) => {
    e.preventDefault();
    setModalOn(true);
  }

  const handleOKClick = (index) => {
    setItems((items) => items.filter((_, i) => i !== index))
  }

  return (
    <div className='flex w-[100%] flex-col gap-4 overflow-x-scroll'>
      <div className='whitespace-nowrap'>
        <Table responsive borderless striped>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className='text-sm font-semibold align-middle'>
                  <td>{item.name}</td>
                  <td>{item.bank}</td>
                  <td>{item.time}</td>
                  <td>{item.date}</td>
                  <td>
                    <span 
                      onClick={clicked}
                      className='cursor-pointer'>
                        <MdDeleteSweep size={21} color='red' />
                    </span>
                  </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
        {modalOn && <DeleteLesson setModalOn={setModalOn} setChoice={setChoice} handleOKClick={handleOKClick} />}
    </div>
  )
}

export default DeleteAnAccount