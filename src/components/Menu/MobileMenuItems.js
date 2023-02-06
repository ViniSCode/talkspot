import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import { FiLogOut, FiMessageSquare, FiSettings, FiUsers, FiXCircle } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';

export function MobileMenuItems ({isMenuOpen}) {
  const [selected, isSelected] = useState();
  const {handleSignOut} = useAuth();
  const {pathname} = useLocation();

  useEffect(() => {
    isSelected(pathname);
  }, [pathname])

  async function handleLogout () {
    await handleSignOut();
  }

  const menuItems = [
    {
      href: '/room',
      name: 'Messages',
      icon: <FiMessageSquare size={22} className="svg"/>
    },
    {
      href: '/users',
      name: 'Users',
      icon: <FiUsers size={22} className="svg"/>
    },
    {
      href: '/settings',
      name: 'Settings',
      icon: <FiSettings size={22} className="svg"/>
    },
    {
      href: '/delete',
      name: 'Delete',
      icon: <FiXCircle size={22} className="svg"/>
    }
  ]

  return (
    <>
      <nav className={`flex-col h-full justify-center ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <ul className='flex flex-col gap-5 self-center'>

          {
              menuItems.map(item => (
                <motion.li
                  key={item.name}
                  initial={{ backgroundColor: '#FFFFFF', color: '#000000' }}
                  animate={selected === item.href ? { backgroundColor: '#FFFFFF', color: '#3A35DF' } : { backgroundColor: '#3A35DF', color: '#FFFFFF' }}  
                  className={`hover:underline rounded-2xl px-2 py-2 w-[160px] mx-auto flex items-center justify-center`}
                >
                  <Link to={item.href} className={`flex items-center gap-4 font-medium ${pathname === item.href ? '' : 'liMobile'}`}>
                    {item.icon}
                    {item.name}
                  </Link>
                </motion.li>
              ))
            }

            <li className={`rounded-lg px-2 py-2 w-[200px] transition-colors flex items-center justify-center ${pathname === '/logout' ? 'liActive' : 'li'}`} onClick={handleLogout}>
              <span className={`cursor-pointer flex items-center gap-4 font-medium text-white hover:underline`}>
                <FiLogOut size={22} className="svg"/>
                Logout
              </span>
            </li>
          </ul>
      </nav>
    </>
  );
}