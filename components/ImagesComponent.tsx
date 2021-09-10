import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'

const ImagesComponent = () :JSX.Element => {
  return (
    <View>
      <Text>Hello world</Text>
      <Image source={require('../assets/favicon.png')}/>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/icon.png')} style={{width: 200, height: 200}} resizeMode='contain'/>
      </View>
      <View style={styles.imageContainer}>
        <ImageBackground source={{uri: 'https://cdn.statically.io/img/i.pinimg.com/originals/66/52/50/665250de2a09490e679e0ec38f78042e.jpg' }} style={{width:'100%', height: '100%',}}>
          <Text style={{color: 'white'}}>Hello</Text>
        </ImageBackground>
      </View>
    </View>
  )
}

export default ImagesComponent

const styles = StyleSheet.create({
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
  },
})
