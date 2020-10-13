import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Page
import PageOne from './page/pageOne';
import PageTwo from './page/pageTwo';
import PageBarOne from './page/pageBarOne';
import PageBarTwo from './page/pageBarTwo';
import PageBarThree from './page/pageBarThree';
import PageContainer from './page/pageBarContainer';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      <PageTwo/>
    </View>
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
