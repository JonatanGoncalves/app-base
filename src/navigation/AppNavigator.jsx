import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen";
import SobreScreen from "../screens/SobreScreen";
import LoginScreen from "../screens/LoginScreen";
import CadastroScreen from "../screens/CadastroScreen";


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="SobreScreen" component={SobreScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="CadastroScreen" component={CadastroScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}