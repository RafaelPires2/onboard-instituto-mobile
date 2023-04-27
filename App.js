import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Login } from './src/pages/login';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { MyTheme } from './src/styles/themes/default';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const client = new ApolloClient({
  uri: 'https://template-onboarding-node-sjz6wnaoia-uc.a.run.app/graphql',
  cache: new InMemoryCache(),
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={MyTheme}>
        <KeyboardAvoidingView style={styles.containerKeyBoard}>
          <NavigationContainer initialRouteName="Login">
            <Stack.Navigator>
              <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
          </NavigationContainer>
          <Login />
          <StatusBar style="auto" />
        </KeyboardAvoidingView>
      </ThemeProvider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  containerKeyBoard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
