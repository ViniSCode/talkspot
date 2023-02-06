import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiLogOut, FiMessageSquare, FiSettings, FiUsers, FiXCircle } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

export function Sidebar () {
  const [selected, isSelected] = useState();
  const {pathname} = useLocation();

  useEffect(() => {
    isSelected(pathname);
  }, [pathname])

  return (
    <aside className="hidden lg:block vh-height-border">
      <Link to='/'>
        <span className='pl-[62px] text-[22px] font-medium'>Talk<span className='text-blue-500'>Spot</span></span>
      </Link>
      <div className='mt-[13px] border-r border-t h-full'>
        <nav className="flex flex-col h-full justify-between pb-6">
          <ul className='pl-[62px] flex flex-col gap-8 mt-10'>
            <motion.li
              exit={{ backgroundColor: 'transparent', color: '#000000' }}
              animate={selected === '/room' ? { backgroundColor: '#3A35DF', color: '#FFFFFF' } : { backgroundColor: 'transparent', color: '#000000' }}  
              className={`rounded-lg px-2 py-2 w-[200px]`}
            >
              <Link to="/room" className={`flex items-center gap-4 font-medium ${selected !== '/room' && 'hover:text-blue-500'}`}>
                <FiMessageSquare size={22} className="svg"/>
                Messages
              </Link>
            </motion.li>
            <motion.li
              exit={{ backgroundColor: 'transparent', color: '#000000' }}
              animate={selected === '/users' ? { backgroundColor: '#3A35DF', color: '#FFFFFF' } : { backgroundColor: 'transparent', color: '#000000' }}  
              className={`rounded-lg px-2 py-2 w-[200px]`}
            >
              <Link to="/users" className={`flex items-center gap-4 font-medium ${selected !== '/users' && 'hover:text-blue-500'}`}>
                <FiUsers size={22} className="svg"/>
                Users
              </Link>
            </motion.li>
            <motion.li
              exit={{ backgroundColor: 'transparent', color: '#000000' }}
              animate={selected === '/settings' ? { backgroundColor: '#3A35DF', color: '#FFFFFF' } : { backgroundColor: 'transparent', color: '#000000' }}  
              className={`rounded-lg px-2 py-2 w-[200px]`}
            >
              <Link to="/settings" className={`flex items-center gap-4 font-medium ${selected !== '/settings' && 'hover:text-blue-500'}`}>
                <FiSettings size={22} className="svg"/>
                Settings
              </Link>
            </motion.li>
            <li className={`rounded-lg px-2 py-2 w-[200px] transition-colors ${pathname === '/encerrar' ? 'liActive' : 'li'}`}>
              <Link to="/encerrar" className={`flex items-center gap-4 font-medium ${selected !== '/encerrar' && 'hover:text-blue-500'}`}>
                <FiXCircle size={22} className="svg"/>
                Encerrar
              </Link>
            </li>
            <li className={`rounded-lg px-2 py-2 w-[200px] transition-colors ${pathname === '/logout' ? 'liActive' : 'li'}`}>
              <Link to="/logout" className={`flex items-center gap-4 font-medium ${selected !== '/logout' && 'hover:text-blue-500'}`}>
                <FiLogOut size={22} className="svg"/>
                Logout
              </Link>
            </li>
          </ul>
          <div className='flex gap-3 pl-[62px]'>
            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room avatar"  className="w-10 h-10 object-cover rounded-full"/>
            <div>
              <span className='block truncate max-w-[150px]'>Lorem's Name</span>
              <span className='block text-gray-400 text-xs'>loremipsum@gmail.com</span>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
}