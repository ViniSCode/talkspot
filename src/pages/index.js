import { BsGoogle } from 'react-icons/bs';
export function  Home () {

  return (
    <div className="max-w-[1276px] mx-auto p-4 flex items-center justify-center">
      <div className="h-centered w-full px-4">
        <div className="max-w-[358px] lg:max-w-[530px] mx-auto px-8 py-12 lg:px-16 lg:py-20 bg-white rounded-2xl">
          <h1 className='text-center text-4xl font-medium'>Talk<span className='text-blue-500'>Spot</span></h1>
          <div className="flex flex-col items-center gap-8 mt-[72px]">
            <button className='flex items-center justify-center font-semibold text-sm gap-2 lg:text-[17px] lg:gap-4 text-white bg-red-500 px-4 py-4 rounded-lg transition-colors hover:bg-red-600  w-full'>
              <BsGoogle className="text-white w-4 h-4 lg:w-5 lg:h-5" />
              Crie sua sala
            </button>

            <div className="flex items-center gap-2">
              <div className="w-8 lg:w-16 h-[1px] bg-gray-400"></div>
              <span className='block text-gray-400 text-xs lg:text-base font-medium'>Ou entre em uma sala</span>
              <div className="w-8 lg:w-16 h-[1px] bg-gray-400"></div>
            </div>

            <div className='w-full flex flex-col items-center justify-center gap-4'>
              <div className='w-full'>
                <label htmlFor="code"></label>
                <input type="text" id="roomCode" name="roomCode" placeholder="Digite o código da sala" className="px-4 py-4 rounded-lg border border-gray-500 text-gray-500 placeholder:text-gray-500 w-full placeholder:text-sm lg:placeholder:text-base" />
              </div>
              <a href="/room" className='text-center font-semibold text-[17px] text-white bg-blue-500 px-4 py-4 rounded-lg transition-colors hover:bg-blue-600  w-full'>
                Entrar na sala
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}