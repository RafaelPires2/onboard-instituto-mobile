import React from 'react';
import { ContainerLogin, LogoText } from './styles';
import { CustomInput } from '../../components/input';
import { CustomButton } from '../../components/button';

export function Login() {
  return (
    <ContainerLogin>
      <LogoText>Bem-vindos ao Instituto Taqtile</LogoText>
      <CustomInput placeholder={'Email'} />
      <CustomInput placeholder={'Senha'} />
      <CustomButton />
    </ContainerLogin>
  );
}
