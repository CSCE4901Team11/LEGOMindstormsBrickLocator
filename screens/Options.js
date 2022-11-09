import { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, Modal, Pressable} from 'react-native';
import { ThemeContext } from '../constants/context';
import styles from './Options.styles';

const OptionsScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
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
        <View style={styles.space}>
        <View style={styles.headerTwoText}>
            <View style={styles.centeredView}>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>The LEGO® Mindstorms® kits are LEGO® kits that help users ages 10 and up learn how to build and program robots. These kits come with come with many different pieces and it can be hard for users to differentiate these pieces. The purpose of this project is to create an application that can help users identify and locate any piece in the LEGO® Education Spike™ kits when using the provided organization tray. Creating this application will allow for easier completion of Spike™ robots as well as improve the accessibility of the LEGO® Education Spike™ kits for users who are visually impaired.</Text>
            <Pressable
              style={[styles.button2, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button2, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.headerTwoText}>About Us</Text>
      </Pressable>
    </View>
        </View>
        <View style={styles.headerTwoText}>
          <Pressable style={[styles.button2, styles.buttonOpen]}>
            <Text style={styles.headerTwoText}>Privacy Policy</Text>
          </Pressable>
          </View>
          </View>
         </View>
    );


  }


export default OptionsScreen;