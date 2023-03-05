import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ScannerScreen from '../screens/Scanner'
import BrowseScreen from '../screens/Browse'
import SideMenu from '../components/Sidemenu';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { ThemeContext } from '../constants/context';
import OptionsNav from './optionsnavigation';
import Themes from './ThemeColors';

const Drawer = createDrawerNavigator();

export default function Navigation () {

    const currentTheme = useContext (ThemeContext);
    const theme = currentTheme.state.theme;
    const colors = Themes[theme] 

    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}
                initialRouteName = "Browse" 
                screenOptions = { {
                    headerTransparent: true,
                    headerTitleStyle: {opacity: 0},
                    headerTintColor: colors.textColor,
                    drawerLabelStyle: {marginLeft: -15},
                    drawerActiveBackgroundColor: '#b7c6fb',
                    drawerActiveTintColor: 'rgba(0,0,0,0.8)',
                    drawerInactiveTintColor: '#636e72'
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
                    component = {OptionsNav}
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