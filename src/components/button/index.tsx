import React, { ReactNode } from 'react';
import { WrapperButton, TextButton } from './styles';
import { ActivityIndicator } from 'react-native';

type ButtonVariant = 'BTN_DETAILS' | 'BTN_PRIMARY' | 'BTN_ALERT' | 'BTN_SUCCESS';
interface ButtonProps {
  onPress?: () => void;
  disabled?: boolean;
  text: string;
  width: string;
  variant: ButtonVariant;
  icon?: ReactNode;
  onLoading?: boolean;
}

export function Button({ text, icon, onLoading, ...props }: ButtonProps) {
  return (
    <>
      {onLoading === true ? (
        <WrapperButton disabled={onLoading === true} {...props}>
          <ActivityIndicator />
          <TextButton>Carregando...</TextButton>
        </WrapperButton>
      ) : (
        <WrapperButton {...props}>
          {icon}
          <TextButton>{text}</TextButton>
        </WrapperButton>
      )}
    </>
  );
}
