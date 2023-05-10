import React from 'react';
import { WrapperLogin, LogoText } from './styles';
import { TextField } from '../../components/input';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextError } from '../../components/input/styles';
import { ActivityIndicator, StatusBar, Text } from 'react-native';
import { Button } from '../../components/button';
import { FormData, formSchema } from '../../utils/form-schema';
import { useLoginMutation } from '../../data/graphql/login-mutation.hook';

export function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const { login, loading, error } = useLoginMutation();

  function handleLogin(data: FormData) {
    login({
      variables: {
        data: {
          email: data.email,
          password: data.password,
        },
      },
    });
  }

  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <WrapperLogin>
        <LogoText>Bem-vindos ao Instituto Taqtile</LogoText>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <TextField
                placeholder={'Digite seu Email'}
                label={'Email'}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            );
          }}
        />
        {errors.email && <TextError>{errors?.email.message}</TextError>}
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <TextField
                secureTextEntry
                placeholder={'Digite sua Senha'}
                label={'password'}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            );
          }}
        />
        {errors.password && <TextError>{errors?.password.message}</TextError>}
        {error && <TextError>{error?.message}</TextError>}
    
        <Button
        icon={loading === true ? <ActivityIndicator /> : ''}
          text="Enviar"
          variant="BTN_SUCCESS"
          width="80"
          onPress={handleSubmit(handleLogin)}
        />
      </WrapperLogin>
    </>
  );
}
