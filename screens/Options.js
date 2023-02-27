import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, Pressable, TouchableOpacity} from 'react-native';
import Modal from "react-native-modal";
import { ThemeContext } from '../constants/context';
import Themes from '../constants/ThemeColors';
import styles from './Options.styles';

const OptionsScreen = ({ navigation }) => {

  const currentTheme = useContext (ThemeContext);
  const theme = currentTheme.state.theme;
  const colors = Themes[theme]
  
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const clearUserData = async () => {
    let keys = []
    try {
      keys = await AsyncStorage.getAllKeys()
      await AsyncStorage.multiRemove(keys)
    }
    catch(error) {
      console.log(error)
    }
    console.log('user data cleared')
  }
    const ConfirmationAlert = () =>
    Alert.alert(
      "Are your sure?",
      "Are you sure you want to clear user data?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
        },
        {text: "Yes", onPress: (clearUserData)}
      ]
    );

  

    return (
      <View style={[styles.container, {backgroundColor: colors.background} ]}>
        <View style={styles.insideContainer}>
          <View style={styles.headerRow}>
          <Text accessible={true} accessibilityLabel="header" style={[styles.headerText, {color: colors.textColor}]}>Options</Text>  
          </View>
          

          <TouchableOpacity accessible={true} accessibilityLabel="Clear UserData" accessibilityRole="Button" onPress={ConfirmationAlert} style={styles.button}>
        <Text style={styles.buttonText}>Clear User Data</Text>
      </TouchableOpacity>

    

        <TouchableOpacity accessible={true} accessibilityLabel="Themes" accessibilityRole="Button" onPress={() => navigation. navigate ('Themes')} style={styles.button}>
        <Text style={styles.buttonText}>Themes</Text>
      </TouchableOpacity>
          
        </View>
        <View style={styles.space}>

        <View>

     <TouchableOpacity accessible={true} accessibilityLabel="About Us" accessibilityRole="none" onPress={toggleModal}>
        <Text style={[styles.buttonText, {color: colors.textColor}]}>About Us</Text>
      </TouchableOpacity>

      <Modal isVisible={isModalVisible}>
        <View style={{ margin: 0 }}>
          <Text style={{backgroundColor: "white", borderRadius: 20, padding: 35, alignItems: "center", 
          justifyContent: 'space-evenly', shadowOffset: { width: 0, height: 2}, shadowOpacity: 0.25, 
          shadowRadius: 4,elevation: 5}}>
          The LEGO® Mindstorms® kits are LEGO® kits that help users ages 10 
          and up learn how to build and program robots. These kits come with come with many different pieces and it can be hard 
          for users to differentiate these pieces. The purpose of this project is to create an application that can help users 
          identify and locate any piece in the LEGO® Education Spike™ kits when using the provided organization tray. Creating this 
          application will allow for easier completion of Spike™ robots as well as improve the accessibility of the LEGO® Education 
          Spike™ kits for users who are visually impaired.</Text>

          <TouchableOpacity onPress={toggleModal}>
        <Text style={styles.buttonClose} color="#e8e4e3">Close</Text>
      </TouchableOpacity>
        </View>
      </Modal>
    </View>

        <View style={styles.headerTwoText}>

      <TouchableOpacity accessible={true} accessibilityLabel="Privacy Policy" accessibilityRole="Button" onPress={() => navigation. navigate ('PrivacyPolicy')} >
        <Text style={[styles.buttonText,{color: colors.textColor}]}>Privacy Policy</Text>
      </TouchableOpacity>
      
          </View>
          </View>
         </View>
    );


  }

export default OptionsScreen;
