import React from 'react';
import { ContainerButton, TextButton } from './styles';

interface CustomButtonProps {
  text: string;
  onPress: () => void;
}

export function CustomButton({ text, onPress }: CustomButtonProps) {
  return (
    <ContainerButton onPress={onPress}>
      <TextButton>{text}</TextButton>
    </ContainerButton>
  );
}
