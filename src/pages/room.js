import { FiUsers } from 'react-icons/fi';
import { Menu } from '../components/Menu';

export function Room () {

  return (
    <div className="max-w-[358px] lg:max-w-[1276px] mx-auto p-4 bg-white  rounded-2xl mt-4">
      <header className="flex items-center justify-between border-b pb-8">
        <span className='block text-[32px] font-medium'>Talk<span className='text-blue-500'>Spot</span></span>
        <div className='flex item-center gap-4'>
          <button className='bg-blue-500 text-white rounded-lg px-4 py-3'>
            <FiUsers size={22}/>
          </button>
          <div className='flex items-center justify-center'>
            <Menu />
          </div>
        </div>
      </header>

      <main className='mt-10'>
        <section>
          <div className='flex gap-3'>
            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room image"  className="w-10 h-10 object-cover rounded-full"/>
            <div>
              <span className='block'>Lorem's Room</span>
              <span className='block text-gray-400 text-xs'>loremipsum@gmail.com</span>
            </div>
          </div>

          <div className='px-4 py-10 bg-gray-200 mt-10 rounded-2xl flex flex-col gap-4 max-h-[50vh] overflow-y-scroll scrollbar-none'>
              <div className='flex flex-col gap-4'>
                
                <div>
                  <div  className='flex items-center gap-3'>
                    <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room avatar"  className="w-9 h-9 object-cover rounded-full"/>
                    <span className='block'>Lorem's Room</span>
                  </div>
                  <div className='ml-[52px] flex flex-col gap-2 text-xs mt-3'>
                    <p className='bg-white balloon p-4 w-fit'>Lorem Ipsum Testing </p>
                    <p className='bg-white balloon p-4 w-fit'>Lorem</p>
                    <p className='bg-white balloon p-4 w-fit'>Lorem Ipsum Testing</p>
                  </div>
                </div>

                  <div className='flex flex-col items-end'>
                    <div  className='flex items-center gap-3'>
                      <span className='block'>You</span>
                      <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room avatar"  className="w-9 h-9 object-cover rounded-full"/>
                    </div>
                    <div className='flex flex-col gap-2 text-xs mt-3 mr-[52px] text-white'>
                      <p className='bg-blue-500 balloon-user p-4 w-fit'>Lorem Ipsum Testing </p>
                      <p className='bg-blue-500 balloon-user p-4 w-fit'>Lorem</p>
                      <p className='bg-blue-500 balloon-user p-4 w-fit'>Lorem Ipsum Testing</p>
                    </div>
                  </div>

                  <div className='flex flex-col items-end'>
                    <div  className='flex items-center gap-3'>
                      <span className='block'>You</span>
                      <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room avatar"  className="w-9 h-9 object-cover rounded-full"/>
                    </div>
                    <div className='flex flex-col gap-2 text-xs mt-3 mr-[52px] text-white'>
                      <p className='bg-blue-500 balloon-user p-4 w-fit'>Lorem Ipsum Testing </p>
                      <p className='bg-blue-500 balloon-user p-4 w-fit'>Lorem</p>
                      <p className='bg-blue-500 balloon-user p-4 w-fit'>Lorem Ipsum Testing</p>
                    </div>
                  </div>

                  <div>
                    <div  className='flex items-center gap-3'>
                      <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room avatar"  className="w-9 h-9 object-cover rounded-full"/>
                      <span className='block'>Lorem's Room</span>
                    </div>
                    <div className='ml-[52px] flex flex-col gap-2 text-xs mt-3'>
                      <p className='bg-white balloon p-4 w-fit'>Lorem Ipsum Testing</p>
                      <p className='bg-white balloon p-4 w-fit'>Lorem</p>
                      <p className='bg-white balloon p-4 w-fit'>Lorem Ipsum Testing</p>
                    </div>
                </div>
              </div>
          </div>
        </section>
      </main>
    </div>
  )
}