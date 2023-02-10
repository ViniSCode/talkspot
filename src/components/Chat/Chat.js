import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import RoomInfo from '../Room/RoomInfo';
import MessageInput from './MessageInput';


// here needs to connect user to the current room that they just created
// for example localhost:8080/rooms/-GNs1935uDN90808/ so anyone with the room code -GNs1935uDN90808, can access the chat
const socket = io('http://localhost:8080/', {
  transports: ['websocket']
});

export function Chat ({chatMessagesRef, user, room}) {
  
  socket.on('connect', () => console.log('[IO] Connect => New Connection'));
  const myId = user.email;
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  function scrollToLastMessage () {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight
    }
  }
  
  function handleCreateMessage () {  
    if (newMessage.trim() && messages.length > 0) {
      socket.emit('chat.message', { 
        id: myId,
        user: {
          id: myId,
          isLastMessageFromTheSameUser: myId === messages[messages.length - 1].user.id,
          name: user.name,
          avatar: user.avatar
        },
        message: newMessage
      })

      setNewMessage('');
      scrollToLastMessage();
    } else if (newMessage.trim()) {
        socket.emit('chat.message', { 
          id: myId,
          user: {
            id: myId,
            isLastMessageFromTheSameUser: myId === false,
            name: user.name,
            avatar: user.avatar
          },
          message: newMessage
        })

        setNewMessage('');
        scrollToLastMessage();
      }
  }
  
  useEffect(() => {
    function handleNewMessage (newMsg) {
      setMessages([...messages, newMsg]);
    }
    
    socket.on('chat.message', handleNewMessage);
    scrollToLastMessage();
    return () => socket.off('chat.message', handleNewMessage);
  }, [messages, scrollToLastMessage]) 

  return (
    <section>
     <RoomInfo room={room}/>
     
      <div className='px-8 py-10 lg:px-12 lg:py-10 bg-gray-200 mt-5 md:mt-8 lg:mt-4 rounded-2xl flex flex-col gap-4 vh-height overflow-y-scroll scrollbar-none' ref={chatMessagesRef}>
          <div className='flex flex-col gap-3'> 
            {
              messages.map((message, index) => {
                return message.user.isLastMessageFromTheSameUser ? (
                  <div className={`${message.user.id === myId ? 'msg-mine' : 'msg-other'}`} key={index}>
                    <div>
                      <p className={`bg-blue-500 balloon-user px-4 py-3 w-fit message max-w-[170px] md:max-w-[300px] break-words`}>{message.message}</p>
                    </div>
                  </div>
                ) : (

                  // ${message.id === myId}
                  <div className={`${message.user.id === myId ? 'msg-mine' : 'msg-other'} mt-8`} key={index}>
                    <div  className='flex items-center gap-3'>
                      <span className='block'>{message.user.id === myId ? 'You' : message.user.name}</span>
                      <img src={message.user.avatar} referrerPolicy="no-referrer" alt={message.user.name}  className="w-9 h-9 object-cover rounded-full"/>
                    </div>
                    <div>
                      <p className={`balloon-user px-4 py-3 w-fit message max-w-[170px] md:max-w-[300px] break-words`}>{message.message}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
      </div>

      <MessageInput handleCreateMessage={handleCreateMessage} setNewMessage={setNewMessage}/>
    </section>
  )
}


/*
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
  
  <div>
    <div className='flex items-center gap-3 mt-6'>
      <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room avatar"  className="w-9 h-9 object-cover rounded-full"/>
      <span className='block'>Lorem's Room</span>
    </div>
    <div className='ml-[52px] flex flex-col gap-2 text-xs mt-2'>
      <p className='bg-white balloon px-4 py-3 w-fit message'>Lorem Ipsum Testing </p>
      <p className='bg-white balloon px-4 py-3 w-fit message'>Lorem</p>
      <p className='bg-white balloon px-4 py-3 w-fit message'>Lorem Ipsum Testing</p>
    </div>
  </div>

    <div className='flex flex-col items-end mt-6'>
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
*/