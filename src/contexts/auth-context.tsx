import { createContext } from 'react';
export interface AuthData {
  token: string;
  email: string;
  name: string;
}
export interface Props {
  children: React.ReactNode;
}
export interface AuthContextData {
  authData?: AuthData;
  signIn: (authData: AuthData) => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);


