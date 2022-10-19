import React, { useState, useContext } from 'react'
import { View, Text, Switch } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { FontAwesome5 } from '@expo/vector-icons';
import { ThemeContext } from '../constants/context';
import  styles  from './Sidemenu.styles';

const SideMenu = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);

    //const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch = () => {
        if (theme == 'dark')
            setIsEnabled(false);
        else
            setIsEnabled(true)
    }

    const currentTheme = useContext (ThemeContext);
    const theme = currentTheme.state.theme;

    const handleThemeChange = ()  => {
        if (theme == 'dark')
            currentTheme.dispatch({ type: "LIGHTMODE" })
        else
            currentTheme.dispatch({ type: "DARKMODE" })
    };
    console.log(currentTheme)


    return (
        <View style = {theme == 'light' ? styles.container_light : theme == 'dark' ? styles.container_dark : styles.container_blue}>
            <DrawerContentScrollView {...props} >
                <Text style={theme == 'light' ? styles.title_light : styles.title_dark}>
                    LEGO Mindstorms Brick Locator
                </Text>
                <DrawerItemList {...props} />
                
            </DrawerContentScrollView>
            <View style = {styles.switch_container}>
                <FontAwesome5 name="cat" size={24} color={theme == 'light' ? "black" : "white"} />
                <Text style={theme == 'light' ? styles.switch_text_light : styles.switch_text_dark}>
                    Dark Mode
                </Text>
                <Switch 
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#1558c2" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => { handleThemeChange(), toggleSwitch() }}
                    value={isEnabled}
                />  
            </View>     
        </View>
    )
}

export default SideMenu;