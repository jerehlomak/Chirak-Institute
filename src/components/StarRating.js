import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = ({rating}) => {
    // const [rating, setRating] = useState(null)
    // console.log(rating)
  return (
    <div className='flex flex-row'>
        {[...Array(rating)].map((star, index) => {
            return (
                <div>
                    <FaStar className='pl-2'
                        color='#ffc107'
                        size={20} />
                   
                </div>        
            )
            })}
             <span className='text-white font-bold place-self-center ml-2'>{rating}</span>
        {/* {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1
            return (
                <label className='star__rating cursor-pointer transition'>
                    <input 
                        type='radio' 
                        name='rating' 
                        value={ratingValue} 
                        onClick={() => setRating(ratingValue)} />
                    <FaStar 
                        color={ratingValue <= rating ? '#ffc107' : '#e5e5e5'} 
                        size={20} />
                </label>
            )
        })} */}
    </div>
  )
}

export default StarRating