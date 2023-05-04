import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { MarginTop, WrapperPageAddUser } from './styles';
import { TextField } from '../../components/input';
import { validatePasswordRegex } from '../../utils/regex';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CustomLabel, TextError, WrapperInputOption } from '../../components/input/styles';
import { Picker } from '@react-native-picker/picker';
import { Button } from '../../components/button';
import { useMutation } from '@apollo/client';
import { CREATE_USER_MUTATION } from '../../utils/queries-gql';
import Icon from 'react-native-vector-icons/AntDesign';

const formSchemaAddUser = z.object({
  name: z.string().max(50),
  phone: z.number().min(11, 'Digite seu numero com DDD sem espaços ou caracteres.').max(11),
  birthDate: z.date(),
  role: z.string(),
  id: z.string(),
  email: z.string().email('Digite um email valido: email@email.com'),
  password: z
    .string()
    .regex(
      validatePasswordRegex,
      'A senha deve conter ao menos 7 caracteres sendo 1 letra maiuscula 1 minuscula 1 numero'
    ),
});

type FormData = z.infer<typeof formSchemaAddUser>;

export function ScreenAddUser({ activePageAddUser, setActivePageAddUser }: any) {
  const [roleValue, setRoleValue] = useState('user');
  const [createUser, { data, loading }] = useMutation(CREATE_USER_MUTATION, {
    onCompleted: () => {
      Alert.alert('usuario cadastrado com sucesso');
      console.log(data);
      setActivePageAddUser(false);
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchemaAddUser),
  });

  function handleCreateUser() {
    createUser({
      variables: {
        data: {
          name: data.name,
          phone: data.phone,
          birthDate: data.birthDate,
          email: data.email,
          role: data.role,
          password: data.password,
        },
      },
    });
  }

  return (
    <WrapperPageAddUser>
      <MarginTop />
      <Controller
        name="name"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <TextField
              placeholder={'Digite seu Nome'}
              label={'Nome'}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          );
        }}
      />
      {errors.name && <TextError>{errors?.name.message}</TextError>}

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
        name="phone"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <TextField
              placeholder={'Digite seu telefone'}
              label={'Telefone'}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          );
        }}
      />
      {errors.phone && <TextError>{errors?.phone.message}</TextError>}

      <Controller
        name="birthDate"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <TextField
              placeholder={'Digite sua data de nascimento'}
              label={'Data de nascimento'}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          );
        }}
      />
      {errors.birthDate && <TextError>{errors?.birthDate.message}</TextError>}

      <CustomLabel>Função</CustomLabel>
      <WrapperInputOption>
        <Picker
          selectedValue={roleValue}
          onValueChange={(itemValue: string) => setRoleValue(itemValue)}
        >
          <Picker.Item label="Usuário" value="user" />
          <Picker.Item label="Admin" value="admin" />
        </Picker>
      </WrapperInputOption>

      <Button onPress={handleSubmit(handleCreateUser)} disabled={loading === true}>
        {loading === true ? (
          <>
            <Icon name="loading1" size={24} color="white" />
            <Text>Carregando...</Text>
          </>
        ) : (
          <Text>Enviar</Text>
        )}
      </Button>
    </WrapperPageAddUser>
  );
}
