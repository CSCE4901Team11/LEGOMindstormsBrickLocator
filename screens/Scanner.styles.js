import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container_light: {
      flex: 1,
     // backgroundColor: '#14A0DB',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 0,
    },

    container_dark: {
      flex: 1,
      backgroundColor: '#121212',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 0,
    },

    container_blue: {
      flex: 1,
      backgroundColor: '#00368c', //'#14A0DB'
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 0,
    },
    
    text_light: {
        fontSize: 40,
        fontWeight: '420',
       // color: 'white',
        textAlign: 'center',
    },

    text_dark: {
      fontSize: 40,
      fontWeight: '420',
      color: 'rgba(255, 255, 255, .9)',
      textAlign: 'center',
    },

    text_blue: {
      fontSize: 40,
      fontWeight: '420',
      color: 'rgba(255,255,255,1)',
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
      width: "100%",
      height: "100%"
    },
});
  