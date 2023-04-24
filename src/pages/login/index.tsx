import React from 'react';
import { ContainerLogin, LogoText } from './styles';
import { TextField } from '../../components/input';
import { CustomButton } from '../../components/button';

export function Login() {
  return (
    <ContainerLogin>
      <LogoText>Bem-vindos ao Instituto Taqtile</LogoText>
      <TextField placeholder={'Email'} label={"Email"}/>
      <TextField placeholder={'Senha'} label={"Senha"}/>
      <CustomButton onPress={() => {}} text={'Fazer Login'} />
    </ContainerLogin>
  );
}
