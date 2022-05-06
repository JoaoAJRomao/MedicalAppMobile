import React, { useEffect, useState } from "react";
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { BuscarDoutorPorEspecialidade, BuscarTodasEspecialidades } from "../../Services/AgendamentoService";

export default function Carrousel() {
  const [carousel, setcarousel] = useState([]);
  const [carouselMedicos, setcarouselMedicos] = useState([]);
  const [especialidadeEscolhida, setEspecialidadeEscolhida] = useState(0);
  //const [medicosPorEspecialidade, setmedicosPorEspecialidade] = useState([]);

  useEffect(async () => {
    const especialidades = await BuscarTodasEspecialidades();
    setcarousel(especialidades[0]);
  }, []);

  const buscarMedico = async (codigoEspecialidade) =>{
   setEspecialidadeEscolhida(codigoEspecialidade)
   const doutores = await BuscarDoutorPorEspecialidade(codigoEspecialidade)
   setcarouselMedicos(doutores[0].data)
  }

  return (
  <View style={styles.View}>
    <View style={styles.carrousel}>
      <FlatList
        keyExtractor={(item) => item.codigoEspecialidade}
        data={carousel}
        horizontal={true}
        renderItem={({item}) => (
          <TouchableOpacity
               onPress={()=> buscarMedico(item.codigoEspecialidade)}
               style={styles.item}
             >
               <Text style={styles.title}>{item?.nomeEspecialidade}</Text>
             </TouchableOpacity>)}
      />
    </View>

   <View style={styles.carrousel}>
      <FlatList
        keyExtractor={(item) => item.crm}
        data={carouselMedicos}
        renderItem={({item}) => (
          <TouchableOpacity
               onPress={()=> console.log(item)}
               style={styles.item}
             >
               <Text style={styles.title}>{item?.nomeMedico}</Text>
             </TouchableOpacity>)}
      />
    </View> 
  </View>
  );
}

const styles = StyleSheet.create({
  View:{
    flex: 1
  },
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
}, carrouselMedicos: {
  flex: 5, 
  alignItems: "center",
}
});
