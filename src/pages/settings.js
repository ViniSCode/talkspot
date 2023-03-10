import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { v4 } from 'uuid';
import { Header } from '../components/Header';
import Loading from '../components/Loading';
import { AdminSidebar } from '../components/Sidebar/AdminSidebar';
import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';
import { database, storage } from '../services/firebase';

export function Settings () {
  const [room, setRoom] = useState({});
  const { roomId, handleSetRoomId} = useRoom();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] =  useState(false)
  const [image, setImage] = useState(null);
  const [newRoomName, setNewRoomName] = useState("");

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  
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

  async function handleUpdateRoom () {
    if (!image || newRoomName.trim() === "" ) {
      toast.warning('Please complete all required fields before creating the room')
      return;
    } 
    const imageURL = await getImageURL()

    const roomRef = database.ref('rooms/' + roomId);
    await roomRef.update({ 
      name: newRoomName,
      image: imageURL
    })
    toast.success("Room updated successfully! Your changes have been saved.")
    window.location.reload();
  }

  async function getImageURL() {
    try {
      const imageRef = ref(storage, `images/${image.name + v4()}`)
      await uploadBytes(imageRef, image);
      const imageURL = await getDownloadURL(imageRef);
      console.error(imageURL);

      return imageURL;
    } catch (error) {
      console.error(error);
    }
  }

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
            <div className='flex items-center flex-col lg:flex-row gap-3 mt-4 lg:max-w-xs'>
            {image ? (
              <img src={URL.createObjectURL(image)} alt="Preview" className="w-20 h-20 lg:w-16 lg:h-16 rounded-full object-cover" />
            ) : (
              <img src={room?.image} alt={room?.name} referrerPolicy="no-referrer"  className="w-20 h-20 lg:w-16 lg:h-16 rounded-full object-cover"/>
            )}
              <input type="file" accept='image/*' onChange={handleImageChange}  placeholder="Upload image" className="px-2 py-2 rounded-lg border border-gray-500 w-full placeholder:text-sm lg:placeholder:text-base file:bg-blue-500 file:rounded-lg file:text-white file:border-none file:text-sm file:py-1 file:px-4 cursor-pointer file:cursor-pointer text-blue-500 font-medium" />
            </div>
            <div className='mt-10 lg:mt-4 lg:max-w-xs'>
              <span className='block'>Change Room name</span>
              <label htmlFor="roomName"></label>
              <input type="text" id='roomName' name='roomName'placeholder={room.name} value={newRoomName} className='mt-4 border py-2 px-2 rounded-lg border-gray-500 placeholder:text-gray-500 w-full' onChange={(e) => setNewRoomName(e.target.value)}/>
              <button className='mt-4 border-blue-500 w-full lg:min-w-fit border px-2 py-2 rounded-lg  text-blue-500 hover:text-white transition-colors hover:bg-blue-500' onClick={handleUpdateRoom}>Save Settings</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  ) : (
    <Loading />
  )
}