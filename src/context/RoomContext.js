import { createContext, useState } from "react";

export const RoomContext = createContext({});

export function RoomProvider (props) {
  const [roomId, setRoomId] = useState(null);

  // useEffect(() => {
  //   if (!roomId) {
  //     if (typeof window !== "undefined") {
  //       const storageId = localStorage.getItem("@talkspot:roomId");
  //       setRoomId(JSON.parse(storageId))
  //     }
  //   }
  // }, [])

  function handleSetRoomId(id) {
    setRoomId(id);
    
    // if (typeof window !== "undefined") {
    //   localStorage.setItem(
    //     "@talkspot:roomId",
    //     JSON.stringify(id)
    //   );
    // }
  }
  
  return (
    <RoomContext.Provider value={{ handleSetRoomId, roomId }}>
      {props.children}
    </RoomContext.Provider>
  );
}