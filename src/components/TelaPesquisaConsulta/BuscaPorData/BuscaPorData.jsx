import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { brazilLanguage } from "../../../util/LocalizacaoCalendario";
import { Calendar, LocaleConfig } from "react-native-calendars";
import moment from "moment";
import { CreateWorkingTrack } from "../../../util/WorkingTrackAssistant";
import ModalHorario from "./ModalHorario";

export default function BuscaPorData() {
  const todayIs = moment(new Date()).format("YYYY-MM-DD");
  const [selectedDate, setSelectedDate] = useState(todayIs);
  const [horaSelecionadaInicio, setHoraSelecionadaInicio] = useState("");
  const [horaSelecionadaFim, setHoraSelecionadaFim] = useState("");
  const [modalInicioVisible, setModalInicioVisible] = useState(false);
  const [modalFimVisible, setmodalFimVisible] = useState(false);
  const [horariosFixo, setHorariosFixo] = useState(false);

  useEffect(async () => {
    const horarios = await CreateWorkingTrack("08:00-18:00", 20, []);
    setHorariosFixo(horarios)
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
  const [date, setDate] = useState(new Date());
  return (
    <View>
      <Calendar
        minDate={todayIs}
        enableSwipeMonths={true}
        disableAllTouchEventsForDisabledDays={true}
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
        }}
        markedDates={mark}
      />
      <View
        flexDirection="row"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <View>
          <TouchableOpacity
            onPress={() => setModalInicioVisible(!modalInicioVisible)}
          >
            <Text>Hora Inicial</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity onPress={() => setmodalFimVisible(!modalFimVisible)}>
            <Text>Hora Inicial</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <TouchableOpacity>
          <Text>Filtrar Data</Text>
        </TouchableOpacity>
      </View>
      
    <ModalHorario modalInicioVisible={modalInicioVisible} setModalInicioVisible={setModalInicioVisible} listaHorarios={horariosFixo}/>
    </View>
  );
}
