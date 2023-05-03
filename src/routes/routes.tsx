import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './auth-stack';
import { AppStack } from './app-stack';
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth';

export function Routes() {
  const authContext = useContext(AuthContext)

  return (
    <>
      <NavigationContainer>
        {authContext.authData ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </>
  );
}
