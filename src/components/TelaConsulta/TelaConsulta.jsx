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
            <View style={styles.scrollview}>
                <ScrollView >
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                </ScrollView>
                <TouchableOpacity onPress={something} style={styles.scrollviewTouchable}>
                    <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png' }}
                        style={styles.scrollviewImage}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButton}>
                    <Text> Curiosidade </Text>
                </TouchableOpacity>
                <View style={styles.verticleLine}></View>
                <TouchableOpacity style={styles.footerButton}>
                    <Text> Historico </Text>
                </TouchableOpacity>
            </View>
        </>
    );
}
