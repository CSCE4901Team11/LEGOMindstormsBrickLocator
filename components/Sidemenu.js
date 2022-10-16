import React, { useState } from 'react'
import { View, Text, Switch } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { FontAwesome5 } from '@expo/vector-icons';


const SideMenu = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style = {{flex: 1}}>
            <DrawerContentScrollView {...props} >
                <Text 
                    style={{
                        padding: 15,
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginBottom: 2
                    }}
                >
                    LEGO Mindstorms Brick Locator
                </Text>
                <DrawerItemList {...props} />
                
            </DrawerContentScrollView>
            <View style = {{
                alignItems: "center", 
                flexDirection: "row", 
                justifyContent: "flex-start",
                padding: 20,
                marginLeft: 2
                }}
            >
                <FontAwesome5 name="cat" size={24} color="black" />
                <Text
                    style={{
                        marginLeft: 10,
                        marginRight: 15,
                        fontSize: 17,
                        fontWeight: 'bold',
                        fontColor: "grey"
                    }}
                >
                    Dark Mode</Text>
                <Switch // need to actually implement dark mode. just a placeholder
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />  
            </View>     
        </View>
    )
}

export default SideMenu;