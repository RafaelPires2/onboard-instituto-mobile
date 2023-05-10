import { Text } from 'react-native';
import { WrapperCardUserList } from './styles';
import { Button } from '../button';

interface UserProps {
  id: string;
  name: string;
  email: string;
  onUserClick?: (userId: string) => void;
  onPress?: () => void;
}

export function UserItem({ id, name, email, onUserClick }: UserProps) {
  return (
    <>
      <WrapperCardUserList>
        <Text>ID: {id}</Text>
        <Text>Nome: {name}</Text>
        <Text>Email: {email}</Text>
        <Button
          text="Ver Mais"
          width="30"
          variant="BTN_DETAILS"
          onPress={() => onUserClick?.(id)}
        />
      </WrapperCardUserList>
    </>
  );
}
