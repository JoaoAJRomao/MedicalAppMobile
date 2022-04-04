import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, TextInput, TouchableOpacity, Text, Image } from 'react-native'

export default function CadastroCliente() {

  const [textCpf, setTextCpf] = useState(null);
  const [textNome, setTextNome] = useState(null);
  const [textSenha, setTextSenha] = useState()
  const [textConfirmacao, setTextConfirmacao] = useState(null);
  const [textEmail, setTextEmail] = useState(null);
  const [textDataNascimento, setTextDataNascimento] = useState(null);
  const [textPlano, setTextPlano] = useState(null);


  return (<View style={styles.container}>
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ marginBottom: 20 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 30,
          marginTop: 30
        }}
      >
        <Image
          style={styles.tinyLogo}
          source={require("@expo/../../assets/MedicalAppIcon2.png")}
        />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={setTextCpf}
        placeholder=" Digite seu CPF"
        value={textCpf}
      />
      <TextInput
        style={styles.input}
        onChangeText={setTextNome}
        placeholder=" Digite seu Nome Completo"
        value={textNome}
      />
      <TextInput
        style={styles.input}
        onChangeText={setTextSenha}
        placeholder=" Digite sua senha"
        value={textSenha}
      />
      <TextInput
        style={styles.input}
        onChangeText={setTextConfirmacao}
        placeholder=" Confirme sua senha"
        value={textConfirmacao}
      />
      <TextInput
        style={styles.input}
        onChangeText={setTextEmail}
        placeholder=" Digite seu e-mail"
        value={textEmail}
      />
      <TextInput
        style={styles.input}
        onChangeText={setTextDataNascimento}
        placeholder=" Digite sua Data de Nascimento"
        value={textDataNascimento}
      />
      <TextInput
        style={styles.input}
        onChangeText={setTextPlano}
        placeholder=" Digite seu Plano"
        value={textPlano}
      />

      <TouchableOpacity style={styles.buttonCadastro}>
        <Text style={styles.textCadastro}>Criar Conta</Text>
      </TouchableOpacity>
    </ScrollView>
  </View>);
}


const styles = StyleSheet.create({
  input: {
    height: 48,
    width: 320,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 12,
    padding: 10,
    backgroundColor: "#ffff"
  }, tinyLogo: {
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
    fontWeight: "bold"
  }, tinyLogo: {
    width: 155,
    height: 155
  },

});