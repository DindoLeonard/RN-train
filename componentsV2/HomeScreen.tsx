import React, {useContext} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import SampleContext from '../context/Context'

const HomeScreen = (props: any) => {
  const { navigation } = props

  const sampleCtx = useContext(SampleContext);
  const {user} = sampleCtx

  return (
    <View style={styles.container}>
      <Text>HomeScreen {` ${user.name}`}</Text>
      <Button title='Go to details' onPress={()=>{
        navigation.navigate('Details')
      }}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
