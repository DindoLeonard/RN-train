import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ScrollViewComponent from './components/ScrollViewComponent';




/**
import PlatformSpecific from './components/PlatformSpecific';
import DesignHeightAndWidth from './components/DesignHeightAndWidth';
import AlignItemsLayout from './components/AlignItemsLayouts';
import ImagesComponent from './components/ImagesComponent';
import InteractionHandlingTouch from './components/InteractionHandlingTouch';
*/

export default function App() {
  return (
      <View style={styles.container}>
        <ScrollViewComponent/>
        {/* <ImagesComponent /> */}
        {/* <AlignItemsLayout /> */}
        {/* <DesignHeightAndWidth /> */}
        {/* <PlatformSpecific /> */}
        {/* <Text>Hello World</Text> */}
        {/* <StatusBar style='auto' /> */}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    
  },
});
