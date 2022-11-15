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

    container_red: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: 'rbga(200, 45, 56, 1)',
        marginTop: 100,
    },

    container_purple: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: 'rbga(130, 7, 197, 1)',
        marginTop: 100,
    },

    container_yellow: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: 'rbga(222, 189, 69, 1)',
        marginTop: 100,
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
    },

    text_red: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold',
    },

    text_purple: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold',
    },

    text_yellow: {
        color: '#1D1D1D',
        fontSize: 15,
        fontWeight: 'bold',
    },
});