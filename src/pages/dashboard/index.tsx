import React, { useContext } from 'react';
import { UsersList } from '../../components/users-list';
import { Button } from '../../components/button';
import { AuthContext } from '../../contexts/auth-context';
import { WrapperButton } from './styles';
import { FloatButton } from '../../components/float-button';
import { useNavigation } from '@react-navigation/native';

export function Dashboard() {
  const authContext = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <>
      <FloatButton onPress={() => navigation.navigate('ScreenAddUser')}>+</FloatButton>
      <UsersList />
      <WrapperButton>
        <Button onPress={() => authContext.signOut()}>Sair</Button>
      </WrapperButton>
    </>
  );
}
