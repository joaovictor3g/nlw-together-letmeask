import { createContext, useContext, useState, useEffect } from "react";
import { auth, firebase } from "../services/firebase";

type User = {
  id: string;
  name: string;
  avatar: string;
};

type AuthContextData = {
  isSigned: boolean;
  handleSignIn(): Promise<void>;
  user: User | undefined;
};

interface IAuthProvider {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider(props: IAuthProvider) {
  const [isSigned, setIsSigned] = useState(false);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(user => {
      if(user) {
        const { displayName, photoURL, uid } = user;
    
        if(!displayName || !photoURL) {
          throw new Error('Missing informations')
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });

        setIsSigned(true);
        }
      })

      return () => {
        unSubscribe();
      }
  }, []);


  async function handleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);
  
    if(result.user) {
      const { displayName, photoURL, uid } = result.user;
    
      if(!displayName || !photoURL) {
        throw new Error('Missing informations')
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });

      setIsSigned(true);
    }

  }

  return (
    <AuthContext.Provider value={{
      isSigned,
      handleSignIn,
      user
    }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  return useContext(AuthContext);
}