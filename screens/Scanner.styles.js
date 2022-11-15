import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 150,
    },

    text: {
      fontSize: 40,
      fontWeight: '420',
     // color: colors.textColor,
      textAlign: 'center',
    },

    button: {
        fontSize: 25,
        textAlign: 'center',
        margin: 7,
        color: 'rgba(255, 255, 255, .9)',
        backgroundColor: "#491FBD",
        borderRadius: 5,
    },

    camera_window: {
      flex: 1,
      width: "85%",
      marginBottom: 90,
      marginTop: 30
    },
});
  