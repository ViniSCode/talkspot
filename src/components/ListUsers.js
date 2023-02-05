import React from 'react'

export function ListUsers() {
  return (
    <div>
      <div className="flex items-center justify-between pb-4 border-b">
        <div className='flex gap-3 mt-8'>
          <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room avatar"  className="w-10 h-10  lg:w-9 lg:h-9 object-cover rounded-full"/>
          <div>
            <span className='block text-base lg:text-sm'>Lorem's Name</span>
            <span className='block text-gray-400 text-xs'>loremipsum@gmail.com</span>
          </div>
        </div>

        <div>
          <span className='text-blue-500 font-medium'>Admin</span>
        </div>
      </div>

      <div className="flex items-center justify-between pb-4 border-b">
        <div className='flex gap-3 mt-8'>
          <img src="https://i.pravatar.cc/300" alt="room avatar"  className="w-10 h-10  lg:w-9 lg:h-9 object-cover rounded-full"/>
          <div>
            <span className='block text-base lg:text-sm'>Lorem's Name</span>
            <span className='block text-gray-400 text-xs'>loremipsum@gmail.com</span>
          </div>
        </div>

        <div>
          <span className='text-black font-medium'>User</span>
        </div>
      </div>

      <div className="flex items-center justify-between pb-4 border-b">
        <div className='flex gap-3 mt-8'>
          <img src="https://i.pravatar.cc/100" alt="room avatar"  className="w-10 h-10  lg:w-9 lg:h-9 object-cover rounded-full"/>
          <div>
            <span className='block text-base lg:text-sm'>Lorem's Name</span>
            <span className='block text-gray-400 text-xs'>loremipsum@gmail.com</span>
          </div>
        </div>

        <div>
          <span className='text-black font-medium'>User</span>
        </div>
      </div>

      <div className="flex items-center justify-between pb-4 border-b">
        <div className='flex gap-3 mt-8'>
          <img src="https://i.pravatar.cc/200" alt="room avatar"  className="w-10 h-10  lg:w-9 lg:h-9 object-cover rounded-full"/>
          <div>
            <span className='block text-base lg:text-sm'>Lorem's Name</span>
            <span className='block text-gray-400 text-xs'>loremipsum@gmail.com</span>
          </div>
        </div>

        <div>
          <span className='text-black font-medium'>User</span>
        </div>
      </div>

      <div className="flex items-center justify-between pb-4 border-b">
        <div className='flex gap-3 mt-8'>
          <img src="https://i.pravatar.cc/50" alt="room avatar"  className="w-10 h-10  lg:w-9 lg:h-9 object-cover rounded-full"/>
          <div>
            <span className='block text-base lg:text-sm'>Lorem's Name</span>
            <span className='block text-gray-400 text-xs'>loremipsum@gmail.com</span>
          </div>
        </div>

        <div>
          <span className='text-black font-medium'>User</span>
        </div>
      </div>

      <div className="flex items-center justify-between pb-4 border-b">
        <div className='flex gap-3 mt-8'>
          <img src="https://i.pravatar.cc/20" alt="room avatar"  className="w-10 h-10  lg:w-9 lg:h-9 object-cover rounded-full"/>
          <div>
            <span className='block text-base lg:text-sm'>Lorem's Name</span>
            <span className='block text-gray-400 text-xs'>loremipsum@gmail.com</span>
          </div>
        </div>

        <div>
          <span className='text-black font-medium'>User</span>
        </div>
      </div>

    </div>
  )
}

export default ListUsers