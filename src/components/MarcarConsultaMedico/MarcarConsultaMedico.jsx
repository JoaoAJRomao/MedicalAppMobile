import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, StatusBar } from "react-native";
import styles from "../MarcarConsultaMedico/MarcarConsultaMedico.style";
import { Calendar, LocaleConfig } from 'react-native-calendars'
import Header from '../Header/Header'
import Background from '../Background/Background'
import moment from "moment";
import { brazilLanguage } from '../../util/LocalizacaoCalendario'
import Calendario from "./Calendario/Calendario";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MarcarHoraConsulta from './MarcarHoraConsulta';

export default function MarcarConsultaMedico(medicoEscolhido) {
  const todayIs = moment(new Date()).format("YYYY-MM-DD");
  const [dadosMedico, setDadosMedico] = useState([]);
  const [selectedDate, setSelectedDate] = useState(todayIs);
  const Tab = createMaterialTopTabNavigator();

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

        <Tab.Navigator>
          <Tab.Screen name="calendario"
            children={() => <Calendario selectedDate={selectedDate} setSelectedDate={setSelectedDate} todayIs={todayIs} />} />
          <Tab.Screen name="horarios"  component={MarcarHoraConsulta}/>
        </Tab.Navigator>        
        {/* <Calendario selectedDate={selectedDate} setSelectedDate={setSelectedDate} todayIs={todayIs} /> */}
        <TouchableOpacity
          style={styles.button}
        >
          <Text
            style={styles.textButton}
          >
            Confirmar
          </Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}
