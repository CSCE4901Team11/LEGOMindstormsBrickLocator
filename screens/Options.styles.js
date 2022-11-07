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
        color: 'rgba(0,0,0,0.8)',
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
   // fontWeight: 'bold',
   // marginTop: 300,
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 20,
   // margin: 10,
   // padding: 15,
    //color: 'black'
  },

  space: {
    padding: 45,
  },

  headerRow: {
    //borderBottomColor: "black",
    //borderBottomWidth: StyleSheet.hairlineWidth,
    //padding: 10,
  },

  button: {
    fontSize: 6,
    textAlign: 'center',
    margin: 12,
    color: 'rgba(0,0,0,0.8)',
    backgroundColor: 'rgba(189,195,199, .9)',
    borderRadius: 5,
    padding: 10,
    /*
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#d2d4d9",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
    paddingVertical: 8,
    color: "#20232a",
    */
  },

});