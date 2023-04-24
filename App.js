import React from 'react';
import { Login } from './src/pages/login';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { MyTheme } from './src/styles/themes/default';

export default function App() {
  return (
    <ThemeProvider theme={MyTheme}>
      <KeyboardAvoidingView style={styles.containerKeyBoard}>
        <Login />
        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  containerKeyBoard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
