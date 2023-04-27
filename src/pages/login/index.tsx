import React from 'react';
import { WrapperLogin, LogoText } from './styles';
import { TextField } from '../../components/input';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { validatePasswordRegex } from '../../utils/regex';
import { TextError } from '../../components/input/styles';
import { LOGIN_MUTATION } from '../../utils/queries-gql';
import { useMutation } from '@apollo/client';
import { Alert, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';
import { Button } from '../../components/button';
import { useNavigation } from '@react-navigation/native';

const formSchema = z.object({
  email: z.string().email('Digite um email valido: email@email.com'),
  password: z
    .string()
    .regex(
      validatePasswordRegex,
      'A senha deve conter ao menos 7 caracteres sendo 1 letra maiuscula 1 minuscula 1 numero'
    ),
});

type FormData = z.infer<typeof formSchema>;

export function Login() {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION, {
    onCompleted({ login }) {
      AsyncStorage.setItem('token', login.token);
      navigation.navigate('Dashboard');
      reset({ email: '', password: '' });
    },
  });
  
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
        onPress={handleSubmit(handleLogin)}
        disabled={loading === true}
        content={
          loading === true ? (
            <>
              <Icon name="loading1" size={24} color="white" />
              <Text>Carregando...</Text>
            </>
          ) : (
            <Text>Login</Text>
          )
        }
      />
    </WrapperLogin>
  );
}
