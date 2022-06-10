import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { brazilLanguage } from "../../../util/LocalizacaoCalendario";
import { Calendar, LocaleConfig } from "react-native-calendars";
import moment from "moment";
import { CreateWorkingTrack } from "../../../util/WorkingTrackAssistant";
import ViewHorariosFiltro from "./ViewHorariosFiltro";
import { ConsultaPorFiltroData } from "../../../Services/AgendamentoService";
import { useNavigation } from "@react-navigation/native";

export default function BuscaPorData({ specialty }) {
  const navigation = useNavigation()
  const todayIs = moment(new Date()).format("YYYY-MM-DD");
  const [selectedDate, setSelectedDate] = useState(todayIs);
  const [horaSelecionadaInicio, setHoraSelecionadaInicio] = useState("Hora Inicial");
  const [horaSelecionadaFim, setHoraSelecionadaFim] = useState("Hora Final");
  const [modalInicioVisible, setModalInicioVisible] = useState(false);
  const [modalFimVisible, setmodalFimVisible] = useState(false);
  const [horariosFixo, setHorariosFixo] = useState(false);

  useEffect(async () => {
    const horarios = await CreateWorkingTrack("08:00-18:00", 20, []);
    setHorariosFixo(horarios);
  }, [selectedDate]);

  LocaleConfig.locales["br"] = {
    monthNames: brazilLanguage.monthNames,
    monthNamesShort: brazilLanguage.dayNamesShort,
    dayNames: brazilLanguage.dayNames,
    dayNamesShort: brazilLanguage.dayNamesShort,
    today: brazilLanguage.today,
  };
  LocaleConfig.defaultLocale = "br";
  const mark = {
    [selectedDate]: { selected: true, selectedColor: "#38B6FF" },
  };

  const TrazerMedicosFiltrados = async () => {
    let dataBrasileira = selectedDate.split("-").reverse().join("/");

    const horarioFiltro = {
      HoraInicial: '08:00'  /*horaSelecionadaInicio*/,
      HoraFim: '17:00' /*horaSelecionadaFim*/,
      Data: '27/06/2022' /*dataBrasileira*/,
    };
    const consultasDoFiltro = await ConsultaPorFiltroData(horarioFiltro);
    const listaConsultaPorEspecialidade = consultasDoFiltro[0]?.filter(
      (item) => item.codigoEspecialidade === specialty
    );
    navigation.navigate({
      name: 'MedicosFiltrados',
      params: { post: listaConsultaPorEspecialidade },
      merge: true
    })
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <Calendar
        minDate={todayIs}
        enableSwipeMonths={true}
        disableAllTouchEventsForDisabledDays={true}
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
        }}
        markedDates={mark}
      />

      <View flexDirection="row" style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
        <ViewHorariosFiltro
          listaHorarios={horariosFixo}
          sethorarioRetornado={setHoraSelecionadaInicio}
          tipo="Inicio"
        />
        <View style={{ marginLeft: 30 }}>
          <ViewHorariosFiltro
            listaHorarios={horariosFixo}
            sethorarioRetornado={setHoraSelecionadaFim} tipo="Final"
          />
        </View>
      </View>


      <View
        style={{
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "auto",
          marginRight: "auto",
          width: 200,
          height: 50,
          backgroundColor: "#38B6FF",
          borderRadius: 10,
        }}
      >
        <TouchableOpacity onPress={TrazerMedicosFiltrados}>
          <Text style={{ fontSize: 18 }}>Filtrar Data</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
