import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'
import { Login } from './src/pages/login';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { MyTheme } from './src/styles/themes/default';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard } from './src/pages/dashboard';
import { getToken } from './src/utils/get-token';
import { Routes } from './src/utils/routes';

const httpLink = createHttpLink({
  uri: 'https://template-onboarding-node-sjz6wnaoia-uc.a.run.app/graphql',
})

const authLink = setContext(async (_, {headers}) => {
  const token = await getToken()
  return {
    headers: {
      ...headers,
      authorization: token || '',
    },
  }
}) 

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={MyTheme}>
        <KeyboardAvoidingView style={styles.containerKeyBoard}>
          <Routes />
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
  },
});
