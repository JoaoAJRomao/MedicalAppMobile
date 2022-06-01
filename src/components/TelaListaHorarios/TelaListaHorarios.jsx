import React, { useEffect, useState } from 'react'
import { FlatList, Text, Image, TouchableOpacity, View, StatusBar } from 'react-native'
import { BuscarFilaPorMedicoeDataConsulta } from '../../Services/AgendamentoService'
import { CreateWorkingTrack } from '../../util/WorkingTrackAssistant'
import moment from 'moment'
import Background from '../Background/Background';
import Header from '../Header/Header';
import styles from "../TelaMarcacao/TelaMarcacao.style";
import styles1 from "./TelaListaHorarios.style"

export default function ListaHorarios(dados) {
  const [horariosDisponiveis, setHorariosDisponiveis] = useState([])
  const [nomeMedico, setNomeMedico] = useState('')

  useEffect(async () => {
    const crm = dados.route.params.post.crm;
    const marcacao = dados.route.params.post.marcacao;
    const inicioJornada = dados.route.params.post.horaInicio;
    const terminoJornada = dados.route.params.post.horaFim;
    setNomeMedico(dados.route.params.post.nomeMedico);
    const params = {
      medicoAtual: crm,
      DataConsulta: moment(marcacao).format('DD/MM/YYYY')
    }
    //*Busca consultas marcadas para o dia selecionado
    const res = await BuscarFilaPorMedicoeDataConsulta(params)
    let consultasMarcadas = [];
    if (res[0].success === true) {
      res[0].data.forEach(e => {
        consultasMarcadas.push(e.horaConsulta)
      });
      const listaHorarios = await CreateWorkingTrack(`${inicioJornada}-${terminoJornada}`, 20, consultasMarcadas);
      setHorariosDisponiveis(adicionandoID(listaHorarios));
    } else {
      const listaHorarios = await CreateWorkingTrack(`${inicioJornada}-${terminoJornada}`, 20, consultasMarcadas);
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

        <View style={styles1.backgroundList}>
          <FlatList
            keyExtractor={(item) => item.id}
            data={horariosDisponiveis}
            renderItem={(item) =>
              <View style={styles1.backgroundTime}
              >
                <TouchableOpacity
                  onPress={() => console.log(item)}
                  style={styles1.button}
                >
                  <Text style={{ fontSize: 24 }}>{item.item.horario}</Text>
                </TouchableOpacity>
              </View>
            }
          />
        </View>

        <TouchableOpacity
          style={styles.button}
        >
          <Text
            style={styles.textButton}
          >
            Escolher Hora
          </Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}
