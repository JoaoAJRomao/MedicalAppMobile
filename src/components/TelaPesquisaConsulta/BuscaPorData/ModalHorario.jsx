import React from "react";
import { FlatList, Modal, Text, TouchableOpacity, View } from "react-native";
import styles1 from "../../TelaListaHorarios/TelaListaHorarios.style";
export default function ModalHorario({
  modalVisible,
  listaHorarios,
  setModalVisible,
  sethorarioRetornado
}) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!setModalVisible);
      }}
    >
      <View
        style={{
          margin: 20,
          height: "auto",
          width: "auto",
          backgroundColor: "white",
          borderRadius: 20,
          padding: 35,
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,
        }}
      >
        <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator ={false}
          keyExtractor={(item) => item.id}
          data={listaHorarios}
          renderItem={(item) => (
            <View style={styles1.backgroundTime}>
              <TouchableOpacity
                onPress={() => {sethorarioRetornado(item.item)
                  setModalVisible(!setModalVisible)}}
                style={styles1.button}
              >
                <Text style={{ fontSize: 24 }}>{item.item}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </Modal>
  );
}
