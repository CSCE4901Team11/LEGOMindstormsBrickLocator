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
        backgroundColor: 'rbga(18,18,18, 0.9)'
    },

    container_blue: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: 'rgba(33, 171, 205, 0.9)',
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
        color: 'rgba(247, 106, 106, 0.9)',
        fontSize: 15,
        fontWeight: 'bold',
    },

    text_blue: {
        color: 'rgba(20, 20, 102, 0.9)',
        fontSize: 15,
        fontWeight: 'bold',
    },

    text_red: {
        color: 'rgba(0, 0, 0, 0.8)',
        fontSize: 15,
        fontWeight: 'bold',
    },

    text_purple: {
        color: 'rgba(0, 0, 0, 0.8)',
        fontSize: 15,
        fontWeight: 'bold',
    },

    text_yellow: {
        color: 'rbga(29, 29, 29, 0.9)',
        fontSize: 15,
        fontWeight: 'bold',
    },
});