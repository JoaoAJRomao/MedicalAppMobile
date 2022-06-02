import React from 'react'
import { FlatList, Modal, Text, TouchableOpacity, View } from 'react-native';
import styles1 from '../../TelaListaHorarios/TelaListaHorarios.style'
export default function ModalHorario({modalInicioVisible, listaHorarios, setModalInicioVisible}) {
  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={modalInicioVisible}
        onRequestClose={() => {
            setModalInicioVisible(!modalInicioVisible);
        }}
      >
<FlatList
            keyExtractor={(item) => item.id}
            data={listaHorarios}
            renderItem={(item) =>
              <View style={styles1.backgroundTime}
              >
                <TouchableOpacity
                  onPress={() => console.log(item)}
                  style={styles1.button}
                >
                  <Text style={{ fontSize: 24 }}>{item.item}</Text>
                </TouchableOpacity>
              </View>
            }
          />

      </Modal>
  )
}
