import React, { useEffect, useState } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { BuscarTodasEspecialidades } from "../../Services/AgendamentoService";
import styles from './Carousel.style'

export default function Carrousel() {
  const [carousel, setcarousel] = useState([]);
  const [especialidadeEscolhida, setEspecialidadeEscolhida] = useState(0);

  useEffect(async () => {
    const especialidades = await BuscarTodasEspecialidades();
    setcarousel(especialidades[0]);
  }, []);

  const onPress = (item) => {
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
        keyExtractor={(item) => item.codigoEspecialidade}
        horizontal={true}
        data={carousel}
        renderItem={renderItem}
      />
    </View>
  );
}
