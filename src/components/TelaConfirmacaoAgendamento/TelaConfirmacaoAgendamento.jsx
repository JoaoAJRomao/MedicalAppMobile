import React, { useEffect, useState } from 'react';
import { Text, Image, TouchableOpacity, View, StatusBar, Alert } from 'react-native';
import Background from '../Background/Background';
import Header from '../Header/Header';
import styles from './TelaConfirmacaoAgendamento.style';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CriarNovaConsulta } from '../../Services/AgendamentoService';

export default function ListaHorarios(dados) {
  const [nomeMedico, setNomeMedico] = useState('Nome medico');
  const [dataEscolhida, setDataEscolhida] = useState('');
  const [horarioEscolhido, setHorarioEscolhido] = useState('');
  const [nomeEspecialidade, setNomeEspecialidade] = useState('');
  const [crmMedico, setCrmMedico] = useState('');
  const [especialidadeId, setEspecialidadeId] = useState('');

  useEffect(async () => {
    setNomeMedico(dados.route.params.post.data.nomeMedico);
    setDataEscolhida(moment(dados.route.params.post.data.dataMarcada).format('DD/MM/YYYY'));
    setHorarioEscolhido(dados.route.params.post.data.horarioEscolhido);
    setNomeEspecialidade(dados.route.params.post.data.nomeEspecialidade);
    setEspecialidadeId(dados.route.params.post.data.especialidadeId);
    setCrmMedico(dados.route.params.post.data.crm);
  }, [])

  async function confirmaAgendamento() {
    const params = {
      CodigoEspecialidade: especialidadeId,
      CrmMedico: crmMedico,
      DataConsulta: dataEscolhida,
      HoraConsulta: horarioEscolhido,
      IdCliente: await AsyncStorage.getItem("ID"),
      ConvenioCliente: await AsyncStorage.getItem("CONVENIO"),
    }
    const res = await CriarNovaConsulta(params);
    console.log(res);
    if (res[0].data.success) {
      return Alert.alert(res[0].data?.message);
    }
    if (res[0].response.data.success === false) {
      return Alert.alert("Aviso!", res[0].response.data?.message);
    }
    if (res[0].response.status === 401) {
      return Alert.alert("Login expirado!", 'Refaça login e repita processo');
    }
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
            <Text style={styles.text}>
              {nomeMedico}
            </Text>
          </View>
        </View>

        <View style={styles.backgroundMensagem} >
          <Text style={styles.text}> Confirme sua consulta: </Text>
        </View>

        <View style={styles.cardConfirmacao}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
            <Text style={styles.text}>{dataEscolhida}</Text>
            <Text style={styles.text}>{horarioEscolhido}</Text>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', }}>
            <Text style={styles.text}>{nomeMedico}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
            <Text style={styles.text}>Consulta</Text>
            <Text style={styles.text}>{nomeEspecialidade}</Text>
          </View>
        </View>


        <View style={styles.footer} >
          <TouchableOpacity style={styles.footerDeclineButton} >
            <Text style={styles.text} > Cancelar </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerAcceptButton}
            onPress={() => confirmaAgendamento()}
          >
            <Text style={styles.text} > Confirmar </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  )
}
