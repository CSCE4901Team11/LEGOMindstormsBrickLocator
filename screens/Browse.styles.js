import { StyleSheet } from "react-native";


export default styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },

    listContainer: {
        flex: 1,  
        justifyContent: 'center',
        marginTop: 85,
    },

    title: {
        fontSize: 35,
    },

    button: {
        padding: 10,
        marginVertical: 15,
        alignItems: 'center',
    },

    itemContainer: {
        paddingTop: 6,
        flex: 1,
        alignItems: 'flex-start',
        display: 'flex',
        width: '100%',
    },

    itemTitle: {
        fontSize: 23,
        fontWeight: 'bold',
    },

    text: {
        fontSize: 19,
        flexWrap: 'wrap',
    },

    listSeparator: { 
        height: 1, 
        backgroundColor: "grey",
        marginHorizontal:10,
    },

    image: {
        width: 80,
        height: 80,
        margin: 5,
    },

    itemInfoContainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'column',
        padding: 4,
        marginLeft: 5,
    },

    imageAndInfo: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },

    list: {
        flex: 1,  
    },
});
