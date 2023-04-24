import React from 'react';
import { TextInputProps } from 'react-native';
import { ContainerInput, CustomInput, CustomLabel } from './styles';

interface InputProps extends TextInputProps {
  placeholder: string;
  label: string;
}

export function TextField({ label, placeholder, ...props }: InputProps) {
  return (
    <ContainerInput>
      <CustomLabel>{label}</CustomLabel>
      <CustomInput placeholder={placeholder} {...props} />
    </ContainerInput>
  );
}
