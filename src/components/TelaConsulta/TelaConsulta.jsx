import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    StatusBar
} from 'react-native'
import styles from './TelaConsulta.style'

export default function Consulta() {
    return (
        <>
            <StatusBar style="light" backgroundColor="#000" translucent={false} />
            <View style={styles.header}>
                <Image
                    source={require('../../../assets/MedicalAppIcon2.png')}
                    style={{ width: 30, height: 30 }}
                    resizeMode="contain"
                />
                <Text style={{color:'white'}}>
                    Bem vindo [usuario]
                </Text>
                <Image
                    source={require('../../../assets/sanduicheIcon.png')}
                    style={{ width: 30, height: 30 }}
                    resizeMode="contain"
                />
            </View>            
        </>
    );
}
