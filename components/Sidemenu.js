import React, { useState, useContext} from 'react'
import { View, Text, Switch } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { FontAwesome5 } from '@expo/vector-icons';
import { ThemeContext } from '../constants/context';
import  styles  from './Sidemenu.styles';
import Themes from '../constants/ThemeColors';


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

    if(theme != 'dark' && isEnabled && theme != undefined){ // turns off toggle if theme is changed on themes screen to not dark
        setIsEnabled(false)
    }

    if (theme === 'dark' && !isEnabled && theme != undefined){ // turns on toggle if dark button is used on themes screen
        setIsEnabled(true)
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
                <Text accessible={true} accessibilityLabel="App name" accessibilityRole="none" style={[styles.title, {color: colors.textColor}]}>
                    LEGO Mindstorms Brick Locator
                </Text>
                <DrawerItemList {...props} />
                
            </DrawerContentScrollView>
            <View style = {styles.switch_container}>
                <FontAwesome5 name="cat" size={24} style={{color: colors.catColor}} />
            <Text accessible={true} accessibilityLabel="Dark Mode" accessibilityRole="switch" style={[styles.switch_text, {color: colors.textColor}]}>
                    Dark Mode
                </Text>
                <Switch 
                    trackColor={{ false: colors.trackOffColor, true: "#81b0ff" }}
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
