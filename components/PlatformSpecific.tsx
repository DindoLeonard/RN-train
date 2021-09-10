import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import Test from './Test'
import FlatListBasics from './FlatListBasics'
// ** import ExComponent from './ExComponent' */


const PlatformSpecific = () => {

  const Component = Platform.select({
    android: () => { 
      return FlatListBasics

     },
     ios: ()=>{
       return Test
     }, 
     default:()=>{
       return Test
     }
  })()
 
  return (
    <View style={styles.container}>
      <Component />
      <Text onLongPress={()=>{
        console.log('OnLongPress')
      }}>Hello <Text style={styles.textWorldContainer}>World</Text></Text>
      {/* <ExComponent/> */}
    </View>
  )
}

export default PlatformSpecific

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'green',
      },
      default: {
        // other platform, web for example
        backgroundColor: 'blue'
      }
    }),
  },
  textWorldContainer: {
    color: 'red',
  }
})
