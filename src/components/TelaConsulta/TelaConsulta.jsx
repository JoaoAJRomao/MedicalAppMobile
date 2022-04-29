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
        await carregarLista(idCliente, tokenclient)
    }, [])

    function something() {
        Alert.alert("Pass")
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
                    data={consulta}
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
