import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function useAuth () {
  const { user, handleSignInWithGoogle, handleSignOut} = useContext(AuthContext);

  return {
    user, handleSignInWithGoogle, handleSignOut
  }
}