import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { app, auth } from "@/config/firebaseConfig";

type AuthContextType = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
};
// little trick:
export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  function userStatusFirebase() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log("userFirebase :>> ", user);
      }
    });
  }
  useEffect(() => {
    userStatusFirebase();
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
