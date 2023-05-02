import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../pages/login';
import { Dashboard } from '../pages/dashboard';
import { AuthStack } from './auth-stack';
import { AppStack } from './app-stack';
import { getToken, tokenExistis } from '../utils/get-token';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function Routes() {
  const authData = tokenExistis();

  return (
    <>
      <NavigationContainer>
        {authData ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </>
  );
}
