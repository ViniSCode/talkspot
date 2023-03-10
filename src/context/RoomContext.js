import { createContext, useEffect, useState } from "react";

export const RoomContext = createContext({});

export function RoomProvider (props) {
  const [roomId, setRoomId] = useState(null);

  // Get roomId from localStorage or URL parameters
  useEffect(() => {
    const savedRoomId = localStorage.getItem('roomId');
    if (savedRoomId) {
      setRoomId(savedRoomId);
    } else {
      const searchParams = new URLSearchParams(window.location.search);
      const roomIdFromUrl = searchParams.get('roomId');
      if (roomIdFromUrl) {
        setRoomId(roomIdFromUrl);
        localStorage.setItem('roomId', roomIdFromUrl);
      }
    }
  }, []);

  function handleSetRoomId(id) {
    setRoomId(id);
    localStorage.setItem('roomId', id);
  }

  return (
    <RoomContext.Provider value={{ handleSetRoomId, roomId }}>
      {props.children}
    </RoomContext.Provider>
  );
}
