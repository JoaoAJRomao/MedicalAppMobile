import React from "react";
import { useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Background from "../Background/Background";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function TelaPerfil() {
  const [nomeCliente, setNomeCliente] = useState("");
  const [convenio, setConvenio] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
  useEffect(async () => {
    setNomeCliente(await AsyncStorage.getItem("NOME_CLIENTE"));
    setConvenio(await AsyncStorage.getItem("CONVENIO"));
    setCpf(await AsyncStorage.getItem("CPF"));
    setEmail(await AsyncStorage.getItem("EMAIL"));
  }, []);

  async function deslogar() {
    await AsyncStorage.removeItem("TOKEN")
    await AsyncStorage.removeItem("NOME_CLIENTE")
    await AsyncStorage.removeItem("CONVENIO")
    await AsyncStorage.removeItem("CPF")
    await AsyncStorage.removeItem("EMAIL")
    navigation.navigate("login");
  }

  return (
    <Background>
      <View>
        <View style={styles.viewImage}>
          <Image
            source={require("../../../assets/avatar.png")}
            style={{ width: 105, height: 103 }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.viewInputs}>
          <Text style={{ fontSize: 20, marginBottom: 20 }}>
            SEUS DADOS CADASTRADOS
          </Text>
            <View style={styles.textInput}>
                <Text style={styles.txtDados}>{nomeCliente}</Text>
            </View>

            <View style={styles.textInput}>
                <Text style={styles.txtDados}>{cpf}</Text>
            </View>

            <View style={styles.textInput}>
                <Text style={styles.txtDados}>{email}</Text>
            </View>

            <View style={styles.textInput}>
                <Text style={styles.txtDados}>{convenio}</Text>
            </View>

      <TouchableOpacity style={styles.botaoSair} onPress={() => deslogar()}>
            <Text style={{ fontSize: 18 }}> Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 48,
    width: 296,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 12,
    padding: 10,
    backgroundColor: "#ffff",
  },
  viewImage: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  viewInputs: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  botaoSair: {
    height: 48,
    width: 296,
    marginTop: 10,
    backgroundColor: "#38B6FF",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  }, txtDados:
  {
    fontSize: 14, 
    marginTop: "auto", 
    marginBottom: "auto"
  }
});
