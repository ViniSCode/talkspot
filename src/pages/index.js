import { useState } from 'react';
import { BsGoogle } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';
export function  Home () {
  const navigate = useNavigate();
  const {user, handleSignInWithGoogle} = useAuth();
  const {handleSetRoomId} = useRoom()
  const [roomCode, setRoomCode] = useState('');

  async function handleSignIn () {
    if (!user) {
      await handleSignInWithGoogle();
    }
  };

  async function handleCreateRoom  () {
    if (!user) {
      await handleSignInWithGoogle();
    } else {
      navigate('/create');
    }
  };

  async function handleSubmit (event)  {
    event.preventDefault();

    if (!user) {
      toast.warn('You must be logged in to access this page')
      await handleSignInWithGoogle();
    }

    if (roomCode.trim())  {
      handleSetRoomId(roomCode);
      navigate(`rooms/${roomCode}`)
    }
    
  }

  return (
    <div className="max-w-[1276px] mx-auto p-4 flex items-center justify-center">
      <div className="h-centered w-full px-4">
        <div className="max-w-[358px] lg:max-w-[530px] mx-auto px-8 py-12 lg:px-16 lg:py-20 bg-white lg:bg-gray-200 rounded-2xl">
          <h1 className='text-center text-4xl font-medium'>Talk<span className='text-blue-500'>Spot</span></h1>
          <div className="flex flex-col items-center gap-8 mt-[72px]">
            { !user ? (
              <button 
                onClick={handleSignIn}
                className='flex items-center justify-center font-semibold text-sm gap-2 lg:text-[17px] lg:gap-4 text-white bg-red-500 px-4 py-4 rounded-lg transition-colors hover:bg-red-600  w-full'
              >
                <BsGoogle className="text-white w-4 h-4 lg:w-5 lg:h-5" />
                Crie sua sala
              </button>
            ) : (
              <button 
                onClick={handleCreateRoom}
                className='flex items-center justify-center font-semibold text-sm gap-2 lg:text-[17px] lg:gap-4 text-white bg-red-500 px-4 py-4 rounded-lg transition-colors hover:bg-red-600  w-full'
              >
                <FiLogOut className="text-white w-4 h-4 lg:w-5 lg:h-5" />
                Criar uma sala
              </button>
            ) }

          <form onSubmit={handleSubmit} className='w-full'>
            <div className="flex items-center gap-2 w-full justify-center mb-4">
              <div className="w-8 lg:w-16 h-[1px] bg-gray-400"></div>
              <span className='block text-gray-400 text-xs lg:text-base font-medium text-center'>Ou entre em uma sala</span>
              <div className="w-8 lg:w-16 h-[1px] bg-gray-400"></div>
            </div>

            <div className='w-full flex flex-col items-center justify-center gap-4'>
              <div className='w-full'>
                <label htmlFor="code"></label>
                <input 
                  onChange={(e) => setRoomCode(e.target.value)}
                  value={roomCode}
                  type="text" 
                  id="roomCode" 
                  name="roomCode" 
                  placeholder="Digite o código da sala" 
                  className="px-4 py-4 rounded-lg border border-gray-500 text-gray-500 placeholder:text-gray-500 w-full placeholder:text-sm lg:placeholder:text-base" />
              </div>
              <button 
                type='submit'
                className='flex items-center justify-center font-semibold text-sm gap-2 lg:text-[17px] lg:gap-4 text-white bg-blue-500 px-4 py-4 rounded-lg transition-colors hover:bg-blue-600  w-full'
              >
                <BsGoogle className="text-white w-4 h-4 lg:w-5 lg:h-5" />
                Entrar na sala
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}