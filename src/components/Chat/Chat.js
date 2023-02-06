import RoomInfo from '../Room/RoomInfo';
import MessageInput from './MessageInput';


export function Chat ({chatMessagesRef}) {

  return (
    <section>
     <RoomInfo />

      <div className='px-4 py-10 lg:px-10 lg:py-10 bg-gray-200 mt-5 md:mt-8 lg:mt-4 rounded-2xl flex flex-col gap-4 vh-height overflow-y-scroll scrollbar-none' ref={chatMessagesRef}>
          <div className='flex flex-col gap-4'> 
            <div>
              <div className='flex items-center gap-3'>
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

      <MessageInput />
    </section>
  )
}