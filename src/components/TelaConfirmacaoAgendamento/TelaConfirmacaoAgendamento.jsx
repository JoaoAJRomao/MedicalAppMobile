import React, { useEffect, useState } from 'react';
import { Text, Image, TouchableOpacity, View, StatusBar } from 'react-native';
import Background from '../Background/Background';
import Header from '../Header/Header';
import styles from './TelaConfirmacaoAgendamento.style';
import moment from 'moment';

export default function ListaHorarios(dados) {
  const [nomeMedico, setNomeMedico] = useState('Nome medico');
  const [dataEscolhida, setDataEscolhida] = useState('');
  const [horarioEscolhido, setHorarioEscolhido] = useState('');
  const [nomeEspecialidade, setNomeEspecialidade] = useState('');

  useEffect(async () => {
    setNomeMedico(dados.route.params.post.data.nomeMedico);
    setDataEscolhida(moment(dados.route.params.post.data.dataMarcada).format('DD/MM/YYYY'));
    setHorarioEscolhido(dados.route.params.post.data.horarioEscolhido);
    setNomeEspecialidade(dados.route.params.post.data.nomeEspecialidade);
  }, [])

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

        <View style={{ backgroundColor: '#777777', borderRadius: 12, width: '90%', height: 48, justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <Text style={{ fontSize: 24, }}> Confirme sua consulta: </Text>
        </View>

        <View style={{ backgroundColor: '#FFFFFF', borderRadius: 12, width: '90%', height: 123, justifyContent: 'center', padding: 16 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
            <Text style={{ fontSize: 24, }}>{dataEscolhida}</Text>
            <Text style={{ fontSize: 24, }}>{horarioEscolhido}</Text>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', }}>
            <Text style={{ fontSize: 24, }}>{nomeMedico}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
            <Text style={{ fontSize: 24, }}>Consulta</Text>
            <Text style={{ fontSize: 24, }}>{nomeEspecialidade}</Text>
          </View>
        </View>


        <View style={styles.footer} >
          <TouchableOpacity style={styles.footerDeclineButton} >
            <Text style={{ fontSize: 24, }} > Cancelar </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerAcceptButton}
          >
            <Text style={{ fontSize: 24, }} > Confirmar </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  )
}
