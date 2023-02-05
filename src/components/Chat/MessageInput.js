import React from 'react'
import { IoSend } from 'react-icons/io5'

function MessageInput() {
  return (
    <div className='mt-8 relative'>
      <label htmlFor="chat"></label>
      <IoSend className='text-gray-400 absolute right-5 top-5 cursor-pointer' />
      <input type="text" id='chat' name='chat' placeholder="Digite uma mensagem" className='w-full bg-gray-200 rounded-full px-4 py-4 placeholder:text-xs lg:placeholder:text-base pl-12' />
    </div>
  )
}

export default MessageInput