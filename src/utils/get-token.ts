import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthData } from '../contexts/auth';

export async function getToken(): Promise<AuthData | undefined> {
  const token = await AsyncStorage.getItem('user');

  if (typeof token !== 'string') {
    return;
  }

  const parsedUser = JSON.parse(token);
  return parsedUser;
}

export const useToken = async (callback?: (parsedUser?: AuthData) => void) => {
  const tokenStoraged = await AsyncStorage.getItem('user');

  if (typeof tokenStoraged !== 'string') {
    return callback?.();
  }
  const parsedUser = JSON.parse(tokenStoraged);
  return callback?.(parsedUser);
};

