import AsyncStorage from '@react-native-async-storage/async-storage';

export function getToken() {
   return AsyncStorage.getItem('token');
}
