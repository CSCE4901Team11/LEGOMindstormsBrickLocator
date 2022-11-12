import { StyleSheet } from "react-native";


export default styles = StyleSheet.create({
    container_light: {
        marginBottom: 0,
        marginTop: 50,
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop: 100,
    },

    container_dark: {
        marginBottom: 0,
        marginTop: 50,
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: "#121212",
        marginTop: 100,
    },

    container_blue: {
        marginBottom: 0,
        marginTop: 50,
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'flex-start',
        backgroundColor: "#21abcd",
        marginTop: 100,
    },
    
    sub_container: {
        flex: 1, 
        alignItems: 'flex-start', 
        justifyContent: 'flex-start',
        flexDirection: "row",
        paddingTop: 50,
        flexWrap: 'wrap',
    },

    title_light:{
        color: 'rgba(0,0,0,0.8)',
        fontSize: 20,
        fontWeight: 'bold',
    },

    title_dark:{
        color: 'rgba(255, 255, 255, .9)',
        fontSize: 20,
        fontWeight: 'bold',
    },
    
    title_blue:{
        color: 'rgba(255,255,255,1)',
        fontSize: 20,
        fontWeight: 'bold',
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
        fontSize: 6,
        textAlign: 'center',
        margin: 3,
        color: 'rgba(0,0,0,0.8)',
        backgroundColor: 'rgba(189,195,199, .9)',
        borderRadius: 5,
        padding: 10,
        //width: '50%',
    },

    /*button_dark: {
        fontSize: 15,
        textAlign: 'center',
        margin: 7,
        color: 'rgba(255, 255, 255, .9)',
        backgroundColor: 'rgba(75,79, 82, .9)',
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
        textAlign: 'left',
        height: 40,
        margin: 7,
        //borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        //color: 'rgba(0,0,0,0.8)',
        backgroundColor: 'rgba(215,222,226, .9)',
        width: '95%',
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
