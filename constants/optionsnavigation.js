import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

const Stack = createNativeStackNavigator();

export default function OptionsNav () {

    return (
        <Stack.Navigator>
            <Stack.Screen
             name = "Options"
             component = {OptionsScreen}
            />
            
        </Stack.Navigator>
    );
}