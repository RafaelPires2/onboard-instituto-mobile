import React from 'react';
import { ContainerLogin, LogoText } from './styles';
import { TextField } from '../../components/input';
import { CustomButton } from '../../components/button';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { validatePasswordRegex } from '../../utils/regex';
import { TextError } from '../../components/input/styles';

const formSchema = z.object({
  email: z.string().email('Digite um email valido: email@email.com'),
  password: z
    .string()
    .regex(
      validatePasswordRegex,
      'A senha deve conter ao menos 7 caracteres sendo 1 letra maiuscula 1 minuscula 1 numero 1 caracter especial'
    ),
});

type FormData = z.infer<typeof formSchema>;

export function Login() {
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  console.log(errors);

  const onSubmit = (data: any) => console.log(data);

  return (
    <ContainerLogin>
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
      <CustomButton onPress={handleSubmit(onSubmit)} text={'Login'} />
    </ContainerLogin>
  );
}
