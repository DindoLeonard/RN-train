import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// components
import HomeScreen from '../componentsV2/HomeScreen';
import DetailsScreen from '../componentsV2/DetailsScreen';

const Stack = createNativeStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Details' component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes

const styles = StyleSheet.create({})
