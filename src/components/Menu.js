import { motion } from 'framer-motion';
import React, { useState } from 'react';

export function Menu () {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className='cursor-pointer'>
        <motion.span
          animate={isOpen ? { rotate: 45, y: 6} : { rotate: 0 }}
          className="block rounded-lg w-6 h-[4px] bg-blue-500 transition-all duration-200"
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="block rounded-lg w-6 h-[4px] bg-blue-500 transition-all duration-200 mt-1"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -10} : { rotate: 0 }}
          className="block rounded-lg w-6 h-[4px] bg-blue-500 transition-all duration-200 mt-1"
        />
      </div>
    </div>
  );
};
