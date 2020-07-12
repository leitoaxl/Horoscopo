import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home'
import Genero from './screens/Genero'
import Datos from './screens/Datos'
import Horoscopo from './screens/Horoscopo'
import { azul, blanco } from './constants/color'
import HeaderTitle from './components/Header'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Stack.Screen name="Genero" component={Genero} options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: azul
          },
          headerRight: () => {
            return (
              <HeaderTitle Title={'Tu Género'} />)
          },
          headerTintColor: blanco,
        }} />
        <Stack.Screen name="Datos" component={Datos} options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: azul
          },
          headerRight: () => {
            return (
              <HeaderTitle Title={'Tus Datos'} />)
          },
          headerTintColor: blanco,
        }} />
        <Stack.Screen name="Horoscopo" component={Horoscopo} options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: azul
          },
          headerRight: () => {
            return (
              <HeaderTitle Title={'Tu Horóscopo'} />)
          },
          headerTintColor: blanco,
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App