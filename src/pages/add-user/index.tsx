import React, { useState } from 'react';
import { Alert, Text } from 'react-native';
import { MarginTop, WrapperPageAddUser } from './styles';
import { TextField } from '../../components/input';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CustomLabel, TextError, WrapperInputOption } from '../../components/input/styles';
import { Picker } from '@react-native-picker/picker';
import { Button } from '../../components/button';
import { useMutation } from '@apollo/client';
import { CREATE_USER_MUTATION } from '../../data/graphql/queries-gql';
import Icon from 'react-native-vector-icons/AntDesign';
import { FormData, formSchemaAddUser } from '../../utils/form-schema-add-user';

export function ScreenAddUser() {
  const [roleValue, setRoleValue] = useState('user');
  const [createUser, { data, loading }] = useMutation(CREATE_USER_MUTATION, {
    onCompleted: () => {
      Alert.alert('usuario cadastrado com sucesso');
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchemaAddUser),
  });

  function handleCreateUser(data: FormData) {
    try {
      createUser({
        variables: {
          data: {
            name: data.name,
            phone: data.phone,
            birthDate: data.birthDate,
            email: data.email,
            role: roleValue,
            password: data.password,
          },
        },
      });
    } catch (error) {
      console.log(errors);
    }
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
              placeholder="Digite seu Nome"
              label="Nome"
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
              placeholder="Digite seu Email"
              label="Email"
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
              maxLength={11}
              placeholder="Digite seu telefone"
              label="Telefone"
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
              placeholder="Dia/Mês/Ano"
              label="Data de nascimento"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          );
        }}
      />
      {errors.birthDate && <TextError>{errors?.birthDate.message}</TextError>}

      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <TextField
              secureTextEntry
              placeholder="Digite sua senha"
              label="Senha"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          );
        }}
      />
      {errors.password && <TextError>{errors?.password.message}</TextError>}

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
