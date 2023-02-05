import { useEffect, useRef } from 'react';
import { FiUserPlus } from 'react-icons/fi';
import { IoSend } from 'react-icons/io5';
import { Menu } from '../components/Menu';
import { Sidebar } from '../components/Sidebar';

export function Room () {
  const chatMessages = useRef(null);

  useEffect(() => {
    if (chatMessages.current) {
      chatMessages.current.scrollTop = chatMessages.current.scrollHeight
    }
  }, [])

  return (
    <div className="max-w-[358px] md:max-w-[628px] lg:max-w-[1276px] lg:container mx-auto px-4 pt-2 h-[100vh] bg-white rounded-t-none rounded-b-2xl">
      <div className="hidden lg:block h-full w-full">
        <Sidebar />
      </div>
      <div>
        <header className="flex items-center justify-between lg:justify-end border-b pb-6 lg:pb-3">
          <span className='lg:hidden block text-[30px] font-medium'>Talk<span className='text-blue-500'>Spot</span></span>
          <div className='flex item-center gap-4'>
            <button className='bg-blue-500 text-white rounded-lg px-2 py-2'>
              <FiUserPlus size={18}/>
            </button>
            <div className='lg:hidden flex items-center justify-center'>
              <Menu />
            </div>
          </div>
        </header>

        <main className='mt-5 md:mt-8 lg:pl-6 lg:mt-4'>
          <section>
            <div className='flex gap-3'>
              <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room avatar"  className="w-10 h-10  lg:w-9 lg:h-9 object-cover rounded-full"/>
              <div>
                <span className='block text-base lg:text-sm'>Lorem's Room</span>
                <span className='block text-gray-400 text-xs'>loremipsum@gmail.com</span>
              </div>
            </div>

            <div className='px-4 py-10 lg:px-10 lg:py-10 bg-gray-200 mt-5 md:mt-8 lg:mt-4 rounded-2xl flex flex-col gap-4 vh-height overflow-y-scroll scrollbar-none' ref={chatMessages}>
                <div className='flex flex-col gap-4'> 
                  <div>
                    <div  className='flex items-center gap-3'>
                      <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room avatar"  className="w-9 h-9 object-cover rounded-full"/>
                      <span className='block'>Lorem's Room</span>
                    </div>
                    <div className='ml-[52px] flex flex-col gap-2 text-xs mt-2'>
                      <p className='bg-white balloon px-4 py-3 w-fit message'>Lorem Ipsum Testing </p>
                      <p className='bg-white balloon px-4 py-3 w-fit message'>Lorem</p>
                      <p className='bg-white balloon px-4 py-3 w-fit message'>Lorem Ipsum Testing</p>
                    </div>
                  </div>

                    <div className='flex flex-col items-end'>
                      <div  className='flex items-center gap-3'>
                        <span className='block'>You</span>
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room avatar"  className="w-9 h-9 object-cover rounded-full"/>
                      </div>
                      <div className='flex flex-col gap-2 text-xs mt-2 mr-[52px] text-white'>
                        <p className='bg-blue-500 balloon-user px-4 py-3 w-fit message'>Lorem Ipsum Testing </p>
                        <p className='bg-blue-500 balloon-user px-4 py-3 w-fit message'>Lorem</p>
                        <p className='bg-blue-500 balloon-user px-4 py-3 w-fit message'>Lorem Ipsum Testing</p>
                      </div>
                    </div>

                    <div className='flex flex-col items-end'>
                      <div  className='flex items-center gap-3'>
                        <span className='block'>You</span>
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room avatar"  className="w-9 h-9 object-cover rounded-full"/>
                      </div>
                      <div className='flex flex-col gap-2 text-xs mt-2 mr-[52px] text-white'>
                        <p className='bg-blue-500 balloon-user px-4 py-3 w-fit message'>Lorem Ipsum Testing </p>
                        <p className='bg-blue-500 balloon-user px-4 py-3 w-fit message'>Lorem</p>
                        <p className='bg-blue-500 balloon-user px-4 py-3 w-fit message'>Lorem Ipsum Testing</p>
                      </div>
                    </div>

                </div>
                    <div>
                      <div  className='flex items-center gap-3'>
                        <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room avatar"  className="w-9 h-9 object-cover rounded-full"/>
                        <span className='block'>Lorem's Room</span>
                      </div>
                      <div className='ml-[52px] flex flex-col gap-2 text-xs mt-2'>
                        <p className='bg-white balloon p-4 w-fit message'>Lorem Ipsum Testing</p>
                        <p className='bg-white balloon p-4 w-fit message'>Lorem</p>
                        <p className='bg-white balloon p-4 w-fit message'>Lorem Ipsum Testing</p>
                      </div>
                    </div>
            </div>

            <div className='mt-8 relative'>
              <label htmlFor="chat"></label>
              <IoSend className='text-gray-400 absolute right-5 top-5 cursor-pointer' />
              <input type="text" id='chat' name='chat' placeholder="Digite uma mensagem" className='w-full bg-gray-200 rounded-full px-4 py-4 placeholder:text-xs lg:placeholder:text-base pl-12' />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}