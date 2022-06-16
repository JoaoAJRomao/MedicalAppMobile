import React, { useState } from "react";
import {
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  Text,
  View,
  Alert,
} from "react-native";
import styles from "../TelaLogin/Login.style";
import { RecuperarSenha } from "../../Services/ClienteService";
import ModalCodigo from "./ModalCodigo";

export default function RecuperacaoSenha() {

  const [emailRecuperacao, setEmailRecuperacao] = useState("")
  const [modalVisible, setModalVisible] = useState(false);
  async function EnviaEmailRecuperacao() {
      const respostaRecuperacao = await RecuperarSenha(emailRecuperacao);
      if (respostaRecuperacao[0].success) {
          setModalVisible(true)
        } else {
            Alert.alert(respostaRecuperacao[0].data.message);
        }
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

        <Text> Email de recuperação: </Text>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={(e) => setEmailRecuperacao(e)}
            placeholder="Email"
            keyboardType="email-address"
          />
        </View>

        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => {
            EnviaEmailRecuperacao()
          }}
        >
          <Text style={styles.textLogin}> Redefinir senha </Text>
        </TouchableOpacity>
      </View>
      <ModalCodigo modalVisible={modalVisible} emailPaciente={emailRecuperacao} setModalVisible={setModalVisible}/>
    </View>
  );
}
