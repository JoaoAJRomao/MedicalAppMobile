import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, StatusBar } from "react-native";
import styles from "./TelaMarcacao.style";
import Header from '../Header/Header'
import Background from '../Background/Background'
import moment from "moment";
import Calendario from "./Calendario/Calendario";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";
import ListaHorarios from './ListaHorarios/ListaHorarios';

export default function MarcarConsultaMedico(medicoEscolhido) {
  const Stack = createNativeStackNavigator();
  const todayIs = moment(new Date()).format("YYYY-MM-DD");
  const [dadosMedico, setDadosMedico] = useState([]);
  const [selectedDate, setSelectedDate] = useState(todayIs);
  const navigation = useNavigation()

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
        <View style={styles.contentShared}>
          <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="calendario"
              children={() => <Calendario selectedDate={selectedDate} setSelectedDate={setSelectedDate} todayIs={todayIs} />} />
            <Stack.Screen name="horarios"
              children={() => <ListaHorarios dadosMedico={dadosMedico} crm={dadosMedico.crm} selectedDate={selectedDate}/>} />
          </Stack.Navigator>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('horarios')}
        >
          <Text
            style={styles.textButton}
          >
            Escolher Data
          </Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}
