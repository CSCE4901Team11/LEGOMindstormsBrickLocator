import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, TouchableOpacity } from 'react-native';
import styles from './Scanner.styles';
import React, { useContext } from 'react';
import { Camera } from 'expo-camera';
import { ThemeContext } from '../constants/context';
import { useNavigation } from '@react-navigation/native';
import * as tf from '@tensorflow/tfjs';

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

  return (
    <View style={theme == 'light' ? styles.container_light : theme == 'dark' ? styles.container_dark : styles.container_blue}>
      <Text style={theme == 'light' ? styles.text_light : theme == 'dark' ? styles.text_dark : styles.text_blue}>LEGO Mindstorms Brick Locator</Text>
      {/* <Pressable style={styles.button}>
        {({ pressed }) => (
          <Text style={styles.button}>
            {pressed ? 'Bruh' : 'Press Me'}
          </Text>
        )}
      </Pressable> */}

        <TouchableOpacity
            onPress={() => navigation.navigate('Browse')}
            style={styles.button}
        >
          <Text style={styles.button}>Select Piece</Text>
        </TouchableOpacity>
      
        <Tensor />

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

class Tensor extends React.Component {
  state = {
    isTfReady: false
  }

  async componentDidMount() {
    await tf.ready()
    this.setState({ isTfReady: true })
    console.log(this.state.isTfReady)
  }

  render() {
    return (
      <View style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
      }}>
        <Text>
      {this.state.isTfReady ? "Ready" : "Waiting"}
    </Text>
      </View>
    )
  }
}