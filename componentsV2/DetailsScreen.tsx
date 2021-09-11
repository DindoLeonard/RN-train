import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'


type Props = NativeStackScreenProps<any, 'Details'>

const DetailsScreen = (props: Props) => {
  const {navigation} = props

  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button title='Go to details... again' onPress={()=>{
        navigation.push('Details');
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
