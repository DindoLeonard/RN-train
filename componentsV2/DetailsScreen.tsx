import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type RootStackParamsList = {
  Home: undefined,
  Details: {itemId: number, otherParams: string},
  Example: {itemId: number, otherParams: string}
}


type Props = NativeStackScreenProps<RootStackParamsList, 'Details'>


const DetailsScreen = (props: Props) => {
  const { navigation, route } = props

  const { params } = route

  console.log('PARAMS', params);


  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button title='Go to details... again' onPress={()=>{
        navigation.push('Details', {itemId: 93, otherParams: 'anotherString'}); 
      }}/>
      <Button title='Go back' onPress={()=>{
        navigation.goBack();
      }}/>
      <Button title='Go to Home' onPress={()=>{
        navigation.navigate('Home');
      }}/>
      <Button title='Go Back to first screen' onPress={()=>{
        navigation.popToTop();
      }}/>

      {/* Configuring header bar */}
      <Button title='Update the title' onPress={()=>{
        navigation.setOptions({title: 'Updated!'})
      }}/>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
