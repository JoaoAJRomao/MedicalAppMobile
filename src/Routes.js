import React from 'react'
import CadastroCliente from './components/TelaLogin/CadastroCliente';
import Login from './components/TelaLogin/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Routes() {
const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="cadastro" component={CadastroCliente} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}
