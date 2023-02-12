import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Chat } from '../components/Chat/Chat';
import { Header } from '../components/Header';
import Login from '../components/Login';
import { Sidebar } from '../components/Sidebar';
import Spinner from '../components/Spinner';
import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';

export function Room () {
  const [room, setRoom] = useState({});
  const { user } = useAuth();
  const chatMessagesRef = useRef(null);
  const {handleSetRoomId, roomId } = useRoom();
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname.split('/')[1] === 'rooms') {
      handleSetRoomId(window.location.pathname.split('/')[2])
    }
  }, [])
  
  useEffect(() => {
    if (roomId && user) {
      async function  FetchRoomInfo () {
        const roomRef = await database.ref(`rooms/${roomId}`).get();
        const roomInfo = roomRef.val();
        const adm = roomInfo?.author.email === user.email ? true : false;
        if (adm === true) {
          navigate(`/admin/rooms/${roomId}`);
        }
      } 
    
      FetchRoomInfo();
    }
  }, [user]);

  // Scroll to last message
  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight
    }
  }, []);

  // get Room Data
  useEffect(() => {
    const FetchRoomData = async () => {
      const roomRef = await database.ref(`rooms/${roomId}`).get();
      setRoom(roomRef.val())
    } 

    FetchRoomData();
  }, [roomId])
  
  return user && room && roomId  ? (
    <div className="max-w-[358px] md:max-w-[628px] lg:max-w-[1276px] xl:max-w-[1600px] lg:container mx-auto px-4 pt-2 h-[100vh] bg-white rounded-t-none rounded-b-2xl">
      <div className="hidden lg:block h-full w-full">
        <Sidebar />
      </div>
      <div>
        
      <Header />

        <main className='mt-5 md:mt-8 lg:pl-6 lg:mt-4 lg:pr-[58px]'>
         <Chat chatMessagesRef={chatMessagesRef} user={user} roomId={roomId} room={room}/>
        </main>
      </div>
    </div>
  ) : !user && roomId ? (
    <Login roomId={roomId}/>
  ): !room && (
    <Spinner />    
  ) 
}