import { useEffect, useState } from 'react';
import { useRoom } from '../../hooks/useRoom';
import { firebase } from '../../services/firebase';
import RoomInfo from '../Room/RoomInfo';
import MessageInput from './MessageInput';

// when user creates a room, or access an existent room (using an ID) the Chat Component will be displayed
// in the room, and when user post a message the message will be posted on the firebase DB
// list the messages from firebase inside the chat,
// the messages should update in real-time for every user in the room

export function Chat ({chatMessagesRef, user, room}) {
  const {roomId} = useRoom()  
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
      setMessages([...messages, {
        roomId: roomId,
        id: myId,
        user: {
          id: myId,
          isLastMessageFromTheSameUser: myId === messages[messages.length - 1].user.id,
          name: user.name,
          avatar: user.avatar
        },
        message: newMessage
      }])
  
      // Add the message to Firebase Realtime Database
      firebase.database().ref(`rooms/${roomId}/messages`).push({
        roomId: roomId,
        id: myId,
        user: {
          id: myId,
          isLastMessageFromTheSameUser: myId === messages[messages.length - 1].user.id,
          name: user.name,
          avatar: user.avatar
        },
        message: newMessage
      });
  
      setNewMessage('');
      scrollToLastMessage();
    } else if (newMessage.trim()) {
      setMessages([...messages, {
        roomId: roomId,
        id: myId,
        user: {
          id: myId,
          isLastMessageFromTheSameUser: false,
          name: user.name,
          avatar: user.avatar
        },
        message: newMessage
      }])
  
      // Add the message to Firebase Realtime Database
      firebase.database().ref(`rooms/${roomId}/messages`).push({
        roomId: roomId,
        id: myId,
        user: {
          id: myId,
          name: user.name,
          isLastMessageFromTheSameUser: false,
          avatar: user.avatar
        },
        message: newMessage
      });
  
      setNewMessage('');
      scrollToLastMessage();
    }
  }

  useEffect(() => {
    scrollToLastMessage();
  }, [messages, scrollToLastMessage]) 


  useEffect(() => {
    const messagesRef = firebase.database().ref(`rooms/${roomId}/messages`);
        
    messagesRef.on('value', snapshot => {
      if (snapshot.val()) {
        setMessages(Object.values(snapshot.val()))
      }
    });
  }, [roomId]);

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
                      <p className={`px-4 py-3 w-fit message max-w-[170px] md:max-w-[300px] break-words`}>{message.message}</p>
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
                      <p className={`px-4 py-3 w-fit message max-w-[170px] md:max-w-[300px] break-words`}>{message.message}</p>
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
