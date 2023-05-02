import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../pages/login";
import { Dashboard } from "../pages/dashboard";

const Stack = createNativeStackNavigator();


export function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Dashboard" component={Dashboard} />
            </Stack.Navigator>
          </NavigationContainer>
    )
}