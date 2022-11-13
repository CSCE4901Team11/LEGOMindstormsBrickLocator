import { StyleSheet } from "react-native";
import useThemeColors from "../constants/ThemeColors";

const colors = useThemeColors();

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background, // all color/theme dependent variables would be like this
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 150,
    },

    // all the styles with the _themename would be removed. keeping them for now so the app still works until everything is changed
    container_light: {
      flex: 1,
     // backgroundColor: '#14A0DB',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 150,
    },

    container_dark: {
      flex: 1,
      backgroundColor: '#121212',  // colors.background
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 150,
    },

    container_blue: {
      flex: 1,
      backgroundColor: '#00368c', //'#14A0DB'
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 150,
    },
    
    text: {
      fontSize: 40,
      fontWeight: '420',
      color: colors.textColor,
      textAlign: 'center',
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
      width: "85%",
      marginBottom: 90,
      marginTop: 30
    },
});
  