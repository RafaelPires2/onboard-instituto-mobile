import React from 'react';
import { TextInputProps } from 'react-native';
import { WrapperInput, Input, CustomLabel } from './styles';

interface InputProps extends TextInputProps {
  placeholder: string;
  label: string;
}

export function TextField({ label, placeholder, ...props }: InputProps) {
  return (
    <WrapperInput>
      <CustomLabel>{label}</CustomLabel>
      <Input placeholder={placeholder} {...props} />
    </WrapperInput>
  );
}
