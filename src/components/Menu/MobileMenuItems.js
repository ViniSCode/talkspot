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
          <ul className='pl-[62px] flex flex-col gap-5 self-center'>
            <motion.li
              exit={{ backgroundColor: 'transparent', color: '#000000' }}
              animate={selected === '/room' ? { backgroundColor: '#3A35DF', color: '#FFFFFF' } : { backgroundColor: 'transparent', color: '#000000' }}  
              className={`rounded-lg px-2 py-2 w-[200px]`}
            >
              <Link to="/room" className='flex items-center gap-4 font-medium'>
                <FiMessageSquare size={22} className="svg"/>
                Messages
              </Link>
            </motion.li>
            <motion.li
              exit={{ backgroundColor: 'transparent', color: '#000000' }}
              animate={selected === '/users' ? { backgroundColor: '#3A35DF', color: '#FFFFFF' } : { backgroundColor: 'transparent', color: '#000000' }}  
              className={`rounded-lg px-2 py-2 w-[200px]`}
            >
              <Link to="/users" className='flex items-center gap-4 font-medium'>
                <FiUsers size={22} className="svg"/>
                Users
              </Link>
            </motion.li>
            <motion.li
              exit={{ backgroundColor: 'transparent', color: '#000000' }}
              animate={selected === '/settings' ? { backgroundColor: '#3A35DF', color: '#FFFFFF' } : { backgroundColor: 'transparent', color: '#000000' }}  
              className={`rounded-lg px-2 py-2 w-[200px]`}
            >
              <Link to="/settings" className='flex items-center gap-4 font-medium'>
                <FiSettings size={22} className="svg"/>
                Settings
              </Link>
            </motion.li>
            <li className={`rounded-lg px-2 py-2 w-[200px] transition-colors ${pathname === '/encerrar' ? 'liActive' : 'li'}`}>
              <Link to="/encerrar" className='flex items-center gap-4 font-medium'>
                <FiXCircle size={22} className="svg"/>
                Encerrar
              </Link>
            </li>
            <li className={`rounded-lg px-2 py-2 w-[200px] transition-colors ${pathname === '/logout' ? 'liActive' : 'li'}`}>
              <Link to="/logout" className='flex items-center gap-4 font-medium'>
                <FiLogOut size={22} className="svg"/>
                Logout
              </Link>
            </li>
          </ul>
      </nav>
    </>
  );
}