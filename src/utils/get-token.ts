import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getToken() {
  const storagedToken = await AsyncStorage.getItem('token');
  return storagedToken;
}
