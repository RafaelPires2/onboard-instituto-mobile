import React, { useContext } from 'react';
import { UsersList } from '../../components/users-list';
import { Button } from '../../components/button';
import { AuthContext } from '../../contexts/auth';
import { WrapperButton } from './styles';

export function Dashboard() {
 const authContext = useContext(AuthContext)

  return (
    <>
    <UsersList />
    <WrapperButton>
      <Button onPress={() => authContext.signOut()} >Sair</Button>
    </WrapperButton>
    </>
  );
}
