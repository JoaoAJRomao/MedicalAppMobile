import React, { useEffect } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { BuscarFilaPorMedicoeDataConsulta } from '../../../Services/AgendamentoService'
import moment from 'moment'

export default function ListaHorarios({ dadosMedico, selectedDate }) {
  const mock = [
    {
      codigoConsulta: 105,
      codigoEspecialidade: 5,
      convenioCliente: "unimed",
      crmMedico: 12345,
      dataConsulta: "21/05/2022",
      horaConsulta: "07:00",
      idCliente: 45,
    },
    {
      codigoConsulta: 155,
      codigoEspecialidade: 5,
      convenioCliente: "unimed",
      crmMedico: 12345,
      dataConsulta: "21/05/2022",
      horaConsulta: "09:00",
      idCliente: 45,
    },
    {
      codigoConsulta: 185,
      codigoEspecialidade: 5,
      convenioCliente: "unimed",
      crmMedico: 12345,
      dataConsulta: "21/05/2022",
      horaConsulta: "10:00",
      idCliente: 45,
    }
  ]

  useEffect(async () => {
    const params = {
      medicoAtual: dadosMedico.crm,
      DataConsulta: moment(selectedDate).format('DD/MM/YYYY')
    }
    const consultasMarcadas = await BuscarFilaPorMedicoeDataConsulta(params)
    console.log(dadosMedico)
    console.log(consultasMarcadas)
  }, [])

  function createWorkingTrack(timeSchedule, intervalTime) {
    timeSchedule = timeSchedule.split("-");
    var start = parseInt(timeSchedule[0], 10);
    var end = parseInt(timeSchedule[1], 10);
    var workingTrack = [];
    for (let hours = start; hours < end; hours++) {
      for (let minutes = 0; minutes < 60; minutes += intervalTime) {
        var date = new Date();
        date.setHours(hours);
        date.setMinutes(minutes);
        var schedule = ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2);
        workingTrack.push(schedule);
      }
    }
    if (workingTrack.length !== 0 && guardarHorariosOcupados.length !== 0) {
      let horasNaoMarcadas = workingTrack.filter(a => !guardarHorariosOcupados.includes(a))
      return horasNaoMarcadas
    }
    return workingTrack;
  }
  
  return (
    <View>
      <View style={{ width: 315, height: 50, borderRadius: 12 }}>
        <Text>
          Escolha um horário disponível:
        </Text>
      </View>

      <View style={{
        width: 320, height: 310, borderRadius: 12, alignItems: 'center', justifyContent: 'center',
      }}>
        <FlatList
          keyExtractor={(item) => item.codigoConsulta}
          data={mock}
          renderItem={(item) =>
            <View style={{
              height: 50,
              backgroundColor: '#DDD',
              margin: 7,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            >
              <TouchableOpacity
                onPress={() => console.log(item)}
                style={{ width: 250, height: 50, marginVertical: 15, marginLeft: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}
              >
                <Text style={{ marginLeft: 10, fontSize: 18 }}>{item.item.horaConsulta}</Text>
              </TouchableOpacity>
            </View>
          }
        />
      </View>
    </View>
  )
}
