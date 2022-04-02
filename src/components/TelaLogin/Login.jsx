import React from "react";
import { StatusBar, TouchableOpacity, Button, Image, TextInput, Text, SafeAreaView, StyleSheet, View } from 'react-native';

export default function Login() {
    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);

    return (
        <>
        <StatusBar style="light" backgroundColor="#000" translucent={false}/>
        <View style={styles.safeview}>
            <View>
                <Image
                    style={styles.tinyLogo}
                    source={require('@expo/../../assets/MedicalAppIcon2.png')} />
            </View>
            
            <Text> Login: </Text>

            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder=" Digite seu CPF"
                value={text}
                backgroundColor="white"
            />

            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder=" Digite sua senha"
                backgroundColor="white"
            />

            <TouchableOpacity style={styles.buttonLogin}>
                <Button
                    title="Acessar"
                    color="#38B6FF"
                    style={styles.buttonLogin}
                    onPress={() => Alert.alert('Button with adjusted color pressed')}
                />
            </TouchableOpacity>

            <Text>Esqueci minha senha</Text>

            <TouchableOpacity style={styles.buttonLogin}>
                <Button
                    title="Novo Cadastro"
                    color="#777777"
                    style={styles.buttonLogin}
                    onPress={() => Alert.alert('Button with adjusted color pressed')}
                />
            </TouchableOpacity>

        </View>
        </>
        
    );
}

const styles = StyleSheet.create({
    input: {
        height: 48,
        width: 296,
        margin: 12,
        borderWidth: 1,
        borderRadius: 12
    },
    tinyLogo: {
        width: 115,
        height: 115,
    },
    logo: {
        width: 66,
        height: 58,
    },
    safeview: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C9D5D9'
    },
    buttonLogin: {
        height: 48,
        width: 296,
        borderRadius: 12
    }
});