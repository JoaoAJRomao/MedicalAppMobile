import React, { useState, useEffect } from 'react';
import {
    View,
    Image,
    Text,
    StatusBar,
    TouchableOpacity,
    Alert,
    FlatList
} from 'react-native'

import styles from './TelaConsulta.style'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ConsultaPorId } from '../../Services/AgendamentoService';

export default function TelaConsulta() {

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
        await carregarLista()
    }, [])

    function something() {
        Alert.alert("Pass")
    }

    async function carregarLista() {
        const params = {
            idClient: id,
            token: token
        }
        const res = await ConsultaPorId(params)
        setConsulta(res)
    }

    const [mockConsulta, setMockConsulta] = useState([
        {
            "codigoConsulta": 125,
            "dataConsulta": "12/02/2022",
            "horaConsulta": "10:40",
            "idCliente": 45,
            "convenioCliente": "unimed",
            "crmMedico": 12345,
            "codigoEspecialidade": 5,
            "nomeMedico": "Dr. Dolittle",
            "nomeEspecialidade": "Nutrição"
        },
        {
            "codigoConsulta": 75,
            "dataConsulta": "20/11/2021",
            "horaConsulta": "06:00",
            "idCliente": 45,
            "convenioCliente": "unimed",
            "crmMedico": 23456,
            "codigoEspecialidade": 15,
            "nomeMedico": "Dr. Marcos",
            "nomeEspecialidade": "Ecocardiografia"
        },
        {
            "codigoConsulta": 105,
            "dataConsulta": "30/11/2021",
            "horaConsulta": "11:20",
            "idCliente": 45,
            "convenioCliente": "unimed",
            "crmMedico": 34567,
            "codigoEspecialidade": 25,
            "nomeMedico": "Dr. Lucas",
            "nomeEspecialidade": "Hepatologia"
        },
        {
            "codigoConsulta": 213,
            "dataConsulta": "23/04/2022",
            "horaConsulta": "11:20",
            "idCliente": 45,
            "convenioCliente": "unimed",
            "crmMedico": 34568,
            "codigoEspecialidade": 28,
            "nomeMedico": "Dra. Angela",
            "nomeEspecialidade": "Cardiaco"
        }
    ])

    return (
        <>
            <StatusBar style="light" backgroundColor="#000" translucent={false} />
            <View style={styles.header}>
                <Image
                    source={require('../../../assets/MedicalAppIcon2.png')}
                    style={{ width: 30, height: 30 }}
                    resizeMode="contain"
                />
                <Text style={{ color: 'white' }}>
                    Bem vindo {nome}
                </Text>
                <TouchableOpacity onPress={something}>
                    <Image
                        source={require('../../../assets/sanduicheIcon.png')}
                        style={{ width: 30, height: 30 }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.scrollview}>
                <FlatList
                    keyExtractor={(item) => item.codigoConsulta}
                    data={mockConsulta}
                    renderItem={({ item }) => (
                        <View style={styles.box}>
                            <View style={styles.colorItem}></View>
                            <View style={styles.groupItem}>
                                <Text style={styles.item}>{item.dataConsulta} as {item.horaConsulta}</Text>
                                <Text style={styles.item}>{item.nomeEspecialidade} com {item.nomeMedico}</Text>
                            </View>
                        </View>
                    )}
                />
                <TouchableOpacity onPress={carregarLista} style={styles.scrollviewTouchable}>
                    <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png' }}
                        style={styles.scrollviewImage}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={something} style={styles.footerButton}>
                    <Text> Curiosidade </Text>
                </TouchableOpacity>
                <View style={styles.verticleLine}></View>
                <TouchableOpacity onPress={something} style={styles.footerButton}>
                    <Text> Historico </Text>
                </TouchableOpacity>
            </View>
        </>
    );
}
