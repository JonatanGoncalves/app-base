import { Text, View } from "react-native";
import { styles } from "../config/styles";
import { useState } from "react";
import { Button, TextInput } from "react-native-paper";

export default function LoginScreen({ navigation }) {
    const [email, SetEmail] = useState("");
    const [senha, SetSenha] = useState("");
    return (
        <View style={styles.container}>
            <View style={styles.container_inner}>
                <Text>Página de Login!</Text>
                <Text>{"\n"}</Text>
                <TextInput 
                    label={"Email"}
                    placeholder={"Digite seu e-mail"}
                    value={email}
                    onChangeText={SetEmail}
                />
                <Text>{"\n"}</Text>
                <TextInput 
                    label={"Senha"}
                    placeholder={"Digite sua Senha"}
                    value={senha}
                    onChangeText={SetSenha}
                    secureTextEntry // Para esconder a Senha
                />
                <Text>{"\n"}</Text>
                <Button mode={"contained"}>Login</Button>
                <Text>{"\n"}</Text>
                <Button 
                    onPress={() =>
                        navigation.navigate('CadastroScreen', { name: 'CadastroScreen' })}
                    mode={"text"}>Fazer Cadastro</Button>
            </View>
        </View>
    )
}