import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import {
  BuscarDoutorPorEspecialidade,
  BuscarTodasEspecialidades,
} from "../../Services/AgendamentoService";
import BuscaPorMedico from "../BuscaPorMedico/BuscaPorMedico";
import styles from './Carousel.style'

export default function Carrousel({setSpecialty}) {
  const [carousel, setcarousel] = useState([]);
  const [carouselMedicos, setcarouselMedicos] = useState([]);
  const [especialidadeEscolhida, setEspecialidadeEscolhida] = useState(0);

  useEffect(async () => {
    const especialidades = await BuscarTodasEspecialidades();
    setcarousel(especialidades[0]);
  }, []);

  const buscarMedico = async (codigoEspecialidade) => {
    setEspecialidadeEscolhida(codigoEspecialidade);
    const doutores = await BuscarDoutorPorEspecialidade(codigoEspecialidade);
    setcarouselMedicos(doutores[0].data);
    setSpecialty(codigoEspecialidade)
  };

  return (
    <View>
      <View style={styles.carrousel}>
        <FlatList
          keyExtractor={(item) => item.codigoEspecialidade}
          data={carousel}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => buscarMedico(item.codigoEspecialidade)}
              style={styles.item}
            >
              <Text style={styles.title}>{item?.nomeEspecialidade}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
