import React, { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import styles from "../BuscaPorMedico/BuscaPorMedico.style";
import {Calendar} from 'react-native-calendars'

export default function MarcarConsultaMedico(medicoEscolhido) {
  const [dadosMedico, setDadosMedico] = useState([]);

  useEffect(() => {
    const medicoParams = medicoEscolhido.route.params.post;
    setDadosMedico(medicoParams);
  }, [medicoEscolhido.route.params.post]);

  return (
      <View style={{ 
        alignItems: "center",
        flex: 1,
        margin:8}}>
        <Text style={{fontSize: 15 }}>
          Médico selecionado:
        </Text>
        <Image
          style={styles.headerIcons}
          source={require("@expo/../../assets/medico.png")}
          resizeMode="contain"/>
        <View
          style={{width: 225,
            height: 50,
            marginVertical: 15,
            marginLeft: 10,
            backgroundColor: "#FFFF",
            justifyContent: "center",
            borderRadius: 10,
            alignItems: "center"
          }}>
        <Text style={{fontSize: 20 }}>
          {dadosMedico?.nomeMedico}
        </Text>
        </View>

          <View>
          <Calendar />
          </View>

      </View>
  );
}
