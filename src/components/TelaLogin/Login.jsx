import { useNavigation } from "@react-navigation/native";
import React from "react";
import { LogarCliente } from "../../Services/ClienteService"
import {
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  Text,
  StyleSheet,
  View,
  LogBox
} from "react-native";

export default function Login() {
  const [cpf, onChangeCpf] = React.useState(null);
  const [pwd, onChangePwd] = React.useState(null);


  const navigation = useNavigation()

  async function sendData() {
    let data = {
      cpf: cpf,
      pwd: pwd
    }
    const cmd = await LogarCliente(data)

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
          onChangeText={onChangeCpf}
          placeholder=" Digite seu CPF"
          keyboardType="numeric"
          value={cpf}
        />
        <Text> Senha: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePwd}
          value={pwd}
          placeholder=" Digite sua senha"
        />
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={sendData}
        >
          <Text
            style={styles.textLogin}
          >
            Acessar
          </Text>
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
