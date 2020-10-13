import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Page
import PageOne from './page/pageOne';
import PageTwo from './page/pageTwo';
import PageBarOne from './page/pageBarOne';
import PageBarTwo from './page/pageBarTwo';
import PageBarThree from './page/pageBarThree';
import PageContainer from './page/pageBarContainer';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PageOne" component={PageOne}/>
        <Stack.Screen name="PageTwo" component={PageTwo}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
