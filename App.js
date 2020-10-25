import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import {MahasiswaComponent} from "./app/MahasiswaComponent";
import {ClassComponent} from "./app/ClassComponent";
import {styles} from "./app/Style";

export default function App() {
  return (
    <View style={[styles.container, styles.khusus, {marginTop: 100}]}>
      <MahasiswaComponent nama={"MIS"} nrp={"051117400"}/>
      <ClassComponent nama={"MIS"} nrp={"051117400"}/>
      <StatusBar style="auto" />
    </View>
  );
}

