import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";
import { BuscarDoutorPorEspecialidade } from "../../Services/AgendamentoService";

export default function BuscaPorMedico({ specialty }) {

    const [carouselMedicos, setCarouselMedicos] = useState([]);

    useEffect(async () => {
        const medics = await BuscarDoutorPorEspecialidade(specialty);
        setCarouselMedicos(medics[0].data);
    }, [specialty])

    return (
        <View style={{ alignItems:"center"}}>
            <FlatList
                keyExtractor={(item) => item.crm}
                data={carouselMedicos}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: "row", alignItems:"center" }}>
                        <Image
                            style={styles.imagemMedico}
                            source={require("@expo/../../assets/MedicalAppIcon2.png")}
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

const styles = StyleSheet.create({
    View: {
        flex: 1,
    },
    item: {
        backgroundColor: "#f9c2ff",
        width: 150,
        height: 50,
        marginHorizontal: 8,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 15,
    },
    carrousel: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
    },
    carrouselMedicos: {
        flex: 5,
        alignItems: "center",
    }, imagemMedico: {
        borderRadius: 150,
        width: 50,
        height: 50,
        marginTop: 10
    }
});
