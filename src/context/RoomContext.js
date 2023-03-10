import { createContext, useEffect, useState } from "react";

export const RoomContext = createContext({});

export function RoomProvider (props) {
  const [roomId, setRoomId] = useState(null);

  useEffect(() => {
    const savedRoomId = localStorage.getItem('roomId');
    if (savedRoomId) {
      setRoomId(savedRoomId);
    }
  }, []);

  function handleSetRoomId(id) {
    setRoomId(id);
  }

  useEffect(() => {
     if (roomId) {
       localStorage.setItem('roomId', roomId);
     }
  }, [roomId]);

  return (
    <RoomContext.Provider value={{ handleSetRoomId, roomId }}>
      {props.children}
    </RoomContext.Provider>
  );
}
