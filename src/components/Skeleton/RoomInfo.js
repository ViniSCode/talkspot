import React from 'react'
import { FiUser } from 'react-icons/fi'

function RoomInfo() {

  return (
    <div className='flex gap-3  items-center mt-10 animate-pulse'>
      <div className="w-9 h-9 p-2 bg-gray-300 rounded-full">
        <FiUser className="w-full h-full object-cover rounded-full text-gray-600"/>
      </div>

      <div className='flex items-start gap-1 flex-col'>
        <span className='block bg-gray-200 lg:text-sm w-[100px] h-4'></span>
        <span className='block bg-gray-200 text-xs w-[150px] h-3'></span>
      </div>
    </div>
  )
}

export default RoomInfo