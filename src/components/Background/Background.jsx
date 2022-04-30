import React from 'react';
import { View } from 'react-native'
import styles from './Background.style'

export default function Background(props) {
    return (
        <View style={styles.page}>
            {props.children}
        </View>

    )
}
