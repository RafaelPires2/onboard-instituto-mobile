import React, { useContext, useState } from 'react';
import { UsersList } from '../../components/users-list';
import { Button } from '../../components/button';
import { AuthContext } from '../../contexts/auth-context';
import { WrapperButton } from './styles';
import { FloatButton } from '../../components/float-button';
import { useNavigation } from '@react-navigation/native';
import { UserDetails } from '../../components/card-user-details';

export function Dashboard() {
  const authContext = useContext(AuthContext);
  const navigation = useNavigation();
  const [showDetails, setShowDetails] = useState(false);
  const [selectedUserID, setSelectedUserID] = useState('');

  const handleUserClick = (userId: string) => {
    setSelectedUserID(userId);
    setShowDetails(!showDetails);
    console.log('handleUserClick ativado')
  };

  return (
    <>
      <FloatButton onPress={() => navigation.navigate('ScreenAddUser')}>+</FloatButton>
      <UsersList onUserClick={handleUserClick} />
      {showDetails && (
        <UserDetails
          onCloseModal={() => setShowDetails(!showDetails)}
          selectedUserID={selectedUserID}
        />
      )}
      <WrapperButton>
        <Button variant="BTN_ALERT" width="80" text="Sair" onPress={() => authContext.signOut()} />
      </WrapperButton>
    </>
  );
}
