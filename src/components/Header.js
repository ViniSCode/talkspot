import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FiCopy, FiUserPlus } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Menu } from './Menu/Menu';
import { MobileMenuItems } from './Menu/MobileMenuItems';
export function Header() {
  const [modalShareActive, setModalShareActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {pathname} = useLocation();

  const sidebarVariants = {
    open: {
      x: '0%',
      transition: {
        type: 'linear',
        stiffness: 300,
        damping: 20
      }
    },
    closed: {
      x: '100%',
      transition: {
        type: 'linear',
        stiffness: 300,
        damping: 20
      }
    }
  };

  function handleCopyRoomCode () {
    const copy = pathname.split('/')[3];
    navigator.clipboard.writeText(copy);
    toast.success('Copied to the clipboard');
  };

  return (
    <header className="flex items-center justify-between lg:justify-end border-b pb-6 lg:pb-3">
      <Link to='/'>
        <span className='lg:hidden block text-[30px] font-medium'>Talk<span className='text-blue-500'>Spot</span></span>
      </Link>
      <div className='flex item-center gap-4 relative'>
        <button className='bg-blue-500 text-white rounded-lg px-2 py-2 lg:mr-[58px]' onClick={() => setModalShareActive(!modalShareActive)}>
          <FiUserPlus size={18}/>
        </button>
          {modalShareActive && (
            <motion.div 
              onClick={handleCopyRoomCode}
              transition={{type: 'spring', stiffness: 300, damping: 24}} 
              initial={{opacity: 0}}
              exit={{opacity: 0}}
              animate={{opacity: 1, y: 0}} 
              className='absolute modal-shadow top-12 right-10 lg:right-[58px] p-4 bg-white h-20 w-fit lg:w-fit whitespace-nowrap rounded-tl-2xl rounded-b-2xl flex justify-center items-center'
            >
              <span className='flex items-center gap-2 text-black border-2 border-blue-500 rounded-[10px] pr-2 cursor-pointer text-sm lg:text-base'>
                <span className='bg-blue-500 p-2 rounded-lg'>
                  <FiCopy size={22} className="text-white"/>
                </span>
                {pathname && pathname.split('/')[3]}
              </span>
            </motion.div>
          )}
        <div className='lg:hidden flex items-center justify-center'>
          <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            <motion.div variants={sidebarVariants} initial="closed" animate={isMenuOpen ? 'open' : 'closed'} className="fixed inset-0 h-full w-full z-20 bg-blue-500">
              <MobileMenuItems isMenuOpen={isMenuOpen} />
            </motion.div>
        </div>
      </div>
    </header>
  )
}
