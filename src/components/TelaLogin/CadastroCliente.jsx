import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, TextInput, TouchableOpacity, Text, Image } from 'react-native'
import { Select, NativeBaseProvider } from 'native-base';
import { MaskedTextInput } from 'react-native-mask-text';

export default function CadastroCliente() {

  const [textCpf, setTextCpf] = useState(null);
  const [textNome, setTextNome] = useState(null);
  const [textSenha, setTextSenha] = useState()
  const [textConfirmacao, setTextConfirmacao] = useState(null);
  const [textEmail, setTextEmail] = useState(null);
  const [textDataNascimento, setTextDataNascimento] = useState(null);
  const [selectPlano, setSelectPlano] = useState(null);

  return (
  <NativeBaseProvider>
  <View style={styles.container}>
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
      <MaskedTextInput
        style={styles.input}
        onChangeText={setTextCpf}
        placeholder=" Digite seu CPF"
        mask="999.999.999-99"
        value={textCpf}
      />
      <TextInput
        style={styles.input}
        onChangeText={setTextNome}
        placeholder=" Digite seu Nome Completo"
        value={textNome}
        keyboardType="ascii-capable"
      />
      <TextInput
        style={styles.input}
        onChangeText={setTextSenha}
        placeholder=" Digite sua senha"
        secureTextEntry={true}
        maxLength="20"
        value={textSenha}
      />
      <TextInput
        style={styles.input}
        onChangeText={setTextConfirmacao}
        placeholder=" Confirme sua senha"
        secureTextEntry={true}
        maxLength="20"
        value={textConfirmacao}
      />
      <TextInput
        style={styles.input}
        onChangeText={setTextEmail}
        placeholder=" Digite seu e-mail"
        keyboardType="email-address"
        value={textEmail}
      />
      <TextInput
        style={styles.input}
        onChangeText={setTextDataNascimento}
        placeholder=" Digite sua Data de Nascimento"
        value={textDataNascimento}
      />
      
      
    <Select onValueChange={itemValue => setSelectPlano(itemValue)} style={{backgroundColor: '#FFFF'}}>
     <Select.Item label="Hapvida" value="hapvida" />
     <Select.Item label="Unimed" value="unimed" />
     <Select.Item label="Bradesco" value="bradesco" />
     </Select> 

      <TouchableOpacity style={styles.buttonCadastro}>
        <Text style={styles.textCadastro}>Criar Conta</Text>
      </TouchableOpacity>
    </ScrollView>
  </View>
  </NativeBaseProvider>);
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