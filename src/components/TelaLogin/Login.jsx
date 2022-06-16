import { useNavigation } from "@react-navigation/native";
import React from "react";
import { LogarCliente, RecuperarSenha } from "../../Services/ClienteService"
import {
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  Text,
  View,
  Alert,
  Modal,
} from "react-native";
import { MaskedTextInput } from "react-native-mask-text";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Login.style'
import modalStyle from './Modal.style'
import { useEffect } from "react";

export default function Login() {
  const [cpf, onChangeCpf] = React.useState(null);
  const [pwd, onChangePwd] = React.useState(null);
  const [email, onChangeEmail] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);

  const navigation = useNavigation()

  async function sendData() {
    const data = {
      cpf: cpf,
      password: pwd
    }
    const res = await LogarCliente(data)
    if (res[0].success) {
      await AsyncStorage.setItem("TOKEN", res[0]?.token);
      await AsyncStorage.setItem("ID", res[0]?.data?.idCliente.toString())
      await AsyncStorage.setItem("NOME_CLIENTE", res[0]?.data?.nome)
      await AsyncStorage.setItem("CONVENIO", res[0]?.data?.convenio)
      await AsyncStorage.setItem("CPF", res[0]?.data?.cpf)
      await AsyncStorage.setItem("EMAIL", res[0]?.data?.email)
      onChangePwd("")
      navigation.navigate('consulta')
    } else {
      Alert.alert(
        res[0].data?.message
      )
    }
  }

  async function recoveryPassword() {
    const res = await RecuperarSenha(email)
    if (res[0].data.success) {
      Alert.alert(res[0].data?.message)
    } else { Alert.alert(res[0].data?.message) }
    setModalVisible(!modalVisible)
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
        <View>
          <MaskedTextInput
            style={styles.input}
            onChangeText={onChangeCpf}
            placeholder=" Digite seu CPF"
            keyboardType="numeric"
            value={cpf}
            mask="999.999.999-99"
          />
        </View>
        <Text> Senha: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePwd}
          value={pwd}
          secureTextEntry={true}
          placeholder=" Digite sua senha"
          maxLength={20}
        />
        <TouchableOpacity style={styles.buttonLogin} onPress={sendData}>
          <Text style={styles.textLogin}> Acessar </Text>
        </TouchableOpacity>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={modalStyle.centeredView}>
            <View style={modalStyle.modalView}>
              <Text style={modalStyle.modalText}>Recuperar senha</Text>
              <View>
                <MaskedTextInput
                  style={styles.input}
                  onChangeText={onChangeEmail}
                  placeholder=" Digite seu Email"
                  value={email}
                />
              </View>
              <TouchableOpacity onPress={recoveryPassword}>
                <Text style={modalStyle.modalRecoverPwd}> Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TouchableOpacity onPress={() => navigation.navigate('RecuperacaoSenha')}>
          <Text >Esqueci minha senha</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.buttonCadastro} onPress={() => navigation.navigate('cadastro')}>
          <Text style={styles.textCadastro}>Novo Cadastro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
