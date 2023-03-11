import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { MdOutlineCreate } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { v4 } from 'uuid';
import ImageUpload from '../components/ImageUpload';
import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';
import { database, storage } from '../services/firebase';

export function  CreateRoom () {
  const {handleSetRoomId} = useRoom()
  const [roomName, setRoomName] = useState("");
  const [roomImage, setRoomImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const {user} = useAuth();
  
  async function getImageURL() {
    try {
      const imageRef = ref(storage, `images/${roomImage.name + v4()}`)
      await uploadBytes(imageRef, roomImage);
      const imageURL = await getDownloadURL(imageRef);
      console.error(imageURL);

      return imageURL;
    } catch (error) {
      console.error(error);
    }
  }

  async function handleCreateRoom () {    
    
    if (roomName.trim() === '' || roomImage === null || !user) {
      toast.warning('Please complete all required fields before creating the room')
      return;
    }
    
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    
    const image = await getImageURL()
  
    if (!image) {
      toast.error("Image format not supported")
      return;
    }

    const roomRef = database.ref('rooms');
    const firebaseRoom = await roomRef.push({
      name: roomName,
      author: {
        email: user.email,
        name: user.name
      },
      image: image
    });

    toast.success("Room Created");
    handleSetRoomId(firebaseRoom.key);
    navigate(`/admin/rooms/${firebaseRoom.key}`)
  }

  
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, y: 0}} transition={{duration: 0.4, }} className="max-w-[1276px] mx-auto p-4 flex items-center justify-center">
      <div className="h-centered w-full px-4">
        <div className="max-w-[358px] lg:max-w-[480px] xl:max-w-[530px] mx-auto px-2 py-12 lg:px-16 lg:py-14 bg-white rounded-2xl">
          <h1 className='text-center text-4xl font-medium'>Crie uma <span className='text-blue-500'>Sala</span></h1>
          <div className="flex flex-col items-center gap-8 mt-[72px] lg:mt-10 xl:mt-[72px]">
            <div className='w-full flex flex-col items-center justify-center gap-6 lg:gap-4 xl:gap-6'>
              <div className='w-full'>
                <label htmlFor="name" className='font-medium'>Room Name</label>
                <input 
                  onChange={(e) => setRoomName(e.target.value)}
                  type="text" 
                  id="name" name="name" 
                  placeholder="Digite o nome da sala" 
                  className="px-4 py-4 rounded-lg border border-gray-500 text-gray-500 placeholder:text-gray-500 w-full placeholder:text-sm lg:placeholder:text-base" />
              </div>
              <ImageUpload setRoomImage={setRoomImage} roomImage={roomImage}/>
              <div className='w-full flex flex-col gap-4 items-center'>
              {isLoading ? (
                  <button className='cursor-default flex items-center justify-center border-blue-500 w-full lg:min-w-fit border px-3 py-[18px] rounded-lg bg-blue-500'>
                    <PulseLoader color="#FFFFFF" size={10}/>
                  </button>
                ) : (
                  <button 
                    type='submit'
                    className='flex items-center justify-center font-semibold text-sm gap-2 lg:text-[17px] lg:gap-4 text-white bg-blue-500 px-4 py-4 rounded-lg transition-colors hover:bg-blue-600  w-full'
                    onClick={handleCreateRoom}
                  >
                    <MdOutlineCreate className="text-white w-4 h-4 lg:w-5 lg:h-5" />
                    Criar sala
                  </button>
                )}

                <Link to="/" 
                  className='flex items-center justify-center font-semibold text-sm gap-2 lg:text-[17px] lg:gap-4 text-white bg-gray-500 px-4 py-4 rounded-lg transition-colors hover:bg-gray-600  w-full'
                >
                  <FiArrowLeft className="text-white w-4 h-4 lg:w-5 lg:h-5" />
                  Voltar
                </Link>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}