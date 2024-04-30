import { Text, View } from "react-native";
import { styles } from "../config/styles";
import { useState } from "react";
import { Button, TextInput } from "react-native-paper";

export default function CadastroScreen() {
    const [email, SetEmail] = useState("");
    const [senha, SetSenha] = useState("");
    const [repetirSenha, SetRepetirSenha] = useState("");
    return (
        <View style={styles.container}>
            <View style={styles.container_inner}>
                <Text>Página de Cadastro!</Text>
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
                <TextInput 
                    label={"Repetir Senha"}
                    placeholder={"Repita sua Senha"}
                    value={repetirSenha}
                    onChangeText={SetRepetirSenha}
                    secureTextEntry // Para esconder a Senha
                />
                <Text>{"\n"}</Text>
                <Button mode={"contained"}>Cadastrar</Button>
                
            </View>
        </View>
    )
}