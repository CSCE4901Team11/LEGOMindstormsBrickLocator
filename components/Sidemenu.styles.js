import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, .9)',
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    title: {
        padding: 15,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 2,
        color: 'rgba(0,0,0,0.8)',
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

