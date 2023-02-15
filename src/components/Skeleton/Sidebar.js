import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

export function Sidebar () {

  return (
    <aside className="hidden lg:block vh-height-border">
      <Link to='/'>
        <span className='pl-[62px] text-[22px] font-medium'>Talk<span className='text-blue-500'>Spot</span></span>
      </Link>
      <div className='mt-[13px] border-r border-t h-full'>
        <nav className="flex flex-col h-full justify-between pb-6">
          <ul className='pl-[62px] flex flex-col gap-8 mt-10'>
            <li className='rounded-lg px-2 py-2 w-[200px] transition-colors animate-pulse'>
              <span className='cursor-pointer flex items-center gap-4 font-medium text-gray-500'>
                <span className='w-[25px] bg-gray-300 h-5'></span>
                <span className='w-[80px] bg-gray-300 h-5'></span>
              </span>
            </li>
            <li className='rounded-lg px-2 py-2 w-[200px] transition-colors animate-pulse'>
              <span className='cursor-pointer flex items-center gap-4 font-medium text-gray-500'>
                <span className='w-[25px] bg-gray-300 h-5'></span>
                <span className='w-[80px] bg-gray-300 h-5'></span>
              </span>
            </li>
            <li className='rounded-lg px-2 py-2 w-[200px] transition-colors animate-pulse'>
              <span className='cursor-pointer flex items-center gap-4 font-medium text-gray-500'>
                <span className='w-[25px] bg-gray-300 h-5'></span>
                <span className='w-[80px] bg-gray-300 h-5'></span>
              </span>
            </li>
            <li className='rounded-lg px-2 py-2 w-[200px] transition-colors animate-pulse'>
              <span className='cursor-pointer flex items-center gap-4 font-medium text-gray-500'>
                <span className='w-[25px] bg-gray-300 h-5'></span>
                <span className='w-[80px] bg-gray-300 h-5'></span>
              </span>
            </li>
          </ul>
            <div className='flex gap-3 pl-[62px] items-center animate-pulse'>
              <div className="w-10 h-10 p-2 bg-gray-300 rounded-full">
                <FiUser className="w-full h-full object-cover rounded-full text-gray-600"/>
              </div>
              <div className="flex items-start gap-1 flex-col">
                <span className='block truncate max-w-[150px] bg-gray-300 w-[100px] h-4'></span>
                <span className='block truncate max-w-[150px] bg-gray-300 text-xs w-[130px] h-3'></span>
              </div>
            </div>
        </nav>
      </div>
    </aside>
  );
}