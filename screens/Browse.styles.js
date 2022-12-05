import { StyleSheet } from "react-native";


export default styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop: 85,
    },

    title: {
        fontSize: 35,
    },

    button: {
        padding: 10,
        marginVertical: 15,
        backgroundColor: 'rgba(6, 69, 173, .9)',
        //width: 100,
        alignItems: 'center'
    },

    buttonText: {
        color: 'rgba(255, 255, 255, .9)'
    },

    itemContainer: {
        //padding: 10,
        flex: 1,
        alignItems: 'flex-start',
        display: 'flex',
        width: '100%'
        //flexDirection: 'row',
        // dimension: 100,  
    },

    itemTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    text: {
        fontSize: 18,
        flexWrap: 'wrap',
    },

    listSeparator: { 
        height: 1, 
        backgroundColor: "grey",
        marginHorizontal:10
    },

    image: {
        width: 80,
        height: 80,
        margin: 5,
    },

    itemInfoContainer: {
        flex: 1,
        // alignContent: "center",
        flexWrap: 'wrap',
        flexDirection: 'column',
    },

    list: {
        flex: 1,
    },
});
