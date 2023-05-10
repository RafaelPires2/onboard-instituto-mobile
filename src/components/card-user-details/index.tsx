import { useQuery } from '@apollo/client';
import { UserDataProps } from '../../utils/type-queries';
import { UserTextInfo } from '../user-text-info';
import { ContainerUserDetails } from './styles';
import { FULL_USER_QUERY } from '../../data/graphql/queries-gql';
import React from 'react';
import { Button } from '../button';
import { ItemSeparatorLarge } from '../item-separator/styles';

interface DetailsUserProps {
  selectedUserID?: string;
  onCloseModal: () => void;
}

export function UserDetails({ selectedUserID, onCloseModal }: DetailsUserProps) {
  const { data } = useQuery<UserDataProps>(FULL_USER_QUERY, {
    variables: {
      itemId: selectedUserID,
    },
  });

  return (
    <ContainerUserDetails>
      <UserTextInfo>name: {data?.user.name}</UserTextInfo>
      <UserTextInfo>email: {data?.user.email}</UserTextInfo>
      <UserTextInfo>id: {data?.user.id}</UserTextInfo>
      <UserTextInfo>role: {data?.user.role}</UserTextInfo>
      <UserTextInfo>phone: {data?.user.phone}</UserTextInfo>
      <UserTextInfo>bithDate: {data?.user.birthDate}</UserTextInfo>
      <ItemSeparatorLarge />
      <Button text="Sair" variant="BTN_ALERT" width="40" onPress={onCloseModal} />
    </ContainerUserDetails>
  );
}
