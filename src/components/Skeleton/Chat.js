import MessageInput from './Input';
import RoomInfo from './RoomInfo';

// when user creates a room, or access an existent room (using an ID) the Chat Component will be displayed
// in the room, and when user post a message the message will be posted on the firebase DB
// list the messages from firebase inside the chat,
// the messages should update in real-time for every user in the room

export function Chat () {
  return (
    <section>
     <RoomInfo />
     
      <div className='animate-pulse  px-8 py-10 lg:px-12 lg:py-10 bg-gray-200 mt-5 md:mt-8 lg:mt-4 rounded-2xl flex flex-col gap-4 vh-height overflow-y-scroll scrollbar-none'>
          <div className='flex flex-col gap-3'> 
            <div className='msg-other' >
              <div>
                <p className={`bg-blue-500 balloon-user px-4 py-3 w-full message max-w-[170px] md:max-w-[300px] break-words`}></p>
              </div>
            </div>
      
            <div className='msg-other'>
              <div>
                <p className={`balloon-user px-4 py-3 w-full message max-w-[170px] md:max-w-[300px] break-words`}></p>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-3'> 
            <div className='msg-mine-skeleton' >
              <div>
                <p className={`bg-blue-500 balloon-user px-4 py-3 w-full message max-w-[170px] md:max-w-[300px] break-words`}></p>
              </div>
            </div>
      
            <div className='msg-mine-skeleton'>
              <div>
                <p className={`balloon-user px-4 py-3 w-full message max-w-[170px] md:max-w-[300px] break-words`}></p>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-3'> 
            <div className='msg-mine-skeleton' >
              <div>
                <p className={`bg-blue-500 balloon-user px-4 py-3 w-full message max-w-[170px] md:max-w-[300px] break-words`}></p>
              </div>
            </div>
      
            <div className='msg-mine-skeleton'>
              <div>
                <p className={`balloon-user px-4 py-3 w-full message max-w-[170px] md:max-w-[300px] break-words`}></p>
              </div>
            </div>
          </div>
      </div>

      <MessageInput/>
    </section>
  )
}
