import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import Loading from '../components/Loading';
import { AdminSidebar } from '../components/Sidebar/AdminSidebar';
import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';

export function Settings () {
  const [room, setRoom] = useState({});
  const { roomId, handleSetRoomId} = useRoom();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] =  useState(false)
  
  // get Room Data
  useEffect(() => {
    const FetchRoomData = async () => {
      const roomRef = await database.ref(`rooms/${roomId}`).get();
      setRoom(roomRef.val())
    } 

    FetchRoomData();
  }, [roomId]);

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
    
      FetchRoomInfo();
    }
  }, [user]);

  

  return user && room && isAdmin && roomId ? (
    <div className="max-w-[358px] md:max-w-[628px] lg:max-w-[1276px] xl:max-w-[1600px] lg:container mx-auto px-4 pt-2 h-[100vh] bg-white rounded-t-none rounded-b-2xl">
      <div className="hidden lg:block h-full w-full">
        <AdminSidebar />
      </div>
      <div>
        
      <Header />

        <main className='mt-5 md:mt-8 max-w-full md:max-w-[480px] md:mx-auto lg:max-w-full lg:mt-4 lg:pr-[58px] lg:pl-12'>
          <h3 className='text-2xl mt-12 font-medium'>{room.name} Settings</h3>
          <div className='mt-8'>
            <span>Image</span>
            <div className='flex items-center flex-col lg:flex-row gap-3 mt-4'>
              <img src={room?.image} alt={room?.name} referrerPolicy="no-referrer"  className="w-10 h-10  lg:w-14 lg:h-14 object-cover rounded-full"/>
              <button className='border-blue-500 w-full lg:max-w-fit border px-2 py-2 rounded-lg text-blue-500 hover:text-white transition-colors hover:bg-blue-500'>Upload</button>
              <button className='border-blue-500 w-full lg:max-w-fit border px-2 py-2 rounded-lg text-blue-500 hover:text-white transition-colors hover:bg-blue-500'>Remove</button>
            </div>
            <div className='mt-10 lg:mt-4 lg:max-w-xs'>
              <span className='block'>Change Room name</span>
              <label htmlFor="roomName"></label>
              <input type="text" id='roomName' name='roomName'placeholder={room.name} className='mt-4 border py-2 px-2 rounded-lg border-gray-500 placeholder:text-gray-500 w-full'/>
              <button className='mt-4 border-blue-500 w-full lg:min-w-fit border px-2 py-2 rounded-lg  text-blue-500 hover:text-white transition-colors hover:bg-blue-500'>Save Settings</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  ) : (
    <Loading />
  )
}