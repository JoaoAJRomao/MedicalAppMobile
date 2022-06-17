import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { useState } from 'react';
import {
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  Text,
  View,
  Alert,
} from "react-native";
import { TrocarSenha } from '../../Services/ClienteService';
import styles from "../TelaLogin/Login.style";

export default function TelaTrocarSenha(dados) {
  const navigation = useNavigation()
  const [pass, setPass] = useState("")
  const [passConfirmacao, setPassConfirmacao] = useState("")

  async function trocarSenha(){

    if(pass !== ""){
    const parametros = {
      Email: dados.route.params,
      Password: pass
    }
    const respTroca = await TrocarSenha(parametros)

    if(respTroca[0]?.success === true) {
      Alert.alert("Aviso!",respTroca[0]?.message);
      navigation.navigate('login')
    }else{
      Alert.alert("Aviso!",respTroca[0]?.data?.message);
    }

  }else{
    Alert.alert("Aviso!","Senha precisa estar preenchida.");
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

        <Text> Recuperação de senha: </Text>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={(e) => setPass(e)}
            placeholder="Digite nova senha"
            secureTextEntry={true}
            maxLength={20}
          />

          <TextInput
            style={styles.input}
            onChangeText={(e) => setPassConfirmacao(e)}
            placeholder="Confirme a nova senha"
            secureTextEntry={true}
            maxLength={20}
          />
        </View>

        <TouchableOpacity
          style={{
            height: 48,
        width: 296,
        marginTop: 10,
        backgroundColor: pass === passConfirmacao ? "#38B6FF" : "#888f"  ,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center"
          }}
          onPress={() => trocarSenha()}
          disabled={pass === passConfirmacao ? false : true}
        >
          <Text style={styles.textLogin}> Redefinir senha </Text>
        </TouchableOpacity>
      </View>
    </View>


  )
}
