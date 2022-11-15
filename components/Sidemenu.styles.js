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
        backgroundColor: 'rgba(18, 18, 18, 1, .9)',
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    container_blue: {
        flex: 1,
        backgroundColor: 'rgba(137, 207, 240, .9)'
    },

    container_red: {
        flex: 1, 
        backgroundColor: 'rgba(200, 45, 56, .9)',
    },

    container_purple: {
        flex: 1, 
        backgroundColor: 'rgba(130, 7, 197, .9)',
    },

    container_yellow: {
        flex: 1,
        backgroundColor: 'rgba(222, 189, 69, .9)',
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

