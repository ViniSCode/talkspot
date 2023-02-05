import { FiLogOut, FiMessageSquare, FiSettings, FiUsers, FiXCircle } from "react-icons/fi";
import { useLocation } from "react-router-dom";

export function Sidebar () {
  const {pathname} = useLocation();

  return (
    <aside className="hidden lg:block vh-height-border">
      <span className='pl-[62px] text-[22px] font-medium'>Talk<span className='text-blue-500'>Spot</span></span>
      <div className='mt-[13px] border-r border-t h-full'>
        <nav className="flex flex-col h-full justify-between pb-6">
          <ul className='pl-[62px] flex flex-col gap-8 mt-10'>
            <li className={`rounded-lg px-2 py-2 w-[200px] ${pathname === '/room' ? 'liActive' : 'li'}`}>
              <a href="" className='flex items-center gap-4 font-medium'>
                <FiMessageSquare size={22} className="svg"/>
                Messages
              </a>
            </li>
            <li className={`rounded-lg px-2 py-2 w-[200px] ${pathname === '/users' ? 'liActive' : 'li'}`}>
              <a href="" className='flex items-center gap-4 font-medium'>
                <FiUsers size={22} className="svg"/>
                Users
              </a>
            </li>
            <li className={`rounded-lg px-2 py-2 w-[200px] ${pathname === '/settings' ? 'liActive' : 'li'}`}>
              <a href="" className='flex items-center gap-4 font-medium'>
                <FiSettings size={22} className="svg"/>
                Settings
              </a>
            </li>
            <li className={`rounded-lg px-2 py-2 w-[200px] ${pathname === '/logout' ? 'liActive' : 'li'}`}>
              <a href="" className='flex items-center gap-4 font-medium'>
                <FiLogOut size={22} className="svg"/>
                Logout
              </a>
            </li>
            <li className={`rounded-lg px-2 py-2 w-[200px] ${pathname === '/encerrar' ? 'liActive' : 'li'}`}>
              <a href="" className='flex items-center gap-4 font-medium'>
                <FiXCircle size={22} className="svg"/>
                Encerrar
              </a>
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