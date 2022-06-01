import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, StatusBar } from "react-native";
import styles from "./TelaMarcacao.style";
import Header from '../Header/Header'
import Background from '../Background/Background'
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import Calendario from './Calendario/Calendario';

export default function MarcarConsultaMedico(medicoEscolhido) {
  const todayIs = moment(new Date()).format("YYYY-MM-DD");
  const [dadosMedico, setDadosMedico] = useState([]);
  const [selectedDate, setSelectedDate] = useState(todayIs);
  const navigation = useNavigation()
  const data = {
    crm: dadosMedico.crm,
    marcacao: selectedDate,
    horaInicio: dadosMedico.horarioAtendimentoInicial,
    horaFim: dadosMedico.horarioAtendimentoFinal,
    nomeMedico: dadosMedico.nomeMedico
  }
  useEffect(() => {
    const medicoParams = medicoEscolhido.route.params.post;
    setDadosMedico(medicoParams);
  }, [medicoEscolhido.route.params.post]);

  return (
    <Background>
      <StatusBar style="light" backgroundColor="#000" translucent={false} />
      <Header hasReturn={true} />
      <Text style={styles.titleText}>
        Médico selecionado:
      </Text>
      <View style={styles.content}>
        <View style={styles.organizerHeader}>
          <Image
            style={styles.genericImage}
            source={require("@expo/../../assets/medico.png")}
            resizeMode="contain" />
          <View
            style={styles.card}>
            <Text style={styles.textMedic}>
              {dadosMedico?.nomeMedico}
            </Text>
          </View>
        </View>
        <Calendario selectedDate={selectedDate} setSelectedDate={setSelectedDate} todayIs={todayIs} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate({
            name: 'TelaListaHorarios',
            params: { post: data },
            merge: true,
          })}
        >
          <Text style={styles.textButton} > Escolher Data </Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}
