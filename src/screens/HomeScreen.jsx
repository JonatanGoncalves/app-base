import { Button, Text, View } from "react-native";
import { styles } from "../config/styles";


export default function HomeScreen({ navigation }) {
    return(
        <View style={styles.container}>
            <Text>Tela de HomeScreen 💗💗💗</Text>
            <Text>{"\n"}</Text>
            <Button
            title='Ir Para a Tela Sobre'
            onPress={() =>
            navigation.navigate('SobreScreen', { name: 'SobreScreen' })}
            />
            <Text>{"\n"}</Text>
            <Text>Tela de Login</Text>
            <Text>{"\n"}</Text>
            <Button
            title='Ir Para a Tela de Login'
            onPress={() =>
            navigation.navigate('LoginScreen', { name: 'LoginScreen' })}
            />
        </View>
    )
}