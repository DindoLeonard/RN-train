import React, {useState, useLayoutEffect} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DetailsScreen from './DetailsScreen';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();

const NestedNavigators = (props: any) => {

  const { navigation } = props

  const [count, setCount] = useState<number>(0)


  useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight: ()=>(
        <Button onPress={()=>{
          setCount(currentCount => currentCount + 1)
        }}
          title='Update Count'
        />
      )
    })
    console.log(count)
  }, [navigation])

  return (
    <Tab.Navigator>
      <Tab.Screen name='Details' component={DetailsScreen}/>
      <Tab.Screen name='HomeScreen' component={HomeScreen}/>
    </Tab.Navigator>
  )
}

export default NestedNavigators

const styles = StyleSheet.create({})
