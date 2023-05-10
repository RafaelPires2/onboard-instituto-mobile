import React, { ReactNode } from 'react';
import { WrapperButton, TextButton } from './styles';

export type ButtonVariant = 'UM' | 'BTN_PRIMARY' | 'BTN_ALERT' | 'BTN_SUCCESS';
interface ButtonProps {
  onPress?: () => void;
  disabled?: boolean;
  text: string;
  width: string;
  variant: ButtonVariant;
  icon?: ReactNode;
}

export function Button({ onPress, text, width, icon, ...props }: ButtonProps) {
  return (
    <WrapperButton width={width} onPress={onPress} {...props}>
      {icon}
      <TextButton>{text}</TextButton>
    </WrapperButton>
  );
}
