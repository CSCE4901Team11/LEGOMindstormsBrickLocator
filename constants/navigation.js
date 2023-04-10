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
        <NavigationContainer accessible={true} accessibilityLabel="Navigation Bar" accessibilityRole="menubar">
            <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}
                initialRouteName = "Browse" 
                screenOptions = { {
                    headerTransparent: true,
                    headerTitle: "",
                    drawerLabelStyle: {marginLeft: -15},
                    drawerActiveBackgroundColor: colors.sideMenuHighlight, // changes highlight color
                    drawerActiveTintColor: colors.sideMenuTextColorActive, // changes text color of active tab
                    drawerInactiveTintColor: colors.sideMenuTextColorInactive, //changes color of icons and words
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