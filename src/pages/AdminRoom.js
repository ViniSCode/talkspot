import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Chat } from '../components/Chat/Chat';
import { Header } from '../components/Header';
import { AdminSidebar } from '../components/Sidebar/AdminSidebar';
import { Skeleton } from '../components/Skeleton';
import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';


export function AdminRoom () {
  const [isAdmin, setIsAdmin] =  useState(false)
  const [room, setRoom] = useState({});
  const { user } = useAuth();
  const chatMessagesRef = useRef(null);
  const {handleSetRoomId, roomId } = useRoom();
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname.split('/')[1] === 'admin') {
      handleSetRoomId(window.location.pathname.split('/')[3])
    }
  }, [])

  useEffect(() => {
    if (roomId && user) {
      async function  FetchRoomInfo () {
        const roomRef = await database.ref(`rooms/${roomId}`).get();
        const roomInfo = roomRef.val();

        if (roomInfo) {
          const adm = roomInfo.author.email === user.email;
          
          if (adm === true) {
            setIsAdmin(true);
          }
  
          if (!adm) {
            navigate(`/rooms/${roomId}`);
          } 
        }
      } 
    
      const roomData = FetchRoomInfo();
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

  
  
  return user && room &&  isAdmin ? (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, y: 0}} transition={{duration: 0.4, }} className="max-w-[358px] md:max-w-[628px] lg:max-w-[1276px] xl:max-w-[1600px] lg:container mx-auto px-4 pt-2 h-[100vh] bg-white rounded-t-none rounded-b-2xl">
      <div className="hidden lg:block h-full w-full">
        <AdminSidebar />
      </div>
      <div>
        
      <Header />

        <main className='mt-5 md:mt-8 lg:pl-6 lg:mt-4 lg:pr-[58px]'>
         <Chat chatMessagesRef={chatMessagesRef} user={user} roomId={roomId} room={room}/>
        </main>
      </div>
    </motion.div>
  ) : (
    <Skeleton />    
  ) 
}