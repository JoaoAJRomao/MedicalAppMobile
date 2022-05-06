import React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import styles from './Header.style'

export default function Header(props) {
    const navigation = useNavigation()

    function something() {
        navigation.navigate('exibirconsulta')
    }
    return (
        <View style={styles.header}>
            <View style={styles.headerOptions}>
                <Image
                    source={require('../../../assets/userGeneric.png')}
                    style={{ width: 30, height: 30 }}
                    resizeMode="contain"
                />
                {props?.hasReturn &&
                    <TouchableOpacity onPress={something}>
                        <Image
                            source={require('../../../assets/returnIconHeader.png')}
                            style={styles.headerIcons}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                }
            </View>
            <View style={styles.headerOptions}>
                <TouchableOpacity onPress={something}>
                    <Image
                        source={require('../../../assets/notificacao.png')}
                        style={styles.headerIcons}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={something}>
                    <Image
                        source={require('../../../assets/menuLinhasHorizontais.png')}
                        style={styles.headerIcons}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}
