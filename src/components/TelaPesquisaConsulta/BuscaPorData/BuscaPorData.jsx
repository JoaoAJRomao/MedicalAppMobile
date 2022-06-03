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
  const [horaSelecionadaInicio, setHoraSelecionadaInicio] = useState("Hora Inicial");
  const [horaSelecionadaFim, setHoraSelecionadaFim] = useState("Hora Final");
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

  const TrazerMedicosFiltrados =() => {

  }
  
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
        style={{ alignItems: "center", justifyContent: "center" ,margintop: 20 }}
      >
          <Text style={{ fontSize: 16 }}> Defina horário: </Text>
        <View>
          <TouchableOpacity
            onPress={() => setModalInicioVisible(!modalInicioVisible)}
          >
            <View style={{width: 100, height: 50, backgroundColor: "#38B6FF", alignItems: "center", justifyContent: "center", borderRadius: 10 }}>
            <Text style={{fontSize: 16}}>{horaSelecionadaInicio}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 16 }}> até </Text>
        <View style={{ marginLeft: 2,width: 100, height: 50, backgroundColor: "#38B6FF", alignItems: "center", justifyContent: "center", borderRadius: 10 }}>
          <TouchableOpacity onPress={() => setmodalFimVisible(!modalFimVisible)}>
            <Text style={{fontSize: 16}}>{horaSelecionadaFim}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: 30, alignItems: "center", justifyContent: "center",marginLeft: "auto", marginRight: "auto" ,width: 300, height: 50, backgroundColor: "#38B6FF", borderRadius: 10 }}>
        <TouchableOpacity onPress={TrazerMedicosFiltrados}>
          <Text style={{fontSize: 18}}>Filtrar Data</Text>
        </TouchableOpacity>
      </View>

      
    <ModalHorario modalVisible={modalInicioVisible} setModalVisible={setModalInicioVisible} 
    listaHorarios={horariosFixo} sethorarioRetornado={setHoraSelecionadaInicio}/>
    
    <ModalHorario modalVisible={modalFimVisible} setModalVisible={setmodalFimVisible} 
    listaHorarios={horariosFixo} sethorarioRetornado={setHoraSelecionadaFim}/>
    </View>
  );
}
