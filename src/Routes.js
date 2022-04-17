import React from 'react'
import CadastroCliente from './components/TelaCadastroCliente/CadastroCliente';
import Consulta from './components/TelaConsulta/TelaConsulta';
import Login from './components/TelaLogin/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Routes() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="cadastro" component={CadastroCliente} />
        <Stack.Screen name="consulta" component={Consulta} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
