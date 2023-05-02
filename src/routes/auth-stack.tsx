import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../pages/login";

const Stack = createNativeStackNavigator();

export function AuthStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}