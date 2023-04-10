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
        // backgroundColor: 'rgba(6, 69, 173, .9)',
        //width: 100,
        alignItems: 'center'
    },

    // buttonText: {
    //     color: 'rgba(255, 255, 255, .9)',
    // },

    itemContainer: {
        paddingTop: 6,
        flex: 1,
        alignItems: 'flex-start',
        display: 'flex',
        width: '100%',
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        // dimension: 100,  
    },

    itemTitle: {
        fontSize: 23,
        fontWeight: 'bold',
    },

    text: {
        fontSize: 19, // Text still wraps weird
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
        // paddingRight: 10,
    },

    itemInfoContainer: {
        flex: 1,
        // alignContent: "center",
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
