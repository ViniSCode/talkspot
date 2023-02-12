import React from 'react'

function RoomInfo({room}) {

  return (
    <div className='flex gap-3 mt-10'>
      {room?.image && <img src={room?.image} alt={room?.name} referrerPolicy="no-referrer" className="w-10 h-10  lg:w-9 lg:h-9 object-cover rounded-full" />}

      <div>
        <span className='block text-base lg:text-sm'>{room?.name}</span>
        <span className='block text-gray-400 text-xs'>Admin: {room?.author?.name}</span>
      </div>
    </div>
  )
}

export default RoomInfo