import React, {useState, useEffect} from 'react';
import {
    View,
    Image,
    Text,
    StatusBar,
    TouchableOpacity,
    Alert,
    ScrollView
} from 'react-native'
import Consulta from '../Consulta/Consulta'
import styles from './TelaConsulta.style'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ConsultaPorId } from '../../Services/AgendamentoService';
import { FlatList } from 'native-base';

export default function TelaConsulta() {

    const [nomeCliente, setNomeCliente] = useState("") 
    const [Id, setId] = useState("") 
    const [token, setToken] = useState("") 
    const [estruturaConsultas,setEstruturaConsultas] = useState([])

    useEffect(async () => {
       const cliente = await AsyncStorage.getItem("NOME_CLIENTE")
       const IdCliente = await AsyncStorage.getItem("ID")
       const tokenclient = await AsyncStorage.getItem("TOKEN")
       setNomeCliente(cliente)
       setId(IdCliente)
       setToken(tokenclient)

        await carregarLista(IdCliente,tokenclient)


    },[])

    function something() {
        Alert.alert("Pass")
    }

    async function carregarLista(IdCliente,tokenclient) {
        const params = {
            idClient: IdCliente,
            token: tokenclient
        } 
      const res = await ConsultaPorId(params)
      setEstruturaConsultas(res[0])
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
                    Bem vindo {nomeCliente}
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
                    data={estruturaConsultas}
                    showsVerticalScrollIndicator={false}
                    renderItem={(item)=>{
                        <View>
                        <Text> {item?.nomeEspecialidade} </Text>
                        <Text> {item?.dataConsulta} </Text>    
                        </View>          
                    }}
                    />

                <TouchableOpacity onPress={something} style={styles.scrollviewTouchable}>
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
