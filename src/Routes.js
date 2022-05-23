import React from 'react'
import CadastroCliente from './components/TelaCadastroCliente/CadastroCliente';
import Consulta from './components/TelaConsulta/TelaConsulta';
import Login from './components/TelaLogin/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaPesquisaConsulta from './components/TelaPesquisaConsulta/TelaPesquisaConsulta';
import TelaMarcacao from './components/TelaMarcacao/TelaMarcacao';
import ListaHorarios from './components/TelaMarcacao/ListaHorarios/ListaHorarios';


export default function Routes() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="consulta" component={Consulta} />
        <Stack.Screen name="exibirconsulta" component={TelaPesquisaConsulta} />
        <Stack.Screen name="cadastro" component={CadastroCliente} />
        <Stack.Screen name="TelaMarcacao" component={TelaMarcacao} />
        {/* <Stack.Screen name="ListaHorarios" component={ListaHorarios} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
