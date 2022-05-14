import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image
} from "react-native";
import { BuscarDoutorPorEspecialidade } from "../../Services/AgendamentoService";
import styles from './BuscaPorMedico.style'

export default function BuscaPorMedico({ specialty }) {
    const navigation = useNavigation()
    const [carouselMedicos, setCarouselMedicos] = useState([]);

    useEffect(async () => {
        const medics = await BuscarDoutorPorEspecialidade(specialty);
        setCarouselMedicos(medics[0].data);
    }, [specialty])

    return (
        <View style={styles.mainView}>
            <FlatList
                keyExtractor={(item) => item.crm}
                data={carouselMedicos}
                renderItem={({ item }) => (
                    <View style={styles.box}>
                        <Image
                            style={styles.headerIcons}
                            source={require("@expo/../../assets/medico.png")}
                            resizeMode="contain"
                        />
                        <TouchableOpacity
                            onPress={() => navigation.navigate({
                                name: 'MarcarConsultaMedico',
                                params: { post: item },
                                merge: true,
                              })}
                            style={{width: 250, height: 50, marginVertical: 15, marginLeft: 10, backgroundColor: "#FFFF", justifyContent: 'center', borderRadius:10}}
                        >
                            <Text style={{marginLeft: 10, fontSize: 18}}>{item?.nomeMedico}</Text>
                        </TouchableOpacity>
                    </View>)}
            />
        </View>
    )
}

