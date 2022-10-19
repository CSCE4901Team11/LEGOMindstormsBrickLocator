import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ScannerScreen from './screens/Scanner.js'
import BrowseScreen from './screens/Browse.js'
import OptionsScreen from './screens/Options.js'
import SideMenu from './components/Sidemenu.js';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { ThemeContext, ThemeProvider } from './constants/context.js';

const Drawer = createDrawerNavigator();

function App() {
  
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}
          initialRouteName = "Scanner" 
          screenOptions = {{
            headerTransparent: true,
            headerTitleStyle: {opacity: 0},
            drawerLabelStyle: {marginLeft: -15},
            drawerActiveBackgroundColor: '#b7c6fb',
            drawerActiveTintColor: '#000',
            //drawerInactiveBackgroundColor: 
          }}
        >
          <Drawer.Screen
            name = "Scanner"
            component = {ScannerScreen}
            options = {{
              drawerIcon: (color) => (
                <FontAwesome5 name="camera" size={24} color={color} />
              )
            }}
          />
          <Drawer.Screen
            name = "Browse"
            component = {BrowseScreen}
            options = {{
              drawerIcon: (color) => (
                <FontAwesome5 name="search" size={24} color={color} />
              )
            }}
          />
          <Drawer.Screen
            name = "Options"
            component = {OptionsScreen}
            options = {{
              drawerIcon: (color) => (
                <FontAwesome5 name="cog" size={24} color={color}/>
              )
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
      </ThemeProvider>
  );
}

export default App;