import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, Pressable} from 'react-native';
import Modal from "react-native-modal";
import { ThemeContext } from '../constants/context';
import Themes from '../constants/ThemeColors';
import styles from './Options.styles';

const OptionsScreen = ({ navigation }) => {
 // const [modalVisible, setModalVisible] = useState(false);

 const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const currentTheme = useContext (ThemeContext);
  const theme = currentTheme.state.theme;
  const colors = Themes[theme]

  const blueThemeChange = ()  => {
    currentTheme.dispatch({ type: "BLUEMODE" })
  };

  const redThemeChange = ()  => {
    currentTheme.dispatch({ type: "REDMODE" })
  };

  const purpleThemeChange = ()  => {
    currentTheme.dispatch({ type: "PURPLEMODE" })
  };

  const yellowThemeChange = ()  => {
    currentTheme.dispatch({ type: "YELLOWMODE" })
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

    return (
      <View style={[styles.container, {backgroundColor: colors.background}] }>
        <View style={styles.insideContainer}>
          <View style={styles.headerRow}>
          <Text style={styles.headerText}>Options</Text>  
          </View>
          <View style={styles.button}>
          <Button
            color="#01050d"
            title='Clear User Data'
            onPress={clearUserData}
          />
          </View>
          
           <View style={styles.button}>
          <Button
            color="#01050d"
            title='Blue Mode'
            onPress={ blueThemeChange }
          />
          </View>

          <View style={styles.button}>
          <Button
            color="#01050d"
            title='Red Mode'
            onPress={ redThemeChange }
          />
          </View>

          <View style={styles.button}>
          <Button
            color="#01050d"
            title='Purple Mode'
            onPress={ purpleThemeChange }
          />
          </View>

          <View style={styles.button}>
          <Button
            color="#01050d"
            title='Yellow Mode'
            onPress={ yellowThemeChange }
          />
          </View>
          
        </View>
        <View style={styles.space}>
        <View>
      <Button title="About Us" onPress={toggleModal} color="black" />

      <Modal isVisible={isModalVisible}>
        <View style={{ margin: 0 }}>
          <Text style={{backgroundColor: "white", borderRadius: 20, padding: 35, alignItems: "center", justifyContent: 'space-evenly', shadowOffset: { width: 0, height: 2}, shadowOpacity: 0.25, shadowRadius: 4,elevation: 5}}>The LEGO® Mindstorms® kits are LEGO® kits that help users ages 10 
          and up learn how to build and program robots. These kits come with come with many different pieces and it can be hard 
          for users to differentiate these pieces. The purpose of this project is to create an application that can help users 
          identify and locate any piece in the LEGO® Education Spike™ kits when using the provided organization tray. Creating this 
          application will allow for easier completion of Spike™ robots as well as improve the accessibility of the LEGO® Education 
          Spike™ kits for users who are visually impaired.</Text>
          <Button title="Close" onPress={toggleModal} color="white"/>
        </View>
      </Modal>
    </View>
        <View style={styles.headerTwoText}>
          <Button
              title='Privacy policy'
              onPress={() => navigation. navigate ('PrivacyPolicy')}
            />
          </View>
          </View>
         </View>
    );


  }

export default OptionsScreen;
