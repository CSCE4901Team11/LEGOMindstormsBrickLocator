import { StyleSheet } from "react-native";


export default styles = StyleSheet.create({
    container_light: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },

    container_dark: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: "121212"
    },

    text_light: {
        color: "#000",
        fontSize: 20,
    },

    text_dark: {
        color: "#511278",
        fontSize: 15,
        fontWeight: 'bold',
    }
});