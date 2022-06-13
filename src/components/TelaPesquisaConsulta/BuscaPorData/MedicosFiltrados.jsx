import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, View, FlatList, TouchableOpacity, Image, StatusBar } from "react-native";
import { BuscarDoutorPorEspecialidade } from "../../../Services/AgendamentoService";
import Background from "../../Background/Background";
import Header from "../../Header/Header";
import styles from "../BuscaPorMedico/BuscaPorMedico.style";

export default function MedicosFiltrados(dados) {
  const navigation = useNavigation()
  const [medicosFiltrados, setMedicosFiltrados] = useState([])

useEffect(async () =>{

  const especialidadeEscolhida = dados?.route?.params.specialty
  const medics = await BuscarDoutorPorEspecialidade(especialidadeEscolhida);

  setMedicosFiltrados(medics[0].data)
},[])

  return (
    <Background>
    <StatusBar style="light" backgroundColor="#000" translucent={false} />
    <Header hasReturn={true} />
    <View style={styles.mainView}>
    <Text style={{fontSize: 15}}>Por favor, selecione um médico.</Text>
    <FlatList
        keyExtractor={(item) => item.crm}
        data={medicosFiltrados}
        renderItem={({ item }) => (
            <View style={styles.box}>
                <Image
                    style={styles.headerIcons}
                    source={require("@expo/../../assets/medico.png")}
                    resizeMode="contain"
                />
                <TouchableOpacity
                    style={{ width: 250, height: 50, marginVertical: 15, marginLeft: 10, backgroundColor: "#FFFF", justifyContent: 'center', borderRadius: 10 }}
                onPress={()=> {navigation.navigate({
                  name: 'ListaHorariosFiltro',
                  params: { 
                    dados: dados,
                    crm: item.crm,
                    nomeMedico: item.nomeMedico,
                    horarioFiltro: dados?.route?.params.horarioFiltro
                 },
                  merge: true
                })}}
                >
                    <Text style={{ marginLeft: 10, fontSize: 18 }}>{item?.nomeMedico}</Text>
                </TouchableOpacity>
            </View>)}
    />
</View>
</Background>
  );
}
