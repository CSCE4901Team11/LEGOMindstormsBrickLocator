import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ScannerScreen from './screens/Scanner.js'
import BrowseScreen from './screens/Browse.js'
import OptionsScreen from './screens/Options.js'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>

      <Drawer.Navigator 
        initialRouteName = "Scanner" 
        //screenOptions = {{headerShown: false}}
      >
        <Drawer.Screen
          name = "Scanner"
          component = {ScannerScreen}
        />
        <Drawer.Screen
          name = "Browse"
          component = {BrowseScreen}
        />
        <Drawer.Screen
          name = "Options"
          component = {OptionsScreen}
        />
      </Drawer.Navigator>



      {/* <Stack.Navigator 
      initialRouteName = "Scanner" 
      screenOptions = {{headerShown: false}}
      >
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
      </Stack.Navigator> */}

    </NavigationContainer>
  );
}

export default App;