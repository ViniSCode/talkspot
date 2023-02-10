import { createContext, useEffect, useState } from "react";

export const RoomContext = createContext({});

export function RoomProvider (props) {
  const [roomId, setRoomId] = useState("");

  useEffect(() => {
    let storedRoomId;
    if (typeof window !== "undefined") {
      storedRoomId = localStorage.getItem("@talkspot:roomId");

      if (storedRoomId) {
        setRoomId(JSON.parse(storedRoomId));
      }
    }
  }, []);
  
  function handleSetRoomId (id) {
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