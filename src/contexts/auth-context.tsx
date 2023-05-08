import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';
import { useToken } from '../utils/get-token';

export interface AuthData {
  token: string;
  email: string;
  name: string;
}
export interface Props {
  children: React.ReactNode;
}
interface AuthContextData {
  authData?: AuthData;
  signIn: (authData: AuthData) => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);


