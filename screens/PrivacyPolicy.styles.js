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
        backgroundColor: "#121212"
    },

    container_blue: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: "#21abcd",
    },

    text_light: {
        color: 'rgba(0,0,0,0.8)',
        fontSize: 20,
    },

    text_dark: {
        color: "#f76a6a",
        fontSize: 15,
        fontWeight: 'bold',
    },

    text_blue: {
        color: "#141466",
        fontSize: 15,
        fontWeight: 'bold',
    }
});