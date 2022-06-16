import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  Button,
  Alert,
} from "react-native";
import { Select, NativeBaseProvider } from "native-base";
import { MaskedTextInput } from "react-native-mask-text";
import { CriarCliente } from "../../Services/ClienteService";
import DatePicker from "react-native-datepicker";

export default function CadastroCliente() {
  const [textCpf, setTextCpf] = useState("");
  const [textNome, setTextNome] = useState("");
  const [textSenha, setTextSenha] = useState();
  const [textConfirmacao, setTextConfirmacao] = useState("");
  const [textEmail, setTextEmail] = useState("");
  const [textCelular, setTextCelular] = useState("");
  const [textDataNascimento, setTextDataNascimento] = useState("");
  const [selectPlano, setSelectPlano] = useState("");
  const [EmailCorreto, setEmailCorreto] = useState(null);

  function filterInput(text) {
    const specialCharacters = /[`~0-9!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/g;
    if (specialCharacters.test(text)) {
      return setTextNome(text.replace(specialCharacters, ""));
    }
    setTextNome(text);
  }
  function validateEmail(text) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      setTextEmail(text);
      setEmailCorreto(false);
    } else {
      setTextEmail(text);
      setEmailCorreto(true);
    }
  }
  async function createUser() {
    const params = {
      Cpf: textCpf,
      Nome: textNome,
      Password: textSenha,
      Email: textEmail,
      Telefone: textCelular,
      DataNascimento: textDataNascimento,
      Convenio: selectPlano,
    };
    if (textSenha === textConfirmacao && textSenha !== "") {
      if (textCpf !== "") {
        if (textNome !== "") {
          if (textEmail !== "") {
            if (EmailCorreto === true) {
              if (selectPlano !== "") {
                if (textDataNascimento !== "") {
                  if (textCelular !== "") {
                    const resp = await CriarCliente(params);
                    if (resp[0]?.success === true) {
                      Alert.alert(
                        "Bem vindo ao Medical App !",
                        resp[0].message
                      );
                    } else {
                      Alert.alert("Erro no Cadastro !", resp[0].message);
                    }
                  } else {
                    Alert.alert("Aviso!", "Celular é obrigatório ! ");
                  }
                } else {
                  Alert.alert("Aviso!", "Data de Nascimento é obrigatório! ");
                }
              } else {
                Alert.alert("Aviso!", "Convênio é obrigatório !");
              }
            } else {
              Alert.alert("Aviso!", "Precisa ser Email verdadeiro!");
            }
          } else {
            Alert.alert("Aviso!", "Email precisa estar preenchido !");
          }
        } else {
          Alert.alert("Aviso!", "Nome precisa estar preenchido !");
        }
      } else {
        Alert.alert("Aviso!", "Cpf precisa estar preenchido !");
      }
    } else {
      Alert.alert("Aviso!", "Senhas precisam ser iguais");
    }
  }

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 20 }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 30,
              marginTop: 30,
            }}
          >
            <Image
              style={styles.tinyLogo}
              source={require("@expo/../../assets/MedicalAppIcon2.png")}
            />
          </View>
          <MaskedTextInput
            style={styles.input}
            onChangeText={setTextCpf}
            placeholder=" Digite seu CPF"
            mask="999.999.999-99"
            value={textCpf}
          />

          <TextInput
            style={styles.input}
            onChangeText={(text) => filterInput(text)}
            placeholder=" Digite seu Nome Completo"
            value={textNome}
            maxLength={50}
            keyboardType="ascii-capable"
          />

          <TextInput
            style={styles.input}
            onChangeText={setTextSenha}
            placeholder=" Digite sua senha"
            secureTextEntry={true}
            maxLength={20}
            value={textSenha}
          />
          <TextInput
            style={styles.input}
            onChangeText={setTextConfirmacao}
            placeholder=" Confirme sua senha"
            secureTextEntry={true}
            maxLength={20}
            value={textConfirmacao}
          />
          <MaskedTextInput
            style={styles.input}
            onChangeText={setTextCelular}
            placeholder=" Digite seu celular"
            mask="(99) 99999-9999"
            value={textCelular}
          />
          <TextInput
            style={styles.input}
            onChangeText={(txt) => validateEmail(txt)}
            placeholder=" Digite seu e-mail"
            keyboardType="email-address"
            maxLength={40}
            value={textEmail}
          />

          <DatePicker
            style={{ width: 320, marginBottom: 10 }}
            date={textDataNascimento}
            format="DD/MM/YYYY"
            maxDate="17/06/2004"
            onDateChange={setTextDataNascimento}
            placeholder="Data de Nascimento"
            customStyles={{
              dateInput: {
                height: 48,
                width: 320,
                marginTop: 10,
                marginBottom: 10,
                borderRadius: 12,
                padding: 10,
                backgroundColor: "#ffff",
              },
            }}
          />

          <Select
            onValueChange={(itemValue) => setSelectPlano(itemValue)}
            style={{ backgroundColor: "#FFFF" }}
            placeholder="Convênio vinculado"
            placeholderTextColor="black"
          >
            <Select.Item label="Hapvida" value="hapvida" />
            <Select.Item label="Unimed" value="unimed" />
            <Select.Item label="Bradesco" value="bradesco" />
          </Select>

          <TouchableOpacity style={styles.buttonCadastro} onPress={createUser}>
            <Text style={styles.textCadastro}>Criar Conta</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    width: 320,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 12,
    padding: 10,
    backgroundColor: "#ffff",
  },
  tinyLogo: {
    width: 155,
    height: 155,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C9D5D9",
  },
  buttonCadastro: {
    height: 48,
    width: 320,
    marginTop: 10,
    backgroundColor: "#38B6FF",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  textCadastro: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  tinyLogo: {
    width: 155,
    height: 155,
  },
});
