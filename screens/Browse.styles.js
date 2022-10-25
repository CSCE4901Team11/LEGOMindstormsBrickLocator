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
        fontSize: 15,
        fontWeight: 'bold',
    },

    text_dark: {
        color: 'rgba(255, 255, 255, .9)',
        fontSize: 15,
        fontWeight: 'bold',
    },

    text_blue: {
        color: 'rgba(255,255,255,1)',
        fontSize: 15,
        fontWeight: 'bold',
    },

    button_light: {
        fontSize: 10,
        textAlign: 'center',
        margin: 7,
        color: 'rgba(255, 255, 255, .9)',
        backgroundColor: "#491FBD",
        borderRadius: 5,
        paddingHorizontal: 5,
    },

    /*button_dark: {
        fontSize: 15,
        textAlign: 'center',
        margin: 7,
        color: 'rgba(255, 255, 255, .9)',
        backgroundColor: "#491FBD",
        borderRadius: 5,
    },

    button_blue: {
        fontSize: 15,
        textAlign: 'center',
        margin: 7,
        color: 'rgba(255, 255, 255, 1)',
        backgroundColor: "#491FBD",
        borderRadius: 5,
    },*/

    tempSearchBar_light: {
        height: 40,
        margin: 7,
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
    },

    tempSearchBar_dark: {
        height: 40,
        margin: 7,
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        color: 'rgba(255, 255, 255, .9)',
        //backgroundColor: '#121212',
    },

    tempSearchBar_blue: {
        height: 40,
        margin: 7,
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        color: 'rgba(255,255,255,1)',
        //backgroundColor: '#00368c',
    },

});