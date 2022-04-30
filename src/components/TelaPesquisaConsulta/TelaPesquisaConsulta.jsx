import React from "react";
import { View, Text } from "react-native";
import Carousel from "../Carousel/Carousel";
import Header from "../Header/Header"
import Background from '../Background/Background'

export default function TelaPesquisaConsulta() {
  return (
    <Background >
      <Header hasReturn={true} />
      <Text style={{ marginLeft: 10, fontSize: 24 }}>Especialidades:</Text>
      <Carousel />
      
    </Background>

  );
}
