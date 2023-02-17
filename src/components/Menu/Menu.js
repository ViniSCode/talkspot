import { motion } from 'framer-motion';
import React from 'react';

export function Menu ({isMenuOpen, setIsMenuOpen}) {
  return (
    <div 
      className="relative inline-block z-40"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <div className='cursor-pointer'>
        <motion.span
          animate={isMenuOpen ? { rotate: 45, y: 6, backgroundColor: '#FFFFFF'} : { rotate: 0 }}
          className="block rounded-lg w-6 h-[4px] bg-blue-500 transition-all duration-200"
        />
        <motion.span
          animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
          className="block rounded-lg w-6 h-[4px] bg-blue-500 transition-all duration-200 mt-1"
        />
        <motion.span
          animate={isMenuOpen ? { rotate: -45, y: -10, backgroundColor: '#FFFFFF'} : { rotate: 0 }}
          className="block rounded-lg w-6 h-[4px] bg-blue-500 transition-all duration-200 mt-1"
        />
      </div>
    </div>
  );
};
