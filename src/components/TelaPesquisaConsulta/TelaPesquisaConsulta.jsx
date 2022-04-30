import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "./Consulta.style";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Carrousel from "./Carrousel";

export default function TelaPesquisaConsulta() {
  const [nome, setNome] = useState("");
  const [id, setId] = useState("");
  const [token, setToken] = useState("");
  const [consulta, setConsulta] = useState([]);

  useEffect(async () => {
    const cliente = await AsyncStorage.getItem("NOME_CLIENTE");
    const idCliente = await AsyncStorage.getItem("ID");
    const tokenclient = await AsyncStorage.getItem("TOKEN");
    setNome(cliente);
    setId(idCliente);
    setToken(tokenclient);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text>Especialidades: </Text>
        <Carrousel />
      </View>
    </>
  );
}
