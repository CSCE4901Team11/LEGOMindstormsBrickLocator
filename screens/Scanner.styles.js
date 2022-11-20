import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },

    text: {
      fontSize: 40,
      fontWeight: '420',
      textAlign: 'center',
    },

    button: {
        fontSize: 25,
        textAlign: 'center',
        margin: 7,
        color: 'rgba(255, 255, 255, .9)',
        backgroundColor: 'rgba(73, 31, 189, .9)',
        borderRadius: 5,
    },

    highlighter: {
      flex: 1,
      borderRadius: 5,
      borderColor: 'rgba(0,255,0,1)',
      backgroundColor: 'rgba(0,255,0,1)',
      zIndex: 9999,
    },

    indicator: {
      flex: 1,
      borderRadius: 5,
      justifyContent: 'flex-start',
      alignSelf: 'center',
      borderColor: 'black',
      backgroundColor: 'rgba(130,0,0,1)',
      zIndex: 9999,
    },

    camera_window: {
      flex: 1,
      width: "100%",
      height: "100%"
    },

    header: {
      flex: .2,
      width: "100%",
      backgroundColor: 'rgba(0,255,0,.1)',
      zIndex: 9999,
    },

    cameraBody: {
      flex: 1,
      width: "100%",
      backgroundColor: 'rgba(0,0,255,.1)',
      zIndex: 9999,
    },

    footer: {
      flex: .2,
      width: "100%",
      backgroundColor: 'rgba(255,0,0,.1)',
      zIndex: 9999,
    },
});
  