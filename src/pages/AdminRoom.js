import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Chat } from '../components/Chat/Chat';
import { Header } from '../components/Header';
import Login from '../components/Login';
import { Sidebar } from '../components/Sidebar';
import Spinner from '../components/Spinner';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';


export function AdminRoom () {
  const [room, setRoom] = useState({});
  const {pathname} = useLocation();
  const { user } = useAuth();
  const chatMessagesRef = useRef(null);

  // Scroll to last message
  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight
    }
  }, []);

  // get Room Data
  useEffect(() => {
    const roomId = pathname.split('/')[3];

    const FetchRoomData = async () => {
      const roomRef = await database.ref(`rooms/${roomId}`).get();
      setRoom(roomRef.val())
    } 

    FetchRoomData();
  }, [])

  return user && room ? (
    <div className="max-w-[358px] md:max-w-[628px] lg:max-w-[1276px] xl:max-w-[1600px] lg:container mx-auto px-4 pt-2 h-[100vh] bg-white rounded-t-none rounded-b-2xl">
      <div className="hidden lg:block h-full w-full">
        <Sidebar />
      </div>
      <div>
        
      <Header />

        <main className='mt-5 md:mt-8 lg:pl-6 lg:mt-4 lg:pr-[58px]'>
         <Chat chatMessagesRef={chatMessagesRef} user={user} roomId={pathname} room={room}/>
        </main>
      </div>
    </div>
  ) : room ? (
    <Spinner />    
  ) : (
    <Login />
  )
}