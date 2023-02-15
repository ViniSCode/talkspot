import React from 'react';
import { FiUserPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
export function Header() {
  return (
    <header className="flex items-center justify-between lg:justify-end border-b pb-6 lg:pb-3">
      <Link to='/'>
        <span className='lg:hidden block text-[30px] font-medium'>Talk<span className='text-blue-500'>Spot</span></span>
      </Link>
      <div className='flex item-center gap-4 relative animate-pulse'>
        <button className='bg-gray-300 text-white rounded-lg px-2 py-2 lg:mr-[58px] '>
          <FiUserPlus size={18}/>
        </button>
      </div>
    </header>
  )
}
