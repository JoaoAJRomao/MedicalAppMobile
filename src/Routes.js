import React from 'react'
import CadastroCliente from './components/TelaCadastroCliente/CadastroCliente';
import Consulta from './components/TelaConsulta/TelaConsulta';
import Login from './components/TelaLogin/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaPesquisaConsulta from './components/TelaPesquisaConsulta/TelaPesquisaConsulta';
import TelaMarcacao from './components/TelaMarcacao/TelaMarcacao';
import TelaListaHorarios from './components/TelaListaHorarios/TelaListaHorarios';
import MedicosFiltrados from './components/TelaPesquisaConsulta/BuscaPorData/MedicosFiltrados';
import ConfirmacaoAgendamento from './components/TelaConfirmacaoAgendamento/TelaConfirmacaoAgendamento.jsx';
import ListaHorariosFiltro from './components/TelaPesquisaConsulta/BuscaPorData/ListaHorariosFiltro';
import RecuperacaoSenha from './components/TelaRecuperacaoSenha/RecuperacaoSenha';
import TelaTrocarSenha from './components/TelaRecuperacaoSenha/TelaTrocarSenha';
import TelaPerfil from './components/TelaPerfil/TelaPerfil';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Routes() {
  const Stack = createNativeStackNavigator();
  const token = AsyncStorage.getItem("TOKEN")
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="login" component={Login}/>
        <Stack.Screen name="consulta" component={Consulta} />
        <Stack.Screen name="exibirconsulta" component={TelaPesquisaConsulta} />
        <Stack.Screen name="cadastro" component={CadastroCliente} />
        <Stack.Screen name="TelaMarcacao" component={TelaMarcacao} />
        <Stack.Screen name="TelaListaHorarios" component={TelaListaHorarios} />
        <Stack.Screen name="MedicosFiltrados" component={MedicosFiltrados} />
        <Stack.Screen name="ConfirmacaoAgendamento" component={ConfirmacaoAgendamento} />
        <Stack.Screen name="ListaHorariosFiltro" component={ListaHorariosFiltro} />
        <Stack.Screen name="RecuperacaoSenha" component={RecuperacaoSenha} />
        <Stack.Screen name="TelaTrocarSenha" component={TelaTrocarSenha} />
        <Stack.Screen name="TelaPerfil" component={TelaPerfil} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
