import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { HeaderAdmin } from '../components/AdminHeader';
import Loading from '../components/Loading';
import { AdminSidebar } from '../components/Sidebar/AdminSidebar';
import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';

export function DeleteRoom () {
  const [deleteRoomModalOpen, setDeleteRoomModalOpen] = useState(false);
  const [room, setRoom] = useState({});
  const { roomId, handleSetRoomId} = useRoom();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] =  useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
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
    
      const roomData = FetchRoomInfo();
    }
  }, [user]);

  async function handleDeleteRoom () {
    if (isLoading) {
      return;
    }

    setIsLoading(true);

    const roomRef = await database.ref(`rooms/${roomId}`).get();
    const roomInfo = roomRef.val();

    if (roomInfo) {
      if (roomInfo.author.email === user.email) {
        roomRef.ref.remove()
        .then(() => {
          toast.success('Room deleted successfully!');
        })
        .catch((error) => {
          toast.error('Error deleting room:', error);
        });
      } else {
        toast.error('You are not authorized to delete this room.');
      }
    }

    navigate('/')
  }

  return user && isAdmin && room && roomId ? (
    <div className="max-w-[358px] md:max-w-[628px] lg:max-w-[1276px] xl:max-w-[1600px] lg:container mx-auto px-4 pt-2 h-[100vh] bg-white rounded-t-none rounded-b-2xl">
      <div className="hidden lg:block h-full w-full">
        <AdminSidebar />
      </div>
      <div>
        
      <HeaderAdmin />

        <main className='mt-5 md:mt-8 max-w-full md:max-w-[480px] md:mx-auto lg:max-w-full lg:mt-4 lg:pr-[58px] lg:pl-12'>
          <h3 className='text-2xl mt-12 font-medium'>Delete {room.name}</h3>
          <div className='mt-8'>
            <span className='text-gray-500'>Room Information</span>
            <div className='flex items-center flex-col lg:flex-row gap-3 mt-4'>
              <img src={room.image} referrerPolicy="no-referrer" alt="room avatar"  className="w-10 h-10  lg:w-14 lg:h-14 object-cover rounded-full"/>
              <span className='text-lg font-medium'>{room.name}</span>
            </div>
            <div className='mt-10 lg:mt-10 lg:max-w-xs'>
              <span className='block text-red-500 font-medium text-lg'>Are you sure you want to delete this room?</span>
              <span className='block text-gray-500 font-medium text-xs mt-2'>This action is permanent and cannot be undone.</span>
              <button 
                className='mt-4 flex item-center justify-center gap-2 border-red-500 w-full lg:min-w-fit border px-2 py-2 rounded-lg  text-red-500 hover:text-white transition-colors hover:bg-red-500'
                onClick={() => setDeleteRoomModalOpen(true)}
              >
                Delete
              </button>

              {
                deleteRoomModalOpen && (
                <motion.div initial={{opacity: 0}} animate={{opacity: 1, y: 0}} exit={{opacity: 0}} className="fixed inset-0 bg-black bg-opacity-60 z-50 w-full h-full flex items-center justify-center">
                  <motion.div initial={{opacity: 0, y: '100px'}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: '100px'}} className="w-full h-full max-w-[300px] lg:max-w-[420px] max-h-[300px] bg-white flex items-center justify-center px-8 py-4 flex-col rounded-2xl gap-2">
                    <h1>Are  you sure you want to Delete <strong>{room.name}</strong>?</h1>
                    <div className="w-full">
                      {isLoading ? (
                        <button className='mt-4 cursor-default flex items-center justify-center border-red-500 w-full lg:min-w-fit border px-3 py-[13px] rounded-lg bg-red-500'>
                          <PulseLoader color="#FFFFFF" size={10}/>
                        </button>
                      ) : (
                        <button 
                          className='mt-4 flex item-center justify-center gap-2 border-red-500 w-full lg:min-w-fit border px-2 py-2 rounded-lg  text-red-500 hover:text-white transition-colors hover:bg-red-500'
                          onClick={handleDeleteRoom}
                        >
                          Delete
                        </button>
                      )}
                      <button 
                          className='mt-2 flex item-center justify-center gap-2 border-gray-500 w-full lg:min-w-fit border px-2 py-2 rounded-lg  text-gray-500 hover:text-white transition-colors hover:bg-gray-500'
                          onClick={() => setDeleteRoomModalOpen(false)}
                        >
                        Cancel
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
                )
              }
            </div>
          </div>
        </main>
      </div>
    </div>
  ) : (
    <Loading />
  )
}