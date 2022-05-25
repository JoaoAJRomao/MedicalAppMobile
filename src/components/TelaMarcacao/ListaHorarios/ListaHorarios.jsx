import React, { useEffect, useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { BuscarFilaPorMedicoeDataConsulta } from '../../../Services/AgendamentoService'
import { CreateWorkingTrack } from '../../../util/WorkingTrackAssistant'
import moment from 'moment'

export default function ListaHorarios({ dadosMedico, selectedDate }) {
  const [horariosDisponiveis, setHorariosDisponiveis] = useState([])

  useEffect(async () => {
    const params = {
      medicoAtual: dadosMedico.crm,
      DataConsulta: moment(selectedDate).format('DD/MM/YYYY')
    }
    //*Busca consultas marcadas para o dia selecionado
    const res = await BuscarFilaPorMedicoeDataConsulta(params)
    let consultasMarcadas = [];
    if (res[0].success === true) {
      res[0].data.forEach(e => {
        consultasMarcadas.push(e.horaConsulta)
      });
      const listaHorarios = await CreateWorkingTrack(`${dadosMedico.horarioAtendimentoInicial}-${dadosMedico.horarioAtendimentoFinal}`, 20, consultasMarcadas);      
      setHorariosDisponiveis(adicionandoID(listaHorarios));
      console.log(horariosDisponiveis);
    } else {
      setHorariosDisponiveis([''])
    }
  }, [])

  function adicionandoID(lista) {
    let count = 0;
    let array = [];
    lista.map(item => {
      array.push({
        id: count++,
        horario: item
      })
    });
    return array;
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
          keyExtractor={(item) => item.id}
          data={horariosDisponiveis}
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
                <Text style={{ marginLeft: 10, fontSize: 18 }}>{item.item.horario}</Text>
              </TouchableOpacity>
            </View>
          }
        />
      </View>
    </View>
  )
}
