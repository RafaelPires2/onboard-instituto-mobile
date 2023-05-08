import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Login } from './src/pages/login';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { MyTheme } from './src/styles/themes/default';
import { getToken } from './src/utils/get-token';
import { Routes } from './src/routes/routes';
import { AuthProvider } from './src/contexts/auth-provider';

const httpLink = createHttpLink({
  uri: 'https://template-onboarding-node-sjz6wnaoia-uc.a.run.app/graphql',
});

const authLink = setContext(async (_, { headers }) => {
  const token = await getToken();
  return {
    headers: {
      ...headers,
      authorization: token?.token || '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={MyTheme}>
        <KeyboardAvoidingView style={styles.containerKeyBoard}>
          <AuthProvider>
            <Routes />
          </AuthProvider>
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
