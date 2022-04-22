import React from 'react';
import { View, Text } from 'react'
import styles from './Consulta.style'

export default function Consulta(param) {
    console.log(param)
    return (
        <View style={styles.box}>
            <Text> 22/04/2022 as 17:00 </Text>
            <Text> Ortopedia </Text>
        </View>
    );
}
