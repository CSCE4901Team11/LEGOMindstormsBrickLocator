import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import PrivacyPolicy from "../screens/PrivacyPolicy";
import OptionsScreen from "../screens/Options";
import ThemesScreen from "../screens/Themes";

const Stack = createNativeStackNavigator();

export default function OptionsNav () {

    return (
        <Stack.Navigator initialRouteName="OptionsScreen" screenOptions={{headerShown: false}}>
            <Stack.Screen
             name = "OptionsScreen"
             component = {OptionsScreen}
            />
            <Stack.Screen
             name = "Themes"
             component = {ThemesScreen}
            />
            <Stack.Screen
             name = "PrivacyPolicy"
             component = {PrivacyPolicy}
            />
        </Stack.Navigator>
    );
}