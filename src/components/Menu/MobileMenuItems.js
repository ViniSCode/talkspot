import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiLogOut, FiMessageSquare, FiSettings, FiUsers, FiXCircle } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

export function MobileMenuItems ({isMenuOpen}) {
  const [selected, isSelected] = useState();
  const {pathname} = useLocation();

  useEffect(() => {
    isSelected(pathname);
  }, [pathname])

  return (
    <>
      <nav className={`flex-col h-full justify-center ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <ul className='flex flex-col gap-5 self-center'>
            <motion.li
              exit={{ backgroundColor: 'transparent', color: '#FFFFFF' }}
              animate={selected === '/room' ? { backgroundColor: '#FFFF', color: '#3A35DF' } : { backgroundColor: 'transparent', color: '#FFFFFF'}}  
              className={`rounded-lg px-2 py-2 w-[200px] mx-auto hover:underline flex items-center justify-center`}
            >
              <Link to="/room" className='flex items-center gap-4 font-medium'>
                <FiMessageSquare size={22} className="svg"/>
                Messages
              </Link>
            </motion.li>
            <motion.li
              exit={{ backgroundColor: 'transparent', color: '#FFFFFF' }}
              animate={selected === '/users' ? { backgroundColor: '#FFFF', color: '#3A35DF' } : { backgroundColor: 'transparent', color: '#FFFFFF' }}  
              className={`rounded-lg px-2 py-2 w-[200px] mx-auto hover:underline flex items-center justify-center`}
            >
              <Link to="/users" className='flex items-center gap-4 font-medium'>
                <FiUsers size={22} className="svg"/>
                Users
              </Link>
            </motion.li>
            <motion.li
              exit={{ backgroundColor: 'transparent', color: '#FFFFFF' }}
              animate={selected === '/settings' ? { backgroundColor: '#FFFF', color: '#3A35DF' } : { backgroundColor: 'transparent', color: '#FFFFFF' }}  
              className={`rounded-lg px-2 py-2 w-[200px] mx-auto hover:underline flex items-center justify-center`}
            >
              <Link to="/settings" className='flex items-center gap-4 font-medium'>
                <FiSettings size={22} className="svg"/>
                Settings
              </Link>
            </motion.li>
            <li className={`rounded-lg px-2 py-2 w-[200px] hover:underline transition-colors ${pathname === '/encerrar' ? 'liActive' : 'li'}`}>
              <Link to="/encerrar" className='flex items-center justify-center gap-4 font-medium text-white'>
                <FiXCircle size={22} className="svg"/>
                Encerrar
              </Link>
            </li>
            <li className={`rounded-lg px-2 py-2 w-[200px] hover:underline transition-colors text-white ${pathname === '/logout' ? 'liActive' : 'li'}`}>
              <Link to="/logout" className='gap-4 font-medium flex items-center justify-center'>
                <FiLogOut size={22} className="svg"/>
                Logout
              </Link>
            </li>
          </ul>
      </nav>
    </>
  );
}