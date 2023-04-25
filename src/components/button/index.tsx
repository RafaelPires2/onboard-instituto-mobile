import React from 'react';
import { ContainerButton, TextButton } from './styles';

interface CustomButtonProps {
  content: any;
  onPress: () => void;
}

export function CustomButton({ content, onPress }: CustomButtonProps) {
  return (
    <ContainerButton onPress={onPress}>
      <TextButton>{content}</TextButton>
    </ContainerButton>
  );
}
