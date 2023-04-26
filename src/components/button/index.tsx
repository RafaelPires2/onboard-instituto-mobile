import React, { ReactNode } from 'react';
import { WrapperButton, TextButton } from './styles';

interface ButtonProps {
  content: ReactNode;
  onPress: () => void;
  disabled: boolean;
}

export function Button({ content, onPress }: ButtonProps) {
  return (
    <WrapperButton onPress={onPress}>
      <TextButton>{content}</TextButton>
    </WrapperButton>
  );
}
