import React, { useContext } from 'react';
import { UsersList } from '../../components/users-list';
import { Button } from '../../components/button';
import { AuthContext } from '../../contexts/auth';

export function Dashboard() {
 const authContext = useContext(AuthContext)

  return (
    <>
      <UsersList />
      <Button onPress={() => authContext.signOut()}>Sair</Button>
    </>
  );
}
