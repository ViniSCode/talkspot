import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FiCopy, FiUserPlus } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import { Menu } from '../components/Menu';

export function Header() {
  const [modalShareActive, setModalShareActive] = useState(false);
  const {pathname} = useLocation();

  return (
    <header className="flex items-center justify-between lg:justify-end border-b pb-6 lg:pb-3">
      <span className='lg:hidden block text-[30px] font-medium'>Talk<span className='text-blue-500'>Spot</span></span>
      <div className='flex item-center gap-4 relative'>
        <button className='bg-blue-500 text-white rounded-lg px-2 py-2 lg:mr-[58px]' onClick={() => setModalShareActive(!modalShareActive)}>
          <FiUserPlus size={18}/>
        </button>
        <motion.div 
          transition={{type: 'spring', stiffness: 300, damping: 24}} 
          initial={{opacity: 0}}
          exit={{opacity: 0}}
          animate={modalShareActive ? {opacity: 1, y: 0} : {opacity: 0, y: 20}} 
          className='absolute modal-shadow top-12 right-[58px] bg-white h-20 w-64 rounded-2xl flex justify-center items-center'>
          <span className='flex items-center gap-2 text-black border-2 border-blue-500 rounded-[10px] pr-2 cursor-pointer'>
            <span className='bg-blue-500 p-2 rounded-lg'>
              <FiCopy size={22} className="text-white"/>
            </span>
            -NNYTznfzfxuT241f06N
          </span>
        </motion.div>
        <div className='lg:hidden flex items-center justify-center'>
          <Menu />
        </div>
      </div>
    </header>
  )
}