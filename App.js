import React from "react";
import { Text } from 'react-native'
import { ThemeProvider } from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { MyTheme } from "./src/styles/themes/default";

export default function App() {
  return (
    <ThemeProvider theme={MyTheme}>
      <KeyboardAvoidingView style={styles.containerKeyBoard}>
        <Text>Bem vindo ao instituto Taqtile</Text>
        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  containerKeyBoard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
