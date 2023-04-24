import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { ContainerInput } from "./styles";

interface InputProps extends TextInputProps{
  placeholder: string;
}

export function CustomInput({ placeholder, ...rest }: InputProps) {
  const [value, onChangeText] = useState("");
  return (
    <>
      <ContainerInput
        onChangeText={(text) => onChangeText(text)}
        value={value}
        placeholder={placeholder}
        {...rest}
      />
    </>
  );
}