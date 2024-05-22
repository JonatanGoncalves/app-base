import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen";
import SobreScreen from "../screens/SobreScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { Drawer } from "react-native-paper";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const HomeIcon = ({ focused, color, size }) => (
    <Ionicons name="home" size={size} color={color} />
);

const SobreIcon = ({ focused, color, size }) => (
    <Ionicons name="help" size={size} color={color} />
);

export default function AppNavigator() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                <Stack.Screen name="MainHome">
                    {() => (
                        <Drawer.navigation
                            screenOptions={{
                                drawerStyle: {
                                    backgroundColor: "FFF",
                                    width: 230,
                                }
                            }}
                        >
                            <Drawer.Screen 
                                name="HomeScreen"
                                component={HomeScreen}
                                options={{ drawerIcon: HomeIcon }}
                            />
                            <Drawer.Screen 
                                name="Sobre"
                                component={SobreScreen}
                                options={{ drawerIcon: SobreIcon}}
                            />
                        </Drawer.navigation>
                    )}
                </Stack.Screen>
                <Stack.Screen name="SobreScreen" component={SobreScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}