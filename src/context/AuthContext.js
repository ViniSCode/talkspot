import { createContext, useEffect, useState } from "react";
import { auth, firebase } from '../services/firebase';

export const AuthContext = createContext({});

export function AuthProvider (props) {
  const [user, setUser] = useState();

  useEffect( () => {
    const unsubscribe = auth.onAuthStateChanged( user => {
      if (user) {
        const { displayName, photoURL, uid, email,  } = user;

        if (!displayName || !photoURL) {
          throw new Error ('Missing information from Google Account.'); 
        }
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
          email: email,
        })
      }
    })

    return () => {
      unsubscribe();
    }

  }, []);

  async function handleSignInWithGoogle () {
    // get provider // google auth provider
    const provider = new firebase.auth.GoogleAuthProvider();

    // popup login using google provider 
    const result = await auth.signInWithPopup(provider);
    
    // if user exists
    if (result.user) {
      //get user info
      const { displayName, photoURL, uid, email } = result.user

      //if something is missing throw error
      if (!displayName || !photoURL) {
        throw new Error ('Missing information from Google Account.'); 
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
        email: email
      });
    }
  }

  async function handleSignOut () {
    // get provider // google auth provider
    await auth.signOut();
    // popup login using google provider 
    
    // if user exists
    setUser({})
    window.location.reload(true);
    window.location.href = "/";
  }

  
  return (
    <AuthContext.Provider value={{ user, handleSignInWithGoogle, handleSignOut }}>
      {props.children}
    </AuthContext.Provider>
  );
}