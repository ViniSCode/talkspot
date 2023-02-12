import React from 'react';
import { BsGoogle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function Login({roomId}) {
  const {handleSignInWithGoogle} = useAuth();
  const navigate = useNavigate();
  
  async function handleSignIn () {
    await handleSignInWithGoogle();

    navigate(`/rooms/${roomId}`)
  }

  
  return (
    <div className="flex flex-col gap-8 items-center justify-center max-w-[600px] mx-auto absolute inset-0">
      <h2 className='items-center text-2xl'>Login is necessary to access this page.</h2>
      <button 
        onClick={handleSignIn}
        className='flex items-center max-w-[270px] mx-auto justify-center font-semibold text-sm gap-2 lg:text-[17px] lg:gap-4 text-white bg-blue-500 px-4 py-4 rounded-lg transition-colors hover:bg-blue-600  w-full'
      >
        <BsGoogle className="text-white w-4 h-4 lg:w-5 lg:h-5" />
        Login with google
      </button>
    </div>
  )
}

export default Login