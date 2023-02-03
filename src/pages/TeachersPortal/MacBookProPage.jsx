import React from 'react'
import { MacBookPro, Header, SideBar } from '../../components/Teachers/components'

const MacBookProPage = () => {
  return (
    <div className='background flex flex-row'>
        <SideBar />
        <div className='flex flex-col w-full'>
          <Header />
          <MacBookPro />
        </div>
    </div>
  )
}

export default MacBookProPage