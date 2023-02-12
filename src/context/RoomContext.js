import { createContext, useState } from "react";

export const RoomContext = createContext({});

export function RoomProvider (props) {
  const [roomId, setRoomId] = useState("");

  function handleSetRoomId (id) {
    setRoomId(id);
    
    if (typeof window !== "undefined") {
      localStorage.removeItem("@talkspot:roomId")

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