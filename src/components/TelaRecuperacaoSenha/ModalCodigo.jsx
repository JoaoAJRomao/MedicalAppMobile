import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from "react-native";
import { ConfirmarCodigo } from "../../Services/ClienteService";

const ModalCodigo = ({modalVisible, setModalVisible, emailPaciente}) => {
  const [codigo, setCodigo] = useState("");
  const navigation = useNavigation()

  async function confirmarCodigo(){
    const recuperacaoSenha = {
        Codigo: codigo,
        Email: emailPaciente
    }
   const respostaCodigo = await ConfirmarCodigo(recuperacaoSenha)

   if(respostaCodigo[0]?.success === true) {
    setModalVisible(false)
    navigation.navigate({
        name: 'TelaTrocarSenha',
        params: emailPaciente,
        merge: true
      })
   }else{
    Alert.alert(respostaCodigo[0]?.data?.message);
   }


  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Insira o código enviado ao Email !</Text>
            <TextInput style={styles.input} 
            onChangeText={(e)=> setCodigo(e)}/>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => 
                confirmarCodigo()}
            >
              <Text style={styles.textStyle}>Confirmar código</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }, 
  input: {
    height: 48,
    width: 296,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 12,
    padding: 10,
    backgroundColor: "#ffff",
    borderWidth: 1
}
});

export default ModalCodigo;