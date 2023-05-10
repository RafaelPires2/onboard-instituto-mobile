import { Text, View } from 'react-native';
import { WrapperCardUserList } from './styles';
interface UserProps {
  id: string;
  name: string;
  email: string;
}

export function UserItem({ id, name, email }: UserProps) {
  return (
    <>
    <WrapperCardUserList>
      <Text>ID: {id}</Text>
      <Text>Nome: {name}</Text>    
      <Text>Email: {email}</Text>
    </WrapperCardUserList>
    </>
  );
}
