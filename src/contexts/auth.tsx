import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';
import { useToken } from '../utils/get-token';

export interface AuthData {
  token: string;
  email: string;
  name: string;
}
interface Props {
  children: React.ReactNode;
}
interface AuthContextData {
  authData?: AuthData;
  signIn: (authData: AuthData) => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData>();

  useEffect(() => {
    useToken((parsedValue) => {
      setAuthData(parsedValue)
    })
  }, [authData])

  function signIn(data: AuthData) {
    AsyncStorage.setItem(
      'user',
      JSON.stringify({ token: data.token, name: data.name, email: data.email })
    );
    setAuthData(data);
  }

  function signOut() {
    AsyncStorage.removeItem('user');
  }

  return (
    <AuthContext.Provider value={{ authData, signIn, signOut }}>{children}</AuthContext.Provider>
  );
};
