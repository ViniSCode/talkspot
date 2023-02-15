import React from 'react';
import { HashLoader } from 'react-spinners';


function Loading() {
  return (
    <div className='flex items-center justify-center fixed z-[100] inset-0'>
      <HashLoader color="#3A35DF" size={50} />
    </div>
  )
}

export default Loading