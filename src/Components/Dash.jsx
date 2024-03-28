import React from 'react'
import Header from './Header'
import Box from './Box'
import Des from './Des'

const Dash = () => {
  return (
    <div className='w-full h-screen bg-[#F7FAFF] px-5 '>
      <Header/>
      <div className="boxes w-full flex items-center justify-between">
      <Box name = {"Order"}/>
      <Box name = {"Trips"}/>
      <Box name = {"Revenue"}/>
      <Box name = {"Expences"}/>
      </div>
      <h2 className='py-3 font-semibold text-lg' >Quick Actions</h2>
      <div className='w-full h-[100px]  py-5 rounded-lg flex items-center justify-between shadow-lg shadow-zinc-200'>
            <div className='w-[200px] h-full flex items-center  justify-center flex-col border-r-2 border-zinc-300'>
                <img src="/vector1.png" alt="" />
                <h4 className='font-semibold text-sm'>Create Indents</h4>
            </div>
            <div className='w-[200px] h-full flex items-center justify-center gap-1 flex-col border-r-2 border-zinc-300'>
                <img src="/truck1.png" alt="" />
                <h4 className='font-semibold text-sm'>Add Vehicle</h4>
            </div>
            <div className='w-[200px] h-full flex items-center justify-center flex-col border-r-2 border-zinc-300'>
                <img src="/vector1.png" alt="" />
                <h4 className='font-semibold text-sm'>Create Indents</h4>
            </div>
            <div className='w-[200px] h-full flex items-center justify-center flex-col border-r-2 border-zinc-300'>
                <img src="/vector1.png" alt="" />
                <h4 className='font-semibold text-sm'>Create Indents</h4>
            </div>
            <div className='w-[200px] h-full flex items-center gap-1 justify-center flex-col '>
                <img src="/truck1.png" alt="" />
                <h4 className='font-semibold text-sm'>Add Indents</h4>
            </div>
      </div>
      <div className='flex items-center justify-between py-2'>
        <h5 className='font-semibold text-lg'>High Priority alerts (14)</h5>
        <h5 className='font-light text-sm'>View All</h5>
      </div>
      <div className='flex items-center justify-between'>
        <Des/>
        <Des/>
      </div>
    </div>
  )
}

export default Dash
