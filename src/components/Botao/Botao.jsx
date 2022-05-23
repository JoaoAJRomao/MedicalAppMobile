import React from "react";
import { Text, TouchableOpacity, } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Button({ text, textStyle, touchStyle, goTo }) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            style={touchStyle}
            onPress={() => navigation.navigate('horarios')}
        >
            <Text
                style={textStyle}
            >
                {text}
            </Text>
        </TouchableOpacity>
    )
}