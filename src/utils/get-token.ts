import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = () => {
   return AsyncStorage.getItem('token');
}

export const tokenExistis = () => {
   if( getToken !== undefined )
   return true;
}

export function sair(){
  return AsyncStorage.removeItem('token');
}