import React, { useEffect, useState } from 'react'
import { FlatList, Text, Image, TouchableOpacity, View, StatusBar } from 'react-native'
import { BuscarFilaPorMedicoeDataConsulta } from '../../../Services/AgendamentoService'
import { CreateWorkingTrack } from '../../../util/WorkingTrackAssistant'
import moment from 'moment'
import Background from '../../Background/Background';
import Header from '../../Header/Header';
import styles from "../../TelaListaHorarios/TelaListaHorarios.style"

export default function ListaHorariosFiltro(dados) {
  const [horariosDisponiveis, setHorariosDisponiveis] = useState([])
  const [nomeMedico, setNomeMedico] = useState('')

  useEffect(async () => {
    const crm = dados.route.params.crm;
    const marcacao = dados.route.params.horarioFiltro.Data;
    const rangeDate = `${dados?.route?.params.horarioFiltro.HoraInicial}-${dados?.route?.params.horarioFiltro.HoraFim}`
    setNomeMedico(dados.route.params.nomeMedico);
    const params = {
      medicoAtual: crm,
      DataConsulta: marcacao
    }
    //*Busca consultas marcadas para o dia selecionado
    const res = await BuscarFilaPorMedicoeDataConsulta(params)
    let consultasMarcadas = [];
    if (res[0].success === true) {
      res[0].data.forEach(e => {
        consultasMarcadas.push(e.horaConsulta)
      });
      const listaHorarios = await CreateWorkingTrack(rangeDate, 20, consultasMarcadas);
      setHorariosDisponiveis(adicionandoID(listaHorarios));
    } else {
      const listaHorarios = await CreateWorkingTrack(rangeDate, 20, consultasMarcadas);
      setHorariosDisponiveis(adicionandoID(listaHorarios));
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
              {nomeMedico}
            </Text>
          </View>
        </View>
        <Text style={styles.titleText}>
          Escolha o horário
        </Text>
        <View style={styles.backgroundList}>
          <FlatList
            keyExtractor={(item) => item.id}
            data={horariosDisponiveis}
            showsVerticalScrollIndicator ={false}
            renderItem={(item) =>
              <View style={styles.backgroundTime}
              >
                <TouchableOpacity
                  onPress={() => console.log(item)}
                  style={styles.button}
                >
                  <Text style={{ fontSize: 24 }}>{item.item.horario}</Text>
                </TouchableOpacity>
              </View>
            }
          />
        </View>

        <View style={styles.footer} >
          <TouchableOpacity style={styles.footerDeclineButton} >
            <Text style={{ fontSize: 24, }} > Cancelar </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerAcceptButton} >
            <Text style={{ fontSize: 24, }} > Confirmar </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  )
}
