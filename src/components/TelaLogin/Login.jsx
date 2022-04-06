import { useNavigation } from "@react-navigation/native";
import React from "react";
import api from "../../Services/ClienteService"
import {
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  Text,
  StyleSheet,
  View,
} from "react-native";

export default function Login() {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  const navigation = useNavigation()

  async function action() {
    const cmd = await api.LogarCliente(values)
    
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#000" translucent={false} />

      <View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 50,
          }}
        >
          <Image
            style={styles.tinyLogo}
            source={require("@expo/../../assets/MedicalAppIcon2.png")}
          />
        </View>

        <Text> Login: </Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder=" Digite seu CPF"
          value={text}
        />
        <Text> Senha: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder=" Digite sua senha"
        />
        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.textLogin}>Acessar</Text>
        </TouchableOpacity>

        <Text>Esqueci minha senha</Text>
        <TouchableOpacity style={styles.buttonCadastro} onPress={() => navigation.navigate('cadastro')}>
          <Text style={styles.textCadastro}>Novo Cadastro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    width: 296,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 12,
    padding: 10,
    backgroundColor: "#ffff",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C9D5D9",
  },
  tinyLogo: {
    width: 155,
    height: 155,
  },
  logo: {
    width: 66,
    height: 58,
  },
  buttonLogin: {
    height: 48,
    width: 296,
    marginTop: 10,
    backgroundColor: "#38B6FF",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonCadastro: {
    height: 48,
    width: 296,
    marginTop: 10,
    backgroundColor: "#777777",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  textLogin: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold"
  },
  textCadastro: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold"
  },
});
