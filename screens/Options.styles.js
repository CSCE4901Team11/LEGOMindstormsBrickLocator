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
        backgroundColor: '#21abcd'
    },

    text_light: {
        color: '#fff',
        fontSize: 20,
    },

    text_dark: {
        color: "#f76a6a",
        fontSize: 15,
        fontWeight: 'bold',
    },

    container: {
      flex: 1,
      padding: 10,
      //backgroundColor: "#eaeaea"
    },

    headerText: {
      fontWeight: 'bold',
      fontSize: 35,
      marginTop: 30,
      paddingVertical: 13,
      textAlign: "center",
      padding: 4,
      //flex: 1,
      //padding: 10,
      //borderBottomWidth: StyleSheet.hairlineWidth
    },

    headerTwoText: {
      fontWeight: 'bold',
      marginTop: 300,
      paddingVertical: 10,
      textAlign: 'center',
      fontSize: 20,
      color: 'black'
    },

    headerRow: {
      //padding: 10,
      borderBottomColor: "black",
      borderBottomWidth: StyleSheet.hairlineWidth,
    },

    button: {
      marginTop: 10,
      //paddingVertical: 8,
      borderWidth: 1,
      borderColor: "#20232a",
      borderRadius: 6,
      backgroundColor: "#d2d4d9",
      //color: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    },

});