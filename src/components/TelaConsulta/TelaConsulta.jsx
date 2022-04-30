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
        <View style={styles.page}>
            <StatusBar style="light" backgroundColor="#000" translucent={false} />
            <View style={styles.header}>
                <View style={styles.headerIcons}>
                    <Image
                        source={require('../../../assets/userGeneric.png')}
                        style={{ width: 30, height: 30 }}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.headerOptions}>
                    <TouchableOpacity onPress={something}>
                        <Image
                            source={require('../../../assets/notificacao.png')}
                            style={styles.headerIcons}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={something}>
                        <Image
                            source={require('../../../assets/menuLinhasHorizontais.png')}
                            style={styles.headerIcons}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
            </View>

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
                                <View >
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
        </View>
    );
}
