import React from 'react'

const Col = () => {
  return (
    <div className='w-full'>
    <div className='flex items-center justify-between py-2'>
        <h5 className='font-semibold text-lg'>Completed Activities (14)</h5>
        <h5 className='font-light text-sm'>View All</h5>
      </div>
    <div className="box w-full text-[13px]  border-2 border-zinc-300 rounded-lg">
        <div className='p-2 border-b-2 border-zinc-300'>Gurpreet Singh  (Dispatch team) has created Load No. I-I-AAA-1325</div>
        <div className='p-2 border-b-2 border-zinc-300'>Gurpreet Singh  (Dispatch team) has created Load No. I-I-AAA-1325</div>
        <div className='p-2 border-b-2 border-zinc-300'>Gurpreet Singh  (Dispatch team) has created Load No. I-I-AAA-1325</div>
        <div className='p-2 border-b-2'>Gurpreet Singh  (Dispatch team) has created Load No. I-I-AAA-1325</div>
    </div>
    </div>
  )
}

export default Col
