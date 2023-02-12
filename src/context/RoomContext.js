import { createContext, useEffect, useState } from "react";

export const RoomContext = createContext({});

export function RoomProvider (props) {
  const [roomId, setRoomId] = useState(null);

  useEffect(() => {
    if (!roomId) {
      if (typeof window !== "undefined") {
        const id = localStorage.getItem("@talkspot:roomId");
        setRoomId(JSON.parse(id))
      }
    }
  }, [])

  function handleSetRoomId(id) {
    setRoomId(id);
    
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "@talkspot:roomId",
        JSON.stringify(id)
      );
    }
  }
  
  return (
    <RoomContext.Provider value={{ handleSetRoomId, roomId }}>
      {props.children}
    </RoomContext.Provider>
  );
}