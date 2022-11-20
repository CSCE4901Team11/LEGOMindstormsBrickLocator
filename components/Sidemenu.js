import React, { useState, useContext, useEffect } from 'react'
import { View, Text, Switch } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { FontAwesome5 } from '@expo/vector-icons';
import { ThemeContext } from '../constants/context';
import  styles  from './Sidemenu.styles';
import Themes from '../constants/ThemeColors';
import { set } from 'react-native-reanimated';

const SideMenu = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        if (theme == 'dark')
            setIsEnabled(false);
        else
            setIsEnabled(true)
    }
    
    const currentTheme = useContext (ThemeContext)
    const theme = currentTheme.state.theme
    const colors = Themes[theme]

    if(theme != 'dark' && isEnabled && theme != undefined){
        console.log("------------------------")
        console.log(theme)
        console.log("------------------------")
        setIsEnabled(false)
    }

    const handleThemeChange = ()  => {
        if (theme == 'dark')
            currentTheme.dispatch({ type: "LIGHTMODE" })
        else
            currentTheme.dispatch({ type: "DARKMODE" })
    };
    console.log(currentTheme)


    return (
        <View style={[styles.container, {backgroundColor: colors.sideMenuBackground}] }>
            <DrawerContentScrollView {...props} >
                <Text style={[styles.title, {color: colors.textColor}]}>
                    LEGO Mindstorms Brick Locator
                </Text>
                <DrawerItemList {...props} />
                
            </DrawerContentScrollView>
            <View style = {styles.switch_container}>
                <FontAwesome5 name="cat" size={24} color={theme == 'dark' ? 'rgba(255, 255, 255, .9)' : 'rgba(0,0,0,0.8)'} />
                <Text style={theme == 'light' ? styles.switch_text_light : theme == 'dark' ? styles.switch_text_dark : styles.switch_text_light}>
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