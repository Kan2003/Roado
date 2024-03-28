import React from 'react'

const Des = () => {
  return (
    <div className='w-[384px] h-[150px]  px-3 py-2 shadow-lg shadow-zinc-300'>
      <div className='flex items-center justify-between'>
        <div className="left flex items-center justify-center gap-2">
            <img src="/icon.png" alt="" />
            <div className='flex flex-col'>
                <h4 className='font-semibold text-[14px]'>Driver Raised Concern</h4>
                <p className='font-normal text-[11px]'>Load No : 12454,Bill To : RoaDo demo Bangalore</p>
            </div>
        </div>
        <div className="right">
            <h3 className='text-[12px] font-semibold'>13 Feb 2024</h3>
        </div>
      </div>
      <p className='text-[12px] py-2 font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua</p>
      <div className='flex items-center gap-6 justify-end'>
        <div>Ignore</div>
        <div className='bg-[#1A3875] text-white rounded-md px-2 py-1'>Reslove</div>
      </div>
    
    </div>
  )
}

export default Des
