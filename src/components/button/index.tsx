import React from 'react';
import { ContainerButton, TextButton } from './styles';

interface CustomButtonProps {
  text: string;
  onPress: () => void;
}

export function CustomButton({ text }: CustomButtonProps) {
  return (
    <ContainerButton>
      <TextButton>{text}</TextButton>
    </ContainerButton>
  );
}
