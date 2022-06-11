import React, { useEffect, useState } from "react";
import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import { CreateWorkingTrack } from "../../../util/WorkingTrackAssistant";
import styles from "../BuscaPorMedico/BuscaPorMedico.style";

export default function MedicosFiltrados(dados) {

useEffect(async () =>{
  let consultasMarcadas = [];
   console.log(dados)
   dados?.route?.params.listaConsulta.forEach(e => {
    consultasMarcadas.push(e.horaConsulta)
  });
   const horariosDisponiveis = await CreateWorkingTrack( dados?.route?.params.horarioRange, 20, consultasMarcadas);

   console.log(horariosDisponiveis)

},[])

  return (
    <View style={styles.mainView}>
      <FlatList
        keyExtractor={(item) => item.crm}
        data={dados?.route?.params}
        renderItem={({ item }) => (
          <View style={styles.box}>
            <Image
              style={styles.headerIcons}
              source={require("@expo/../../assets/medico.png")}
              resizeMode="contain"
            />
            <TouchableOpacity
              onPress={() =>
                navigation.navigate({
                  name: "TelaMarcacao",
                  params: { post: item },
                  merge: true,
                })
              }
              style={{
                width: 250,
                height: 50,
                marginVertical: 15,
                marginLeft: 10,
                backgroundColor: "#FFFF",
                justifyContent: "center",
                borderRadius: 10,
              }}
            >
              <Text style={{ marginLeft: 10, fontSize: 18 }}>
                {item?.nomeMedico}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
