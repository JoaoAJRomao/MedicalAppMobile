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
                            source={require("@expo/../../assets/MedicalAppIcon2.png")}
                            resizeMode="contain"
                        />
                        <TouchableOpacity
                            onPress={() => console.log(item)}
                            style={styles.item}
                        >
                            <Text style={styles.title}>{item?.nomeMedico}</Text>
                        </TouchableOpacity>
                    </View>)}
            />
        </View>
    )
}

