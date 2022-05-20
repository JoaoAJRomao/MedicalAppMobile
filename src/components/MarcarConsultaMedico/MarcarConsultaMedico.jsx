import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, StatusBar } from "react-native";
import styles from "../MarcarConsultaMedico/MarcarConsultaMedico.style";
import { Calendar, LocaleConfig } from 'react-native-calendars'
import Header from '../Header/Header'
import Background from '../Background/Background'
import moment from "moment";
import { brazilLanguage } from '../../util/LocalizacaoCalendario'
import Calendario from "./Calendario/Calendario";
import MarcarHoraConsulta from './MarcarHoraConsulta';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";

export default function MarcarConsultaMedico(medicoEscolhido) {
  const Stack = createNativeStackNavigator();
  const todayIs = moment(new Date()).format("YYYY-MM-DD");
  const [dadosMedico, setDadosMedico] = useState([]);
  const [selectedDate, setSelectedDate] = useState(todayIs);
  const navigation = useNavigation()

  LocaleConfig.locales['br'] = {
    monthNames: brazilLanguage.monthNames,
    monthNamesShort: brazilLanguage.dayNamesShort,
    dayNames: brazilLanguage.dayNames,
    dayNamesShort: brazilLanguage.dayNamesShort,
    today: brazilLanguage.today
  };
  LocaleConfig.defaultLocale = 'br';

  useEffect(() => {
    const medicoParams = medicoEscolhido.route.params.post;
    setDadosMedico(medicoParams);
  }, [medicoEscolhido.route.params.post]);

  const mark = {
    [selectedDate]: { selected: true, selectedColor: '#6EC84E' },
  }

  return (
    <Background>
      <StatusBar style="light" backgroundColor="#000" translucent={false} />
      <Header hasReturn={true} />
      <Text style={styles.titleText}>
        Médico selecionado:
      </Text>

        <Stack.Navigator screenOptions={{ headerShown: false}} >
          <Stack.Screen name="calendario"
            children={() => <Calendario selectedDate={selectedDate} setSelectedDate={setSelectedDate} todayIs={todayIs} />}/>
        <Stack.Screen name="horarios"  component={MarcarHoraConsulta} /> 
        </Stack.Navigator>  

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
        
        {/* <Calendario selectedDate={selectedDate} setSelectedDate={setSelectedDate} todayIs={todayIs} /> */}
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
