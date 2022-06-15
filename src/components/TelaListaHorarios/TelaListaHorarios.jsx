import React, { useEffect, useState } from 'react'
import { FlatList, Text, Image, TouchableOpacity, View, StatusBar } from 'react-native'
import { BuscarFilaPorMedicoeDataConsulta } from '../../Services/AgendamentoService'
import { CreateWorkingTrack } from '../../util/WorkingTrackAssistant'
import moment from 'moment'
import Background from '../Background/Background';
import Header from '../Header/Header';
import styles from "./TelaListaHorarios.style"
import { useNavigation } from "@react-navigation/native";

export default function ListaHorarios(dados) {
  const [horariosDisponiveis, setHorariosDisponiveis] = useState([])
  const [nomeMedico, setNomeMedico] = useState('')
  const [horarioEscolhido, setHorarioEscolhido] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const data = {
    crm: dados.route.params.post.crm,
    nomeMedico: nomeMedico,
    dataMarcada: dados.route.params.post.marcacao,
    horarioEscolhido: horarioEscolhido,
    nomeEspecialidade: dados.route.params.post.nomeEspecialidade,
    especialidadeId: dados.route.params.post.especialidadeId
  }

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
        <Text style={styles.titleText}>
          Escolha o horário
        </Text>
        <View style={styles.backgroundList}>
          <FlatList
            keyExtractor={(item) => item.id}
            data={horariosDisponiveis}
            extraData={selectedId}
            showsVerticalScrollIndicator={false}


            renderItem={(item) =>
              // <View style={styles.backgroundTime}
              <View style={[item.item.id === selectedId ? styles.backgroundTimeSelected : styles.backgroundTime]}
              >
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    setHorarioEscolhido(item.item.horario)
                    setSelectedId(item.item.id);
                  }}
                >
                  <Text style={{ fontSize: 24 }}>{item.item.horario}</Text>
                </TouchableOpacity>
              </View>
            }


          />
        </View>

        <View style={styles.footer} >
          {horarioEscolhido === '' ? <SelecioneHorario /> : <HorarioJaSelecionado data={data} />}
        </View>
      </View>
    </Background >
  )
}

const SelecioneHorario = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#38B6FF',
        borderRadius: 12,
        width: '100%',
        height: '70%',
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontSize: 24, textAlign: 'center', }}>Escolha o horario</Text>
    </TouchableOpacity>
  )
}

const HorarioJaSelecionado = (data) => {
  const navigation = useNavigation()
  return (
    <>
      <TouchableOpacity style={styles.footerDeclineButton}>
        <Text style={{ fontSize: 24, }}> Cancelar </Text>
      </TouchableOpacity><TouchableOpacity style={styles.footerAcceptButton}
        onPress={() => navigation.navigate({
          name: 'ConfirmacaoAgendamento',
          params: { post: data },
          merge: true,
        })}
      >
        <Text style={{ fontSize: 24, }}> Confirmar </Text>
      </TouchableOpacity>
    </>
  )
}