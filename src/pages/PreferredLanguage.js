import React, { useState, useEffect } from 'react'
import { Navbar, Main2 } from '../components'
import { getCountries } from '../api'
import { images } from '../constants'
import axios from 'axios'
import { Countries } from './Data'

const PreferredLanguage = () => {
    // const [code, setCode] = useState('')
    
    // console.log(code)
    // // setCode(Countries[0].country)

    // useEffect(() => {
    //     // fetch('https://countryflagsapi.com/png/ir')
    //     // fetch('https://api.first.org/data/v1/countries')
    //     // .then(resp => resp.json())
    //     // .then(data => console.log(data))
    //     // axios.get('https://countryflagsapi.com/png/ir')
    //     // .then(res => console.log(res))
    //     // .catch(err => console.error(err))
    // }, [])

    // const getCode = Countries.cca2
    // console.log(getCode)
  return (
     
    <div>
        <div className='blur'></div>
            <div id='login' className='login min-h-screen'>
            <Navbar />
            <Main2 />
            </div>
            <div className='w-full max-w-lg shadow-md'>
                <div className='login__form flex flex-col items-center justify-center w-60 md:max-w-lg p-8 md:p-12 px-14 py-7 rounded-full shadow-2xl space-y-4 md:space-y-12'>
                    
                    <div className='form flex-col'>
                        <h1 className='relative text-center text-gray-800 text-xl font-bold mb-10'>Choose a preferred language</h1>
                       
                        <div className='flex flex-wrap space-x-12'>
                            <div className='flex flex-row items-center space-x-1'>
                                <img src={images.recom1} alt='flag' className='h-5 w-7' />
                                <h4 className='text-black text-xl '>NG</h4>
                            </div>
                            <div className='flex flex-row items-center space-x-1'>
                                <img src={images.recom1} alt='flag' className='h-5 w-7' />
                                <h4 className='text-black text-xl '>NG</h4>
                            </div>
                            <div className='flex flex-row items-center space-x-1'>
                                <img src={images.recom1} alt='flag' className='h-5 w-7' />
                                <h4 className='text-black text-xl '>NG</h4>
                            </div>
                            <div className='flex flex-row items-center space-x-1'>
                                <img src={images.recom1} alt='flag' className='h-5 w-7' />
                                <h4 className='text-black text-xl '>NG</h4>
                            </div>
                            <div className='flex flex-row items-center space-x-1'>
                                <img src={images.recom1} alt='flag' className='h-5 w-7' />
                                <h4 className='text-black text-xl '>NG</h4>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
    </div>
  )
}

export default PreferredLanguage