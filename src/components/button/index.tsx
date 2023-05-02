import React, { ReactNode } from 'react';
import { WrapperButton, TextButton } from './styles';

interface ButtonProps {
  content?: ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  text?: string;
}

export function Button({ content, onPress }: ButtonProps) {
  return (
    <WrapperButton onPress={onPress}>
      <TextButton>{content}</TextButton>
    </WrapperButton>
  );
}
