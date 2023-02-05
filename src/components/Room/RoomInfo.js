import React from 'react'

function RoomInfo() {
  return (
    <div className='flex gap-3'>
      <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room avatar"  className="w-10 h-10  lg:w-9 lg:h-9 object-cover rounded-full"/>
      <div>
        <span className='block text-base lg:text-sm'>Lorem's Room</span>
        <span className='block text-gray-400 text-xs'>loremipsum@gmail.com</span>
      </div>
    </div>
  )
}

export default RoomInfo