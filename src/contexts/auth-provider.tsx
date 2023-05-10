import { useEffect, useState } from "react";
import { AuthContext, AuthData, Props } from "./auth-context";
import { useToken } from "../utils/get-token";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthProvider: React.FC<Props> = ({ children }) => {
    const [authData, setAuthData] = useState<AuthData>();
  
    useEffect(() => {
      useToken((parsedValue) => {
        setAuthData(parsedValue)
      })
    }, [])
  
    function signIn(data: AuthData) {
      AsyncStorage.setItem(
        'user',
        JSON.stringify({ token: data.token, name: data.name, email: data.email })
      );
      setAuthData(data);
    }
  
    function signOut() {
      setAuthData(undefined);
      AsyncStorage.removeItem('user');
    }
  
    return (
      <AuthContext.Provider value={{ authData, signIn, signOut }}>{children}</AuthContext.Provider>
    );
  };