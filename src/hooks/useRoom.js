import { useContext } from "react"
import { RoomContext } from "../context/RoomContext"

export function useRoom () {
  const { handleSetRoomId, roomId } = useContext(RoomContext)
  
  return {
    handleSetRoomId, 
    roomId 
  }
}