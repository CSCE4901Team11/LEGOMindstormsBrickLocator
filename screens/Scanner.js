import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, TouchableOpacity } from 'react-native';
import styles from './Scanner.styles';
import React, { useContext } from 'react';
import { Camera } from 'expo-camera';
import { ThemeContext } from '../constants/context';
import { useNavigation } from '@react-navigation/native';
import Themes from '../constants/ThemeColors';
import AsyncStorage from '@react-native-async-storage/async-storage';


function ScannerScreen() {
  const [startCamera,setStartCamera] = React.useState(false)

  const __startCamera = async () => {
    const {status} = await Camera.requestCameraPermissionsAsync()
    if (status === 'granted') {
      // start the camera
      setStartCamera(true)
    } else {
      Alert.alert('Access denied')
    }
  }


  const navigation = useNavigation();

  const currentTheme = useContext (ThemeContext);
  const theme = currentTheme.state.theme;

  const colors = Themes[theme]
  console.log (colors)

  const getPieceName = async () => {
    try {
      const pieceName = await AsyncStorage.getItem('@current_piece')
      if (pieceName !== null){
        console.log(pieceName)
      }
    }
    catch (error) {
      console.log('cannot get piece name')
    }
  }
  
  return (
    <View style={[styles.container, {backgroundColor: colors.background}] }>
     {/* <View style={theme == 'light' ? styles.container_light : theme == 'dark' ? styles.container_dark : theme == 'blue' ? styles.container_blue : theme == 'red' ? styles.container_red : theme == 'purple' ? styles.container_purple : theme == 'yellow' ? styles.container_yellow : styles.container_light}> */}
      <Text style={[styles.text, {color: colors.textColor}]}>LEGO Mindstorms Brick Locator</Text>
      {/* <Pressable style={styles.button}>
        {({ pressed }) => (
          <Text style={styles.button}>
            {pressed ? 'Bruh' : 'Press Me'}
          </Text>
        )}
      </Pressable> */}
      {/* <Text style = {styles.text}>{getPieceName}</Text> */}
        <TouchableOpacity
            onPress={() => navigation.navigate('Browse')}
            style={styles.button}
        >
          <Text style={styles.button}>Select Piece</Text>
        </TouchableOpacity>
      
      {startCamera ? (
        <Camera
          style={styles.camera_window}
          ref={(r) => {
            camera = r
          }}
        ></Camera>
      ) : (

          <TouchableOpacity
            onPress={__startCamera}
            style={{
              width: 130,
              borderRadius: 4,
              backgroundColor: '#14274e',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 40
            }}
          >
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            >
              Camera
            </Text>
          </TouchableOpacity>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

export default ScannerScreen;