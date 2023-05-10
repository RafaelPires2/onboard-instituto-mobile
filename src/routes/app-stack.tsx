import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard } from '../pages/dashboard';
import { ScreenAddUser } from '../pages/add-user';

const Stack = createNativeStackNavigator();

export function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard}  options={{ headerTitle: 'Lista de Usuários' }} />
      <Stack.Screen name="ScreenAddUser" component={ScreenAddUser} options={{ headerTitle: 'Cadastrar Usuário' }} />
    </Stack.Navigator>
  );
}
