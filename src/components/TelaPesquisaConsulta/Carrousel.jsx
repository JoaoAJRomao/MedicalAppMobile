import React, { useEffect, useState } from "react";
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { BuscarTodasEspecialidades } from "../../Services/AgendamentoService";

export default function Carrousel() {
  const [carousel, setcarousel] = useState([]);
  const [especialidadeEscolhida, setEspecialidadeEscolhida] = useState(0);

  useEffect(async () => {
    const especialidades = await BuscarTodasEspecialidades();
    setcarousel(especialidades[0]);
  }, []);

  const onPress = (item) =>{
    setEspecialidadeEscolhida(item)
  }

  const Item = ({ title }) => (
    <TouchableOpacity
    style={styles.item}
    onPress={onPress(title)}
  > 
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => <Item title={item?.nomeEspecialidade} />;

  return (
    <View style={styles.carrousel}>
      <FlatList
        data={carousel}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={(item) => item.codigoEspecialidade}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    width: 150,
    height: 50,
    marginHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
  }, 
  carrousel: {
  flex: 1, 
  flexDirection: "row", 
  justifyContent: "center",
  marginTop: 10
}
});
