import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import Loading from '../components/Loading';
import { AdminSidebar } from '../components/Sidebar/AdminSidebar';
import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';

export function DeleteRoom () {
  const {user} = useAuth();
  const {handleSetRoomId, roomId} = useRoom();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] =  useState(false)
  
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



  return user && isAdmin ? (
    <div className="max-w-[358px] md:max-w-[628px] lg:max-w-[1276px] xl:max-w-[1600px] lg:container mx-auto px-4 pt-2 h-[100vh] bg-white rounded-t-none rounded-b-2xl">
      <div className="hidden lg:block h-full w-full">
        <AdminSidebar />
      </div>
      <div>
        
      <Header />

        <main className='mt-5 md:mt-8 max-w-full md:max-w-[480px] md:mx-auto lg:max-w-full lg:mt-4 lg:pr-[58px] lg:pl-12'>
          <h3 className='text-2xl mt-12 font-medium'>Delete Room</h3>
          <div className='mt-8'>
            <span className='text-gray-500'>Room Information</span>
            <div className='flex items-center flex-col lg:flex-row gap-3 mt-4'>
              <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room avatar"  className="w-10 h-10  lg:w-14 lg:h-14 object-cover rounded-full"/>
              <span className='text-lg font-medium'>Room's Name</span>
            </div>
            <div className='mt-10 lg:mt-10 lg:max-w-xs'>
              <span className='block text-red-500 font-medium text-lg'>Are you sure you want to delete this room?</span>
              <span className='block text-gray-500 font-medium text-xs mt-2'>This action is permanent and cannot be undone.</span>
              <button className='mt-4 flex item-center justify-center gap-2 border-red-500 w-full lg:min-w-fit border px-2 py-2 rounded-lg  text-red-500 hover:text-white transition-colors hover:bg-red-500'>
                Delete
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  ) : (
    <Loading />
  )
}