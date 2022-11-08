import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import PrivacyPolicy from "../screens/PrivacyPolicy";
import AboutUs from "../screens/AboutUs";
import OptionsScreen from "../screens/Options";
import Themes from "../screens/Themes";


const Stack = createNativeStackNavigator();

export default function OptionsNav () {

    return (
        <Stack.Navigator initialRouteName="Options">
            <Stack.Screen
             name = "OptionsScreen"
             component = {OptionsScreen}
            />
            <Stack.Screen
             name = "Themes"
             component = {Themes}
            />
            <Stack.Screen
             name = "AboutUs"
             component = {AboutUs}
            />
            <Stack.Screen
             name = "PrivacyPolicy"
             component = {PrivacyPolicy}
            />
        </Stack.Navigator>
    );
}