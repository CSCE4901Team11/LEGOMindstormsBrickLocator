import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container_light: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, .9)',
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    container_dark: {
        flex: 1,
        backgroundColor: '#121212',
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    container_blue: {
        flex: 1,
        backgroundColor: '#89cff0'
    },

    title_light: {
        padding: 15,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 2,
        color: 'rgba(0,0,0,0.8)',
    },

    title_dark: {
        padding: 15,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 2,
        color: 'rgba(255, 255, 255, .9)',
    },

    switch_container: {
        alignItems: "center", 
        flexDirection: "row", 
        justifyContent: "flex-start",
        padding: 20,
        marginLeft: 2
    },

    switch_text_light: {
        marginLeft: 10,
        marginRight: 15,
        fontSize: 17,
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.8)',
    },

    switch_text_dark: {
        marginLeft: 10,
        marginRight: 15,
        fontSize: 17,
        fontWeight: 'bold',
        color: 'rgba(255, 255, 255, .9)',
    },
});

