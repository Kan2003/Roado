import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center py-5'>
      <h1 className='text-[1.5vw] font-semibold'>Dashboard</h1>
      <div className='flex bg-white w-[132px] h-[32px] rounded-2xl items-center justify-around'>
      <img  src="/search.png" alt="" />
      <img src="/ring.png" alt="" />
      <img src="/dot.png" alt="" />
      </div>
    </div>
  )
}

export default Header
