import React from 'react'

function RoomInfo({room}) {

  console.log(room.image)

  return (
    <div className='flex gap-3 mt-10'>
      {/* <img src={} alt={room.name} referrerPolicy="no-referrer"  className="w-10 h-10  lg:w-9 lg:h-9 object-cover rounded-full" /> */}

      <div>
        <span className='block text-base lg:text-sm'>{room.name}</span>
        <span className='block text-gray-400 text-xs'>{room.name}</span>
      </div>
    </div>
  )
}

export default RoomInfo