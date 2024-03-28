import React from 'react'
import PieChart from './PieChart'


const Box = ({name}) => {
  return (
    <div className='w-[240px] h-[300px] bg-white px-3 py-4 rounded-lg shadow-lg shadow-zinc-200' >
        <h1 className='font-semibold'>{name}</h1>
        <div className='flex items-center justify-between flex-col gap-3'>
            <PieChart/>
            <div className="rows w-full flex flex-col gap-2">
                <div className="row w-full bg-gradient-to-r from-white to-yellow-400 flex items-center justify-between px-2 py-1 rounded-md">
                    <h3>Upcoming</h3>
                    <h3>50</h3>
                </div>
                <div className="row w-full bg-gradient-to-r from-white to-indigo-600 flex items-center justify-between px-2 py-1 rounded-md">
                    <h3>Ongoing</h3>
                    <h3>100</h3>
                </div>
                <div className="row w-full bg-gradient-to-r from-white to-teal-400 flex items-center justify-between px-2 py-1 rounded-md">
                    <h3>Completed</h3>
                    <h3>50</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Box
