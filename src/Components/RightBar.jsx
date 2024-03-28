import React from 'react'
import RightBox from './RightBox'
import Col from './Col'

const RightBar = () => {
  return (
    <div className='bg-white w-[500px] h-screen shadow-lg shadow-left shadow-zinc-400 px-4 py-2'>
      <h2 className='font-semibold text-[18px]'>Todays Highlights (14)</h2>
      <p className='font-normal text-[15px]'>19 Mar 2024</p>
      <div className='flex py-3 items-center justify-between'>
        <RightBox/>
        <RightBox/>
      </div>
      <Col/>
      <Col/>
    </div>
  )
}

export default RightBar
