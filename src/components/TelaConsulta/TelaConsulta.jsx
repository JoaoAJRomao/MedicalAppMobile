import React, { useState, useEffect } from 'react';
import {
    View,
    Image,
    Text,
    StatusBar,
    TouchableOpacity,
    FlatList,
    Alert
} from 'react-native'
import { useNavigation, useIsFocused } from "@react-navigation/native";
import styles from './TelaConsulta.style'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ConsultaPorId, DeletarConsultaPorId } from '../../Services/AgendamentoService';
import Header from '../Header/Header'
import Background from '../Background/Background'

export default function TelaConsulta(props) {
    const navigation = useNavigation()
    const [nome, setNome] = useState("")
    const [id, setId] = useState("")
    const [token, setToken] = useState("")
    const [consulta, setConsulta] = useState([])
    const isFocused = useIsFocused();

    useEffect(async () => {
        const cliente = await AsyncStorage.getItem("NOME_CLIENTE")
        const idCliente = await AsyncStorage.getItem("ID")
        const tokenclient = await AsyncStorage.getItem("TOKEN")
        setNome(cliente)
        setId(idCliente)
        setToken(tokenclient)
        await carregarLista(idCliente, tokenclient)
    }, [props, isFocused])

    function goTo() {
        navigation.navigate('exibirconsulta')
    }

    function verificarDataConsulta(data, hora) {
        const mes = parseInt(data.substr(3,2))
        const dia = parseInt(data.substr(0,2))
        const diaAtual = new Date().getUTCDate()
        const mesAtual = new Date().getUTCMonth()+1

        if(mesAtual > mes){
            return "Consulta já realizada"
        }else if(dia === diaAtual && mesAtual === mes){
            return `Consulta Hoje`  
        }     
        else{
            if(diaAtual > dia){
                return "Consulta já realizada"
            }
            else{
                return "Consulta Marcada"
            }
        }
    }

    async function carregarLista(idCliente, tokenclient) {
        const params = {
            idClient: idCliente,
            token: tokenclient
        }
        const res = await ConsultaPorId(params)
        setConsulta(res[0])
    }

    const clickConsulta = (dados) => {
        console.log(dados)
        Alert.alert(
            'Cancelamento de Consulta',
            'Deseja cancelar a consulta ?',
            [
                {
                    text: 'Sim',
                    onPress: async () => {
                        await DeletarConsultaPorId(dados.codigoConsulta)
                        setConsulta(consulta.filter(item => item.codigoConsulta !== dados.codigoConsulta))
                    }
                },
                {
                    text: 'Não',
                    onPress: () => console.log('Não Cancelou'),
                    style: 'cancel',
                },
            ],
            { cancelable: false }
        );
    }

    const cancelarConsulta = async (codigoConsulta) => {
        await DeletarConsultaPorId(codigoConsulta)
    }

    return (
        <Background>
            <StatusBar style="light" backgroundColor="#000" translucent={false} />
            <Header />
            <Text style={{ marginLeft: 10, fontSize: 24 }}>Consultas</Text>
            <View style={styles.scrollview}>
                <FlatList
                    keyExtractor={(item) => item.codigoConsulta}
                    data={consulta}
                    renderItem={({ item }) => (
                        <View style={styles.box}>
                            <View style={styles.groupItem}>
                                <TouchableOpacity onPress={() => clickConsulta(item)} 
                                disabled={verificarDataConsulta(item.dataConsulta, item.horaConsulta) == "Consulta já realizada" ? true: false}>
                                    <View style={styles.item}>
                                        <Text style={styles.itemText}>{item.dataConsulta}</Text>
                                        <Text style={styles.itemText}>{item.horaConsulta}</Text>
                                    </View>
                                    <View style={styles.itemTextMedic}>
                                        <Text style={styles.itemText}>{item.nomeMedico}</Text>
                                    </View>
                                    <View style={styles.item}>
                                        <Text style={styles.itemText}>{verificarDataConsulta(item.dataConsulta, item.horaConsulta)}</Text>
                                        <Text style={styles.itemText}>{item.nomeEspecialidade}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
                <TouchableOpacity onPress={goTo} style={styles.scrollviewTouchable}>
                    <Image source={require('../../../assets/botaoAdicionar.png')}
                        style={styles.scrollviewImage}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={goTo} style={styles.footerButton}>
                    <Text> Perguntas </Text>
                </TouchableOpacity>
            </View>
        </Background>
    );
}
