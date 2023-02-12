import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiLogOut, FiMessageSquare, FiSettings, FiXCircle } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useRoom } from "../hooks/useRoom";

export function Sidebar () {
  const { roomId }  = useRoom();
  const [selected, isSelected] = useState();
  const {pathname} = useLocation();
  const {handleSignOut} = useAuth();
  const { user } = useAuth();

  useEffect(() => {
    isSelected(pathname);
  }, [pathname])

  async function handleLogout () {
    await handleSignOut();
  }

  const menuItems = [
    {
      href: `/admin/rooms/${roomId}`,
      name: 'Messages',
      icon: <FiMessageSquare size={22} className="svg"/>
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
    <aside className="hidden lg:block vh-height-border">
      <Link to='/'>
        <span className='pl-[62px] text-[22px] font-medium'>Talk<span className='text-blue-500'>Spot</span></span>
      </Link>
      <div className='mt-[13px] border-r border-t h-full'>
        <nav className="flex flex-col h-full justify-between pb-6">
          <ul className='pl-[62px] flex flex-col gap-8 mt-10'>
            {
              menuItems.map(item => (
                <motion.li
                  key={item.name}
                  initial={{ backgroundColor: '#FFFFFF', color: '#000000' }}
                  animate={selected === item.href ? { backgroundColor: '#3A35DF', color: '#FFFFFF' } : { backgroundColor: '#FFFFFF', color: '#000000' }}  
                  className={`rounded-lg px-2 py-2 w-[200px]`}
                >
                  <Link to={item.href} className={`flex items-center gap-4 font-medium ${pathname === item.href ? 'liActive' : 'li'}`}>
                    {item.icon}
                    {item.name}
                  </Link>
                </motion.li>
              ))
            }

            <li className={`rounded-lg px-2 py-2 w-[200px] transition-colors ${pathname === '/logout' ? 'liActive' : 'li'}`} onClick={handleLogout}>
              <span className={`cursor-pointer flex items-center gap-4 font-medium ${selected !== '/logout' && 'hover:text-blue-500'}`}>
                <FiLogOut size={22} className="svg"/>
                Logout
              </span>
            </li>
          </ul>
          { user && (
            <div className='flex gap-3 pl-[62px]'>
              <img src={user.avatar} alt="room avatar" referrerPolicy="no-referrer"  className="w-10 h-10 object-cover rounded-full"/>
              <div>
                <span className='block truncate max-w-[150px]'>{user.name}</span>
                <span className='block truncate max-w-[150px] text-gray-400 text-xs'>{user.email}</span>
              </div>
            </div>
          )
          }
        </nav>
      </div>
    </aside>
  );
}