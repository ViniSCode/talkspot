import React from 'react';
import { IoSend } from 'react-icons/io5';

function MessageInput({handleCreateMessage, setNewMessage}) {
  return (
    <div className='mt-8 relative w-full'>
      <IoSend className='text-gray-400 absolute right-5 top-5 cursor-pointer' onKeyDown={() => handleCreateMessage()} />
      <span className='w-full block bg-gray-200 rounded-full px-4 py-7 placeholder:text-xs lg:placeholder:text-base pl-12'></span>
    </div>
  )
}

export default MessageInput