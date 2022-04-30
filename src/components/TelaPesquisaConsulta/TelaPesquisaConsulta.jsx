import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "./TelaPesquisaConsulta.style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Carrousel from "../Carrousel/Carrousel";
import Header from "../Header/Header"
import Background from '../Background/Background'

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
    <Background >
      <Header hasReturn={true} />
      <Text style={{ marginLeft: 10, fontSize: 24 }}>Especialidades</Text>
      <Carrousel />
    </Background>

  );
}
