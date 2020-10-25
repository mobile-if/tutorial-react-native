import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Page
import PageOne from './page/pageOne';
import PageTwo from './page/pageTwo';
import PageBarContainer from './page/pageBarContainer';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PageOne" component={PageOne}/>
        <Stack.Screen name="PageTwo" component={PageTwo}/>
        <Stack.Screen name="BottomBarContainer" component={PageBarContainer}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
