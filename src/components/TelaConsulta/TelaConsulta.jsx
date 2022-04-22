import React from 'react';
import {
    View,
    Image,
    Text,
    StatusBar,
    TouchableOpacity,
    Alert,
    ScrollView
} from 'react-native'
import styles from './TelaConsulta.style'

export default function Consulta() {

    function something() {
        Alert.alert("Pass")
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
                    Bem vindo [usuario]
                </Text>
                <TouchableOpacity onPress={something}>
                    <Image
                        source={require('../../../assets/sanduicheIcon.png')}
                        style={{ width: 30, height: 30 }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
            </ScrollView>
            <View style={styles.footer}>                
                <TouchableOpacity style={styles.footerButton}>
                    <Text> Curiosidade </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerButton}>
                    <Text> Historico </Text>
                </TouchableOpacity>
            </View>
        </>
    );
}
