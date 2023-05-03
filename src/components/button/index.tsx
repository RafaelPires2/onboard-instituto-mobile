import React, { ReactNode } from 'react';
import { WrapperButton, TextButton } from './styles';

interface ButtonProps {
  children?: ReactNode;
  onPress?: () => void;
  disabled?: boolean;
}

export function Button({ children, onPress }: ButtonProps) {
  return (
    <WrapperButton onPress={onPress}>
      <TextButton>{children}</TextButton>
    </WrapperButton>
  );
}
