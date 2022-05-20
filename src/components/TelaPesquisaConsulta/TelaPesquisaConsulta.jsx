import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import Carousel from "./Carousel/Carousel";
import Header from "../Header/Header"
import Background from '../Background/Background'
import BuscaPorMedico from './BuscaPorMedico/BuscaPorMedico'
import BuscaPorData from "./BuscaPorData/BuscaPorData";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

export default function TelaPesquisaConsulta() {
  const [specialty, setSpecialty] = useState(5);
  const Tab = createMaterialTopTabNavigator();
  return (
    <Background >
      <Header hasReturn={true} />
      <Text style={{ marginLeft: 10, fontSize: 24 }}>Especialidades:</Text>
      <Carousel setSpecialty={setSpecialty} />
      <Tab.Navigator>
        <Tab.Screen name="Busca por médico"
          children={() => <BuscaPorMedico specialty={specialty} />} />
        <Tab.Screen name="Busca por data" component={BuscaPorData} />
      </Tab.Navigator>
    </Background>
  );
}
