import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, TouchableOpacity } from 'react-native';
import styles from './App.style.js';
import React from 'react';
import { Camera } from 'expo-camera';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScannerScreen from './Scanner.js'
import BrowseScreen from './Browse.js'
import OptionsScreen from './Options.js'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Scanner">
        <Stack.Screen
          name = "Scanner"
          component = {ScannerScreen}
        />
        <Stack.Screen
          name = "Browse"
          component = {BrowseScreen}
        />
        <Stack.Screen
          name = "Options"
          component = {OptionsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;