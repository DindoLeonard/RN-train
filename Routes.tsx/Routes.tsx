import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// context
import { ContextProvider } from '../context/Context';

// components
import HomeScreen from '../componentsV2/HomeScreen';
import DetailsScreen from '../componentsV2/DetailsScreen';
import NestedNavigators from '../componentsV2/NestedNavigators';

type RootStackParamsList = {
  Home: undefined;
  Details: { itemId: number; otherParams: string };
  NestedNavigators: any;
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

const LogoTitle = () => {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../assets/adaptive-icon.png')}
    />
  );
};

const Routes = () => {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTitle: (props) => {
                return <LogoTitle />;
              },
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            initialParams={{ itemId: 96, otherParams: 'string' }}
          />

          <Stack.Screen
            name="NestedNavigators"
            component={NestedNavigators}
            options={({ navigation, route }) => ({
              headerTitle: (props) => {
                return <LogoTitle />;
              },
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
};

export default Routes;

const styles = StyleSheet.create({});
