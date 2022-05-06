import React, { useState, useEffect } from 'react';
import {
    View,
    Image,
    Text,
    StatusBar,
    TouchableOpacity,
    FlatList
} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import styles from './TelaConsulta.style'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ConsultaPorId } from '../../Services/AgendamentoService';
import Header from '../Header/Header'
import Background from '../Background/Background'

export default function TelaConsulta() {
    const navigation = useNavigation()
    const [nome, setNome] = useState("")
    const [id, setId] = useState("")
    const [token, setToken] = useState("")
    const [consulta, setConsulta] = useState([])

    useEffect(async () => {
        const cliente = await AsyncStorage.getItem("NOME_CLIENTE")
        const idCliente = await AsyncStorage.getItem("ID")
        const tokenclient = await AsyncStorage.getItem("TOKEN")
        setNome(cliente)
        setId(idCliente)
        setToken(tokenclient)
        await carregarLista(idCliente, tokenclient)
    }, [])

    function something() {
        navigation.navigate('exibirconsulta')
    }

    async function carregarLista(idCliente, tokenclient) {
        const params = {
            idClient: idCliente,
            token: tokenclient
        }
        const res = await ConsultaPorId(params)
        setConsulta(res[0])
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
                                <View style={styles.item}>
                                    <Text style={styles.itemText}>{item.dataConsulta}</Text>
                                    <Text style={styles.itemText}>{item.horaConsulta}</Text>
                                </View>
                                <View style={styles.itemTextMedic}>
                                    <Text style={styles.itemText}>{item.nomeMedico}</Text>                                    
                                </View>
                                <View style={styles.item}>
                                    <Text style={styles.itemText}>Consulta</Text>
                                    <Text style={styles.itemText}>{item.nomeEspecialidade}</Text>
                                </View>

                            </View>
                        </View>
                    )}
                />
                <TouchableOpacity onPress={something} style={styles.scrollviewTouchable}>
                    <Image source={require('../../../assets/botaoAdicionar.png')}
                        style={styles.scrollviewImage}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={something} style={styles.footerButton}>
                    <Text> Perguntas </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={something} style={styles.footerButton}>
                    <Text> Historico </Text>
                </TouchableOpacity>
            </View>
        </Background>
    );
}
