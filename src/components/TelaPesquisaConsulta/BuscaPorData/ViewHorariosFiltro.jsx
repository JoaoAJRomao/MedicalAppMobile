import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
export default function ViewHorariosFiltro({
  listaHorarios,
  sethorarioRetornado,
  tipo
}) {
  return (
      <View style={{width: 160, height: 260, backgroundColor: '#ffff', alignItems: 'center'}}>
        <View  style={{
                  width: "100%",
                  height: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 2,
                  backgroundColor: '#C9D5D9'
                }}>
        <Text style={{ fontSize: 20}}>{tipo}</Text>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={listaHorarios}
          renderItem={(item) => (
            <View>
              
              <TouchableOpacity
                onPress={() => {
                  sethorarioRetornado(item.item)
                }}
                style={{
                  width: 100,
                  height: 30,
                  marginVertical: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 3,
                  backgroundColor: '#C9D5D9'
                }}
              >
                <Text style={{ fontSize: 18 }}>{item.item}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
  );
}
