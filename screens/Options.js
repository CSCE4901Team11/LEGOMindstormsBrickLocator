import { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, Pressable} from 'react-native';
import Modal from "react-native-modal";
import { ThemeContext } from '../constants/context';
import styles from './Options.styles';

const OptionsScreen = ({ navigation }) => {
 // const [modalVisible, setModalVisible] = useState(false);

 const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const currentTheme = useContext (ThemeContext);
  const theme = currentTheme.state.theme;

  const blueThemeChange = ()  => {
          currentTheme.dispatch({ type: "BLUEMODE" })
  };

    return (
      <View style={ theme == 'light' ? styles.container_light : theme == 'dark' ? styles.container_dark : styles.container_blue }>
        <View style={styles.container}>
          <View style={styles.headerRow}>
          <Text style={styles.headerText}>Options</Text>  
          </View>
          <View style={styles.button}>
          <Button
            color="#01050d"
            title='Clear User Data'
          />
          </View>
           <View style={styles.button}>
          <Button
            color="#01050d"
            title='Blue Mode'
            onPress={ blueThemeChange }
          />
          </View>
        </View>
        <View style={styles.container}>
           <Text style={styles.headerTwoText}>More</Text> 
           <Button
            title='About us'
          />
          <Button
            title='Privacy policy'
          />
           </View>
       
      </View>
    );


  }

  const OptionStyles = StyleSheet.create({
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
 //   paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#d2d4d9",
  //  color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },

});

export default OptionsScreen;