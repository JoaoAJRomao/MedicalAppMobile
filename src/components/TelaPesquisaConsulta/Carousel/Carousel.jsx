import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
import { BuscarTodasEspecialidades } from "../../../Services/AgendamentoService";
import styles from './Carousel.style'

export default function Carrousel({ setSpecialty, setSpecialtyName }) {
  const [carousel, setcarousel] = useState([]);
  const [especialidadeEscolhida, setEspecialidadeEscolhida] = useState(0);

  useEffect(async () => {
    const especialidades = await BuscarTodasEspecialidades();
    setcarousel(especialidades[0]);
  }, []);

  const buscarMedico = async (codigoEspecialidade, nomeEspecialidade) => {
    setEspecialidadeEscolhida(codigoEspecialidade);
    setSpecialty(codigoEspecialidade)
    setSpecialtyName(nomeEspecialidade);
  };

  return (
    <View>
      <View style={styles.carrousel}>
        <FlatList
          keyExtractor={(item) => item.codigoEspecialidade}
          data={carousel}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          extraData={especialidadeEscolhida}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => buscarMedico(item.codigoEspecialidade, item.nomeEspecialidade)}
              style={styles.item}
            >
              <Text style={[styles.title, item.codigoEspecialidade == especialidadeEscolhida ? styles.titleSelected : styles.title]}>{item?.nomeEspecialidade}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
