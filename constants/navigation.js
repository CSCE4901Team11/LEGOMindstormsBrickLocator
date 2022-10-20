import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ScannerScreen from '../screens/Scanner'
import BrowseScreen from '../screens/Browse'
import OptionsScreen from '../screens/Options'
import SideMenu from '../components/Sidemenu';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { ThemeContext } from '../constants/context';

const Drawer = createDrawerNavigator();

export default function Navigation () {

    const currentTheme = useContext (ThemeContext);
    const theme = currentTheme.state.theme;


    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}
                initialRouteName = "Scanner" 
                screenOptions = {theme == 'light' ? {
                    headerTransparent: true,
                    headerTitleStyle: {opacity: 0},
                    headerTintColor: '#000',
                    drawerLabelStyle: {marginLeft: -15},
                    drawerActiveBackgroundColor: '#b7c6fb',
                    drawerActiveTintColor: '#000',
                    drawerInactiveTintColor: '#636e72'
                    }: theme == 'dark' ? {
                    headerTransparent: true,
                    headerTitleStyle: {opacity: 0},
                    headerTintColor: '#fff',
                    drawerLabelStyle: {marginLeft: -15},
                    drawerActiveBackgroundColor: '#b7c6fb',
                    drawerActiveTintColor: '#000',
                    drawerInactiveTintColor: '#b2bec3'
                    } : {
                    headerTransparent: true,
                    headerTitleStyle: {opacity: 0},
                    headerTintColor: '#000',
                    drawerLabelStyle: {marginLeft: -15},
                    drawerActiveBackgroundColor: '#b7c6fb',
                    drawerActiveTintColor: '#000',
                    drawerInactiveTintColor: '#333349'
                    }

                }
                >
                <Drawer.Screen
                    name = "Scanner"
                    component = {ScannerScreen}
                    options = {{
                    drawerIcon: ({color}) => (
                        <FontAwesome5 name="camera" size={24} color={color} />
                        )
                    }}
                />
                <Drawer.Screen
                    name = "Browse"
                    component = {BrowseScreen}
                    options = {{
                    drawerIcon: ({color}) => (
                        <FontAwesome5 name="search" size={24} color={color} />
                    )
                    }}
                />
                <Drawer.Screen
                    name = "Options"
                    component = {OptionsScreen}
                    options = {{
                    drawerIcon: ({color}) => (
                        <FontAwesome5 name="cog" size={24} color={color}/>
                    )
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}