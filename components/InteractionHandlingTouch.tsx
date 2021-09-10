import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, Platform } from 'react-native'

const InteractionHandlingTouch = () => {

  const onPressButton = () =>{
    alert('You tapped the button')
  }

  const onLongPress = () => {
    alert('You long-pressed the button')
  }

  return (
    <View style={styles.container}>
    <TouchableHighlight onPress={onPressButton} underlayColor="white">
      <View style={styles.button}>
        <Text style={styles.buttonText}>TouchableHighlight</Text>
      </View>
    </TouchableHighlight>
    <TouchableOpacity onPress={onPressButton}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>TouchableOpacity</Text>
      </View>
    </TouchableOpacity>
    {/* <TouchableNativeFeedback
        onPress={onPressButton}
        background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>TouchableNativeFeedback {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
      </View>
    </TouchableNativeFeedback> */}
    <TouchableWithoutFeedback
        onPress={onPressButton}
        >
      <View style={styles.button}>
        <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
      </View>
    </TouchableWithoutFeedback>
    <TouchableHighlight onPress={onPressButton} onLongPress={onLongPress} underlayColor="white">
      <View style={styles.button}>
        <Text style={styles.buttonText}>Touchable with Long Press</Text>
      </View>
    </TouchableHighlight>
  </View>
  )
}

export default InteractionHandlingTouch

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white'
  }
});
