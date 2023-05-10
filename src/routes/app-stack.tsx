import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard } from '../pages/dashboard';
import { ScreenAddUser } from '../pages/add-user';
import { UserDetails } from '../components/card-user-details';

const Stack = createNativeStackNavigator();

export function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard}  options={{ headerTitle: 'Lista de Usuários' }} />
      <Stack.Screen name="ScreenAddUser" component={ScreenAddUser} options={{ headerTitle: 'Cadastrar Usuário' }} />
      <Stack.Screen name="UserDetails" component={UserDetails}  options={{ headerTitle: 'Lista de Usuários' }} />
    </Stack.Navigator>
  );
}
