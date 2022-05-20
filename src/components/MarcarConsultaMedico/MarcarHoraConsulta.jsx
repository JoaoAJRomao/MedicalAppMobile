import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'

export default function MarcarHoraConsulta() {
  const oi = {
    id: '1',
    oi: 'socorro'
  }

  return (
    <View>
      <View style={{ width: 315, height: 50, borderRadius: 12 }}>
        <Text>
          Escolha um horário disponível:
        </Text>
      </View>

      <View style={{ width: 320, height: 310, borderRadius: 12 }}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={oi}
          renderItem={(item) =>
            <TouchableOpacity
              onPress={() => console.log(item)}
              style={{ width: 250, height: 50, marginVertical: 15, marginLeft: 10, backgroundColor: "#FFFF", justifyContent: 'center', borderRadius: 10 }}
            >
              <Text style={{ marginLeft: 10, fontSize: 18 }}>{item?.oi}</Text>
            </TouchableOpacity>
          }
        />
      </View>
    </View>
  )
}
