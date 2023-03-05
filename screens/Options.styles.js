import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
    },

    insideContainer: {
      flex: 1,
      padding: 10,
    },

    headerText: {
      fontWeight: 'bold',
      fontSize: 35,
      marginTop: 30,
      paddingVertical: 13,
      textAlign: "center",
      padding: 4,
    },

    headerTwoText: {
      paddingVertical: 10,
      textAlign: 'center',
      fontSize: 20,
      color: 'black'
    },

    space: {
      padding: 45,
    },

    button: {
      margin: 15,
      color: 'rgba(0,0,0,0.8)',
      backgroundColor: 'rgba(189,195,199, .9)',
      borderRadius: 5,
      padding: 15,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },

    buttonText: {
      textAlign: 'center',
      padding: 10,
      fontSize: 20,
    },

    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'space-evenly',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    
    buttonClose: {
      backgroundColor: 'rgba(189,195,199, .9)',
      textAlign: "center",
      alignItems: "center",
      textAlign: "center",
      alignItems: "center",
      padding: 10,
      fontSize: 15,
      fontSize: 15,
    },

    modalText: {
      textAlign: "center",
      margin: 0,
    },
});